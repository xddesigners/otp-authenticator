/* global window */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { inject } from 'lib/Injector'; // eslint-disable-line
import PhoneInput from 'react-phone-input-2';
import api from 'lib/api'; // eslint-disable-line

const VIEWS = {
  SET_TO: 'SET_TO',
  VALIDATE: 'VALIDATE_CODE',
};

/**
 * This component provides the user interface for registering one-time passwords (OTP)
 * with a user. cc
 */
class Register extends Component {
  constructor(props) {
    super(props);

    const { error, obfuscatedTo } = props;

    // Set the view to validate code or set sendTo addr
    const view = obfuscatedTo ? VIEWS.VALIDATE : VIEWS.SET_TO;

    this.state = {
      obfuscatedTo,
      sendTo: '',
      view,
      error,
    };

    this.sendToInput = null;
    this.setSendToInput = element => {
      this.sendToInput = element;
    };

    this.handleBack = this.handleBack.bind(this);
    this.handleBackToScan = this.handleBackToScan.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    this.handleChangePhoneField = this.handleChangePhoneField.bind(this);
    this.handleChangeSendTo = this.handleChangeSendTo.bind(this);
  }

  componentDidMount() {
    if (this.sendToInput) {
      this.sendToInput.focus();
    }
  }

  handleChangeTextField(e) {
    const value = e.target.value;
    this.handleChangeSendTo(value);
  }

  handleChangePhoneField(value, country) {
    this.setState({
      additional: {
        region: country.countryCode
      }
    });

    this.handleChangeSendTo(value);
  }

  handleChangeSendTo(value) {
    const { fieldValidate, fieldLabel } = this.props;
    const { ss: { i18n } } = window;

    const regex = new RegExp(fieldValidate);
    const result = regex.test(value);
    const error = i18n.inject(
      i18n._t('OTPAuthenticatorVerify.ERROR_FIELD', 'Invalid {field} value'),
      { field: fieldLabel.toLowerCase() }
    );

    if (!result) {
      this.setState({
        error,
        sendTo: value
      });
    } else {
      this.setState({
        error: null,
        sendTo: value
      });
    }
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
      view: VIEWS.SET_TO,
      error: null,
    });
  }

  /**
   * After user has scanned the QR code, handle the transition to the verify screen
   */
  handleNext() {
    const { sendTo, additional } = this.state;
    const body = JSON.stringify({ sendTo, additional });
    api('mfa/otp/registerto', 'POST', body).then(response => response.json().then(result => {
      const { error, obfuscatedTo, view } = result;
      if (error && error.length) {
        this.setState({
          error
        });
      } else {
        this.setState({
          view,
          obfuscatedTo,
          error: null
        });
      }
    }));
  }

  /**
   * Renders an action button menu with a Next and Back button, using a different handler for
   * the click of each button depending on which view we're in.
   *
   * @returns {HTMLElement}
   */
  renderActionsMenu() {
    const { sendTo, error } = this.state;
    const { ss: { i18n } } = window;

    return (
      <ul className="mfa-action-list">
        <li className="mfa-action-list__item">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNext}
            disabled={!sendTo || error}
          >
            { i18n._t('OTPAuthenticatorRegister.NEXT', 'Next') }
          </button>
        </li>
        <li className="mfa-action-list__item">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.handleBack}
          >
            { i18n._t('OTPAuthenticatorRegister.BACK', 'Back') }
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

  renderField() {
    const { error, sendTo } = this.state;
    const { fieldType, fieldLabel } = this.props;
    const { ss: { i18n } } = window;
    const country = i18n.currentLocale.split('_')[0];

    return (
      <div className="field">
        <label htmlFor="sendTo" className="control-label">{ fieldLabel }</label>

        { fieldType === 'email' && (
          <input
            className="text"
            value={sendTo}
            ref={this.setSendToInput}
            onChange={this.handleChangeTextField}
            type="email"
          />
        )}

        { fieldType === 'phone' && (
          <PhoneInput
            country={country}
            value={sendTo}
            // ref={this.setSendToInput}
            onChange={this.handleChangePhoneField}
            inputProps={{
              name: 'phone',
              required: true,
              autoFocus: true
            }}
          />
        )}

        { // fallback to text
          (fieldType !== 'email' && fieldType !== 'phone') && (
          <input
            className="text"
            value={sendTo}
            ref={this.setSendToInput}
            onChange={this.handleChangeTextField}
            type="text"
          />
        )}

        { error && <div className="help-block">{error}</div> }
      </div>
    );
  }

  /**
   * Renders the screen to scan a QR code with an authenticator app.
   *
   * @returns {HTMLElement}
   */
  renderScanCodeScreen() {
    const { view } = this.state;
    const { method, fieldLabel } = this.props;
    const { ss: { i18n } } = window;

    if (view !== VIEWS.SET_TO) {
      return null;
    }

    return (
      <div>
        <div className="mfa-totp__scan">
          <p>{i18n.inject(
            i18n._t(
              'OTPAuthenticatorRegister.INTRO',
              'Register the {label} to use for authentication.'
            ),
            { label: fieldLabel }
          )}{ this.renderSupportLink() }</p>

          <div className="mfa-totp__scan-code">
            <div className="mfa-totp__scan-left">
              { this.renderField() }
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
        {supportText || i18n._t('OTPAuthenticatorRegister.HOW_TO_USE', 'How to use one-time passwords.')}
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
        { i18n._t('OTPAuthenticatorRegister.BACK', 'Back') }
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
    const { error, view, obfuscatedTo } = this.state;
    const { OTPAuthenticatorVerifyComponent, onCompleteRegistration, errors } = this.props;

    if (view !== VIEWS.VALIDATE || errors.length) {
      return null;
    }

    const verifyProps = {
      ...this.props,
      // Override the error prop to come from the state instead of props
      error,
      obfuscatedTo,
      moreOptionsControl: this.renderBackButtonForVerify(),
      // Renaming registration callback so it fits in the Verify context
      onCompleteVerification: onCompleteRegistration,
      onCompleteRegistration: null,
    };

    return <OTPAuthenticatorVerifyComponent {...verifyProps} />;
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
  OTPAuthenticatorVerifyComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};

Register.defaultProps = {
  code: '',
  errors: [],
};

Register.displayName = 'OTPAuthenticatorRegister';

export { Register as Component };

export default inject(
  ['OTPAuthenticatorVerify'],
  (OTPAuthenticatorVerifyComponent) => ({
    OTPAuthenticatorVerifyComponent,
  }),
  () => 'MFA.Register'
)(Register);
