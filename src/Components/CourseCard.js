import React, {useState} from "react";
import image from "../image/img_course.png";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { HeartIcon, UserCircleIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const CourseCard = ({ data }) => {
  const [liked, setLiked] = useState(data.liked)
  return (
    <div className="flex flex-wrap">
      <div className="w-full p-4">
        <div
          className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={data.image}
              alt="course"
            />
            <button onClick={()=>setLiked(!liked)}>
              <HeartIcon className={classNames(liked ? "bg-red-800/10  fill-red-800" : "",  "absolute right-5 top-5 h-6 w-6 text-white rounded-full")} />
            </button>
          </div>
          <div className="p-4">
            <h2 className=" mb-2  font-bold">{data.title}</h2>
            <div className="flex space-x-2 items-center">
              <img
                alt="profile"
                src={data.user_image}
                className="h-6 w-6 rounded-full"
              />
              <p className="text-sm font-medium text-text_main">
                Арман Болатов
              </p>
            </div>
          </div>

          <div className="pb-4 px-4 flex items-center">
            <p className="text-yellow-500 mr-2 text-sm">{data.rating}</p>
            <Rating
              name="size-small"
              defaultValue={data.rating}
              precision={0.5}
              readOnly
            />
            <span className="ml-2 text-gray-600 text-sm">
              {data.total_rating}
            </span>
          </div>
          <div className="p-4 border-t border-b text-xs text-gray-700">
            <div className="flex items-center mb-1 space-x-4">
              <UserCircleIcon className="h-5 w-auto" />
              <span className="text-sm font-medium">{data.students} студентов</span>
            </div>
            <Link to="/allcourses/1">
            <button className="w-full bg-sky-700 text-xl text-white font-semibold rounded-md mt-4 py-2">
              Подробнее
            </button>
            </Link>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
