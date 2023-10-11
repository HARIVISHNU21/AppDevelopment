import React from 'react';
import Topbar from '../Layout/Topbar';
import './Contact.css'; // Import the CSS file for styling

function Contact() {
  return (
    <>
      <Topbar />
      <div className='container contact-wrapper'>
        <h1>Contact Us!</h1>
        <div className='contact-details'>
          <div className='contact-info'>
            <h2>Contact Information</h2>
            <p>
              <i class='bx bxs-home-smile'></i> Coimbatore, India
            </p>
            <p>
              <i class='bx bx-envelope'></i> 727821tuit026@skct.edu.in
            </p>
            <p>
              <i class='bx bx-phone'></i> +91 6374781682
            </p>
            <p>
              <i class='bx bx-printer'></i> +01 238 238 23
            </p>
          </div>
          
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <img
              src='https://tse2.mm.bing.net/th?id=OIP.yC_GL_p46948MkWTyaUCJQHaEK&pid=Api&P=0&h=180'
              alt='Image1'
            />
          </div>
          <div className='col-sm-4'>
            <img
              className='lazyloaded'
              src='https://tse3.mm.bing.net/th?id=OIP.AYx79mbazZum9r7vPdODwwHaEK&pid=Api&P=0&h=180'
              alt='Image2'
            />
          </div>
          <div className='col-sm-4'>
            <img
              className='lazyloaded'
              src='https://tse4.mm.bing.net/th?id=OIP.2YhPNuxHYFTYbMOemXZsTQHaEK&pid=Api&P=0&h=180'
              alt='Image3'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
