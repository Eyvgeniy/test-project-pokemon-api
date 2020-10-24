import PropTypes from 'prop-types';
import './otp.css';
import OTPForm from '../components/OtpForm.js';

const CheckOTP = ({ otp, setUser }) => {
  return (
    <div className="container h-100 d-flex justify-content-center align-items-center">
      <div className="p-3 bg-light" style={{ height: '242px' }}>
        <OTPForm otp={otp} setUser={setUser} />
      </div>
    </div>
  );
};

export default CheckOTP;

CheckOTP.propTypes = {
  otp: PropTypes.string,
  setUser: PropTypes.func,
};
