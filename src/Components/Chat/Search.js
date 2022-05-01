import { SearchIcon } from "@heroicons/react/outline";
export default function Seacrh(){
    return(
        <div className="pt-2 text-gray-600 ">
          <button type="submit" className="absolute left-1 top-0 mt-4">
            <SearchIcon className="w-6 h-6 mr-6" />
          </button>
          <input
            className="border-2 border-gray-300 bg-white h-10 w-full pl-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Поиск или новый чат"
          />
        </div>
    )
}