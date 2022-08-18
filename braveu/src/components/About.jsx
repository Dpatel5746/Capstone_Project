import React from 'react';

import './../CSS/about.css';

// import { Link, NavLink } from 'react-router-dom'

import image_1 from './../assets/Images/abtheader.jpg';
// import image_2 from './../assets/Images/abtimg.jpg';
import image_purvi from './../assets/Images/purvi.png';
import image_dhruva from './../assets/Images/Dhruva.jpg';
import image_roshan from './../assets/Images/roshan.png';
import image_sushma from './../assets/Images/sushma.png';


const About = () => {
    return (
        <div className="top_space bg_img">
            <div className="glass">
            
            {/* =============== About Us section start =============== */}

            <section class="headerrow">
                {/* <NavLink to="/">hello world</NavLink> */}
                <div class="headercolumn">
                    <h2 className='abt_head'>Who we are?</h2>
                    <p>BraveU is a fashion e-commerce website for adaptive and inclusive clothing. </p>
                    <p>BraveU is a fashion e-commerce website for adaptive and inclusive clothing which provides easywear products for people with disabilities.<br/>
                        Keeping community’s needs in mind, Our team has created this website. <br/>
                        Website's clothing line was created to add a sense of ease to everyday dressing with soft layering and draping.
                        BraveU's apparel collection includes a cardigan, knit jacket, tees and tunics, a dress, pants and jeggings in both standing and seated fits.</p>

                </div>
                <div class="headercolumn">
                <img src={image_1} alt="Girl in adaptive jeans" class="abtheaderimg"/>
                </div>
            </section>

            {/* =============== About Us section end =============== */}
            
            {/* =============== Our Team section start =============== */}

            <section className="bg_w">
                {/* <div class="categories"> */}
                    <h2 className='our_team_head'>Our Team</h2>
                {/* </div> */}
                <div class="row row-cols-1 row-cols-md-4 m-5 g-3 abt_cards">
                    <div class="col">
                    <div class="card">
                        <img src={image_roshan} class="card-img-top" alt="Roshan Patel - CEO & Founder"  />
                        <div class="card-body">
                        <h5 class="card-title">Roshan Patel</h5>
                        <p class="title">CEO & Founder</p>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p>roshan@example.com</p></div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                        <img src={image_dhruva} class="card-img-top" alt="Dhruva Patel - Designer"/>
                        <div class="card-body glass">
                        <h5 class="card-title">Dhruva Patel</h5> 
                        <p class="title">Designer</p>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p>dhruva@example.com</p>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                        <img src={image_sushma} class="card-img-top" alt="Sushma Gujjula - Art Director"  />
                        <div class="card-body">
                        <h5 class="card-title">Sushma Gujjula</h5>
                        <p class="title">Art Director</p>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p>sushma@example.com</p></div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card">
                        <img src={image_purvi} class="card-img-top" alt="Purvi Patel - Designer" />
                        <div class="card-body">
                        <h5 class="card-title">Purvi Patel</h5> 
                        <p class="title">Designer</p>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                        <p>purvi@example.com</p></div>
                    </div>
                    </div>
                </div>
            </section>

            {/* =============== Our Team section end =============== */}
                
            </div>

            <div className='absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-mltiply filter blur-xl opacity-70'></div>
            <div className='absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-mltiply filter blur-xl opacity-70'></div>
            <div className='absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-mltiply filter blur-xl opacity-70'></div>

        </div>
    );
}

export default About;
    