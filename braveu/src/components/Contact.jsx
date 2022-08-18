import React from 'react';

import './../CSS/contact.css';

// import { Link, NavLink } from 'react-router-dom';

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

const Contact = () => {

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
      
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    }
    
    
    // function switchTheme(env) {
    //     if (env.target.checked) {
    //         document.documentElement.setAttribute('data-theme', 'dark');
    //     }
    //     else {
    //         document.documentElement.setAttribute('data-theme', 'light');
    //     }    
    // }
    
    // toggleSwitch.addEventListener('change', switchTheme, false);
    
    return (
        <div className="top_space bg_img">
            <div className="glass">
            
                {/* =============== Contact Form section start =============== */}

                <div class="contact-container">
                    <div class="left-col">
                    </div>
                    <div class="right-col">
                        <div class="theme-switch-wrapper">
                        <label class="theme-switch" for="checkbox">
                            <input type="checkbox" id="checkbox" />
                            <div class="slider round"></div>
                    </label>
                    
                    </div>
                        
                        <h1 id="tag">Contact us</h1>
                        <p class="line-descrption">Nice to Meet You! Drop your enquiry here and our experts will get back to you.</p>
                        
                        <form id="contact-form" method="post">
                        <label for="name">Full Name</label>
                    <input class="input" type="text" id="Name" name="Name" placeholder="Your Full Name" required />
                        <label for="email">Email Address</label>
                    <input class="input" type="email" id="email" name="email" placeholder="Your Email Address" required />
                        <label for="message">Message</label>
                    <textarea rows="6" placeholder="Your Message" id="message" name="message" required></textarea>
                        <button class="btn-send" type="submit" id="submit" name="submit">Send</button>
                    
                    </form>
                    <div id="error"></div>
                    <div id="success-msg"></div>
                    </div>
                </div>


                {/* =============== Contact Form section end =============== */}
                
                {/* =============== Contact Info section start =============== */}



                {/* =============== Contact Info section end =============== */}
                    
            </div>
        </div>
    );
}

export default Contact;
    