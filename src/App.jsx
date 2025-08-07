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
import MeetTeam from './Pages/MeetOurTeam';

import LearnMore from "./Pages/LearnMore";
import WhyListWithUs from "./Components/Others/WhyListWithUs";

import DownloadBrochure from "./Pages/DownloadBrochure";
import TermsAndPrivacy from "./Pages/TermsAndPrivacy";
import BuyGuidePage from "./Pages/BuyGuidePage";
import CareerPage from "./Pages/CareerPage";
import { useState } from "react";
import PrivacyPolicy from "./Pages/privacyPolicy";
import OurAwardPage from "./Pages/OurAwardPage";
import DetailedServicePage from "./Pages/DetailedServicePage";

function App() {
  const [filterOptions, setFilterOptions] = useState({
    beds: "Any",
    bathroom: "Any",
    minArea: "",
    maxArea: "",
    location: "",
    type: "",
    status: "",
  });
  const [filterOptionsForRent, setFilterOptionsForRent] = useState({
    beds: "Any",
    bathroom: "Any",
    minArea: "",
    maxArea: "",
    location: "",
    type: "",
    status: "",
  });

  return (
    <Router>
      <DownArrow />
      <NavigationBar
        setFilterOptionsForRent={setFilterOptionsForRent}
        setFilterOptions={setFilterOptions}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/buy/properties-for-sale"
          element={
            <SaleProperty
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
            />
          }
        />

        <Route
          path="/rent/properties-for-rent"
          element={
            <RentProperty
              filterOptions={filterOptionsForRent}
              setFilterOptions={setFilterOptionsForRent}
            />
          }
        />

        <Route path="/services" element={<Services />} />

        <Route path="/services/:id" element={<ServiceDetails />} />

        <Route path="/developers" element={<Developers />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/areas" element={<Area_page />} />

        <Route path="/areas/:id" element={<AreaDetail />} />

        <Route path="/blogs" element={<BlogPage />} />

        <Route path="/learn-more" element={<LearnMore />} />

        <Route path="*" element={<UnderDevelopment />} />

        <Route path="/meet-the-team" element={<MeetTeam />} />

        <Route path="/our-awards" element={<OurAwardPage />} />

        <Route path="/about-us" element={<AboutusPage />} />

        <Route path="/careers" element={<CareerPage />} />

        <Route path="/list-property" element={<WhyListWithUs />} />

        <Route path="/blogs/:id" element={<DedicatedBlogPage />} />

        <Route path="/download-brochure" element={<DownloadBrochure />} />

        <Route path="/Privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/services/id" element={<DetailedServicePage />} />

        <Route
          path="/property-details/:id"
          element={<DedicatedPageForProp />}
        />

        <Route path="/developers/:id" element={<DeveloperDetail />} />

        <Route path="/Guide to Selling" element={<SellGuidePage />} />

        <Route path="/Guide to buying" element={<BuyGuidePage />} />

        <Route path="/terms-and-privacy" element={<TermsAndPrivacy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
