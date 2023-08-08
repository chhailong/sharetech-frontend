import React from 'react';
import './../../../components/css/home.css';
import { Link } from 'react-router-dom';
import {useState , useEffect} from 'react' ;

export default function Dashboard() {
    const [electronic , setElectronic] = useState([]);
    const getData = async () => {
        try{
          const response = await fetch("http://localhost:8000/api/electronics");
          const result = await response.json();
          console.log(result.data);
    
        
          setElectronic(result.data);
      
        }catch(error){  
          console.log(error);
        }
      }
    
      useEffect(() =>{
        getData(); 
    
      } , [])


  return (
    <>
    <div className="dashboard rounded-2">
        <article className=' float-sm-start w-25 vh-100 border-3'>
            <h1 className='text-center py-3'>
                <i class="bi bi-house-gear-fill">Admin</i>
            </h1>
            <ul className='list-group list-group-flush border-2 '>
                <Link to ="/dashboard/post_electronic" className='list-group-item '><button className="btn btn-outline-info btn-md px-5 mb-2 w-75 mx-auto ">Electronic Post</button></Link>
                <Link to ="#" className='list-group-item '><button className="btn btn-outline-info btn-md px-5 mb-2 w-75 mx-auto ">Laptop Post</button></Link>
            </ul> 
        </article>

        <aside className='float-sm-start  w-75 vh-100'>
             <div className="container overflow-auto">

    
               
                        <table class="table table-bordered ">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image 1</th>
                            <th scope="col">Image 2</th>
                            <th scope="col">Image 3</th>
                            <th scope="col">Descrition</th>
                            <th scope="col">ElectronicType</th>
                            <th scope="col">Major</th>
                            <th scope="col">Price</th>
                            <th scope="col">Shop</th>

                            </tr>
                        </thead>
                        {
            electronic.map((item) => {
                return (
                        <tbody>
                            <tr className='vh-25'>
                            <td className='text-truncate' style={{maxWidth:"100px"}} >{item.id}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.name}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.image1}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.image2}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.image3}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.description}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.electronic_type_id}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.major}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.price}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.shop_name}</td>

                            </tr>
                        </tbody>
                             )
                             })
                        
                         }
                        </table>
         </div>
         </aside>

    </div>


    </>
  )
}
