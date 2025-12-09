// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Academy from "./pages/Academy/Academy";
import CourseDetail from "./pages/Academy/CourseDetails/CourseDetail";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <Router>
       <Navbar />
      <Routes>
        {/* 🔹 Public Pages (Always visible) */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* 🔹 Store & Academy Pages */}
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/products" element={<Store />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/academy/course/:id" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
