import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ColorModeScript } from '@chakra-ui/react';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Auth0Provider
      domain="dev-4g9wubo5.jp.auth0.com"
      clientId="eQCMUDlTan60KMaf9T5NEoCVoYDDYPlf"
      redirectUri={window.location.origin}>
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
