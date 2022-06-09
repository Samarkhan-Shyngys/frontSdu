import React from "react";
import CourseCard from "./CourseCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import DivTitle from "./DivTitle";
import image from "../image/img_course.png";
import user_image from "../image/circle.png";

const courses = [
  {
    id: "1",
    image: image,
    title: "Алгоритмы, структуры да...",
    user_image: user_image,
    rating: 2,
    total_rating: 200,
    students: 24,
    liked: false,
  },
  {
    id: "2",
    image: image,
    title: "Алгоритмы, структуры да...",
    user_image: user_image,
    rating: 2,
    total_rating: 200,
    students: 24,
    liked: false,
  },
  {
    id: "3",
    image: image,
    title: "Алгоритмы, структуры да...",
    user_image: user_image,
    rating: 2,
    total_rating: 150,
    students: 24,
    liked: false,
  },
  {
    id: "4",
    image: image,
    title: "Алгоритмы, структуры да...",
    user_image: user_image,
    rating: 4,
    total_rating: 200,
    students: 24,
    liked: false,
  },
  {
    id: "5",
    image: image,
    title: "Алгоритмы, структуры да...",
    user_image: user_image,
    rating: 4,
    total_rating: 200,
    students: 24,
    liked: false,
  },
];

const TopCourse = ({ scrollRef }) => {
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
          {courses.map((course)=>(
             <CourseCard key={course.id} data={course}/>

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
