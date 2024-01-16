import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../css/section/Useraccount.css';

import UserProfile from '../../assets/Profile.png';

const UserAccount = () => {
    const [user, setUser] = useState({
        name: 'Amaan',
        email: '',
        address: '',
        mobile: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleImageUpload = (e) => {
        // Handle the image upload logic here
    };

    return (
        <Container>
            <Row className='account-container'>
                <h3 className='account-title'>User Information</h3>
                <Col md={4} >
                    <div className="d-flex flex-column align-items-center">                  
                        <img src={UserProfile} alt="User profile" className="mb-3 profileimage" />
                        <a href="##" variant="outline-primary" className="rounded-circle edit-button" onClick={handleImageUpload}>
                            <i className="fas fa-pencil-alt edit-icon" style={{ color: 'orange', fontSize: '12px' }}></i>
                        </a>
                    </div>
                </Col>
                <Col md={8}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter name" name="name" value={user.name} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>

                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="tel" placeholder="Enter mobile number" name="mobile" value={user.mobile} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" name="address" value={user.address} onChange={handleChange} />
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