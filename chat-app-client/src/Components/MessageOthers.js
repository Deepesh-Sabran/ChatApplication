import React from "react";
import "./myStyles.css";
import { useSelector } from "react-redux";

const MessageOthers = () => {
  const lightTheme = useSelector((state) => state.themeKey);
  var props1 = { name: "RandomUser", message: "This is a sample message !!" };

  return (
    <div className="msg-other">
      <div className="ca-conversation">
        <p className={"ca-con-icon" + (lightTheme ? "" : " dark")}>
          {props1.name[0]}
        </p>
        <div className="ca-other-text-content">
          <p className="ca-con-title">{props1.name}</p>
          <p className="ca-con-lastMessage">{props1.message}</p>
          <p className="ca-self-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
};

export default MessageOthers;
