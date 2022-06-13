import React, {useState} from "react";
import image from "../image/img_course.png";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import {base_url} from "../utils/request";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
async function likeCourse(credentials,courseId, id) {
  
  const data2 = new FormData();
  data2.append('liked', credentials)
  data2.append('id', courseId)
 
  return fetch(`${base_url}/api/student/like/course/${id}`, {
    method: "POST",
    body: data2,
  }).then((response) => {
    return response;
  });
}
export default function CourseCard({parLike, courseId, image, assistant, name, students, rating, point, assImage}){
  const user = JSON.parse(localStorage.getItem("user"));
    let id = 0;
    if(user!==null){
        id= user.id
    }

  const [liked, setLiked] = useState(parLike)
  const onSubmit = async(data) =>{
    setLiked(!liked); 
    likeCourse(!liked, courseId, id)
    console.log('log ' + courseId + ' '+ !data);
    // axios.post(`${base_url}/api/assistant/get/course/${id}`, data)
    // const token =  await addCourses(data);
    // if (token.status === 200) {
    //   history.push(ASSISTANT_COURSE);
      
    // }
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full p-4">
        <Link
          to={`/applycourse/${courseId}`}

          className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        ></Link>
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"

              src={base_url + image}
              alt="course"
            />
            <button onClick={()=>onSubmit(liked)}>
              <HeartIcon className={classNames(liked ? "bg-red-800/10  fill-red-800" : "",  "absolute right-5 top-5 h-6 w-6 text-white rounded-full")} />
            </button>
          </div>
          <div className="p-4">

            <h2 className=" mb-2  font-bold">{name}</h2>
            <div className="flex space-x-2 items-center">
              <img alt="profile" src={base_url + assImage} className="h-6 w-6 rounded-full" />

              <p className="text-sm font-medium text-text_main">
                {assistant}
              </p>
            </div>
          </div>

          <div className="pb-4 px-4 flex items-center">
            <p className="text-yellow-500 mr-2 text-sm">{rating}</p>
            <Rating
              name="size-small"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />

            <span className="ml-2 text-gray-600 text-sm">({point})</span>

          </div>
          <div className="p-4 border-t border-b text-xs text-gray-700">
            <div className="flex items-center mb-1 space-x-4">
              <UserCircleIcon className="h-5 w-auto" />
              <span className="text-sm font-medium">{students} студентов</span>

            </div>
            <Link to={`/applycourse/${courseId}`}>
            <button className="w-full bg-sky-700 text-xl text-white font-semibold rounded-md mt-4 py-2">
              Подробнее
            </button>
            </Link>
           
          </div>
      </div>
    </div>
    
  );
};


