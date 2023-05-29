import React from 'react' ; 
import '../css/home.css' ; 
import { Link } from 'react-router-dom';
import Footer from  '../js/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

import image from '../assets/laptop-accessories.jpg'

export default function Home() {

  // initialize animate on scroll




  useEffect(() =>{
    AOS.init();


  } , []) ; 
  return (
    <>
    <section className="bg-dark text-light p-5 text-center pt-lg-5 text-sm-start ">
          <div className="container">
            <div className="d-sm-flex py-5">
               <div>
                <h1 data-aos="fade-right" > Welcome to 
                    <br />
                    <span className="text-warning"> ShareTech Website</span>
                  
                   </h1>
                <p data-aos="fade-right" className="lead my-4">Bootstrap provides a number of CSS classes that can be used to set the height of the navbar. The py-* classes control the padding of the navbar, and the * represents the height of the padding. For example, to set the height of the navbar to 100px, you would add the following CSS to your HTML file:</p>

                <button className="btn btn-info btn-lg text-light border ">Start Enrollment</button>
               </div>
               <img data-aos="flip-right" src={image} alt=""  className="img-fluid w-50 h-50 g-4"/>
            </div>
          </div>

      </section>

      <section className="bg-primary text-light p-5">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h4 className="mb-3 mb-md-0">Sign Up For Free</h4>
            <div class="input-group news-input">
          <input type="text" class="form-control"/>
          <button class="btn btn-dark btn-lg" type="button" id="button-addon2">Button</button>
        </div>
          </div>

        </div>
      </section>


      {/* section Box */}

      <section className="p-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">

              <div className="card text-light bg-dark  ">
              <img src='https://fastly.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE' class="card-img-top mx-auto " alt="..."/>
                <div className="card-body text-center">

                  <div className="h1 mb-3">
                    <i class="bi bi-laptop"></i>
                  </div >
                  
                    <div className="card-title mb-3">
                    <h3>Best Laptop</h3>
                    </div>
                    <div className="card-text text-center  mb-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                    <button className="btn btn-danger btn-lg text-light ">See More</button>

                    
               
                </div>
              </div>
            </div>
            <div className="col-md">
            <div className="card text-light bg-dark  ">
              <img src='https://fastly.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE' class="card-img-top mx-auto " alt="..."/>
                <div className="card-body text-center">

                  <div className="h1 mb-3">
                  <i class="bi bi-mouse3"></i>
                  </div >
                  
                    <div className="card-title mb-3">
                    <h3>Best Accessories</h3>
                    </div>
                    <div className="card-text text-center  mb-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                    <button className="btn btn-danger btn-lg text-light ">See More</button>

                    
               
                </div>
              </div>
            
            </div>
            <div className="col-md">
            <div className="card text-light bg-dark  ">
              <img src='https://fastly.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE' class="card-img-top mx-auto " alt="..."/>
                <div className="card-body text-center">

                  <div className="h1 mb-3">
                  <i class="bi bi-cart"></i>
                  </div >
                  
                    <div className="card-title mb-3">
                    <h3>Recommanded</h3>
                    </div>
                    <div className="card-text text-center  mb-3">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                    <button className="btn btn-danger btn-lg text-light ">See More</button>

                    
               
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </section>


      {/* section Footer */}
      <Footer/>

    </>


  )
}
