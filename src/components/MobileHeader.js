import React from 'react'
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
// import { useDispatch  } from "react-redux";
// import { logout } from "../features/userSlice";
// import { auth } from "../firebase";
import {useHistory} from 'react-router-dom'
import HeaderItems from '../components/HeaderItems';
import '../css/MobileHeader.css'

function MobileHeader() {

    // const dispatch = useDispatch();
    const history = useHistory();
    // const Logout = () => {
    //   dispatch(logout());
    //   auth.signOut();
    // };
    
    return (
        <div >
            <div className="headers">
            <div className="headers-left">
        <img
          src="https://icon-library.com/images/chat-app-icon/chat-app-icon-7.jpg"
          alt="logo"
        />
        <div className="headers-search">
          <SearchRoundedIcon />
          <input placeholder="Search" type="text" />
        </div>
        <div className="headers-right">
        
        <HeaderItems
         avatar ={true}
         
          onClick={() => history.push('/profile')}
        />
      </div>
      </div>
            </div>
         
     
        </div>
        
    )
}

export default MobileHeader
