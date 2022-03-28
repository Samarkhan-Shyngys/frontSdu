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
    path: "/sidebar/",
    icon: <UserIcon />,
    cName: "h-8 w-8",
  },
  {
    title: "Мои курсы",
    path: "/sidebar/assistant",
    icon: <LibraryIcon />,
    cName: "h-8 w-8",
  },
  {
    title: "Мои студенты",
    path: "/",
    icon: <AcademicCapIcon />,
    cName: "h-8 w-8",
  },
  {
    title: "Моя библиотека",
    path: "/",
    icon: <LibraryIcon />,
    cName: "h-8 w-8",
  },
  {
    title: "Опыт работы",
    path: "/",
    icon: <BriefcaseIcon />,
    cName: "h-8 w-8",
  },
  {
    title: "Настройки",
    path: "/",
    icon: <CogIcon />,
    cName: "h-8 w-8",
  },
  {
    title: "Выход",
    path: "/",
    icon: <LogoutIcon />,
    cName: "h-8 w-8",
  },
];
