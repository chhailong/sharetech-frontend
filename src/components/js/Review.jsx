import React from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';





export default function Review() {

  const [electronic, setElectronic] = React.useState([]);

  // async function getData() {

  //   try {
  //     const response = await axios.get("http://localhost:8000/api/electronics")

  //       setElectronic(response.data);
  //       console.log(response.data);

  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  const getData = async () => {
    try{
      const response = await fetch("http://localhost:8000/api/electronics");
      const result = await response.json();
      console.log(result);
      setElectronic(result.data);

    }catch(error){  
      console.log(error);
    }
  }

  useEffect(() =>{

    getData() ; 
  } , [])




  return (
    <>

    <div className="container">
      <div className=" text-uppercase">
        <h1 className="text-center text-info">Review Electronics</h1>
      </div>
        <div className="row d-flex flex-md-wrap justify-center g-3">
          {
            electronic.map((item) => {
              return (

             
                <div className=" col-md-4">
                  <Link to ={"/electronics/laptops/" + item.id} key={item.id}>
                      <Card className = ""  key={item.id} image1 = {item.image1}   name= {item.name} price= {item.price} ></Card>
                     
                  </Link>
                  {/* <Link to ={"/electronics/accessories/" + item.id} key={item.id}>
                      <Card className = ""  key={item.id} image1 = {item.image1}   name= {item.name} price= {item.price} ></Card>
                     
                  </Link> */}
               
                </div>
            
              )

            })
          }
          </div>
    </div>

    </>
    
  )
}
