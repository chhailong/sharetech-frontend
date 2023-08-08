import React from 'react';
import '../css/home.css' ; 
import Card from './Card';
import { useState , useEffect } from 'react';
import {Link} from 'react-router-dom' ;
import axios from 'axios' ;

export default function Recommend() {

	const [electronic ,setElectronic] = React.useState([]);
	const [loading , setLoading] = React.useState(true);
	const [name , setName] = React.useState('') ;
	const [major , setMajor] = React.useState('') ;
	const [price , setPrice] = React.useState('') ;

 
   console.log(name , major , price)

	const Filter = async () => {
		const data = {name , major , price} ;
		const response = await fetch(`http://localhost:8000/api/electronic/filtering?name=${name}&major=${major}&price=${price}`);

		const result = await response.json();
		setElectronic(result);

		setLoading(false);
		console.log(result);
		if(!result){
			return <h1>Not Found</h1>
		}
		
	}

	useEffect(()=>{
		Filter();
	}, [price , major , name] )


  return (
    <>
	<div class="container">
	<div class="row">
	<aside class="col-md-3 p-4">
		
	<div class="card">
	<article class="filter-group">
		<header class="card-header">
			<h6 className=' text-uppercase'>Electronic Name</h6>
			{/* <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title text-uppercase text-success">Product Name</h6>
			</a> */}
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
				{/* <input type="range" class="custom-range"  name=""/> */}
				<div class="form-row">
				<div class="form-group col-md-6">
				  <label></label>
				  <input class="form-control " value = {price} onChange={(e)=>setPrice(e.target.value)}  placeholder="$0" type="number"/>
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
		{/* <button class="btn btn-outline-dark btn-lg px-5 mt-4"onClick={Filter} >Apply</button> */}
	</article>


	
</div> 

</aside>
<main class="col-md-9">

<div class="row">
<div className="container">

	<h3 className=' text-center  text-uppercase p-4'>Electronics Result</h3>


<div className="row d-flex flex-md-wrap  g-3">
  {
	electronic.map((item) => {
	  return (
		<div className=" col-md-4">
			<Link className='nav-link' to ={"/electronic/" + item.id} key={item.id}>
			  <Card className = ""  key={item.id} image1 = {item.image1}   name= {item.name} price= {item.price} ></Card>
			</Link> 
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
