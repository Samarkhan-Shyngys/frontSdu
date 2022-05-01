import React from "react";
import image from "../image/Image.png";
import employee from '../image/empoyee.png';
import calendar from "../image/calendar.png";
import icons from '../image/icon.png';
import progress from '../image/progress.png';
const Nav = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="ml-10 sm:ml-0">
          <div className=" mt-8">
            <h2 className="text-2xl md:text-3xl font-bold tracking-normal text-main_red">
              Подтягивайте знание
            </h2>
            <h1 className="text-2xl md:text-4xl font-bold text-text_main">
              Доступно и эффективно
            </h1>
            <p className=" text-lg md:text-xl text-text_gray mt-2">
              SDU Assistant - образовательная платформа для студентов СДУ,
              который поможет подтянуть знание в любое удобное время и достичь
              успеха.
            </p>
            <button className="bg-main_red px-10 py-4 text-white rounded-md text-xl font-sans mt-8">
              Найти ассистента
            </button>
          </div>
        </div>
        <div className="mt-8">
          <img src={image} className="" alt="bg" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-24 items-center">
        <div className="space-y-2 mx-6 md:mx-0">
          <h1 className="text-text_main text-2xl md:text-3xl font-semibold">
            Наши приемущества
          </h1>
          <span className="text-text_gray break-words text-lg">
            4 причини почему вы должны выбрать SDU Assistant
          </span>
        </div>
        <div className="mt-6 grid md:grid-cols-2 gap-y-6 gap-x-6 mx-6 md:mx-0">
          <div className="flex flex-row space-x-4 items-center">
            <img src={employee} alt="emp" className="h-14 w-14"/>
            <div>
              <h3 className="text-xl font-semibold text-text_main">Доступно и выгодно</h3>
              <p className="text-text_gray text-lg tracking-normal w-72 md:w-96">
                Студентам предлагается возможность свободного выбора курсов и
                материала.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <img src={icons} alt="emp" className="h-14 w-14"/>
            <div>
              <h3 className="text-xl font-semibold text-text_main">Удобное расписание</h3>
              <p className="text-text_gray text-lg w-72 md:w-96 tracking-normal">
                Вы сами выбираете время занятий, чтобы учиться в удобное время
                для вас.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <img src={calendar} alt="emp" className="h-14 w-14"/>
            <div>
              <h3 className="text-xl font-semibold text-text_main">Удобное расписание</h3>
              <p className="text-text_gray text-lg w-72 md:w-96 tracking-normal">
                Студентам предлагается возможность свободного выбора курсов и
                материала.
              </p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <img src={progress} alt="emp" className="h-14 w-14"/>
            <div>
              <h3 className="text-xl font-semibold text-text_main">Высокий результат</h3>
              <p className="text-text_gray text-lg w-72 md:w-96 tracking-normal">
                Следуя рекомендациям ассистентов, вы обязательно увидите хороший
                прогресс.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
