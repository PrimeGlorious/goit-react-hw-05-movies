import React from 'react';
import ReactDOM from 'react-dom/client';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

BrowserRouter.propTypes = {
  basename: PropTypes.string.isRequired,
};
