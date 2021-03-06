/* global window */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import api from 'lib/api'; // eslint-disable-line

/**
 * This component provides the user interface for logging in with a one-time password
 * (OTP) for a user.
 */
class Verify extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      isSendingCode: false,
      error: props.error
    };

    // Note: deliberately React 15 compatible ref syntax for SS 4.0-4.3 support
    this.codeInput = null;
    this.setCodeInput = element => {
      this.codeInput = element;
    };

    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleInputKeyUp = this.handleInputKeyUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resendCode = this.resendCode.bind(this);
  }

  /**
   * Automatically set the focus to the code input field when the component is rendered
   */
  componentDidMount() {
    if (this.codeInput) {
      this.codeInput.focus();
    }
  }

  resendCode() {
    this.setState({
      isSendingCode: true
    });
    api('mfa/otp/resendcode').then(response => response.json().then(result => {
      this.setState({
        isSendingCode: false,
        error: !result.sent && result.error ? result.error : null
      });
    }));
  }

  /**
   * Updates the code in the state when changing the input field
   *
   * @param {object} event
   */
  handleChangeCode(event) {
    this.setState({
      code: event.target.value,
    });
  }

  /**
   * Track enter key presses and submit the form if the field is valid
   *
   * @param {object} event
   */
  handleInputKeyUp(event) {
    if (this.canSubmit() && event.keyCode === 13) {
      this.handleSubmit();
    }
  }

  /**
   * Delegate the completion of verification/registration to the handler passed in as a prop. The
   * MFA module will provide this as an API request to the TOTP backend handler's register() or
   * verify() method.
   */
  handleSubmit() {
    this.props.onCompleteVerification({ code: this.state.code });
  }

  /**
   * Determines whether the form can be submitted. This is true when on the "validate code"
   * screen and an input code of 6 chars is entered
   *
   * @returns {boolean}
   */
  canSubmit() {
    return this.state.code.length === this.props.codeLength;
  }

  /**
   * Renders an action button menu with a Next and Back button, using a different handler for
   * the click of each button depending on which view we're in.
   *
   * @returns {HTMLElement}
   */
  renderActionsMenu() {
    const { moreOptionsControl } = this.props;
    const { isSendingCode } = this.state;
    const { ss: { i18n } } = window;

    const isNextDisabled = !this.canSubmit();

    return (
      <ul className="mfa-action-list">
        <li className="mfa-action-list__item">
          <button
            type="button"
            className="btn btn-primary"
            disabled={isNextDisabled}
            onClick={this.handleSubmit}
          >
            { i18n._t('OTPAuthenticatorRegister.NEXT', 'Next') }
          </button>
        </li>
        <li className="mfa-action-list__item">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={this.resendCode}
            disabled={isSendingCode}
          >
            { isSendingCode && (<span><span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" /><span>&nbsp;</span></span>)}
            { i18n._t('OTPAuthenticatorVerify.RESEND', 'Resend code') }
          </button>
        </li>
        {moreOptionsControl && (
          <li className="mfa-action-list__item">
            { moreOptionsControl }
          </li>
        )}
      </ul>
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
        {supportText || i18n._t('OTPAuthenticatorVerify.HOW_TO_USE', 'How to use one-time passwords.')}
      </a>
    );
  }

  renderVerifyForm() {
    const { code, error } = this.state;
    const { codeLength, method, obfuscatedTo } = this.props;
    const { ss: { i18n } } = window;

    const formGroupClasses = classnames('mfa-totp__validate-left', {
      'has-error': !!error,
    });

    return (
      <div className="mfa-totp__validate-code">
        <div className={formGroupClasses}>
          <p>{
            i18n._t(
              'OTPAuthenticatorVerify.VERIFY',
              'Use the code that was sent to'
            )
          }{<b>&nbsp;{obfuscatedTo}</b>}{
            this.renderSupportLink()
          }</p>
          <label htmlFor="totp-code" className="control-label">
            {
              i18n.inject(
                i18n._t('OTPAuthenticatorVerify.ENTER_CODE', 'Enter {length}-digit code'),
                { length: codeLength }
              )
            }
          </label>
          <input
            id="totp-code"
            name="code"
            type="text"
            autoComplete="off"
            maxLength={codeLength}
            className="mfa-totp__code text form-control input-lg"
            value={code}
            ref={this.setCodeInput}
            onChange={this.handleChangeCode}
            onKeyUp={this.handleInputKeyUp}
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
    );
  }

  render() {
    return (
      <div className="mfa-totp__container mfa-totp__container--verify">
        { this.renderVerifyForm() }
        { this.renderActionsMenu() }
      </div>
    );
  }
}

Verify.propTypes = {
  codeLength: PropTypes.number,
  error: PropTypes.string,
  onCompleteVerification: PropTypes.func.isRequired,
  method: PropTypes.object.isRequired,
};

Verify.defaultProps = {
  codeLength: 6,
  error: null,
};

Verify.displayName = 'OTPAuthenticatorVerify';

export default Verify;
