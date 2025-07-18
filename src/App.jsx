import 'swiper/css';
import 'swiper/css/navigation';
import "react-phone-input-2/lib/style.css";

import "swiper/css/pagination";

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import PropertyListingPage from "./Pages/PropertiesForRent";
import DedicatedPageForProp from "./Pages/DedicatedPageForProp";
import DownArrow from "./Components/Others/DownArrow";
import Footer from "./Components/Service/Footer";
import Services from "./Pages/Services";
import RentPropertyListingPage from "./Pages/PropertiesForRent";
import Developers from "./Pages/Developer";

function App() {
  return (
    <Router>
      <DownArrow />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/developers" element={<Developers />} />
        <Route
          path="/buy/properties-for-sale"
          element={<PropertyListingPage />}
        />
        <Route
          path="/buy/properties-for-rent"
          element={<RentPropertyListingPage />}
        />
        <Route
          path="/rent/properties-for-rent"
          element={<PropertyListingPage />}
        />
        <Route
          path="//buy/properties-for-sale/:propertyId"
          element={<DedicatedPageForProp />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
