import { CheckIcon } from "@heroicons/react/outline";
import image from "../../image/12.webp";
export default function SingleChat(){
    return(
        <div className="grid grid-cols-[50px,1fr] gap-2">
              <div>
                <img alt="profile" src={image} className="h-12 rounded-full"/>
              </div>
              <div>
                <div className="flex justify-between">
                  <h1>Болатбекова Арайлым</h1>
                  <p>16:30</p>
                </div>
                <div className="flex justify-between">
                  <h1>Спасибо. До встречи! Буду ждать</h1>
                  <CheckIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
    );
}