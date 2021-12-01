import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../../images/logo3.png';
import SocialMedia from '../SocialMedia/SocialMedia';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row content_style">
            <div className="col-md-12 mt-md-0 mt-3">
                <Image src={logo}></Image>
                <h3 className='pt-3'>About</h3>
                <p>I am Md. Sajjad Bhuiyan Taki. In web development,  I have been working from 2020. In these 2 years,<br/> I seek myself  web is my passionate place. When I remain funny mood, I can do code and also sad mode.</p>
                <SocialMedia></SocialMedia>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>
            
        </div>
    </div>

    <div className="footer-copyright content_style text-center py-3">© 2020 Copyright:
        <a href="https://github.com/sajjadbhuiyan"> Sajjad Bhuiyan</a>
    </div>

</footer>
    );
};

export default Footer;