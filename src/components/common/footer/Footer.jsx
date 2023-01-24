import React from "react";

import './Footer.css';

function Footer () {

    return (
    <>
        <section className="footer">
            {/* horizontal line break */}
            <section className="footer-info">
                    <a className="footer-info__item">
                        Meta
                    </a>
                    <a className="footer-info__item">
                        About
                    </a>
                    <a className="footer-info__item">
                        Blog
                    </a>
                    <a className="footer-info__item">
                        Jobs
                    </a>
                    <a className="footer-info__item">
                        Help
                    </a>
                    <a className="footer-info__item">
                        API
                    </a>
                    <a className="footer-info__item">
                        Privacy
                    </a>
                    <a className="footer-info__item">
                        Terms
                    </a>
                    <a className="footer-info__item">
                        Top Accounts
                    </a>
                    <a className="footer-info__item">
                        Locations
                    </a>
                    <a className="footer-info__item">
                        Instgram Lite
                    </a>
                    <a className="footer-info__item">
                        Contact
                    </a>
                    <a className="footer-info__item">
                        uploading and non-users
                    </a>
                    <a className="footer-info__item">
                        Digital Collectibles Privacy Notice
                    </a>
                    <a className="footer-info__item">
                    Copyright©
                    </a>
            </section>
            <section className="footer-info">
                {/* Link to own Linkedin page */}
                <a className="footer-info__item" href="https://www.linkedin.com/in/theodore-bailey-software-developer" target="_blank">Linkedin</a>
                <a className="footer-info__item" href="https://github.com/theodorebailey" target="_blank">GitHub</a>
                <a className="footer-info__item" href="https://www.instagram.com" target="_blank">Instagram</a>
            </section>
        </section>
    </>
    )
}

export default Footer;