import React from "react";
import CourseCard from "./CourseCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import DivTitle from "./DivTitle";
const TopCourse = () => {
  return (
    <div className="bg-white mt-12 text-gray-900 font-sans p-6">
      <div className="container mx-auto max-w-7xl relative">
        <DivTitle
          title="Топ курсы"
          subtitle="Занимайтесь с опытными преподавателями и ваши цели станут ближе"
          link="/allcourses"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <ChevronLeftIcon className="hidden md:block h-8 w-auto absolute inset-y-1/3 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white" />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <ChevronRightIcon className="hidden md:block h-8 w-auto absolute -right-2 inset-y-1/3 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white" />
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
