import React from "react";
import { PlusIcon } from "@heroicons/react/outline";

const Add = ({ text }) => {
  return (
    <div className="mt-4 flex space-x-2">
      <PlusIcon className="w-6 h-6 border rounded-full border-gray-600" />
      <p className="text-gray-600 font-medium">{text}</p>
    </div>
  );
};

export default Add;
