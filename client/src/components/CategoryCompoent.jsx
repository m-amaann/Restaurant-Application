import React from 'react';
import MultiCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../css/section/CategoryListing.css'; 


// Import your category images
import CategoryImage1 from '../assets/cover/burger/2.png';
import CategoryImage2 from '../assets/cover/burger/3d.png';
import CategoryImage3 from '../assets/food/2.jpeg';
import CategoryImage4 from '../assets/food/1.webp';
import CategoryImage5 from '../assets/food/dessert.jpeg';
import CategoryImage6 from '../assets/food/submarine.jpeg';
import CategoryImage7 from '../assets/cover/burger/3.jpeg';

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
  }
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

function CategoryCompoent() {

  

  const categories = [
    { img: CategoryImage1, title: 'Chicken, Meat' },
    { img: CategoryImage2, title: 'Cleaning' },
    { img: CategoryImage3, title: 'Sub' },
    { img: CategoryImage4, title: 'Burger' },
    { img: CategoryImage5, title: 'Pasta' },
    { img: CategoryImage6, title: 'Cake' },
    { img: CategoryImage7, title: 'Dinner' },
  ];


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
          <div key={index} className="carousel-item-content">
            <img src={category.img} alt={category.title} className="category-image" />
            <p className="category-title">{category.title}</p>
          </div>
        ))}
      </MultiCarousel>
    </div>
  );
}

export default CategoryCompoent;
