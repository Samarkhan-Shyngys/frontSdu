import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Modal } from "@mui/material";
import { XIcon } from "@heroicons/react/outline";
import { Link, Switch, Route } from "react-router-dom";
import { Personal } from "./Personal";
import { Buttons } from "./Buttons";
import {Video} from "./Video";
import { Experience } from "./Experience";
import { Certificate } from "./Certificate";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function StudentModal({ showModal, handleClose }) {
  const [index, setIndex] = useState(0);
  const handleClick=()=> handleClose();
  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="flex justify-between border-b mb-2">
              <h1 className="text-xl text-text_main font-bold">Анкета ассистента</h1>
              <XIcon className="h-6 w-6" onClick={handleClick}/>
            </div>
            <div className="flex justify-between mb-4">
              <Link to="/admin/applications/personal">
                <h1 className={classNames(index===0 ? "bg-gray-100 px-2 rounded-md" : "", "text-lg text-text_main font-semibold")} onClick={()=>setIndex(0)}>Личные данные</h1>
              </Link>
              <Link to="/admin/applications/experience">
                <h1 className={classNames(index===1 ? "bg-gray-100 px-2 rounded-md" : "", "text-lg text-text_main font-semibold")} onClick={()=>setIndex(1)}>Опыт работы</h1>
              </Link>
              <Link to="/admin/applications/certificate">
                <h1 className={classNames(index===2 ? "bg-gray-100 px-2 rounded-md" : "", "text-lg text-text_main font-semibold")} onClick={()=>setIndex(2)}>Сертификаты</h1>
              </Link>
              <Link to="/admin/applications/video">
                <h1 className={classNames(index===3 ? "bg-gray-100 px-2 rounded-md" : "", "text-lg text-text_main font-semibold")} onClick={()=>setIndex(3)}>Видео</h1>
              </Link>
            </div>
            <div>
              
            </div>
            <Switch>
              <Route path="/admin/applications/experience" component={Experience} />
              <Route path="/admin/applications/certificate" component={Certificate} />
              <Route path="/admin/applications/video" component={Video} />
              <Route path="/admin/applications" component={Personal} />
            </Switch>
          <Buttons />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
