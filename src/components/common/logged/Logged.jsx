// import react
import React from 'react';

import { useState } from 'react';
import Login from './../login'


// we can move location as long as items remain in common folder
import { Link } from 'react-router-dom';

import './Logged.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Dualphone from './../images/dualphone.png';
import Instagram from './../images/instagramtext.png';
import Facebook from './../images/facebook.png'

import Google from './../images/googlePlay.png'
import Micro from './../images/microsoft.png';

import Profile from './../images/profileImage.png';

const Logged = (props) => {

// Array destructuring
const [user, setUser] = useState("username");

const [update, setUpdate] = useState(user);


const handleChange = (e) => {
    setUser(e.target.value);
}


const handleClick = (e) => {
    setUpdate(user);
}


    return (
        
        <>
        <div className="rightSide">
          <img id="instalogo" src={ Instagram } alt="" />
          <form>
              <div className='input_area'>
            </div>
            <img class="rounded" src={ Profile } alt="" />
            <div className='buttonSection'>
            <Button type='submit' className='btn_one' variant="contained" onSubmit={ handleClick }>Continue as { user }.</Button>
            <div className="facebookLoginSection">
              <p className="facebookText">Not { user }? <a href="">Switch accounts</a></p>
            </div>
          </div>
          </form>
      </div>
        

        </>

     );
}
 
export default Logged;
