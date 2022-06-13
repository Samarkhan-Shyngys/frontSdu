import { Title } from "./Title";
import Empty from "../Empty";
import image from "../../image/img_course.png";
import user_image from "../../image/circle.png";
import CourseItem from "../../Components/StudentProfile/CourseItem";
import React, {useState, useEffect} from "react";
import axios from "axios";
import {base_url} from "../../utils/request";
const courses =[
    {
        id: "1",
        image: image,
        title: "Алгоритмы, структуры да...",
        teacher_name: "Арман Болатов",
        teacher_profile: user_image,
        times: [{day: "Mon", hour: "10:30"}, {day: "Tue", hour: "12:30"}]
      },
]
const StudentCourses=()=>{
    const user = JSON.parse(localStorage.getItem("user"));
    let id = 0;
    if(user!==null){
        id= user.id;
    }
    
    const [theArray, setTheArray] = useState([]);
    useEffect(()=>{
        axios.get( `${base_url}/api/student/get/allCourses/${id}`)
        .then((result) => setTheArray(result.data.courses)
        )
        .catch(((er)=>console.log(er)))
    }, []);  
    console.log('times ' + theArray.dates)
    return (
        <div className="w-full">
            <Title text="Мои курсы"/>
            {theArray ? theArray.map((course)=>(
                <CourseItem key={course.id} data={course}/>
            )):  
            <Empty 
                title="У вас пока нет курсов" 
                subtitle="Вы еще не записаны ни к одному курсу от ассистентов. Найдите подходящего и подтягивайте знание"
            />}
           
        </div>
        

    );
}

export default StudentCourses;