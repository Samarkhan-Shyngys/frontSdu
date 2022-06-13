import { Title } from "./Title";
import Empty from "../Empty";
import CourseCard from "../CourseCard";
import image from "../../image/book4.png";
import user_image from "../../image/circle.png";
import axios from "axios";
import {base_url} from "../../utils/request";
import React, {useState, useEffect} from 'react';
const courses = [
    {
        id: "1",
        image: image,
        title: "Алгоритмы, структуры да...",
        user_image: user_image,
        rating: 2,
        total_rating: 200,
        students: 24,
        liked: false
    }
]
const Favourite=()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    let id = 0;
    if(user!==null){
        id= user.id
    }
    const [theArray, setTheArray] = useState([]);
    useEffect(()=>{
        axios.get( `${base_url}/api/student/get/likedCourse/${id}`)
        .then((result) => setTheArray(result.data.courses)
        )
        .catch(((er)=>console.log(er)))
      }, []); 
    const det = true;
    return(
        <>
        <div className="w-full">
            <Title text="Избранное"/>
            {det ? <div className="grid grid-cols-3">
                {theArray.map((data)=>(
                    <CourseCard parLike={data.liked} courseId={data.courseId} image={data.pathImage} assistant={data.assistant} name={data.courseName} students={data.studentCount} rating={data.rating} point={data.point} />
                ))}

            </div> : <Empty 
                title="У вас пока нет Избранных" 
                subtitle="Добавьте интересующие Вас курсы/ассистенты в список избранных, чтобы их легче было найти  "/>
            }
           
        </div>
    
        
        </>
        
    );
}


export default Favourite;