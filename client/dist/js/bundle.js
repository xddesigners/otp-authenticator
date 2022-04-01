/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/bundles/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/boot/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _registerComponents = __webpack_require__("./client/src/boot/registerComponents.js");

var _registerComponents2 = _interopRequireDefault(_registerComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.document.addEventListener('DOMContentLoaded', function () {
  (0, _registerComponents2.default)();
});

/***/ }),

/***/ "./client/src/boot/registerComponents.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Injector = __webpack_require__(0);

var _Injector2 = _interopRequireDefault(_Injector);

var _Verify = __webpack_require__("./client/src/components/OTPAuthenticator/Verify.js");

var _Verify2 = _interopRequireDefault(_Verify);

var _Register = __webpack_require__("./client/src/components/OTPAuthenticator/Register.js");

var _Register2 = _interopRequireDefault(_Register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  _Injector2.default.component.registerMany({
    'OTPAuthenticatorRegister': _Register2.default,
    'OTPAuthenticatorVerify': _Verify2.default
  });
};

/***/ }),

/***/ "./client/src/bundles/bundle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("./client/src/boot/index.js");

/***/ }),

/***/ "./client/src/components/OTPAuthenticator/Register.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Component = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Injector = __webpack_require__(0);

var _reactPhoneInput = __webpack_require__("./node_modules/react-phone-input-2/lib/lib.js");

var _reactPhoneInput2 = _interopRequireDefault(_reactPhoneInput);

var _api = __webpack_require__("./client/src/lib/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VIEWS = {
  SET_TO: 'SET_TO',
  VALIDATE: 'VALIDATE_CODE'
};

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    var error = props.error,
        obfuscatedTo = props.obfuscatedTo;

    var view = obfuscatedTo ? VIEWS.VALIDATE : VIEWS.SET_TO;

    _this.state = {
      obfuscatedTo: obfuscatedTo,
      sendTo: '',
      view: view,
      error: error
    };

    _this.sendToInput = null;
    _this.setSendToInput = function (element) {
      _this.sendToInput = element;
    };

    _this.handleBack = _this.handleBack.bind(_this);
    _this.handleBackToScan = _this.handleBackToScan.bind(_this);
    _this.handleNext = _this.handleNext.bind(_this);
    _this.handleChangeSendTo = _this.handleChangeSendTo.bind(_this);
    return _this;
  }

  _createClass(Register, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.sendToInput) {
        this.sendToInput.focus();
      }
    }
  }, {
    key: 'handleChangeSendTo',
    value: function handleChangeSendTo(e) {
      var _props = this.props,
          fieldValidate = _props.fieldValidate,
          fieldLabel = _props.fieldLabel;
      var _window = window,
          i18n = _window.ss.i18n;


      var value = e.target.value;
      var regex = new RegExp(fieldValidate);

      var result = regex.test(value);
      var error = i18n.inject(i18n._t('OTPAuthenticatorVerify.ERROR_FIELD', 'Invalid {field} value'), { field: fieldLabel.toLowerCase() });

      if (!result) {
        this.setState({
          error: error,
          sendTo: value
        });
      } else {
        this.setState({
          error: null,
          sendTo: value
        });
      }
    }
  }, {
    key: 'handleBack',
    value: function handleBack() {
      this.props.onBack();
    }
  }, {
    key: 'handleBackToScan',
    value: function handleBackToScan() {
      this.setState({
        view: VIEWS.SET_TO,
        error: null
      });
    }
  }, {
    key: 'handleNext',
    value: function handleNext() {
      var _this2 = this;

      var sendTo = this.state.sendTo;

      var body = JSON.stringify({ sendTo: sendTo });

      (0, _api2.default)('mfa/otp/registerto', 'POST', body).then(function (response) {
        return response.json().then(function (result) {
          var error = result.error,
              obfuscatedTo = result.obfuscatedTo,
              view = result.view;

          if (error && error.length) {
            _this2.setState({
              error: error
            });
          } else {
            _this2.setState({
              view: view,
              obfuscatedTo: obfuscatedTo,
              error: null
            });
          }
        });
      });
    }
  }, {
    key: 'renderActionsMenu',
    value: function renderActionsMenu() {
      var sendTo = this.state.sendTo;
      var _window2 = window,
          i18n = _window2.ss.i18n;


      return _react2.default.createElement(
        'ul',
        { className: 'mfa-action-list' },
        _react2.default.createElement(
          'li',
          { className: 'mfa-action-list__item' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-primary',
              onClick: this.handleNext,
              disabled: !sendTo
            },
            i18n._t('OTPAuthenticatorRegister.NEXT', 'Next')
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'mfa-action-list__item' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-secondary',
              onClick: this.handleBack
            },
            i18n._t('OTPAuthenticatorRegister.BACK', 'Back')
          )
        )
      );
    }
  }, {
    key: 'renderErrorScreen',
    value: function renderErrorScreen() {
      var errors = this.props.errors;


      if (!errors.length) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: 'mfa-totp__errors' },
        errors.join(', ')
      );
    }
  }, {
    key: 'renderField',
    value: function renderField() {
      var _state = this.state,
          error = _state.error,
          sendTo = _state.sendTo;
      var _props2 = this.props,
          fieldType = _props2.fieldType,
          fieldLabel = _props2.fieldLabel;


      return _react2.default.createElement(
        'div',
        { className: 'field' },
        _react2.default.createElement(
          'label',
          { htmlFor: 'sendTo', className: 'control-label' },
          fieldLabel
        ),
        fieldType === 'email' && _react2.default.createElement('input', {
          className: 'text',
          value: sendTo,
          ref: this.setSendToInput,
          onChange: this.handleChangeSendTo,
          type: 'email'
        }),
        fieldType === 'phone' && _react2.default.createElement(_reactPhoneInput2.default, {
          value: sendTo,

          onChange: this.handleChangeSendTo
        }),
        fieldType !== 'email' && fieldType !== 'phone' && _react2.default.createElement('input', {
          className: 'text',
          value: sendTo,
          ref: this.setSendToInput,
          onChange: this.handleChangeSendTo,
          type: 'text'
        }),
        error && _react2.default.createElement(
          'div',
          { className: 'help-block' },
          error
        )
      );
    }
  }, {
    key: 'renderScanCodeScreen',
    value: function renderScanCodeScreen() {
      var view = this.state.view;
      var _props3 = this.props,
          method = _props3.method,
          fieldLabel = _props3.fieldLabel;
      var _window3 = window,
          i18n = _window3.ss.i18n;


      if (view !== VIEWS.SET_TO) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'mfa-totp__scan' },
          _react2.default.createElement(
            'p',
            null,
            i18n.inject(i18n._t('OTPAuthenticatorRegister.INTRO', 'Register the {label} to use for authentication.'), { label: fieldLabel }),
            this.renderSupportLink()
          ),
          _react2.default.createElement(
            'div',
            { className: 'mfa-totp__scan-code' },
            _react2.default.createElement(
              'div',
              { className: 'mfa-totp__scan-left' },
              this.renderField()
            ),
            method.thumbnail && _react2.default.createElement(
              'div',
              { className: 'mfa-totp__validate-right' },
              _react2.default.createElement('img', {
                src: method.thumbnail,
                alt: method.name,
                className: 'mfa-totp__validate-img'
              })
            )
          )
        ),
        this.renderActionsMenu()
      );
    }
  }, {
    key: 'renderSupportLink',
    value: function renderSupportLink() {
      var _props$method = this.props.method,
          supportLink = _props$method.supportLink,
          supportText = _props$method.supportText;
      var _window4 = window,
          i18n = _window4.ss.i18n;


      if (!supportLink) {
        return null;
      }

      return _react2.default.createElement(
        'a',
        { href: supportLink, target: '_blank', rel: 'noopener noreferrer' },
        supportText || i18n._t('OTPAuthenticatorRegister.HOW_TO_USE', 'How to use authenticator apps.')
      );
    }
  }, {
    key: 'renderBackButtonForVerify',
    value: function renderBackButtonForVerify() {
      var _window5 = window,
          i18n = _window5.ss.i18n;


      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          className: 'mfa-actions__action mfa-actions__action--back btn btn-secondary',
          onClick: this.handleBackToScan
        },
        i18n._t('OTPAuthenticatorRegister.BACK', 'Back')
      );
    }
  }, {
    key: 'renderValidateCodeScreen',
    value: function renderValidateCodeScreen() {
      var _state2 = this.state,
          error = _state2.error,
          view = _state2.view,
          obfuscatedTo = _state2.obfuscatedTo;
      var _props4 = this.props,
          OTPAuthenticatorVerifyComponent = _props4.OTPAuthenticatorVerifyComponent,
          onCompleteRegistration = _props4.onCompleteRegistration,
          errors = _props4.errors;


      if (view !== VIEWS.VALIDATE || errors.length) {
        return null;
      }

      console.log('renderValidateCodeScreen::obfuscatedTo', obfuscatedTo);

      var verifyProps = _extends({}, this.props, {
        error: error,
        obfuscatedTo: obfuscatedTo,
        moreOptionsControl: this.renderBackButtonForVerify(),

        onCompleteVerification: onCompleteRegistration,
        onCompleteRegistration: null
      });

      return _react2.default.createElement(OTPAuthenticatorVerifyComponent, verifyProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mfa-totp__container mfa-totp__container--register' },
        this.renderErrorScreen(),
        this.renderScanCodeScreen(),
        this.renderValidateCodeScreen()
      );
    }
  }]);

  return Register;
}(_react.Component);

Register.propTypes = {
  code: _propTypes2.default.string.isRequired,
  onBack: _propTypes2.default.func.isRequired,
  onCompleteRegistration: _propTypes2.default.func.isRequired,
  errors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  method: _propTypes2.default.object.isRequired,
  uri: _propTypes2.default.string.isRequired,
  OTPAuthenticatorVerifyComponent: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired
};

Register.defaultProps = {
  code: '',
  errors: []
};

Register.displayName = 'OTPAuthenticatorRegister';

exports.Component = Register;
exports.default = (0, _Injector.inject)(['OTPAuthenticatorVerify'], function (OTPAuthenticatorVerifyComponent) {
  return {
    OTPAuthenticatorVerifyComponent: OTPAuthenticatorVerifyComponent
  };
}, function () {
  return 'MFA.Register';
})(Register);

/***/ }),

/***/ "./client/src/components/OTPAuthenticator/Verify.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = __webpack_require__("./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _api = __webpack_require__("./client/src/lib/api.js");

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Verify = function (_Component) {
  _inherits(Verify, _Component);

  function Verify(props) {
    _classCallCheck(this, Verify);

    var _this = _possibleConstructorReturn(this, (Verify.__proto__ || Object.getPrototypeOf(Verify)).call(this, props));

    _this.state = {
      code: '',
      isSendingCode: false,
      error: props.error
    };

    _this.codeInput = null;
    _this.setCodeInput = function (element) {
      _this.codeInput = element;
    };

    _this.handleChangeCode = _this.handleChangeCode.bind(_this);
    _this.handleInputKeyUp = _this.handleInputKeyUp.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.resendCode = _this.resendCode.bind(_this);
    return _this;
  }

  _createClass(Verify, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.codeInput) {
        this.codeInput.focus();
      }
    }
  }, {
    key: 'resendCode',
    value: function resendCode() {
      var _this2 = this;

      this.setState({
        isSendingCode: true
      });
      (0, _api2.default)('mfa/otp/resendcode').then(function (response) {
        return response.json().then(function (result) {
          _this2.setState({
            isSendingCode: false,
            error: !result.sent && result.error ? result.error : null
          });
        });
      });
    }
  }, {
    key: 'handleChangeCode',
    value: function handleChangeCode(event) {
      this.setState({
        code: event.target.value
      });
    }
  }, {
    key: 'handleInputKeyUp',
    value: function handleInputKeyUp(event) {
      if (this.canSubmit() && event.keyCode === 13) {
        this.handleSubmit();
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit() {
      this.props.onCompleteVerification({ code: this.state.code });
    }
  }, {
    key: 'canSubmit',
    value: function canSubmit() {
      return this.state.code.length === this.props.codeLength;
    }
  }, {
    key: 'renderActionsMenu',
    value: function renderActionsMenu() {
      var moreOptionsControl = this.props.moreOptionsControl;
      var isSendingCode = this.state.isSendingCode;
      var _window = window,
          i18n = _window.ss.i18n;


      var isNextDisabled = !this.canSubmit();

      return _react2.default.createElement(
        'ul',
        { className: 'mfa-action-list' },
        _react2.default.createElement(
          'li',
          { className: 'mfa-action-list__item' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-primary',
              disabled: isNextDisabled,
              onClick: this.handleSubmit
            },
            i18n._t('OTPAuthenticatorVerify.NEXT', 'Next')
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'mfa-action-list__item' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-secondary',
              onClick: this.resendCode,
              disabled: isSendingCode
            },
            isSendingCode && _react2.default.createElement(
              'span',
              null,
              _react2.default.createElement('span', { className: 'spinner-border spinner-border-sm', role: 'status', 'aria-hidden': 'true' }),
              _react2.default.createElement(
                'span',
                null,
                '\xA0'
              )
            ),
            i18n._t('OTPAuthenticatorVerify.RESEND', 'Resend code')
          )
        ),
        moreOptionsControl && _react2.default.createElement(
          'li',
          { className: 'mfa-action-list__item' },
          moreOptionsControl
        )
      );
    }
  }, {
    key: 'renderSupportLink',
    value: function renderSupportLink() {
      var _props$method = this.props.method,
          supportLink = _props$method.supportLink,
          supportText = _props$method.supportText;
      var _window2 = window,
          i18n = _window2.ss.i18n;


      if (!supportLink) {
        return null;
      }

      return _react2.default.createElement(
        'a',
        { href: supportLink, target: '_blank', rel: 'noopener noreferrer' },
        supportText || i18n._t('OTPAuthenticatorVerify.HOW_TO_USE', 'How to use authenticator apps.')
      );
    }
  }, {
    key: 'renderVerifyForm',
    value: function renderVerifyForm() {
      var _state = this.state,
          code = _state.code,
          error = _state.error;
      var _props = this.props,
          codeLength = _props.codeLength,
          method = _props.method,
          obfuscatedTo = _props.obfuscatedTo;
      var _window3 = window,
          i18n = _window3.ss.i18n;


      var formGroupClasses = (0, _classnames2.default)('mfa-totp__validate-left', {
        'has-error': !!error
      });

      return _react2.default.createElement(
        'div',
        { className: 'mfa-totp__validate-code' },
        _react2.default.createElement(
          'div',
          { className: formGroupClasses },
          _react2.default.createElement(
            'p',
            null,
            i18n._t('OTPAuthenticatorVerify.VERIFY', 'Use the code that was sent to'),
            _react2.default.createElement(
              'b',
              null,
              '\xA0',
              obfuscatedTo
            ),
            this.renderSupportLink()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'totp-code', className: 'control-label' },
            i18n.inject(i18n._t('OTPAuthenticatorVerify.ENTER_CODE', 'Enter {length}-digit code'), { length: codeLength })
          ),
          _react2.default.createElement('input', {
            id: 'totp-code',
            name: 'code',
            type: 'text',
            autoComplete: 'off',
            maxLength: codeLength,
            className: 'mfa-totp__code text form-control input-lg',
            value: code,
            ref: this.setCodeInput,
            onChange: this.handleChangeCode,
            onKeyUp: this.handleInputKeyUp
          }),
          error && _react2.default.createElement(
            'div',
            { className: 'help-block' },
            error
          )
        ),
        method.thumbnail && _react2.default.createElement(
          'div',
          { className: 'mfa-totp__validate-right' },
          _react2.default.createElement('img', {
            src: method.thumbnail,
            alt: method.name,
            className: 'mfa-totp__validate-img'
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'mfa-totp__container mfa-totp__container--verify' },
        this.renderVerifyForm(),
        this.renderActionsMenu()
      );
    }
  }]);

  return Verify;
}(_react.Component);

Verify.propTypes = {
  codeLength: _propTypes2.default.number,
  error: _propTypes2.default.string,
  onCompleteVerification: _propTypes2.default.func.isRequired,
  method: _propTypes2.default.object.isRequired
};

Verify.defaultProps = {
  codeLength: 6,
  error: null
};

Verify.displayName = 'OTPAuthenticatorVerify';

exports.default = Verify;

/***/ }),

/***/ "./client/src/lib/api.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var api = function api(endpoint) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    var body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
    var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    return fetch(endpoint, {
        body: body,
        credentials: 'same-origin',
        headers: headers,
        method: method
    });
};

exports.default = api;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__("./node_modules/react-is/index.js");
var assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__("./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__("./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__("./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react-is.production.min.js');
} else {
  module.exports = __webpack_require__("./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-phone-input-2/lib/lib.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=9)}([function(e,t){e.exports=__webpack_require__("./node_modules/react/index.js")},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var i=a.apply(null,n);i&&e.push(i)}else if("object"===o)for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){(function(t){var r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),l=Object.prototype.toString,f=s.Symbol,d=f?f.prototype:void 0,p=d?d.toString:void 0;function h(e){if("string"==typeof e)return e;if(y(e))return p?p.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}function b(e){return e?(e=function(e){if("number"==typeof e)return e;if(y(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var u=a.test(e);return u||o.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}e.exports=function(e,t,r){var n,a,o,i;return e=null==(n=e)?"":h(n),a=function(e){var t=b(e),r=t%1;return t==t?r?t-r:t:0}(r),o=0,i=e.length,a==a&&(void 0!==i&&(a=a<=i?a:i),void 0!==o&&(a=a>=o?a:o)),r=a,t=h(t),e.slice(r,r+t.length)==t}}).call(this,r(3))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){(function(t){var r=/^\[object .+?Constructor\]$/,n="object"==typeof t&&t&&t.Object===Object&&t,a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")();var i,u=Array.prototype,c=Function.prototype,s=Object.prototype,l=o["__core-js_shared__"],f=(i=/[^.]+$/.exec(l&&l.keys&&l.keys.IE_PROTO||""))?"Symbol(src)_1."+i:"",d=c.toString,p=s.hasOwnProperty,h=s.toString,m=RegExp("^"+d.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),y=u.splice,b=x(o,"Map"),g=x(Object,"create");function v(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function C(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function _(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function w(e,t){for(var r,n,a=e.length;a--;)if((r=e[a][0])===(n=t)||r!=r&&n!=n)return a;return-1}function S(e){return!(!O(e)||(t=e,f&&f in t))&&(function(e){var t=O(e)?h.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?m:r).test(function(e){if(null!=e){try{return d.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e));var t}function j(e,t){var r,n,a=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?a["string"==typeof t?"string":"hash"]:a.map}function x(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return S(r)?r:void 0}function N(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i),i};return r.cache=new(N.Cache||_),r}function O(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}v.prototype.clear=function(){this.__data__=g?g(null):{}},v.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},v.prototype.get=function(e){var t=this.__data__;if(g){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return p.call(t,e)?t[e]:void 0},v.prototype.has=function(e){var t=this.__data__;return g?void 0!==t[e]:p.call(t,e)},v.prototype.set=function(e,t){return this.__data__[e]=g&&void 0===t?"__lodash_hash_undefined__":t,this},C.prototype.clear=function(){this.__data__=[]},C.prototype.delete=function(e){var t=this.__data__,r=w(t,e);return!(r<0)&&(r==t.length-1?t.pop():y.call(t,r,1),!0)},C.prototype.get=function(e){var t=this.__data__,r=w(t,e);return r<0?void 0:t[r][1]},C.prototype.has=function(e){return w(this.__data__,e)>-1},C.prototype.set=function(e,t){var r=this.__data__,n=w(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},_.prototype.clear=function(){this.__data__={hash:new v,map:new(b||C),string:new v}},_.prototype.delete=function(e){return j(this,e).delete(e)},_.prototype.get=function(e){return j(this,e).get(e)},_.prototype.has=function(e){return j(this,e).has(e)},_.prototype.set=function(e,t){return j(this,e).set(e,t),this},N.Cache=_,e.exports=N}).call(this,r(3))},function(e,t,r){(function(t){var r=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=u||c||Function("return this")(),l=Object.prototype.toString,f=Math.max,d=Math.min,p=function(){return s.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var u=a.test(e);return u||o.test(e)?i(e.slice(2),u?2:8):n.test(e)?NaN:+e}e.exports=function(e,t,r){var n,a,o,i,u,c,s=0,l=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=n,o=a;return n=a=void 0,s=t,i=e.apply(o,r)}function v(e){return s=e,u=setTimeout(_,t),l?g(e):i}function C(e){var r=e-c;return void 0===c||r>=t||r<0||y&&e-s>=o}function _(){var e=p();if(C(e))return w(e);u=setTimeout(_,function(e){var r=t-(e-c);return y?d(r,o-(e-s)):r}(e))}function w(e){return u=void 0,b&&n?g(e):(n=a=void 0,i)}function S(){var e=p(),r=C(e);if(n=arguments,a=this,c=e,r){if(void 0===u)return v(c);if(y)return u=setTimeout(_,t),g(c)}return void 0===u&&(u=setTimeout(_,t)),i}return t=m(t)||0,h(r)&&(l=!!r.leading,o=(y="maxWait"in r)?f(m(r.maxWait)||0,t):o,b="trailing"in r?!!r.trailing:b),S.cancel=function(){void 0!==u&&clearTimeout(u),s=0,n=c=a=u=void 0},S.flush=function(){return void 0===u?i:w(p())},S}}).call(this,r(3))},function(e,t,r){(function(e,r){var n="[object Arguments]",a="[object Map]",o="[object Object]",i="[object Set]",u=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,c=/^\w*$/,s=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,f=/\\(\\)?/g,d=/^\[object .+?Constructor\]$/,p=/^(?:0|[1-9]\d*)$/,h={};h["[object Float32Array]"]=h["[object Float64Array]"]=h["[object Int8Array]"]=h["[object Int16Array]"]=h["[object Int32Array]"]=h["[object Uint8Array]"]=h["[object Uint8ClampedArray]"]=h["[object Uint16Array]"]=h["[object Uint32Array]"]=!0,h[n]=h["[object Array]"]=h["[object ArrayBuffer]"]=h["[object Boolean]"]=h["[object DataView]"]=h["[object Date]"]=h["[object Error]"]=h["[object Function]"]=h[a]=h["[object Number]"]=h[o]=h["[object RegExp]"]=h[i]=h["[object String]"]=h["[object WeakMap]"]=!1;var m="object"==typeof e&&e&&e.Object===Object&&e,y="object"==typeof self&&self&&self.Object===Object&&self,b=m||y||Function("return this")(),g=t&&!t.nodeType&&t,v=g&&"object"==typeof r&&r&&!r.nodeType&&r,C=v&&v.exports===g&&m.process,_=function(){try{return C&&C.binding("util")}catch(e){}}(),w=_&&_.isTypedArray;function S(e,t,r,n){var a=-1,o=e?e.length:0;for(n&&o&&(r=e[++a]);++a<o;)r=t(r,e[a],a,e);return r}function j(e,t){for(var r=-1,n=e?e.length:0;++r<n;)if(t(e[r],r,e))return!0;return!1}function x(e,t,r,n,a){return a(e,(function(e,a,o){r=n?(n=!1,e):t(r,e,a,o)})),r}function N(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function O(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function k(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var E,T,I,A=Array.prototype,D=Function.prototype,P=Object.prototype,F=b["__core-js_shared__"],M=(E=/[^.]+$/.exec(F&&F.keys&&F.keys.IE_PROTO||""))?"Symbol(src)_1."+E:"",R=D.toString,L=P.hasOwnProperty,z=P.toString,B=RegExp("^"+R.call(L).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=b.Symbol,$=b.Uint8Array,V=P.propertyIsEnumerable,K=A.splice,U=(T=Object.keys,I=Object,function(e){return T(I(e))}),q=Ne(b,"DataView"),H=Ne(b,"Map"),W=Ne(b,"Promise"),J=Ne(b,"Set"),Z=Ne(b,"WeakMap"),Q=Ne(Object,"create"),Y=Pe(q),X=Pe(H),ee=Pe(W),te=Pe(J),re=Pe(Z),ne=G?G.prototype:void 0,ae=ne?ne.valueOf:void 0,oe=ne?ne.toString:void 0;function ie(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ue(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ce(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function se(e){var t=-1,r=e?e.length:0;for(this.__data__=new ce;++t<r;)this.add(e[t])}function le(e){this.__data__=new ue(e)}function fe(e,t){var r=Le(e)||Re(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,a=!!n;for(var o in e)!t&&!L.call(e,o)||a&&("length"==o||ke(o,n))||r.push(o);return r}function de(e,t){for(var r=e.length;r--;)if(Me(e[r][0],t))return r;return-1}ie.prototype.clear=function(){this.__data__=Q?Q(null):{}},ie.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},ie.prototype.get=function(e){var t=this.__data__;if(Q){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return L.call(t,e)?t[e]:void 0},ie.prototype.has=function(e){var t=this.__data__;return Q?void 0!==t[e]:L.call(t,e)},ie.prototype.set=function(e,t){return this.__data__[e]=Q&&void 0===t?"__lodash_hash_undefined__":t,this},ue.prototype.clear=function(){this.__data__=[]},ue.prototype.delete=function(e){var t=this.__data__,r=de(t,e);return!(r<0)&&(r==t.length-1?t.pop():K.call(t,r,1),!0)},ue.prototype.get=function(e){var t=this.__data__,r=de(t,e);return r<0?void 0:t[r][1]},ue.prototype.has=function(e){return de(this.__data__,e)>-1},ue.prototype.set=function(e,t){var r=this.__data__,n=de(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},ce.prototype.clear=function(){this.__data__={hash:new ie,map:new(H||ue),string:new ie}},ce.prototype.delete=function(e){return xe(this,e).delete(e)},ce.prototype.get=function(e){return xe(this,e).get(e)},ce.prototype.has=function(e){return xe(this,e).has(e)},ce.prototype.set=function(e,t){return xe(this,e).set(e,t),this},se.prototype.add=se.prototype.push=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this},se.prototype.has=function(e){return this.__data__.has(e)},le.prototype.clear=function(){this.__data__=new ue},le.prototype.delete=function(e){return this.__data__.delete(e)},le.prototype.get=function(e){return this.__data__.get(e)},le.prototype.has=function(e){return this.__data__.has(e)},le.prototype.set=function(e,t){var r=this.__data__;if(r instanceof ue){var n=r.__data__;if(!H||n.length<199)return n.push([e,t]),this;r=this.__data__=new ce(n)}return r.set(e,t),this};var pe,he,me=(pe=function(e,t){return e&&ye(e,t,qe)},function(e,t){if(null==e)return e;if(!ze(e))return pe(e,t);for(var r=e.length,n=he?r:-1,a=Object(e);(he?n--:++n<r)&&!1!==t(a[n],n,a););return e}),ye=function(e){return function(t,r,n){for(var a=-1,o=Object(t),i=n(t),u=i.length;u--;){var c=i[e?u:++a];if(!1===r(o[c],c,o))break}return t}}();function be(e,t){for(var r=0,n=(t=Ee(t,e)?[t]:Se(t)).length;null!=e&&r<n;)e=e[De(t[r++])];return r&&r==n?e:void 0}function ge(e,t){return null!=e&&t in Object(e)}function ve(e,t,r,u,c){return e===t||(null==e||null==t||!$e(e)&&!Ve(t)?e!=e&&t!=t:function(e,t,r,u,c,s){var l=Le(e),f=Le(t),d="[object Array]",p="[object Array]";l||(d=(d=Oe(e))==n?o:d);f||(p=(p=Oe(t))==n?o:p);var h=d==o&&!N(e),m=p==o&&!N(t),y=d==p;if(y&&!h)return s||(s=new le),l||Ue(e)?je(e,t,r,u,c,s):function(e,t,r,n,o,u,c){switch(r){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(e.byteLength!=t.byteLength||!n(new $(e),new $(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Me(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case a:var s=O;case i:var l=2&u;if(s||(s=k),e.size!=t.size&&!l)return!1;var f=c.get(e);if(f)return f==t;u|=1,c.set(e,t);var d=je(s(e),s(t),n,o,u,c);return c.delete(e),d;case"[object Symbol]":if(ae)return ae.call(e)==ae.call(t)}return!1}(e,t,d,r,u,c,s);if(!(2&c)){var b=h&&L.call(e,"__wrapped__"),g=m&&L.call(t,"__wrapped__");if(b||g){var v=b?e.value():e,C=g?t.value():t;return s||(s=new le),r(v,C,u,c,s)}}if(!y)return!1;return s||(s=new le),function(e,t,r,n,a,o){var i=2&a,u=qe(e),c=u.length,s=qe(t).length;if(c!=s&&!i)return!1;var l=c;for(;l--;){var f=u[l];if(!(i?f in t:L.call(t,f)))return!1}var d=o.get(e);if(d&&o.get(t))return d==t;var p=!0;o.set(e,t),o.set(t,e);var h=i;for(;++l<c;){f=u[l];var m=e[f],y=t[f];if(n)var b=i?n(y,m,f,t,e,o):n(m,y,f,e,t,o);if(!(void 0===b?m===y||r(m,y,n,a,o):b)){p=!1;break}h||(h="constructor"==f)}if(p&&!h){var g=e.constructor,v=t.constructor;g==v||!("constructor"in e)||!("constructor"in t)||"function"==typeof g&&g instanceof g&&"function"==typeof v&&v instanceof v||(p=!1)}return o.delete(e),o.delete(t),p}(e,t,r,u,c,s)}(e,t,ve,r,u,c))}function Ce(e){return!(!$e(e)||function(e){return!!M&&M in e}(e))&&(Be(e)||N(e)?B:d).test(Pe(e))}function _e(e){return"function"==typeof e?e:null==e?He:"object"==typeof e?Le(e)?function(e,t){if(Ee(e)&&Te(t))return Ie(De(e),t);return function(r){var n=function(e,t,r){var n=null==e?void 0:be(e,t);return void 0===n?r:n}(r,e);return void 0===n&&n===t?function(e,t){return null!=e&&function(e,t,r){t=Ee(t,e)?[t]:Se(t);var n,a=-1,o=t.length;for(;++a<o;){var i=De(t[a]);if(!(n=null!=e&&r(e,i)))break;e=e[i]}if(n)return n;return!!(o=e?e.length:0)&&Ge(o)&&ke(i,o)&&(Le(e)||Re(e))}(e,t,ge)}(r,e):ve(t,n,void 0,3)}}(e[0],e[1]):function(e){var t=function(e){var t=qe(e),r=t.length;for(;r--;){var n=t[r],a=e[n];t[r]=[n,a,Te(a)]}return t}(e);if(1==t.length&&t[0][2])return Ie(t[0][0],t[0][1]);return function(r){return r===e||function(e,t,r,n){var a=r.length,o=a,i=!n;if(null==e)return!o;for(e=Object(e);a--;){var u=r[a];if(i&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++a<o;){var c=(u=r[a])[0],s=e[c],l=u[1];if(i&&u[2]){if(void 0===s&&!(c in e))return!1}else{var f=new le;if(n)var d=n(s,l,c,e,t,f);if(!(void 0===d?ve(l,s,n,3,f):d))return!1}}return!0}(r,e,t)}}(e):Ee(t=e)?(r=De(t),function(e){return null==e?void 0:e[r]}):function(e){return function(t){return be(t,e)}}(t);var t,r}function we(e){if(r=(t=e)&&t.constructor,n="function"==typeof r&&r.prototype||P,t!==n)return U(e);var t,r,n,a=[];for(var o in Object(e))L.call(e,o)&&"constructor"!=o&&a.push(o);return a}function Se(e){return Le(e)?e:Ae(e)}function je(e,t,r,n,a,o){var i=2&a,u=e.length,c=t.length;if(u!=c&&!(i&&c>u))return!1;var s=o.get(e);if(s&&o.get(t))return s==t;var l=-1,f=!0,d=1&a?new se:void 0;for(o.set(e,t),o.set(t,e);++l<u;){var p=e[l],h=t[l];if(n)var m=i?n(h,p,l,t,e,o):n(p,h,l,e,t,o);if(void 0!==m){if(m)continue;f=!1;break}if(d){if(!j(t,(function(e,t){if(!d.has(t)&&(p===e||r(p,e,n,a,o)))return d.add(t)}))){f=!1;break}}else if(p!==h&&!r(p,h,n,a,o)){f=!1;break}}return o.delete(e),o.delete(t),f}function xe(e,t){var r,n,a=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?a["string"==typeof t?"string":"hash"]:a.map}function Ne(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Ce(r)?r:void 0}var Oe=function(e){return z.call(e)};function ke(e,t){return!!(t=null==t?9007199254740991:t)&&("number"==typeof e||p.test(e))&&e>-1&&e%1==0&&e<t}function Ee(e,t){if(Le(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!Ke(e))||(c.test(e)||!u.test(e)||null!=t&&e in Object(t))}function Te(e){return e==e&&!$e(e)}function Ie(e,t){return function(r){return null!=r&&(r[e]===t&&(void 0!==t||e in Object(r)))}}(q&&"[object DataView]"!=Oe(new q(new ArrayBuffer(1)))||H&&Oe(new H)!=a||W&&"[object Promise]"!=Oe(W.resolve())||J&&Oe(new J)!=i||Z&&"[object WeakMap]"!=Oe(new Z))&&(Oe=function(e){var t=z.call(e),r=t==o?e.constructor:void 0,n=r?Pe(r):void 0;if(n)switch(n){case Y:return"[object DataView]";case X:return a;case ee:return"[object Promise]";case te:return i;case re:return"[object WeakMap]"}return t});var Ae=Fe((function(e){var t;e=null==(t=e)?"":function(e){if("string"==typeof e)return e;if(Ke(e))return oe?oe.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(t);var r=[];return s.test(e)&&r.push(""),e.replace(l,(function(e,t,n,a){r.push(n?a.replace(f,"$1"):t||e)})),r}));function De(e){if("string"==typeof e||Ke(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function Pe(e){if(null!=e){try{return R.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Fe(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,a=t?t.apply(this,n):n[0],o=r.cache;if(o.has(a))return o.get(a);var i=e.apply(this,n);return r.cache=o.set(a,i),i};return r.cache=new(Fe.Cache||ce),r}function Me(e,t){return e===t||e!=e&&t!=t}function Re(e){return function(e){return Ve(e)&&ze(e)}(e)&&L.call(e,"callee")&&(!V.call(e,"callee")||z.call(e)==n)}Fe.Cache=ce;var Le=Array.isArray;function ze(e){return null!=e&&Ge(e.length)&&!Be(e)}function Be(e){var t=$e(e)?z.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function Ge(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}function $e(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Ve(e){return!!e&&"object"==typeof e}function Ke(e){return"symbol"==typeof e||Ve(e)&&"[object Symbol]"==z.call(e)}var Ue=w?function(e){return function(t){return e(t)}}(w):function(e){return Ve(e)&&Ge(e.length)&&!!h[z.call(e)]};function qe(e){return ze(e)?fe(e):we(e)}function He(e){return e}r.exports=function(e,t,r){var n=Le(e)?S:x,a=arguments.length<3;return n(e,_e(t),r,a,me)}}).call(this,r(3),r(7)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t){String.prototype.padEnd||(String.prototype.padEnd=function(e,t){return e>>=0,t=String(void 0!==t?t:" "),this.length>e?String(this):((e-=this.length)>t.length&&(t+=t.repeat(e/t.length)),String(this)+t.slice(0,e))})},function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function i(e){if(Array.isArray(e))return e}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e){return(f="function"==typeof Symbol&&"symbol"===l(Symbol.iterator)?function(e){return l(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":l(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}r.r(t);var m=r(0),y=r.n(m),b=r(5),g=r.n(b),v=r(4),C=r.n(v),_=r(6),w=r.n(_),S=r(2),j=r.n(S),x=r(1),N=r.n(x);r(8);function O(e,t){return i(e)||function(e,t){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw o}}return r}(e,t)||u()}var k=[["Afghanistan",["asia"],"af","93"],["Albania",["europe"],"al","355"],["Algeria",["africa","north-africa"],"dz","213"],["Andorra",["europe"],"ad","376"],["Angola",["africa"],"ao","244"],["Antigua and Barbuda",["america","carribean"],"ag","1268"],["Argentina",["america","south-america"],"ar","54","(..) ........",0,["11","221","223","261","264","2652","280","2905","291","2920","2966","299","341","342","343","351","376","379","381","3833","385","387","388"]],["Armenia",["asia","ex-ussr"],"am","374",".. ......"],["Aruba",["america","carribean"],"aw","297"],["Australia",["oceania"],"au","61","(..) .... ....",0,["2","3","4","7","8","02","03","04","07","08"]],["Austria",["europe","eu-union"],"at","43"],["Azerbaijan",["asia","ex-ussr"],"az","994","(..) ... .. .."],["Bahamas",["america","carribean"],"bs","1242"],["Bahrain",["middle-east"],"bh","973"],["Bangladesh",["asia"],"bd","880"],["Barbados",["america","carribean"],"bb","1246"],["Belarus",["europe","ex-ussr"],"by","375","(..) ... .. .."],["Belgium",["europe","eu-union"],"be","32","... .. .. .."],["Belize",["america","central-america"],"bz","501"],["Benin",["africa"],"bj","229"],["Bhutan",["asia"],"bt","975"],["Bolivia",["america","south-america"],"bo","591"],["Bosnia and Herzegovina",["europe","ex-yugos"],"ba","387"],["Botswana",["africa"],"bw","267"],["Brazil",["america","south-america"],"br","55","(..) ........."],["British Indian Ocean Territory",["asia"],"io","246"],["Brunei",["asia"],"bn","673"],["Bulgaria",["europe","eu-union"],"bg","359"],["Burkina Faso",["africa"],"bf","226"],["Burundi",["africa"],"bi","257"],["Cambodia",["asia"],"kh","855"],["Cameroon",["africa"],"cm","237"],["Canada",["america","north-america"],"ca","1","(...) ...-....",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde",["africa"],"cv","238"],["Caribbean Netherlands",["america","carribean"],"bq","599","",1],["Central African Republic",["africa"],"cf","236"],["Chad",["africa"],"td","235"],["Chile",["america","south-america"],"cl","56"],["China",["asia"],"cn","86","..-........."],["Colombia",["america","south-america"],"co","57","... ... ...."],["Comoros",["africa"],"km","269"],["Congo",["africa"],"cd","243"],["Congo",["africa"],"cg","242"],["Costa Rica",["america","central-america"],"cr","506","....-...."],["Côte d’Ivoire",["africa"],"ci","225",".. .. .. .."],["Croatia",["europe","eu-union","ex-yugos"],"hr","385"],["Cuba",["america","carribean"],"cu","53"],["Curaçao",["america","carribean"],"cw","599","",0],["Cyprus",["europe","eu-union"],"cy","357",".. ......"],["Czech Republic",["europe","eu-union"],"cz","420","... ... ..."],["Denmark",["europe","eu-union","baltic"],"dk","45",".. .. .. .."],["Djibouti",["africa"],"dj","253"],["Dominica",["america","carribean"],"dm","1767"],["Dominican Republic",["america","carribean"],"do","1","",2,["809","829","849"]],["Ecuador",["america","south-america"],"ec","593"],["Egypt",["africa","north-africa"],"eg","20"],["El Salvador",["america","central-america"],"sv","503","....-...."],["Equatorial Guinea",["africa"],"gq","240"],["Eritrea",["africa"],"er","291"],["Estonia",["europe","eu-union","ex-ussr","baltic"],"ee","372",".... ......"],["Ethiopia",["africa"],"et","251"],["Fiji",["oceania"],"fj","679"],["Finland",["europe","eu-union","baltic"],"fi","358",".. ... .. .."],["France",["europe","eu-union"],"fr","33",". .. .. .. .."],["French Guiana",["america","south-america"],"gf","594"],["French Polynesia",["oceania"],"pf","689"],["Gabon",["africa"],"ga","241"],["Gambia",["africa"],"gm","220"],["Georgia",["asia","ex-ussr"],"ge","995"],["Germany",["europe","eu-union","baltic"],"de","49",".... ........"],["Ghana",["africa"],"gh","233"],["Greece",["europe","eu-union"],"gr","30"],["Grenada",["america","carribean"],"gd","1473"],["Guadeloupe",["america","carribean"],"gp","590","",0],["Guam",["oceania"],"gu","1671"],["Guatemala",["america","central-america"],"gt","502","....-...."],["Guinea",["africa"],"gn","224"],["Guinea-Bissau",["africa"],"gw","245"],["Guyana",["america","south-america"],"gy","592"],["Haiti",["america","carribean"],"ht","509","....-...."],["Honduras",["america","central-america"],"hn","504"],["Hong Kong",["asia"],"hk","852",".... ...."],["Hungary",["europe","eu-union"],"hu","36"],["Iceland",["europe"],"is","354","... ...."],["India",["asia"],"in","91",".....-....."],["Indonesia",["asia"],"id","62"],["Iran",["middle-east"],"ir","98","... ... ...."],["Iraq",["middle-east"],"iq","964"],["Ireland",["europe","eu-union"],"ie","353",".. ......."],["Israel",["middle-east"],"il","972","... ... ...."],["Italy",["europe","eu-union"],"it","39","... .......",0],["Jamaica",["america","carribean"],"jm","1876"],["Japan",["asia"],"jp","81",".. .... ...."],["Jordan",["middle-east"],"jo","962"],["Kazakhstan",["asia","ex-ussr"],"kz","7","... ...-..-..",1,["310","311","312","313","315","318","321","324","325","326","327","336","7172","73622"]],["Kenya",["africa"],"ke","254"],["Kiribati",["oceania"],"ki","686"],["Kosovo",["europe","ex-yugos"],"xk","383"],["Kuwait",["middle-east"],"kw","965"],["Kyrgyzstan",["asia","ex-ussr"],"kg","996","... ... ..."],["Laos",["asia"],"la","856"],["Latvia",["europe","eu-union","ex-ussr","baltic"],"lv","371",".. ... ..."],["Lebanon",["middle-east"],"lb","961"],["Lesotho",["africa"],"ls","266"],["Liberia",["africa"],"lr","231"],["Libya",["africa","north-africa"],"ly","218"],["Liechtenstein",["europe"],"li","423"],["Lithuania",["europe","eu-union","ex-ussr","baltic"],"lt","370"],["Luxembourg",["europe","eu-union"],"lu","352"],["Macau",["asia"],"mo","853"],["Macedonia",["europe","ex-yugos"],"mk","389"],["Madagascar",["africa"],"mg","261"],["Malawi",["africa"],"mw","265"],["Malaysia",["asia"],"my","60","..-....-...."],["Maldives",["asia"],"mv","960"],["Mali",["africa"],"ml","223"],["Malta",["europe","eu-union"],"mt","356"],["Marshall Islands",["oceania"],"mh","692"],["Martinique",["america","carribean"],"mq","596"],["Mauritania",["africa"],"mr","222"],["Mauritius",["africa"],"mu","230"],["Mexico",["america","central-america"],"mx","52","... ... ....",0,["55","81","33","656","664","998","774","229"]],["Micronesia",["oceania"],"fm","691"],["Moldova",["europe"],"md","373","(..) ..-..-.."],["Monaco",["europe"],"mc","377"],["Mongolia",["asia"],"mn","976"],["Montenegro",["europe","ex-yugos"],"me","382"],["Morocco",["africa","north-africa"],"ma","212"],["Mozambique",["africa"],"mz","258"],["Myanmar",["asia"],"mm","95"],["Namibia",["africa"],"na","264"],["Nauru",["africa"],"nr","674"],["Nepal",["asia"],"np","977"],["Netherlands",["europe","eu-union"],"nl","31",".. ........"],["New Caledonia",["oceania"],"nc","687"],["New Zealand",["oceania"],"nz","64","...-...-...."],["Nicaragua",["america","central-america"],"ni","505"],["Niger",["africa"],"ne","227"],["Nigeria",["africa"],"ng","234"],["North Korea",["asia"],"kp","850"],["Norway",["europe","baltic"],"no","47","... .. ..."],["Oman",["middle-east"],"om","968"],["Pakistan",["asia"],"pk","92","...-......."],["Palau",["oceania"],"pw","680"],["Palestine",["middle-east"],"ps","970"],["Panama",["america","central-america"],"pa","507"],["Papua New Guinea",["oceania"],"pg","675"],["Paraguay",["america","south-america"],"py","595"],["Peru",["america","south-america"],"pe","51"],["Philippines",["asia"],"ph","63",".... ......."],["Poland",["europe","eu-union","baltic"],"pl","48","...-...-..."],["Portugal",["europe","eu-union"],"pt","351"],["Puerto Rico",["america","carribean"],"pr","1","",3,["787","939"]],["Qatar",["middle-east"],"qa","974"],["Réunion",["africa"],"re","262"],["Romania",["europe","eu-union"],"ro","40"],["Russia",["europe","asia","ex-ussr","baltic"],"ru","7","(...) ...-..-..",0],["Rwanda",["africa"],"rw","250"],["Saint Kitts and Nevis",["america","carribean"],"kn","1869"],["Saint Lucia",["america","carribean"],"lc","1758"],["Saint Vincent and the Grenadines",["america","carribean"],"vc","1784"],["Samoa",["oceania"],"ws","685"],["San Marino",["europe"],"sm","378"],["São Tomé and Príncipe",["africa"],"st","239"],["Saudi Arabia",["middle-east"],"sa","966"],["Senegal",["africa"],"sn","221"],["Serbia",["europe","ex-yugos"],"rs","381"],["Seychelles",["africa"],"sc","248"],["Sierra Leone",["africa"],"sl","232"],["Singapore",["asia"],"sg","65","....-...."],["Slovakia",["europe","eu-union"],"sk","421"],["Slovenia",["europe","eu-union","ex-yugos"],"si","386"],["Solomon Islands",["oceania"],"sb","677"],["Somalia",["africa"],"so","252"],["South Africa",["africa"],"za","27"],["South Korea",["asia"],"kr","82","... .... ...."],["South Sudan",["africa","north-africa"],"ss","211"],["Spain",["europe","eu-union"],"es","34","... ... ..."],["Sri Lanka",["asia"],"lk","94"],["Sudan",["africa"],"sd","249"],["Suriname",["america","south-america"],"sr","597"],["Swaziland",["africa"],"sz","268"],["Sweden",["europe","eu-union","baltic"],"se","46","(...) ...-..."],["Switzerland",["europe"],"ch","41",".. ... .. .."],["Syria",["middle-east"],"sy","963"],["Taiwan",["asia"],"tw","886"],["Tajikistan",["asia","ex-ussr"],"tj","992"],["Tanzania",["africa"],"tz","255"],["Thailand",["asia"],"th","66"],["Timor-Leste",["asia"],"tl","670"],["Togo",["africa"],"tg","228"],["Tonga",["oceania"],"to","676"],["Trinidad and Tobago",["america","carribean"],"tt","1868"],["Tunisia",["africa","north-africa"],"tn","216"],["Turkey",["europe"],"tr","90","... ... .. .."],["Turkmenistan",["asia","ex-ussr"],"tm","993"],["Tuvalu",["asia"],"tv","688"],["Uganda",["africa"],"ug","256"],["Ukraine",["europe","ex-ussr"],"ua","380","(..) ... .. .."],["United Arab Emirates",["middle-east"],"ae","971"],["United Kingdom",["europe","eu-union"],"gb","44",".... ......"],["United States",["america","north-america"],"us","1","(...) ...-....",0,["907","205","251","256","334","479","501","870","480","520","602","623","928","209","213","310","323","408","415","510","530","559","562","619","626","650","661","707","714","760","805","818","831","858","909","916","925","949","951","303","719","970","203","860","202","302","239","305","321","352","386","407","561","727","772","813","850","863","904","941","954","229","404","478","706","770","912","808","319","515","563","641","712","208","217","309","312","618","630","708","773","815","847","219","260","317","574","765","812","316","620","785","913","270","502","606","859","225","318","337","504","985","413","508","617","781","978","301","410","207","231","248","269","313","517","586","616","734","810","906","989","218","320","507","612","651","763","952","314","417","573","636","660","816","228","601","662","406","252","336","704","828","910","919","701","308","402","603","201","609","732","856","908","973","505","575","702","775","212","315","516","518","585","607","631","716","718","845","914","216","330","419","440","513","614","740","937","405","580","918","503","541","215","412","570","610","717","724","814","401","803","843","864","605","423","615","731","865","901","931","210","214","254","281","325","361","409","432","512","713","806","817","830","903","915","936","940","956","972","979","435","801","276","434","540","703","757","804","802","206","253","360","425","509","262","414","608","715","920","304","307"]],["Uruguay",["america","south-america"],"uy","598"],["Uzbekistan",["asia","ex-ussr"],"uz","998",".. ... .. .."],["Vanuatu",["oceania"],"vu","678"],["Vatican City",["europe"],"va","39",".. .... ....",1],["Venezuela",["america","south-america"],"ve","58"],["Vietnam",["asia"],"vn","84"],["Yemen",["middle-east"],"ye","967"],["Zambia",["africa"],"zm","260"],["Zimbabwe",["africa"],"zw","263"]],E=[["American Samoa",["oceania"],"as","1684"],["Anguilla",["america","carribean"],"ai","1264"],["Bermuda",["america","north-america"],"bm","1441"],["British Virgin Islands",["america","carribean"],"vg","1284"],["Cayman Islands",["america","carribean"],"ky","1345"],["Cook Islands",["oceania"],"ck","682"],["Falkland Islands",["america","south-america"],"fk","500"],["Faroe Islands",["europe"],"fo","298"],["Gibraltar",["europe"],"gi","350"],["Greenland",["america"],"gl","299"],["Jersey",["europe","eu-union"],"je","44",".... ......"],["Montserrat",["america","carribean"],"ms","1664"],["Niue",["asia"],"nu","683"],["Norfolk Island",["oceania"],"nf","672"],["Northern Mariana Islands",["oceania"],"mp","1670"],["Saint Barthélemy",["america","carribean"],"bl","590","",1],["Saint Helena",["africa"],"sh","290"],["Saint Martin",["america","carribean"],"mf","590","",2],["Saint Pierre and Miquelon",["america","north-america"],"pm","508"],["Sint Maarten",["america","carribean"],"sx","1721"],["Tokelau",["oceania"],"tk","690"],["Turks and Caicos Islands",["america","carribean"],"tc","1649"],["U.S. Virgin Islands",["america","carribean"],"vi","1340"],["Wallis and Futuna",["oceania"],"wf","681"]];function T(e,t,r,n,a){return!r||a?e+"".padEnd(t.length,".")+" "+n:e+"".padEnd(t.length,".")+" "+r}function I(e,t,r,a,i){var u,c,s=[];return c=!0===t,[(u=[]).concat.apply(u,o(e.map((function(e){var o={name:e[0],regions:e[1],iso2:e[2],countryCode:e[3],dialCode:e[3],format:T(r,e[3],e[4],a,i),priority:e[5]||0},u=[];return e[6]&&e[6].map((function(t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){n(e,t,r[t])}))}return e}({},o);r.dialCode=e[3]+t,r.isAreaCode=!0,r.areaCodeLength=t.length,u.push(r)})),u.length>0?(o.mainCode=!0,c||"Array"===t.constructor.name&&t.includes(e[2])?(o.hasAreaCodes=!0,[o].concat(u)):(s=s.concat(u),[o])):[o]})))),s]}function A(e,t,r,n){if(null!==r){var a=Object.keys(r),o=Object.values(r);a.forEach((function(r,a){if(n)return e.push([r,o[a]]);var i=e.findIndex((function(e){return e[0]===r}));if(-1===i){var u=[r];u[t]=o[a],e.push(u)}else e[i][t]=o[a]}))}}function D(e,t){return 0===t.length?e:e.map((function(e){var r=t.findIndex((function(t){return t[0]===e[2]}));if(-1===r)return e;var n=t[r];return n[1]&&(e[4]=n[1]),n[3]&&(e[5]=n[3]),n[2]&&(e[6]=n[2]),e}))}var P=function e(t,r,n,a,i,u,s,l,f,d,p,h,m,y){c(this,e),this.filterRegions=function(e,t){if("string"==typeof e){var r=e;return t.filter((function(e){return e.regions.some((function(e){return e===r}))}))}return t.filter((function(t){return e.map((function(e){return t.regions.some((function(t){return t===e}))})).some((function(e){return e}))}))},this.sortTerritories=function(e,t){var r=[].concat(o(e),o(t));return r.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})),r},this.getFilteredCountryList=function(e,t,r){return 0===e.length?t:r?e.map((function(e){var r=t.find((function(t){return t.iso2===e}));if(r)return r})).filter((function(e){return e})):t.filter((function(t){return e.some((function(e){return e===t.iso2}))}))},this.localizeCountries=function(e,t,r){for(var n=0;n<e.length;n++)void 0!==t[e[n].iso2]?e[n].localName=t[e[n].iso2]:void 0!==t[e[n].name]&&(e[n].localName=t[e[n].name]);return r||e.sort((function(e,t){return e.localName<t.localName?-1:e.localName>t.localName?1:0})),e},this.getCustomAreas=function(e,t){for(var r=[],n=0;n<t.length;n++){var a=JSON.parse(JSON.stringify(e));a.dialCode+=t[n],r.push(a)}return r},this.excludeCountries=function(e,t){return 0===t.length?e:e.filter((function(e){return!t.includes(e.iso2)}))};var b=function(e,t,r){var n=[];return A(n,1,e,!0),A(n,3,t),A(n,2,r),n}(l,f,d),g=D(JSON.parse(JSON.stringify(k)),b),v=D(JSON.parse(JSON.stringify(E)),b),C=O(I(g,t,h,m,y),2),_=C[0],w=C[1];if(r){var S=O(I(v,t,h,m,y),2),j=S[0];S[1];_=this.sortTerritories(j,_)}n&&(_=this.filterRegions(n,_)),this.onlyCountries=this.localizeCountries(this.excludeCountries(this.getFilteredCountryList(a,_,s.includes("onlyCountries")),u),p,s.includes("onlyCountries")),this.preferredCountries=0===i.length?[]:this.localizeCountries(this.getFilteredCountryList(i,_,s.includes("preferredCountries")),p,s.includes("preferredCountries")),this.hiddenAreaCodes=this.excludeCountries(this.getFilteredCountryList(a,w),u)},F=function(e){function t(e){var r;c(this,t),(r=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?d(e):t}(this,p(t).call(this,e))).getProbableCandidate=C()((function(e){return e&&0!==e.length?r.state.onlyCountries.filter((function(t){return j()(t.name.toLowerCase(),e.toLowerCase())}),d(d(r)))[0]:null})),r.guessSelectedCountry=C()((function(e,t,n,a){var o;if(!1===r.props.enableAreaCodes&&(a.some((function(t){if(j()(e,t.dialCode))return n.some((function(e){if(t.iso2===e.iso2&&e.mainCode)return o=e,!0})),!0})),o))return o;var i=n.find((function(e){return e.iso2==t}));if(""===e.trim())return i;var u=n.reduce((function(t,r){if(j()(e,r.dialCode)){if(r.dialCode.length>t.dialCode.length)return r;if(r.dialCode.length===t.dialCode.length&&r.priority<t.priority)return r}return t}),{dialCode:"",priority:10001},d(d(r)));return u.name?u:i})),r.updateCountry=function(e){var t,n=r.state.onlyCountries;(t=e.indexOf(0)>="0"&&e.indexOf(0)<="9"?n.find((function(t){return t.dialCode==+e})):n.find((function(t){return t.iso2==e})))&&t.dialCode&&r.setState({selectedCountry:t,formattedNumber:r.props.disableCountryCode?"":r.formatNumber(t.dialCode,t)})},r.scrollTo=function(e,t){if(e){var n=r.dropdownRef;if(n&&document.body){var a=n.offsetHeight,o=n.getBoundingClientRect().top+document.body.scrollTop,i=o+a,u=e,c=u.getBoundingClientRect(),s=u.offsetHeight,l=c.top+document.body.scrollTop,f=l+s,d=l-o+n.scrollTop,p=a/2-s/2;if(r.props.enableSearch?l<o+32:l<o)t&&(d-=p),n.scrollTop=d;else if(f>i){t&&(d+=p);var h=a-s;n.scrollTop=d-h}}}},r.scrollToTop=function(){var e=r.dropdownRef;e&&document.body&&(e.scrollTop=0)},r.formatNumber=function(e,t){if(!t)return e;var n,o=t.format,c=r.props,s=c.disableCountryCode,l=c.enableAreaCodeStretch,f=c.enableLongNumbers,d=c.autoFormat;if(s?((n=o.split(" ")).shift(),n=n.join(" ")):l&&t.isAreaCode?((n=o.split(" "))[1]=n[1].replace(/\.+/,"".padEnd(t.areaCodeLength,".")),n=n.join(" ")):n=o,!e||0===e.length)return s?"":r.props.prefix;if(e&&e.length<2||!n||!d)return s?e:r.props.prefix+e;var p,h=w()(n,(function(e,t){if(0===e.remainingText.length)return e;if("."!==t)return{formattedText:e.formattedText+t,remainingText:e.remainingText};var r,n=i(r=e.remainingText)||a(r)||u(),o=n[0],c=n.slice(1);return{formattedText:e.formattedText+o,remainingText:c}}),{formattedText:"",remainingText:e.split("")});return(p=f?h.formattedText+h.remainingText.join(""):h.formattedText).includes("(")&&!p.includes(")")&&(p+=")"),p},r.cursorToEnd=function(){var e=r.numberInputRef;if(document.activeElement===e){e.focus();var t=e.value.length;")"===e.value.charAt(t-1)&&(t-=1),e.setSelectionRange(t,t)}},r.getElement=function(e){return r["flag_no_".concat(e)]},r.getCountryData=function(){return r.state.selectedCountry?{name:r.state.selectedCountry.name||"",dialCode:r.state.selectedCountry.dialCode||"",countryCode:r.state.selectedCountry.iso2||"",format:r.state.selectedCountry.format||""}:{}},r.handleFlagDropdownClick=function(e){if(e.preventDefault(),r.state.showDropdown||!r.props.disabled){var t=r.state,n=t.preferredCountries,a=t.onlyCountries,o=t.selectedCountry,i=r.concatPreferredCountries(n,a).findIndex((function(e){return e.dialCode===o.dialCode&&e.iso2===o.iso2}));r.setState({showDropdown:!r.state.showDropdown,highlightCountryIndex:i},(function(){r.state.showDropdown&&r.scrollTo(r.getElement(r.state.highlightCountryIndex))}))}},r.handleInput=function(e){var t=e.target.value,n=r.props,a=n.prefix,o=n.onChange,i=r.props.disableCountryCode?"":a,u=r.state.selectedCountry,c=r.state.freezeSelection;if(!r.props.countryCodeEditable){var s=a+(u.hasAreaCodes?r.state.onlyCountries.find((function(e){return e.iso2===u.iso2&&e.mainCode})).dialCode:u.dialCode);if(t.slice(0,s.length)!==s)return}if(t===a)return o&&o("",r.getCountryData(),e,""),r.setState({formattedNumber:""});if(t.replace(/\D/g,"").length>15){if(!1===r.props.enableLongNumbers)return;if("number"==typeof r.props.enableLongNumbers&&t.replace(/\D/g,"").length>r.props.enableLongNumbers)return}if(t!==r.state.formattedNumber){e.preventDefault?e.preventDefault():e.returnValue=!1;var l=r.props.country,f=r.state,d=f.onlyCountries,p=f.selectedCountry,h=f.hiddenAreaCodes;if(o&&e.persist(),t.length>0){var m=t.replace(/\D/g,"");(!r.state.freezeSelection||p&&p.dialCode.length>m.length)&&(u=r.props.disableCountryGuess?p:r.guessSelectedCountry(m.substring(0,6),l,d,h)||p,c=!1),i=r.formatNumber(m,u),u=u.dialCode?u:p}var y=e.target.selectionStart,b=e.target.selectionStart,g=r.state.formattedNumber,v=i.length-g.length;r.setState({formattedNumber:i,freezeSelection:c,selectedCountry:u},(function(){v>0&&(b-=v),")"==i.charAt(i.length-1)?r.numberInputRef.setSelectionRange(i.length-1,i.length-1):b>0&&g.length>=i.length?r.numberInputRef.setSelectionRange(b,b):y<g.length&&r.numberInputRef.setSelectionRange(y,y),o&&o(i.replace(/[^0-9]+/g,""),r.getCountryData(),e,i)}))}},r.handleInputClick=function(e){r.setState({showDropdown:!1}),r.props.onClick&&r.props.onClick(e,r.getCountryData())},r.handleDoubleClick=function(e){var t=e.target.value.length;e.target.setSelectionRange(0,t)},r.handleFlagItemClick=function(e,t){var n=r.state.selectedCountry,a=r.state.onlyCountries.find((function(t){return t==e}));if(a){var o=r.state.formattedNumber.replace(" ","").replace("(","").replace(")","").replace("-",""),i=o.length>1?o.replace(n.dialCode,a.dialCode):a.dialCode,u=r.formatNumber(i.replace(/\D/g,""),a);r.setState({showDropdown:!1,selectedCountry:a,freezeSelection:!0,formattedNumber:u,searchValue:""},(function(){r.cursorToEnd(),r.props.onChange&&r.props.onChange(u.replace(/[^0-9]+/g,""),r.getCountryData(),t,u)}))}},r.handleInputFocus=function(e){r.numberInputRef&&r.numberInputRef.value===r.props.prefix&&r.state.selectedCountry&&!r.props.disableCountryCode&&r.setState({formattedNumber:r.props.prefix+r.state.selectedCountry.dialCode},(function(){r.props.jumpCursorToEnd&&setTimeout(r.cursorToEnd,0)})),r.setState({placeholder:""}),r.props.onFocus&&r.props.onFocus(e,r.getCountryData()),r.props.jumpCursorToEnd&&setTimeout(r.cursorToEnd,0)},r.handleInputBlur=function(e){e.target.value||r.setState({placeholder:r.props.placeholder}),r.props.onBlur&&r.props.onBlur(e,r.getCountryData())},r.handleInputCopy=function(e){if(r.props.copyNumbersOnly){var t=window.getSelection().toString().replace(/[^0-9]+/g,"");e.clipboardData.setData("text/plain",t),e.preventDefault()}},r.getHighlightCountryIndex=function(e){var t=r.state.highlightCountryIndex+e;return t<0||t>=r.state.onlyCountries.length+r.state.preferredCountries.length?t-e:r.props.enableSearch&&t>r.getSearchFilteredCountries().length?0:t},r.searchCountry=function(){var e=r.getProbableCandidate(r.state.queryString)||r.state.onlyCountries[0],t=r.state.onlyCountries.findIndex((function(t){return t==e}))+r.state.preferredCountries.length;r.scrollTo(r.getElement(t),!0),r.setState({queryString:"",highlightCountryIndex:t})},r.handleKeydown=function(e){var t=r.props.keys,n=e.target.className;if(n.includes("selected-flag")&&e.which===t.ENTER&&!r.state.showDropdown)return r.handleFlagDropdownClick(e);if(n.includes("form-control")&&(e.which===t.ENTER||e.which===t.ESC))return e.target.blur();if(r.state.showDropdown&&!r.props.disabled&&(!n.includes("search-box")||e.which===t.UP||e.which===t.DOWN||e.which===t.ENTER||e.which===t.ESC&&""===e.target.value)){e.preventDefault?e.preventDefault():e.returnValue=!1;var a=function(e){r.setState({highlightCountryIndex:r.getHighlightCountryIndex(e)},(function(){r.scrollTo(r.getElement(r.state.highlightCountryIndex),!0)}))};switch(e.which){case t.DOWN:a(1);break;case t.UP:a(-1);break;case t.ENTER:r.props.enableSearch?r.handleFlagItemClick(r.getSearchFilteredCountries()[r.state.highlightCountryIndex]||r.getSearchFilteredCountries()[0],e):r.handleFlagItemClick([].concat(o(r.state.preferredCountries),o(r.state.onlyCountries))[r.state.highlightCountryIndex],e);break;case t.ESC:case t.TAB:r.setState({showDropdown:!1},r.cursorToEnd);break;default:(e.which>=t.A&&e.which<=t.Z||e.which===t.SPACE)&&r.setState({queryString:r.state.queryString+String.fromCharCode(e.which)},r.state.debouncedQueryStingSearcher)}}},r.handleInputKeyDown=function(e){var t=r.props,n=t.keys,a=t.onEnterKeyPress,o=t.onKeyDown;e.which===n.ENTER&&a&&a(e),o&&o(e)},r.handleClickOutside=function(e){r.dropdownRef&&!r.dropdownContainerRef.contains(e.target)&&r.state.showDropdown&&r.setState({showDropdown:!1})},r.handleSearchChange=function(e){var t=e.currentTarget.value,n=r.state,a=n.preferredCountries,o=n.selectedCountry,i=0;if(""===t&&o){var u=r.state.onlyCountries;i=r.concatPreferredCountries(a,u).findIndex((function(e){return e==o})),setTimeout((function(){return r.scrollTo(r.getElement(i))}),100)}r.setState({searchValue:t,highlightCountryIndex:i})},r.concatPreferredCountries=function(e,t){return e.length>0?o(new Set(e.concat(t))):t},r.getDropdownCountryName=function(e){return e.localName||e.name},r.getSearchFilteredCountries=function(){var e=r.state,t=e.preferredCountries,n=e.onlyCountries,a=e.searchValue,i=r.props.enableSearch,u=r.concatPreferredCountries(t,n),c=a.trim().toLowerCase().replace("+","");if(i&&c){if(/^\d+$/.test(c))return u.filter((function(e){var t=e.dialCode;return["".concat(t)].some((function(e){return e.toLowerCase().includes(c)}))}));var s=u.filter((function(e){var t=e.iso2;return["".concat(t)].some((function(e){return e.toLowerCase().includes(c)}))})),l=u.filter((function(e){var t=e.name,r=e.localName;e.iso2;return["".concat(t),"".concat(r||"")].some((function(e){return e.toLowerCase().includes(c)}))}));return r.scrollToTop(),o(new Set([].concat(s,l)))}return u},r.getCountryDropdownList=function(){var e=r.state,t=e.preferredCountries,a=e.highlightCountryIndex,o=e.showDropdown,i=e.searchValue,u=r.props,c=u.disableDropdown,s=u.prefix,l=r.props,f=l.enableSearch,d=l.searchNotFound,p=l.disableSearchIcon,h=l.searchClass,m=l.searchStyle,b=l.searchPlaceholder,g=l.autocompleteSearch,v=r.getSearchFilteredCountries().map((function(e,t){var n=a===t,o=N()({country:!0,preferred:"us"===e.iso2||"gb"===e.iso2,active:"us"===e.iso2,highlight:n}),i="flag ".concat(e.iso2);return y.a.createElement("li",Object.assign({ref:function(e){return r["flag_no_".concat(t)]=e},key:"flag_no_".concat(t),"data-flag-key":"flag_no_".concat(t),className:o,"data-dial-code":"1",tabIndex:c?"-1":"0","data-country-code":e.iso2,onClick:function(t){return r.handleFlagItemClick(e,t)},role:"option"},n?{"aria-selected":!0}:{}),y.a.createElement("div",{className:i}),y.a.createElement("span",{className:"country-name"},r.getDropdownCountryName(e)),y.a.createElement("span",{className:"dial-code"},e.format?r.formatNumber(e.dialCode,e):s+e.dialCode))})),C=y.a.createElement("li",{key:"dashes",className:"divider"});t.length>0&&(!f||f&&!i.trim())&&v.splice(t.length,0,C);var _=N()(n({"country-list":!0,hide:!o},r.props.dropdownClass,!0));return y.a.createElement("ul",{ref:function(e){return!f&&e&&e.focus(),r.dropdownRef=e},className:_,style:r.props.dropdownStyle,role:"listbox",tabIndex:"0"},f&&y.a.createElement("li",{className:N()(n({search:!0},h,h))},!p&&y.a.createElement("span",{className:N()(n({"search-emoji":!0},"".concat(h,"-emoji"),h)),role:"img","aria-label":"Magnifying glass"},"🔎"),y.a.createElement("input",{className:N()(n({"search-box":!0},"".concat(h,"-box"),h)),style:m,type:"search",placeholder:b,autoFocus:!0,autoComplete:g?"on":"off",value:i,onChange:r.handleSearchChange})),v.length>0?v:y.a.createElement("li",{className:"no-entries-message"},y.a.createElement("span",null,d)))};var s,l=new P(e.enableAreaCodes,e.enableTerritories,e.regions,e.onlyCountries,e.preferredCountries,e.excludeCountries,e.preserveOrder,e.masks,e.priority,e.areaCodes,e.localization,e.prefix,e.defaultMask,e.alwaysDefaultMask),h=l.onlyCountries,m=l.preferredCountries,b=l.hiddenAreaCodes,v=e.value?e.value.replace(/\D/g,""):"";s=e.disableInitialCountryGuess?0:v.length>1?r.guessSelectedCountry(v.substring(0,6),e.country,h,b)||0:e.country&&h.find((function(t){return t.iso2==e.country}))||0;var _,S=v.length<2&&s&&!j()(v,s.dialCode)?s.dialCode:"";_=""===v&&0===s?"":r.formatNumber((e.disableCountryCode?"":S)+v,s.name?s:void 0);var x=h.findIndex((function(e){return e==s}));return r.state={showDropdown:e.showDropdown,formattedNumber:_,onlyCountries:h,preferredCountries:m,hiddenAreaCodes:b,selectedCountry:s,highlightCountryIndex:x,queryString:"",freezeSelection:!1,debouncedQueryStingSearcher:g()(r.searchCountry,250),searchValue:""},r}var r,l,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),r=t,(l=[{key:"componentDidMount",value:function(){document.addEventListener&&this.props.enableClickOutside&&document.addEventListener("mousedown",this.handleClickOutside),this.props.onMount&&this.props.onMount(this.state.formattedNumber.replace(/[^0-9]+/g,""),this.getCountryData(),this.state.formattedNumber)}},{key:"componentWillUnmount",value:function(){document.removeEventListener&&this.props.enableClickOutside&&document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"componentDidUpdate",value:function(e,t,r){e.country!==this.props.country?this.updateCountry(this.props.country):e.value!==this.props.value&&this.updateFormattedNumber(this.props.value)}},{key:"updateFormattedNumber",value:function(e){if(null===e)return this.setState({selectedCountry:0,formattedNumber:""});var t=this.state,r=t.onlyCountries,n=t.selectedCountry,a=t.hiddenAreaCodes,o=this.props,i=o.country,u=o.prefix;if(""===e)return this.setState({selectedCountry:n,formattedNumber:""});var c,s,l=e.replace(/\D/g,"");if(n&&j()(e,u+n.dialCode))s=this.formatNumber(l,n),this.setState({formattedNumber:s});else{var f=(c=this.props.disableCountryGuess?n:this.guessSelectedCountry(l.substring(0,6),i,r,a)||n)&&j()(l,u+c.dialCode)?c.dialCode:"";s=this.formatNumber((this.props.disableCountryCode?"":f)+l,c||void 0),this.setState({selectedCountry:c,formattedNumber:s})}}},{key:"render",value:function(){var e,t,r,a=this,o=this.state,i=o.onlyCountries,u=o.selectedCountry,c=o.showDropdown,s=o.formattedNumber,l=o.hiddenAreaCodes,f=this.props,d=f.disableDropdown,p=f.renderStringAsFlag,h=f.isValid,m=f.defaultErrorMessage,b=f.specialLabel;if("boolean"==typeof h)t=h;else{var g=h(s.replace(/\D/g,""),u,i,l);"boolean"==typeof g?!1===(t=g)&&(r=m):(t=!1,r=g)}var v=N()((n(e={},this.props.containerClass,!0),n(e,"react-tel-input",!0),e)),C=N()({arrow:!0,up:c}),_=N()(n({"form-control":!0,"invalid-number":!t,open:c},this.props.inputClass,!0)),w=N()({"selected-flag":!0,open:c}),S=N()(n({"flag-dropdown":!0,"invalid-number":!t,open:c},this.props.buttonClass,!0)),j="flag ".concat(u&&u.iso2);return y.a.createElement("div",{className:"".concat(v," ").concat(this.props.className),style:this.props.style||this.props.containerStyle,onKeyDown:this.handleKeydown},b&&y.a.createElement("div",{className:"special-label"},b),r&&y.a.createElement("div",{className:"invalid-number-message"},r),y.a.createElement("input",Object.assign({className:_,style:this.props.inputStyle,onChange:this.handleInput,onClick:this.handleInputClick,onDoubleClick:this.handleDoubleClick,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onCopy:this.handleInputCopy,value:s,onKeyDown:this.handleInputKeyDown,placeholder:this.props.placeholder,disabled:this.props.disabled,type:"tel"},this.props.inputProps,{ref:function(e){a.numberInputRef=e,"function"==typeof a.props.inputProps.ref?a.props.inputProps.ref(e):"object"==typeof a.props.inputProps.ref&&(a.props.inputProps.ref.current=e)}})),y.a.createElement("div",{className:S,style:this.props.buttonStyle,ref:function(e){return a.dropdownContainerRef=e}},p?y.a.createElement("div",{className:w},p):y.a.createElement("div",{onClick:d?void 0:this.handleFlagDropdownClick,className:w,title:u?"".concat(u.localName||u.name,": + ").concat(u.dialCode):"",tabIndex:d?"-1":"0",role:"button","aria-haspopup":"listbox","aria-expanded":!!c||void 0},y.a.createElement("div",{className:j},!d&&y.a.createElement("div",{className:C}))),c&&this.getCountryDropdownList()))}}])&&s(r.prototype,l),m&&s(r,m),t}(y.a.Component);F.defaultProps={country:"",value:"",onlyCountries:[],preferredCountries:[],excludeCountries:[],placeholder:"1 (702) 123-4567",searchPlaceholder:"search",searchNotFound:"No entries to show",flagsImagePath:"./flags.png",disabled:!1,containerStyle:{},inputStyle:{},buttonStyle:{},dropdownStyle:{},searchStyle:{},containerClass:"",inputClass:"",buttonClass:"",dropdownClass:"",searchClass:"",className:"",autoFormat:!0,enableAreaCodes:!1,enableTerritories:!1,disableCountryCode:!1,disableDropdown:!1,enableLongNumbers:!1,countryCodeEditable:!0,enableSearch:!1,disableSearchIcon:!1,disableInitialCountryGuess:!1,disableCountryGuess:!1,regions:"",inputProps:{},localization:{},masks:null,priority:null,areaCodes:null,preserveOrder:[],defaultMask:"... ... ... ... ..",alwaysDefaultMask:!1,prefix:"+",copyNumbersOnly:!0,renderStringAsFlag:"",autocompleteSearch:!1,jumpCursorToEnd:!0,enableAreaCodeStretch:!1,enableClickOutside:!0,showDropdown:!1,isValid:!0,defaultErrorMessage:"",specialLabel:"Phone",onEnterKeyPress:null,keys:{UP:38,DOWN:40,RIGHT:39,LEFT:37,ENTER:13,ESC:27,PLUS:43,A:65,Z:90,SPACE:32,TAB:9}};t.default=F}]);

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__("./node_modules/object-assign/index.js");
var checkPropTypes = __webpack_require__("./node_modules/prop-types/checkPropTypes.js");

var ReactVersion = '16.14.0';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

/**
 * Keeps track of the current dispatcher.
 */
var ReactCurrentDispatcher = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

/**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */
var ReactCurrentBatchConfig = {
  suspense: null
};

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
function describeComponentFrame (name, source, ownerName) {
  var sourceInfo = '';

  if (source) {
    var path = source.fileName;
    var fileName = path.replace(BEFORE_SLASH_RE, '');

    {
      // In DEV, include code for a common special case:
      // prefer "folder/index.js" instead of just "index.js".
      if (/^index\./.test(fileName)) {
        var match = path.match(BEFORE_SLASH_RE);

        if (match) {
          var pathBeforeSlash = match[1];

          if (pathBeforeSlash) {
            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
            fileName = folderName + '/' + fileName;
          }
        }
      }
    }

    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
  } else if (ownerName) {
    sourceInfo = ' (created by ' + ownerName + ')';
  }

  return '\n    in ' + (name || 'Unknown') + sourceInfo;
}

var Resolved = 1;
function refineResolvedLazyComponent(lazyComponent) {
  return lazyComponent._status === Resolved ? lazyComponent._result : null;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case REACT_FRAGMENT_TYPE:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return "Profiler";

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        return 'Context.Consumer';

      case REACT_PROVIDER_TYPE:
        return 'Context.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type.render);

      case REACT_LAZY_TYPE:
        {
          var thenable = type;
          var resolvedThenable = refineResolvedLazyComponent(thenable);

          if (resolvedThenable) {
            return getComponentName(resolvedThenable);
          }

          break;
        }
    }
  }

  return null;
}

var ReactDebugCurrentFrame = {};
var currentlyValidatingElement = null;
function setCurrentlyValidatingElement(element) {
  {
    currentlyValidatingElement = element;
  }
}

{
  // Stack implementation injected by the current renderer.
  ReactDebugCurrentFrame.getCurrentStack = null;

  ReactDebugCurrentFrame.getStackAddendum = function () {
    var stack = ''; // Add an extra top frame while an element is being validated

    if (currentlyValidatingElement) {
      var name = getComponentName(currentlyValidatingElement.type);
      var owner = currentlyValidatingElement._owner;
      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    } // Delegate to the injected renderer-specific implementation


    var impl = ReactDebugCurrentFrame.getCurrentStack;

    if (impl) {
      stack += impl() || '';
    }

    return stack;
  };
}

/**
 * Used by act() to track whether you're inside an act() scope.
 */
var IsSomeRendererActing = {
  current: false
};

var ReactSharedInternals = {
  ReactCurrentDispatcher: ReactCurrentDispatcher,
  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
  ReactCurrentOwner: ReactCurrentOwner,
  IsSomeRendererActing: IsSomeRendererActing,
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign: _assign
};

{
  _assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame: ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {}
  });
}

// by calls to these methods by a Babel plugin.
//
// In PROD (or in packages without access to React internals),
// they are left as they are instead.

function warn(format) {
  {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    printWarning('warn', format, args);
  }
}
function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var hasExistingStack = args.length > 0 && typeof args[args.length - 1] === 'string' && args[args.length - 1].indexOf('\n    in') === 0;

    if (!hasExistingStack) {
      var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
      var stack = ReactDebugCurrentFrame.getStackAddendum();

      if (stack !== '') {
        format += '%s';
        args = args.concat([stack]);
      }
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      throw new Error(message);
    } catch (x) {}
  }
}

var didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    var _constructor = publicInstance.constructor;
    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
    var warningKey = componentName + "." + callerName;

    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }

    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}
/**
 * This is the abstract API for an update queue.
 */


var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
    warnNoop(publicInstance, 'setState');
  }
};

var emptyObject = {};

{
  Object.freeze(emptyObject);
}
/**
 * Base class helpers for the updating state of a component.
 */


function Component(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
  // renderer.

  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};
/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */

Component.prototype.setState = function (partialState, callback) {
  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
    {
      throw Error( "setState(...): takes an object of state variables to update or a function which returns an object of state variables." );
    }
  }

  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};
/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */


Component.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */


{
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };

  var defineDeprecationWarning = function (methodName, info) {
    Object.defineProperty(Component.prototype, methodName, {
      get: function () {
        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

        return undefined;
      }
    });
  };

  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

function ComponentDummy() {}

ComponentDummy.prototype = Component.prototype;
/**
 * Convenience component with default shallow equality check for sCU.
 */

function PureComponent(props, context, updater) {
  this.props = props;
  this.context = context; // If a component has string refs, we will assign a different object later.

  this.refs = emptyObject;
  this.updater = updater || ReactNoopUpdateQueue;
}

var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

_assign(pureComponentPrototype, Component.prototype);

pureComponentPrototype.isPureReactComponent = true;

// an immutable object with a single mutable value
function createRef() {
  var refObject = {
    current: null
  };

  {
    Object.seal(refObject);
  }

  return refObject;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
      }
    }
  };

  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

function warnIfStringRefCannotBeAutoConverted(config) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://fb.me/react-strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */

function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
function cloneAndReplaceKey(oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
  return newElement;
}
/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */

function cloneElement(element, config, children) {
  if (!!(element === null || element === undefined)) {
    {
      throw Error( "React.cloneElement(...): The argument must be a React element, but you passed " + element + "." );
    }
  }

  var propName; // Original props are copied

  var props = _assign({}, element.props); // Reserved names are extracted


  var key = element.key;
  var ref = element.ref; // Self is preserved since the owner is preserved.

  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.

  var source = element._source; // Owner will be preserved, unless ref is overridden

  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    } // Remaining properties override existing props


    var defaultProps;

    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}

var SEPARATOR = '.';
var SUBSEPARATOR = ':';
/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });
  return '$' + escapedString;
}
/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */


var didWarnAboutMaps = false;
var userProvidedKeyEscapeRegex = /\/+/g;

function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

var POOL_SIZE = 10;
var traverseContextPool = [];

function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
  if (traverseContextPool.length) {
    var traverseContext = traverseContextPool.pop();
    traverseContext.result = mapResult;
    traverseContext.keyPrefix = keyPrefix;
    traverseContext.func = mapFunction;
    traverseContext.context = mapContext;
    traverseContext.count = 0;
    return traverseContext;
  } else {
    return {
      result: mapResult,
      keyPrefix: keyPrefix,
      func: mapFunction,
      context: mapContext,
      count: 0
    };
  }
}

function releaseTraverseContext(traverseContext) {
  traverseContext.result = null;
  traverseContext.keyPrefix = null;
  traverseContext.func = null;
  traverseContext.context = null;
  traverseContext.count = 0;

  if (traverseContextPool.length < POOL_SIZE) {
    traverseContextPool.push(traverseContext);
  }
}
/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  var invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;

      case 'object':
        switch (children.$$typeof) {
          case REACT_ELEMENT_TYPE:
          case REACT_PORTAL_TYPE:
            invokeCallback = true;
        }

    }
  }

  if (invokeCallback) {
    callback(traverseContext, children, // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.

  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);

    if (typeof iteratorFn === 'function') {

      {
        // Warn about using Maps as children
        if (iteratorFn === children.entries) {
          if (!didWarnAboutMaps) {
            warn('Using Maps as children is deprecated and will be removed in ' + 'a future major release. Consider converting children to ' + 'an array of keyed ReactElements instead.');
          }

          didWarnAboutMaps = true;
        }
      }

      var iterator = iteratorFn.call(children);
      var step;
      var ii = 0;

      while (!(step = iterator.next()).done) {
        child = step.value;
        nextName = nextNamePrefix + getComponentKey(child, ii++);
        subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
      }
    } else if (type === 'object') {
      var addendum = '';

      {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
      }

      var childrenString = '' + children;

      {
        {
          throw Error( "Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + ")." + addendum );
        }
      }
    }
  }

  return subtreeCount;
}
/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */


function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}
/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */


function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (typeof component === 'object' && component !== null && component.key != null) {
    // Explicit key
    return escape(component.key);
  } // Implicit key determined by the index in the set


  return index.toString(36);
}

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;
  func.call(context, child, bookKeeping.count++);
}
/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */


function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  releaseTraverseContext(traverseContext);
}

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;
  var mappedChild = func.call(context, child, bookKeeping.count++);

  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, function (c) {
      return c;
    });
  } else if (mappedChild != null) {
    if (isValidElement(mappedChild)) {
      mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }

    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';

  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }

  var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  releaseTraverseContext(traverseContext);
}
/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */


function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}
/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */


function countChildren(children) {
  return traverseAllChildren(children, function () {
    return null;
  }, null);
}
/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */


function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, function (child) {
    return child;
  });
  return result;
}
/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */


function onlyChild(children) {
  if (!isValidElement(children)) {
    {
      throw Error( "React.Children.only expected to receive a single React element child." );
    }
  }

  return children;
}

function createContext(defaultValue, calculateChangedBits) {
  if (calculateChangedBits === undefined) {
    calculateChangedBits = null;
  } else {
    {
      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
      }
    }
  }

  var context = {
    $$typeof: REACT_CONTEXT_TYPE,
    _calculateChangedBits: calculateChangedBits,
    // As a workaround to support multiple concurrent renderers, we categorize
    // some renderers as primary and others as secondary. We only expect
    // there to be two concurrent renderers at most: React Native (primary) and
    // Fabric (secondary); React DOM (primary) and React ART (secondary).
    // Secondary renderers store their context values on separate fields.
    _currentValue: defaultValue,
    _currentValue2: defaultValue,
    // Used to track how many concurrent renderers this context currently
    // supports within in a single renderer. Such as parallel server rendering.
    _threadCount: 0,
    // These are circular
    Provider: null,
    Consumer: null
  };
  context.Provider = {
    $$typeof: REACT_PROVIDER_TYPE,
    _context: context
  };
  var hasWarnedAboutUsingNestedContextConsumers = false;
  var hasWarnedAboutUsingConsumerProvider = false;

  {
    // A separate object, but proxies back to the original context object for
    // backwards compatibility. It has a different $$typeof, so we can properly
    // warn for the incorrect usage of Context as a Consumer.
    var Consumer = {
      $$typeof: REACT_CONTEXT_TYPE,
      _context: context,
      _calculateChangedBits: context._calculateChangedBits
    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

    Object.defineProperties(Consumer, {
      Provider: {
        get: function () {
          if (!hasWarnedAboutUsingConsumerProvider) {
            hasWarnedAboutUsingConsumerProvider = true;

            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
          }

          return context.Provider;
        },
        set: function (_Provider) {
          context.Provider = _Provider;
        }
      },
      _currentValue: {
        get: function () {
          return context._currentValue;
        },
        set: function (_currentValue) {
          context._currentValue = _currentValue;
        }
      },
      _currentValue2: {
        get: function () {
          return context._currentValue2;
        },
        set: function (_currentValue2) {
          context._currentValue2 = _currentValue2;
        }
      },
      _threadCount: {
        get: function () {
          return context._threadCount;
        },
        set: function (_threadCount) {
          context._threadCount = _threadCount;
        }
      },
      Consumer: {
        get: function () {
          if (!hasWarnedAboutUsingNestedContextConsumers) {
            hasWarnedAboutUsingNestedContextConsumers = true;

            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
          }

          return context.Consumer;
        }
      }
    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

    context.Consumer = Consumer;
  }

  {
    context._currentRenderer = null;
    context._currentRenderer2 = null;
  }

  return context;
}

function lazy(ctor) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _ctor: ctor,
    // React uses these fields to store the result.
    _status: -1,
    _result: null
  };

  {
    // In production, this would just set it on the object.
    var defaultProps;
    var propTypes;
    Object.defineProperties(lazyType, {
      defaultProps: {
        configurable: true,
        get: function () {
          return defaultProps;
        },
        set: function (newDefaultProps) {
          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          defaultProps = newDefaultProps; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'defaultProps', {
            enumerable: true
          });
        }
      },
      propTypes: {
        configurable: true,
        get: function () {
          return propTypes;
        },
        set: function (newPropTypes) {
          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

          propTypes = newPropTypes; // Match production behavior more closely:

          Object.defineProperty(lazyType, 'propTypes', {
            enumerable: true
          });
        }
      }
    });
  }

  return lazyType;
}

function forwardRef(render) {
  {
    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
    } else if (typeof render !== 'function') {
      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
    } else {
      if (render.length !== 0 && render.length !== 2) {
        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
      }
    }

    if (render != null) {
      if (render.defaultProps != null || render.propTypes != null) {
        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
      }
    }
  }

  return {
    $$typeof: REACT_FORWARD_REF_TYPE,
    render: render
  };
}

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function memo(type, compare) {
  {
    if (!isValidElementType(type)) {
      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
    }
  }

  return {
    $$typeof: REACT_MEMO_TYPE,
    type: type,
    compare: compare === undefined ? null : compare
  };
}

function resolveDispatcher() {
  var dispatcher = ReactCurrentDispatcher.current;

  if (!(dispatcher !== null)) {
    {
      throw Error( "Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://fb.me/react-invalid-hook-call for tips about how to debug and fix this problem." );
    }
  }

  return dispatcher;
}

function useContext(Context, unstable_observedBits) {
  var dispatcher = resolveDispatcher();

  {
    if (unstable_observedBits !== undefined) {
      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://fb.me/rules-of-hooks' : '');
    } // TODO: add a more generic warning for invalid values.


    if (Context._context !== undefined) {
      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
      // and nobody should be using this in existing code.

      if (realContext.Consumer === Context) {
        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
      } else if (realContext.Provider === Context) {
        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
      }
    }
  }

  return dispatcher.useContext(Context, unstable_observedBits);
}
function useState(initialState) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useState(initialState);
}
function useReducer(reducer, initialArg, init) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useReducer(reducer, initialArg, init);
}
function useRef(initialValue) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useRef(initialValue);
}
function useEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useEffect(create, deps);
}
function useLayoutEffect(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useLayoutEffect(create, deps);
}
function useCallback(callback, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useCallback(callback, deps);
}
function useMemo(create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useMemo(create, deps);
}
function useImperativeHandle(ref, create, deps) {
  var dispatcher = resolveDispatcher();
  return dispatcher.useImperativeHandle(ref, create, deps);
}
function useDebugValue(value, formatterFn) {
  {
    var dispatcher = resolveDispatcher();
    return dispatcher.useDebugValue(value, formatterFn);
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = getComponentName(ReactCurrentOwner.current.type);

    if (name) {
      return '\n\nCheck the render method of `' + name + '`.';
    }
  }

  return '';
}

function getSourceInfoErrorAddendum(source) {
  if (source !== undefined) {
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
  }

  return '';
}

function getSourceInfoErrorAddendumForProps(elementProps) {
  if (elementProps !== null && elementProps !== undefined) {
    return getSourceInfoErrorAddendum(elementProps.__source);
  }

  return '';
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    if (parentName) {
      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    }
  }

  return info;
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }

  element._store.validated = true;
  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    return;
  }

  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.

  var childOwner = '';

  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
  }

  setCurrentlyValidatingElement(element);

  {
    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.', currentComponentErrorInfo, childOwner);
  }

  setCurrentlyValidatingElement(null);
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }

  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];

      if (isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);

    if (typeof iteratorFn === 'function') {
      // Entry iterators used to provide implicit keys,
      // but now we print a separate warning for them later.
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;

        while (!(step = iterator.next()).done) {
          if (isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var name = getComponentName(type);
    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      setCurrentlyValidatingElement(element);
      checkPropTypes(propTypes, element.props, 'prop', name, ReactDebugCurrentFrame.getStackAddendum);
      setCurrentlyValidatingElement(null);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true;

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    setCurrentlyValidatingElement(fragment);
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        break;
      }
    }

    if (fragment.ref !== null) {
      error('Invalid attribute `ref` supplied to `React.Fragment`.');
    }

    setCurrentlyValidatingElement(null);
  }
}
function createElementWithValidation(type, props, children) {
  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
  // succeed and there will likely be errors in render.

  if (!validType) {
    var info = '';

    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    }

    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

    if (sourceInfo) {
      info += sourceInfo;
    } else {
      info += getDeclarationErrorAddendum();
    }

    var typeString;

    if (type === null) {
      typeString = 'null';
    } else if (Array.isArray(type)) {
      typeString = 'array';
    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
      typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
      info = ' Did you accidentally export a JSX literal instead of a component?';
    } else {
      typeString = typeof type;
    }

    {
      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }
  }

  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
  // TODO: Drop this when these are no longer allowed as the type argument.

  if (element == null) {
    return element;
  } // Skip key warning if the type isn't valid since our key validation logic
  // doesn't expect a non-string/function type and can throw confusing errors.
  // We don't want exception behavior to differ between dev and prod.
  // (Rendering will throw with a helpful message and as soon as the type is
  // fixed, the key warnings will appear.)


  if (validType) {
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }
  }

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  } else {
    validatePropTypes(element);
  }

  return element;
}
var didWarnAboutDeprecatedCreateFactory = false;
function createFactoryWithValidation(type) {
  var validatedFactory = createElementWithValidation.bind(null, type);
  validatedFactory.type = type;

  {
    if (!didWarnAboutDeprecatedCreateFactory) {
      didWarnAboutDeprecatedCreateFactory = true;

      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
    } // Legacy hook: remove it


    Object.defineProperty(validatedFactory, 'type', {
      enumerable: false,
      get: function () {
        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

        Object.defineProperty(this, 'type', {
          value: type
        });
        return type;
      }
    });
  }

  return validatedFactory;
}
function cloneElementWithValidation(element, props, children) {
  var newElement = cloneElement.apply(this, arguments);

  for (var i = 2; i < arguments.length; i++) {
    validateChildKeys(arguments[i], newElement.type);
  }

  validatePropTypes(newElement);
  return newElement;
}

{

  try {
    var frozenObject = Object.freeze({});
    var testMap = new Map([[frozenObject, null]]);
    var testSet = new Set([frozenObject]); // This is necessary for Rollup to not consider these unused.
    // https://github.com/rollup/rollup/issues/1771
    // TODO: we can remove these if Rollup fixes the bug.

    testMap.set(0, 0);
    testSet.add(0);
  } catch (e) {
  }
}

var createElement$1 =  createElementWithValidation ;
var cloneElement$1 =  cloneElementWithValidation ;
var createFactory =  createFactoryWithValidation ;
var Children = {
  map: mapChildren,
  forEach: forEachChildren,
  count: countChildren,
  toArray: toArray,
  only: onlyChild
};

exports.Children = Children;
exports.Component = Component;
exports.Fragment = REACT_FRAGMENT_TYPE;
exports.Profiler = REACT_PROFILER_TYPE;
exports.PureComponent = PureComponent;
exports.StrictMode = REACT_STRICT_MODE_TYPE;
exports.Suspense = REACT_SUSPENSE_TYPE;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
exports.cloneElement = cloneElement$1;
exports.createContext = createContext;
exports.createElement = createElement$1;
exports.createFactory = createFactory;
exports.createRef = createRef;
exports.forwardRef = forwardRef;
exports.isValidElement = isValidElement;
exports.lazy = lazy;
exports.memo = memo;
exports.useCallback = useCallback;
exports.useContext = useContext;
exports.useDebugValue = useDebugValue;
exports.useEffect = useEffect;
exports.useImperativeHandle = useImperativeHandle;
exports.useLayoutEffect = useLayoutEffect;
exports.useMemo = useMemo;
exports.useReducer = useReducer;
exports.useRef = useRef;
exports.useState = useState;
exports.version = ReactVersion;
  })();
}


/***/ }),

/***/ "./node_modules/react/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {
  module.exports = require('./cjs/react.production.min.js');
} else {
  module.exports = __webpack_require__("./node_modules/react/cjs/react.development.js");
}


/***/ }),

/***/ 0:
/***/ (function(module, exports) {

module.exports = Injector;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map