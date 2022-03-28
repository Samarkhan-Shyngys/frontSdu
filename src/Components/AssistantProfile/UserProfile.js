import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/outline";
import Input from "../Input";
import Selector from "./Selector";
import level from "../../Constants/Level";
import languages from "../../Constants/Language";
import Add from "./Add";
import Button from "./Button";
const UserProfile = () => {
  const [image, setImage] = useState(require("../../image/12.webp"));
  function handleChange(e) {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setImage(e.target.result);
      };
    }
  }

  return (
    <div className="w-1/2">
      <h1 className="text-2xl font-semibold">Профиль</h1>
      <div>
        <div>
          <label>
            <img src={image} className="w-32 h-32 rounded-full" alt="profile" />
            <PlusIcon className="absolute z-10 h-6 w-6 ml-24 -mt-8 bg-gray-900 rounded-full text-white" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            ></input>
          </label>
        </div>

        <Input text="Имя" type="text" placeholder="Жанар" />
        <Input text="Фамилия" type="text" placeholder="Маратова" />
        <Input
          text="SDU-почта"
          type="text"
          placeholder="220102456@stu.sdu.edu.kz"
        />
        <Input
          text="Факультет"
          type="text"
          placeholder="Инженерии и естественных наук"
        />
        <Input
          text="Специализация"
          type="text"
          placeholder="Информационная система"
        />
        <Input
          text="Номер телефона"
          type="text"
          placeholder="+7 (701) 123 45-67|"
        />
        <div className="flex justify-between">
          <label>Языки</label>
          <label className="mx-24">Уровень</label>
        </div>
        <Selector data={languages} data1={level} />
        <Selector data={languages} data1={level} />
        <Add text="Добавить язык" />
        <div className="mt-4">
          <label
            htmlFor="about"
            className="block text-lg font-medium text-gray-700"
          >
            О себе
          </label>
          <div className="mt-1">
            <textarea
              id="about"
              name="about"
              rows={3}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="О себе"
            />
          </div>
        </div>
        <Button text="Сохранить изменения" />
      </div>
    </div>
  );
};

export default UserProfile;
