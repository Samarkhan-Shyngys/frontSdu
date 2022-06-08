import React, {useState, useEffect} from "react";
import AddButton from "./AddButton";
import AssistantCourse from "./AssistantCourse";
import axios from "axios";
import {base_url} from "../../utils/request";
const MyCourses = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  const [theArray, setTheArray] = useState([]);
  useEffect(()=>{
    axios.get( `${base_url}/api/assistant/get/allCourses/${id}`)
    .then((result) => setTheArray(result.data.courses)
    )
    .catch(((er)=>console.log(er)))
  }, []);  
  
  return (
    <div>
      <div className="flex justify-between border-b items-center pb-4">
        <h1 className="text-lg md:text-2xl font-semibol">Мои курсы</h1>
        <AddButton text="Добавить курс" link="/assistant/addcourse"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {theArray.map((data)=>(
          <AssistantCourse courseId={data.courseId} image={data.pathImage} assistant={data.assistant} name={data.courseName} students={data.studentCount} rating={data.rating} point={data.point}/>
        ))}
        
        {/* <AssistantCourse /> */}

      </div>
    </div>
  );
};

export default MyCourses;
