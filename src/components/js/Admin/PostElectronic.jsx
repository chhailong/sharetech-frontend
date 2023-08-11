import React from 'react'
import {useState , useEffect} from 'react' ;
import axios from 'axios' ;
import { Link, useNavigate } from 'react-router-dom';
import './/..//../../components/css/home.css';

export default function PostElectronic() {
    const navigate = useNavigate();

    const [electronicData , setElectronicData] = useState([]);
    const [name , setName] = useState('');
    const [image1 , setImage1] = useState('');
    const [image2 , setImage2] = useState('');
    const [image3 , setImage3] = useState('');
    const [description , setDescription] = useState('');
    const [electronic_type_id , setElectronic_type_id] = useState('');
    const [major , setMajor] = useState('');
    const [price , setPrice] = useState('');
    const [shop_name , setShop_name] = useState('');

    async function PostEle(){
        console.log("name" , name);
        let item = {name , image1 , image2 , image3 , description , electronic_type_id , major , price , shop_name}; 
        console.warn(item);
        let result =  await fetch("http://localhost:8000/api/admin/electronics", {
          method: 'POST' , 
          body: JSON.stringify(item), 
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        }) ; 
       
        if(result.error){
          alert(result.error);
        }else{
          result =  await result.json(); 
          console.warn("result", result);
          localStorage.setItem("user-info" , JSON.stringify(result));
          navigate('/dashboard');
        }
       
      }

  return (
    <>

    <div className="container">
    <main class="mb-4 mt-5">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <h2 className='text-uppercase text-danger'>Electronic Post </h2>
                    <div class="my-5">
                        <form >
                
                             <div class="form-floating mb-2">
                                <input class="form-control"  value={name } onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder=" " required />
                              
                                <label for="name">Name</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={image1} onChange={(e) =>setImage1(e.target.value)} name="image1" type="text"  placeholder=" " required/>
                              
                                <label for="image1">Image 1</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={image2} onChange={(e) =>setImage2(e.target.value)} name="image2" type="text" placeholder=" " required/>
                               
                                <label for="image2">Image 2</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={image3} onChange={(e) =>setImage3(e.target.value)} name="image3" type="text" placeholder=" " required/>
                               
                                <label for="image3">Image 3</label>
                            </div>

                            <div class="form-floating mb-2">
                                <input class="form-control" value={major} onChange={(e) =>setMajor(e.target.value)} name="major" type="text" placeholder=" " required/>
                              
                                <label for="major">Major</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" value={price} onChange={(e) =>setPrice(e.target.value)} name="price" type="text" placeholder=" " required/>
                             
                                <label for="price">Price</label>
                            </div>

                            <div class="select mb-2 mx-lg ">
                                <select class="form-select "  onChange={(e) =>setElectronic_type_id(e.target.value)} name ="electronic_type_id" aria-label=" select ">
                           
                                    <option value="1">Laptop</option>
                                    <option value="2">Accessories</option>
                             
                                </select>
    
                            </div>
                            <div class="form-floating mb-2">

                                <input class="form-control" value={shop_name} onChange={(e) =>setShop_name(e.target.value)} name="shop_name" type="text" placeholder=" " required/>
                                <label for="shop_name">Shop</label>
                            
                            </div>
                            <div class="form-floating mb-2">
                            <textarea class="form-control" value={description} onChange={(e) =>setDescription(e.target.value)} placeholder="Leave a comment here" id="floatingTextarea2" ></textarea>
                            <label for="floatingTextarea2">Description</label>
                            </div>
                          
                            <br />

                            <button class="btn btn-primary text-uppercase"  value="Save" onClick={PostEle} type="submit">Post</button>
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
