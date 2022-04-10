import React, {useState} from "react";
import Input from "../Input";
import Selector from "./Selector";
import level from "../../Constants/Level";
import languages from "../../Constants/Language";
import Add from "./Add";
import Button from "./Button";
import { PlusIcon } from "@heroicons/react/outline";
const UserProfile = () => {
  const [preview, setPreview] = useState(require("../../image/12.webp"));
  const [data, setData] = useState({
    photo: "",
    firstname: "",
    lastname: "",
    email: "",
    faculty: "",
    profession: "",
    phone: "",
    language: "",
    level: "",
    about: "",

  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSelect=(e)=>{
    console.log(e.label)
    setData({
      ...data,
      [e.value] : e.label,
    })
  }
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
       {/* <PhotoPicker /> */}
       <form className="mt-2">
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


        <Input name="firstname" text="Имя" type="text" placeholder="Жанар" onChanged={handleChange}/>
        <Input name="lastname" text="Фамилия" type="text" placeholder="Маратова" onChanged={handleChange}/>
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
        <div className="flex justify-between">
          <label>Языки</label>
          <label className="mx-24">Уровень</label>
        </div>
        <Selector name="language" name1="level" data={languages} data1={level} onChanged={handleSelect} />
        <Selector data={languages} data1={level} onChanged={handleSelect}/>
        <Add text="Добавить язык" />
        <div className="mt-4">
          <label className="block text-lg font-medium text-gray-700"> О себе</label>
          <div className="mt-1">
            <textarea
              name="about"
              rows={3}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
              placeholder="О себе"
              onChange={handleChange}
            />
          </div>
        </div>
        <Button text="Сохранить изменения" />
      </div>
    </div>
  );
};

export default UserProfile;
