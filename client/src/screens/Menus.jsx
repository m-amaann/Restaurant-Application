import React, { useEffect, useState } from 'react';
import Navbar from '../components/layouts/Navbar';
import ProductCard from '../components/Card/ProductCard';
import { FaAngleRight } from 'react-icons/fa'; // Ensure you've installed react-icons
import '../css/menus.css';
import Footer from '../components/layouts/Footer';

function Menus() {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [menus, setMenus] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(25);
  const [filteredMenus, setFilteredMenus] = useState([]);

  // Fetch categories function
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/category/getAllCategory`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch menus function
  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/menu/all`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMenus(data);
        setFilteredMenus(data); // Set filteredMenus to contain all menus initially
      } catch (error) {
        console.error('Error fetching menus:', error);
      }
    };
    fetchMenus();
  }, []);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    const updatedFilteredMenus = category === 'All'
      ? menus
      : menus.filter((menu) => menu?.category?.name === category);

    setFilteredMenus(updatedFilteredMenus);
    console.log("filtermenu");
    console.log(updatedFilteredMenus);
    console.log("end filtermenu");
  };

  const menuItemsShowChange = (e) => {
    setItemsToShow(parseInt(e.target.value, 10));
  };

  // console.log(menus)

  return (
    <div>
      <Navbar />
      <div className="menu-container mt-4">
        <div className="row">
          <nav aria-label="breadcrumb" className='pb-4'>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="/">Home</a></li>
              <li className="breadcrumb-item"><a href="/Menu">Menu</a></li>
              <li className="breadcrumb-item active" aria-current="page">{activeCategory}</li>
            </ol>
          </nav>
          <div className="col-md-3 sidebar">
            {/* Searchbar */}
            <div className="form">
              <i className="fa fa-search"></i>
              <input type="text" className="form-control form-input" placeholder="Search anything..." />
            </div>
            <div className="categorylist-container">
              <h2 className='category-title'>Categories</h2>
              <ul className="category-list">
                <li
                  className={`category-item ${activeCategory === 'All' ? 'active' : ''}`}
                  onClick={() => handleCategoryClick('All')}
                >
                  All
                  <FaAngleRight className="category-icon" />
                </li>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`category-item ${activeCategory === category.name ? 'active' : ''}`}
                    onClick={() => handleCategoryClick(category.name)}
                  >
                    {category.name}
                    <FaAngleRight className="category-icon" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-9 product-display-area">
            <div className="title-section">
              <h1 className="page-title">{activeCategory}</h1>
              <span className="item-count"><b>{menus.length}</b> items found</span>
            </div>
            <div className="dropdown-control">
              <div className="dropdown-wrapper">
                <label htmlFor="show-items" className="dropdown-label">Show:</label>
                <div className="dropdown">
                  <select id="show-items" value={itemsToShow} onChange={menuItemsShowChange}>
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
              {filteredMenus.length === 0 ? (
                <div className="col-md-12">
                  <p>No menu items found.</p>
                </div>
              ) : (
                filteredMenus.slice(0, itemsToShow).map((menu) => (
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <ProductCard menu={menu} key={menu._id} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menus;
