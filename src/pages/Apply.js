import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const data = {
  day: "",
  hour: "",
};
const Apply = () => {
  const disabled = false;
  const handleChange = (e) => {
    data.day = e.target.value;
    console.log(data.day);
    e.target.className = "w-16 h-8 border border-1 bg-gray-400";
  };
  return (
    // <div className="space-y-4 bg-white">
    //     <div>
    //         <button className="py-1 font-semibold border border-1 text-xl w-16" disabled={!disabled} onClick={handleChange}>Пн</button>
    //         <button className="text-xl font-semibold py-1 border border-1 w-16" disabled value="11" onClick={handleChange} >Вт</button>
    //         <button className="text-xl font-semibold py-1 border border-1 w-16" value="Ср" onClick={handleChange}>Ср</button>
    //         <button className="text-xl font-semibold py-1 border border-1 w-16" >Чт</button>
    //         <button className="text-xl font-semibold py-1 border border-1 w-16" >Пт</button>
    //         <button className="text-xl font-semibold py-1 border border-1 w-16" >Сб</button>
    //         <button className="text-xl font-semibold py-1 border border-1 w-16" >Вс</button>
    //     </div>
    //     <div className="flex items-center ml-3">
    //         <SunIcon className="w-10 h-auto mr-3" />
    //         <button className="text-base font-semibold border border-1 py-2 w-32">09:00-10:00</button>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">10:00-11:00</button>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">11:00-12:00</button>
    //     </div>
    //     <div className="flex items-center ml-3">
    //         <SunIcon className="w-auto h-10 mr-3"/>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">09:00-10:00</button>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">10:00-11:00</button>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">11:00-12:00</button>
    //     </div>
    //     <div className="flex items-center ml-3">
    //         <SunIcon className="w-10 h-auto mr-3"/>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">12:00-13:00</button>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">13:00-14:00</button>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">14:00-15:00</button>
    //     </div>
    //     <div className="flex items-center ml-3">
    //         <MoonIcon className="w-10 h-auto mr-3"/>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">15:00-16:00</button>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">16:00-17:00</button>
    //         <button className="text-base font-semibold border border-1 py-2 w-32">17:00-18:00</button>
    //     </div>
    //     <div className="flex flex-col space-y-2">
    //         <button className="w-1/4 py-2 bg-gray-500 text-white rounded-md">Записаться</button>
    //         <button className="w-1/4 py-2 bg-white border-black border-2 rounded-md">Сообщение</button>
    //     </div>
    // </div>

    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-2/3 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="">
                Время / Дни недели            
            </th>
            <th scope="col" class="px-6 py-3">
                Пн
            </th>
            <th scope="col" class="">
                Вт
            </th>
            <th scope="col" class="px-6 py-3">
                Ср
            </th>
            <th scope="col" class="px-6 py-3">
                Чт
            </th>
            <th scope="col" class="px-6 py-3">
                Пт
            </th>
            <th scope="col" class="px-6 py-3">
                Сб
            </th>
            <th scope="col" class="px-6 py-3">
                Вс
            </th>
           
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <button  className="w-16 h-8 text-right" onClick={handleChange}></button>
            <button onClick={handleChange}>bbbb</button>
        
            <td class="">$2999</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">White</td>
            <td class="px-6 py-4">Laptop PC</td>
            <td class="px-6 py-4">$1999</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            >
              Magic Mouse 2
            </th>
            <td class="px-6 py-4">Black</td>
            <td class="px-6 py-4">Accessories</td>
            <td class="px-6 py-4">$99</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Apply;
