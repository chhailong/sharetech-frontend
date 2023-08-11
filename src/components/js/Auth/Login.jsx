import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");

  const navigate = useNavigate();

  const loginData = () => {
    console.log(email, password , role);
    axios.post('http://localhost:8000/api/login', {
      email: email,
      password: password,
      role: role

    }).then((result )=>{
      console.log(result.data);
      // Save JWT to local storage
      localStorage.setItem('access_token', JSON.stringify(result.data.access_token));
      localStorage.setItem('user', JSON.stringify(result.data.user));
      // Redirect page base on role
      // navigate ('/admin') ; 
      if (result.data.role === 'admin') {
        navigate('/dashboard');
      }

      else if ( result.data.role === 'user') {
       navigate('/');
      //  alert("You are user ,Can not access to admin page");

      }
    }).catch((err)=>{

      console.log(err);
    }); 


  }

  return (
    <>
  <section class=" gradient-custom">
          <div class="container py-2 h-75">
            <div class="row d-flex justify-content-center align-items-center h-75">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card bg-dark text-white border " style={{width:"400px"}} >
                  <div class="card-body p-5 text-center">

                    <div class="mb-md-5 mt-md-4 pb-5">

                      <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                      <p class="text-white-50 mb-5">Please enter your login and password!</p>

                      <div class="form-floating mb-4 text-dark">
                                <input class="form-control form-control-lg rounded-pill" value={email}  onChange={(e)=>setEmail(e.target.value)} name="email"  type="email" placeholder=" " required/>
                                <label for="Email">Email</label>
                      </div>
                      <div class="form-floating mb-4 text-dark ">
                                <input class="form-control form-control-lg  rounded-pill" name="password"  value={password}  onChange={(e)=>setPassword(e.target.value)} type="password" placeholder=" " required />
                                <label for="password">Password</label>
                      </div>
                      <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

    
                      <button class="btn btn-outline-light btn-lg px-5" type="button" onClick={loginData}>Login</button>

                    </div>

                    <div>
                      <p class="mb-4">Don't have an account? <Link to = {`/register`} class="text-white-50 fw-bold">Sign Up</Link>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
    </>
  )
}
