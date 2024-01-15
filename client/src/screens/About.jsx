import React from 'react';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';

// IMG
import AboutUs from '../assets/cover/SignIn.avif';
import Image1 from '../assets/cover/about3.webp';
import Image2 from '../assets/cover/about4.jpeg';



import '../css/about.css';

function About() {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-7">
            <h1 className="about-heading">About Us</h1>
            <p className="about-text">
              At Sea King, our passion for exceptional culinary experiences drives us. We blend the swift zest of fast food with the intricate spices of Indian cuisine and the hearty essence of Italian dishes. In our kitchen, every dish is a canvas of flavour, painted with the freshest local ingredients and a dash of innovation.<br /><br/>
              Join us for an unforgettable journey across continents, where the sizzle of the grill and the aroma of simmering herbs promise a feast that's not just eaten, but savoured. Welcome to Sea King - where every meal tells a story.
            </p>
          </div>
          <div className="col-md-5">
            <img src={AboutUs} alt="Delicious Food" className="img-fluid" />
          </div>
        </div>

        <div className="row mt-4 position-relative">
          <div className="col-12 col-lg-6">
            <img src={Image1} alt="Food 1" className="img-fluid rounded-start left-image" />
            <img src={Image2} alt="Food 2" className="img-fluid rounded-end right-image" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="text-container">
              <div>
                <h2 className="about-subheading">We speak the good food language</h2>
              </div>
              <p className="about-subtext">
                A Journey Through Flavors...<br/>
                <br />
                Our story began with a simple dream: to create a space where every meal is an experience, every dish is a memory, and every patron feels like royalty. At Sea King, we take pride in offering an eclectic menu that caters to a myriad of palates.
              </p>
              <button className="btn btn-primary about-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
