import React from "react";
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Mobile from '../Components/Mobile';
import Footer from '../Components/Footer';
import TopCourse from "../Components/TopCourse";
import Library from "../Components/Library";

async function getMain() {

    const response = await fetch('http://7fba-95-141-136-228.ngrok.io/api/main/');
        const data = await response.json();
        // console.log(response);
        if(response.status===200){
            console.log(data.library);
            localStorage.setItem('library', JSON.stringify(data));
        }
              
}


const Home = () => {
    getMain();
    
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