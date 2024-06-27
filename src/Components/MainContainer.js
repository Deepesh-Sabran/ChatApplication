import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
// import WorkArea from "./WorkArea";
// import ChatArea from "./ChatArea";
// import Welcome from "./Welcome";
// import CreateGroups from "./CreateGroups";
// import UsersGroups from "./GroupsUsers";
// import ConversationItem from "./ConversationItem";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
      {/* <Welcome /> */}
      {/* <UsersGroups /> */}
      {/* <CreateGroups /> */}
      {/* <ChatArea props={ConversationItem[0]} /> */}
    </div>
  );
};

export default MainContainer;
