import React from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const DivTitle = ({ title, subtitle , link }) => {
  return (
    <div className="space-y-2 mb-8">
      <h1 className="text-xl md:text-3xl font-semibold leading-6 text-text_main">
        {title}
      </h1>
      <div className="flex justify-between ">
        <p className="text-xs md:text-base tracking-normal text-text_gray w-1/2">{subtitle}</p>
        <Link className="flex" to={link}>
          <h3 className="text-text_main font-medium text-base">Посмотреть все</h3>
          <ChevronRightIcon className="w-auto h-6  " />
        </Link>
      </div>
    </div>
  );
};

export default DivTitle;
