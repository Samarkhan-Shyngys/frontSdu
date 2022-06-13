import React, {useState, useEffect} from 'react';
import AddButton from '../AssistantProfile/AddButton';
import axios from "axios";
import {base_url} from "../../utils/request";
import { list } from 'postcss';

const datas = [
  {
    image: require("../../image/book4.png"),
    title: "Практика менеджмента",
    author: "Питер Друкар"
  },
  {
    image: require("../../image/book3.png"),
    title: "Практика менеджмента",
    author: "Питер Друкар"
  },
  {
    image: require("../../image/book2.png"),
    title: "Практика менеджмента",
    author: "Питер Друкар"
  }
]



const MyLibrary =()=>{
  const user = JSON.parse(localStorage.getItem("user"));
  let id = 0;
  if(user!==null){
    id= user.id
  }
  const [theArray, setTheArray] = useState([]);
  
  useEffect(()=>{
    axios.get( `${base_url}/api/assistant/get/books/${id}`)
    .then((result) => setTheArray(result.data.library)
    )
    .catch(((er)=>console.log(er)))
  }, []);  
  
  console.log('ls: ' + theArray.length);
  
    return(
    <div>
      <div className="flex justify-between border-b items-center pb-4">
        <h1 className="text-2xl font-semibol">Моя библиотека</h1>
        <AddButton text="Добавить книгу" link="/assistant/addbook"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-8">
        {theArray.map((data)=>(
            <div className='border text-center items-center p-4'>

              <img alt="book" src={base_url +data.url} className="items-self-center pl-10 h-64"/>
              <p className='text-text_main text-lg font-medium pt-2'>{data.title}</p>
              <p className='text-text_gary text-sm font-normal'>{data.author}</p>
            </div>
        ))}
      </div>
    </div>
    )

}

export default MyLibrary;