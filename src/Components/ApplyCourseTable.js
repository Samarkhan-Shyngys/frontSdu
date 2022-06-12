import React, {useState, useEffect} from "react";
import axios from "axios";
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
  const [currentDay, setCurrentDay] = useState("Monday");
  const [currentHour, setCurrentHour] = useState("");
  const [fetchedData, setData] = useState(
    {
      Monday: ["10:00-11:00", "09:00-10:00"],
      Wednesday:["14:00-15:00"]
    })
  // useEffect(()=>{
  //     axios.get('https://jsonplaceholder.typicode.com/posts').then((result)=>setData(result))

  // }, [])

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
        if(data.Monday.includes(e.target.value)){
          arrayRemove(data.Monday, e.target.value)
          setCurrentHour(null)
        }else{
          data.Monday.push(e.target.value)
          setCurrentHour(e.target.value)

        }
        break
      case "Tuesday" :
        if(data.Tuesday.includes(e.target.value)){
          arrayRemove(data.Tuesday, e.target.value)
          setCurrentHour(null)
        }else{
          data.Tuesday.push(e.target.value)
          setCurrentHour(e.target.value)

        }
        break
      case "Wednesday" :
        if(data.Wednesday.includes(e.target.value)){
          arrayRemove(data.Wednesday, e.target.value)
          setCurrentHour(null)
        }else{
          data.Wednesday.push(e.target.value)
          setCurrentHour(e.target.value)
        }
          break
      case "Thursday" :
        if(data.Thursday.includes(e.target.value)){
          arrayRemove(data.Thursday, e.target.value)
          setCurrentHour(null)
        }else{
          data.Thursday.push(e.target.value)
          setCurrentHour(e.target.value)
        }
          break
      case "Friday" :
        if(data.Friday.includes(e.target.value)){
          arrayRemove(data.Friday, e.target.value)
          setCurrentHour(null)
        }else{
          data.Friday.push(e.target.value)
          setCurrentHour(e.target.value)
        }
          break
      case "Saturday" :
        if(data.Saturday.includes(e.target.value)){
          arrayRemove(data.Saturday, e.target.value)
          setCurrentHour(null)
        }else{
          data.Saturday.push(e.target.value)
          setCurrentHour(e.target.value)
        }
          break
      case "Sunday" :
        if(data.Sunday.includes(e.target.value)){
          arrayRemove(data.Sunday, e.target.value)
          setCurrentHour(null)
        }else{
          data.Sunday.push(e.target.value)
          setCurrentHour(e.target.value)
        }
          break
      default: break
      }
  }
  function handleSubmit(){
    console.log(data)
  }
  const ClassName = "py-1 border border-1 text-xl w-14 text-text_main disabled:opacity-50";

  function disableHour(time){
    switch(currentDay){
      case "Monday":
        return(fetchedData?.Monday?.includes(time))
      case "Tuesday":
        return(fetchedData?.Tuesday?.includes(time))
      case "Wednesday":
        return(fetchedData?.Wednesday?.includes(time))
      case "Thursday":
        return(fetchedData?.Thursday?.includes(time))
      case "Friday":
        return(fetchedData?.Friday?.includes(time))
      case "Saturday":
        return(fetchedData?.Saturday?.includes(time))
      case "Sunday":
        return(fetchedData.Sunday?.includes(time))
      default: break
    }
  }
    function Selected(time){
      switch(currentDay){
        case "Monday":
          return(data.Monday.includes(time))
        case "Tuesday":
          return(data.Tuesday.includes(time))
        case "Wednesday":
          return(data.Wednesday.includes(time))
        case "Thursday":
          return(data.Thursday.includes(time))
        case "Friday":
          return(data.Friday.includes(time))
        case "Saturday":
          return(data.Saturday.includes(time))
        case "Sunday":
          return(data.Sunday.includes(time))
        default: break
      }
  }
  return (
    <div className="space-y-4 bg-white mt-12 text-text_main" >
        <div>
            <button  className={classNames(currentDay==="Monday" ?  "font-bold" : "font-semilbold" , ClassName, "rounded-l-md")} value="Monday" disabled={fetchedData?.Monday?.length===0}  onClick={handleDay}>Пн</button>
            <button className={classNames(currentDay==="Tuesday" ?  "font-bold" : "font-semilbold",  ClassName)} value="Tuesday" onClick={handleDay} disabled={fetchedData?.Tuesday?.length===0}>Вт</button>
            <button className={classNames(currentDay==="Wednesday" ? "font-bold" : "font-semilbold" , ClassName)} value="Wednesday" onClick={handleDay} disabled={fetchedData?.Wednesday?.length===0}>Ср</button>
            <button className={classNames(currentDay==="Thursday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Thursday" onClick={handleDay} disabled={fetchedData?.Thursday?.length===0}>Чт</button>
            <button className={classNames(currentDay==="Friday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Friday" onClick={handleDay} disabled={fetchedData?.Friday?.length===0}>Пт</button>
            <button  className={classNames(currentDay==="Saturday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Saturday" onClick={handleDay} disabled={fetchedData?.Saturday?.length===0}>Сб</button>
            <button  className={classNames(currentDay==="Sunday" ?  "font-bold" : "font-semilbold" , ClassName, "rounded-r-md")} value="Sunday" onClick={handleDay} disabled={fetchedData?.Sunday?.length===0} >Вс</button>
        </div>
        <div className="flex items-center ml-1">
            <img alt="sun1" src={require("../image/sun1.png")} className="h-10 w-10 mr-3" />
            <button  className={classNames(Selected("09:00-10:00") ? "bg-red-800 text-white" : "" ,"disabled:opacity-50 text-base font-semibold border border-1 py-2 w-28 rounded-l-md text-text_main hover:bg-slate-200")} disabled={!disableHour('09:00-10:00')} value="09:00-10:00" onClick={handleHour}>09:00-10:00</button>
            <button className={classNames(Selected("10:00-11:00") ? "bg-red-800 text-white" : "bg-white" ,"disabled:opacity-50 text-base font-semibold border border-1 py-2 w-28 text-text_main hover:bg-slate-200")} disabled={!disableHour('10:00-11:00')} value="10:00-11:00" onClick={handleHour}>10:00-11:00</button>
            <button className={classNames(Selected("11:00-12:00") ? "bg-red-800 text-white" : "" ,"disabled:opacity-50 text-base font-semibold border border-1 py-2 w-28 rounded-r-md text-text_main hover:bg-slate-200")} disabled={!disableHour('11:00-12:00')} value="11:00-12:00" onClick={handleHour}>11:00-12:00</button>
        </div>
        <div className="flex items-center ml-1">
            <img alt="sun2" src={require("../image/sun2.png")} className="h-10 w-10 mr-3" />
            <button className={classNames(Selected("12:00-13:00") ? "bg-red-800 text-white" : "" ,"text-base font-semibold border border-1 py-2 w-28 rounded-l-md text-text_main disabled:opacity-50 hover:bg-slate-200")} value="12:00-13:00" onClick={handleHour} disabled={!disableHour('12:00-13:00')}>12:00-13:00</button>
            <button className={classNames(Selected("13:00-14:00") ? "bg-red-800 text-white" : "" ,"text-base font-semibold border border-1 py-2 w-28 text-text_main disabled:opacity-50 hover:bg-slate-200")} value="13:00-14:00" onClick={handleHour} disabled={!disableHour('13:00-14:00')}>13:00-14:00</button>
            <button className={classNames(Selected("14:00-15:00") ? "bg-red-800 text-white" : "" ,"disabled:opacity-50 text-base font-semibold border border-1 py-2 w-28 rounded-r-md text-text_main hover:bg-slate-200")} value="14:00-15:00" onClick={handleHour} disabled={!disableHour('14:00-15:00')}>14:00-15:00</button>
        </div>
        <div className="flex items-center ml-1">
            <img alt="sun3" src={require("../image/sun3.png")} className="h-10 w-10 mr-3" />
            <button className={classNames(Selected("15:00-16:00") ? "bg-red-800 text-white" : "" ,"text-base font-semibold border border-1 py-2 w-28 rounded-l-md text-text_main disabled:opacity-50 hover:bg-slate-200")} value="15:00-16:00" onClick={handleHour} disabled={!disableHour('15:00-16:00')}>15:00-16:00</button>
            <button className={classNames(Selected("16:00-17:00") ? "bg-red-800 text-white" : "" ,"text-base font-semibold border border-1 py-2 w-28 text-text_main disabled:opacity-50 hover:bg-slate-200")} value="16:00-17:00" onClick={handleHour} disabled={!disableHour('16:00-17:00')}>16:00-17:00</button>
            <button className={classNames(Selected("17:00-18:00") ? "bg-red-800 text-white" : "" ,"text-base font-semibold border border-1 py-2 w-28 rounded-r-md text-text_main disabled:opacity-50 hover:bg-slate-200")} value="17:00-18:00" onClick={handleHour} disabled={!disableHour('17:00-18:00')}>17:00-18:00</button>
        </div>
        <div className="flex items-center ml-1">
            <img alt="sun4" src={require("../image/sun4.png")} className="h-10 w-10 mr-3" />
            <button className={classNames(Selected("18:00-19:00") ? "bg-red-800 text-white" : "" ,"text-base font-semibold border border-1 py-2 w-28 rounded-l-md text-text_main disabled:opacity-50 hover:bg-slate-200")} value="18:00-19:00" onClick={handleHour} disabled={!disableHour('18:00-19:00')}>18:00-19:00</button>
            <button className={classNames(Selected("19:00-20:00") ? "bg-red-800 text-white" : "" ,"text-base font-semibold border border-1 py-2 w-28 text-text_main disabled:opacity-50 hover:bg-slate-200")} value="19:00-20:00" onClick={handleHour} disabled={!disableHour('19:00-20:00')}>19:00-20:00</button>
            <button className={classNames(Selected("20:00-21:00") ? "bg-red-800 text-white" : "" ,"text-base font-semibold border border-1 py-2 w-28 rounded-r-md text-text_main disabled:opacity-50 hover:bg-slate-200")} value="20:00-21:00" onClick={handleHour} disabled={!disableHour('20:00-21:00')}>20:00-21:00</button>
        </div>
        <div className="flex flex-col space-y-2">
            <button className="w-96 py-2 bg-red-700 text-white rounded-md" onClick={handleSubmit}>Записаться</button>
            <button className="w-96 py-2 bg-white text-red-700 border-red-700 border-2 rounded-md">Сообщение</button>
        </div>
    </div>

  
  );
};

export default ApplyCourseTable;
