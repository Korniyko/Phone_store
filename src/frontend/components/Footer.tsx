import React from "react";
import './Footer.scss';
import logoFooter from '../img/logoFooter.svg'



const Footer = () => {



    return (
        <footer>
            <div className="contact">
                <p>Find a retailer near you</p>
                <p> Or call  <a href="tel:800207758"> 800 207 758</a> </p>

                <p><img src={logoFooter} alt="logoFooter" /></p>
            </div>
            <div className="footerCotainer">
                <p>Copyright © 2023 Apple Inc. </p>
                <p>All rights reserved.</p>
                <p>Legal Notices</p>
                <p>Site Map</p>
                <p>Privacy Policy</p>
            </div>
        </footer>



    )
}
export default Footer;