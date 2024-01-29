import React, { useState } from 'react';
import Navbar from '../../components/layouts/Navbar';
import './DetailsMenu.css';
import MenuImage from '../../assets/cover/burger/2.png';
import Footer from '../../components/layouts/Footer';

function DetailsMenu() {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('customize');

  const updateQuantity = (newQuantity) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + newQuantity));
  };


  const [reviews, setReviews] = useState([
    // Dummy review data
    { id: 1, author: "Alice Smith", date: "2022-01-25", rating: 5, content: "Delicious burger, great toppings!" },
    { id: 2, author: "Bob Johnson", date: "2022-01-20", rating: 4, content: "Tasty but a bit pricey." },
    { id: 3, author: "Insaf", date: "2022-01-20", rating: 3, content: "Tasty but a bit pricey." },
    { id: 4, author: "Uzman", date: "2022-01-20", rating: 3, content: "Tasty but a bit pricey." },
  ]);



  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <i key={i} className={`bx ${i < rating ? 'bxs-star' : 'bx-star'}`}></i>
    ));
  };

  const calculateAverageRating = () => {
    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length;
  };

  const getRatingPercentage = (rating) => {
    const count = reviews.filter(review => review.rating === rating).length;
    return (count / reviews.length) * 100;
  };

  return (
    <div className="details-menu">
      <Navbar />
      <div className="container menu-container mt-4">
        <div className="row">
          <div className="col-md-6" data-aos="flip-right">
            <div className="menu-image">
              <img src={MenuImage} alt="King Burger" className="img-fluid" />
              <span className="discount-tag">10% OFF</span>
              <i className='bx bx-heart favorite-icon'></i>
            </div>
          </div>
          <div className="col-md-6">
            <div className="menu-info" data-aos="fade-left"  data-aos-delay="800">
              <h2 className='title-name'>King Burger</h2>
              <div className='review-container mb-2'>
                <div className="menu-rating-price">
                  <div className="star-rating">
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bxs-star' ></i>
                    <i className='bx bx-star' ></i>
                  </div>
                  <span className='ratingreview-name'> (8 reviews)</span>
                </div>
              </div>

              <div className="menu-price">
                <span className="price">LKR. 3100</span>
                <div className="Quantity-container mt-3">
                  <span>Qty</span>
                  <div className="quantity-selector pl-2">
                    <i className='bx bx-minus' onClick={() => updateQuantity(-1)}></i>
                    <input type="text" value={quantity} readOnly />
                    <i className='bx bx-plus' onClick={() => updateQuantity(1)}></i>
                  </div>
                </div>
              </div>

              <div className="menu-actions">
                <button className="add-to-cart">
                  <i className='bx bx-cart-alt bx-sm'></i> ADD TO CART
                </button>
                <button className="buy-now">BUY NOW</button>
              </div>
              <div className="divider-line"></div>

              <div className="description-container">
                <p>Description</p>
                <p className="menu-description">
                  A burger menu typically includes classic burger options, such as cheeseburgers, hamburgers, and veggie burgers, along with some sides and drinks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab-item ${activeTab === 'customize' ? 'active' : ''}`}
              onClick={() => setActiveTab('customize')}
            >
              Customise option
            </button>
            <button
              className={`tab-item ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 'customize' && (
              <div className="customize-section">
                <div className="option-group">
                  <h6 className="option-title">Topping</h6>
                  <div className="options-row">
                    <label className="custom-checkbox">
                      <input type="checkbox" id="topping1" name="topping" value="standard" />
                      <span className='label-name'>Standard</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" id="topping2" name="topping" value="sauce" />
                      <span className='label-name'>Sauce</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" id="topping3" name="topping" value="mozzarella" />
                      <span className='label-name'>Mozzarella</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" id="topping4" name="topping" value="onion" />
                      <span className='label-name'>Onion</span>
                    </label>
                    <label className="custom-checkbox">
                      <input type="checkbox" id="topping5" name="topping" value="bbq" />
                      <span className='label-name'>BBQ</span>
                    </label>
                  </div>
                </div>

                <div className="option-group vertical-options">
                  <h6 className="option-title">Choice of Add ons</h6>
                  <label className="custom-checkbox choice-Addons">
                    <input type="checkbox" id="addon-1" name="addon" value="cheese" />
                    <span className='Addons-label'>Cheese Slice</span>
                    <div className="price-tag">+ LKR 170</div>
                  </label>
                  <label className="custom-checkbox choice-Addons">
                    <input type="checkbox" id="addon-2" name="addon" value="2cheese" />
                    <span>2 Cheese Slices</span>
                    <div className="price-tag">+ LKR 340</div>
                  </label>
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="reviews-section">
                <div className="review-summary">
                  <h3>Average Rating</h3>
                  {renderStars(calculateAverageRating())}
                  {[5, 4, 3, 2, 1].map(star => (
                    <div key={star} className="rating-bar">
                      <span>{star} <i className='bx bxs-star' undefined ></i></span>
                      <div className="bar-container">
                        <div className="bar" style={{ width: `${getRatingPercentage(star)}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="reviews-list">
                  {reviews.map(review => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <strong>{review.author}</strong>
                        <span>{review.date}</span>
                      </div>
                      <div className="review-rating">{renderStars(review.rating)}</div>
                      <div className="review-content">{review.content}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DetailsMenu;
