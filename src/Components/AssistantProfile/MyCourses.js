import React from "react";
import AddButton from "./AddButton";
import AssistantCourse from "./AssistantCourse";
const MyCourses = () => {
  return (
    <div>
      <div className="flex justify-between border-b items-center pb-4">
        <h1 className="text-lg md:text-2xl font-semibol">Мои курсы</h1>
        <AddButton text="Добавить курс" link="/assistant/addcourse"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        <AssistantCourse />
        <AssistantCourse />

      </div>
    </div>
  );
};

export default MyCourses;
