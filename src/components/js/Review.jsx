import React from 'react';
import Card from './Card';
import { Link , useLocation  , useNavigate ,useParams} from 'react-router-dom';
import { useState , useEffect } from 'react';
import axios from 'axios';


export default function Review() { 

  const navigate = useNavigate();
 
  const [electronic, setElectronic] = React.useState([]);
  const [save , setSave] = React.useState([]);

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
  return (
    <>

    <div className="container py-5">
      <div className=" text-uppercase">
        <h1 className="text-center text-info ">Review Electronics</h1>
      </div>
      <div>
        <Card/>
      </div>
        <div className="row d-flex flex-wrap  g-3">
     

         
          {/* {
            electronic.map((item) => {
              return (
                <div className=" col-md-4">
                    <Link className='nav-link' to ={"/electronic/" + item.id} key={item.id}>
                      <Card className = ""  key={item.id} image1 = {item.image1} name= {item.name} price= {item.price}  ></Card>
                    </Link> 
                    </div>
            
              )

            })
          } */}
          </div>
    </div>

    </>
    
  )
}
