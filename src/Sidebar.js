import { Avatar } from "@material-ui/core";
import React from "react";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser)

// create function to pass in recent topics
const recentTopic = (item) =>(
    <div className="sidebar-recentTopic">
<span className="hashtag">#</span>
<p>{item}</p>
    </div>
)

  return (
    <div className="sidebar">
      {/* profile section */}
      <div className="sidebar-top">
        <img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="" />
        <Avatar className="sidebar-avatar" src ={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      {/* stat section */}
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Posts</p>
          <p className="stats-number">9</p>
        </div>
        <div className="sidebar-stat">
          <p>Likes</p>
          <p className="stats-number">200</p>
        </div>
        <div className="sidebar-stat">
          <p>Shares</p>
          <p className="stats-number">4</p>
        </div>
      </div>

      {/* bottom section */}
      <div className="sidebar-bottom">
          <p>Apps and Games</p>
          {recentTopic("CSGO") }
          {recentTopic("React Native") }
          {recentTopic("COD Mobile") }
          {recentTopic("FiFa 21") }
      </div>
    </div>
  );
}

export default Sidebar;
