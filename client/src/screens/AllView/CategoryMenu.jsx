// CategoryMenu.js
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/layouts/Navbar';
import ProductCard from '../../components/Card/ProductCard';
import './CategoryMenu.css';
import Pagination from '../../components/Pagination';
import { useParams, Link } from 'react-router-dom';

function CategoryMenu() {
  const { categoryId } = useParams();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(10);
  const [sortBy, setSortBy] = useState('featured');
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/menu/category/${categoryId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMenus(data);
      } catch (error) {
        console.error('Error fetching menus:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMenus();
  }, [categoryId]);

  const getSortedMenus = () => {
    return menus;
  };

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const pageCount = Math.ceil(menus.length / itemsToShow);

  const currentMenus = getSortedMenus().slice(currentPage * itemsToShow, (currentPage + 1) * itemsToShow);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <nav aria-label="breadcrumb" className='pb-1'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/Menu">Menu</a></li>
            <li className="breadcrumb-item active" aria-current="page">Burgers</li>
          </ol>
        </nav>
        <div className="title-area">
          <h1 className="item-title">BURGERS</h1>
          <span className="item-count">{loading ? 'Loading...' : `${menus.length} items found`}</span>
        </div>
        <div className="controls">
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
          <div className="dropdown-wrapper">
            <label htmlFor="sort-by" className="dropdown-label">Sort by:</label>
            <div className="dropdown">
              <select id="sort-by" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="popular">Popular</option>
                <option value="a-z">A-Z</option>
              </select>
              <i className='bx bx-chevron-down dropdown-icon'></i>
            </div>
          </div>
        </div>
        {loading ? (
          <p>Loading menus...</p>
        ) : menus.length === 0 ? (
          <div>
            <p>No menu items found in this category.</p>
            
          </div>
        ) : (
          <div className="row">
            {currentMenus.map((menu, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6" key={menu._id}>
                <ProductCard menu={menu} />
              </div>
            ))}
          </div>
        )}
        <Pagination
          pageCount={pageCount}
          handlePageClick={handlePageClick}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}

export default CategoryMenu;
