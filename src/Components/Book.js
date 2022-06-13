import { HeartIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import {base_url} from "../utils/request";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  async function likeBook(credentials,bookId, id) {
    console.log('book id ' + bookId)
    const data2 = new FormData();
    data2.append('liked', credentials)
    data2.append('id', bookId)
   
    return fetch(`${base_url}/api/student/like/book/${id}`, {
      method: "POST",
      body: data2,
    }).then((response) => {
      return response;
    });
  }

export default function Book({data}){
    console.log(data)
    const user = JSON.parse(localStorage.getItem("user"));
    let id = 0;
    if(user!==null){
        id= user.id
    }
    const [liked, setLiked] = useState(data.liked)
    const onSubmit = async(e) =>{
        setLiked(!liked); 
        likeBook(!liked, data.id,  id)
        // axios.post(`${base_url}/api/assistant/get/course/${id}`, data)
        // const token =  await addCourses(data);
        // if (token.status === 200) {
        //   history.push(ASSISTANT_COURSE);
          
        // }
      };
    return(
        <div className="">
            <div className="w-full bg-white border rounded-md border-gray-200 mt-8">
                <div className="relative items-center pt-4">
                    <img src={base_url + data.url} className="w-52 mx-auto" style={{ height: 170 }} />
                    <button onClick={()=>onSubmit(liked)}>
                    <HeartIcon className={classNames(liked ? "text-red-600" : "", "absolute top-6 right-2 w-8 h-8 bg-gray-600/30 rounded-full p-2 text-white fill-current")} onClick={()=>setLiked(!liked)}/>
                    </button>
                </div>
                <div className="space-y-1 text-center">
                    <h1 className="text-xl font-bold mt-2">{data.title}</h1>
                    <p className="text-lg text-gray-400">{data.author}</p>
                </div>
                <button className="w-[calc(100%-20px)] mx-2 text-xl py-2 text-white bg-cyan-700 rounded-md my-4">Скачать</button>
            </div>

        </div>
    )
}