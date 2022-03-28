import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

const AddButton = () => {
  return (
    <div className="">
      <button className="w-56 items-center py-2 px-4 bg-white border rounded-md border-gray-800 font-medium text-lg  inline-flex justify-center">
        <PlusIcon className="w-6 h-6" />
        Добавить курс
      </button>
    </div>
  );
};

export default AddButton;
