import './css/App.css';
import Layout from './Layout';
import { useState } from 'react';
import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = { user, isLoggedIn, setUser, setIsLoggedIn };

  return (
      <>
      <AuthContextProvider value={value}>
        <Layout />
      </AuthContextProvider>
      </>
  );
}

export default App;