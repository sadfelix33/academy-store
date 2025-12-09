import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Store.css";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";


const products = [
  { id: 1, name: "HP ELiteBook 840  G2", price: "$799", image: "/image/HP EliteBook 840 G2.webp",rating: 4.5 },
  { id: 2, name: "HP EliteBook 840 G1", price: "$699", image: "/image/HP EliteBook 840 G1.jpg" },
  { id: 3, name: "HP EliteBook 840 G3", price: "$25", image: "/image/HP ELiteBook 840 G5.jpg" },
  { id: 4, name: "HP ELiteBook 840 G5", price: "$199", image: "/image/HP EliteBook G5.jpg" },
  { id: 5, name: "HP ELiteBook 840 G5", price: "$199", image: "/image/HP ELiteBook  G5.jpg" },
  { id: 6, name: "Dell Latitude E7470", price: "$1,299", image: "/image/Dell Latitude E7470..jpg" },
  { id: 7, name: "HP Omen Gaming Headset", price: "$120", image: "/assets/headset.jpeg" },
  { id: 8, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg" },
  { id: 9, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg" },
  { id: 10, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg" },
  { id: 11, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg", rating: 2.2 },
  { id: 12, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg" },
  { id: 13, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg" },
  { id: 14, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg" },
  { id: 15, name: "Lenovocd  ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg" },
  { id: 16, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg" },
];

const priceRanges = [
  { label: "Under $500", min: 0, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
  { label: "Above $1000", min: 1000, max: Infinity },
];

const Store = () => {
   const navigate = useNavigate(); 

  // Search state
  const [search, setSearch] = useState("");

// wishlist
   const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

     // Filter state
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    condition: [],
    priceRange: "",
    minPrice: "",
    maxPrice: "",
  });


  // Handle filter changes
  const handleFilterChange = (type, value) => {
    setFilters((prev) => {
      if (type === "categories" || type === "brands" || type === "condition") {
        const arr = prev[type].includes(value)
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value];
        return { ...prev, [type]: arr };
      }
      if (type === "priceRange") {
        return { ...prev, priceRange: value };
      }
      if (type === "minPrice" || type === "maxPrice") {
        return { ...prev, [type]: value };
      }
      return prev;
    });
  };



  const filteredProducts = products.filter((product) => {

  // Search filter
  if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
    return false;
  }
  // Category filter
  if (
    filters.categories.length &&
    !filters.categories.some((cat) =>
      product.name.toLowerCase().includes(cat.toLowerCase())
    )
  ) {
    return false;
  }
  // Brand filter
  if (
    filters.brands.length &&
    !filters.brands.some((brand) =>
      product.name.toLowerCase().includes(brand.toLowerCase())
    )
  ) {
    return false;
  }

  //  price as number
  const priceNum = Number(product.price.replace(/[^0-9.]+/g, ""));

  // Price range filter
  if (filters.priceRange) {
    const selected = priceRanges.find((r) => r.label === filters.priceRange);
    if (selected) {
      if (priceNum < selected.min || priceNum > selected.max) return false;
    }
  }

  // Min/Max price filter
  if (filters.minPrice && priceNum < Number(filters.minPrice)) return false;
  if (filters.maxPrice && priceNum > Number(filters.maxPrice)) return false;

  return true;
});

  return (
    
    <div className="store-page">
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="/">Home</a> <span>/</span> <span>Store</span>
      </div>

      <div className="store-content">
        {/* Sidebar */}
        <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
        <div className="main-content">
          {/* Store Banner */}
          <div className="store-banner">
            <h1>All Products</h1>
            <p>Explore our collection of tech gadgets and accessories</p>

             <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="store-search"/>
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`product-card ${
                  product.id === 4 || product.id === 8 ? "highlight-card" : ""
                }`}
              >
                 {/* Product Badge */}
          {product.badge && (
            <span className="product-badge">{product.badge}</span>
          )} 

       {/* Wishlist/Favorite Icon */}
          <span
            className="wishlist-icon"
            onClick={() => toggleWishlist(product.id)}
            title={wishlist.includes(product.id) ? "Remove from wishlist" : "Add to wishlist"}
          >
            {wishlist.includes(product.id) ? (
              <FaHeart color="#ff3366" />
            ) : (
              <FaRegHeart color="#aaa" />
            )}
          </span>

            <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>

   

         <div className="product-actions">
      {/* Quick Add to Cart */}
          <button className="quick-cart-btn">
            <FaShoppingCart style={{ marginRight: 7 }} />
          </button>
                <button
                  className="view-btn"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  View Details
                </button>
                </div>
              </div>
            ))}
            {filteredProducts.length === 0 && <p>No products found.</p>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Store;