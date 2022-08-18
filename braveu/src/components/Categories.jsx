import React from 'react';

import './../CSS/categories.css';

// import { Link, NavLink } from 'react-router-dom'

import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";

const Categories = () => {

    // let colors = ["Black","Green","Red","Blue"]
    // const [setcolor] = useState();

    return (
        <div className="top_space bg_img">
            <div className="glass">
            {/* <h2>Categories Page</h2> */}

            {/* {colors.map(result=>(
                <div>
                    <label>
                        <input type="radio" value={result} name="radiovalues" onChange={(e)=>setcolor(e.target.value)} />
                        {result}
                    </label>
                </div>
            ))} */}
            
            {/* =============== Product Category section start =============== */}

            {/* <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/categories_men_1.jpg" class="abc" alt="" />
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
                        </li> */}

            <div className="w_bg">
                {/* <h2 className='fp_name'>Featured Products</h2> */}
                <div className='h_scroll'>
                <ul class="cards_cat">
                        <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/Brown.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/ada_Clothing.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/skirt2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/BlueShirt.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/bottom.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/blue.jfif" class="abc" alt="" />
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

                    <ul class="cards_cat">
                        <li>
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Gray.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Onepiece.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/Skirts.png" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s1.jfif" class="abc" alt="" />
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
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/BlackPant.jpg" class="abc" alt="" />
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
                    <ul class="cards_cat">
                        <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/Brown.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/ada_Clothing.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/skirt2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/BlueShirt.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/bottom.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/blue.jfif" class="abc" alt="" />
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

                    <ul class="cards_cat">
                        <li>
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Gray.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Onepiece.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/Skirts.png" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s1.jfif" class="abc" alt="" />
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
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/BlackPant.jpg" class="abc" alt="" />
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
                    <ul class="cards_cat">
                        <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/Brown.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/ada_Clothing.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/skirt2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/BlueShirt.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/bottom.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/blue.jfif" class="abc" alt="" />
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

                    <ul class="cards_cat">
                        <li>
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Gray.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Onepiece.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/Skirts.png" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s1.jfif" class="abc" alt="" />
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
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/BlackPant.jpg" class="abc" alt="" />
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
                    <ul class="cards_cat">
                        <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/Brown.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/ada_Clothing.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/skirt2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/BlueShirt.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/bottom.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/blue.jfif" class="abc" alt="" />
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

                    <ul class="cards_cat">
                        <li>
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Gray.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Onepiece.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/Skirts.png" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s1.jfif" class="abc" alt="" />
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
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/BlackPant.jpg" class="abc" alt="" />
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
                    <ul class="cards_cat">
                        <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/Brown.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/ada_Clothing.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/skirt2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/BlueShirt.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/bottom.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/blue.jfif" class="abc" alt="" />
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

                    <ul class="cards_cat">
                        <li>
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Gray.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Onepiece.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/Skirts.png" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s1.jfif" class="abc" alt="" />
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
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/BlackPant.jpg" class="abc" alt="" />
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
                    <ul class="cards_cat">
                        <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/Brown.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/ada_Clothing.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/skirt2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/BlueShirt.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/bottom.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/blue.jfif" class="abc" alt="" />
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

                    <ul class="cards_cat">
                        <li>
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Gray.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Onepiece.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/Skirts.png" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s1.jfif" class="abc" alt="" />
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
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/BlackPant.jpg" class="abc" alt="" />
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
                    <ul class="cards_cat">
                        <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/Brown.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/ada_Clothing.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/skirt2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/BlueShirt.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/bottom.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/blue.jfif" class="abc" alt="" />
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

                    <ul class="cards_cat">
                        <li>
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Gray.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Onepiece.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/Skirts.png" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s1.jfif" class="abc" alt="" />
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
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/BlackPant.jpg" class="abc" alt="" />
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
                    <ul class="cards_cat">
                        <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/Brown.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/ada_Clothing.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/skirt2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/BlueShirt.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/bottom.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/blue.jfif" class="abc" alt="" />
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

                    <ul class="cards_cat">
                        <li>
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Gray.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Onepiece.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/Skirts.png" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s1.jfif" class="abc" alt="" />
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
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/BlackPant.jpg" class="abc" alt="" />
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
                    <ul class="cards_cat">
                        <li>
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/Brown.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/ada_Clothing.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/skirt2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/BlueShirt.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/male/bottom.jpg" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/blue.jfif" class="abc" alt="" />
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

                    <ul class="cards_cat">
                        <li>
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s2.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Gray.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/kids/Onepiece.jfif" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/Skirts.png" class="abc" alt="" />
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
                            <a href="/categories" class="card_cat">
                            <img src="Images/female/s1.jfif" class="abc" alt="" />
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
                            <a href="/detail" class="card_cat">
                            <img src="Images/male/BlackPant.jpg" class="abc" alt="" />
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
            </div>


            {/* =============== Product Category section end =============== */}
            
            {/* =============== Latest Posts section start =============== */}



            {/* =============== Latest Posts section end =============== */}
                
            </div>
        </div>
    );
}

export default Categories;
    