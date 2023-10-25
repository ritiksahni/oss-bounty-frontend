import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme accentColor="jade">
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}>
              <App />
            </RouterProvider>
          </QueryClientProvider>
    </Theme>
  </React.StrictMode>,
)
