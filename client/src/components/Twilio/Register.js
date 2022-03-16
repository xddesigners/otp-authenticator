/* global window */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'lib/Injector'; // eslint-disable-line
import PhoneInput from 'react-phone-input-2';

const VIEWS = {
  SET_PHONE: 'SET_PHONE',
  VALIDATE: 'VALIDATE_CODE',
};

/**
 * This component provides the user interface for registering one-time time-based passwords (TOTP)
 * with a user. cc
 */
class Register extends Component {
  constructor(props) {
    super(props);

    let error = props.error;
    // Set the view to validate code or set phone
    let view = VIEWS.SET_PHONE;
    if ((error && error === VIEWS.VALIDATE) || props.phone) {
      view = VIEWS.VALIDATE;
      window.obfuscatedPhone = props.phone;
      error = null;
    }

    this.state = {
      country: props.defaultCountry,
      phone: '',
      view,
      error,
    };

    this.phoneInput = null;
    this.setPhoneInput = element => {
      this.phoneInput = element;
    };

    this.handleBack = this.handleBack.bind(this);
    this.handleBackToScan = this.handleBackToScan.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
  }

  componentDidMount() {
    if (this.phoneInput) {
      this.phoneInput.focus();
    }
  }

  handleChangePhone(value, country, e, formattedValue) {
    // console.log('value', value, 'country', country, 'e', e, 'formattedValue', formattedValue);
    this.setState({
      phone: formattedValue,
      country: country.countryCode
    });

    // Store obfuscatedPhone in the window to provide feedback for the verify view
    window.obfuscatedPhone = this.obfuscatePhone(formattedValue);
  }

  obfuscatePhone(phone) {
      return `${phone.substr(0, 5).trim()} ****** ${phone.substr(-2).trim()}`;
  }

  /**
   * Send the user back to the "select method" screen
   */
  handleBack() {
    this.props.onBack();
  }

  /**
   * Send the user back to the "scan QR code" screen
   */
  handleBackToScan() {
    this.setState({
      view: VIEWS.SET_PHONE,
      error: null,
    });
  }

  /**
   * After user has scanned the QR code, handle the transition to the verify screen
   */
  handleNext() {
    const { phone, country } = this.state;
    this.props.onCompleteRegistration({ phone, country });
  }

  /**
   * Renders an action button menu with a Next and Back button, using a different handler for
   * the click of each button depending on which view we're in.
   *
   * @returns {HTMLElement}
   */
  renderActionsMenu() {
    const { phone } = this.state;
    const { ss: { i18n } } = window;

    return (
      <ul className="mfa-action-list">
        <li className="mfa-action-list__item">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNext}
            disabled={!phone}
          >
            { i18n._t('TwilioRegister.NEXT', 'Next') }
          </button>
        </li>
        <li className="mfa-action-list__item">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleBack}
          >
            { i18n._t('TwilioRegister.BACK', 'Back') }
          </button>
        </li>
      </ul>
    );
  }

  /**
   * Handles rendering of errors returned from the backend API requests, e.g.
   * your session has timed out.
   *
   * @returns {HTMLElement}
   */
  renderErrorScreen() {
    const { errors } = this.props;

    if (!errors.length) {
      return null;
    }

    return (
      <div className="mfa-totp__errors">
        {errors.join(', ')}
      </div>
    );
  }

  /**
   * Renders the screen to scan a QR code with an authenticator app.
   *
   * @returns {HTMLElement}
   */
  renderScanCodeScreen() {
    const { view, phone, error, country } = this.state;
    const { method } = this.props;
    const { ss: { i18n } } = window;

    if (view !== VIEWS.SET_PHONE) {
      return null;
    }

    return (
      <div>
        <div className="mfa-totp__scan">
          <p>{ i18n._t(
            'TwilioRegister.INTRO',
            'Register the mobile phone number to use for authentication.'
          ) }{ this.renderSupportLink() }</p>

          <div className="mfa-totp__scan-code">
            <div className="mfa-totp__scan-left">
              <label htmlFor="phone" className="control-label">phone</label>
              <PhoneInput
                country={country}
                value={phone}
                ref={this.setCodeInput}
                onChange={this.handleChangePhone}
              />
              {error && <div className="help-block">{error}</div>}
            </div>

            {method.thumbnail && (
              <div className="mfa-totp__validate-right">
                <img
                  src={method.thumbnail}
                  alt={method.name}
                  className="mfa-totp__validate-img"
                />
              </div>
            )}

          </div>
        </div>
        { this.renderActionsMenu() }
      </div>
    );
  }

  /**
   * If there is a configured support link, will render a link to the TOTP authenticator's
   * support documentation (e.g. userhelp).
   *
   * @returns {HTMLElement}
   */
  renderSupportLink() {
    const { method: { supportLink, supportText } } = this.props;
    const { ss: { i18n } } = window;

    if (!supportLink) {
      return null;
    }

    return (
      <a href={supportLink} target="_blank" rel="noopener noreferrer">
        {supportText || i18n._t('TwilioRegister.HOW_TO_USE', 'How to use authenticator apps.')}
      </a>
    );
  }

  /**
   * The back button for the verification screen should send you back to the register screen
   *
   * @return HTMLElement|null
   */
  renderBackButtonForVerify() {
    const { ss: { i18n } } = window;

    return (
      <button
        type="button"
        className="mfa-actions__action mfa-actions__action--back btn btn-secondary"
        onClick={this.handleBackToScan}
      >
        { i18n._t('TwilioRegister.BACK', 'Back') }
      </button>
    );
  }

  /**
   * Renders the screen to input and validate the TOTP code, after having registered it via QR
   * code with an authenticator app.
   *
   * @returns {HTMLElement}
   */
  renderValidateCodeScreen() {
    const { error, view } = this.state;
    const { TwilioVerifyComponent, onCompleteRegistration, errors } = this.props;

    if (view !== VIEWS.VALIDATE || errors.length) {
      return null;
    }

    // todo pass phone to verify screen,
    // phone value gets reset on screen switch

    const verifyProps = {
      ...this.props,
      // Override the error prop to come from the state instead of props
      error,
      phone: window.obfuscatedPhone,
      moreOptionsControl: this.renderBackButtonForVerify(),
      // Renaming registration callback so it fits in the Verify context
      onCompleteVerification: onCompleteRegistration,
      onCompleteRegistration: null,
    };

    return <TwilioVerifyComponent {...verifyProps} />;
  }

  render() {
    return (
      <div className="mfa-totp__container mfa-totp__container--register">
        { this.renderErrorScreen() }
        { this.renderScanCodeScreen() }
        { this.renderValidateCodeScreen() }
      </div>
    );
  }
}

Register.propTypes = {
  code: PropTypes.string.isRequired,
  onBack: PropTypes.func.isRequired,
  onCompleteRegistration: PropTypes.func.isRequired,
  errors: PropTypes.arrayOf(PropTypes.string),
  method: PropTypes.object.isRequired,
  uri: PropTypes.string.isRequired,
  TwilioVerifyComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

Register.defaultProps = {
  code: '',
  errors: [],
};

Register.displayName = 'TwilioRegister';

export { Register as Component };

export default inject(
  ['TwilioVerify'],
  (TwilioVerifyComponent) => ({
    TwilioVerifyComponent,
  }),
  () => 'MFA.Register'
)(Register);
