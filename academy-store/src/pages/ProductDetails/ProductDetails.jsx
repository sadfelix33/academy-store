import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const products = [
  { id: 1, name: "HP ELiteBook 840 ", price: "$799", image: "/image/HP EliteBook 840 G2.webp", description: [
    "HP ELiteBook 840 G2",
    "Intel",
    "Core i5",
    "14.0\" size",
    "8Gb RAM",
    "Windows 10",
    "4th Generation",
    "Keyboard Light",
    "2.50GHz Processor"
  ] },
  { id: 2, name: "HP ELiteBook 840 G1", price: "$699", image: "/image/HP EliteBook 840 G1.jpg",  description: [
    "HP ELiteBook 840 G1",
    "Intel",
    "Core i5",
    "14.0\" size",
    "8Gb RAM",
    "Windows 10",
    "5th Generation",
    "Keyboard Light",
    "2.50GHz Processor"
  ] },
  { id: 3, name: "HP ELiteBook 840 G3", price: "$25", image: "/image/HP ELiteBook 840 G5.jpg", description:[
     
  "HP ELiteBook 840 G3",
  "Intel",
  "Core i5",
  "14.0\" size",
  "8Gb RAM",
  "Windows 10/11" ,
  "6th Generation",
  "Keyboard Light", 
  "2.50GHz Processor",
  "Silver Colour"] 
},
  { id: 4, name: "HP ELiteBook 840 G5", price: "$199", image: "/image/HP EliteBook G5.jpg",description:[
     
  "HP ELiteBook 840 G5",
  "Intel",
  "Core i5",
  "14.0\" size",
  "8Gb RAM",
  "Windows 10/11" ,
  "6th Generation",
  "Keyboard Light", 
  "2.50GHz Processor",
  "Face ID",
  "Silver Colour"
 
]  },
   { id: 5, name: "HP ELiteBook 840 G5", price: "$199", image: "/image/HP EliteBook  G5.jpg",description:[
     
  "HP ELiteBook 840 G5",
  "Intel",
  "Core i5",
  "14.0\" size",
  "8Gb RAM",
  "Windows 10/11" ,
  "6th Generation",
  "Keyboard Light", 
  "2.50GHz Processor",
  "Face ID",
  "Silver Colour"
 
]  },
   { id: 6, name: "Dell Latitude E7470", price: "$199", image: "/image/Dell Latitude E7470..jpg",description:[
     
  "HP ELiteBook 840 G5",
  "Intel",
  "Core i5",
  "14.0\" size",
  "8Gb RAM",
  "Windows 10/11" ,
  "6th Generation",
  "Keyboard Light", 
  "2.50GHz Processor",
  "Face ID",
  "Silver Colour"
 
]  },
  { id: 7, name: "HP Omen Gaming Headset", price: "$120", image: "/assets/headset.jpeg", description: "Immersive sound for gaming." },
  { id: 8, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg", description: "Business-class performance and design." },
  { id: 9, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg", description: "Business-class performance and design." },
  { id: 10, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg", description: "Business-class performance and design." },
  { id: 11, name: "Lenovo ThinkPad X1", price:  "$1,099", image: "/assets/lenovo.jpeg", description: "Business-class performance and design." },
  { id: 12, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg", description: "Business-class performance and design." },
  { id: 13, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg", description: "Business-class performance and design." },
  { id: 14, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg", description: "Business-class performance and design." },
  { id: 15, name: "Lenovo ThinkPad X1", price: "$1,099", image: "/assets/lenovo.jpeg", description: "Business-class performance and design." },
  { id: 16, name: "Lenovo ThinkPad X1", price:  "$1,099", image: "/assets/lenovo.jpeg", description: "Business-class performance and design." },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
       {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <a href="/">Home</a> <span>/</span> <a href="/products">Store</a><span>/</span> <span>Details</span> 
      </div>
    <div className="product-details">
     
      <img src={product.image} alt={product.name} />
      <div className="details-text">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <h2 className="config">Configuration</h2>
         <ul className="product-specs">
          {product.description.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
        <button className="buy-btn">Add to Cart</button>
      </div>
    </div>
    </div>
  );
};

export default ProductDetails;
