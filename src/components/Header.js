import React from "react";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import "../css/Header.css";
import HeaderItems from "../components/HeaderItems";
import Dropdown from "../components/Dropdown";
import HomeIcon from "@material-ui/icons/Home";
import PeopleIcon from "@material-ui/icons/People";
import {Link,   } from 'react-router-dom'
import ExploreIcon from '@material-ui/icons/Explore';


import SendIcon from "@material-ui/icons/Send";
import NotificationsIcon from "@material-ui/icons/Notifications";


function Header() {


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
        
      <Link to="/" >
      <HeaderItems Icon={HomeIcon} title="Home"  />
      </Link>
      <Link to="/explore" >
      <HeaderItems Icon={ExploreIcon} title="Explore"  />
      </Link>
       <Link to="/friends">
       <HeaderItems Icon={PeopleIcon} title="Friends"  />

       </Link>
       <Link to="/messages">
       <HeaderItems Icon={SendIcon} title="Messages"  />

       </Link>
       <Link to="/notifications">

       <HeaderItems Icon={NotificationsIcon} title="Notifications"  />
       </Link>
       
        
        
       
        
       
      </div>
      <Dropdown />
    </div>
  );
}

export default Header;
