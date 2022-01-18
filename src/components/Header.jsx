import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/style.css'
function Header() {
    return (
        <header className='header container mt-sm-5 mt-3'>
            <div className="row d-flex justify-content-between">
            <div className="logo col-sm-2 col-4 p-2 text-start">
                <img src={require('../img/logo.svg').default} alt='logo do site' className='img-fluid'/>
            </div>
            <nav className="navbar col-sm-4 col-8 d-flex justify-content-end">
                <ul className='nav raleway'>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Team</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Sign In</a>
                    </li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header
