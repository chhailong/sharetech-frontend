import React from 'react'

export default function PostElectronic() {
  return (
    <>

    <div className="container">
    <main class="mb-4 mt-5">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-md-10 col-lg-8 col-xl-7">
                        <h2 className='text-uppercase text-danger'>Electronic Post </h2>
                    <div class="my-5">
                        <form action="" method="POST"  enctype="multipart/form-data">
                
                             <div class="form-floating mb-2">
                                <input class="form-control" name="name" type="text" placeholder=" " required/>
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
                                <select class="form-select"  name ="category_id" aria-label=" select ">
                                    <option value="1">Laptop</option>
                                    <option value="2">Accessories</option>
                             
                                </select>
    
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" name="laptop_id" type="number" placeholder=" " required/>
                                <label for="laptop_id">Laptop_id</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input class="form-control" name="accessories_id" type="number" placeholder=" " required/>
                                <label for="accessories_id">Accessories_id</label>
                            </div>
                            <div class="form-floating mb-2 ">
                                <textarea class="form-control h-50" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Description</label>
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
