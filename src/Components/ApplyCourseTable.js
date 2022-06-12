import React, {useState, useEffect} from "react";
import axios from "axios";
import {base_url} from "../utils/request";
import {Route, Link, Routes, useParams} from 'react-router-dom';

const data = {
  Monday: ["10:00-11:00", "09:00-10:00"],
  Tuesday: [ "09:00-10:00"],
  Wednesday: [ "14:00-15:00"],
  Thursday: [ "17:00-18:00"],
  Friday: [ "18:00-19:00"],
  Saturday: [ "12:00-13:00", "17:00-18:00"],
  Sunday: []
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ApplyCourseTable = () => {
  const [theTables, setTheTables] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });
  const [currentDay, setCurrentDay] = useState("Monday");
  const params = useParams();
const courseId = params.id;
useEffect(async () => {
  if (courseId !== "") {
    const result = await axios(base_url+
      '/api/main/get/times/'+courseId
    );
    const timetable = JSON.parse(JSON.stringify(result.data));
    setTheTables({
      ...theTables,
      ["Monday"]:timetable.monday,
      ["Tuesday"]:timetable.tuesday,
      ["Wednesday"]:timetable.wednesday,
      ["Thursday"]:timetable.thursday,
      ["Friday"]:timetable.friday,
      ["Saturday"]:timetable.saturday,
      ["Sunday"]:timetable.sunday,
      
    }

    )
    
   
  }
  
  
}, []);
console.log('log ingo ' + theTables.Monday);
console.log('log ingo2 ' + data.Monday);
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
        theTables.Monday.includes(e.target.value) ? arrayRemove(theTables.Monday, e.target.value) : theTables.Monday.push(e.target.value);
        break
      case "Tuesday" :
        theTables.Tuesday.includes(e.target.value) ? arrayRemove(theTables.Tuesday, e.target.value) : theTables.Tuesday.push(e.target.value);
        break
      case "Wednesday" :
        theTables.Wednesday.includes(e.target.value) ? arrayRemove(theTables.Wednesday, e.target.value) : theTables.Wednesday.push(e.target.value);
          break
      case "Thursday" :
        theTables.Thursday.includes(e.target.value) ? arrayRemove(theTables.Thursday, e.target.value) : theTables.Thursday.push(e.target.value);
          break
      case "Friday" :
        theTables.Friday.includes(e.target.value) ? arrayRemove(theTables.Friday, e.target.value) : theTables.Friday.push(e.target.value);
          break
      case "Saturday" :
        theTables.Saturday.includes(e.target.value) ? arrayRemove(theTables.Saturday, e.target.value) : theTables.Saturday.push(e.target.value);
          break
      case "Sunday" :
        theTables.Sunday.includes(e.target.value) ? arrayRemove(theTables.Sunday, e.target.value) : theTables.Sunday.push(e.target.value);
          break
      default: break
      }
  }
  function handleSubmit(){
    console.log(theTables)
  }
  const ClassName = "py-1 border border-1 text-xl w-14 text-text_main disabled:opacity-50";

  function disableHour(time){
    switch(currentDay){
      case "Monday":
        return(theTables.Monday.includes(time))
      case "Tuesday":
        return(theTables.Tuesday.includes(time))
      case "Wednesday":
        return(theTables.Wednesday.includes(time))
      case "Thursday":
        return(theTables.Thursday.includes(time))
      case "Friday":
        return(theTables.Friday.includes(time))
      case "Saturday":
        return(theTables.Saturday.includes(time))
      case "Sunday":
        return(theTables.Sunday.includes(time))
      default: break
    }

  }
  return (
    <div className="space-y-4 bg-white mt-12 text-text_main" >
        <div>
            <button  className={classNames(currentDay==="Monday" ?  "font-bold" : "font-semilbold" , ClassName, "rounded-l-md")} value="Monday" disabled={theTables.Monday.length===0}  onClick={handleDay}>Пн</button>
            <button className={classNames(currentDay==="Tuesday" ?  "font-bold" : "font-semilbold",  ClassName)} value="Tuesday" onClick={handleDay} disabled={theTables.Tuesday.length===0}>Вт</button>
            <button className={classNames(currentDay==="Wednesday" ? "font-bold" : "font-semilbold" , ClassName)} value="Wednesday" onClick={handleDay} disabled={theTables.Wednesday.length===0}>Ср</button>
            <button className={classNames(currentDay==="Thursday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Thursday" onClick={handleDay} disabled={theTables.Thursday.length===0}>Чт</button>
            <button className={classNames(currentDay==="Friday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Friday" onClick={handleDay} disabled={theTables.Friday.length===0}>Пт</button>
            <button  className={classNames(currentDay==="Saturday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Saturday" onClick={handleDay} disabled={theTables.Saturday.length===0}>Сб</button>
            <button  className={classNames(currentDay==="Sunday" ?  "font-bold" : "font-semilbold" , ClassName, "rounded-r-md")} value="Sunday" onClick={handleDay} disabled={theTables.Sunday.length===0} >Вс</button>
        </div>
        <div className="flex items-center ml-1">
            <img alt="sun1" src={require("../image/sun1.png")} className="h-10 w-10 mr-3" />
            <button  className="disabled:opacity-50 text-base font-semibold border border-1 py-2 w-28 rounded-l-md text-text_main hover:bg-slate-200" disabled={!disableHour('09:00-10:00')} value="09:00-10:00" onClick={handleHour}>09:00-10:00</button>
            <button className="disabled:opacity-50 text-base font-semibold border border-1 py-2 w-28 text-text_main hover:bg-slate-200" disabled={!disableHour('10:00-11:00')} value="10:00-11:00" onClick={handleHour}>10:00-11:00</button>
            <button className="disabled:opacity-50 text-base font-semibold border border-1 py-2 w-28 rounded-r-md text-text_main hover:bg-slate-200" disabled={!disableHour('11:00-12:00')} value="11:00-12:00" onClick={handleHour}>11:00-12:00</button>
        </div>
        <div className="flex items-center ml-1">
            <img alt="sun2" src={require("../image/sun2.png")} className="h-10 w-10 mr-3" />
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md text-text_main disabled:opacity-50 hover:bg-slate-200" value="12:00-13:00" onClick={handleHour} disabled={!disableHour('12:00-13:00')}>12:00-13:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 text-text_main disabled:opacity-50 hover:bg-slate-200" value="13:00-14:00" onClick={handleHour} disabled={!disableHour('13:00-14:00')}>13:00-14:00</button>
            <button className="disabled:opacity-50 text-base font-semibold border border-1 py-2 w-28 rounded-r-md text-text_main hover:bg-slate-200" value="14:00-15:00" onClick={handleHour} disabled={!disableHour('14:00-15:00')}>14:00-15:00</button>
        </div>
        <div className="flex items-center ml-1">
            <img alt="sun3" src={require("../image/sun3.png")} className="h-10 w-10 mr-3" />
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md text-text_main disabled:opacity-50 hover:bg-slate-200" value="15:00-16:00" onClick={handleHour} disabled={!disableHour('15:00-16:00')}>15:00-16:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 text-text_main disabled:opacity-50 hover:bg-slate-200" value="16:00-17:00" onClick={handleHour} disabled={!disableHour('16:00-17:00')}>16:00-17:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md text-text_main disabled:opacity-50 hover:bg-slate-200" value="17:00-18:00" onClick={handleHour} disabled={!disableHour('17:00-18:00')}>17:00-18:00</button>
        </div>
        <div className="flex items-center ml-1">
            <img alt="sun4" src={require("../image/sun4.png")} className="h-10 w-10 mr-3" />
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-l-md text-text_main disabled:opacity-50 hover:bg-slate-200" value="18:00-19:00" onClick={handleHour} disabled={!disableHour('18:00-19:00')}>18:00-19:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 text-text_main disabled:opacity-50 hover:bg-slate-200" value="19:00-20:00" onClick={handleHour} disabled={!disableHour('19:00-20:00')}>19:00-20:00</button>
            <button className="text-base font-semibold border border-1 py-2 w-28 rounded-r-md text-text_main disabled:opacity-50 hover:bg-slate-200" value="20:00-21:00" onClick={handleHour} disabled={!disableHour('20:00-21:00')}>20:00-21:00</button>
        </div>
        <div className="flex flex-col space-y-2">
            <button className="w-96 py-2 bg-red-700 text-white rounded-md" onClick={handleSubmit}>Записаться</button>
            <button className="w-96 py-2 bg-white text-red-700 border-red-700 border-2 rounded-md">Сообщение</button>
        </div>
    </div>

  
  );
};

export default ApplyCourseTable;
