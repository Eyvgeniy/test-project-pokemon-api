import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Login = ({ isValid }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [invalidUser, setInvalidUser] = useState(false);

  const history = useHistory();

  const handleSumbit = (e) => {
    e.preventDefault();
    if (isValid(login, password)) {
      setInvalidUser(false);
      history.push('/otp');
    }
    setInvalidUser(true);
  };

  const handleChange = (setState) => (e) => {
    setState(e.target.value);
  };
  return (
    <form onSubmit={handleSumbit}>
      <div className="mb-3">
        <label htmlFor="inputLogin" className="form-label d-block mx-auto">
          Login
          <input
            name="login"
            type="text"
            className="form-control"
            id="inputLogin"
            aria-describedby="loginHelp"
            required
            value={login}
            onChange={handleChange(setLogin)}
          />
        </label>
      </div>
      <div className="mb-3">
        <label name="password" htmlFor="inputPassword" className="form-label d-block mx-auto">
          Password
          <input
            name="password"
            type="password"
            className="form-control"
            id="inputPassword"
            value={password}
            required
            onChange={handleChange(setPassword)}
          />
        </label>
      </div>

      <button type="submit" className="btn btn-secondary d-block mx-auto">
        Sign In
      </button>
      {invalidUser && <p className="text-danger my-2">Login or password is not valid</p>}
    </form>
  );
};

export default Login;

Login.propsType = { isValid: PropTypes.func.isRequired };
