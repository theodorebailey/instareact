import React from "react";

import './Footer.css';

function Footer () {

    return (
        <section className="footer">
            {/* horizontal line break */}
            <hr className="footer-seperator"/>
            <section className="footer-social-media">
                {/* Link to own Linkedin page */}
                <a href="https://www.linkedin.com/in/theodore-bailey-software-developer" target="_blank">instareact</a>
                <br></br>
                <div className="footer-info__returns">
                        Company Policy
                    </div>
            </section>
            <section className="footer-info">
                <div className="footer-info-left">
                    <div className="footer-info__name">
                        Theodore Bailey
                    </div>
                    <div className="footer-info__returns">
                        Company Policy
                    </div>
                </div>
                <div className="footer-info-center">
                    <div className="footer-info__email">
                        instreact creation
                    </div>
                    <div className="footer-info__terms">
                        Terms and Conditions
                        <br />
                        Copyright©
                    </div>
                </div>
                <div className="footer-info-right">
                    <div className="footer-info__number">
                        0123 4567 8910                      
                    </div>
                    <div className="footer-info__contact">
                        Our Company
                    </div>
                </div>
            </section>
            <hr className="footer-seperator"/>
        </section>
    )
}

export default Footer;