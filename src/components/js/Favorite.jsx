import React from 'react'
import { useParams ,Link } from 'react-router-dom';
import {useState , useEffect} from 'react' ;



export default function Favorite() {
  const {id} = useParams() ;
  const [favorites , setFavorites] = React.useState([]);
  const token = localStorage.getItem("access_token") ? JSON.parse(localStorage.getItem('access_token')) : null ; 

  const GetFavorite = async () =>{
     
    try{
      const response = await fetch("http://localhost:8000/api/user/favorites", {
        headers:{
          Authorization: `Bearer ${token}`,
       
        }
      }); 
      const result = await  response.json() ;  
      setFavorites(result.data) ; 
      console.log(result.data); 

    }catch(err){
      console.log(err) ; 
    }

  }

  useEffect(()=>{
    GetFavorite() ;

  }, [] )

  
  return (
    <>
    <div className='container py-5'>

        <h1 class = "text-primary">Electronic saved to favorites</h1>

        {
          favorites.map((item) => {
            return (
              <div>
               
                <p> Electronic ID: {item.electronic_id}</p>
              </div>
            )
          })
        }
     


        {/* <div className="w-75 container  d-grid justify-content-center">
        <div className="card flex-row " style={{maxWidth:"800px" , maxHeight:"200px"}}>
          <img className=" card-img-md-left   rounded"  src="https://fastly.picsum.photos/id/368/200/300.webp?hmac=NpnQWyrFvHDHYfizNBDiFjtcLM34A_spzB0OEE1CUlo" alt="Card image" style={{ width:"400px" , height:"200px"}}/>
          <div className="card-body ">
            <h5 className="card-title fw-bold m-2 text-info">ShareTech</h5>
            <p className="card-text m-2"></p>
            <p className=" text-secondary m-2 mt-2">Based on Laravel and React Js</p>
              
            
          </div>
        </div>
     
  
    </div> */}
    

    </div>
    </>
  )
}
