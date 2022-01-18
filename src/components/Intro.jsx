import React from 'react'
import Button from './shared/Button'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
function Intro() {
    return (
        <section>
            <article  className='intro mt-5 pb-0'>
            <div className="intro-contents mx-auto d-flex align-items-center flex-column">
                <div className="intro-img d-flex justify-content-center">
                    <img src={require("../img/illustration-intro.png")} alt="Intro image"/>
                </div>
                <div className="intro-texts mt-5 mb-sm-4">
                    <h1 className='text-center fw-bolder raleway'>
                        All your files in one secure location, accessible anywhere.
                    </h1>
                </div>
            </div>
            </article>
            <article className='intro-sub d-flex align-items-center flex-column'>
            <div className="intro-texts mb-3">
                <p className='text-center'>
                        Fylo stores all your most important files in one secure location. 
                        Access them wherever you need, share and collaborate with friends family, and co-workers.
                        </p>
                </div>
                <Button text='Get Started'/>
            </article>

        </section>
    )
}

export default Intro
