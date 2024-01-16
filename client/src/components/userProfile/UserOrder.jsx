import React from 'react';
import { Table, Badge, } from 'react-bootstrap';
import '../../css/section/UserOrder.css'; // Assuming you have a separate CSS file for styling

const UserOrder = () => {
  // Dummy data for the orders
  const orders = [
    { id: '#14934', date: 'March 5, 2023', time: '11:38 AM', items: 3, status: 'Completed', amount: 'Rs.4840' },
    { id: '#14935', date: 'March 5, 2023', time: '11:38 AM', items: 3, status: 'Cancelled', amount: 'Rs.4840' },
    { id: '#14935', date: 'March 5, 2023', time: '11:38 AM', items: 3, status: 'Completed', amount: 'Rs.4840' },

  ];

  // Function to return a badge based on the order status
  const statusBadge = (status) => {
    const variant = status === 'Completed' ? 'success' : 'danger';
    return <Badge bg={variant}>{status}</Badge>;
  };

  return (
    <div className="user-order">
      <h2>My Orders</h2>
      <Table responsive="md" striped bordered className="mt-4">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Order Date</th>
            <th>Order Time</th>
            <th>Items</th>
            <th>Status</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td className='orderIdbody'>{order.id}</td>
              <td>{order.date}</td>
              <td>{order.time}</td>
              <td>{order.items}</td>
              <td className='orderstatus'>{statusBadge(order.status)}</td>
              <td>{order.amount}</td>
              <td className='orderview-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserOrder;