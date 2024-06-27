import React from "react";
import logo from "./chat.png";
import { IconButton } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { grey } from "@mui/material/colors";

const Groups = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.5",
        }}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img
            src={logo}
            alt="logo"
            style={{ height: "2rem", width: "2rem" }}
          />
          <p className="ug-title">Available Groups</p>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
          <IconButton>
            <SearchTwoToneIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
          <input placeholder="Search..." />
        </div>
        <div className="ug-list">
          <motion.div
            whileHover={{ color: grey, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Groups</p>
          </motion.div>
          <motion.div
            whileHover={{ color: grey, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Groups</p>
          </motion.div>
          <motion.div
            whileHover={{ color: grey, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Groups</p>
          </motion.div>
          <motion.div
            whileHover={{ color: grey, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Groups</p>
          </motion.div>
          <motion.div
            whileHover={{ color: grey, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Groups</p>
          </motion.div>
          <motion.div
            whileHover={{ color: grey, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={"list-item" + (lightTheme ? "" : " dark")}
          >
            <p className="con-icon">T</p>
            <p className="con-title">Test Groups</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Groups;
