import { DoneOutlineRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";

const CreateGroups = () => {
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
        className={"createGroups-container" + (lightTheme ? "" : " dark")}
      >
        <input placeholder="Enter Group Name" className="searchBox" />
        <IconButton>
          <DoneOutlineRounded
            className={"icon" + (lightTheme ? "" : " dark")}
          />
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateGroups;
