import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      
      {/* THIS MUST BE HERE */}
      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default PublicLayout;
  