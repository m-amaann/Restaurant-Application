import React from 'react'
import Navbar from '../components/layouts/Navbar'
import ProductCard from '../components/Card/ProductCard'

// CSS
import '../css/menus.css'


function Menus() {

    // Dummy categories data
    const categories = ['Dairy, Bread & Eggs', 'Snacks & Munchies', 'Fruits & Vegetables', /* more categories */ ];

    // Function to handle category click
    const handleCategoryClick = (category) => {
      console.log(`Category selected: ${category}`);
      // Perform action on category click
    };
  

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-3 sidebar">
            <input type="text" placeholder="Search menu items" className="search-bar" />
            <ul className="category-list">
              {categories.map((category, index) => (
                <li key={index} onClick={() => handleCategoryClick(category)}>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-9 product-display-area">
            <h2 className="page-title">Daily Bread & Eggs</h2>
            <div className="product-container">
              {/* This will loop through your products and render ProductCard components */}
              <ProductCard />
              <ProductCard />
              {/* ... more ProductCards ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menus
