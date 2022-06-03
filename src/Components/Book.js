import image from "../image/book1.png";
import { HeartIcon } from "@heroicons/react/outline";
import {base_url} from "../utils/request";

export default function Book(props){
    console.log(props.bookData.url)
    return(
        <div className="">
            <div className="w-full bg-white border rounded-md border-gray-200 mt-8">
                <div className="relative items-center pt-4">
                    <img src={base_url + props.bookData.url} className="w-52 mx-auto" style={{ height: 170 }}/>
                    <HeartIcon className="absolute top-6 right-2 w-8 h-8 bg-gray-300/30 rounded-full p-2 text-white hover:text-red-600 fill-current"/>
                </div>
                <div className="space-y-1 text-center">
                    <h1 className="text-xl font-bold mt-2">{props.bookData.title}</h1>
                    <p className="text-lg text-gray-400">{props.bookData.author}</p>
                </div>
                <button className="w-[calc(100%-20px)] mx-2 text-xl py-2 text-white bg-cyan-700 rounded-md my-4">Скачать</button>
            </div>

        </div>
    )
}

// export default function Book(props){
//     console.log(props);
//     return(
//         <div className="">
//             <div className="w-full bg-white border rounded-md border-gray-200 mt-8">
//                 <div className="relative items-center pt-4">
//                     <img src={image} className="w-52 mx-auto" />
//                     <HeartIcon className="absolute top-6 right-2 w-8 h-8 bg-gray-300/30 rounded-full p-2 text-white hover:text-red-600 fill-current"/>
//                 </div>
//                 <div className="space-y-1 text-center">
//                     <h1 className="text-xl font-bold mt-2">Hello</h1>
//                     <p className="text-lg text-gray-400">Name</p>
//                 </div>
//                 <button className="w-[calc(100%-20px)] mx-2 text-xl py-2 text-white bg-cyan-700 rounded-md my-4">Скачать</button>
//             </div>

//         </div>
//     )
// }