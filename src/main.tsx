import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux';
import { store } from './ts/store';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <Provider store={store}>
    <App />
  </Provider>
);