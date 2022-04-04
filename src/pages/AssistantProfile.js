import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { AssistantData } from "../Constants/AssistantData";
import Header from "../Components/Header";
import UserProfile from "../Components/AssistantProfile/UserProfile";
import Footer from "../Components/Footer";
import Settings from "../Components/AssistantProfile/Settings";
import WorkExperience from "../Components/AssistantProfile/WorkExperience";
import MyCourses from "../Components/AssistantProfile/MyCourses";
import MyLibrary from "../Components/AssistantProfile/MyLibrary";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function AssistantProfile() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto grid grid-cols-sidebar mt-12 gap-8">
        <nav className="overflow-y-auto py-4 bg-gray-50 rounded w-64 h-80">
          <ul className="space-y-2">
            {AssistantData.map((item, index) => {
              return (
                <li
                  key={index}
                  className={classNames(
                    item.current ? "border-r-4 border-gray-900" : "",
                    "hover:bg-white"
                  )}
                >
                  <Link
                    to={item.path}
                    className="flex items-center p-2 text-base font-normal text-black rounded-lg h-8 w-8"
                    onClick={() => (item.current = !item.current)}
                  >
                    <div className="flex-shrink-0 w-6 h-6 text-gray-500">
                      {item.icon}
                    </div>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Switch>
        <Route path="/assistant/mylibrary" component={MyLibrary} />
          <Route path="/assistant/profile" component={UserProfile} />
          <Route path="/assistant/mycourses" component={MyCourses} />
          <Route path="/assistant/settings" component={Settings} />
          <Route path="/assistant/experience" component={WorkExperience} />
          <Route path="/sidebar/" component={Header} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default AssistantProfile;
