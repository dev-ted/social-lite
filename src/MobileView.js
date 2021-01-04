import React, { useEffect } from "react";
import BottomNav from "./BottomNav";

import Feeds from "./Feeds";
import MobileHeader from "./MobileHeader";

import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import { useSelector } from "react-redux";
import Login from "./Login";

import "./App.css";


function MobileView() {
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
          <MobileHeader />

          <div className="nav">
            <BottomNav />
          </div>

          <div className="app-body">
           

           
            <Feeds />

           
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileView;
