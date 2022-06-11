import { useState } from "react";

export default function Book({ data }) {
  const [liked, setLiked] = useState(data.liked);
  return (
    <div className="w-full bg-white border rounded-md border-gray-200 mt-8">
      <div className="relative items-center pt-4">
        <img
          alt="book"
          src={data.image}
          className="w-52 mx-auto h-[180] rounded-none"
        />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-8 right-2 w-8 h-8 text-white rounded-full p-2 bg-gray-500/40"
        >
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
      <div className="space-y-1 text-center">
        <h1 className="text-lg font-medium mt-2 text-text_main">
          {data.title}
        </h1>
        <p className="text-base text-normal text-text_gray">{data.author}</p>
      </div>
      <button className="w-[calc(100%-20px)] mx-2 text-base font-normal py-2 text-white bg-[#256699] rounded-lg my-3">
        Скачать
      </button>
    </div>
  );
}
