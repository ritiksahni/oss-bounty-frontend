import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import HowItWorks from './pages/HowItWorks.jsx';
import Layout from './Layout.jsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    children: [
      { path: '/how-it-works', element: <HowItWorks />}
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme accentColor="jade">
      <RouterProvider router={router}>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
      </RouterProvider>
    </Theme>
  </React.StrictMode>,
)
