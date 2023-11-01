import './css/App.css';
import Layout from './Layout';
import AuthContext from './contexts/AuthContext';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HowItWorks from './pages/HowItWorks.jsx';
import Dashboard from './pages/Dashboard.jsx';
import CreatorCard from './pages/Creator.jsx';
import CreateBounty from './pages/CreateBountyForm.jsx';
import Homepage from './components/Homepage';
import BountyPage from './components/BountyPage';

function App() {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bounty/:id" element={<BountyPage />} />
            <Route path="/creator" element={<CreatorCard />} />
            <Route path="/create-bounty" element={<CreateBounty />} />
          </Routes>
        </Layout>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;