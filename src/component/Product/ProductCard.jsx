import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";


const products = [
  { id: 1, name: "HP Pavilion 15", price: "$799", image: "/assets/OIP.webp" },

  { id: 2, name: "Dell Inspiron 14", price: "$699", image: "/assets//dell.webp" },

  { id: 3, name: "Logitech Wireless Mouse", price: "$25", image: "/assets//mouse.jpeg" },
  { id: 4, name: "Samsung 24'' Monitor", price: "$199", image: "../assets//samsung1.jpeg" },
];

const ProductCard = () => {
   const navigate = useNavigate();
  return (
    <section className="products" id="shop">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="add-btn" onClick={() => navigate("/products")}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCard;
