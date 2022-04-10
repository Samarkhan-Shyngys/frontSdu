import React from "react";
import {Switch, Route } from "react-router-dom";
import Header from '../Components/Header';
import Footer from "../Components/Footer";
import {StudentSidebar} from '../Constants/StudentSidebar';
import Settings from "../Components/AssistantProfile/Settings";
import { MyBooks } from "../Components/StudentProfile/MyBooks";
import Favourite from "../Components/StudentProfile/Favourite";
import Profilee from "../Components/StudentProfile/Profilee";
import StudentCourses from "../Components/StudentProfile/StudentCourses";
import BreadCrumbs from "../Components/BreadCrumbs";
import SidebarMenu from "../Components/SidebarMenu";
const routes = [
  {name:"Главная ", route: "/" },
  {name: "Профиль",}

]
export function StudentProfile(){
    return (
        <>
          <Header />
          <BreadCrumbs routes={routes} />
          <div className="max-w-7xl mx-auto grid grid-cols-sidebar mt-12 gap-8">
            <SidebarMenu data={StudentSidebar} />
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