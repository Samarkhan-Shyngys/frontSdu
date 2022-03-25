import React from "react";
import {ChevronRightIcon} from "@heroicons/react/outline";

const DivTitle =({title, subtitle})=>{
    return (
    <div className="space-y-2 mb-8">
    <h1 className="text-3xl font-semibold leading-6 text-gray-900">{title}</h1>
      <div className="flex justify-between ">
        <p className="text-base tracking-normal text-gray-500">{subtitle}</p>
          <a className="flex">
            <h3 className="text-black font-medium">Посмотреть все</h3>
            <ChevronRightIcon className="w-auto h-6  "/>
          </a>
      </div>
      </div>
      )
}

export default DivTitle;