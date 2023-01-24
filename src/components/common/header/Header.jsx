// import react
import React from 'react';
// we can move location as long as items remain in common folder
import { Navbar, Footer, Login } from '../../common';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Dualphone from './../images/dualphone.png';
import Instagram from './../images/instagramtext.png';
import Facebook from './../images/facebook.png'

import Google from './../images/googlePlay.png'
import Micro from './../images/microsoft.png';


import { useState } from 'react';

import './Header.css';

// create component
function Header () {
 
  return (
    <>
    <article id="loginSection">
      <div className="leftSide">
        <img id="dualphone" src={Dualphone} alt="" />
      </div>
      <Login />
    </article>
  </>      
    )

}

// export component
export default Header;


{/* <div className="app">
        <div className="container">
            <div className="container">
              <div className="container_image">
                  <img id="dualphone" src={Dualphone} alt="" />
              </div>
            </div>
            <div className="logologin">
              <div className='instalogo'>
                <img id="instalogo" src={ Instagram } alt="" />
              </div>
            <form>
            <div className='input_area'>
                <div className="textbox">
            <TextField id="outlined-basic" variant="outlined" />
            </div>
            <div className="textbox">
            <TextField id="outlined-basic" />
            </div>
        </div>
        <div className='buttonSection'>  
          <Button type='submit' className='btn_one' variant="contained">Log in</Button>
          <hr className="hr-text" />
          <div className="facebookLoginSection">
            <p className="facebookText"><img id="facebooklogo" src={Facebook} alt="" /> Log in with Facebook</p>
            <p className="facebookText">Forgotten your password?</p>
          </div>
        </div>
        <div className="container">
          <p className="facebookText">Get the app.</p>
          <div className="container">
            <img className="appLinks" src={Google} alt="" />
            <img className="appLinks" src={Micro} alt="" />
          </div>
        </div>
        <div className="container">


        </div>
        </form>
            </div>
        </div>
        {/* TODO - onSubmit  */}