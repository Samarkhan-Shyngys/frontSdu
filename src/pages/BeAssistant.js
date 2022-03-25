import React from "react";
import {useLocation} from "react-router-dom";
import Footer from "../Components/Footer";
import Header from '../Components/Header';
import i from '../image/12.webp';
import { Link } from 'react-router-dom';
const AssistantPage = () => {
   const history = useLocation();
    return(
        <>  
            
            <Header /> 
            <div className="max-w-7xl mx-auto">
            <div className="flex mt-8">
                <Link to="/" className="text-xl font-semibold text-gray-400">Главная </Link>
                <p className="text-xl font-semibold text-gray-900">{history.pathname}</p>
            </div>
                <div className="flex flex-col items-center justify-between pt-10 md:flex-row">
                    <div className="mt-8 space-y-1 w-1/2">
                        <h2 className=" text-xl sm:text-4xl font-bold font-normal tracking-normal">SDU Assistant</h2>
                        <h1 className="text-lg sm:text-3xl font-semibold text-black">начало карьеры здесь</h1>
                        <p className="text-md md:text-xl font-sans text-gray-400 leading-6">Размещая свой курс, преподавайте студентам и развивайтесь профессионально.</p>
                    </div>
                    <div className="mt-8 w-1/2">
                        <div className="">
                            <img src={i} className=''/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-24">
                <h1 className="text-3xl font-semibold">Как это работает?</h1>
                <p className="text-xl font-sans text-gray-400">Помогаем достичь цели и развивать карьеру</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12">
                    <div>
                        <div className="bg-gray-200 mt-10 px-6 pt-4">
                            <h1 className="text-xl bg-gray-400 w-8 h-8 rounded-full text-center">1</h1>
                            <h2 className="text-xl font-medium mt-8">Зарегистрируйтесь </h2>
                            <p className="mt-4 pb-8">После этого у вас будет  возможность заполнить анкету для представления информации о себе</p>
                        
                        </div>
                        <div className="bg-gray-400 h-24 w-full"></div>
                    </div>
                    <div>
                        <div className="bg-gray-200 mt-10 px-6 pt-4">
                        <h1 className="text-xl bg-gray-400 w-8 h-8 rounded-full text-center">2</h1>
                        <h2 className="text-xl font-medium mt-8">Добавьте свой курс</h2>
                        <p className="mt-4 pb-8 text-base">Собирая всю нужную информацию, создайте свой уникальный метод для курса в разделе “Мои курсы”</p>
                        
                    </div>
                    <div className="bg-gray-400 h-24 w-full"></div>
                    </div>
                    <div>
                        <div className="bg-gray-200 mt-10 px-6 pt-4">
                        <h1 className="text-xl bg-gray-400 w-8 h-8 rounded-full text-center">3</h1>
                        <h2 className="text-xl font-medium mt-8">Преподавайте студентам</h2>
                        <p className="mt-4 pb-8 text-base">Привлекая студентов эффектными методами обучения, организуйте уроки и преподавайте в любое время</p>
                      </div>
                    <div className="bg-gray-400 h-24 w-full"></div>
                   </div>
                </div>
            </div>
            <div className="w-full bg-gray-100 mt-24">
                <div className="max-w-7xl mx-auto space-y-1 py-10">
                    <h1 className="text-2xl font-medium ">Станьте ассистентом!</h1>
                    <p className="text-lg text-gray-500 pb-4">Зарегестрируйтесь и достигайте карьерного роста, обучая сотню других студентов</p>
                    <button className="bg-gray-500 py-3 px-5 rounded-md text-white text-base">Начать преподавать</button>
                </div>
                
            </div>
            <Footer />
        </>

    );

}


export default AssistantPage;