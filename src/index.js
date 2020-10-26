import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getUserFromLocalStorage } from './utils/validate';
import User from './entities/User';

const users = [new User('kode@kode.ru', 'Enk0deng')];
const savedUser = getUserFromLocalStorage();

ReactDOM.render(
  <React.StrictMode>
    <App savedUser={savedUser} users={users} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
