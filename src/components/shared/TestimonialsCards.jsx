import React from 'react';
import '../../styles/bootstrap.min.css'
import '../../styles/style.css'
function TestimonialsCards({name, bio, image, text}) {
  return <div className='testimonials-card d-flex flex-column mt-3 mb-3'>
      <div>{text}</div>
      <div className='testimonials-user-profile mt-3 row'>
          <div className="col-3 h-2 d-flex justify-content-end">
            <img src={image} alt="User profile image" />
          </div>
          <div className="col">
              <span className='raleway fw-bold'>{name}</span> 
              <p className='mb-0'>{bio}</p>
            </div>          
      </div>

  </div>;
}

export default TestimonialsCards;
