import React, { useEffect, useState } from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/section/CategoryListing.css';
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow custom-left-arrow">
    <i className='bx bx-chevron-left'></i>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button onClick={onClick} className="custom-arrow custom-right-arrow">
    <i className='bx bx-chevron-right'></i>
  </button>
);

function CategoryComponent() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from your API
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/category/getAllCategory`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="featured-categories-container" data-aos="fade-right" data-aos-offset="300">
      <h2 className="featured-categories-title">Featured Categories</h2>
      <MultiCarousel
        responsive={responsive}
        ssr
        infinite={true}
        arrows={false}
        autoPlay={false}
        customTransition="transform 300ms ease-in-out"
        itemClass="carousel-item-padding-40-px"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        {categories.map((category, index) => (
          <Link to={`/CategoryAll/${category.id}`} key={index} className="carousel-item-content">
            <img src={category.image} alt={category.name} className="category-image" />
            <p className="category-title">{category.name}</p>
          </Link>
        ))}
      </MultiCarousel>
    </div>
  );
}

export default CategoryComponent;
