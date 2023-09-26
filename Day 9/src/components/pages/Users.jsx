import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function Users() {
  return (
    <>
      <Layout />
      <div className='main-wrapper'>
        <div className='welcome-container'>
          <h1>Users</h1>
          <Link to='/dashboard'>Go to Dashboard</Link>
          <Link to='/settings'>Go to Settings</Link>
        </div>
      </div>
    </>
  );
}

export default Users;
