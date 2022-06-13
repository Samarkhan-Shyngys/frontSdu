import { Title } from "./Title";
import Empty from "../Empty";
import Book from "../Book";
import image from "../../image/book1.png";
import axios from "axios";
import {base_url} from "../../utils/request";
import React, {useState, useEffect} from 'react';
const books = [
  {
    id: "1",
    image: image,
    title: "Практика менеджмента",
    author: "Питер Друкер",
    liked: true
  },
];
export function MyBooks() {
  const user = JSON.parse(localStorage.getItem("user"));
  let id = 0;
  if(user!==null){
    id= user.id
  }
  const [theArray, setTheArray] = useState([]);
  
  useEffect(()=>{
    axios.get( `${base_url}/api/student/get/books/${id}`)
    .then((result) => setTheArray(result.data.library)
    )
    .catch(((er)=>console.log(er)))
  }, []);  
  console.log('student book ' + theArray)
  return (
    <div className="w-full">
      <Title text="Мои книги" />
      {books ? (
        <div className="grid grid-cols-3">
          {theArray.map((book) => (
            <Book key={book.id} data={book} />
          ))}
        </div>
      ) : (
        <Empty
          title="У вас пока нет сохраненных Книг"
          subtitle="Добавьте и скачивайте рекомендованные книги от ассистентов, это позволит вам узнать больше информаци  "
        />
      )}
    </div>
  );
}
