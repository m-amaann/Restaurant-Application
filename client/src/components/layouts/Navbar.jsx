import React from 'react';
import '../../css/responsive.css';

import logo from '../../assets/Logo/Original-Logo.png';



const Navbar = () => {
  const cartItemsCount = 3;

  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  const isLoggedIn = user !== null;

  return (
    <nav className="navbar navbar-expand-lg navbar-light" data-aos="fade-in">
      <a className="navbar-brand" href="/">
        <img className="logo" src={logo} alt="Sea King Logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/menu">Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>

        </ul>
        <div className="navbar-right">
          {isLoggedIn ? (
            <>
              <div className="cart-icon">
                <box-icon name="cart-alt" size="sm"></box-icon>
                <span className="cart-indicator">{cartItemsCount}</span>
              </div>

              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle navbar-profile-img-btn-dropdown"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={user.profileImage} className="profile-image rounded-circle navbar-profile-img"
                    alt="User profile"
                  />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/user/accountsettings">Profile</a>
                  <a className="dropdown-item" href="##">Logout</a>
                </div>
              </div>
            </>
          ) : (
            <a href="/Regiser" className="sign-up-btn">Sign Up</a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
