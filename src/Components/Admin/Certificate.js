import img from "../../image/img_course.png";
export function Certificate(){
    return(
        <div className="mt-8 mb-32">
            <h1 className="text-xl font-semibold text-text_main mb-2">Сертификаты</h1>
            <ul className="list-disc space-y-3 font-normal mx-4">
                <li>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="text-lg text-text_main">Профессия UX-дизайнер</span>
                            <span className="text-base text-text_gray">Skillbox</span>
                        </div>
                        <img alt="c_img" src={img} className="h-8 w-10 rounded-md"/>
                    </div>
                </li>
                <li>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="text-lg text-text_main">Курс по интерактивному дизайну и анимации интерфейсов</span>
                            <span className="text-base text-text_gray">Breezzly company (Job Shadowing)</span>
                        </div>
                        <img alt="c_img" src={img} className="h-8 w-10 rounded-md"/>
                    </div>
                </li>
                <li>
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="text-lg text-text_main">Основы создания мобильных приложений и сайтов</span>
                            <span className="text-base text-text_gray">Sketching company in design</span>
                        </div>
                        <img alt="c_img" src={img} className="h-8 w-10 rounded-md"/>
                    </div>
                </li>
            </ul>
        </div>
    );
}