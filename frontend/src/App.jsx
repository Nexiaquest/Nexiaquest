import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Careers from './components/pages/Careers';
import ContactUs from './components/pages/ContactUs';

import RealEstate from './components/pages/services/RealEstate';
import Education from './components/pages/services/Education';
import Finance from './components/pages/services/Finance';
import Insurance from './components/pages/services/Insurance';
import Marketing from './components/pages/services/Marketing';
import Legal from './components/pages/services/Legal';
import SharesMutualFund from './components/pages/services/SharesMutualFund';
import ArchitectureInterior from './components/pages/services/ArchitectureInterior';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/real-estate-services" element={<RealEstate />} />
          <Route path="/education-services" element={<Education />} />
          <Route path="/finance-services" element={<Finance />} />
          <Route path="/insurance-services" element={<Insurance />} />
          <Route path="/marketing-services" element={<Marketing />} />
          <Route path="/legal-services" element={<Legal />} />
          <Route path="/shares-&-mutual-fund-services" element={<SharesMutualFund />} />
          <Route path="/architecture-&-interior-services" element={<ArchitectureInterior />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
