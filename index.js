//import react from "react";
import ReactDom from "react-dom";
import './index.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './todos.js';
import Register from './contact.js';
import Login from './home.js';

function Home(){

  return(
    
    <>
    <hr COLOR="black" className="loader" />
    <img src="https://cdn.dribbble.com/users/1138636/screenshots/10911984/media/7a0d8f867055f7dbbd7790c53f0be49e.jpg?compress=1&resize=800x600&vertical=top" alt="logo" />
    <BrowserRouter>
        <h2 className="logo">Match <i>Up</i></h2>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Login />}/>} />
          <Route path="register" element={<Register />} />
          </Route>
        </Routes>
    </BrowserRouter>
    <span className="ball1">
    </span>
    <span className="ball2">
    </span>
    <span className="ball3">
    </span>
    <span className="ball4">
    </span>
    <span className="ball5">
    </span>
    <span className="ball6">
    </span>
    <span className="ball7">
    </span>
    <span className="ball8">
    </span>
    <span className="ball9">
    </span>
    <span className="ball10">
    </span>
    <span className="ball11">
    </span>
    <span className="ball12">
    </span>
    <span className="ball13">
    </span>
    </>
    );
}


ReactDom.render(<Home />,document.getElementById("root"));