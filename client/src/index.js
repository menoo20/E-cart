import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux"
import store, {persistor} from './Redux/store';
import Toast from "./components/Toast/ToastContainer"
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> 
      <Router>
        <App />
      </Router>
    </PersistGate> 
  </Provider>
  </StrictMode>,
  document.getElementById('root')
);

