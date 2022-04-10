import React from "react";
import image from "../image/mobile.png";
const Mobile = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-24">
      <div className="items-center pt-44 ml-10 md:ml-0">
        <div className=" mt-8 space-y-2">
          <h2 className="text-3xl font-semibold tracking-normal">
            SDU App
          </h2>
          <p className="text-xl text-slate-800 pr-10 font-medium">
            Устанавливайте и получайте <br></br> новые знания и навыки каждый
            день с TutorGo. <br></br>Приложение дарит возможность обучаться в
            дороге.
          </p>
          <button className="bg-red-800 text-xl text-white font-semibold rounded-md mt-8 py-2 w-48 text-center">
            Скачать
          </button>
        </div>
      </div>
        <div className="">
            <img src={image} className="p-8 w-full h-full" alt="mobile png" />
        </div>
    </div>
  );
};

export default Mobile;
