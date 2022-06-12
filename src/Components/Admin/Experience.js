import {Route, Link, Routes, useParams} from 'react-router-dom';
import { base_url } from "../../utils/request";
import axios from "axios";
import React, { useState, useEffect } from "react";
const datas = [
  {
    duration: "2018 (ноябрь)- 2022 (декабрь)",
    work: "UX/UI Designer",
    about: "Дизайн студио Восточной Флориды - Мельбурн, Флорида"
  },
  {
    duration: "2018 (ноябрь)- 2022 (декабрь)",
    work: "UX/UI Designer",
    about: "Образовательная ассоциация Netherhall -Хэмпстед, Лондон, Великобритания"
  },
  {
    duration: "2018 (ноябрь)- 2022 (декабрь)",
    work: "UX/UI Designer",
    about: "Образовательная ассоциация Netherhall -Хэмпстед, Лондон, Великобритания"
  },
]

export function Experience() {
  const [item, setItems] = useState([]);
  const params = useParams();
  const courseId = params.id;
  useEffect(() => {
    axios
      .get(`${base_url}/api/admin/apply/experience/${courseId}`)
      .then((result) => {
        if (result !== undefined) {
          setItems(result.data.items)
        
        }

        //  setStudents(item.students);
      })
      .catch((er) => console.log(er));
  }, []);


  console.log('idd ' + item)
  return (
    <div className="mt-6 mb-24">
      <h1 className="text-xl font-semibold text-text_main mb-2">Опыт работы</h1>
      <ul className="list-disc space-y-2 font-normal text-base mx-4">
        {item && item.map((data)=>(
           <li key={data.about}>
           <div className="grid grid-cols-[120px,1fr] gap-10">
             <div>
               <h1 className="text-text_gray">{data.duration}</h1>
             </div>
             <div className="flex flex-col">
               <span className="text-text_main font-medium">{data.work}</span>
               <span className="text-text_gray">{data.about}</span>
             </div>
           </div>
         </li>

        ))}
        
        
      </ul>
    </div>
  );
}
