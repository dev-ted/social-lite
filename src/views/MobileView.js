import React, { useEffect } from "react";
import BottomNav from "../components/BottomNav";

import Feeds from "../components/Feeds";
import MobileHeader from "../components/MobileHeader";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { login, logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import Login from "../components/Login";

import "../App.css";
import Friends from "../pages/Friends";
import Explore from "../pages/Explore";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import Sidebar from "../components/Sidebar";

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
        
         
         <Router>
         <MobileHeader />
         <div className="mobile-nav">
          
            <BottomNav />
          </div>
          <div className="app-body">
            <Switch>
              <Route exact path="/">
                <Feeds />
              </Route>
              <Route path="/friends">
                <Friends />
              </Route>
              <Route path="/explore">
                <Explore />
              </Route>
              <Route path="/messages">
                <Messages />
              </Route>
              <Route path="/notifications">
                <Notifications />
              </Route>
              <Route path="/profile">
                <Sidebar />
              </Route>
            </Switch>
         
          </div>
          </Router>
          
        </div>
      )}
    </div>
  );
}

export default MobileView;
