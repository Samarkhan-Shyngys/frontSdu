import logo from "../../image/logo.png";
import { Menu} from "@headlessui/react";
import { SearchIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { SideBar } from "./SideBar";
import { Content } from "./Content";
import { Route, Switch } from "react-router-dom";
import { Application } from "./Application";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export function Main() {
  return (
    <>
      <div className="grid grid-cols-[300px,1fr] grid-rows-[80px,1fr] divide-x divide-y">
        <div className="flex items-center justify-start pl-16">
          <img alt="logo" src={logo} className="h-14 w-auto" />
        </div>
        <div className="relative flex justify-between items-center px-12">
          <div className="relative w-1/3">
            <div className=" text-gray-600">
              <button type="submit" className="absolute left-1 top-2">
                <SearchIcon className="w-6 h-6 mr-6" />
              </button>
              <input
                className="bg-white h-10 w-full pl-10 rounded-lg text-sm focus:outline-none"
                type="search"
                name="search"
                placeholder="Поиск или новый чат"
              />
            </div>
          </div>
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div className="flex space-x-3 items-center">
                <img alt="user" src={logo} className="h-8 w-8 rounded-full" />
                <Menu.Button className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                  Жанар Маратова
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full text-left px-4 py-2 text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <div className="flex items-start justify-start pl-12">
          <SideBar />
        </div>
        <div>
            <Switch>
                <Route path="/admin/content" component={Content} />
                <Route path="/admin/applications" component={Application} />
            </Switch>
            
        </div>
      </div>
    </>
  );
}