import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import { XIcon } from "@heroicons/react/outline";
import { Link, Switch, Route, useHistory } from "react-router-dom";
import { Personal } from "./Personal";
import { Buttons } from "./Buttons";
import {Video} from "./Video";
import { Experience } from "./Experience";
import { Certificate } from "./Certificate";
import {base_url} from "../../utils/request";

import { ADMIN_APPLY, ADMIN_CONTENT } from "../../utils/consts";
async function addBooks(data, func){
  
  const data2 = new FormData();
  data2.append('id', data)
  data2.append('func', func)
  return fetch(`${base_url}/api/admin/apply/assistant`, {
    method: "POST",
    body: data2,
  }).then((response) => {
    return response;
  });
}
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 630,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StudentModal({id, handleClose }) {
  const history = useHistory();
  const handleAClick = async() => {
    const result =  await addBooks(index, true);
    console.log('result' + result)
    if(result.status===200){
      history.push(ADMIN_CONTENT);
    }
  }
  const handleCClick = async() => {
    const result = await  addBooks(index, false);
    if(result.status===200){
      history.push(ADMIN_APPLY);
    }
  }
 
  const [index, setIndex] = useState(0);
  const[stId, setStId] = useState(id);
  const handleClick=()=> handleClose();
  
  return (
    
    <div>
      <Modal
        open={id!==0}
        onClose={handleClose}
      >
        <Box sx={style}>
          <div className="justify-between">
            <div className="flex justify-between border-b mb-2">
              <h1 className="text-xl text-text_main font-bold">Анкета ассистента</h1>
              <XIcon className="h-6 w-6" onClick={handleClick}/>
            </div>
            <div className="flex justify-between mb-4">
              <Link to={`/admin/applications/personal/${id}`}>
                <h1 className={classNames(index===1 ? "bg-gray-100 px-2 rounded-md" : "", "text-lg text-text_main font-semibold")} onClick={()=>setIndex(1)}>Личные данные</h1>
              </Link>
              <Link to={`/admin/applications/experience/${id}`}>
                <h1 className={classNames(index===2 ? "bg-gray-100 px-2 rounded-md" : "", "text-lg text-text_main font-semibold")} onClick={()=>setIndex(2)}>Опыт работы</h1>
              </Link>
              <Link to={`/admin/applications/certificate/${id}`}>
                <h1 className={classNames(index===3 ? "bg-gray-100 px-2 rounded-md" : "", "text-lg text-text_main font-semibold")} onClick={()=>setIndex(3)}>Сертификаты</h1>
              </Link>
              <Link to={`/admin/applications/video/${id}`}>
                <h1 className={classNames(index===4 ? "bg-gray-100 px-2 rounded-md" : "", "text-lg text-text_main font-semibold")} onClick={()=>setIndex(4)}>Видео</h1>
              </Link>
            </div>
            <div>
              
            </div>
            
            <Switch>
              <Route path="/admin/applications/experience/:id" component={Experience} />
              <Route path="/admin/applications/certificate/:id" component={Certificate} />
              <Route path="/admin/applications/video/:id" component={Video} />
              <Route path="/admin/applications/personal/:id" component={Personal} />
            </Switch>
            {index!==0 && 
            <div className="space-y-2 mt-4 justify-self-end">
            <button onClick={handleAClick}
              className="w-full h-10 px-6 font-semibold rounded-md bg-text_main text-white"
              type="submit"
            >
              Принять
            </button>
            <button
            onClick={handleCClick}
              className=" w-full h-10 px-6 font-semibold rounded-md bg-white text-text_gray"
              type="submit"
            >
              Отменить
            </button>
          </div>}
            
          </div>
        </Box>
      </Modal>
    </div>
  );
}
