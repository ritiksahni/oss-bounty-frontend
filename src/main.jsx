import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Theme accentColor="jade">
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
      </Theme>
  </React.StrictMode>,
)
