import React, {useState} from 'react';
import { Link} from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const SidebarMenu=({data})=>{
    const [cur_item, setItem] = useState(0);
    return(
        <nav className="overflow-y-auto py-4 bg-[#F3F3F3] rounded w-64 h-80">
          <ul className="space-y-2">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames(
                    cur_item===index ? "border-r-4 border-gray-900 bg-white" : "",
                        "hover:bg-white"
                  )}
                >
                  <Link
                    to={item.path}
                    className="flex  items-center p-2 text-base font-normal text-black rounded-lg h-8 w-8"
                    onClick={() => setItem(index)}
                  >
                    <div className="flex-shrink-0 w-6 h-6 text-gray-500 flex-col">
                      {item.icon}
                    </div>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    );
}

export default SidebarMenu;