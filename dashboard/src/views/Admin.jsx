import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Card, Col, Row, CardBody, CardTitle, Table, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import PaginationComponent from '../components/dashboard/PaginationComponent';
import { toast } from 'react-toastify';

//css
import '../css/button.css';
import "../css/Model.css";


// Icons
import { IonIcon } from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";


const Admin = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [admins, setAdmins] = useState([]);

    const [pageNumber, setPageNumber] = useState(0);
    const adminPerPage = 8;


    // display all admins
    const [newAdmin, setNewAdmin] = useState({
        name: '',
        email: '',
        password: '',
        image: null,
    });

    useEffect(() => {
        fetchAdmins();
    }, []);

    const fetchAdmins = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/getAllAdmins`);
            setAdmins(response.data);
        } catch (error) {
            toast.error("Error fetching admins");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAdmin({ ...newAdmin, [name]: value });
    };

    const handleImageChange = (e) => {
        setNewAdmin({ ...newAdmin, image: e.target.files[0] });
    };


    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const togglePasswordVisibility = () => setShowPassword(!showPassword);




    // ****** Create a Admin *******
    const handleCreateAdmin = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        Object.keys(newAdmin).forEach(key => formData.append(key, newAdmin[key]));

        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/admin/createAdmin`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data) {
                toast.success('Admin created successfully');
                setNewAdmin({ name: '', email: '', password: '', image: null });
                setIsModalOpen(false);
                fetchAdmins();
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "An error occurred";
            toast.error('Failed to create admin: ' + errorMessage);
        } finally {
            setIsLoading(false);
        }
    };


    //pagination 
    const handlePageClick = (data) => {
        setPageNumber(data.selected);
    };

    const displayUsers = admins.slice(pageNumber * adminPerPage, (pageNumber + 1) * adminPerPage);



    return (
        <>
            <Row>
                <Col>
                    <div className='page-container' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '20px' }}>
                        <Breadcrumb className='breadcrumb'>
                            <BreadcrumbItem>
                                <a href="/">Home</a>
                            </BreadcrumbItem>
                            <BreadcrumbItem active>Admin</BreadcrumbItem>
                        </Breadcrumb>

                        <div className="d-flex">
                            <Button className="btn custom-button" style={{ marginRight: '8px' }} color="primary">
                                <i class='bx bx-cloud-download custom-icon'></i> Generate Report
                            </Button>
                            <Button
                                type="button"
                                color="success"
                                className="btn custom-button"
                                onClick={openModal}><i class='bx bx-plus custom-icon'></i>
                                Create Admin
                            </Button>
                        </div>
                    </div>
                    <Card>
                        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
                            <i className="bi bi-person-circle me-2"> </i>
                            Admin Table
                        </CardTitle>
                        <CardBody className="p-4">
                            <Row>
                                <Table className="no-wrap mt-3 align-middle" responsive borderless>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Created</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-body">
                                        {displayUsers.map((admin) => (
                                            <tr key={admin._id} className="border-top">
                                                <td>{admin.name}</td>
                                                <td>{admin.email}</td>
                                                <td>{admin.password}</td>
                                                <td>{new Date(admin.createdAt).toLocaleDateString()}</td>

                                                <td className="icon-cell">
                                                    <div className="icon-container">
                                                        <a
                                                            href="##"
                                                            className="icon-link edit-icon"
                                                            title="Edit"
                                                        // onClick={() => openEditModal(admin)}
                                                        >
                                                            <ion-icon name="create-outline" style={{color: '#054fb7'}}></ion-icon>
                                                        </a>
                                                        <a
                                                            href="##"
                                                            className="icon-link delete-icon"
                                                            title="Trash"
                                                        // onClick={() => handleDelete(admin._id)}
                                                        >
                                                            <ion-icon name="trash"></ion-icon>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <PaginationComponent
                                    pageCount={Math.ceil(admins.length / adminPerPage)}
                                    handlePageClick={handlePageClick}
                                />
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>



            {/* *************** Admin Add Modal ***************** */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="addModalLabel">
                                    Create New Admin
                                </h5>
                                <button type="button" className="btn-close input-shadow" data-mdb-dismiss="modal" aria-label="Close"
                                    onClick={closeModal}
                                />
                            </div>

                            <div className="modal-body">
                                <form onSubmit={handleCreateAdmin}>
                                    <div className="form-group last mb-3">
                                        <label>Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={newAdmin.name}
                                            onChange={handleChange}
                                            style={{ boxShadow: "none" }}
                                            className="form-control"
                                            placeholder="Enter Full Name"
                                            required
                                        />
                                    </div>

                                    <div className="form-group last mb-3">
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            value={newAdmin.email}
                                            onChange={handleChange}
                                            className="form-control"
                                            style={{ boxShadow: "none" }}
                                            required
                                        />
                                    </div>

                                    <div className="form-group last mb-3">
                                        <label>Password</label>
                                        <div className="input-group">
                                            <input
                                                className="form-control"
                                                style={{ boxShadow: "none" }}
                                                required
                                                id="password"
                                                type={showPassword ? "text" : "password"}
                                                name="password"
                                                value={newAdmin.password}
                                                onChange={handleChange}
                                                placeholder="Password"
                                            />
                                            <span
                                                className="input-group-text"
                                                onClick={togglePasswordVisibility}
                                                style={{ color: "#757575" }}
                                            >
                                                <IonIcon icon={showPassword ? eyeOff : eye} />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="form-group last mb-3">
                                        <label>Image</label>
                                        <input
                                            id="image"
                                            type="file"
                                            className="form-control"
                                            style={{ boxShadow: "none" }}
                                            onChange={handleImageChange}
                                            required
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="submit"
                                    onClick={handleCreateAdmin}
                                    style={{ width: "90px", alignItems: "center" }}
                                    className="btn btn-primary Custom-Btn"
                                    disabled={isLoading}>
                                    {isLoading ?
                                        <i class='bx bxs-color bx-flip-horizontal bx-spin' style={{ color: "#f2f2f2" }}></i> : "Save"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default Admin;
