import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <>
    <div className="dashboard rounded-2">
        <article className=' float-sm-start w-25 vh-100 bg-primary border-3'>
            <h1 className='text-center py-3'>
                <i class="bi bi-house-gear-fill">Admin</i>
            </h1>
            <ul className='list-group list-group-flush border-2 '>
                <Link to ={`/dashboard/postelectronic`} className='list-group-item bg-primary'><button className="btn btn-outline-info btn-md px-5 mb-2 w-75 mx-auto ">Electronic Post</button></Link>
                <Link className='list-group-item bg-primary'><button className="btn btn-outline-info btn-md px-5 mb-2 w-75 mx-auto">Accessories Post</button></Link>
                <Link className='list-group-item bg-primary'><button className="btn btn-outline-info btn-md px-5 mb-2 w-75 mx-auto">Laptop Post</button></Link>
            </ul> 
        </article>

        <aside className='float-sm-start bg-secondary w-75 vh-100'>
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
                <th scope="col">Laptop_id</th>
                <th scope="col">Accessories_id</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>MSI</td>
                <td>https://fastly.picsum.photos/id/75/200/300.jpg?hmac=sjSIzdmDj0dZefwBIN61pwl3azxymhEGh9owb8ZEgxg</td>
                <td>https://fastly.picsum.photos/id/75/200/300.jpg?hmac=sjSIzdmDj0dZefwBIN61pwl3azxymhEGh9owb8ZEgxg</td>
                <td>https://fastly.picsum.photos/id/75/200/300.jpg?hmac=sjSIzdmDj0dZefwBIN61pwl3azxymhEGh9owb8ZEgxg</td>

                </tr>
                

            </tbody>
            </table>


            </div>

        </aside>
    </div>


    </>
  )
}
