import React from 'react';
import '../css/home.css' ; 
import Card from './Card';
import { useState , useEffect } from 'react';
import {Link} from 'react-router-dom' ;
import axios from 'axios' ;

export default function Recommend() {

	const [electronic ,setElectronic] = React.useState([]);

	const [name , setName] = React.useState('') ;
	const [major , setMajor] = React.useState('') ;
	const [price , setPrice] = React.useState('') ;
	const [min_price , setMin_Price] = React.useState('') ;
	const [max_price , setMax_Price] = React.useState('') ;
	const [catagory , setCatagory] = React.useState('') ;

   console.log(name , major , price , min_price , max_price , catagory );

	const Filter = async () => {
		const datas = {name , major , price , min_price , max_price , catagory } ;
		const response = await fetch(`http://localhost:8000/api/electronic/filtering?name=${name}&major=${major}&price=${price}&min_price= ${min_price} &max_price =${max_price}`);

		const result = await response.json();
		setElectronic(result.data);
		console.log(result.data);
		
		
	}

	useEffect(()=>{
		Filter();
	}, [] )
	// [price , major , name ,min_price ,max_price ,catagory]


  return (
    <>
	<div class="container">
<div class="row">
	<aside class="col-md-3 p-4">
		
	<div class="card " style={{height:"auto"}}>
			<article class="filter-group">
				<header class="card-header">
					<h6 className=' text-uppercase'>Electronic Name</h6>

				</header>
				<div class="filter-content collapse show" id="collapse_1" >
					<div class="card-body">
						<form class="pb-3">
						<div class="input-group">
						<input type="text" value={name} onChange={(e)=>setName(e.target.value)} class="form-control" placeholder="Search"/> 
						</div>
						</form>
					
					</div> 
				</div>
			</article> 
			<article class="filter-group">
				<header class="card-header">
				<h6 className=' text-uppercase'>Price</h6>
				</header>
				<div class="filter-content collapse show" id="collapse_3" >
					<div class="card-body">
						
						<div class="form-row">
			
						<div class="form-group col-md-6">
						<label>min </label>
						<input class="form-control " value = {min_price} onChange={(e)=>setMin_Price(e.target.value)}  placeholder="$0" type="number"/>
						</div>
						<div class="form-group col-md-6">
						<label>max</label>
						<input class="form-control " value = {max_price} onChange={(e)=>setMax_Price(e.target.value)}  placeholder="$3000" type="number"/>
						</div>

						</div> 
						
					</div>
				</div>
			</article>
			<article class="filter-group">
				<header class="card-header">
				<h6 className=' text-uppercase'>Catagory</h6>
				</header>
				<div class="filter-content collapse show" id="collapse_3" >
					<div class="card-body">
					
						<div class="form-row">
						<div class="form-group col-md-6">
						<div class="select mb-1 m-xl-2  ">
							<select class="form-select "  onChange={(e) =>setCatagory(e.target.value)} name ="catagory" aria-label=" select ">
						
								<option className='w-50' value="1">Laptop</option>
								<option className='w-50' value="2">Accessory</option>

							</select>

						</div>
						
						</div>
						</div> 
						
					</div>
				</div>
			</article>

			<article class="filter-group">
				<header class="card-header">

					<h6 className=' text-uppercase'>Major</h6>
				</header>
				<div class="filter-content collapse show" id="collapse_2">
					<div class="card-body">
					<div class="form-check"  onChange={(e)=>setMajor(e.target.value)} >
					<input class="form-check-input" value="IT"  type="checkbox"  id="flexCheckDefault"/>
					<label class="form-check-label"  for="flexCheckDefault">
						IT 
					</label>
					</div>
					<div class="form-check" onChange={(e)=>setMajor(e.target.value)}>
					<input class="form-check-input"  type="checkbox"  value="Architecture" id="flexCheckDefault"/>
					<label class="form-check-label" for="flexCheckDefault">
						Architecture
					</label>
					</div>

					<div class="form-check"  onChange={(e)=>setMajor(e.target.value)}>
					<input class="form-check-input"  value="Designer"  type="checkbox"  id="flexCheckDefault"/>
					<label class="form-check-label" for="flexCheckDefault">
						Designer 
					</label>
					</div>

					<div class="form-check"  onChange={(e)=>setMajor(e.target.value)}>
					<input class="form-check-input" value="Accounting" type="checkbox"  id="flexCheckDefault"/>
					<label class="form-check-label" for="flexCheckDefault">
						Accounting
					</label>
					</div>

					<div class="form-check"  onChange={(e)=>setMajor(e.target.value)}>
					<input class="form-check-input" value="Content Creator"  type="checkbox"  id="flexCheckDefault"/>
					<label class="form-check-label" for="flexCheckDefault">
						Content Creator
					</label>
					</div>			
				</div>
				</div>
				<button class="btn btn-outline-dark btn-lg px-5 mt-4 mb-3 mx-3 "onClick={Filter} >Apply</button>
			</article>

</div> 

</aside>
<main class="col-md-9">

<div class="row">
<div className="container">

	<h3 className=' text-center  text-uppercase p-4'>Electronics Result</h3>

	<div className="row d-flex justify-content-center g-4">




		{
			electronic.length === 0? <h2 className=' text-warning'>Electronic not found</h2>:
				electronic.map((item) => {

					return (
						<div className=" col">
							<div className="card card-size text-light bg-dark"  >
					<img src={item.image1} class="card-img-top " alt="image" width={`300px`} height={`400px`}/> 
					<div className="card-body ">
						<div className="card-title mb-3">
						<h3>{item.name}</h3>
						</div>
						<div className="card-text mb-3">
						<p><i class="bi bi-currency-dollar">{item.price}</i></p>
						</div>
						
							<button className="btn btn-outline-secondary btn-md text-light"><Link class ="nav-link"  to ={"/electronic/" + item.id} key={item.id}>See more</Link></button>
							<button className="btn btn-danger btn-md text-light mx-2"><i class="bi bi-heart"></i></button>
						
					</div>
					</div>

							
							</div>
					)

				
			})
		}

		</div>

	
	
  
	</div>

	</div> 

	</main>
	</div>
</div>


    </>

  )
}
