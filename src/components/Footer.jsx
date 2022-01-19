import React from 'react';

function Footer() {
  return (
      <div className="footer container-fluid bg-footer pb-5">
          <div className="container-md ">
                <div className="row mx-auto">
                    <div className="col">
                    <img src={require('../img/logo.svg').default} alt="Site logo image" />
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-3 col-12">
                        <div className="row">
                            <div className="col-1">
                            <img src={require('../img/icon-location.svg').default} alt="Locate icon" />
                            </div>
                            <div className="col fs-6">
                            Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. 
                            Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. 
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-12 section">
                        <div className="row">
                            <div className="col-1">
                                <img src={require('../img/icon-phone.svg').default} alt="Phone icon" />
                            </div>
                            <div className="col">
                            +1-543-123-4567
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                            <img src={require('../img/icon-email.svg').default} alt="Phone icon" />
                            </div>
                            <div className="col">
                            example@fylo.com
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 col-12 section">
                        <p>About Us</p>
                        <p>Jobs</p>
                        <p>Press</p>
                        <p>Blog</p>
                    </div>
                    <div className="col-sm-2 col-12 section">
                        <p>Contact Us</p>
                        <p>Terms</p>
                        <p>Privacy</p>
                    </div>
                    <div className="col-sm-2 col-12 text-center section">
                        <p className='footer-socials'>
                        <img src={require('../img/icon-facebook.png')} alt="Phone icon" />
                        <img src={require('../img/icon-twitter.png')} alt="Phone icon" />
                        <img src={require('../img/icon-instagram.png')} alt="Phone icon" />
                        </p>
                    </div>
                </div>
                <p className='text-center eu mt-5'>Developed with ❤️ by <a href='https://github.com/luizlopes12' title='My github'target='_blank'>Luizlopes12</a></p>
          </div>
      </div>
  );
}

export default Footer;
