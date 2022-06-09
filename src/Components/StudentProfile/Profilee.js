import React, { useState, useEffect } from "react";
import PhotoPicker from "../PhotoPicker";
import Input from "../Input";
import Button from "../AssistantProfile/Button";
import { PlusIcon } from "@heroicons/react/outline";
import {base_url} from "../../utils/request";
import { data } from "autoprefixer";
import axios from "axios";

async function editProfile(credentials) {
  const data2 = new FormData();
  data2.append('firstname', credentials.firstname)
  data2.append('lastname', credentials.lastname)
  data2.append('email', credentials.email)
  data2.append('faculty', credentials.faculty)
  data2.append('profession', credentials.profession)
  data2.append('phone', credentials.phone)
  console.log("cred:", credentials)
  if(credentials.photo!="null"){
    console.log("sssss", credentials.photo );
    data2.append('file', credentials.photo)
  }
  

  return fetch(`${base_url}/api/student/edit/profile`, {
    method: "POST",
    body: data2,
  }).then((response) => {
    return response;
  });
}



const Profilee = () => {
  
  const user = JSON.parse(localStorage.getItem("user"));
  const id = 1;
  const [preview, setPreview] = useState(require("../../image/12.webp"));
  const [data, setData] = useState({
    photo: "null",
    firstname: "",
    lastname: "",
    email: "",
    faculty: "",
    profession: "",
    phone: "",
  });

  useEffect(async () => {
    if (id !== "") {
      const result = await axios(base_url+
        '/api/student/profile/'+id
      );
      const profile = JSON.parse(JSON.stringify(result.data));
      console.log(profile.firstname);

      setData({
        ...data,
        ["email"]: user.email,
        ["firstname"]: profile.firstname,
        ["lastname"]: profile.lastname,
        ["faculty"]: profile.faculty,
        ["profession"]: profile.profession,
        ["phone"]: profile.phone,
  
      });
    }
    
  }, []);

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
      console.log("ssss",file)
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        setPreview(e.target.result);
        setData({
          ...data,
          ["photo"]: file,
        });
      };
    }

  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data)
    const token = await editProfile(data);
    if (token.status === 200) {
      token.json().then((json) => {
        console.log(json);
        
        
      });
    }
  };
  console.log(data);
  return (
    <div className="w-2/3">
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
              accept="im age/*"
              className="hidden"
              onChange={handleImage}
            />
          </label>
        </form>
        <Input
          name="firstname"
          text="Имя"
          type="text"
          value={data.firstname}
          placeholder={data.firstname!=""?data.firstname:"Введите ваше имя"}
          onChanged={handleChange}
        />
        <Input
          name="lastname"
          text="Фамилия"
          type="text"
          value={data.lastname}
          placeholder="Введите вашу фамилию"
          onChanged={handleChange}
        />
        <Input
          name="email"
          text="SDU-почта"
          type="text"
          value={data.email}
          placeholder={data.email}
          onChanged={handleChange}
        />
        <Input
          name="faculty"
          text="Факультет"
          type="text"
          value={data.faculty}
          placeholder="Инженерии и естественных наук"
          onChanged={handleChange}
        />
        <Input
          name="profession"
          text="Специализация"
          type="text"
          value={data.profession}
          placeholder="Информационная система"
          onChanged={handleChange}
        />
        <Input
          name="phone"
          text="Номер телефона"
          type="text"
          value={data.phone}
          placeholder="+7 (701) 123 45-67"
          onChanged={handleChange}
        />

        <div className="mt-8">
        <button type="submit"
                    onClick={handleSubmit} className="w-full py-2 bg-white border rounded-md border-gray-800 font-medium text-xl">
            {"Сохранить изменения"}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Profilee;
