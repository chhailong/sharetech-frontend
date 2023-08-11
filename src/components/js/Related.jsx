import React from 'react'
import { useParams } from 'react-router-dom';
import {useState , useEffect} from 'react' ;
import Card from './Card';
import { Link } from 'react-router-dom';

export default function Related () {
    const [related , setRelated] = React.useState([]);
    const {id} = useParams();

    const getRelated = async () => {
        const response = await fetch("http://localhost:8000/api/electronics/"+id+"/related");
        const result = await response.json();
        setRelated(result.data);
        console.log(result.data);
    }

        useEffect(()=>{
        getRelated() ;

          }, [id] )
  return (
    <>
    {/* <div className="container">


        <div className="row d-flex flex-md-wrap  g-3">
          {
            related.map((item) => {
              return (
                <div className=" col-md-4">
                    <Link className='nav-link' to ={"/electronic/" + item.id} key={item.id}>
                      <Card className = ""  key={item.id} image1 = {item.image1}   name= {item.name} price= {item.price} ></Card>
                    </Link> 
                    </div>
              )

            })
          }
          </div>
    </div> */}



    
    </>

  )
}
