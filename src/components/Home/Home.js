import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MyWork from '../MyWork/MyWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <MyWork></MyWork>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;