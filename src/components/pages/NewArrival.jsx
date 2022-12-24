import React from 'react';
import image from '../../images/comming-soon.png'

function NewArrival() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='d-flex justify-content-center align-items-center mx-auto'>
          <img className='coming-img' src={image} alt="coming soon" />
        </div>
      </div>
    </div>
  )
}

export default NewArrival
