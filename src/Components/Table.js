import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const data = {
  day: "",
  hour: "",
};
const Table = () => {
  const disabled = false;
  const handleChange = (e) => {
    data.day = e.target.value;
    console.log(data.day);
    e.target.className = "w-14 h-10 border border-1 bg-gray-400";
  };
  return (
    <div className="space-y-4 bg-white mt-12">
        <div>
            <button className="py-1 font-semibold rounded-l-md border border-1 text-xl w-14" disabled={!disabled} onClick={handleChange}>Пн</button>
            <button className="text-xl font-semibold py-1 border border-1 w-14" disabled value="11" onClick={handleChange} >Вт</button>
            <button className="text-xl font-semibold py-1 border border-1 w-14" value="Ср" onClick={handleChange}>Ср</button>
            <button className="text-xl font-semibold py-1 border border-1 w-14" >Чт</button>
            <button className="text-xl font-semibold py-1 border border-1 w-14" >Пт</button>
            <button className="text-xl font-semibold py-1 border border-1 w-14" >Сб</button>
            <button className="text-xl font-semibold rounded-r-md py-1 border border-1 w-14" >Вс</button>
        </div>
        <div className="flex items-center ml-1">
            <SunIcon className="w-10 h-auto mr-3" />
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md">09:00-10:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 ">10:00-11:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md">11:00-12:00</button>
        </div>
        <div className="flex items-center ml-1">
            <SunIcon className="w-auto h-10 mr-3"/>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md">09:00-10:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28">10:00-11:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md">11:00-12:00</button>
        </div>
        <div className="flex items-center ml-1">
            <SunIcon className="w-10 h-auto mr-3"/>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md">12:00-13:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28">13:00-14:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md">14:00-15:00</button>
        </div>
        <div className="flex items-center ml-1">
            <MoonIcon className="w-10 h-auto mr-3"/>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md">15:00-16:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28">16:00-17:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md">17:00-18:00</button>
        </div>
        <div className="flex flex-col space-y-2">
            <button className="w-96 py-2 bg-red-700 text-white rounded-md">Записаться</button>
            <button className="w-96 py-2 bg-white text-red-700 border-red-700 border-2 rounded-md">Сообщение</button>
        </div>
    </div>

  
  );
};

export default Table;
