import React from 'react';

import './Login.css';

import Dualphone from './../images/dualphone.png';

const Login = () => {
    return ( 
        <>
        <div>
            <div  className="container">
                <img className="loginImage" src={Dualphone} alt="" />
            </div>
            <div>
                <div className="signinbox">
                
                </div>
            </div>
        </div> 
        </>
     );
}
 
export default Login;