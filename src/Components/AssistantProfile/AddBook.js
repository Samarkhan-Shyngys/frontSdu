import React, { useState } from "react";
import PhotoPicker from "../PhotoPicker";
import Input from "../Input";
import { PencilIcon, UploadIcon} from "@heroicons/react/outline";
const AddBook = () => {
  const [data, setData] = useState({
    photo: "",
    title: "",
    author: "",
    file: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const [image, setImage] = useState("");
  function handleImage(e) {
    if (window.FileReader) {
      var file = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setImage(e.target.result);
        setData({
          ...data,
          ["photo"]: e.target.result,
        });
      };
    }
}
console.log(data);
 const {link} = data;
 const fileName = link ? 
        (<span>{link}</span>)
        : (<span></span>);
  return (
    <form className="w-2/3">
      <h1>Миниатюра книги</h1>
      <p>Выберите подходящее фото книги</p>
      {/* <PhotoPicker preview={image} onChanged={handleImage}/> */}
      <label>
        <img src={image} className="w-48 h-32 bg-gray-300 rounded-md" alt="" />
        <PencilIcon className="absolute z-10 h-6 w-6 ml-36 -mt-28  bg-gray-600/40 rounded-full text-white" />
        <input
          name="photo"
          type="file"
          accept=".jpeg, .png, .jpg"
          className="hidden"
          onChange={handleImage}
        />
      </label>
      <Input
        name="title"
        text="Название книги"
        placeholder="Практика менеджмента|"
        type="text"
        onChanged={handleChange}
      />
      <Input
        name="author"
        text="Автор книги"
        placeholder="Маратова"
        type="text"
        onChanged={handleChange}
      />
      <div className="flex flex-col">

      <label>Файл</label>
      <label className="w-full py-2 bg-white border rounded-md border-gray-800 font-medium">
        <input name="link" type="file" className="hidden" onChange={handleChange}/>
        <div className="flex flex-row justify-between">
            <span>{fileName}</span>
            <UploadIcon className="h-6 w-6 right-0 ml-full"/>
        </div>
      </label>
      </div>
      <input type="submit" value="Добавить" className="border border-gray-800 w-full py-2 mt-8 rounded-md"/>
    </form>
  );
};

export default AddBook;
