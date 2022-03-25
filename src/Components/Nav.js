import React from "react";
import { CalendarIcon } from "@heroicons/react/outline"; 
import image from '../image/Image.png';
const Nav = () =>{
    return (
        <>
        <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between pt-12 md:flex-row">
            <div className=" mt-8 w-2/3 md:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold font-normal tracking-normal text-red-700">Подтягивайте знание</h2>
                <h1 className="text-2xl md:text-4xl font-bold text-black">Доступно и эффективно</h1>
                <p className=" text-lg md:text-xl text-gray-400 mt-2">SDU Assistant - образовательная платформа для студентов СДУ, который поможет подтянуть знание в любое удобное время и достичь успеха.</p>
                <button className="bg-red-800 px-10 py-4 text-white rounded-md mt-2 text-xl font-sans mt-8">Найти ассистента</button>
            </div>
            <div className="mt-8 w-1/2">
                <div className="">
                    <img src={image} className='' alt="bg"/>
                </div>
            </div>
        </div>
        </div>

        <div className="md:max-w-7xl mx-auto pt-32">
            <div className="space-y-2">
                <h1 className="text-black text-2xl md:text-3xl font-semibold">Наши приемущества</h1>
                <span className="text-gray-500 break-words text-lg">4 причини почему вы должны выбрать SDU Assistant</span>
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-y-6 gap-x-6">

                <div className="flex flex-row space-x-4">
                    <CalendarIcon className="w-auto h-10" />
                    <div>
                        <h3 className="text-xl font-semibold">Доступно и выгодно</h3>
                        <p className="text-gray-500 text-lg tracking-normal w-96">Студентам предлагается возможность свободного выбора курсов и материала.</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-4">
                    <CalendarIcon className="w-auto h-10" />
                    <div>
                        <h3 className="text-xl font-semibold">Удобное расписание</h3>
                        <p className="text-gray-500 text-lg w-96 tracking-normal">Вы сами выбираете время занятий, чтобы учиться в удобное время для вас.</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-4">
                    <CalendarIcon className="w-auto h-10" />
                    <div>
                        <h3 className="text-xl font-semibold">Удобное расписание</h3>
                        <p className="text-gray-500 text-lg w-96 tracking-normal">Студентам предлагается возможность свободного выбора курсов и материала.</p>
                    </div>
                </div>
                <div className="flex flex-row space-x-4">
                    <CalendarIcon className="w-auto h-10" />
                    <div>
                        <h3 className="text-xl font-semibold">Высокий результат</h3>
                        <p className="text-gray-500 text-lg w-96 tracking-normal">Следуя рекомендациям ассистентов, вы обязательно увидите хороший прогресс.</p>
                    </div>
                </div>

            </div>
        </div>
        
        </>
    );

}

export default Nav;