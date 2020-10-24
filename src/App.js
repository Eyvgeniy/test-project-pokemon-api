import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import RouteWithCondition from './components/RouteWithCondition';
import Home from './pages/Home';
import CheckOTP from './pages/CheckOTP';
import Cards from './pages/Cards';
import User from './entities/User';

const users = [new User('kode@kode.ru', 'Enk0deng')];

const App = () => {
  const [user, setUser] = useState({
    login: null,
    password: null,
    passCheck: false,
    otp: '123456',
    otpCheck: false,
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/cards" component={Cards} />
        <Route
          exact
          path="/otp"
          render={(props) => <CheckOTP {...props} otp={user.otp} setUser={setUser} />}
        />
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} users={users} setUser={setUser} />}
        />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
