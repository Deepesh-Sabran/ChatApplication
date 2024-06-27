import React from "react";
import logo from "./chat.png";
import { AnimatePresence, motion } from "framer-motion";

const Welcome = () => {
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
        className="welcome-container"
      >
        <img src={logo} alt="logo" className="welcome-logo" />
        <p>View and text directly to peoplee present in the Chat Rooms.</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Welcome;
