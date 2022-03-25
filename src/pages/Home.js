import React from "react";
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Mobile from '../Components/Mobile';
import Footer from '../Components/Footer';
import TopCourse from "../Components/TopCourse";
import Library from "../Components/Library";
const Home = () => {
    return (
        <>
            <Header />
            <Nav />
            <TopCourse />
            <Library />
            <Mobile />
            <Footer />
        </>
    );
}

export default Home;