import React from "react";
import image from "../../image/img_course.png";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/outline";

export default function AssistantCourse() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full p-4">
        <Link
          to="/assistant/1"
          className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={image}
              alt="course"
            />
          </div>
          <div className="py-2 px-4">
            <h2 className=" mb-2  font-bold">Алгоритмы, структуры да...</h2>
            <div className="flex space-x-2 items-center">
              <img alt="profile" src={image} className="h-6 w-6 rounded-full" />
              <p className="text-sm font-medium text-text_main">
                Арман Болатов
              </p>
            </div>
          </div>

          <div className="pb-4 px-4 flex items-center">
            <p className="text-yellow-500 mr-2 text-sm">4.78</p>
            <Rating
              name="size-small"
              defaultValue={3}
              precision={0.5}
              readOnly
            />
            <span className="ml-2 text-gray-600 text-sm">(205)</span>
          </div>
          <div className="p-4 border-t border-b text-xs text-gray-700">
            <div className="flex items-center mb-1 space-x-4">
              <UserCircleIcon className="h-5 w-auto" />
              <span className="text-sm font-medium">36 студентов</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
