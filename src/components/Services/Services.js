import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import service1 from '../../images/service01.png';
import service2 from '../../images/service02.png';
import service3 from '../../images/service03.png';
import './Services.css';

const Services = () => {
    return (
        <div>
            <Container>
            <div className="heading">
                    <h2>SERVICES</h2>
                </div>
                <Row>
                    <Col sm={12} md={4}>
                    <div className="service_img">
                        <Image src={service1}></Image>
                    </div>
                    <div class="service_content">
                    <h3>Beautiful Designs</h3>
                    <p>Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in. Iaculis purus digni.</p>
                    </div>
                    </Col>

                    <Col sm={12} md={4}>
                    <div className="service_img">
                        <Image src={service2}></Image>
                    </div>
                    <div class="service_content">
                    <h3>web development</h3>
                    <p>Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in. Iaculis purus digni.</p>
                </div>
                    </Col>

                    <Col sm={12} md={4}>
                    <div className="service_img">
                        <Image src={service3}></Image>
                    </div>
                    <div class="service_content">
                    <h3>24/7 Support</h3>
                    <p>Proin iaculis purus consequat sem digni ssim. Donec porttitora entum aenean rhoncus posuere odio in. Iaculis purus digni.</p>
                </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;