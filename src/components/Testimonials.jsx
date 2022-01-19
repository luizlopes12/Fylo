import React from "react";
import TestimonialsCards from "./shared/TestimonialsCards";
function Testimonials() {
  return (
    <div className="testimonials container-fluid bg d-flex flex-column justify-content-center pt-5">
      <img src={require("../img/bg-quotes.png")} className="quotes" alt="Quotes image" />
      <div className="row">
        <div className="col">
          <TestimonialsCards 
          text='Fylo has improved our team productivity by an order of magnitude. 
          Since making the switch our team has become a well-oiled collaboration machine.'

          image={require('../img/profile-1.jpg')}

          name='Satish Patel'
          
          bio='Founder & CEO, Huddle'
          
          />
        </div>
        <div className="col">
          <TestimonialsCards 
          text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.'

          image={require('../img/profile-2.jpg')}

          name='Bruce McKenzie'
          
          bio='Founder & CEO, Huddle'
          
          />
        </div>
        <div className="col">
          <TestimonialsCards 
          text='Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
          become a well-oiled collaboration machine.'

          image={require('../img/profile-3.jpg')}

          name='Iva Boyd'
          
          bio='Founder & CEO, Huddle'
          
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
