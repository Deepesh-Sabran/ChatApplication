import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { grey } from "@mui/material/colors";

const ConversationItem = ({ props }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      whileHover={{ color: grey, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="conversation-container"
      onClick={() => {
        navigate("chat");
      }}
    >
      <p className="con-icon">{props.name[0]}</p>
      <p className="con-title">{props.name}</p>
      <p className="con-lastMessage">{props.lastMessage}</p>
      <p className="con-timeStamp">{props.timeStamp}</p>
    </motion.div>
  );
};

export default ConversationItem;
