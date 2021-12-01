import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import aboutImg from '../../images/about.jpg.png';
import './About.css';

const About = () => {
    return (
        <div>
            <Container>
                <div className="heading">
                    <h2>ABOUT</h2>
                </div>
                <Row>
                    <Col sm={12} md={4}>
                    <Image fluid src={aboutImg}></Image>
                    </Col>
                    <Col sm={12} md={8} className="pt-5 about">
                        <div>
                        <p>I am Md. Sajjad Bhuiyan Taki. In web development,  I have been working from 2020. In these 2 years,<br/> I seek myself  web is my passionate place. When I remain funny mood, I can do code and also sad mode.</p>
                        <h1  className='education'>My Education</h1>
                        <p>Today, I am studying Bangaladesh University of Professinonls. My subject Disaster and Human Security Management. I have given my HSC from Notre Dame Colleng Dhaka</p>
                        <hr/>
                        <Row>
                            <Col>
                            <div className="basicInfo">
                            <span>Date Of Birth:</span> <p>20 August 1990</p> <br/>
                                <span>Email:</span> <p>mymail@gmail.com</p> <br/>
                                 <span>Website:</span> <p>www.mywebsite.com</p>
                            </div>
                            </Col>
                            <Col> 
                              <div className="basicInfo">
                              <span>Phone No:</span> <p>+0801613922248</p> <br/>
                              <span>Address:</span> <p>Pallabi, Dhaka, Bangaladesh</p> <br/>
                              <span>Freelance:</span> <p>Available</p>
                              </div>
                            </Col>
                        </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;