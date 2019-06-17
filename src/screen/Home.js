import React, { Component } from 'react';
import HomeComponents from '../components/HomeComponents/HomeComponentsPart3';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <HomeComponents />
                <Footer />
            </>
        )
    }
}

export default Home;
