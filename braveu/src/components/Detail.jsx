import React from 'react';

import './../CSS/detail.css';

import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
// import { Button } from 'bootstrap';

import { useNavigate } from 'react-router-dom';

const Detail = () => {

	const history = useNavigate()

    const handleSubmit = async () => {
        
        window.alert("Thank You for Purchasing!");
		history('/');
            
    }

    return (

        <div className="top_space bg_img">

            <main className="main_content bg_glass">

                {/* =============== Prod Detail section start =============== */}

                    <div className='w_bg'>
                        <div className='flex_r det_1_flex'>
                            <div className='f_1'>
                                <img src="Images/male/Brown.jpg" class="prod_det_img" alt="" />
                            </div>
                            <div className='f_2'>
                                <div className='prod_det'>
                                    <h3>Brown Pant</h3>
                                    <div className='str_group_detail'>
                                        <BsStarFill className='str_rat_detail' />
                                        <BsStarFill className='str_rat_detail' />
                                        <BsStarFill className='str_rat_detail' />
                                        <BsStarHalf className='str_rat_detail' />
                                        <BsStar className='str_rat_detail' />
                                    </div>
                                    <strong><h4>$100</h4></strong>
									<hr/>
									<p>Mens Adaptive brown pants Straight Adjustable waist with magnet Buttons. These are super confortable pants to pair it as a Formal Outfit.</p>
									<p>Color: Brown</p>
									<p>Fabric Type: Cotton</p>
									<p>Top: 65% Polyester - 35% Cotton</p>
									<p>Pants: 65% Polyester - 30% Cotton - 5% Spandex</p>
									<p>Waist: 34</p>
									<p>Strategically Placed Closures - Dome Closures at Neck Helps Prevent Disrobing</p>
									<p>Easy Assisted Dressing - Designed to Facilitate Assisted Dressing and Assisted Undressing</p>
									<p>Feature: Velcro</p>
									<form onSubmit={handleSubmit} method='POST'>
										<button className="btn btn-success">Purchase</button>
									</form>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* =============== Prod Detail section end =============== */}

                {/* <div class="pd-wrap">
		<div class="container">
	        <div class="heading-section">
	            <h2>Product Details</h2>
	        </div>
	        <div class="row">
	        	<div class="col-md-6">
	        		<div id="slider" class="owl-carousel product-slider">
						<div class="item">
						  	<img src="Images/image7.jpeg"alt='img' />
						</div>
						<div class="item">
						  	<img src="Images/image8.jpg" alt='img'/>
						</div>
						<div class="item">
                            <img src="Images/image7.jpeg" alt='img' />
						</div>
						<div class="item">
                            <img src="Images/image8.jpg" alt='img'/>
						</div>
						<div class="item">
                            <img src="Images/image7.jpeg"alt='img' />
						</div>
						<div class="item">
                            <img src="Images/image8.jpg" alt='img'/>
						</div>
						<div class="item">
                            <img src="Images/image7.jpeg"alt='img' />
						</div>
					</div>
					<div id="thumb" class="owl-carousel product-thumb">
						<div class="item">
                            <img src="Images/image7.jpeg" alt='img' />
						</div>
						<div class="item">
                            <img src="Images/image8.jpg" alt='img'/>
						</div>
						<div class="item">
                            <img src="Images/image7.jpeg"alt='img' />
						</div>
						<div class="item">
                            <img src="Images/image8.jpg" alt='img'/>
						</div>
						<div class="item">
                            <img src="Images/image7.jpeg"alt='img' />
						</div>
						<div class="item">
                            <img src="Images/image8.jpg" alt='img'/>
						</div>
						<div class="item">
                            <img src="Images/image7.jpg" alt='img'/>
						</div>
					</div>
	        	</div>
	        	<div class="col-md-6">
	        		<div class="product-dtl">
        				<div class="product-info">
		        			<div class="product-name">Pants with velcro and side zipper
							</div>
		        			<div class="reviews-counter">
								<div class="rate">
								    <input type="radio" id="star5" name="rate" value="5" checked />
								    <label for="star5" title="text">5 stars</label>
								    <input type="radio" id="star4" name="rate" value="4" checked />
								    <label for="star4" title="text">4 stars</label>
								    <input type="radio" id="star3" name="rate" value="3" checked />
								    <label for="star3" title="text">3 stars</label>
								    <input type="radio" id="star2" name="rate" value="2" />
								    <label for="star2" title="text">2 stars</label>
								    <input type="radio" id="star1" name="rate" value="1" />
								    <label for="star1" title="text">1 star</label>
								  </div>
								<span>3 Reviews</span>
							</div>
		        			<div class="product-price-discount">
								<span>$29.00</span>
								<span class="line-through">$39.00</span>
							</div>
		        		</div>
	        			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	        			
                        <div class="col-md-6">
	        					<label for="size">Size</label>
								<select id="size" name="size" class="form-control">
									<option>S</option>
									<option>M</option>
									<option>L</option>
									<option>XL</option>
								</select>
	        				</div>
							<div class="product-size">
                                <h6>Size</h6> 
								<label class="radio"> 
									<input type="radio" name="size" value="S" checked /> 
									<span>S</span> 
								</label> 
								<label class="radio"> 
									<input type="radio" name="size" value="M" /> 
									<span>M</span> 
								</label> 
								<label class="radio"> 
									<input type="radio" name="size" value="L" /> 
									<span>L</span> 
								</label> 
								<label class="radio"> 
									<input type="radio" name="size" value="XL" /> 
									<span>XL</span> 
								</label> 
								<label class="radio"> 
									<input type="radio" name="size" value="XXL" /> 
									<span>XXL</span> 
								</label>
                            </div>
							<div class="product-color">
                                <h6>Available Colors</h6> 
								<label class="radioc" id="khakhi"> 
									<input type="radioc" name="color" value="Khakhi" checked /> 

								</label> 
								<span>Khakhi</span>
								<label class="radioc" id="Black"> 
									<input type="radioc" name="color" value="Black" /> 
									
								</label> 
								<span>Black</span> 
								<label class="radioc" id="cream"> 
									<input type="radioc" name="color" value="Cream" /> 
									
								</label> 
								<span>Cream</span> 
								<label class="radioc" id="blue"> 
									<input type="radioc" name="color" value="Blue" /> 
									 
								</label> 
								<span>Navy Blue</span>
                            </div>


                             <span class="blue_clr"></span> 
	        				 <div class="col-md-6">
	        					<label for="color">Color</label>
								<select id="color" name="color" class="form-control">
									<option><span class="blue_clr"></span>Blue</option>
									<option>Green</option>
									<option>Red</option>
								</select>
	        				</div> 
							 <div class="d-flex align-items-center justify-content-center colors my-2"> 
								<div class="btn-group" data-toggle="buttons" data-tooltip="tooltip" data-placement="right" title="choose color"> 
									<label class="btn btn-red form-check-label"> 
										<input class="form-check-input" type="radio" autocomplete="off" /> 
									</label> 
									<label class="btn btn-blue form-check-label active"> 
										<input class="form-check-input" type="radio" autocomplete="off" /> 
									</label> 
									<label class="btn btn-green form-check-label"> 
										<input class="form-check-input" type="radio" autocomplete="off" /> 
									</label> 
									<label class="btn btn-orange form-check-label"> 
										<input class="form-check-input" type="radio" autocomplete="off" /> 
									</label> 
									<label class="btn btn-pink form-check-label"> 
										<input class="form-check-input" type="radio" autocomplete="off" /> 
									</label> 
								</div> 
							</div> 
	        			
	        			<div class="product-count">
	        				<label for="size">Quantity</label>
	        				<form action="#" class="display-flex">
							    <div class="qtyminus">-</div>
							    <input type="text" name="quantity" value="1" class="qty" />
							    <div class="qtyplus">+</div>
							</form>
							<a href="/" class="round-black-btn" >Add to Cart</a>
	        			</div>
	        		</div>
	        	</div>
	        </div>
	        <div class="product-info-tabs">
		        <ul class="nav nav-tabs" id="myTab" role="tablist">
				  	<li class="nav-item">
				    	<a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
				  	</li>
				  	<li class="nav-item">
				    	<a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
				  	</li>
				</ul>
				<div class="tab-content" id="myTabContent">
				  	<div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
				  		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
				  	</div>
				  	<div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
				  		<div class="review-heading">REVIEWS</div>
				  		<p class="mb-20">There are no reviews yet.</p>
				  		<form class="review-form">
		        			<div class="form-group">
			        			<label>Your rating</label>
			        			<div class="reviews-counter">
									<div class="rate">
									    <input type="radio" id="star5" name="rate" value="5" />
									    <label for="star5" title="text">5 stars</label>
									    <input type="radio" id="star4" name="rate" value="4" />
									    <label for="star4" title="text">4 stars</label>
									    <input type="radio" id="star3" name="rate" value="3" />
									    <label for="star3" title="text">3 stars</label>
									    <input type="radio" id="star2" name="rate" value="2" />
									    <label for="star2" title="text">2 stars</label>
									    <input type="radio" id="star1" name="rate" value="1" />
									    <label for="star1" title="text">1 star</label>
									</div>
								</div>
							</div>
		        			<div class="form-group">
			        			<label>Your message</label>
			        			<textarea class="form-control" rows="10"></textarea>
			        		</div>
			        		<div class="row">
				        		<div class="col-md-6">
				        			<div class="form-group">
					        			<input type="text" name="" class="form-control" placeholder="Name*" />
					        		</div>
					        	</div>
				        		<div class="col-md-6">
				        			<div class="form-group">
					        			<input type="text" name="" class="form-control" placeholder="Email Id*" />
					        		</div>
					        	</div>
					        </div>
					        <button class="round-black-btn">Submit Review</button>
			        	</form>
				  	</div>
				</div>
			</div>
	</div>
    </div> */}


            </main>
        
        </div>

    );
}

export default Detail;