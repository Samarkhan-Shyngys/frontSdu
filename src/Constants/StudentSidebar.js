import {
    UserIcon,
    LibraryIcon,
    BriefcaseIcon,
    CogIcon,
    LogoutIcon,
  } from "@heroicons/react/outline";
  
  export const StudentSidebar = [
    {
      title: "Профиль",
      path: "/student/profile",
      icon: <UserIcon />,
      cName: "h-8 w-8",
      current: true,
    },
    {
      title: "Мои курсы",
      path: "/student/mycourses",
      icon: <LibraryIcon />,
      cName: "h-8 w-8",
      current: false,
    },
    {
      title: "Избранное",
      path: "/student/liked",
      icon: <BriefcaseIcon />,
      cName: "h-8 w-8",
      current: false,
    },
    {
      title: "Мои книги",
      path: "/student/mybooks",
      icon: <LibraryIcon />,
      cName: "h-8 w-8",
      current: false,
    },

    {
      title: "Настройки",
      path: "/student/settings",
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
  