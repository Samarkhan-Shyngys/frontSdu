import { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function Cell({text, value, append}){
    const handle=(e)=>{
        setColor(true)
        append( {"time": e.target.value} )
    }
    const [color, setColor] = useState(false);
    // const handleChange=()=>{
    //     clicked = true;
    //     console.log("aaaa")
    // }
    return (
        <button value={value} className={classNames(color ? "bg-blue-800" : "bg-white", "border h-12 cursor-pointer text-base font-semibold")} 
        onClick={handle}>{text}</button>
    );
}