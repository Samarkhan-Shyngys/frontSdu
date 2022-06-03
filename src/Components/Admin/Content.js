import React,{ useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import { Table } from "./Table";
import {base_url} from "../../utils/request";
import axios from 'axios';
const rows = [
  {
    id: 1,
    emailID: "180103247",
    name: "Мадина Мухамеджанова",
    faculty: "Инженерии и Естественных наук",
    profession: "Информационная система",
    phone: "+7 (702) 123 45-67",
    icon: "",
  },
  {
    id: 2,
    emailID: "180103247",
    name: "Болат Жанболатов",
    faculty: "Бизнес школа",
    profession: "Диджитал маркетинг",
    phone: "+7 (702) 123 45-67",
    icon: "",
  },
];
const row = [
  {
    id: 1,
    emailID: "180103247",
    name: "Мадина Мухамеджанова",
    faculty: "Инженерии и Естественных наук",
    profession: "Информационная система",
    phone: "+7 (702) 123 45-67",
    icon: "",
  },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export function Content() {
  const [item, setItems] = useState();
  const [students, setStudents] = useState([]);
  
  useEffect(()=>{
    axios.get( `${base_url}/api/admin/contents`)
    .then((result) =>{
      if(result!==undefined){
        setItems(result.data);
      }
      
       
      
      //  setStudents(item.students);
    } 
    )
    .catch(((er)=>console.log(er)))
  }, []);
  
 
  const [cur_item, setItem] = useState(0);
  return (
    <div className="px-12 mt-10">
      <h1 className="text-2xl text-text_main font-medium mb-4">Пользователи</h1>
      <div className="flex space-x-4 mb-2">
        <Link to="/admin/content/assistant">
          <h1 className={classNames(cur_item===0 ? "bg-gray-100 rounded-md px-3" : "", "text-lg font-medium text-text_main"
                  )}  onClick={() => setItem(0)}>Ассистенты</h1>
        </Link>
        <Link to="/admin/content/student" onClick={() => setItem(1)}>
          <h1  className={classNames(
                    cur_item===1 ? "bg-gray-100 rounded-md px-3" : "", "text-lg font-medium text-text_main"
                  )}>Студенты</h1>
         
        </Link>
      </div>
      <Switch>
        <Route path="/admin/content/student">
        
          {
            item!==undefined && <Table data={item.students} />
          }
          
        </Route>

        {/* <Route path="/admin/content">
          {
            item!==undefined && <Table data={item.assistents}/>
          } */}
        
        <Route path="/admin">
          <Table data={rows} />

        </Route>
      </Switch>
    </div>
  );
}
