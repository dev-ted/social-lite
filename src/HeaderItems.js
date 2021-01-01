import React from "react";
import "./HeaderItems.css";
import {Avatar} from '@material-ui/core'
import {  useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderItems({ avatar, Icon, title ,onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerItem">
      {/* render icons only when passing props */}
      {Icon && <Icon className="headerItem-Icon" />}
      {/* if we have and avatar render code */}
      {avatar && <Avatar className="headerItem-icon" src ={user?.photoURL} >
        {user?.email[0]}
        </Avatar>}
      <h3 className="headerItem-title">{title}</h3>
    </div>
  );
}

export default HeaderItems;
