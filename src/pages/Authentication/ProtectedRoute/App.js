// App.js
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Academy from "./pages/Academy/Academy";
import CourseDetail from "./pages/Academy/CourseDetails/CourseDetail";
import Authentication from "./pages/Authentication/Authentication";
import Register from "./pages/Authentication/Register/Register";
import { AuthProvider } from "./pages/AuthContext";
import ProtectedLayout from "./pages/ProtectedLayout";
import PublicLayout from "./pages/PublicLayout";
import Profile from "./pages/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import { isAuthenticated } from "./pages/Authentication/Authentication";
import About from "./pages/About";
// import ProtectedRoute from "./pages/Authentication/ProtectedRoute/ProtectedRoute";


// PrivateRoute helper
const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/authentication" replace />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
       
        <Routes>
          {/* 🔹 Auth pages */}
          {/* <Route path="/authentication" element={<Authentication />} /> */}
          <Route path="/authentication/register" element={<Register />} />

          {/* 🔹 Public Pages (Always visible) */}
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><Contact /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><About/></PublicLayout>} />


          {/* 🔹 Protected Pages (Only after login) */}
          <Route element={<ProtectedLayout />}>
            <Route path="/products" element={<Store />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/academy/course/:id" element={<CourseDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>

      
      </Router>
    </AuthProvider>
  );
}

export default App;
             {/* Ratings */}
   <div className="product-rating">
    {Array.from({ length: 5 }).map((_, i) => {
    if (product.rating >= i + 1) {
      return <FaStar key={i} color="#002147" />;
    } else if (product.rating > i && product.rating < i + 1) {
      return <FaStar key={i} color="#002147" style={{ opacity: 0.5 }} />;
    } else {
      return <FaRegStar key={i} color="#ccc" />;
    }
  })}
  <span style={{ marginLeft: 6, fontSize: "0.9em", color: "#555" }}>
    {product.rating}
  </span>
</div>