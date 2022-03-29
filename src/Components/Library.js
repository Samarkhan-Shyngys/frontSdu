import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import DivTitle from "./DivTitle";
// const images = [
//   {
//     title: "Архитектура компьютера",
//     author: "Э. Таненбаум, Т. Остин",
//     url: require("../image/book1.png"),
//   },
//   {
//     title: "bbb",
//     author: "bbb",
//     url: require("../image/book2.png"),
//   },
//   {
//     title: "ccc",
//     author: "bbb",
//     url: require("../image/book3.png"),
//   },
//   {
//     title: "ccc",
//     author: "bbb",
//     url: require("../image/book4.png"),
//   },
//   {
//     title: "ccc",
//     author: "bbb",
//     url: require("../image/book5.png"),
//   },
// ];

const images = JSON.parse(localStorage.getItem("library")).library;
console.log(JSON.parse(localStorage.getItem("library")).library);
const Library = () => {
  const nextSlide = () => {
    setCur((cur + 1) % images.length);
  };
  const prevSlide = () => {
    setCur((cur - 1 + images.length) % images.length);
  };
  const [cur, setCur] = useState(2);
  return (
    <div className="max-w-7xl mx-auto pt-12">
      <DivTitle
        title="Доступная библиотека"
        subtitle="Получайте самые необходимые и рекомендуемые книги от ассистентов"
      />
      <div className="flex items-center justify-between">
        <ChevronLeftIcon
          className="h-8 w-auto absolute inset-y-2/5 -ml-4 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white"
          onClick={prevSlide}
        />

        <img
          src={'http://7fba-95-141-136-228.ngrok.io' + images[cur - 2 < 0 ? images.length + (cur - 2) : cur - 2].url}
          className="h-64 w-44 rounded-lg"
          alt="image1"
        />
        <img
          src={'http://7fba-95-141-136-228.ngrok.io' +images[cur === 0 ? images.length - 1 : cur - 1].url}
          className="h-80 w-52 rounded-lg"
          alt="image1"
        />
        <img
          src={'http://7fba-95-141-136-228.ngrok.io' +images[cur].url}
          className="h-96 w-72 rounded-lg"
          alt="image1"
        />
        <img
          src={'http://7fba-95-141-136-228.ngrok.io' +images[cur === images.length - 1 ? 0 : cur + 1].url}
          className="h-80 w-52 rounded-lg"
          alt="image1"
        />
        <img
          src={'http://7fba-95-141-136-228.ngrok.io' +
            images[
              cur + 2 >= images.length ? (cur + 2) % images.length : cur + 2
            ].url
          }
          className="h-64 w-44 rounded-lg"
          alt="author"
        />
        <ChevronRightIcon
          className="h-8 w-auto absolute right-48 inset-y-2/5 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white"
          onClick={nextSlide}
        />
      </div>
      <div>
        <h1 className="text-center pt-4 text-red-700 font-bold text-xl">
          {images[cur].title}
        </h1>
        <p className="text-center">{images[cur].author}</p>
      </div>
    </div>
  );
};

export default Library;
