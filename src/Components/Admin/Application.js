import image from "../../image/12.webp";
import { ChevronRightIcon } from "@heroicons/react/outline";
import StudentModal from "./StudentModal";
import { useState } from "react";
export function Application(){
    const [showModal, setShowModal] = useState(false);
    const handleClose =()=> setShowModal(false);
    return (
        <>
        <div className="px-12 mt-10 max-w-7xl mx-auto">
            <h1 className="text-2xl text-text_main mb-6 font-medium">Заявки</h1>
            <div className="flex justify-between items-center">
                <div className="flex space-x-4 items-center">
                    <img alt="img" src={image} className="h-14 w-14 rounded-full"/>
                    <div className="flex flex-col">
                        <span className="text-lg text-text_main font-normal">Болат Жанболатов</span>
                        <span className="text-base text-text_gray font-normal">180103123@stu.sdu.edu.kz</span>
                    </div>
                </div>
                <div>
                    <ChevronRightIcon className="h-8 w-8 mr-24 text-text_main" onClick={()=>setShowModal(true)}/>
                </div>
            </div>
        </div>
        {showModal && <StudentModal showModal={showModal} handleClose={handleClose}/>}
        </>
        
    )
}