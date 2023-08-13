import React from 'react'
import { useState ,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function PostLaptop() {

  const[electronic_id , setElectronic_id] = useState("") ;
  const [brand , setBrand] = useState("") ;
  const [os , setOs] = useState("") ;
  const [cpu , setCpu] = useState("") ;
  const [ram , setRam] = useState("") ;
  const [storage , setStorage] = useState("") ;
  const [screen_size , setScreen_size] = useState("") ;
  const [gpu , setGpu] = useState("") ;
  const[battery , setBattery] = useState("") ;
  const [refresh_rate , setRefresh_rate] = useState("") ;
  const[pro , setPro] = useState("") ;
  const[con , setCon] = useState("") ;

  

    const navigate = useNavigate() ;
  const token = localStorage.getItem("access_token") ? JSON.parse(localStorage.getItem('access_token')) : null ; 


    const LaptopPost = async () => {
      
        const response = await fetch("http://localhost:8000/api/admin/laptops", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            electronic_id,
            brand,
            os,
            cpu,
            ram,
            storage,
            screen_size,
            gpu,
            battery,
            refresh_rate,
            pro,
            con
        
        
          }),
        });
        if(response.status === 201){
            const data = await response.json();
            console.log(data);
            navigate('/dashboard') ;
        }
        else{
            alert("Something went wrong") ;
        }
    }

  return (
    <>
      <div className="container">
    <main class="mb-4 mt-5">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <h2 className='text-uppercase text-danger'>Laptop Post </h2>
                    <div class="my-5">
                        <form >
                
                             <div class="form-floating mb-2">
                                <input class="form-control"  value={electronic_id } onChange={(e) => setElectronic_id(e.target.value)} name="electronic_id" type="text" placeholder=" " required />
                              
                                <label for="electronic_id">Electronic_id</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={brand} onChange={(e) =>setBrand(e.target.value)} name="brand" type="text"  placeholder=" " required/>
                              
                                <label for="brand">Brand</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={os} onChange={(e) =>setOs(e.target.value)} name="os" type="text" placeholder=" " required/>
                               
                                <label for="os">OS</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={cpu} onChange={(e) =>setCpu(e.target.value)} name="cpu" type="text" placeholder=" " required/>
                               
                                <label for="cpu">CPU</label>
                            </div> 

                            <div class="form-floating mb-2">
                                <input class="form-control" value={ram} onChange={(e) =>setRam(e.target.value)} name="ram" type="text" placeholder=" " required/>
                              
                                <label for="ram">Ram</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={storage} onChange={(e) =>setStorage(e.target.value)} name="storage" type="text" placeholder=" " required/>
                             
                                <label for="storage">Storage</label>
                            </div>

                            <div class="form-floating mb-2">

                                <input class="form-control" value={screen_size} onChange={(e) =>setScreen_size(e.target.value)} name="screen_size" type="text" placeholder=" " required/>
                                <label for="screen_size">Screen size</label>
                            
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={gpu} onChange={(e) =>setGpu(e.target.value)} name="gpu" type="text" placeholder=" " required/>
                                <label for="gpu">GPU</label>
                                </div>
                     
                            <div class="form-floating mb-2">
                                <input class="form-control" value={battery} onChange={(e) =>setBattery(e.target.value)} name="battery" type="text" placeholder=" " required/>
                                <label for="battery">Battery</label>
                                </div>
                     
                            <div class="form-floating mb-2">
                                <input class="form-control" value={refresh_rate} onChange={(e) =>setRefresh_rate(e.target.value)} name="refresh_rate" type="text" placeholder=" " required/>
                                <label for="refresh_rate">Refresh rate</label>
                                </div>
                     
                            <div class="form-floating mb-2">
                                <input class="form-control" value={pro} onChange={(e) =>setPro(e.target.value)} name="pro" type="text" placeholder=" " required/>
                                <label for="pro">Pro</label>
                                </div>

                            <div class="form-floating mb-2">
                                <input class="form-control" value={con} onChange={(e) =>setCon(e.target.value)} name="con" type="text" placeholder=" " required/>
                                <label for="con">Con</label>
                                </div>
                            <br />

                            <button class="btn btn-outline-success btn-lg px-5 m-1 text-uppercase"  value="Save" onClick={LaptopPost} type="button">Post</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </main>


    </div> 



    </>

  )
}
