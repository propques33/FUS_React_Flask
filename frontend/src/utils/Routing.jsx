import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import ProjectPage from '../components/ProjectPage.jsx';
import ViewAllProperties from '../components/ViewAllProperties.jsx';
import SearchResult from '../pages/SearchResult.jsx';
import AddCenterData from '../components/AddCenterData.jsx';
import Results from '../components/Results.jsx';
import PortfolioCubispace from '../components/PortfolioCubispace.jsx';
import PortfolioWorkdesq from '../components/PortfolioWorkdesq.jsx';
import PortfolioWorqspot from '../components/PortfolioWorqspot.jsx';
import Thankyou from '../components/Thankyou.jsx';
import Login from '../components/Login.jsx';
import Checkout from '../components/Checkout.jsx';
import ManagedOffice from '../components/ManagedOffice.jsx';
import SBV from '../components/SBV.jsx';
import Dashboard from '../components/Dashboard.jsx';
import TermsAndConditions from '../components/TermsAndConditions.jsx';

function App() { 
  return (
     <Routes>
        <Route path="/propques-portfolio" element={<Home />} />
        <Route path="/properties/:id" element={<ProjectPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view-all-projects" element={< ViewAllProperties  />} />
        <Route path="/search" element={< SearchResult  />} />
        <Route path="/add-center" element={< AddCenterData  />} />
        <Route path="/results" element={< Results  />} />
        <Route path="/cubispace-portfolio" element={< PortfolioCubispace  />} />
        <Route path="/workdesq-portfolio" element={< PortfolioWorkdesq />} />
        <Route path="/worqspot-portfolio" element={< PortfolioWorqspot />} />
        <Route path="/thankyou" element={< Thankyou />} />
        <Route path="/checkout" element={< Checkout />} />
        <Route path="/sbv" element={< SBV />} />
        <Route path="/managed-office" element={< ManagedOffice />} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/terms-and-conditions" element={< TermsAndConditions />} />

        
             
      </Routes>
  );
}

export default App;
