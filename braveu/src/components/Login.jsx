import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import './../CSS/log_reg.css';

// import { Link, NavLink } from 'react-router-dom';

const Login = () => {

    const history = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    //handle input
    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]:value});
    }

    //handle login
    const handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = user;

        try{ 
            const res = await fetch('/login', {
                method : "POST",
                headers : {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify({
                    email, password
                })
            })

            if(res.status === 400 || !res){
                window.alert("Invalid Credentials")
            }else{
                window.alert("Login Successful");
                // window.location.reload();
                history('/');
            }
        }catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="top_space bg_img">
            <div className="glass">
            
                {/* =============== Login Form section start =============== */}

            <div className="w_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-5">
                            <h2 className="display-6">LOGIN</h2>

                            <form onSubmit={handleSubmit} method="POST">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" name="email" value={user.email} onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" name="password" value={user.password} onChange={handleChange} class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" class="btn btn-primary">LOGIN</button>

                                <p className="pt-4">Are you new? <NavLink to="/register">Register</NavLink> here</p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>

                {/* =============== Login Form section end =============== */}
                
            </div>
        </div>
    );
}

export default Login;
    