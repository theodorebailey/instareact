// import react
import React from 'react';
// we can move location as long as items remain in common folder
import { Link } from 'react-router-dom';
import { useState } from 'react';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

import Dualphone from './../images/dualphone.png';
import Instagram from './../images/instagramtext.png';
import Facebook from './../images/facebook.png'
import Google from './../images/googlePlay.png'
import Micro from './../images/microsoft.png';


// invoke function, update state, pass state back down - requires props
const Login = (props) => {

  const [value, setValue] = useState("Johnny");

  const [update, setUpdate] = useState(value);

  const handleChange = (e) => {
    setValue(e.target.value);
  }
 
  const handleClick = () => {
    setUpdate(value);
  }

    return ( 
        <>
        
        </>
     );
}
 
export default Login;