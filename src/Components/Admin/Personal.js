import image from "../../image/12.webp";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import { base_url } from "../../utils/request";
import axios from "axios";
import React, { useState, useEffect } from "react";




export function Personal() {
  const [item, setItems] = useState({});
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    axios
      .get(`${base_url}/api/admin/apply/personal/${id}`)
      .then((result) => {
        if (result !== undefined) {
          setItems(result.data)
        
        }

        //  setStudents(item.students);
      })
      .catch((er) => console.log(er));
  }, []);
  console.log('personal ' + item)
  return (
    <div className="mx-2">
      <div className="flex items-center space-x-3">
        <img alt="profile" src={image} className="w-16 h-16 rounded-full" />
        <div>
          <h1 className="text-base text-text_main font-medium">{item.fio}</h1>
          <p className="text-sm text-text_gray font-normal">{item.phone}</p>
          <p className="text-sm text-text_gray font-normal">{item.emailId}</p>
        </div>
      </div>
      <div className="mt-2">
        {/* <p className="leading-5 text-sm">
          Привет! Меня зовут Арман Болатов. 20+ лет в дизайне. Вместе со своей
          командой проектирую сайты и мобильные приложения для «МТС», «ВТБ»,
          «Сбера», «Госуслуг», «Азбуки вкуса», Simplewine, «Ашана», «Дом.рф»,
          «Мираторга» и других крупнейших компаний. В моей копилке уже несколько
          организованных и записанных авторских онлайн курсов, люблю помогать
          людям и делиться с ними знаниями.
        </p> */}
                <p className="leading-5 text-sm">
                  {item.about}
        </p>
      </div>
      <div className="">
        <h1 className="text-lg font-semibold text-text_main mb-1 mt-2">
          Образование
        </h1>
        <ul className="list-disc mx-4">
          <li>
            <div className="flex space-x-4">
              <p className="text-base text-text_gray font-normal">{item.courseId} курс</p>
              <div>
                {/* <p className="text-base text-text_main font-normal">Факультет инженерии и естественных наук</p>
                <p className="text-base text-text_gray font-normal">Информационная система</p> */}
                <p className="text-base text-text_main font-normal">{item.faculty}</p>
                <p className="text-base text-text_gray font-normal">{item.prof}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-lg font-semibold text-text_main mt-2">Языки</h1>
        <ul className="list-disc text-base font-normal mx-4">
        {item.langue && item.langue.map((data)=>(
          <li>
            <div className="flex space-x-5">
              <p className="text-text_gray">{data.level}</p>
              <p className=" text-text_main">{data.language}</p>
            </div>
          </li>
        ))}
          
        </ul>
      </div>
    </div>
  );
}
