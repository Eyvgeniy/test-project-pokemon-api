import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getUserFromLocalStorage } from './utils/localstorage';
import User from './entities/User';

const users = [new User('kode@kode.ru', 'Enk0deng')];
const savedUser = getUserFromLocalStorage();

const init = () => {
  return ReactDOM.render(
    <React.StrictMode>
      <App savedUser={savedUser} users={users} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

export default init;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
