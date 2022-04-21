import React from "react";
import PhotoPicker from "../PhotoPicker";
import Input from "../Input";
import Select from "react-select";
const format =[
  { label: "Онлайн", value: 1 },
  { label: "Оффлайн", value: 2 },
]
const AddCourse=()=>{
    return (
        <div className="w-2/3 space-y-1">
            <h1 className="text-xl md:text-2xl font-semibold border-b-2">Добавить курс</h1>
            <div className="py-4 ">
              <h1 className="text-base md:text-base font-medium">Миниатюра курса</h1>
              <p className="text-base font-normal text-gray-400 mb-2">Выберите подходящее фото для курса</p>
              <PhotoPicker />
            </div>
            <Input text="Название курса" type="text" placeholder="Введите название будущего курса" />
            <h1>Формат курса</h1>
            <Select options={format} placeholder="Выберите формат прохождения курса" />
            <div className="mt-4">
          <label
            htmlFor="about"
            className="block text-lg font-medium text-gray-700"
          >
            Описание курса
          </label>
          <div className="mt-1">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="Напишите краткое описание курса"
            />
          </div>
          </div>
            
        </div>
    )
}

export default AddCourse;