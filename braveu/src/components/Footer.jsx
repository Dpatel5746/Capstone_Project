import React from 'react';

import './../CSS/footer.css';

import brandLogo from './../assets/Images/logosize1.png';

// import { FaAngleRight } from "react-icons/fa";
// import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="footer_main">
                <div className="footer">

                    <div className="brand_name flex_r mb-4">
                        <a className="b_name_a flex_r" href="/">
                            <img src={brandLogo} class="ftr_logo logo" alt="logo"/>
                            <h2>
                                BraveU
                            </h2>
                        </a>
                    </div>

                    <div className="f_sections">
                        <div className="f_Summary">
                            {/* <h4>
                                About Summary
                            </h4>
                            <p className="f_about">
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum 
                            </p> */}

                            <h4>
                                About Summary
                            </h4>
                            <p className="f_about">
                                BraveU is a fashion website where persons with special needs may express themselves through fashion. There are several fashion websites, but we are here to convey the demands of a certain community with extra ease.
                            </p>

                            {/* <h4>
                                Ahmedabad
                            </h4>
                            <p className="f_about">
                                Address: 103, JBR Arcade, Science
                                City Road Sola, Ahmedabad-380060,
                                Gujarat, India
                                Phone Number: +11234567890
                                Email: braveu@gmail.com
                            </p>
                            <h4>
                                Mumbai
                            </h4>
                            <p className="f_about">
                                Address: B-105, Twin Arcade, Off
                                Military Road, Andheri East, Mumbai-
                                400059, Maharashtra, India
                                Phone Number: +11234567890
                                Email: braveu@gmail.com
                            </p> */}

                        </div>

                        <div className="f_nav">
                            <h4>
                                Quick Links
                            </h4>
                            <div className="quick_links">
                                <a href="/"><i className="fa fa-angle-right"></i>  Home</a>
                                <a href="/about"><i className="fa fa-angle-right"></i>  About</a>
                                <a href="/categories"><i className="fa fa-angle-right"></i>  Categories</a>
                                <a href="/contact"><i className="fa fa-angle-right"></i>  Contact</a>
                            </div>
                        </div>

                        <div className="f_social">
                            <h4>
                                Socia Media
                            </h4>
                            <div className="social_links">
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook-f f_social_icon facebook"></i></a>
                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin f_social_icon linkedin"></i></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram f_social_icon instagram"></i></a>
                                <a href="https://www.twitter.com/" target="_blank" rel="noreferrer"><i className="fa fa-twitter f_social_icon twitter"></i></a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="copy_right">
                    <small> Copyright &copy; BraveU 2022. All Rights Reserved. Terms &#38; Condition.</small>
                </div>
            </div>
            

        </div>
    );
}

export default Footer;
    