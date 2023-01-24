// import react
import React from 'react';
// we can move location as long as items remain in common folder
import { Navbar, Footer } from '../../common';
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

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  const [Add,setAdd] = useState("");
 
  const handleClick = (e) => {


 
  }
 
  return (
    <>
    <article id="loginSection">
      <div className="leftSide">
        <img id="dualphone" src={Dualphone} alt="" />
      </div>
      <div className="rightSide">
          <img id="instalogo" src={ Instagram } alt="" />
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
            <Button type='submit' className='btn_one' variant="contained" onSubmit={handleClick}>Log in</Button>
            <hr className="hr-text" />
            <div className="facebookLoginSection">
              <p className="facebookText"><a href="https://www.facebook.com"><img id="facebooklogo" src={Facebook} alt="" /></a>Log in with Facebook</p>
              <p className="facebookText">Forgotten your password?</p>
            </div>
          </div>
          </form>
          <div className="container">
            <p>Don't have an account? Sign up</p>
          </div>
          <p className="facebookText">Get the app.</p>
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9BE8C3F1-50A5-4B90-885B-1BA669A2F816%26utm_content%3Dlo%26utm_medium%3Dbadge&pli=1" target="_blank"><img className="googleLinks" src={Google} alt="Google play" /></a>
            <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1260%2C0%2C1260%2C757" target="_blank"><img className="microLinks" src={Micro} alt="Microsoft store" /></a>
      </div>
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