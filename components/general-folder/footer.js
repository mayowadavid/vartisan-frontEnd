import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_wrapper">
            <div className="footer_row">
                <div className="footer_logo">
                    <p>Vartisan</p>
                    <p>Subscribe to our newsletter and stay updated on the latest music release and albums</p>
                </div>
                <div className="social-icon">
                    <img src="img/youtube.png" alt=""/>
                    <img src="img/instagram.png" alt=""/>
                    <img src="img/facebook.png" alt=""/>
                </div>

            </div>
            <div className="footer_row_nav">
                <h5>ABOUT</h5>
                <li>Browse Library</li>
                <li>Pricing</li>
                <li>Partner Program</li>
                <li>Merch</li>
                <li>Careers</li>
            </div>
            <div className="footer_row_nav">
                <h5>LEARN</h5>
                <li>How its works</li>
                <li>Blog</li>
                <li>Tersm pof use</li>
                <li>Privacy Policy</li>
            </div>
            <div className="footer_row_nav">
                <h5>HELP</h5>
                <li>Support Center</li>
                <li>FAQ</li>
                <li>Twitch Extension Help</li>
                <li>Contact</li>
            </div>
        </div>
        <div class="divider"></div>
        <div class="copy_right">
            <p>©2021 Streamgraphic</p>
            <p>Cookie Policy</p>
        </div>
    </div>
  )
}


export default Footer;