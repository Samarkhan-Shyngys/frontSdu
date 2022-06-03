import React from 'react';
import AddButton from '../AssistantProfile/AddButton';
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
    return(
    <div>
      <div className="flex justify-between border-b items-center pb-4">
        <h1 className="text-2xl font-semibol">Моя библиотека</h1>
        <AddButton  link="/assistantt/addbook"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 gap-8">
        {datas.map((data)=>(
            <div className='border text-center items-center p-4'>
              <img alt="book" src={data.image} className="items-self-center pl-10 h-64"/>
              <p>{data.title}</p>
              <p>{data.author}</p>

            </div>
        ))}
      </div>
    </div>
    )

}

export default MyLibrary;