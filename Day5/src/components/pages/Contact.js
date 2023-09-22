import React, { useState } from 'react';
import Topbar from '../Layout/Topbar';
import "./Contact.css"


function Contact() {
  
  return (
      <div>
      <Topbar/>
        <div className='conatiner'>
          <p className='para1 mt-3'>Contact Us!</p>
        </div>
        <div className='container-contact'>

                <p className='cp'>
                <i class='bx bxs-home-smile'></i> Coimbatore,India
                </p>
                <p className='cp'>
                    <i class='bx bx-envelope'></i> 727821tuit026@skct.edu.in
                </p>
                <p className='cp'>
                <i class='bx bx-phone'></i> +91 6374781682
                </p>
                <p className='cp'>
                <i class='bx bx-printer' ></i>+01 238 238 23
                </p>
                  
        </div>
        <div className='container'>
      <div className='row'>
         <div className='col-sm-4'>
           <img  src="https://tse2.mm.bing.net/th?id=OIP.yC_GL_p46948MkWTyaUCJQHaEK&pid=Api&P=0&h=180"/>
         </div>
         <div className='col-sm-4'>
           <img  className="lazyloaded"src="https://tse3.mm.bing.net/th?id=OIP.AYx79mbazZum9r7vPdODwwHaEK&pid=Api&P=0&h=180"/>
         </div>
         <div className='col-sm-4'>
           <img  className="lazyloaded" src="https://tse4.mm.bing.net/th?id=OIP.2YhPNuxHYFTYbMOemXZsTQHaEK&pid=Api&P=0&h=180"/>
         </div>
      </div>
      </div>

    </div>
  )
}

export default Contact