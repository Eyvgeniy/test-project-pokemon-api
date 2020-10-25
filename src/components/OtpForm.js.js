import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const OtpForm = ({ isValid }) => {
  const [value, setValue] = useState('');
  const [isValidOTP, setIsValidOTP] = useState(null);
  const history = useHistory();

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid(value)) {
      history.push('/cards');
    }
    setIsValidOTP('Code is not valid');
  };

  return (
    <form className="h-100 d-flex flex-column justify-content-between" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="inputOtp" className="form-label">
          Code from SMS
          <input
            name="otp"
            type="text"
            className="form-control"
            id="inputOtp"
            value={value}
            required
            onChange={handleChange}
          />
          {isValidOTP && <p className="text-danger">{isValidOTP}</p>}
        </label>
      </div>
      <button type="submit" className="btn btn-secondary d-block mx-auto">
        Continue
      </button>
    </form>
  );
};

export default OtpForm;

OtpForm.propTypes = { otp: PropTypes.string.isRequired, setUser: PropTypes.func.isRequired };
