import { useState } from "react";
import Header from "../Components/Header";
import BreadCrumbs from "../Components/BreadCrumbs";
import Seacrh from "../Components/Chat/Search";
import Container from "../Components/Container";
import SingleChat from "../Components/Chat/SingleChat";
import image from "../image/12.webp";
import { TrashIcon, LinkIcon } from "@heroicons/react/outline";
import Footer from "../Components/Footer";
import { FiNavigation} from "react-icons/fi";
import  BasicModal  from "../Components/Chat/Modal";
const route = [
  { name: "Главная", route: "/" },
  { name: "Сообщение", route: "" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Message({ text, time, color }) {
  return (
    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1">
      <div
        className={classNames(
          color ? "bg-pink-200" : "bg-gray-300",
          "flex justify-between px-4 py-2 rounded-lg text-gray-800 items-end"
        )}
      >
        <span>{text}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}

export default function Chat() {
  const [showModal, setShowModal] = useState(false); 
  const handleClose = () => setShowModal(false);
  return (
    <>
      <Header />
      <BreadCrumbs routes={route} />
      <Container>
        <div className="grid grd-cols-1 md:grid-cols-[450px,1fr] gap-10 mt-10">
          <div className="relative w-full space-y-4 h-96 overflow-y-scroll scrollbar-hide">
            <Seacrh />
            <div className="flex justify-between my-2">
              <h1 className="text-lg text-text_main font-medium">Сообщения</h1>
              <h1 className="text-base text-text_gray font-normal" onClick={()=>setShowModal(true)}>+ Новая группа</h1>
            </div>
            <SingleChat name="Болатбекова Арайлым" message="Спасибо. До встречи! Буду ждать"/>
            <SingleChat name="Нурланов Амир" message="Когда вы будете проверять?"/>
            <SingleChat  name="Жандосов Дарын" message="Какие ваши цели? Что вас беспокоит?..."/>
            <SingleChat name="Сабирова Гулим" message="До свидания! Желаю хорошего дн..."/>
            <SingleChat name="Курс “Дата Анализ 16:00”" message="Жанар Маратова: Где мы будем п..."/>
          </div>
          <div>
            <div className="flex justify-between border-b-2 pb-2">
              <div className="flex">
                <img
                  src={image}
                  alt="chat"
                  className="w-14 h-14 rounded-full mr-2"
                />
                <div>
                  <h1 className="text-lg text-text_main font-medium">Болатбекова Арайлым</h1>
                  <span className="text-base text-text_main font-normal">Online</span>
                </div>
              </div>
              <div>
                <TrashIcon className="h-6 w-6" />
              </div>
            </div>
            <div class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
              <div class="flex items-end justify-start">
                <Message text="Здравствуйте!" time="16:00" />
              </div>

              <div class="flex items-end justify-start">
                <Message
                  text="Я хотела узнать подробнее о вашем курсе, в каком формате будет? "
                  time="16:27"
                />
              </div>

              <div class="flex items-end justify-end">
                <Message
                  text="Подробнее о моем курсе написано у меня в описании, если интересует еще что-то можете спрашивать"
                  time="16:05"
                  color
                />
              </div>
              <Message text={"aa"} time="12:00" color />
            </div>
            <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 flex justify-between">
              <div class="relative flex w-full">
                <input
                  type="text"
                  placeholder="Написать сообщение..."
                  className="w-full focus:outline-none focus:placeholder-gray-400 text-text_gray placeholder-text_gray pl-6 bg-gray-200 rounded-md py-2"
                />
                <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
                  >
                    <LinkIcon className="h-6 w-6"/>
                  </button>
                </div>
                
              </div>
              <div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-lg mx-3"
                  >
                    {/* <span class="font-bold">Send</span> */}
                    <FiNavigation className="h-10 w-10 bg-main_red rounded-full px-3 text-white"/>
                  </button>
                </div>
            </div>
          </div>
        </div>
        {showModal && <BasicModal showModal={showModal} handleClose={handleClose} />}
      </Container>
      <Footer />
    </>
  );
}
