import React from 'react' ; 
import '../css/card.css'; 
import { useState , useEffect } from 'react' ;
import { useNavigate } from 'react-router-dom'
import {Link , useParams } from 'react-router-dom' ;
export default function Card() {
const [electronic, setElectronic] = React.useState([]);
const {id} = useParams();

const navigate = useNavigate() ;

const token = localStorage.getItem("access_token") ? JSON.parse(localStorage.getItem('access_token')) : null ; 

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

  const SaveItem = async () => {
    const datas = {id} ;
    const response = await fetch("http://localhost:8000/api/user/favorites/" + id, {
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
        navigate('/save');
    }
    else{
        alert("Something went wrong") ;
    }

  }

  useEffect(() =>{
    getData(); 
 

  } , [])

  
  return (
    <>


<div className="row d-flex justify-content-center g-4">

    {
      electronic.map((item) => {
        return(
          <div className="col ">
  
              <div className="card card-size text-light bg-dark"  >
              <img src={item.image1} class="card-img-top " alt="image" width={`300px`} height={`400px`}/> 
              <div className="card-body ">
                  <div className="card-title mb-3">
                  <h3>{item.name}</h3>
                  </div>
                  <div className="card-text mb-3">
                  <p><i class="bi bi-currency-dollar">{item.price}</i></p>
                  </div>
                
                    <button className="btn btn-outline-secondary btn-md text-light"><Link class ="nav-link"  to ={"/electronic/" + item.id} key={item.id}>See more</Link></button>
                    <button className="btn btn-danger btn-md text-light mx-2"><i class="bi bi-heart"   onClick={SaveItem } ></i></button>
                
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
