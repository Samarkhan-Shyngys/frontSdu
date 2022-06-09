import React, {useState} from "react";
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
  const [currentDay, setCurrentDay] = useState("Monday");

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
  const ClassName = "py-1 border border-1 text-xl w-14 text-text_main disabled:opacity-50";

  function disableHour(time){
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
            <button  className={classNames(currentDay==="Monday" ?  "font-bold" : "font-semilbold" , ClassName, "rounded-l-md")} value="Monday" disabled={data.Monday.length===0}  onClick={handleDay}>Пн</button>
            <button className={classNames(currentDay==="Tuesday" ?  "font-bold" : "font-semilbold",  ClassName)} value="Tuesday" onClick={handleDay} disabled={data.Tuesday.length===0}>Вт</button>
            <button className={classNames(currentDay==="Wednesday" ? "font-bold" : "font-semilbold" , ClassName)} value="Wednesday" onClick={handleDay} disabled={data.Wednesday.length===0}>Ср</button>
            <button className={classNames(currentDay==="Thursday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Thursday" onClick={handleDay} disabled={data.Thursday.length===0}>Чт</button>
            <button className={classNames(currentDay==="Friday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Friday" onClick={handleDay} disabled={data.Friday.length===0}>Пт</button>
            <button  className={classNames(currentDay==="Saturday" ?  "font-bold" : "font-semilbold" , ClassName)} value="Saturday" onClick={handleDay} disabled={data.Saturday.length===0}>Сб</button>
            <button  className={classNames(currentDay==="Sunday" ?  "font-bold" : "font-semilbold" , ClassName, "rounded-r-md")} value="Sunday" onClick={handleDay} disabled={data.Sunday.length===0} >Вс</button>
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
