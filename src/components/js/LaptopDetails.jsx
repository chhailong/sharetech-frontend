import React from 'react';
import { useParams } from 'react-router-dom';
import { useState , useEffect } from 'react';

import '../css/details.css';
import { Link  } from 'react-router-dom';
import Related from './Related';

export default function LaptopDetails({laptop}) {

const {id} = useParams() ; 
const [details , setDetails] = React.useState(null);

const getLaptop = async () => {
    const response = await fetch("http://localhost:8000/api/electronics/" + id);
    const result = await response.json();
    setDetails(result.data);
    console.log(result.data);
}
  useEffect(()=>{
    getLaptop(); 

  }, [id] )
  return (
    <>

    <div className="container">
        {/* {
            laptop.map((show) => 
            (
                    <div className="row d-sm-flex py-5 ">
                    <div className="col-md">
                    <img className='img-fluid' src={show.image1} alt="" height={`400px`}  width={`500px`}/>
                
                    </div>
                    <div className="col-md">
                        <h2 className="text-upercase text-black-50 py-3">
                            {show.name}
                        </h2>
                        <table class="table table-borderless">

                            <tbody>
                                <tr>
                                <td className=' fw-bold'>Brand</td>
                                <td>{show.laptops.brand}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>OS</td>
                                <td>{show.laptops.os}</td>
                                </tr>
                                
                                <tr>
                                <td className=' fw-bold'>RAM</td>
                                <td>{show.laptops.ram}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>CPU</td>
                                <td>{show.laptops.cpu}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>GPU</td>
                                <td>{show.laptops.gpu}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Storage</td>
                                <td>{show.laptops.storage}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Display Size</td>
                                <td>{show.laptops.screen_size}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Refresh Rate</td>
                                <td>{show.laptops.refresh_rate}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Battery</td>
                                <td>{show.laptops.battery}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Price</td>
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
                            <div className="fw-bold">
                                <h4><i class="bi bi-people text-info">Recommand For Major</i></h4>
                                <p className=' m-lg-4'>{show.major}</p>
                            </div>
                            <div className="fw-bold">
                                <h4><i className="bi bi-shield-check text-primary">Advantage</i></h4>
                                <p className=' m-lg-4'>{show.laptops.pro}</p>
                            </div>
                            <div className="fw-bold">
                                <h4><i className="bi bi-shield-exclamation text-primary">Disadvantage</i></h4>
                                <p className=' m-lg-4'>{show.laptops.con}</p>
                            </div>

                            <div className="fw-bold py-3">
                                <h4><i className="bi bi-bag text-primary">Where You Can Buy</i></h4>
                                <p className=' m-lg-4'>{show.shop_name}</p>
                            </div>

                    </div>
                </div>
                )
            )
        } */}

     {details && (

                    <div className="row d-sm-flex py-5 ">
                    <div className="col-md">
                    <img className='img-fluid' src={details.image1} alt="" height={`400px`}  width={`500px`}/>
                
                    </div>
                    <div className="col-md">
                        <h2 className="text-upercase text-black-50 py-3">
                            {details.name}
                        </h2>
                        <table class="table table-borderless">

                            <tbody>
                                <tr>
                                <td className=' fw-bold'>Brand</td>
                                <td>{details.getLaptop.brand}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>OS</td>
                                <td>{details.getLaptop.os}</td>
                                </tr>
                                
                                <tr>
                                <td className=' fw-bold'>RAM</td>
                                <td>{details.getLaptop.ram}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>CPU</td>
                                <td>{details.getLaptop.cpu}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>GPU</td>
                                <td>{details.getLaptop.gpu}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Storage</td>
                                <td>{details.getLaptop.storage}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Display Size</td>
                                <td>{details.getLaptop.screen_size}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Refresh Rate</td>
                                <td>{details.getLaptop.refresh_rate}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Battery</td>
                                <td>{details.getLaptop.battery}</td>
                                </tr>
                                <tr>
                                <td className=' fw-bold'>Price</td>
                                <td>{details.price}<i class="bi bi-currency-dollar"></i></td>
                                </tr>
          
                            </tbody>
                            </table>

                            <div className="fw-bold">
                                <h4>Description</h4>
                            </div>
                            <div className=" m-lg-4">
                                <p>{details.description}</p>
                            </div>
                            <div className="fw-bold">
                                <h4><i class="bi bi-people text-info">Recommand For Major</i></h4>
                                <p className=' m-lg-4'>{details.major}</p>
                            </div>
                            <div className="fw-bold">
                                <h4><i className="bi bi-shield-check text-primary">Advantage</i></h4>
                                <p className=' m-lg-4'>{details.getLaptop.pro}</p>
                            </div>
                            <div className="fw-bold">
                                <h4><i className="bi bi-shield-exclamation text-primary">Disadvantage</i></h4>
                                <p className=' m-lg-4'>{details.getLaptop.con}</p>
                            </div>

                            <div className="fw-bold py-3">
                                <h4><i className="bi bi-bag text-primary">Where You Can Buy</i></h4>
                                <p className=' m-lg-4'>{details.shop_name}</p>
                            </div>

                    </div>
                </div>
                )}
                
        </div>

        <div className="container">
            <h3>Related Electronics</h3>

            <Related/>

        </div>

      
    
    </>

  )
}
