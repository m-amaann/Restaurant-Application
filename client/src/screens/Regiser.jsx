import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../css/responsive.css';
import '../css/Main.css';


function Regiser() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        profileImage: null
    });
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
            setUserData({ ...userData, profileImage: files[0] });
        } else {
            setUserData({ ...userData, [name]: value });
        }
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Validation logic
        if (userData.password !== userData.confirmPassword) {
            toast.error('Passwords do not match');
            return;
        }

        const formData = new FormData();
        formData.append('name', userData.name);
        formData.append('email', userData.email);
        formData.append('password', userData.password);
        formData.append('phone', userData.phone);
        formData.append('address', userData.address);
        if (userData.profileImage) {
            formData.append('profileImage', userData.profileImage);
        }

        fetch(`${process.env.REACT_APP_API_URL}/api/user/register`, {
            method: 'POST',
            body: formData // FormData will set the correct Content-Type
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    toast.error(data.error);
                } else {
                    toast.success('Registration successful!');
                    navigate('/login');
                }
            })
            .catch(error => {
                console.error('Registration error:', error);
                toast.error('Registration failed. Please try again.');
            });
    };

    return (
        <div className="signup-page">
            <div className="signup-form-container">
                <h2 className="signup-title">CREATE AN ACCOUNT</h2>
                <p className="signup-subtitle">Welcome to Sea King Restaurant</p>
                <form className="signup-form" onSubmit={handleFormSubmit} method="post">
                    <div className="form-row">
                        <div className="input-group mb-4">
                            <span className="input-group-text"><i className='bx bx-user'></i></span>
                            <input type="text" className="form-control" placeholder="Name"  name="name" value={userData.name} onChange={handleInputChange} />
                        </div>

                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-text"><i className='bx bx-envelope'></i></span>
                        <input type="email" className="form-control" placeholder="Email" name="email" value={userData.email} onChange={handleInputChange} />
                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-text"><i className='bx bx-home'></i></span>
                        <input type="text" className="form-control" placeholder="Home Address" name="address" value={userData.address} onChange={handleInputChange} />
                    </div>
                    <div className="input-group mb-4">
                        <span className="input-group-text"><i className='bx bx-phone'></i></span>
                        <input type="tel" className="form-control" placeholder="Mobile No" name="phone" value={userData.phone} onChange={handleInputChange} />
                    </div>

                    <div className="input-group mb-4">
                        <span className="input-group-text"><i className='bx bx-upload'></i></span>
                        <input type="file" name="profileImage" className="form-control" onChange={handleInputChange} />
                    </div>
                    {/* password field */}
                    <div className="form-row mb-4">
                        <div className="input-group mb-4">
                            <input
                                type={isPasswordVisible ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={userData.password}
                                onChange={handleInputChange}
                            />
                            <span className="input-group-text" onClick={togglePasswordVisibility}>
                                <i className={isPasswordVisible ? 'bx bx-hide' : 'bx bx-show'}></i>
                            </span>
                        </div>
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                name="confirmPassword"
                                className="form-control"
                                placeholder="Confirm Password"
                                value={userData.confirmPassword}
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100 mb-3">Sign Up</button>
                    <div className="text-center mb-3">
                        Already have an account? <a href="/login" className="login-link">Log In</a>
                    </div>
                    <p className="terms-text">
                        By signing up to create an account I accept Company's
                        <a href="/" className="terms-link"> Terms of Use</a> and
                        <a href="/" className="terms-link"> Privacy Policy</a>.
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Regiser