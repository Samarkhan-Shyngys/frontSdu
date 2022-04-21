import React from "react";

const Input = ({name, text, type, value, placeholder, onChanged }) => {
  return (
    <div className="mb-2 w-full">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {text}
      </label>
      <input
        name={name}
        value={value}
        className="shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        placeholder={placeholder}
        onChange={onChanged}
      ></input>
    </div>
  );
};

export default Input;
