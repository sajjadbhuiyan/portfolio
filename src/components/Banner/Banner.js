
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import banImage from '../../images/sajjad.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            {/* <div className="banner-overlay"> */}
            {/* <Container> */}
                <Row>
                    <Col className="bantext" sm={12} md={6}>
                        <div className='ml-5 bantextmain'>
                        <h1>Hello, I'm <br/> MD. Sajjad</h1>
                        <h2>MARN Stack Developer</h2>
                        <br/>
                        <br/>
                        <nav>
                            <ul>
                                <li>
                                    RESUME
                                <span></span><span></span><span></span><span></span>
                                </li>
                            </ul>
                        </nav>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <Image height='100%' width='100%' src={banImage}></Image>
                    </Col>
                </Row>
            {/* </Container> */}
            {/* </div> */}
        </div>
    );
};

export default Banner;