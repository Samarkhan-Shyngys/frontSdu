import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import { Fragment } from "react";
import Image from "../image/circle.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ChatIcon,
  ChevronDownIcon,
  UserIcon,
  DesktopComputerIcon,
  HeartIcon,
  LogoutIcon,
  CogIcon,
  BookmarkIcon,
} from "@heroicons/react/outline";
import logo from "../image/logo.png";
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";


const navigation = [
  { name: "Найти ассистента", href: "/assistant", current: true },
  { name: "Стать ассистентом", href: "/Стать ассистентом", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Btn() {
  return (
    <button className="bg-white text-black font-semibold py-2 px-6 border border-blue-700 rounded mx-2">
      Войти
    </button>
  );
}

export default function Example() {
  let loggedIn = false;
  const loggedInUser = localStorage.getItem("user");
  const history = useHistory();
  let username;
  if (loggedInUser) {
    loggedIn = true;
    const foundUser = JSON.parse(loggedInUser);
    username = foundUser.username;
  }


  return (
    <Disclosure as="nav" className="bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start mx-8">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="hidden lg:block h-8 w-auto mr-12"
                      src={logo}
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-12">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                    
                        to={loggedIn? item.href:"/login"}
                        className={classNames(
                          item.current ? "" : " ",
                          "px-3 py-2 rounded-md text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 space-x-2 md:space-x-4">
                <button
                  type="button"
                  className="bg-white p-1 rounded-full text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View chats</span>
                  <ChatIcon className="h-6 w-6" aria-hidden="true" />
                </button>
                <Menu as="div" className="-ml-4">
                  <div className="block">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full rounded-md py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        {/* <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                        <Badge badgeContent={4} color="primary">
                          <MailIcon color="action" />
                        </Badge>
                      </Menu.Button>
                    </div>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 items-center"
                            )}
                          >
                            <div className="flex justify-between">
                              <p>Уведомления</p>
                              <p>Очистить</p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex">
                              <DesktopComputerIcon className="h-auto w-4 mr-4" />
                              Мои курсы
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex">
                              <HeartIcon className="h-auto w-4 mr-4" />
                              Избранное
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex">
                              <BookmarkIcon className="h-auto w-4 mr-4" />
                              Мои книги
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex">
                              <CogIcon className="h-auto w-4 mr-4" />
                              Настройки
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* Profile dropdown */}
                <Menu as="div" className="-ml-4 relative">
                  <div className="block">
                    {loggedIn ? (
                      <Menu.Button className="inline-flex items-center justify-center w-full rounded-md md:py-2 bg-white text-sm font-medium text-gray-700">

                          <img className="h-8 w-8 mr-1" src={Image} alt=""/>
                          <p className='hidden md:block'>{username}</p>
                          <ChevronDownIcon className="-mr-2 ml-1 h-5 w-5" aria-hidden="true" />  
                      </Menu.Button> ) : <Btn />
                   }
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/profile"
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 items-center"
                            )}
                          >
                            <div className="flex">
                              <UserIcon className="h-auto w-4 mr-4" />
                              Your Profile
                            </div>
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex">
                              <DesktopComputerIcon className="h-auto w-4 mr-4" />
                              Мои курсы
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex">
                              <HeartIcon className="h-auto w-4 mr-4" />
                              Избранное
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex">
                              <BookmarkIcon className="h-auto w-4 mr-4" />
                              Мои книги
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex">
                              <CogIcon className="h-auto w-4 mr-4" />
                              Настройки
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            <div className="flex">
                              <LogoutIcon className="h-auto w-4 mr-4" />
                              Выход
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
