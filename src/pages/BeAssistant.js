import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import image from "../image/amico.png";
import image1 from "../image/rafiki1.png";
import image2 from "../image/rafiki2.png";
import image3 from "../image/rafiki3.png";
import { Link } from "react-router-dom";
const AssistantPage = () => {
  const history = useLocation();
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="flex mt-8">
          <Link to="/" className="text-xl font-semibold text-gray-400">
            Главная{" "}
          </Link>
          <p className="text-xl font-semibold text-gray-900">
            {history.pathname}
          </p>
        </div>
        <div className="flex flex-col items-center justify-between pt-10 md:flex-row">
          <div className="mt-8 space-y-1 w-1/2">
            <h2 className=" text-xl sm:text-4xl font-bold font-normal tracking-normal">
              SDU Assistant
            </h2>
            <h1 className="text-lg sm:text-3xl font-semibold text-black">
              начало карьеры здесь
            </h1>
            <p className="text-md md:text-xl font-sans text-gray-400 leading-6">
              Размещая свой курс, преподавайте студентам и развивайтесь
              профессионально.
            </p>
          </div>
          <div className="mt-8 w-1/2 ml-8">
            <div className="">
              <img src={image} alt="amico png" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24">
        <h1 className="text-3xl font-semibold">Как это работает?</h1>
        <p className="text-xl font-sans text-gray-400">
          Помогаем достичь цели и развивать карьеру
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 pt-8">
          <div className="border rounded-md border-2 border-gary-400">
            <div className="bg-white mt-4 px-6 shadow-md border-b border-b-4 border-gray-400">
              <h1 className="text-xl bg-red-800 w-8 h-8 rounded-full text-center text-white">
                1
              </h1>
              <h2 className="text-xl font-medium mt-8">Зарегистрируйтесь </h2>
              <p className="mt-4 pb-8">
                После этого у вас будет возможность заполнить анкету для
                представления информации о себе
              </p>
            </div>
            <div className="bg-white h-auto object-center grid">
              <img
                src={image1}
                alt="image1"
                className="justify-self-center my-2"
              />
            </div>
          </div>
          <div className="border rounded-md border-2 border-gary-400">
            <div className="bg-white mt-4 px-6 shadow-md border-b border-b-4 border-gray-400">
              <h1 className="text-xl bg-red-800 w-8 h-8 rounded-full text-center text-white">
                2
              </h1>
              <h2 className="text-xl font-medium mt-8">Добавьте свой курс</h2>
              <p className="mt-4 pb-8 text-base">
                Собирая всю нужную информацию, создайте свой уникальный метод
                для курса в разделе “Мои курсы”
              </p>
            </div>
            <div className="bg-white h-auto object-center grid">
              <img
                src={image2}
                alt="image1"
                className="justify-self-center my-2"
              />
            </div>
          </div>
          <div className="border rounded-md border-2 border-gary-400">
            <div className="bg-white mt-4 px-6 shadow-md border-b border-b-4 border-gray-400">
              <h1 className="text-xl bg-red-800 w-8 h-8 rounded-full text-center text-white">
                3
              </h1>
              <h2 className="text-xl font-medium mt-8">
                Преподавайте студентам
              </h2>
              <p className="mt-4 pb-8 text-base">
                Привлекая студентов эффектными методами обучения, организуйте
                уроки и преподавайте в любое время
              </p>
            </div>
            <div className="bg-white h-auto object-center grid">
              <img
                src={image3}
                alt="image1"
                className="justify-self-center my-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-assistant bg-cover mt-24 h-96 bg-center">
        <div className="max-w-7xl mx-auto space-y-1 py-10 items-center pt-16">
          <h1 className="text-2xl font-medium ">Станьте ассистентом!</h1>
          <p className="text-lg text-gray-500 pb-4 line-clamp-2 w-1/3">
            Зарегестрируйтесь и достигайте карьерного роста, обучая сотню других
            студентов
          </p>
          <button className="bg-red-800 py-3 px-5 rounded-md text-white text-base">
            Начать преподавать
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AssistantPage;
