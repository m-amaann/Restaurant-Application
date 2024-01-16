import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../css/section/Useraccount.css';
import axios from 'axios';

// import Profile from '../../assets/Profile.png';
const UserAccount = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        profileImage: '',
    });

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/user/getLoggedUser`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` },
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        getUserData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            console.error('No file chosen');
            return;
        }
        // You can add code here to upload the profile image to the server if needed
    };


    return (
        <Container>
            <Row className='account-container'>
                <h3 className='account-title'>User Information</h3>
                <Col md={4} >
                    <div className='d-flex flex-column align-items-center'>
                    {user.profileImage && (

                            <div>
                            <img src={user.profileImage} alt='User profile' className='mb-3 profileimage' />
                                <a href='##' variant='outline-primary' className='rounded-circle' onClick={handleImageUpload}>
                                    <i className='fas fa-pencil edit-button' style={{ color: 'orange', fontSize: '14px' }}></i>
                                </a>
                            </div>
                        )}
                       <h4>{user.name}</h4>
                    </div>
                </Col>
                <Col md={8}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type='text' placeholder='Enter name' name='name' value={user.name} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' placeholder='Enter email' name='email' value={user.email} readOnly />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type='tel' placeholder='Enter mobile number' name='phone' value={user.phone} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' placeholder='Password' name='password' value={user.password} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type='text' placeholder='Enter address' name='address' value={user.address} onChange={handleChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default UserAccount;