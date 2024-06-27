import React, { useState } from "react";
import ConversationItem from "./ConversationItem";
import { useSelector } from "react-redux";

const Conversations = () => {
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
  return (
    <div className={"sb-conversation" + (lightTheme ? "" : " dark")}>
      {conversations.map((conversation) => {
        return (
          <ConversationItem props={conversation} key={conversation.name} />
        );
      })}
    </div>
  );
};

export default Conversations;
