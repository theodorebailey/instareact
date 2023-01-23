// import react
import React from 'react';
// we can move location as long as items remain in common folder
import { Navbar, Footer } from '../../common';

import './Header.css';

// create component
function Header () {

    return (
        <section className="header">
            {/* top section nav bar */}
            <div className="header-top">
                {/* logo section */}
                <div className="header-top__logo">
                </div>
                {/* navbar section */}
                <div className='header-top__navbar'>
                    <div className="header-top__navigation">
                        <Navbar />
                    </div>
                    {/* <hr className='header-top__seperator'/> */}
                </div>
            </div>
        </section>
    )

}

// export component
export default Header;