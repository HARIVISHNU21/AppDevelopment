import React from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../Layout/Topbar';

function Dashboard() {
  const navigate = useNavigate();

  // Define a function to handle navigation to other pages
  const goToSettings = () => {
    navigate('/settings');
  };

  return (
    <>
      <Topbar />
      <div className='main-wrapper '>
        <div className='welcome-container justify-content-center'>
          <h1>
               Welcome !!!
          </h1>
          ``
        </div>
      </div>
    </>
  );
}

export default Dashboard;
