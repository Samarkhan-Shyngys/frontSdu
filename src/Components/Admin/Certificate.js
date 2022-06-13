import img from "../../image/img_course.png";
import {Route, Link, Routes, useParams} from 'react-router-dom';
import { base_url } from "../../utils/request";
import axios from "axios";
import React, { useState, useEffect } from "react";
const datas = [
    {
        title: "Профессия UX-дизайнер",
        company: "Skillbox",
        image: img
    },
    {
        title: "Основы создания мобильных приложений и сайтов",
        company: "Sketching company in design",
        image: img
    },
    {
        title: "Курс по интерактивному дизайну и анимации интерфейсов",
        company: "Breezzly company (Job Shadowing)",
        image: img
    }
]
export function Certificate(){
    const [item, setItems] = useState([]);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    axios
      .get(`${base_url}/api/admin/apply/certificate/${id}`)
      .then((result) => {
        if (result !== undefined) {
          setItems(result.data.items)
        
        }

        //  setStudents(item.students);
      })
      .catch((er) => console.log(er));
  }, []);

    console.log('certificate ' + item )
    return(
        <div className="mt-8 mb-32">
            <h1 className="text-xl font-semibold text-text_main mb-2">Сертификаты</h1>
            <ul className="list-disc space-y-3 font-normal mx-4">
                {
                    item && item.map((data)=>(
                        <li key={data.title}>
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="text-lg text-text_main">{data.title}</span>
                                <span className="text-base text-text_gray">{data.company}</span>
                            </div>
                            <img alt="c_img" src={base_url + data.image} className="h-8 w-10 rounded-md"/>
                        </div>
                    </li>

                    ))
                }
                
            </ul>
        </div>
    );
}