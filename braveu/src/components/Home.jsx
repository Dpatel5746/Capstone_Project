import React from 'react';

import './../CSS/home.css';

import { Carousel } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
// import { BsStarHalf } from "react-icons/bs";

// import image_1 from './../assets/Images/carousel_image_1.jpg';
// import { Link, NavLink } from 'react-router-dom';

const Home = () => {

    return (
        <div className="top_space bg_img">

            <main className="main_content bg_glass">

                {/* =============== carousel section start =============== */}

                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='Images/carousel_image_1.jpg'
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='Images/carousel_image_2.jpg'
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src='Images/carousel_image_7.jpg'
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                {/* =============== carousel section end =============== */}

                {/* =============== categories section start =============== */}
              

                <div className='cat_section'>
                    <h2 className='cat_head'>Categories</h2>
                    <ul class="cards">
                        <li>
                            <a href="/categories" class="card_1">
                            <img src="Images/categories_men_1.jpg" class="card__image" alt="" />
                            <div class="card__overlay">
                                <h3 class="card__description">Men</h3>
                            </div>
                            </a>      
                        </li>
                        <li>
                            <a href="/categories" class="card_1">
                            <img src="Images/categories_women_1.jpg" class="card__image" alt="" />
                            <div class="card__overlay">        
                                <h3 class="card__description">Women</h3>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="/categories" class="card_1">
                            <img src="Images/categories_kids_1.jpg" class="card__image" alt="" />
                            <div class="card__overlay">
                                <h3 class="card__description">Kids</h3>
                            </div>
                            </a>
                        </li>   
                    </ul>
                </div>

                {/* =============== categories section end =============== */}

                {/* =============== Featured Products section start =============== */}

                <div className='feat_section'>
                    <h2 className='feat_head'>Featured Products</h2>
                    <ul class="cards_2">
                        <li>
                            <a href="/detail" class="card_2">
                            <img src="Images/male/Brown.jpg" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Men</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarHalf className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>      
                        </li>
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/kids/ada_Clothing.jpg" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Men</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>      
                        </li>
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/female/skirt2.jfif" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Men</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>      
                        </li>
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/male/BlueShirt.jpg" class="card__image_2" alt="" />
                            <div class="card__overlay_2">        
                                <h5 class="card__description_2">Women</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/male/bottom.jpg" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Kids</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>
                        </li> 
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/kids/blue.jfif" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Kids</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>
                        </li>   
                    </ul>

                    <ul class="cards_2">
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/female/s2.jfif" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Men</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>      
                        </li>
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/kids/Gray.jfif" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Men</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>      
                        </li>
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/kids/Onepiece.jfif" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Men</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>      
                        </li>
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/female/Skirts.png" class="card__image_2" alt="" />
                            <div class="card__overlay_2">        
                                <h5 class="card__description_2">Women</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>
                        </li>
                        <li>
                            <a href="/categories" class="card_2">
                            <img src="Images/female/s1.jfif" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Kids</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>
                        </li>  
                        <li>
                            <a href="/detail" class="card_2">
                            <img src="Images/male/BlackPant.jpg" class="card__image_2" alt="" />
                            <div class="card__overlay_2">
                                <h5 class="card__description_2">Kids</h5>
                                <p className='f_cat_name'>Men</p>
                                <p className='home_prod_price'>$100</p>
                                <div className='str_group'>
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStarFill className='str_rat' />
                                    <BsStar className='str_rat' />
                                </div>
                            </div>
                            </a>
                        </li>   
                    </ul>
                </div>

                {/* =============== Featured Products section end =============== */}
                
                {/* =============== Top Brands section start =============== */}

                <div>
                    <div>

                    </div>
                </div>

                {/* =============== Top Brands section end =============== */}
                
                {/* =============== Testimonials section start =============== */}

                <div>
                    <div>

                    </div>
                </div>

                {/* =============== Testimonials section end =============== */}
                
                {/* =============== Newsletter section start =============== */}

                <div className="w_bg">
                    <div className='center nwsltr'>
                        <h2 className='n_head'>Stay in Touch</h2>
                        <p className='nwsltr_p'>
                            Subscribe to our newsletter so we can span you <br/>
                            with offers and discounts.
                        </p>
                        <form className='flex_r' method="POST">
                            <div class="mb-3">
                                {/* <label for="exampleInputEmail1" className="form-label">Email address</label> */}
                                <input type="email" name="email" className="n_inpt" placeholder='Enter your e-mail'/>
                            </div>
                            <button type="submit" class=" n_btn">Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* =============== Newsletter section end =============== */}
                

            </main>
            
        </div>
    );
}

export default Home;

