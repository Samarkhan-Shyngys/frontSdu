import { ChatIcon } from "@heroicons/react/outline";
const ListItem =({image, name, desc, times})=>{
    return(
        <div className="w-full h-16 flex space-x-4 justify-between">
            <div className="flex space-x-4">
            <img alt="profile" src={image} className="h-12 w-12 rounded-full"/>
            <div className="flex flex-col">
                <p>{name}</p>
                <p>{desc}</p>
            </div>

            </div>
           
            <div className="flex space-x-4 pl-8">
                {times.map((time)=>(
                    <div className="flex flex-col items-center space-x-0">
                        <p>{time.day}</p>
                        <p>{time.hour}</p>
                     </div>   
                ))}
            </div>
            <div className="pr-6">
                <ChatIcon className="h-8 w-8"/>
            </div>


        </div>
    )

}

export default ListItem;