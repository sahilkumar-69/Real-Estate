import 'swiper/css';
import 'swiper/css/navigation';
import "react-phone-input-2/lib/style.css";
import "swiper/css/pagination";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DedicatedPageForProp from "./Pages/DedicatedPageForProp";
import DownArrow from "./Components/Others/DownArrow";
import Footer from "./Components/Service/Footer";
import Services from "./Pages/Services";
import Developers from "./Pages/Developer";
import Projects from "./Pages/Projects";
import Area_page from "./Pages/Area_page";
import Blogs from "./Pages/Blogs";
import SaleProperty from "./Pages/PropertiesForSale";
import RentProperty from "./Pages/PropertiesForRent";
import BlogPage from './Pages/BlogPage';
import AboutusPage from "./Pages/AboutusPage";

function App() {
  return (
    <Router>
      <DownArrow />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/buy/properties-for-sale" element={<SaleProperty />} />

        <Route path="/rent/properties-for-rent" element={<RentProperty />} />

        <Route path="/services" element={<Services />} />

        <Route path="/developers" element={<Developers />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/areas" element={<Area_page />} />

        <Route path="/blogs" element={<BlogPage />} />

        <Route path="/about-us" element={<AboutusPage />} />
        <Route path="/buy/properties-for-sale/:propertyId" element={<DedicatedPageForProp />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
