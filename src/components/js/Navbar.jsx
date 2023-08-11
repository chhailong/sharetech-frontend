import React from "react";
import { Link } from "react-router-dom";
import '../../components/css/navbar.css'
import profile from "../assets/profile.png"
import { useEffect } from "react";



export default function Navbar () {
    const userLogin  = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null ;
    const [userInfo , setUserInfo] = React.useState(userLogin) ;
    console.log(userInfo);

    function logout() {
        // Remove the user information from local storage.
        localStorage.removeItem("user");
      
        // Redirect the user to the login page.
        window.location.href = "/login";
      }

      useEffect(()=>{
        
      } , userInfo)

  return (
    <>
   
      <div className=" navbar navbar-expand-lg p-3  py-3 bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold text-lg text-danger " to={`/`}><i className="bi bi-rocket-takeoff">ShareTech</i></Link>
            <div className="navbar-toggler" type="text" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""><i class="bi bi-list"></i></span>
            </div>
            
            <div className="collapse navbar-collapse flex-row justify-content-end" id="nav">
                {/* <form className="d-flex  w-50" role="search">
            
                <input   class="form-control me-2 rounded-pill " type="search"  placeholder=" Search" aria-label="Search" />
         
                </form> */}
                <ui className=" navbar-nav ">
                    <li className='nav-item'>
                        <Link to ={`/`} className='nav-link fw-bold text-lg text-light '>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ={`/review`} className='nav-link fw-bold text-lg text-light'>Review</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to ={`/recommand`} className='nav-link fw-bold text-lg text-light'>Recommand</Link>
                    </li>


                    {
                        userInfo ? (
                            <li className='nav-item'>
                           <div class="dropdown">
                            <a class=" dropdown-toggle" href="#"  data-bs-toggle="dropdown"style={{ marginRight:"50px"}} >
                           
                             <img src={profile} alt="" className=" rounded-circle" style={{width:"40px" , height:"50px" }} />

                            </a>
                            
                            <ul class="dropdown-menu">
                                <h5 className="m-2">{userInfo.name}</h5>
                                <Link to ={`/dashboard`} className="nav-link  text-black" >Dashboard</Link>
                                <li><a class="dropdown-item" href="#"onClick={logout} >Logout</a></li>
                              
                            </ul>
                            </div>
                                
                            </li>
                        ) : (   <li className='nav-item'>
                            <Link to ={`/login`} className='nav-link '> <button className="btn btn-outline-info  ">Login</button></Link>
                        </li>)
                    }


                    

                    <li className='nav-item'>
                        <Link to ={`/save`} className='nav-link fw-bold text-lg text-light'>
                        <i class="bi bi-save-fill"></i>
                        </Link>
                    </li>

          

             


                </ui>
                
            </div>
        </div>
        </div>


    </>
  );
}
