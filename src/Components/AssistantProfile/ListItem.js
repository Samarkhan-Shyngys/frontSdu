import { ChatIcon } from "@heroicons/react/outline";
const ListItem = ({ image, name, desc, times }) => {
  return (
    <div className="w-full h-16 flex space-x-4 justify-between">
      <div className="flex space-x-4 w-1/2">
        <img alt="profile" src={image} className="h-14 w-14 rounded-full" />
        <div className="flex flex-col">
          <p className="text-text_main font-medium text-lg">{name}</p>
          <p className="text-text_gray font-normal text-sm">{desc}</p>
        </div>
      </div>
      <div className="w-1/2 flex justify-between">
      <div className="flex space-x-4">
        {times.map((time) => (
          <div className="flex flex-col items-center space-x-0">
            <p className="text-text_gray font-semibold text-base">{time.day}</p>
            <p  className="text-text_gray font-normal text-base">{time.hour}</p>
          </div>
        ))}
      </div>
      <div className="pr-10">
        <ChatIcon className="h-8 w-8 text-text_gray" />
      </div>

      </div>
     
    </div>
  );
};

export default ListItem;
