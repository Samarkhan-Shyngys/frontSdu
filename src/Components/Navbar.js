import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { SidebarData } from "../Constants/SidebarData";
import Header from "../Components/Header";
import Login from "../pages/Login";
function Navbar() {
  return (
    <>
      <Header />
      <div className="max-w-7xl mx-auto grid grid-cols-sidebar mt-12">
        <nav className="overflow-y-auto py-4 px-12 bg-gray-50 rounded w-72">
          <ul className="space-y-2">
            {SidebarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center p-2 text-base font-normal text-black rounded-lg h-8 w-8"
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
          <Route path="/sidebar/assistant" component={Login} />
          <Route path="/sidebar/" component={Header} />
        </Switch>
      </div>
    </>
  );
}

export default Navbar;
