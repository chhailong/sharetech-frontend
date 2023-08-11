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
    <div className="dashboard rounded-2 py-5 d-flex flex-wrap">
        <article className=' float-sm-start  h-100 border-3 '>
            <h1 className='text-center py-3'>
                <i class="bi bi-house-gear-fill">Admin</i>
            </h1>
            <ul className='list-group list-group-flush border-2 '>
                <Link to ="/dashboard/post_electronic" className='list-group-item '><button className="btn btn-outline-info ">Electronic Post</button></Link>
                <Link to ="/dashboard/post_laptop" className='list-group-item '><button className="btn btn-outline-info  ">Laptop Post</button></Link>
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
                            <td className='text-truncate' ><img src={item.image1} alt='image1'  style={{width:"120px" ,height:"90px"}} /></td>
                            <td className='text-truncate' ><img src={item.image2} alt='image2'  style={{width:"120px" ,height:"90px"}} /></td>
                            <td className='text-truncate' ><img src={item.image3} alt='image3'  style={{width:"120px" ,height:"90px"}} /></td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.description}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.electronic_type_id}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.major}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.price}</td>
                            <td className='text-truncate' style={{maxWidth:"100px"}}>{item.shop_name}</td>
                            <td >
                            <Link to ={`/dashboard/edit-place/${item.id}`} className="btn btn-outline-info btn-sm m-1">Edit</Link>
                            {/* <Link to ="#" className="btn btn-outline-danger btn-sm m-1 " 
                            {...item.id}  onClick={()=>DeletePlace(item.id)}
                            >Delete</Link> */}

                            <Link to={"/dashboard/view-place/" +item.id} key={item.id} className="btn btn-outline-success btn-sm m-1">View</Link>
                            </td>

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
