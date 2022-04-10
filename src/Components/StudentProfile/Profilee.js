import React, { useState } from "react";
import PhotoPicker from "../PhotoPicker";
import Input from "../Input";
import Button from "../AssistantProfile/Button";
import { PlusIcon } from "@heroicons/react/outline";
const Profilee = () => {
  const [preview, setPreview] = useState(require("../../image/12.webp"));
  const [data, setData] = useState({
    photo: "",
    firstname: "",
    lastname: "",
    email: "",
    faculty: "",
    profession: "",
    phone: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleImage=(e)=>{
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setPreview(e.target.result);
        setData({
          ...data,
          ["photo"]: e.target.result,
        });
      };
    }
  };
  console.log(data);
  return (
    <div className="w-2/3 mx-auto">
      <h1 className="text-2xl font-semibold">Профиль</h1>
      <div>
        {/* <PhotoPicker preview={preview} onChanged={handleImage}/> */}
        <form>
          <label>
            <img
              src={preview}
              className="w-32 h-32 rounded-full"
              alt="profile"
            />
            <PlusIcon className="absolute z-10 h-6 w-6 ml-24 -mt-8 bg-gray-900 rounded-full text-white" />
            <input
              name="photo"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImage}
            />
          </label>
        </form>

        <Input
          name="firstname"
          text="Имя"
          type="text"
          placeholder="Введите ваше имя"
          onChanged={handleChange}
        />
        <Input
          name="lastname"
          text="Фамилия"
          type="text"
          placeholder="Введите вашу фамилию"
          onChanged={handleChange}
        />
        <Input
          name="email"
          text="SDU-почта"
          type="text"
          placeholder="220102456@stu.sdu.edu.kz"
          onChanged={handleChange}
        />
        <Input
          name="faculty"
          text="Факультет"
          type="text"
          placeholder="Инженерии и естественных наук"
          onChanged={handleChange}
        />
        <Input
          name="profession"
          text="Специализация"
          type="text"
          placeholder="Информационная система"
          onChanged={handleChange}
        />
        <Input
          name="phone"
          text="Номер телефона"
          type="text"
          placeholder="+7 (701) 123 45-67|"
          onChanged={handleChange}
        />

        <Button text="Сохранить изменения" />
      </div>
    </div>
  );
};

export default Profilee;
