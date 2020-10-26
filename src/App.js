import { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import RouteWithCondition from './components/RouteWithCondition';
import Home from './pages/Home';
import CheckOTP from './pages/CheckOTP';
import Cards from './pages/Cards';
import LoggedIn from './pages/LoggedIn';
import { validateUser, validateOtp } from './utils/validate';
import './App.css';

const defaultUser = {
  login: null,
  password: null,
  passCheck: false,
  otp: '123456',
  otpCheck: true,
};

const App = ({ savedUser, users }) => {
  const initUSer = savedUser || defaultUser;
  const [user, setUser] = useState(initUSer);

  const logout = () => {
    setUser(defaultUser);
    localStorage.clear();
  };

  return (
    <Router>
      {user.otpCheck ? (
        <Switch>
          <Route path="/cards">
            <Cards logout={logout} />
          </Route>
          <Route path="*">
            <LoggedIn />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <RouteWithCondition path="/cards" condition={user.otpCheck} to={'/'}>
            <Cards logout={logout} />
          </RouteWithCondition>
          <RouteWithCondition path="/otp" condition={user.passCheck} to={'/'}>
            <CheckOTP isValid={validateOtp(user.otp, setUser)} />
          </RouteWithCondition>
          <RouteWithCondition path="/" condition={!user.otpCheck} to={'/cards'}>
            <Home isValid={validateUser(users, setUser)} />
          </RouteWithCondition>
        </Switch>
      )}
    </Router>
  );
};

export default App;
