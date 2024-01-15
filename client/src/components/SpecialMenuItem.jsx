import React, { useState } from 'react';
import Slider from 'react-slick';

// Importing assets
import demo1 from '../assets/cover/burger/2.png';
import demo2 from '../assets/food/submarine.jpeg';
import demo3 from '../assets/food/dessert.jpeg';
import demo4 from '../assets/food/1.webp';

// Importing the styles
import '../css/SpecialMenuItem.css';

const menuItems = [
  { id: 1, src: demo1, category: 'Burger', name: 'King Double Burger', price: 'Rs.2500' },
  { id: 2, src: demo2, category: 'Submarine', name: 'Cheese Submarine Bun', price: 'Rs.1500' },
  { id: 3, src: demo3, category: 'Dessert', name: 'Cheese Cake', price: 'Rs.2000' },
  { id: 4, src: demo4, category: 'Beverages', name: 'Fine Wine Selection', price: 'Rs.4500' }
];

const SpecialMenuItem = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="special-menu-container" 
    data-aos="fade-right"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine"
    >
      <div className="text-center">
        <h2 className="title">Special Menu Items</h2>
      </div>
      <Slider {...settings}>
        {menuItems.map((item, idx) => (
          <Card
            key={item.id}
            item={item}
            isActive={idx === imageIndex}
          />
        ))}
      </Slider>
    </div>
  );
};

const Arrow = ({ direction, onClick }) => {
  return (
    <div className={`arrow ${direction}`} onClick={onClick}>
      <i className={`bx bx-chevron-${direction === 'next' ? 'right' : 'left'}`}></i>
    </div>
  );
};

const Card = ({ item, isActive }) => {
  const { src, category, name, price } = item;
  return (
    <div className={`slide ${isActive ? 'activeSlide' : ''}`}>
      <img src={src} alt={name} />
      <div className="card-content">
        <p className="category">{category}</p>
        <h4 className="product-name">{name}</h4>
        <p className="price">{price}</p>
        <button className="plus-icon">
          <i className='bx bx-plus'></i>
        </button>
      </div>
    </div>
  );
};

export default SpecialMenuItem;
