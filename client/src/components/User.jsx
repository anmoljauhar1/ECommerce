import React from 'react';
import './User.css'; // External CSS

const User = ({ user }) => {
  if (!user) return <p>Loading user data...</p>;

  return (
    <div className="user-card">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Password:</strong> {user.password}</p>
    </div>
  );
};

export default User;
