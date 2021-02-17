import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './state/store';
import './assets/fonts/Playfair Display/stylesheet.css';
import './assets/fonts/Source Sans Pro/stylesheet.css';
import './index.scss';
import Routes from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
