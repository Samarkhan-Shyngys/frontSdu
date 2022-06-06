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
import MyStudents from "../Components/AssistantProfile/MyStudents";
import BookDetail from "../Components/AssistantProfile/BookDetail";
function AssistantProfile() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-sidebar mt-12 gap-0 md:gap-8">
        <SidebarMenu data={AssistantData} />
        <Switch>
          <Route path="/assistant/mystudents"component={MyStudents} />
          <Route path="/assistant/addcourse" component={AddCourse} />
          <Route path="/assistant/addbook" component={AddBook} />
          <Route path="/assistant/mylibrary" component={MyLibrary} />
          <Route path="/assistant/profile" component={UserProfile} />
          <Route path="/assistant/mycourses" component={MyCourses} />
          <Route path="/assistant/:id" component={BookDetail} />
          <Route path="/assistant/settings" component={Settings} />
          <Route path="/assistant/experience" component={WorkExperience} />
          <Route path="/assistant" component={UserProfile} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default AssistantProfile;
