import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ColorModeScript } from '@chakra-ui/react';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ColorModeScript />
      <Auth0Provider
        domain="dev-4g9wubo5.jp.auth0.com"
        clientId="eQCMUDlTan60KMaf9T5NEoCVoYDDYPlf"
        redirectUri={window.location.origin}>
        <App />
        <ReactQueryDevtools />
      </Auth0Provider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
