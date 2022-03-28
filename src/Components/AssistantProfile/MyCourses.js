import React from "react";
import AddButton from "./AddButton";
import CourseCard from "../../Components/CourseCard";
const MyCourses = () => {
  return (
    <div>
      <div className="flex justify-between border-b items-center pb-4">
        <h1 className="text-2xl font-semibol">Мои курсы</h1>
        <AddButton />
      </div>
      <div className="grid grid-cols-3">
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default MyCourses;
