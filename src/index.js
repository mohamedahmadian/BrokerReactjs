import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route   } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Main from './Main';
import './assets1/css/style.css'
import './index.css'
import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
ReactDOM.render(
  <BrowserRouter >
    <div>
      <Route exact path="/Login" component={Login} />
      <Route path="/" component={Main} />
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();





