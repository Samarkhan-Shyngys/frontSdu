import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Mobile from '../Components/Mobile';
import Footer from '../Components/Footer';
import TopCourse from "../Components/TopCourse";
import Library from "../Components/Library";
import { Context } from "../index";
import {base_url} from "../utils/request";

// async function getMain() {

//     const response = await fetch(base_url+'/api/main/');

//         const data = await response.json();
//         // console.log(response);
//         if(response.status===200){
//             console.log(data.library);
//             localStorage.setItem('library', JSON.stringify(data));
//         }




// async function getMain() {
//     const response = await fetch(base_url+'/api/main/');

//         const data = await response.json();
//         // console.log(data.library);
//         if(response.status===200){
//             sessionStorage.setItem('library', JSON.stringify(data));
//         }
    

              
// }




const Home = () => {

    //sessionStorage.removeItem("email");
    //getMain();
    // useEffect(()=>{
    //     axios.get( `${base_url}/api/main.`).then((response)=>{
    //         localStorage.setItem('library', JSON.stringify(response));
    //     })
// }, [])

    sessionStorage.removeItem("email");

    const [data, setData] = useState([]);

    useEffect(async () => {
      const result = await axios(base_url+
        '/api/main/',
      );
      setData(JSON.parse(JSON.stringify(result.data)).library);
      console.log(JSON.parse(JSON.stringify(result.data)).library); 
    }, []);
    

    
    return (
    
        <>
            <Header />
            <Nav />
            <TopCourse />
            <Library list={data}/>
            <Mobile />
            <Footer />
        </>
    );
}

export default Home;