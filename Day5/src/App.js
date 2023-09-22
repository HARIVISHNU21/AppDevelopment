  import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
  import  Login  from "./components/Login";

  import React from 'react'
  import Home from "./components/pages/Home";
  import Register from "./components/pages/Register";
  import Store from "./Redux/Store";
  import { Provider } from "react-redux";
  import Dashboard from "./components/pages/Dashboard";
  import About from "./components/pages/About";
  import Contact from "./components/pages/Contact";

  export default function App() {
    return (
      <div>
      <Provider store={Store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route  path="/login" element={<Login/>} />
            <Route  path="/register" element={<Register/>} />
            <Route  path="/dashboard" element={<Dashboard/>} />
            <Route  path="/about" element={<About/>} />
            <Route  path="/contact" element={<Contact/>} />
          </Routes>
        </BrowserRouter>
        </Provider>
      </div>
    )
  }

