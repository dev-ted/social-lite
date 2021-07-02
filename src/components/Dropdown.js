import React, { useState } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import LockIcon from "@material-ui/icons/Lock";
import "../css/Dropdown.css";
import Menu from "@material-ui/core/Menu";
import { Link,  } from "react-router-dom";

import Fade from "@material-ui/core/Fade";
import { Avatar } from "@material-ui/core";
import { useDispatch  } from "react-redux";
import { logout } from "../features/userSlice";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
   const dispatch = useDispatch();
   const user = useSelector(selectUser);
  
   const Logout = () => {
     dispatch(logout());
     auth.signOut();
   };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="dropdown">
      <ArrowDropDownIcon
        className="icon"
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      />
      <Menu
        className=" menu-items"
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <div className="menu__section">
          <Link className="link" to="/profile">
            <div className="profile">
              <Avatar className="section__icon"  src ={user?.photoURL}>
                  {user?.email[0]}
                  </Avatar> 
                  {user?.displayName}
            </div>
          </Link>
          <Link to="/settings">
            <div className="settings">
              <SettingsIcon className="section__icon" /> settings
            </div>
          </Link>
          <Link to="/privacy">
            <div className="privacy">
              <LockIcon className="section__icon" /> Privacy
            </div>
          </Link>

          <div className="logout" onClick ={Logout}>
            <ExitToAppIcon  className="section__icon" /> Log out 
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Dropdown;
