import React, { useEffect } from "react";
import axios from "axios";
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Mobile from '../Components/Mobile';
import Footer from '../Components/Footer';
import TopCourse from "../Components/TopCourse";
import Library from "../Components/Library";

import {base_url} from "../utils/request";
// async function getMain() {

//     const response = await fetch(base_url+'/api/main/');

//         const data = await response.json();
//         // console.log(response);
//         if(response.status===200){
//             console.log(data.library);
//             localStorage.setItem('library', JSON.stringify(data));
//         }
              
// }


const Home = () => {
    //sessionStorage.removeItem("email");
    //getMain();
    useEffect(()=>{
        axios.get( `${base_url}/api/main.`).then((response)=>{
            localStorage.setItem('library', JSON.stringify(response));
        })

    
    }, [])
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