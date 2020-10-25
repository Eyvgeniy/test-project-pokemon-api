import { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import RouteWithCondition from './components/RouteWithCondition';
import Home from './pages/Home';
import CheckOTP from './pages/CheckOTP';
import Cards from './pages/Cards';
import User from './entities/User';

const users = [new User('kode@kode.ru', 'Enk0deng')];
const defaultUser = {
  login: null,
  password: null,
  passCheck: false,
  otp: '123456',
  otpCheck: true,
};

const App = () => {
  const [user, setUser] = useState(defaultUser);

  const logout = () => setUser(defaultUser);

  return (
    <Router>
      <Switch>
        <RouteWithCondition path="/cards" condition={user.otpCheck} to={'/'}>
          <Cards logout={logout} />
        </RouteWithCondition>
        <RouteWithCondition path="/otp" condition={user.passCheck} to={'/'}>
          <CheckOTP otp={user.otp} setUser={setUser} />
        </RouteWithCondition>
        <RouteWithCondition path="/" condition={!user.otpCheck} to={'/cards'}>
          <Home users={users} setUser={setUser} />
        </RouteWithCondition>
      </Switch>
    </Router>
  );
};

export default App;
