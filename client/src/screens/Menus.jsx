import React, { useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import ProductCard from '../components/Card/ProductCard';
import { FaAngleRight } from 'react-icons/fa'; // Ensure you've installed react-icons
import '../css/menus.css';
import Footer from '../components/layouts/Footer';

function Menus() {
  const categories = ['Seafood', 'Sides', 'Desserts', 'Beverages', 'Special Diets', 'Kids Menu', 'Seasonal Specials', 'Starter'];
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products] = useState([...Array(8).keys()].map(n => ({ id: n, name: `Product ${n + 1}` })));

  const [itemsToShow, setItemsToShow] = useState(10);


  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <Navbar />
      <div className="menu-container mt-4">
        <div className="row">
          <nav aria-label="breadcrumb" className='pb-4'>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/Menu">Menu</a></li>
              <li className="breadcrumb-item active" aria-current="page">Seafood</li>
            </ol>
          </nav>
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
            <div className="title-section">
              <h1 className="page-title">Seafood</h1>
              <span className="item-count"><b>{products.length}</b> items found</span>
            </div>
            <div className="dropdown-control">
              <div className="dropdown-wrapper">
                <label htmlFor="show-items" className="dropdown-label">Show:</label>
                <div className="dropdown">
                  <select id="show-items" value={itemsToShow} onChange={e => setItemsToShow(e.target.value)}>
                    <option value="4">4</option>
                    <option value="10">10</option>
                    <option value="16">16</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                  </select>
                  <i className='bx bx-chevron-down dropdown-icon'></i>
                </div>
              </div>
            </div>
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
      <Footer/>
    </div>
  );
}

export default Menus;
