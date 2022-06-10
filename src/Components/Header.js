import Badge from "@mui/material/Badge";
import { Fragment, useState} from "react";
import Image from "../image/circle.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { useHistory } from "react-router-dom";
import {
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
  BellIcon,
} from "@heroicons/react/outline";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Найти ассистента", href: "/allcourses", current: true },
  { name: "Стать ассистентом", href: "/beassistant", current: false },
];
const notifications = [
  {
    image: Image,
    message: "Вы добавлены в общий чат “Monday 10:30”",
    from: "SDU Assistant",
    date: "01.08.2022",
    time: "16:08",
  },
  {
    image: Image,
    message: "Подтвердил вашу анкету на заявку “Стать ассистентом”",
    from: "SDU Assistant",
    date: "01.08.2022",
    time: "16:08",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Btn() {
  const router = useHistory();

  return (
    <button
      className="bg-white text-text_main font-semibold py-2 px-6 border border-text_main rounded mx-2"
      onClick={() => router.push("/login")}
    >
      Войти
    </button>
  );
}

export default function Header() {
  const [notifs, setNotif] = useState(notifications);
  let loggedIn = false;
  let loggedInUser = localStorage.getItem("user");
  let username;
  let role = 0;
  if (loggedInUser) {
    loggedIn = true;
    const foundUser = JSON.parse(loggedInUser);
    username = foundUser.username;
    if (JSON.parse(loggedInUser).roles === "ROLE_ASSISTENT") {
      role = 1;
      if (navigation.length === 2) {
        navigation.pop();
      }
    }
    console.log("sss: " + JSON.parse(loggedInUser).roles);
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
                        to={loggedIn ? item.href : "/login"}
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
                  className="bg-white p-1 rounded-full text-text_main focus:outline-none"
                >
                  <span className="sr-only">View chats</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.375 20.249H4.46875C4.27813 20.249 4.09531 20.1733 3.96052 20.0385C3.82573 19.9037 3.75 19.7209 3.75 19.5303V11.624C3.75 10.4914 3.97309 9.3698 4.40654 8.32337C4.83998 7.27694 5.4753 6.32613 6.2762 5.52522C7.0771 4.72432 8.02791 4.08901 9.07435 3.65556C10.1208 3.22211 11.2423 2.99902 12.375 2.99902H12.375C13.5077 2.99902 14.6292 3.22212 15.6756 3.65556C16.7221 4.08901 17.6729 4.72432 18.4738 5.52523C19.2747 6.32613 19.91 7.27695 20.3435 8.32338C20.7769 9.36981 21 10.4914 21 11.624V11.624C21 13.9115 20.0913 16.1053 18.4738 17.7228C16.8563 19.3403 14.6625 20.249 12.375 20.249Z" stroke="#08033A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.375 10.499H15" stroke="#08033A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9.375 13.499H15" stroke="#08033A" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                </button>
                <Menu as="div" className="-ml-4">
                  <div className="block">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full rounded-md py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-offset-gray-100 focus:ring-indigo-500">
                        <Badge badgeContent={0} color="primary">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 21H15" stroke="#08033A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.26904 9.74994C5.2678 8.86045 5.44262 7.97951 5.78343 7.1579C6.12424 6.33628 6.6243 5.59025 7.25477 4.9628C7.88525 4.33535 8.63368 3.83889 9.45693 3.50204C10.2802 3.16519 11.1619 2.99461 12.0514 3.00013C15.763 3.02772 18.7317 6.11275 18.7317 9.83468V10.4999C18.7317 13.8577 19.4342 15.8061 20.0529 16.871C20.1196 16.9848 20.1551 17.1142 20.1558 17.246C20.1565 17.3779 20.1224 17.5076 20.0569 17.6221C19.9915 17.7366 19.8971 17.8318 19.7831 17.8982C19.6691 17.9645 19.5397 17.9996 19.4078 17.9999H4.59222C4.46034 17.9996 4.33087 17.9645 4.21689 17.8981C4.1029 17.8318 4.00844 17.7366 3.94301 17.622C3.87759 17.5075 3.84352 17.3778 3.84425 17.2459C3.84498 17.114 3.88048 16.9846 3.94716 16.8709C4.56622 15.8059 5.26904 13.8575 5.26904 10.4999L5.26904 9.74994Z" stroke="#08033A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-[360px] rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          // <a
                          //   href="/"
                          //   className="block px-4 py-2 text-sm text-gray-700 items-center"
                          // > 
                            <div className="flex justify-between px-4 pt-1">
                              <p className="text-base text-text_main font-normal">Уведомления</p>
                              <p className="text-base text-text_gray font-normal cursor-pointer" onClick={()=>setNotif(null)}>Очистить</p>
                            </div>
                          //  </a>
                        )} 
                      </Menu.Item>
                      {notifs  ?
                        notifs.map((item) => (
                          <Menu.Item key={item.message}>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                <div className="flex flex-row space-x-3 items-center">
                                    <img
                                      alt="notif"
                                      src={item.image}
                                      className="h-8 w-8 rounded-full -mt-4"
                                    />
                                  <div>
                                    <p className="text-sm text-text_main font-semibold">{item.message}</p>
                                    <div className="flex flex-row space-x-1">
                                      <p className="text-xs text-text_gray font-normal">{item.from} -</p>
                                      <p className="text-xs text-text_gray font-normal">{item.date},</p>
                                      <p className="text-xs text-text_gray font-normal">{item.time}</p>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            )}
                          </Menu.Item>
                        )) : <div className="h-32 bg-white"></div>}
                    </Menu.Items>
                  </Transition>
                </Menu>

                {/* Profile dropdown */}
                <Menu as="div" className="-ml-4 relative">
                  <div className="block">
                    {loggedIn ? (
                      <Menu.Button className="inline-flex items-center justify-center w-full rounded-md md:py-2 bg-white text-sm font-medium text-gray-700">
                        <img className="h-8 w-8 mr-1" src={Image} alt="" />
                        <p className="hidden md:block">{username}</p>
                        <ChevronDownIcon
                          className="-mr-2 ml-1 h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    ) : (
                      <Btn />
                    )}
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
                      {role === 1 && (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/assistantt"
                              href="/assistantt"
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
                      )}
                      {role === 0 && (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/student"
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 items-center"
                              )}
                            >
                              <div className="flex">
                                <UserIcon className="h-auto w-4 mr-4" />
                                Профиль
                              </div>
                            </Link>
                          )}
                        </Menu.Item>
                      )}
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
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
                            href="/"
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
                            href="/"
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
                            href="/"
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
                            href="/login"
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
