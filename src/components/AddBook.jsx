import React from 'react'
import Navbar from './Navbar'

const AddBook = () => {
  return (
    <div>

      <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

          <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                <label htmlFor="" className="form-label">BookTitle</label>
                <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                 <label htmlFor="" className="form-label">Category</label>
                 <select name="" id="" className="form-control">
                    <option value="Fiction">Fiction</option>
                    <option value="Horrror">Horror</option>
                    <option value="Comedy">Comedy</option>
                    <option value="FairyTale">FairyTale</option>
                 </select>

            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                  <label htmlFor="" className="form-label">Published Year</label>
                 <input type="date" name="" id="" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                    <label htmlFor="" className="form-label">Author name</label>
                     <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                  <label htmlFor="" className="form-label">Book description</label>
                    <textarea name="" id="" className="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                  <label htmlFor="" className="form-label">Distributor Name</label>
                <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
               <label htmlFor="" className="form-label">Publisher Name</label>
               <input type="text" className="form-control" />

            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">Price</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <label htmlFor="" className="form-label">Edition</label>
            </div>
            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                <button className="btn btn-success">Submit</button>
            </div>
          </div>


            </div>
        </div>
      </div>
    </div>
  )
}

export default AddBook
