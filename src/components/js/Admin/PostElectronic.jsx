import React from 'react'
import {useState , useEffect} from 'react' ;
import axios from 'axios' ;

export default function PostElectronic() {

    const [electronicData , setElectronicData] = useState([]);
    const [name , setName] = useState('');
    const [image1 , setImage1] = useState('');
    const [image2 , setImage2] = useState('');
    const [image3 , setImage3] = useState('');
    const [description , setDescription] = useState('');
    const [major , setMajor] = useState('');
    const [price , setPrice] = useState('');
    const [shop_name , setShop_name] = useState('');




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
                                <input class="form-control" name="name" type="text" placeholder=" " required />
                              
                                <label for="name">Name</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" name="image1" type="text"  placeholder=" " required/>
                              
                                <label for="image1">Image 1</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" name="image2" type="text" placeholder=" " required/>
                               
                                <label for="image2">Image 2</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" name="image3" type="text" placeholder=" " required/>
                               
                                <label for="image3">Image 3</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" name="description" type="text" placeholder=" " required/>
                             
                                <label for="description">Description</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" name="major" type="text" placeholder=" " required/>
                              
                                <label for="major">Major</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" name="price" type="text" placeholder=" " required/>
                             
                                <label for="price">Price</label>
                            </div>

                            <div class="select mb-2">
                                <select class="form-select"  name ="electronic_type_id" aria-label=" select ">
                           
                                    <option value="1">Laptop</option>
                                    <option value="2">Accessories</option>
                             
                                </select>
    
                            </div>
                            <div class="form-floating mb-2">

                                <input class="form-control" name="shop_name" type="text" placeholder=" " required/>
                                <label for="shop_name">Shop</label>
                            
                            </div>
                          
                            <br />

                            <button class="btn btn-primary text-uppercase"  value="Save" type="submit">Post</button>
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
