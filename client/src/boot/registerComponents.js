import Injector from 'lib/Injector'; // eslint-disable-line
import Verify from 'components/OTPAuthenticator/Verify';
import Register from 'components/OTPAuthenticator/Register';

export default () => {
  Injector.component.registerMany({
    OTPAuthenticatorRegister: Register,
    OTPAuthenticatorVerify: Verify,
  });
};
