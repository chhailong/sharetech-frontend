import React from 'react';
import '../css/home.css' ; 
import Card from './Card';

export default function Recommend() {
  return (
    <>

<div class="container">
	<div class="row">
	<aside class="col-md-3">
		
<div class="card">
	<article class="filter-group">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title text-uppercase text-success">Product Name</h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse_1" >
			<div class="card-body">
				<form class="pb-3">
				<div class="input-group">
				  <input type="text" class="form-control" placeholder="Search"/>
				  <div class="input-group-append">
				    <button class="btn btn-light" type="button"><i class="fa fa-search"></i></button>
				  </div>
				</div>
				</form>
				
				{/* <ul class="list-menu">
				<li><a href="#">People  </a></li>
				<li><a href="#">Watches </a></li>
				<li><a href="#">Cinema  </a></li>
				<li><a href="#">Clothes  </a></li>
				<li><a href="#">Home items </a></li>
				<li><a href="#">Animals</a></li>
				<li><a href="#">People </a></li>
				</ul> */}

			</div> 
		</div>
	</article> 
	<article class="filter-group">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title">Brands </h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse_2">
			<div class="card-body">
				<label class="  custom-control custom-checkbox ">
				  <input type="checkbox" checked="" class="custom-control-input"/>
				  <div class="custom-control-label">IT  
				  	{/* <b class="badge badge-pill badge-light float-right">120</b> */}
					  </div>
				</label>
				<label class="custom-control custom-checkbox">
				  <input type="checkbox" checked="" class="custom-control-input"/>
				  <div class="custom-control-label">Accounting 
				  	{/* <b class="badge badge-pill badge-light float-right">15</b>  */}
					 </div>
				</label>
				<label class="custom-control custom-checkbox">
				  <input type="checkbox" checked="" class="custom-control-input"/>
				  <div class="custom-control-label">Architecture 
				  	{/* <b class="badge badge-pill badge-light float-right">35</b>  */}
					</div>
				</label>
				<label class="custom-control custom-checkbox">
				  <input type="checkbox" checked="" class="custom-control-input"/>
				  <div class="custom-control-label">Graphic Design
				  	{/* <b class="badge badge-pill badge-light float-right">89</b>  */}
					</div>
				</label>
				<label class="custom-control custom-checkbox">
				  <input type="checkbox" class="custom-control-input"/>
				  <div class="custom-control-label">Gamer 
				  	{/* <b class="badge badge-pill badge-light float-right">30</b>  */}
					 </div>
				</label>
	</div>
		</div>
	</article>
	<article class="filter-group">
		<header class="card-header">
			<a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true" class="">
				<i class="icon-control fa fa-chevron-down"></i>
				<h6 class="title">Price range </h6>
			</a>
		</header>
		<div class="filter-content collapse show" id="collapse_3" >
			<div class="card-body">
				<input type="range" class="custom-range" min="0" max="100" name=""/>
				<div class="form-row">
				<div class="form-group col-md-6">
				  <label>Min</label>
				  <input class="form-control" placeholder="$0" type="number"/>
				</div>
				<div class="form-group text-right col-md-6">
				  <label>Max</label>
				  <input class="form-control" placeholder="$1,0000" type="number"/>
				</div>
				</div> 
				<button class="btn btn-block btn-danger btn-lg m-3">Apply</button>
			</div>
		</div>
	</article>

	
</div> 

	</aside>
<main class="col-md-9">


<div class="row">
	<div class="col-md-4 g-4">
    <Card />

	</div> 
  <div class="col-md-4 g-4">
    <Card />

	</div> 
  <div class="col-md-4 g-4">
    <Card/>

	</div> 
</div> 

	</main>
	</div>
</div>


    </>

  )
}
