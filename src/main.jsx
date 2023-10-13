import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
    // add routes here.
  ]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
    </RouterProvider>
  </React.StrictMode>,
)
