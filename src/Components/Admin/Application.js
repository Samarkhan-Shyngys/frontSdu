import { ChevronRightIcon } from "@heroicons/react/outline";
import StudentModal from "./StudentModal";
import { useState, useEffect } from "react";
import axios from "axios";
import {base_url} from "../../utils/request";
const datas = [
  {
    id:2,
    name: "Болат Жанболатов",
    email: "180103123@stu.sdu.edu.kz",
    image: require("../../image/12.webp"),
  },
  {
    id: 1,
    name: "Болат Жанбола",
    email: "180103203@stu.sdu.edu.kz",
    image: require("../../image/12.webp"),
  },
];
export function Application() {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState(0);
  // const handleClose = () => setShowModal(false);
  const handleClose = () => setId(0);
  const [item, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(`${base_url}/api/admin/contents`)
      .then((result) => {
        if (result !== undefined) {
          setItems(result.data.applied)
        }

        //  setStudents(item.students);
      })
      .catch((er) => console.log(er));
  }, []);
  console.log('applied ' + item)
  return (
    <>
      <div className="px-12 mt-10 max-w-7xl mx-auto">
        <h1 className="text-2xl text-text_main mb-6 font-medium">Заявки</h1>
        <div className="grid grid-rows-1 gap-5">
          {item && item.map((data, index) => (
            <>
              <div className="flex justify-between items-center">
                <div className="flex space-x-4 items-center" key={index}>
                  <img
                    alt="img"
                    src={data.icon}
                    className="h-14 w-14 rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-lg text-text_main font-normal">
                      {data.name}
                    </span>
                    <span className="text-base text-text_gray font-normal">
                      {data.emailID}
                    </span>
                  </div>
                </div>
                
                <div>
                  <ChevronRightIcon
                    className="h-8 w-8 mr-24 text-text_main"
                    // onClick={() => setShowModal(true)}
                    onClick={() => setId(data.id)}
                  />
                </div>
              </div>
            </>
            
          ))}
        </div>
      </div>
      {id!==0 && (
        <StudentModal id={id}  handleClose={handleClose} />
      )}
    </>
  );
}
