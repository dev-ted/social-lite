import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import '../css/Profile.css'

function Profile() {
    const user = useSelector(selectUser);
    return (
        <div className="profiles">
            <div className="profile__top">
            <img src="https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="" />
        <Avatar className="profile__avatar" src ={user.photoURL}>
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
            </div>

            
           
        </div>
    )
}

export default Profile
