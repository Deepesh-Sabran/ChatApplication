import React from "react";
import logo from "./chat.png";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  let userData;
  try {
    userData = JSON.parse(localStorage.getItem("userData"));
  } catch (error) {
    console.error("Error parsing user data:", error);
  }
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated...");
    nav("/");
  }
  return (
    <div className={"welcome-container" + (lightTheme ? "" : "dark")}>
      <motion.img
        drag
        whileTap={{ scale: 1.05, rotate: 360 }}
        src={logo}
        alt="logo"
        className="welcome-logo"
      />
      <h3>Hi, {userData?.name || "User"} 👋</h3>
      <p>View and text directly to people present in the Chat Rooms.</p>
      {/* <button onClick={() => nav("/chat")}>Start Chatting</button> */}
    </div>
  );
};

export default Welcome;
