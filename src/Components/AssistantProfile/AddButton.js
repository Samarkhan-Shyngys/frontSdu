import React from "react";
import { PlusIcon } from "@heroicons/react/outline";
import {Link} from 'react-router-dom';
const AddButton = ({link}) => {
  return (
    <Link to={link}>
      <button className="w-36 md:w-56 items-center py-2 px-2 md:px-4 bg-white border rounded-md border-gray-800 font-medium text-sm md:text-lg  inline-flex justify-center"
      >
        <PlusIcon className=" w-4 md:w-6 h-auto" />
        Добавить курс
      </button>
    </Link>
  );
};

export default AddButton;
