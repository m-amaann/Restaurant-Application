import React, { useState } from 'react';
import Navbar from '../../components/layouts/Navbar'; // Ensure you have this component
import './DetailsMenu.css';


import MenuImage from '../../assets/cover/burger/2.png';


function DetailsMenu() {
  const [quantity, setQuantity] = useState(1);

  // Increment or decrement quantity, ensuring it does not go below 1
  const updateQuantity = (newQuantity) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + newQuantity));
  };

  return (
    <div className="details-menu">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="menu-image">
              <img src={MenuImage} alt="King Burger" className="img-fluid" />
              <span className="discount-tag">10% OFF</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="menu-info">
              <p className='category-name'>Burger</p>
              <h2 className='title-name'>King Burger</h2>
              <div className="star-rating">

              </div>
              <div className="menu-pricing">
                <span className="price">LKR. 3100</span>
                <div className="quantity-selector">
                  <button onClick={() => updateQuantity(-1)}>-</button>
                  <input type="text" value={quantity} readOnly />
                  <button onClick={() => updateQuantity(1)}>+</button>
                </div>
              </div>
              <div className="CartBtn-container">
                <button className="add-to-cart">ADD TO CART</button>
                
              </div>
              <p className="menu-description">
                A burger menu typically includes classic burger options, such as cheeseburgers, hamburgers, and veggie burgers, along with some sides and drinks.
              </p>
              {/* Customization Option and Reviews Tabs Here */}
            </div>
          </div>
        </div>
        {/* Tabs Content Here */}
      </div>
    </div>
  );
}

export default DetailsMenu;
