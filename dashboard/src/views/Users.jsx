// Users.jsx
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, CardBody, CardTitle, Table, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import PaginationComponent from '../components/dashboard/PaginationComponent'; 

const Users = () => {
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 8;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/user/getAllUsers`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handlePageClick = (data) => {
    setPageNumber(data.selected);
  };

  const displayUsers = users.slice(pageNumber * usersPerPage, (pageNumber + 1) * usersPerPage);

  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <a href="/">Home</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>Users</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-people me-2"> </i>
            Users
          </CardTitle>
          <CardBody className="p-4">
            <Row>
              <Table className="no-wrap mt-3 align-middle" responsive borderless>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Create Date</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {displayUsers.map((user, index) => (
                    <tr key={index} className="border-top">
                      <td>
                        <div className="d-flex align-items-center p-2">
                          <img
                            src={user.profileImage}
                            className="rounded-circle"
                            alt="avatar"
                            width="45"
                            height="45"
                          />
                          <div className="ms-3">
                            <h6 className="mb-0">{user.name}</h6>
                          </div>
                        </div>
                      </td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.address}</td>
                      <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <PaginationComponent
                pageCount={Math.ceil(users.length / usersPerPage)}
                handlePageClick={handlePageClick}
              />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Users;
