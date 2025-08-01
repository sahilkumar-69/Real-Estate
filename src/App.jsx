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
import SaleProperty from "./Pages/PropertiesForSale";
import RentProperty from "./Pages/PropertiesForRent";
import BlogPage from "./Pages/BlogPage";
import AboutusPage from "./Pages/AboutusPage";
import DedicatedBlogPage from "./Pages/Blog";
import DeveloperDetail from "./Pages/DeveloperDetail";
import AreaDetail from "./Pages/AreaDetail";
import SellGuidePage from "./Pages/SellGuidePage";
import ServiceDetails from "./Pages/ServiceDetails";
import UnderDevelopment from './Pages/UnderDevelopement';

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

        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/developers" element={<Developers />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/areas" element={<Area_page />} />

        <Route path="/areas/:id" element={<AreaDetail />} />

        <Route path="/blogs" element={<BlogPage />} />

        <Route path="*" element={<UnderDevelopment />} />



        <Route path="/about-us" element={<AboutusPage />} />

        <Route path="/property-details/:id" element={<DedicatedPageForProp />} />

        <Route path="/blogs/:id" element={<DedicatedBlogPage />} />

        <Route path="/developers/:id" element={<DeveloperDetail />} />

        <Route path="/Guide to Selling" element={<SellGuidePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
