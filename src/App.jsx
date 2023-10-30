import './css/App.css';
import Layout from './Layout';
import AuthContext from './contexts/AuthContext';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  setIsAuthenticated(true);
  return (
      <>
      <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
        <Layout />
      </AuthContext.Provider>
      </>
  );
}

export default App;