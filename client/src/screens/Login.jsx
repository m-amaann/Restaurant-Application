import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import googleIcon from '../assets/icons/google.png';
import logo from '../assets/Logo/Original-Logo.png';

import '../css/responsive.css';
import '../css/login.css';



function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const validateForm = () => {
    let tempErrors = {};
    tempErrors.email = (/(.+)@(.+){2,}\.(.+){2,}/.test(email)) ? "" : "Email is not valid.";
    tempErrors.password = password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };


  const handleLogin = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error('Please correct the errors before submitting');
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {

        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        toast.success('Logged in successfully'); // login success
        navigate('/');
      } else {
        toast.error(data.message || 'Login failed');  // Handle errors
      }
    } catch (error) {
      toast.error('An error occurred during login');
    }
  };



  return (
    <div className="signin-page d-flex">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo-signin" />
      </Link>

      <div className="form-container">
        <div className="signin-form">
          <h2 className="form-title">Sign In</h2>
          <p className="form-subtitle">Enter your details or create account.</p>
          <form onSubmit={handleLogin} >
            <div className={`mb-3 input-group ${errors.email ? 'has-error' : ''}`}>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="error">{errors.email}</div>}
            </div>
            <div className={`mb-1 passwordinput ${errors.password ? 'has-error' : ''}`}>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && <div className="error">{errors.password}</div>}
            </div>
            <div className=" text-start">
              <a href="##" className="forgot-password">Forgot password?</a>
            </div>
            <button type="submit" className=" btn-dark mb-3">Log in</button>

            <hr />
            <p className="text-start create-account">
              If you don't have an account <a href="/Regiser" className="signup-link">Create account</a>
            </p>
            <div className="mb-3 text-start">
              <button type="button" className=" btn-google">
                <img src={googleIcon} alt="Google Icon" className="google-icon" />
                Login with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="image-container d-none d-md-block">
        {/* Image will be set through CSS */}
      </div>
    </div>
  )
}

export default Login
