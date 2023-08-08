import React from 'react' ; 
import '../css/home.css' ; 
import { Link } from 'react-router-dom';
import Card from './Card';
import Footer from  './Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect  ,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Review from './Review';

import image from '../assets/laptop-accessories.jpg';
import logo from '../assets/logo-sharetech.png';


export default function Home() {
  const [electronic, setElectronic] = React.useState([]);

  const getData = async () => {
    try{
      const response = await fetch("http://localhost:8000/api/electronics");
      const result = await response.json();
      console.log(result.data);

    
      setElectronic(result.data);
  
    }catch(error){  
      console.log(error);
    }
  }

  useEffect(() =>{
    getData(); 

  } , [])

  // initialize animate on scroll

  useEffect(() =>{
    AOS.init();

  } , []) ; 
  return (
    <>
    <section className="bg-dark text-light p-3 text-center pt-lg-5 text-sm-start ">
          <div className="container">
            <div className="d-sm-flex py-5 ">
               <div>
                <h1 data-aos="fade-right" > Welcome to 
                    <br />
                    <span className=" text-warning"> ShareTech Website</span>
                  
                   </h1>
                <p data-aos="fade-right" className="lead my-4">Students who hesitate to make a decision before starting to purchase an electronic devices or study materials, particularly those preparing for university, will find it difficult to do so. We introduced the website that assisting them in choosing the best option for their needs and budget.</p>

                <button className="btn btn-outline-light btn-lg px-5 mb-2">Start Enrollment</button>
               </div>
               <img  src={logo} alt=""  className="img-fluid img-logo g-4" height={`400px`}  width={`500px`}/>
            </div>
          </div>
      </section>

      {/* <section className="p-3">
        <div className="container">
          <div className="row d-flex flex-md-wrap  text-center g-3">
            <div className="col-sm-4">

              <div className="card text-light bg-dark  ">
              <img src='https://fastly.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE' class="card-img-top  " alt="..."/>
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
            <div className="col-sm-4">
            <div className="card text-light bg-dark">
              <img src='https://fastly.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE' class="card-img-top " alt="..."/>
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
            <div className="col-sm-4">
            <div className="card text-light bg-dark  ">
              <img src='https://fastly.picsum.photos/id/684/200/300.jpg?hmac=nn1tmB9fSTQO4MaL20HOedMOv4HNILJxIjPvOPhuxbE' class="card-img-top " alt="..."/>
                <div className="card-body text-center">

                  <div className="h1 mb-3">
                  <i class="bi bi-cart"></i>
                  </div >
                  
                    <div className="card-title mb-3 ">
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
      </section> */}


      {/* section carousel Top Electronic*/}

      <section className='p-3'>

        <div className="container">
          <div className="text-center">
            {/* <h2>Trending Electronic</h2> */}
          </div>

          <div>

            <Review />


          </div>
          <h2></h2>
        </div>
      </section>




      {/* section Footer */}
      {/* <Footer/> */}

    </>


  )
}
