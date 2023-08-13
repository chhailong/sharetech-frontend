import React from 'react' ; 
import '../css/card.css'; 
import { useState , useEffect } from 'react' ;
import { useNavigate } from 'react-router-dom'
import {Link , useParams } from 'react-router-dom' ;
import axios from 'axios';




export default function Card() {



const [electronics, setElectronics] = React.useState([]);

const token = localStorage.getItem("access_token") ? JSON.parse(localStorage.getItem('access_token')) : null ; 


  
const navigate = useNavigate() ;


  const getData = async () => {
    try{
      const response = await fetch("http://localhost:8000/api/electronics");
      const result = await response.json();
      console.log(result.data);

  
      setElectronics(result.data);
  
    }catch(error){  
      console.log(error);
    }
  }


  // const handleAddToFavorites = async (productId) => {
  //   try{
  //     const response = await axios.post("http://localhost:8000/api/user/favorites/"+productId , {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Accept": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       }
  //     })

  //     navigate("/save");
  //   }catch(error){
  //     console.log(error);
  //   }
  // }

  const handleAddToFavorites = async (productId) => {
    try{
     const response = await fetch("http://localhost:8000/api/user/favorites/" + productId , {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: `Bearer ${token}`,
        },
 
      });
      if(response.status === 200){
        const data = await response.json();
        console.log(data);
        navigate('/save') ;
      }else{
        alert("Something went wrong") ;
      }
    
      

    }catch(error){
      console.log(error);
    }
      

}

  useEffect(() =>{
    getData(); 

  } , [])

  
  return (
    <>


<div className="row d-flex justify-content-center g-4">

    {
      electronics.map((item) => {
        return(
          <div className="col ">
  
              <div className="card card-size text-light bg-dark" style={{width:"300px" ,height:"400px"}} >
              <img src={item.image1} class="card-img-top " alt="image" width={`300px`} height={`400px`}/> 
              <div className="card-body ">
                  <div className="card-title mb-3">
                  <h5>{item.name}</h5>
                  </div>
                  <div className="card-text mb-3">
                  <p><i class="bi bi-currency-dollar">{item.price}</i></p>
                  </div>
                
                    <button className="btn btn-outline-secondary btn-md text-light"><Link class ="nav-link"  to ={"/electronic/" + item.id} key={item.id}>See more</Link></button>
                    <button className="btn btn-danger btn-md text-light mx-2"onClick={() => handleAddToFavorites(item.id)} ><i class="bi bi-heart" ></i></button>
                
              </div>
            </div>
            </div>
       
        )
      })
    }
    </div>

    
       

    
    </>

  )
}
