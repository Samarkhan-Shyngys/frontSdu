import { ChevronRightIcon } from "@heroicons/react/outline";
import StudentModal from "./StudentModal";
import { useState } from "react";

const datas = [
  {
    name: "Болат Жанболатов",
    email: "180103123@stu.sdu.edu.kz",
    image: require("../../image/12.webp"),
  },
  {
    name: "Болат Жанбола",
    email: "180103203@stu.sdu.edu.kz",
    image: require("../../image/12.webp"),
  },
];
export function Application() {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <>
      <div className="px-12 mt-10 max-w-7xl mx-auto">
        <h1 className="text-2xl text-text_main mb-6 font-medium">Заявки</h1>
        <div className="grid grid-rows-1 gap-5">
          {datas.map((data, index) => (
            <>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 items-center" key={index}>
                  <img
                    alt="img"
                    src={data.image}
                    className="h-14 w-14 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg text-text_main font-normal">
                      {data.name}
                    </span>
                    <span className="text-base text-text_gray font-normal">
                      {data.email}
                    </span>
                  </div>
                </div>
                <div>
                  <ChevronRightIcon
                    className="h-8 w-8 mr-24 text-text_main"
                    onClick={() => setShowModal(true)}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      {showModal && (
        <StudentModal showModal={showModal} handleClose={handleClose} />
      )}
    </>
  );
}
