import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function AccessoryDetails() {

    const [accessory, setAccessory] = React.useState([]);
    const {id} = useParams();

    const getAccessory = async () => {
        const response = await fetch("http://localhost:8000/api/electronics/" + id);
        const result = await response.json();
        setAccessory(result.data);
        console.log(result.data);
    }

    
    useEffect(()=>{
        getAccessory();
    } , [])


   return (
    <>

        <div className="container">
        {
            accessory.map((show) => 
               (
                    <div className="row d-sm-flex py-5 ">
                    <div className="col-md">
                        <img className='img-fluid' src={show.image1} alt="electronic" height={`400px`}  width={`500px`}/>
                    </div>
        
                    <div className="col-md">
                        <h2 className="text-upercase text-black-50 py-3 ">
                            {show.name}
                            
                        </h2>
                        <table class="table table-borderless">
        
                            <tbody>
                                <tr>
                                <td className=' fw-bold'>Brand</td>
                                <td>{show.accessories.brand}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Connectivity</td>
                                <td>{show.accessories.connectivity}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Special Feature</td>
                                <td>{show.accessories.special_feature}</td>
                                </tr>
                               
                                <tr>
                                <td className=' fw-bold' >Price</td>
                                <td>{show.price}<i class="bi bi-currency-dollar"></i></td>
                                </tr>
                            </tbody>
                            </table>
        
                            <div className="fw-bold">
                                <h4>Description</h4>
                            </div>
                            <div className=" m-lg-4">
                                <p>{show.description}</p>
                            </div>

        
                            <div className="fw-bold py-3">
                                <h4><i className="bi bi-bag text-primary">Where You Can Buy</i></h4>
                                <p className=' m-lg-4'>{show.shop_name}</p>
                            </div>
        
                    </div>
                </div>
        
                ) 
            )
        }
       
  
    </div>

    
    </>
  )
}
