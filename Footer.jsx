import { Container, Facebook, Instagram, Rows, Twitter } from "lucide-react";
import React from "react";
import "./Footer.css"
  
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-items">
            <div className="colItems">
                <h2>Explore</h2>
              
                <a href="/">Home</a>
                <a href="/">Questions</a>
                <a href="/">Articles</a>
                <a href="/">Tutorials</a>

            </div>
            <div className="colItems">
                <h2>For Support</h2>
                <a href="/">FAQs</a>
                <a href="/">Help</a>
                <a href="/">Contact Us</a>
            </div>
            <div >
                <h2>Stay Connected</h2>
                <div className="connected">
                    <a href="/"><Facebook size={30}/></a>
                    <a href="/"><Twitter size={30}/></a>
                    <a href="/"><Instagram size={30}/></a>

                </div>
                

            </div>

        </div>
        <div className="devLink">
            <h2>Dev@dEAKIN 2022</h2>
            <div className="devLink-items">
                <a href="/">Privacy Policy</a>
                <a href="/">Terms</a>
                <a href="/">Code of Conduct</a>

            </div>
        </div>
        

    </div>
  )
}
export default Footer;