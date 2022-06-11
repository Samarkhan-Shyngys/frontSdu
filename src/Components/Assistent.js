import React, { useEffect, useState, useMemo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CourseCard from "./CourseCard";
import {
  TextField,
  Autocomplete,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { FilterIcon } from "@heroicons/react/outline";
import image from "../image/img_course.png";
import user_image from "../image/circle.png";
import Pagination from "./Pagination";
const courses = [
  {
    id: "1",
    image: image,
    title: "Алгоритмы, структуры да.",
    user_image: user_image,
    rating: 3,
    total_rating: 200,
    students: 24,
    liked: false,
    format: "Онлайн",
  },
  {
    id: "2",
    image: image,
    title: "Алгоритмы, структуры дата",
    user_image: user_image,
    rating: 5,
    total_rating: 200,
    students: 24,
    liked: true,
    format: "Онлайн",
  },
  {
    id: "3",
    image: image,
    title: "Дата",
    user_image: user_image,
    rating: 2,
    total_rating: 150,
    students: 24,
    liked: false,
    format: "Онлайн",
  },
  {
    id: "4",
    image: image,
    title: "Алгоритмы, структуры да..",
    user_image: user_image,
    rating: 4,
    total_rating: 200,
    students: 24,
    liked: false,
    format: "Онлайн",
  },
  {
    id: "5",
    image: image,
    title: "Алгоритмы, структуры да..",
    user_image: user_image,
    rating: 4,
    total_rating: 200,
    students: 24,
    liked: false,
    format: "Оффлайн",
  },
  {
    id: "6",
    image: image,
    title: "Алгоритмы, структуры да..",
    user_image: user_image,
    rating: 4,
    total_rating: 200,
    students: 24,
    liked: false,
    format: "Оффлайн",
  },
  {
    id: "7",
    image: image,
    title: "Алгоритмы, структуры да..",
    user_image: user_image,
    rating: 4,
    total_rating: 200,
    students: 24,
    liked: false,
    format: "Оффлайн",
  },
];
const Assistant = () => {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [format, setFormat] = useState("");
  const [filtered, setFiltered] = useState([]);
  const handleChange = (event) => {
    setFormat(event.target.value);
  };
  useEffect(() => {
    setFiltered(courses.filter((el) => el.title.includes(inputValue)));
  }, [inputValue]);

  function handleClick() {
    setFiltered(
      courses.filter(
        (el) => el.format === format && el.title.includes(inputValue)
      )
    );
  }
  function handleSort() {
    setFiltered((num) => [
      ...num.sort((a, b) => (a.rating < b.rating ? 1 : -1)),
    ]);
  }
  const [currentPage, setCurrentPage] = useState(1);
  let PageSize = 3;
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return filtered.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filtered, PageSize]);

  return (
    <>
      <div className="">
        <Header />
        <div className=" pt-16 bg-gray-200">
          <div className="text-center ">
            <h1 className="text-lg md:text-[32px] font-medium text-text_main">
              Улучшение знания начинается здесь с ассистентами СДУ
            </h1>
            <p className="text-[22px] font-normal mt-2 text-text_gray">
              Мы вам предлагаем самых профессиональных ассистентов для хорошей
              успеваемости
            </p>
          </div>
          <div className="flex space-y-2 md:space-y-0 flex-col md:flex-row justify-center my-2 md:my-8 pb-24">
            <div className="">
              <Autocomplete
                getOptionLabel={(option) => {
                  return option.title;
                }}
                freeSolo
                onChange={(event, newValue) => {
                  setValue(newValue?.title);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                options={courses || []}
                sx={{ minWidth: "450px", bgcolor: "white" }}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Название курса" />
                )}
              />
            </div>
            <div>
              <FormControl
                fullWidth
                sx={{ minWidth: 200, minHeight: 50, bgcolor: "white" }}
              >
                <InputLabel id="demo-simple-select-label">
                  Формат урока
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={format}
                  label="Формат урока"
                  onChange={handleChange}
                >
                  <MenuItem value={"Онлайн"}>Онлайн</MenuItem>
                  <MenuItem value={"Оффлайн"}>Оффлайн</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              <button
                className="w-full md:w-36 bg-red-800 text-xl text-white px-12 py-2 md:py-3 font-semibold rounded md:ml-8"
                onClick={handleClick}
              >
                Найти
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-12">
        <div className="flex justify-between mx-4 md:mx-0">
          <h1 className="text-base md:text-lg font-medium tracking-tight text-gray-400">
            Найдено {currentTableData.length} результатов
          </h1>
          <div
            className="inline-flex items-center space-x-1 cursor-pointer"
            onClick={handleSort}
          >
            <FilterIcon className="w-4 h-4" />
            <h1 className="text-base md:text-lg tracking-tight font-medium">
              Сортировать по: Популярности
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
          {filtered.length > 0 ? (
            currentTableData.map((course) => (
              <CourseCard key={course.id} data={course} />
            ))
          ) : (
            <p className="text-center">Not found</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto ">
        <Pagination
          currentPage={currentPage}
          totalCount={filtered.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      <Footer />
    </>
  );
};

export default Assistant;
