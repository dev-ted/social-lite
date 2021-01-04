import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "./Header.css";
import HeaderItems from "./HeaderItems";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";

import SendIcon from "@material-ui/icons/Send";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch  } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./firebase";
function Header() {

  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://icon-library.com/images/chat-app-icon/chat-app-icon-7.jpg"
          alt="logo"
        />
        <div className="header-search">
          <SearchRoundedIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header-right">
        <HeaderItems Icon={HomeIcon} title="Home" />
        <HeaderItems Icon={PeopleIcon} title="Friends"  />
        <HeaderItems Icon={SendIcon} title="Messages"  />
        <HeaderItems Icon={NotificationsIcon} title="Notifications"  />
        <HeaderItems
         avatar ={true}
          title="Sign Out"
          onClick={Logout}
        />
      </div>
    </div>
  );
}

export default Header;
