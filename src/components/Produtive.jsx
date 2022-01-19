import React from 'react';
import '../styles/bootstrap.min.css'
import '../styles/style.css'
function Produtive() {
  return(
      <section className='produtive bg d-flex justify-content-center pt-5 pb-5'>
          <div className="produtive-items row container-fluid px-0">
          <div className="produtive-img col text-end">
              <img className='img-fluid' src={require('../img/illustration-stay-productive.png')} alt="Stay produtive image" />
          </div>
          <div className="produtive-texts col-sm-6 col-12text-start d-flex flex-column justify-content-center">
            <h4 className='raleway'>Stay productive, wherever you are</h4>
            <p>Never let location be an issue when accessing your files. 
                  Fylo has you covered for all of your file storage needs.
            </p>
            <p>Securely share files and folders with friends, 
                family and colleagues for live collaboration. 
                No email attachments required.
            </p>
            <div className="produtive-link d-inline">
            <a href="#">See how Fylo works <img src={require('../img/icon-arrow.svg').default} alt="Arrow link image"/></a>
            </div>
          </div>
          </div>
      </section>
  );
}

export default Produtive;
