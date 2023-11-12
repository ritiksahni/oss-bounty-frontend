import './css/App.css';
import Layout from './Layout';
import AuthContext from './contexts/AuthContext';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HowItWorks from './pages/HowItWorks.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CreatorCard from './pages/Creator.jsx';
import CreateBounty from './pages/CreateBountyForm.jsx';
import AddClaimForm from './pages/AddClaimForm.jsx';
import ListClaims from './pages/ListClaims.jsx';
import Homepage from './components/Homepage';
import BountyPage from './pages/BountyPage';
import AuthProvider from './components/AuthProvider.jsx';

function App() {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isError, setIsError] = useState(false);
  
  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, isError, setIsError }}>
      <AuthProvider>
        {({ isLoading }) => (
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/dashboard" element={<Dashboard isLoadingUser={isLoading} />} />
                <Route path="/bounty/:id" element={<BountyPage />} />
                <Route path="/creator" element={<CreatorCard />} />
                <Route path="/create-bounty" element={<CreateBounty />} />
                <Route path="/bounty/:id/add-claim" element={<AddClaimForm />} />
                <Route path="/bounty/:id/claims" element={<ListClaims />} />
              </Routes>
            </Layout>
          </Router>
        )}
      </AuthProvider>
    </AuthContext.Provider>
  );
}

export default App;