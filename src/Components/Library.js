import React, { useState, useEffect} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import DivTitle from "./DivTitle";
import {base_url} from "../utils/request";
import axios from 'axios';
import { ImageListItem, TextField } from "@mui/material";


// const image = JSON.parse(localStorage.getItem("library")).library;
// console.log(JSON.parse(localStorage.getItem("library")).library);
// const images2 = [
//   {
//     title: "Архитектура компьютера",
//     author: "Э. Таненбаум, Т. Остин",
//     url: require("../image/book1.png"),
//   },
//   {
//     title: "Архитектура компьютера",
//     author: "Э. Таненбаум",
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


const Library = (props) => {
  const images = props.list;
  const nextSlide = () => {
    setCur((cur + 1) % images.length);
  };  
  const prevSlide = () => {
    setCur((cur - 1 + images.length) % images.length);
  };
  const [cur, setCur] = useState(2);


  return (
    <div className="max-w-7xl mx-auto pt-12 container p-6">

      <DivTitle
        title="Доступная библиотека"
        subtitle="Получайте самые необходимые и рекомендуемые книги от ассистентов"
        link="/books"
      />
      <div className="relative flex flex-col items-center justify-between md:flex-row mx-16 md:mx-0 space-y-4">
        <ChevronLeftIcon
          className="hidden md:block h-8 w-auto absolute inset-y-2/5 -ml-4 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white"
          onClick={prevSlide}
        />

        {images.length > 0 && <img src={base_url + images[cur-2<0? images.length + (cur - 2) : cur - 2].url} className="h-64 w-44 rounded-lg" alt="image1" />}
        {images.length > 0 && <img src={base_url + images[cur === 0 ? images.length - 1 : cur - 1].url} className="h-64 w-44 rounded-lg" alt="image1" />}
        {images.length > 0 && <img src={base_url + images[cur].url} className="h-64 w-44 rounded-lg" alt="image1" />}
        {images.length > 0 && <img src={base_url + images[cur === images.length - 1 ? 0 : cur + 1].url} className="h-64 w-44 rounded-lg" alt="image1" />}
        {images.length > 0 && <img src={base_url + images[cur + 2 >= images.length ? (cur + 2) % images.length : cur + 2].url} className="h-64 w-44 rounded-lg" alt="image1" />}
       <ChevronRightIcon
          className="hidden md:block absolute h-8 w-auto -right-4 inset-y-2/5 z-10 bg-white text-red-800 rounded-full hover:bg-red-700 hover:text-white"
          onClick={nextSlide}
        />
      </div>
  
      <div>
        <h1 className="text-center pt-4 text-red-700 font-bold text-xl">
          {images.length > 0 && images[cur].title}
        </h1>
        <p className="text-center">{images.length > 0 && images[cur].author}</p>
       
      </div>
    </div>
  );
};

export default Library;
