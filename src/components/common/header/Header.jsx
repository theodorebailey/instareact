// import react
import React from 'react';
// we can move location as long as items remain in common folder
import { Navbar, Footer, Login, Logged } from '../../common';
import { Link } from 'react-router-dom';

import Dualphone from './../images/dualphone.png';
import Instagram from './../images/instagramtext.png';
import Facebook from './../images/facebook.png'

import Google from './../images/googlePlay.png'
import Micro from './../images/microsoft.png';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';



import { useState } from 'react';

import './Header.css';

// create component
function Header () {

  const [value, setValue] = useState("input");

  const [update, setUpdate] = useState(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleClick = () => {
    setUpdate(value);
  }

 
  return (
    <>
    <article id="loginSection">
      <div className="leftSide">
        <img id="dualphone" src={Dualphone} alt="" />
      </div>
      {/* <Routes>
        <Route ></Route>
      </Routes> */}
      <div className="rightSide">
          <img id="instalogo" src={ Instagram } alt="" />
          <form>
              <div className='input_area'>
                  <div className="textbox">
              <TextField type="text" placeholder="TEXT WILL APPEAR ELSEWHERE" name="user" id="outlined-basic" className="user" variant="outlined" onChange={handleChange}/>
              </div>
              <div className="textbox">
              <TextField id="outlined-basic" />
              </div>
            </div>
            <div className='buttonSection'>
            <Button type='submit' className='btn_one' variant="contained" onClick={handleClick}>Log in</Button>
            <hr className="hr-text" />
            <div className="facebookLoginSection">
              <p className="facebookText"><a href="https://www.facebook.com"><img id="facebooklogo" src={Facebook} alt="" /></a>Log in with Facebook</p>
              <p className="facebookText">Forgotten your password?</p>
            </div>
          </div>
          </form>
          
          <div className="container">
            <p>Don't have an account? <a className="instagramLink" href="https://www.instagram.com" target="_target">Sign up</a></p>
          </div>
          <p className="facebookText">Get the app.</p>
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D9BE8C3F1-50A5-4B90-885B-1BA669A2F816%26utm_content%3Dlo%26utm_medium%3Dbadge&pli=1" target="_blank"><img className="googleLinks" src={Google} alt="Google play" /></a>
            <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=-1260%2C0%2C1260%2C757" target="_blank"><img className="microLinks" src={Micro} alt="Microsoft store" /></a>
      </div>
      <Logged user={ value } /> 
    </article>
  </>      
    )

}

// export component
export default Header;

