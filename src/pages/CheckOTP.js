import PropTypes from 'prop-types';
import OTPForm from '../components/OtpForm.js';

const CheckOTP = ({ isValid }) => {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="p-3 bg-light" style={{ height: '242px' }}>
        <OTPForm isValid={isValid} />
      </div>
    </div>
  );
};

export default CheckOTP;

CheckOTP.propTypes = {
  isValid: PropTypes.func,
};
