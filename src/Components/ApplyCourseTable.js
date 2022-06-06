import React, {useState} from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";
const data = {
  Monday: [],
  Tuesday: [],
  Wednesday: [],
  Thursday: [],
  Friday: [],
  Saturday: [],
  Sunday: []
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ApplyCourseTable = () => {
  const [currentDay, setCurrentDay] = useState();

  function handleDay(e){
    e.preventDefault();
    setCurrentDay(e.target.value);

  }
  function arrayRemove(arr, value) { 
    
    var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

  function handleHour(e){
    switch(currentDay){
      case "Monday" :
        data.Monday.includes(e.target.value) ? arrayRemove(data.Monday, e.target.value) : data.Monday.push(e.target.value);
        break
      case "Tuesday" :
        data.Tuesday.includes(e.target.value) ? arrayRemove(data.Tuesday, e.target.value) : data.Tuesday.push(e.target.value);
        break
      case "Wednesday" :
        data.Wednesday.includes(e.target.value) ? arrayRemove(data.Wednesday, e.target.value) : data.Wednesday.push(e.target.value);
          break
      case "Thursday" :
        data.Thursday.includes(e.target.value) ? arrayRemove(data.Thursday, e.target.value) : data.Thursday.push(e.target.value);
          break
      case "Friday" :
        data.Friday.includes(e.target.value) ? arrayRemove(data.Friday, e.target.value) : data.Friday.push(e.target.value);
          break
      case "Saturday" :
          data.Saturday.includes(e.target.value) ? arrayRemove(data.Saturday, e.target.value) : data.Saturday.push(e.target.value);
          break
      case "Sunday" :
        data.Sunday.includes(e.target.value) ? arrayRemove(data.Sunday, e.target.value) : data.Sunday.push(e.target.value);
          break
      default: break
      }

  


  }
  function handleSubmit(){
    console.log(data)
  }
  const ClassName = "py-1 border border-1 text-xl w-14";
  return (
    <div className="space-y-4 bg-white mt-12">
        <div>
            <button  className={classNames(currentDay==="Monday" ?  "font-bold" : "font-semilbold" , ClassName, "rounded-l-md")} value="Monday" disabled={data.Monday.length===0}  onClick={handleDay}>Пн</button>
            <button className={classNames(currentDay==="Tuesday" ?  "font-bold" : "font-semilbold",  ClassName)} value="Tuesday" onClick={handleDay} >Вт</button>
            <button className={classNames(currentDay==="Wednesday" ? "font-bold" : "font-semilbold" , ClassName)} value="Wednesday" onClick={handleDay}>Ср</button>
            <button className={classNames(currentDay==="Thursday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Thursday" onClick={handleDay}>Чт</button>
            <button className={classNames(currentDay==="Friday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Friday" onClick={handleDay}>Пт</button>
            <button  className={classNames(currentDay==="Saturday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Saturday" onClick={handleDay}>Сб</button>
            <button  className={classNames(currentDay==="Sunday" ?  "font-bold" : "font-semilbold" , ClassName, "rounded-r-md")} value="Sunday" onClick={handleDay} >Вс</button>
        </div>
        <div className="flex items-center ml-1">
            <SunIcon className="w-10 h-auto mr-3" />
            <button  className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md" value="09:00-10:00" onClick={handleHour}>09:00-10:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 " value="10:00-11:00" onClick={handleHour}>10:00-11:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md" value="11:00-12:00" onClick={handleHour}>11:00-12:00</button>
        </div>
        <div className="flex items-center ml-1">
            <SunIcon className="w-auto h-10 mr-3"/>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md" value="12:00-13:00" onClick={handleHour}>12:00-13:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28" value="13:00-14:00" onClick={handleHour}>13:00-14:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md" value="14:00-15:00" onClick={handleHour}>14:00-15:00</button>
        </div>
        <div className="flex items-center ml-1">
            <SunIcon className="w-10 h-auto mr-3"/>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md" value="15:00-16:00" onClick={handleHour}>15:00-16:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28" value="16:00-17:00" onClick={handleHour}>16:00-17:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md" value="17:00-18:00" onClick={handleHour}>17:00-18:00</button>
        </div>
        <div className="flex items-center ml-1">
            <MoonIcon className="w-10 h-auto mr-3"/>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md" value="18:00-19:00" onClick={handleHour}>18:00-19:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28" value="19:00-20:00" onClick={handleHour}>19:00-20:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md" value="20:00-21:00" onClick={handleHour}>20:00-21:00</button>
        </div>
        <div className="flex flex-col space-y-2">
            <button className="w-96 py-2 bg-red-700 text-white rounded-md" onClick={handleSubmit}>Записаться</button>
            <button className="w-96 py-2 bg-white text-red-700 border-red-700 border-2 rounded-md">Сообщение</button>
        </div>
    </div>

  
  );
};

export default ApplyCourseTable;
