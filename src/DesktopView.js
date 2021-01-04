import React ,{useEffect, } from 'react'

import Feeds from './Feeds'
import './BottomNav.css'

import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import Login from './Login';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function DesktopView() {
    const user = useSelector(selectUser);
  const dispatch = useDispatch();
  //persist login which check auth changes
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);
    return (
      <div className="app">
              {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          
       
         
          <div className="app-body">
            {/* SIDEBAR */}
            <Sidebar />

            {/* NEWS FEED */}
            <Feeds />

        

            {/* WIDGETS */}
            <Widgets />
          </div>
         

        </div>
        
      )}
        </div>
    )
}

export default DesktopView
