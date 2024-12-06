import React, { useState, useEffect } from 'react';
import AdminNav from './AdminNav';



const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user data (user roles, details)
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    // Fetch user data from API (like roles, names, etc.)
    // Dummy data for now
    setUsers([
      { id: 1, name: 'John Doe', role: 'Buyer' },
      { id: 2, name: 'Jane Smith', role: 'Artisan' },
      { id: 3, name: 'Jim Brown', role: 'Buyer' },
    ]);
  };

  const changeRole = (userId, newRole) => {
    // Update the user's role in the database through an API request
    console.log(`Change role of user ${userId} to ${newRole}`);
    // This is just a placeholder function. You would make an API call to update the user role.
  };

  return (
    <div>
      <AdminNav />
      <div style={{ padding: '20px' }}>
        <h2>User Management</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                <td>
                  <button onClick={() => changeRole(user.id, 'Buyer')}>Set as Buyer</button>
                  <button onClick={() => changeRole(user.id, 'Artisan')}>Set as Artisan</button>
                  <button onClick={() => changeRole(user.id, 'Admin')}>Set as Admin</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
