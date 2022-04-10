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
    path: "/assistantt/profile",
    icon: <UserIcon />,
    cName: "h-8 w-8",
    current: true,
  },
  {
    title: "Мои курсы",
    path: "/assistantt/mycourses",
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
    path: "/assistantt/mylibrary",
    icon: <LibraryIcon />,
    cName: "h-8 w-8",
    current: false,
  },
  {
    title: "Опыт работы",
    path: "/assistantt/experience",
    icon: <BriefcaseIcon />,
    cName: "h-8 w-8",
    current: false,
  },
  {
    title: "Настройки",
    path: "/assistantt/settings",
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
