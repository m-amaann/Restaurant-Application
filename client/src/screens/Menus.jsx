import React, { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import ProductCard from '../components/Card/ProductCard';
import { FaAngleRight } from 'react-icons/fa'; // Ensure you've installed react-icons
import '../css/menus.css';

function Menus() {
  const categories = ['Seafood', 'Sides', 'Desserts', 'Beverages', 'Special Diets', 'Kids Menu', 'Seasonal Specials', 'Starter'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products] = useState([...Array(23).keys()].map(n => ({ id: n, name: `Product ${n + 1}` })));

  const handleCategoryClick = (category) => {
    setActiveCategory(category); 
  };

  return (
    <div>
      <Navbar />
      <div className="menu-container mt-4">
        <div className="row">
          <div className="col-md-3 sidebar">
            {/* Searchbar */}
            <div class="form">
              <i class="fa fa-search"></i>
              <input type="text" class="form-control form-input" placeholder="Search anything..." />
            </div>
            <div className="categorylist-container">
              <h2 className='category-title'>Categories</h2>
              <ul className="category-list">
                {categories.map((category, index) => (
                  <li key={index}
                    className={`category-item ${activeCategory === category ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category)}>
                    {category}
                    <FaAngleRight className="category-icon" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-9 product-display-area">
            <h2 className="page-title">Daily Bread & Eggs</h2>
            <div className="row">
              {products.map((product) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menus;
