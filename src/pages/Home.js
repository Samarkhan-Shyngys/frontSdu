import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Mobile from '../Components/Mobile';
import Footer from '../Components/Footer';
import TopCourse from "../Components/TopCourse";
import Library from "../Components/Library";
import {base_url} from "../utils/request";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get( `${base_url}/api/main/`)
    .then((result) => setData(result.data.library)
    )
    .catch(((er)=>console.log(er)))
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