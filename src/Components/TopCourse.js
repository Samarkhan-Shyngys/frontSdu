import React, { useState, useEffect} from "react";
import CourseCard from "./CourseCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import DivTitle from "./DivTitle";
import axios from "axios";
import {base_url} from "../utils/request";

const TopCourse = ({ scrollRef }) => {
  const [theArray, setTheArray] = useState([]);
  useEffect(()=>{
    axios.get( `${base_url}/api/main/get/allCourses`)
    .then((result) => setTheArray(result.data.courses)
    )
    .catch(((er)=>console.log(er)))
  }, []);  

  const scroll = (direction) => {
    if (!scrollRef || scrollRef.current == null) {
      return;
    }
    let initialPosition = scrollRef.current.scrollLeft;
    if (direction === "right") {
      scrollRef.current.scroll({
        behavior: "smooth",
        left: initialPosition + scrollRef.current.clientWidth,
        top: 0,
      });
      initialPosition = initialPosition + scrollRef.current.clientWidth;
      return;
    }
    scrollRef.current.scroll({
      behavior: "smooth",
      left: initialPosition - scrollRef.current.clientWidth,
      top: 0,
    });
    initialPosition = initialPosition - scrollRef.current.clientWidth;
  };
  return (
    <div className="bg-white mt-12 text-gray-900 font-sans p-6">
      <div className="container mx-auto max-w-7xl relative">
        <DivTitle
          title="Топ курсы"
          subtitle="Занимайтесь с опытными преподавателями и ваши цели станут ближе"
          link="/allcourses"
        />
        <div className="">
          <ChevronLeftIcon
            className="hidden md:block h-8 w-auto absolute inset-y-1/3 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white"
            onClick={() => scroll("left")}
          />
          <ul ref={scrollRef} className="grid w-full snap-x snap-mandatory auto-cols-[calc((100%-64px)/2)] grid-flow-col gap-5 sm:auto-cols-[calc((100%-2*32px)/3)] lg:auto-cols-[calc((100%-3*64px)/4)] xl:auto-cols-[calc((100%-4*17px)/4)] overflow-x-scroll scrollbar-hide">
            {/* <CourseCard scrollRef={scrollRef} /> */}
            {theArray.map((data)=>(
          <CourseCard courseId={data.courseId} image={data.pathImage} assistant={data.assistant} name={data.courseName} students={data.studentCount} rating={data.rating} point={data.point}/>
        ))}
           
          </ul>

          <ChevronRightIcon
            className="hidden md:block h-8 w-auto absolute right-2 inset-y-1/3 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white"
            onClick={() => scroll("right")}
          />
        </div>
        <div className="flex justify-center mt-2">
          <span className="h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"></span>
          <span className="h-2 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"></span>
          <span className="h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"></span>
          <span className="h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"></span>
          <span className="h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"></span>
        </div>
      </div>
    </div>
  );
};

export default TopCourse;
