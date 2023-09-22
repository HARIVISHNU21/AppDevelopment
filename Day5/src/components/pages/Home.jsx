import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../Layout/Topbar';
import '../pages/Home.css';
import { useSelector } from 'react-redux';
import Contact from '../pages/Contact'



function Home() {
    const featuredProducts = useSelector((state) => state.featuredProducts.products);
    const cardImageStyle = {
        objectFit: 'cover',
        objectPosition: 'center center', 
        maxHeight: '300px', 
        maxWidth: '300px', 
      };
    

  return (
    <div>
      <Topbar />
      <div className="home-content d-flex flex-row justify-content-center ">
      {featuredProducts.map((product) => (
        
            <div className="col-md-4 mb-3 p-5 d-flex flex-column" key={product.id} >
            <div className='col-5'>
      <h1 className=' card-body text-light'>{product.welcome}</h1>
      </div>
             
             
                <div className="card-body">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="card-img-top"
                  style={cardImageStyle} // Apply alignment styles here
                />

                  <h5 className="card-title text-light" >{product.name}</h5>
                  <p className="card-text text-light">{product.description}</p>
               
                </div>
            
            </div>
          ))}
       
       
      </div>
      <div>
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
                <i class='bx bx-phone'></i> +91 3453485343
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
    </div>
  );
}

export default Home;


