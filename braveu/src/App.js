import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Categories from './components/Categories';
import Contact from './components/Contact';
// import Product_Detail from './components/Product_Detail';
import Detail from './components/Detail';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Footer from './components/Footer';

// import Protectedroute from './ProtectedRoute';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
// import {useParams} from 'react-router-dom';

import { useEffect, useState } from 'react';


function App() {

  //check if user is logged in 
  const [auth,setauth] = useState(false);
  const [auth1,setauth1] = useState(true);

  const isLoggedIn = async () => {
    try{
      const res = await fetch("/auth", {
        method: "GET",
        headers: {
          Accept : "application/json",
          "Content-type" : "application/json"
        },
        credentials: 'include'
      });

      if(res.status === 200){
        setauth(true)
        setauth1(false)
      }
      if(res.status === 401){
        setauth(false)
        setauth1(true)
      }

    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
     
    <>
      <Router>
        <Navbar auth={true}/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/categories" element={<Categories />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/detail" element={<Detail />} />
            <Route exact path="/login" element={<Login />} auth={auth1} />
            <Route exact path="/register" element={<Register />} auth={auth1} />
            <Route exact path="/logout" element={<Logout />} auth={auth} />
        </Routes>
        <Footer/>
      </Router>
    </>
     
  );
}

export default App;
