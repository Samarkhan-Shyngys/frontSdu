import React from "react";

const Button = ({ text }) => {
  return (
    <div className="mt-8">
      <button className="w-full py-2 bg-white border rounded-md border-gray-800 font-medium text-xl">
        {text}
      </button>
    </div>
  );
};

export default Button;
