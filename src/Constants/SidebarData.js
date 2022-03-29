import {
  UserIcon,
  LibraryIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

export const SidebarData = [
  {
    title: "Профиль",
    path: "/sidebar/assistant",
    icon: <UserIcon />,
    cName: "h-8 w-8",
    current: true,
  },
  {
    title: "Мои курсы",
    path: "/sidebar/mycourses",
    icon: <LibraryIcon />,
    cName: "h-8 w-8",
    current: false,
  },
  {
    title: "Мои студенты",
    path: "/",
    icon: <AcademicCapIcon />,
    cName: "h-8 w-8",
    current: false,
  },
  {
    title: "Моя библиотека",
    path: "/sidebar/mylibrary",
    icon: <LibraryIcon />,
    cName: "h-8 w-8",
    current: false,
  },
  {
    title: "Опыт работы",
    path: "/sidebar/experience",
    icon: <BriefcaseIcon />,
    cName: "h-8 w-8",
    current: false,
  },
  {
    title: "Настройки",
    path: "/sidebar/settings",
    icon: <CogIcon />,
    cName: "h-8 w-8",
    current: false,
  },
  {
    title: "Выход",
    path: "/",
    icon: <LogoutIcon />,
    cName: "h-8 w-8",
    current: false,
  },
];
