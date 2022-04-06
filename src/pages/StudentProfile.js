import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import {StudentSidebar} from '../Constants/StudentSidebar';
import Settings from "../Components/AssistantProfile/Settings";
import { MyBooks } from "../Components/StudentProfile/MyBooks";
import Favourite from "../Components/StudentProfile/Favourite";
import Profilee from "../Components/StudentProfile/Profilee";
import StudentCourses from "../Components/StudentProfile/StudentCourses";
import BreadCrumbs from "../Components/BreadCrumbs";
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
const routes = [
  {name:"Главная ", route: "/" },
  {name: "Профиль",}

]
export function StudentProfile(){
    const [cur_item, setItem] = useState(0);
    return (
        <>
          <Header />
          <BreadCrumbs routes={routes} />
          <div className="max-w-7xl mx-auto grid grid-cols-sidebar mt-12 gap-8">
            <nav className="overflow-y-auto py-4 bg-gray-50 rounded w-24 md:w-64 h-80">
              <ul className="space-y-2">
                {StudentSidebar.map((item, index) => {
                  return (
                    <li
                      key={index}
                      className={classNames(
                        cur_item===index ? "border-r-4 border-gray-900 bg-white" : "",
                        "hover:bg-white"
                      )}
                    >
                      <Link
                        to={item.path}
                        className="flex items-center p-2 text-base font-normal text-black rounded-lg h-8 w-8"
                        onClick={() => setItem(index)}
                      >
                        <div className="flex-shrink-0 w-6 h-6 text-gray-500">
                          {item.icon}
                        </div>
                        <span className="hidden md:block flex-1 ml-3 whitespace-nowrap font-semibold text-base">
                          {item.title}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <Switch>
                <Route path="/student/mycourses" component={StudentCourses} />
                <Route path="/student/mybooks" component={MyBooks} />
                <Route path="/student/liked" component={Favourite} />
                <Route path="/student/settings" component={Settings} />
                <Route path="/student" component={Profilee} />
              
            </Switch>
          </div>
          <Footer />
        </>
      )
}