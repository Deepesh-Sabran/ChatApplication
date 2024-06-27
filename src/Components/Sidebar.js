import React from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LightMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import Conversations from "./Conversations";

const Sidebar = () => {
  const navigate = useNavigate();
  const lightTheme = useSelector((state) => state.themeKey);
  const dispatch = useDispatch();
  return (
    <div className="sideBar">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div className="other-icons">
          <IconButton
            onClick={() => {
              navigate("welcome");
            }}
          >
            <AccountCircleIcon
              className={"icon" + (lightTheme ? "" : " dark")}
            />
          </IconButton>

          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lightTheme && (
              <NightlightIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightMode className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchTwoToneIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
        <input placeholder="Search..." />
      </div>
      <Conversations />
    </div>
  );
};

export default Sidebar;
