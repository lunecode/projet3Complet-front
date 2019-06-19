import React, { Component } from 'react';
import HomeComponents from '../components/HomeComponents/HomeComponentsPart3';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TitleHomeNavbar from '../components/TitleHomeNavbar';


class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <TitleHomeNavbar />
                <HomeComponents />
                <Footer />
            </>
        )
    }
}

export default Home;
