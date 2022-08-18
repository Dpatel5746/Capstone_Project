import React, { useState } from 'react';

import './../CSS/log_reg.css';

import { NavLink, useNavigate } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// import {useHistory} from 'react-router';

const Register = () => {

    const history = useNavigate()

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    // Handle input
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({...user, [name]:value});
    }

    // constructor() {
    //     super();
    //     this.state = {
    //         username: "",
    //         email: "",
    //         password: "",
    //     };
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // object distruction
        // store object data into variables
        const {username, email, password} = user;

        try{ 
            const res = await fetch('/register', {
                method : "POST",
                headers : {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify({
                    username, email, password
                })
            })

            if(res.status === 400 || !res){
                window.alert("Already Used Details")
            }else{
                window.alert("Registered Successfully");
                history('/login');
            }
        }catch (error) {
            console.log(error);
        }
    }

    // render(){
        return (
        <div className="top_space bg_img">
            <div className="glass">
            
            {/* =============== Registration Form section start =============== */}

            <div className="w_bg">
                <div className="container w_bg">
                    <div className="row">
                        <div className="col-md-6 p-5">
                            <h2 className="display-6">Register</h2>

                            <form onSubmit={handleSubmit} method="POST">
                                <div class="mb-3">
                                    <label for="exampleInputUsername1" class="form-label">Username</label>
                                    <input type="text" name="username" value={user.username} onChange={handleInput} class="form-control" id="exampleInputUsername1"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" name="email" value={user.email} onChange={handleInput} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" name="password" value={user.password} onChange={handleInput} class="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputConfirmPassword1" class="form-label">Confirm Password</label>
                                    <input type="password" name="confirmPassword" class="form-control" id="exampleInputConfirmPassword1"/>
                                </div>
                                <button type="submit" class="btn btn-primary">REGISTER</button>

                                <p className="pt-4">Already registered? <NavLink to="/login">Login</NavLink> here</p>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            {/* =============== Registration Form section end =============== */}

            </div>  
        </div>
    );
}
// }


export default Register;
    