import React, { useState } from "react";
import "./FilterSidebar.css";

const categories = ["Laptops", "Desktops", "Accessories", "Monitors"];
const brands = ["HP", "Dell", "Lenovo", "Apple"];
const conditions = ["New", "Used", "Refurbished"];
// In FilterSidebar.jsx
const priceRanges = [
  "Under $500",
  "$500 - $1000",
  "Above" ];

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [min, setMin] = useState(filters.minPrice || "");
  const [max, setMax] = useState(filters.maxPrice || "");

  const handleMinMax = (e) => {
    e.preventDefault();
    onFilterChange("minPrice", min);
    onFilterChange("maxPrice", max);
  };
   // Add this function for resetting price filters
  const handleResetPrice = () => {
    setMin("");
    setMax("");
    onFilterChange("minPrice", "");
    onFilterChange("maxPrice", "");
    onFilterChange("priceRange", "");
  };

  return (
    <div className="filter-sidebar">
      <h3>Filter Products</h3>

      {/* Category */}
      <div className="filter-group">
        <h4>Category</h4>
        {categories.map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              checked={filters.categories.includes(cat)}
              onChange={() => onFilterChange("categories", cat)}
            />{" "}
            {cat}
          </label>
        ))}
      </div>

      {/* Brand */}
      <div className="filter-group">
        <h4>Brand</h4>
        {brands.map((brand) => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={filters.brands.includes(brand)}
              onChange={() => onFilterChange("brands", brand)}
            />{" "}
            {brand}
          </label>
        ))}
      </div>

      {/* Condition */}
      <div className="filter-group">
        <h4>Condition</h4>
        {conditions.map((cond) => (
          <label key={cond}>
            <input
              type="checkbox"
              checked={filters.condition.includes(cond)}
              onChange={() => onFilterChange("condition", cond)}
            />{" "}
            {cond}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="filter-group">
        <h4>Price Range</h4>
        <form className="number" onSubmit={handleMinMax}>
          <input
            type="number"
            placeholder="Min"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
          <button className="apply-btn" type="submit">
            Apply
          </button>
            {/* Reset button */}
          <button
            type="button"
            className="apply-btns"
            style={{ marginLeft: "8px", background: "#ccc", color: "#002147" }}
            onClick={handleResetPrice}
          >
            ok          </button>
        </form>
        {priceRanges.map((range) => (
          <label key={range}>
            <input
              type="radio"
              name="price"
              checked={filters.priceRange === range}
              onChange={() => onFilterChange("priceRange", range)}
            />{" "}
            {range}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSidebar;