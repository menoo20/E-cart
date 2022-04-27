import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux"
import store from './Redux/store';
import Toast from "./components/Toast/ToastContainer"


ReactDOM.render(
  <StrictMode>
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  </StrictMode>,
  document.getElementById('root')
);

