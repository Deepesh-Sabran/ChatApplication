import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { IconButton } from "@mui/material";
import MessageOthers from "./MessageOthers";
import MessageSelf from "./MessageSelf";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const ChatArea = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  const [conversations, setConversations] = useState([
    {
      name: "Test1",
      lastMessage: "The LastMessage we have is from your Mamma.",
      timeStamp: "today",
    },
    {
      name: "Test2",
      lastMessage: "The LastMessage we have is from your Mamma.",
      timeStamp: "today",
    },
    {
      name: "Test3",
      lastMessage: "The LastMessage we have is from your Mamma.",
      timeStamp: "today",
    },
  ]);
  var props = conversations[0];
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
        className="chatArea"
      >
        <div className={"ca-header" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>
            {props.name[0]}
          </p>
          <div className={"title" + (lightTheme ? "" : " dark")}>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>
              {props.name}
            </p>
            <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
              {props.timeStamp}
            </p>
          </div>
          <IconButton>
            <DeleteOutlinedIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
        </div>
        {/* _______________________________________ */}

        <div className={"msg-container" + (lightTheme ? "" : " dark")}>
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
          <MessageOthers />
          <MessageSelf />
        </div>
        {/* _______________________________________ */}

        <div className={"typing-msg" + (lightTheme ? "" : " dark")}>
          <IconButton>
            <EmojiEmotionsIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>
          <IconButton>
            <AttachFileIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <input type="text" placeholder="Type a message .." />
          <IconButton>
            <SendIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatArea;
