import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <>
   
      <div className=" navbar navbar-expand-lg p-3  py-3 bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold text-lg text-danger" to={`/`}><i className="bi bi-rocket-takeoff">ShareTech</i></Link>
            <div className="navbar-toggler" type="text" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""><i class="bi bi-list"></i></span>
            </div>
            
            <div className="collapse navbar-collapse flex-row justify-content-end" id="nav">
                <form className="d-flex  w-50" role="search">
            
                <input   class="form-control me-2 rounded-pill " type="search"  placeholder=" Search" aria-label="Search" />
         
                </form>

                <ui className=" navbar-nav">
                    <li className='nav-item'>
                        <Link to ={`/`} className='nav-link '>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ={`/review`} className='nav-link '>Review</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ={`/recommand`} className='nav-link '>Recommand</Link>
                    </li>

                    {/* <li className='nav-item'>
                        <Link to ={`/details`} className='nav-link'>Details</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ={`/accessories`} className='nav-link'>Accessory</Link>
                    </li> */}
                    <li className='nav-item'>
                        {/* <Link to ={`/details`} className='nav-link'><button className="btn btn-danger rounded-pill " >Login</button></Link> */}
                        <Link to ={`/login`} className='nav-link'>Login</Link>
                    </li>

                </ui>
                
            </div>
        </div>
        </div>


    </>
  );
}
