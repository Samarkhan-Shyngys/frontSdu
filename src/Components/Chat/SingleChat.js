import { CheckIcon } from "@heroicons/react/outline";
import image from "../../image/12.webp";
export default function SingleChat({name, message}){
    return(
        <div className="grid grid-cols-[50px,1fr] gap-2">
              <div>
                <img alt="profile" src={image} className="h-12 rounded-full"/>
              </div>
              <div className="space-y-0">
                <div className="flex justify-between ">
                  <h1 className="text-lg text-text_main font-medium">{name}</h1>
                  <p className="text-base text-text_main font-medium">16:30</p>
                </div>
                <div className="flex justify-between">
                  <h1 className="text-base text-text_main font-normal">{message}</h1>
                  <CheckIcon className="w-4 h-4" />
                </div>
              </div>
            </div>
    );
}