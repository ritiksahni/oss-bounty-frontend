import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HowItWorks from './pages/HowItWorks.jsx';
import Layout from './Layout.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CreatorCard from './pages/Creator.jsx';
import CreateBounty from './pages/CreateBountyForm.jsx';
import Homepage from './components/Homepage.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Homepage />},
      { path: '/how-it-works', element: <HowItWorks />},
      { path: '/dashboard', element: <Dashboard />},
      { path: '/creator', element: <CreatorCard />},
      { path: '/create-bounty', element: <CreateBounty />}
    ]
  }
]);

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const onRedirectCallback = (appState) => {
  router.navigate(appState?.returnTo || window.location.pathname);
}

const providerConfig = {
  domain: auth0Domain,
  clientId: auth0ClientId,
  onRedirectCallback,
  useRefreshTokens: true,
  cacheLocation: 'localstorage',
  authorizationParams: {
    redirect_uri: window.location.origin,
    scope: 'read:bounties create:bounties',
    ...(process.env.REACT_APP_AUTH0_AUDIENCE ? { audience: process.env.REACT_APP_AUTH0_AUDIENCE } : null),
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme accentColor="jade">
        <Auth0Provider {...providerConfig}>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}>
              <App />
            </RouterProvider>
          </QueryClientProvider>
        </Auth0Provider>
    </Theme>
  </React.StrictMode>,
)
