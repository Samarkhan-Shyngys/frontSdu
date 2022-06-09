import { useState } from "react";
import { UserIcon, ClipboardListIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

export function SideBar() {
  const [cur_item, setItem] = useState(0);
  return (
    <div className="overflow-y-auto px-3 bg-white rounded w-5/6 mt-10">
      <ul className="space-y-2">
        <Link to="/admin/content">
        <li className={cur_item===0 ? "bg-gray-100 rounded-md" : ""}  onClick={() => setItem(0)}>
        <span
            className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 "
          >
            <UserIcon className="h-6 w-6 text-text_gray" />
            <span className="ml-3">Пользователи</span>
          </span>
        </li>
        </Link>
            
        <Link to="/admin/applications">
        <li className={cur_item===1 ? "bg-gray-100 rounded-md" : ""}  onClick={() => setItem(1)}>
          <span className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 ">
            <ClipboardListIcon className="h-6 w-6 text-text_gray" />
            <span className="flex-1 ml-3 whitespace-nowrap">Заявки</span>
            <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full">
              {/* 5 */}
            </span>
          </span>
        </li>
        </Link>
      </ul>
    </div>
  );
}
