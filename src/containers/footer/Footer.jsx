import React from 'react'
import gpt3Logo from '../../assets/logo.svg'
import { RiPhoneLine, RiMailAddLine, RiUserLocationLine } from 'react-icons/ri'
import './footer.css'

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p><a href="#">Request Early Access</a></p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="gpt3_logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p className="align"><RiUserLocationLine color="#fff" size={45} style={{ marginRight: '1rem' }} />7th Floor, IDCO Towers,
                        Bhubaneswar - 751022,
                        Odisha, India.
                    </p>
                    <p className="align"><RiPhoneLine color="#fff" size={25} style={{ marginRight: '1rem' }} /><a href="tel:0674-2540820">0674-2540820</a></p>
                    <p className="align"><RiMailAddLine color="#fff" size={25} style={{ marginRight: '1rem' }} /><a href="mailto:miamitsahoo@example.com">Email Us</a></p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>@2021 GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
