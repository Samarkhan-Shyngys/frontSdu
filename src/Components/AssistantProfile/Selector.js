import React from "react";
import Select from "react-select";

const Selector = ({ name, name1, title, data, data1 , onChanged}) => {
  return (
    <div className="pt-2">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <div className="flex space-x-2">
        <div className="w-2/3">
          <Select options={data} onChange={onChanged} />
        </div>
        <div className="w-1/3">
          <Select  options={data1} onChange={onChanged}/>
        </div>
      </div>
    </div>
  );
};

export default Selector;
