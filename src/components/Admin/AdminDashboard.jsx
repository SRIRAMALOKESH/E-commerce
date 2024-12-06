import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AdminNav from './AdminNav';

const AdminDashboard = () => {
  const [userStats, setUserStats] = useState({
    totalUsers: 0,
    totalBuyers: 0,
    totalArtisans: 0,
  });
  const [pendingContent, setPendingContent] = useState([]);

  useEffect(() => {
    fetchUserStats();
    fetchPendingContent();
  }, []);

  const fetchUserStats = () => {
    setUserStats({
      totalUsers: 100,
      totalBuyers: 50,
      totalArtisans: 30,
    });
  };

  const fetchPendingContent = () => {
    setPendingContent([
      { id: 1, name: 'Embroidered Red Saree', status: 'Pending Approval' },
      { id: 2, name: 'Navy Blue Anarkali Gown', status: 'Pending Approval' },
    ]);
  };

  return (
    <div>
      <AdminNav />
      <div style={styles.dashboardContainer}>
        <h2 style={styles.heading}>Admin Dashboard</h2>
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <h3>Total Users</h3>
            <p style={styles.statNumber}>{userStats.totalUsers}</p>
          </div>
          <div style={styles.statCard}>
            <h3>Total Buyers</h3>
            <p style={styles.statNumber}>{userStats.totalBuyers}</p>
          </div>
          <div style={styles.statCard}>
            <h3>Total Artisans</h3>
            <p style={styles.statNumber}>{userStats.totalArtisans}</p>
          </div>
        </div>
        <div style={styles.pendingContentContainer}>
          <h3>Pending Content</h3>
          <ul style={styles.contentList}>
            {pendingContent.map((content) => (
              <li key={content.id} style={styles.contentItem}>
                <Link to={`/admin/content/approve/${content.id}`} style={styles.contentLink}>
                  {content.name}
                </Link>
                <p style={styles.contentStatus}>Status: {content.status}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const styles = {
  dashboardContainer: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333',
  },
  statsContainer: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  statCard: {
    flex: '1 1 calc(33.33% - 20px)',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  statNumber: {
    fontSize: '1.5rem',
    color: '#0073e6',
  },
  pendingContentContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  contentList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  contentItem: {
    marginBottom: '15px',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  contentLink: {
    fontSize: '1rem',
    color: '#0073e6',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  contentLinkHover: {
    ':hover': {
      textDecoration: 'underline',
    },
  },
  contentStatus: {
    fontSize: '0.9rem',
    color: '#555',
    marginTop: '5px',
  },
};

export default AdminDashboard;
