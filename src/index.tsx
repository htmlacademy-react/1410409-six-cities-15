import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import {Provider} from 'react-redux';
import {store} from './store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {TOAST_AUTO_CLOSE_TIME} from './const.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        autoClose={TOAST_AUTO_CLOSE_TIME}
        hideProgressBar
      />
      <App />
    </Provider>
  </React.StrictMode>
);
