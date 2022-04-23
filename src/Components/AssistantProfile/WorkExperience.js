import React from "react";
import Input from "../Input";
import Selector from "./Selector";
import months from "../../Constants/Months";
import years from "../../Constants/Years";
import Add from "./Add";
import Button from "./Button";
const WorkExperience = () => {
  return (
    <div className="w-1/2">
      <div className="border-b text-2xl font-semibold pb-2">
        <h1>Опыт работы</h1>
      </div>
      <div className="mt-6">
        <Input
          text="Организация"
          type="text"
          placeholder="Itech образовательный центр"
        />
        <Input text="Должность" type="text" placeholder="UX/UI Designer" />
        <div className="flex items-end justify-between space-x-1">
          <Input text="Начало работы" type="text" placeholder="Август" />
          <input
            type="text"
            placeholder="2020"
            className="w-1/3 h-10 ml-0 shadow appearance-none border border-gray-500 rounded py-2 px-3 text-gray-700 mb-5 leading-tight"
          ></input>
        </div>
        <Selector title="Окончание" data={months} data1={years} />
        <Input text="Организация" type="text" placeholder="Организация" />
        <Input text="Должность" type="text" placeholder="UX/UI Designer" />
        <div className="flex items-end justify-between space-x-1">
          <Input text="Начало работы" type="text" placeholder="Август" />
          <input
            type="text"
            placeholder="2020"
            className="w-1/3 h-10 ml-0 shadow appearance-none border border-gray-500 rounded py-2 px-3 text-gray-700 mb-5 leading-tight"
          ></input>
        </div>
        <Selector title="Окончание" data={months} data1={years} />
        <Add text="Добавить еще место работы" />
        <Button text="Сохранить изменения" />
      </div>
    </div>
  );
};

export default WorkExperience;
