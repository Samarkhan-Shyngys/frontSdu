import React from "react";
import {Switch, Route } from "react-router-dom";
import { AssistantData } from "../Constants/AssistantData";
import Header from "../Components/Header";
import UserProfile from "../Components/AssistantProfile/UserProfile";
import Footer from "../Components/Footer";
import Settings from "../Components/AssistantProfile/Settings";
import WorkExperience from "../Components/AssistantProfile/WorkExperience";
import MyCourses from "../Components/AssistantProfile/MyCourses";
import MyLibrary from "../Components/AssistantProfile/MyLibrary";
import AddCourse from "../Components/AssistantProfile/AddCourse";
import AddBook from "../Components/AssistantProfile/AddBook";
import SidebarMenu from "../Components/SidebarMenu";

function AssistantProfile() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-sidebar mt-12 gap-0 md:gap-8">
        <SidebarMenu data={AssistantData} />
        <Switch>
          <Route path="/assistantt/addcourse" component={AddCourse} />
          <Route path="/assistantt/addbook" component={AddBook} />
          <Route path="/assistantt/mylibrary" component={MyLibrary} />
          <Route path="/assistantt/profile" component={UserProfile} />
          <Route path="/assistantt/mycourses" component={MyCourses} />
          <Route path="/assistantt/settings" component={Settings} />
          <Route path="/assistantt/experience" component={WorkExperience} />
          <Route path="/assistantt" component={UserProfile} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default AssistantProfile;
