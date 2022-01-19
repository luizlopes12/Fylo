import React from 'react'
import Benefits from './Benefits'
import {Route, BrowserRouter as Router, Routes, Link} from "react-router-dom";
import '../styles/bootstrap.min.css'
import '../styles/style.css'
function Header() {
    return (
        <header className='header container mt-sm-5 mt-3'>
            <div className="row d-flex justify-content-between">
            <div className="logo col-sm-2 col-4 p-2 text-start">
                <img src={require('../img/logo.svg').default} alt='Fylo logo' className='img-fluid'/>
            </div>
            <Router>
            <nav className="navbar col-sm-4 col-8 d-flex justify-content-end">
                <ul className='nav raleway'>
                    <li className="nav-item">
                        <Link to='/' className="nav-link" title='illustrative'>Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-link" title='illustrative'>Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-link" title='illustrative'>Sign In</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
            {/* <Route path="/features" element={<Benefits />}></Route> */}
            </Routes>
            </Router>

            </div>
        </header>
    )
}
/*
    <Router>
    <div className="navbar">
    <Link to='/'>Home</Link>
    <Link to='/pag2'>Sobre</Link>
    <Link to='/pag3'>Produtos</Link>
    </div>
    <Routes>
    <Route path="/" element={<Pag1 />}></Route>
    <Route path="/pag2" element={<Pag2 />}></Route>
    <Route path="/pag3" element={<Pag3 />}></Route>
    </Routes>
    </Router>

*/
export default Header
