import React from 'react';
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Home from './pages/Home';
import FeedbackForm from '../components/pages/FeedbackForm';


function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions here
    navigate('/Login'); // Navigate to the Login page after logout
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Users" element={<Users />} />
        <Route exact path="/Settings" element={<Settings />} />
        <Route exact path="/feedback" element={<FeedbackForm/>} />
        
      </Routes>

      {/* A button for logging out */}
      <button onClick={handleLogout}>Logout</button>
    </BrowserRouter>
  );
}

export default App;
