import React from "react";
import { Link } from "react-router-dom";


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

  return (
    <>
   
      <div className=" navbar navbar-expand-lg p-3  py-3 bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
            <Link className="navbar-brand fw-bold text-lg text-danger" to={`/`}><i className="bi bi-rocket-takeoff">ShareTech</i></Link>
            <div className="navbar-toggler" type="text" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className=""><i class="bi bi-list"></i></span>
            </div>
            
            <div className="collapse navbar-collapse flex-row justify-content-end" id="nav">
                {/* <form className="d-flex  w-50" role="search">
            
                <input   class="form-control me-2 rounded-pill " type="search"  placeholder=" Search" aria-label="Search" />
         
                </form> */}

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

                    {
                        userInfo ? (
                            <li className='nav-item'>
                           <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" href="#"  data-bs-toggle="dropdown" aria-expanded="false">
                             {userInfo.name}

                            </a>

                            <ul class="dropdown-menu">
                                <Link to ={`/dashboard`} className="nav-link  text-black" >Dashboard</Link>
                                <li><a class="dropdown-item" href="#"onClick={logout} >Logout</a></li>
                              
                            </ul>
                            </div>
                                
                            </li>
                        ) : (   <li className='nav-item'>
                            <Link to ={`/login`} className='nav-link '>Login</Link>
                        </li>)
                    }

          

             
                    {/* <li className='nav-item'>
                       
                        <Link to ={`/login`} className='nav-link'>Login</Link>
                    </li> */}

                </ui>
                
            </div>
        </div>
        </div>


    </>
  );
}
