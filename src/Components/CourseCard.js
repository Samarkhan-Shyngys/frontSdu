import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/outline";

const CourseCard = ({ data }) => {
  const [liked, setLiked] = useState(data.liked);
  return (
    <div className="flex flex-wrap">
      <div className="w-full p-4">
        <div className="block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
          <div className="relative pb-48 overflow-hidden">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={data.image}
              alt="course"
            />
            <button
              onClick={() => setLiked(!liked)}
              className="absolute right-5 top-5 h-8 w-8 p-2 text-white rounded-full bg-slate-700/30">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill={liked ? "#9E2629" : "none"}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 15.1875C9 15.1875 1.96875 11.25 1.96875 6.46876C1.96889 5.62369 2.26171 4.80476 2.79741 4.1512C3.33312 3.49763 4.07865 3.04977 4.90724 2.88376C5.73584 2.71775 6.59636 2.84384 7.34249 3.24059C8.08863 3.63734 8.67432 4.28026 9.00001 5.06004L8.99999 5.06005C9.32567 4.28027 9.91137 3.63734 10.6575 3.24059C11.4036 2.84384 12.2642 2.71775 13.0928 2.88376C13.9214 3.04977 14.6669 3.49763 15.2026 4.1512C15.7383 4.80476 16.0311 5.62369 16.0312 6.46876C16.0312 11.25 9 15.1875 9 15.1875Z"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <h2 className=" mb-2 font-bold">{data.title}</h2>
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
            <div className="flex items-center mb-1 space-x-2">
              <UserCircleIcon className="h-5 w-auto" />
              <span className="text-sm font-medium">
                {data.students} студентов
              </span>
            </div>
            <Link to="/applycourse/1">
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
