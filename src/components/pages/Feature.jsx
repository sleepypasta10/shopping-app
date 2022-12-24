import React from 'react';


function Feature() {
  return (
    <div className='row w-100 align-items-center'>
      <div className='col-lg-8'>
        <img
          src={"https://img.freepik.com/free-photo/view-make-up-products-arrangement_23-2149096661.jpg?w=740&t=st=1671617154~exp=1671617754~hmac=a7a14aeb6bdd45cf8140646e53194e74dfb6074cda77d5e857f4915e3b36565d"}
          alt="image"
          style={{ width: "870px", height: "581px" }}
           />
      </div>
      <div className='col-lg-4 bg-custom d-flex align-items-center p-4'>
        <div className='align-items-center'>
          <div className='mb-4'>
            <h1 className='fw-bolder text-uppercase'>Welcome</h1>
            <h1 className='fw-bolder text-uppercase'>To</h1>
            <h1 className='fw-bolder text-uppercase'>Beauty.ID</h1>
          </div>
          <div>
            <div className='pb-2'>
              <p>We offer worldwide shipping</p>
              <span>and free gifts for all other</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



export default Feature
