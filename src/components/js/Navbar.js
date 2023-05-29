import React from 'react'

export default function () {
  return (
    <>
          <div className=" navbar navbar-expand-md py-3 bg-dark navbar-dark fixed-top">
        <div className="container">
            <a className="navbar-brand fw-bold" href="#">ShareTech</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse flex-row justify-content-end" id="nav">
                <form class="d-flex  w-50 " role="search">
                <input class="form-control me-2 rounded-pill " type="search" placeholder="Search" aria-label="Search"/>
         
                </form>

                <ui className=" navbar-nav">
                    <li className='nav-item'>
                        <a href="#" className='nav-link '>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link '>Review</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#" className='nav-link '>Recommand</a>
                    </li>

                    <li className='nav-item'>
                        <a href="#" className='nav-link'>Contact</a>
                    </li>

                </ui>
                
            </div>
        </div>
        </div>

    </>


  )
}
