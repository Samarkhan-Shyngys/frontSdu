import {Route, Link, Routes, useParams} from 'react-router-dom';
import { base_url } from "../../utils/request";
import axios from "axios";
import React, { useState, useEffect } from "react";

export function Video(){
  const [item, setItems] = useState({});
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    axios
      .get(`${base_url}/api/admin/apply/video/${id}`)
      .then((result) => {
        if (result !== undefined) {
          setItems(result.data)
        
        }

        //  setStudents(item.students);
      })
      .catch((er) => console.log(er));
  }, []);
  console.log('personal ' + item)

    return(
        <div className="mb-[300px] mt-10">
            <h1  className="text-xl font-semibold text-text_main mb-4">Видео подтверждение</h1>
            <ul className="list-disc list-inside">
                <li>
                    <span>{item.video}</span>
                </li>
            </ul>
        </div>
    );
}