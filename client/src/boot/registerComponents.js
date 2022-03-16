import Injector from 'lib/Injector'; // eslint-disable-line
import Verify from 'components/Twilio/Verify';
import Register from 'components/Twilio/Register';

export default () => {
  Injector.component.registerMany({
    TwilioRegister: Register,
    TwilioVerify: Verify,
  });
};
