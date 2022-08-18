import React from 'react';

import './../CSS/navbar.css';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navibar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import brandLogo from './../assets/Images/logosize.png';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg shadow">
            <div className="container">
                <a className="navbar-brand logo_flx" href="/">
                    <img src={brandLogo} class="logo" alt="logo"/>
                    <h3>BraveU</h3>
                </a>
                <div className="collapse navbar d-flex" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" activeClassName="active_nav" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" activeClassName="active_nav" href="/about">About</a>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" activeClassName="active_nav" href="/categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categories
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/men">Men</a></li>
                        <li><a className="dropdown-item" href="/women">Women</a></li>
                        <li><a className="dropdown-item" href="/kids">Kids</a></li>
                        <li><a className="dropdown-item" href="/easywear">Easywear</a></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" activeClassName="active_nav" href="/contact">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" activeClassName="active_nav" href="/login">Login</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav> */}

            <header className='header flex_r'>
                <a className="flex_r" href="/">
                    <img src={brandLogo} class="logo" alt="logo"/>
                    <h3>BraveU</h3>
                </a>
                <nav>
                    <ul className="navigation flex_r">

                        {/* <div className='theme-toggle'>
                            <h4>Light Theme</h4>
                            <i className='fas fa-toggle-on'></i>
                        </div> */}
                        
                        <li>
                            <NavLink to="/" activeClassName="active_nav">Home</NavLink>
                        </li>

                        <NavDropdown title="Categories" className='react_nav_dropdown nav_anim' id="basic-nav-dropdown">
                            <NavDropdown.Item href="/categories" name="Men" value="Men">Men</NavDropdown.Item>
                            <NavDropdown.Item href="/categories" name="Women" value="Women">Women</NavDropdown.Item>
                            <NavDropdown.Item href="/categories" name="Kids" value="Kids">Kids</NavDropdown.Item>
                        </NavDropdown>

                        {/* <li className="dropdown">
                            <NavLink to="/categories" className="dropbtn" data-bs-toggle="dropdown" aria-expanded="false">Categories  <i class="fa fa-caret-down"></i></NavLink>
                            <ul className="dropdown-content flex_c">
                            <li><a href="/men">Men</a></li>
                            <li><a href="/women">Women</a></li>
                            <li><a href="/kids">Kids</a></li>
                            <li><a href="/easywear">Easywear</a></li>
                            </ul>
                        </li> */}
                        
                        <li>
                            <NavLink to="/about" activeClassName="active_nav">About</NavLink>
                        </li>
                        
                        <li>
                            <NavLink to="/contact" activeClassName="active_nav">Contact</NavLink>
                        </li>
                        
                        {props.auth?
                            <>
                                <li>
                                    <NavLink to="/login" activeClassName="active_nav">Login</NavLink>
                                </li>
                            </>
                                :
                            <>
                                <li>
                                    <NavLink to="/logout" activeClassName="active_nav">Logout</NavLink>
                                </li>
                            </>
                        }
                    </ul>
                </nav>
            </header>

        </div>
    );
}

export default Navbar;
