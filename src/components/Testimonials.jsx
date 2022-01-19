import React, { Fragment } from "react";
import TestimonialsCards from "./shared/TestimonialsCards";
function Testimonials() {
  return (
    <div className="container-fluid bg d-flex flex-column justify-content-center pt-5">
      <img src={require("../img/bg-quotes.png")} className="quotes" alt="Quotes image" />
      <div className="row d-flex justify-content-center mx-auto">
        <div className="col">
          <TestimonialsCards 
          text=''
          image='../img/profile-1.jpg'
          name=''
          bio=''
          />
        </div>
        <div className="col">
        <TestimonialsCards 
          text=''
          image='../img/profile-2.jpg'
          name=''
          bio=''
          />
        </div>
        <div className="col">
        <TestimonialsCards 
          text=''
          image='../img/profile-3.jpg'
          name=''
          bio=''
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
