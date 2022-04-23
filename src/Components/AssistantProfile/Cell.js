import { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function Cell({text, disabled}){
    const [color, setColor] = useState(false);
    // const handleChange=()=>{
    //     clicked = true;
    //     console.log("aaaa")
    // }
    return (
        <button className={classNames(color ? "bg-blue-800" : "bg-white", "border h-12 cursor-pointer text-base font-semibold")} 
        onClick={()=>setColor(true)}>{text}</button>
    );
}