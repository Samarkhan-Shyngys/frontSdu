import React from "react";
import Select from "react-select";

const Selector = ({ title, data, data1 }) => {
  return (
    <div className="pt-2">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <div className="flex space-x-2">
        <div className="w-2/3">
          <Select options={data} />
        </div>
        <div className="w-1/3">
          <Select options={data1} />
        </div>
      </div>
    </div>
  );
};

export default Selector;
