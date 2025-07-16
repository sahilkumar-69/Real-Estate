import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
