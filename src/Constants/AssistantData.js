import {
  UserIcon,
  LibraryIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CogIcon,
  LogoutIcon,
} from "@heroicons/react/outline";

export const AssistantData = [
  {
    title: "Профиль",
    path: "/assistant/profile",
    icon: <UserIcon />,
    cName: "h-8 w-8",
    current: true,
  },
  {
    title: "Мои курсы",
    path: "/assistant/mycourses",
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
    path: "/assistant/mylibrary",
    icon: <LibraryIcon />,
    cName: "h-8 w-8",
    current: false,
  },
  {
    title: "Опыт работы",
    path: "/assistant/experience",
    icon: <BriefcaseIcon />,
    cName: "h-8 w-8",
    current: false,
  },
  {
    title: "Настройки",
    path: "/assistant/settings",
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
