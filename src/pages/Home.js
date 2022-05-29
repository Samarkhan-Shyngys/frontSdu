import axios from "axios";
import React, { useEffect, useState , useRef} from "react";
import Header from '../Components/Header';
import Nav from '../Components/Nav';
import Mobile from '../Components/Mobile';
import Footer from '../Components/Footer';
import TopCourse from "../Components/TopCourse";
import Library from "../Components/Library";
import {base_url} from "../utils/request";

const Home = () => {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null);

  useEffect(()=>{
    axios.get( `${base_url}/api/main/`)
    .then((result) => console.log(result))
    .catch(((er)=>console.log(er)))
  }, []);

    
    return (
    
        <>
            <Header />
            <Nav />
            <TopCourse scrollRef={scrollRef} />
           { data.length>0 && <Library list={data}/>}
            <Mobile />
            <Footer />
        </>
    );
}

export default Home;