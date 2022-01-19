import React, {Fragment} from 'react'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
function Benefits() {
    return (
        <Fragment>
            <section className="container-fluid bg">
                <div className="container">
                    <div className="card-group row d-flex justify-content-around pt-5">
                        <div className="cards col-sm-5 col-12 mt-sm-5 mt-5 pt-5 pt-sm-1 text-center">
                                <img src={require('../img/icon-access-anywhere.svg').default} alt='Access anywhere image'/>
                                <div className="card-texts text-center">
                                    <h4>Access your files, anywhere</h4>
                                    <p>The ability to use a smartphone, 
                                    tablet, or computer to access your account means your 
                                    files follow you everywhere.</p>
                                </div>
                        </div>
                        <div className="cards col-sm-5 col-12 mt-sm-5 mt-5 pt-5 pt-sm-1 text-center">
                                <img src={require('../img/icon-security.svg').default} alt='Access anywhere image'/>
                                <div className="card-texts text-center">
                                    <h4>Security you can trust</h4>
                                    <p>2-factor authentication and 
                                    user-controlled encryption are just a couple of the security 
                                    features we allow to help secure your files.</p>
                                </div>
                        </div>
                        <div className="cards col-sm-5 col-12 mt-sm-5 mt-5 pt-5 pt-sm-1 text-center">
                                <img src={require('../img/icon-collaboration.svg').default} alt='Access anywhere image'/>
                                <div className="card-texts text-center">
                                    <h4>Real-time collaboration</h4>
                                    <p>Securely share files and folders with friends, 
                                    family and colleagues for live collaboration. No email attachments required.</p>
                                </div>
                        </div>
                        <div className="cards col-sm-5 col-12 mt-sm-5 mt-5 pt-5 pt-sm-1 text-center">
                                <img src={require('../img/icon-any-file.svg').default} alt='Access anywhere image'/>
                                <div className="card-texts text-center">
                                    <h4>Store any type of file</h4>
                                    <p>Whether you're sharing holidays photos or work documents, 
                                    Fylo has you covered allowing for all file types to be securely stored and shared.</p>
                                </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Benefits
