import React from 'react';
import Navbar from '../components/layouts/Navbar';

//CSS File
import '../css/Main.css';
import '../css/responsive.css';
import '../App.css';




import image1 from '../assets/cover/3.jpg';
import image2 from '../assets/cover/image2.jpeg';
import about1 from '../assets/cover/about.jpg';
import OFFER from '../assets/cover/burger/3.jpeg';

//ICONS
import CHIEF from '../assets/icons/chief.png';
import DINEIN from '../assets/vector/restaurant-app_5383039.png';
import RECEIPE from '../assets/vector/stir_12300260.png';
import Footer from '../components/layouts/Footer';
import SpecialMenuItem from '../components/SpecialMenuItem';
import CategoryCompoent from '../components/CategoryCompoent';





function Home() {
  return (
    <div>
      <Navbar />
      <div className="header-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 hero-content">
              <h1 data-aos="fade-up">Order Delight Steaks <span className="highlight">In-House</span></h1>
              <p className='hero-paragragh' data-aos="fade-up" data-aos-delay="300">Dive into a world of delicious fast food delights, where every bite is tailored to your taste.</p>
              <button className="btn-shop-now" data-aos="fade-up" data-aos-delay="500">
                Shop Now<box-icon name='chevron-right' size='sm' color='white'></box-icon>
              </button>
            </div>
            <div className="col-12 col-md-3 hero-images text-center">
              <img src={image2} alt="Dining" className="img-fluid cover-image rectangle" />
              <img src={image1} alt="Burger" className="img-fluid cover-image square" />
            </div>
          </div>
        </div>
      </div>

      <div className='main-container'>


        {/* ABOUT SECTION */}
        <div className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4" data-aos="zoom-in" >
                <img src={about1} alt="Sea-King" className="about-img" />
              </div>
              <div data-aos="fade-left" data-aos-delay="500" className="col-lg-8">
                <div className="about-content">
                  <h2 >About Sea King</h2>
                  <h3>The Health Food For Wealthy Mood</h3>
                  <p>Sea King is where culinary excellence meets a delightful dining experience. We take pride in crafting mouthwatering dishes that cater to your every craving.
                    Our journey began with a passion for creating exceptional food that brings joy to people's lives At Sea King. <br /><br />We believe in using only the finest and freshest ingredients to ensure that every bite you take is a burst of flavor.
                    Our team of skilled chefs is dedicated to delivering a diverse menu that caters to various tastes and preferences.
                  </p>
                  <div className="buttons-container">
                    <button className=" custom-button">Online Order</button>
                    <button className=" custom-button">24/7 Services</button>
                  </div>
                  <button className="custom-button custom-book-table">Book Your Order</button>
                </div>
              </div>
            </div>
          </div>
        </div>



        {/* Category Sliding */}
        <CategoryCompoent />

        {/* Info Dishes */}
        <section className="info-section" data-aos="fade-in" data-aos-delay="500">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4">
                <h3>Opening Hours</h3>
                <p>Monday - Friday<br />10:00 AM to 10:00 PM<br />Sunday at<br />11:00 AM to 4:00 PM</p>
              </div>
              <div className="col-md-4">
                <h3>Location</h3>
                <p>VW3, Port City <br />Colombo,Sri Lanka </p>
              </div>
              <div className="col-md-4 dishes-row">
                <div className="col-md-6">
                  <img src={image1} alt="Dish 1" className="img-fluid" />
                </div>
                <div className="col-md-6">
                  <img src={image1} alt="Dish 2" className="img-fluid" />
                </div>
                <div className="col-md-6 ml-4">
                  <img src={image1} alt="Dish 3" className="img-fluid" />
                </div>
                <div className="col-md-6 text-warning">
                  <h3>Famous Dishes</h3>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Special Menu Items */}
        <SpecialMenuItem />



        {/* OFFER SECTION */}
        <div className="offer-section d-flex justify-content-center align-items-center" data-aos="fade-in">
          <div className="offer-container">
            <img src={OFFER} alt="Special Offer" className="offer-image" data-aos="fade-up" />
            <div className="offer-details">
              <h2>Special Offer</h2>
              <p className="offer-text">50% OFF</p>
              <button className=" offer-button">Read More</button>
            </div>
          </div>
        </div>





        {/* Order Delivery Section */}
        <section className="order-delivery-section text-center my-5">
          <h2 className="order-delivery-title">Order Delivery in just <br /><span className="text-yellow">30 minutes</span></h2>
          <div className="d-flex justify-content-center align-items-center">
            <div className="delivery-box" data-aos="flip-left">
              <img src={DINEIN} alt="Order Your Food" className="icon" />
              <h3>Order Your Food</h3>
              <p>Our website is User-friendly you can just order just clicking on 3 simple steps and you will receive.</p>
            </div>
            <div className="delivery-box highlight" data-aos="flip-left">
              <img src={CHIEF} alt="Delivery & Pickup" className="icon" />
              <h3 className='highligt-text'>Takeaway & Dine-in</h3>
              <p className='highligt-text'> Our website is User-friendly you can just order just clicking on 3 simple steps and you will receive.</p>
            </div>
            <div className="delivery-box" data-aos="flip-left">
              <img src={RECEIPE} alt="Delicious Recipe" className="icon" />
              <h3>Delicious Recipe</h3>
              <p>Our website is User-friendly you can just order just clicking on 3 simple steps and you will receive.</p>
            </div>
          </div>
        </section>
      </div>


      <Footer />
    </div>
  );
};

export default Home;
