import { HeartIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { base_url } from "../utils/request";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Book({ data }) {
  const [liked, setLiked] = useState(data.liked);
  return (
    <div className="w-full bg-white border rounded-md border-gray-200 mt-8">
      <div className="relative items-center pt-4">
        <img
          alt="book"
          src={data.image}
          className="w-52 mx-auto h-72 rounded-sm"
        />
        <HeartIcon
          className={classNames(
            liked ? "text-red-600" : "",
            "absolute top-6 right-2 w-8 h-8 bg-gray-600/30 rounded-full p-2 text-white fill-current"
          )}
          onClick={() => setLiked(!liked)}
        />
      </div>
      <div className="space-y-1 text-center">
        <h1 className="text-xl font-bold mt-2">{data.title}</h1>
        <p className="text-lg text-gray-400">{data.author}</p>
      </div>
      <button className="w-[calc(100%-20px)] mx-2 text-xl py-2 text-white bg-[#256699] rounded-md my-4">
        Скачать
      </button>
    </div>
  );
}
