import React from "react";
import CourseCard from "./CourseCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import DivTitle from "./DivTitle";
const TopCourse = () => {
  return (
    <body class="bg-white mt-12 text-gray-900 font-sans p-6">
      <div class="container mx-auto max-w-7xl relative">
        <DivTitle
          title="Топ курсы"
          subtitle="Занимайтесь с опытными преподавателями и ваши цели станут ближе"
        />
        <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
          <ChevronLeftIcon className="h-8 w-auto absolute inset-y-1/3 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white" />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <ChevronRightIcon className="h-8 w-auto absolute -right-2 inset-y-1/3 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white" />
        </div>
        <div className="flex justify-center mt-2">
          <a
            href="#"
            className="h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
          ></a>
          <a
            href="#"
            className="h-2 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
          ></a>
          <a
            href="#"
            className="h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
          ></a>
          <a
            href="#"
            className="h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
          ></a>
          <a
            href="#"
            className="h-2 w-2 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
          ></a>
        </div>
      </div>
    </body>
  );
};

export default TopCourse;
