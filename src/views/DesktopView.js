import React, { useEffect } from "react";

import Feeds from "../components/Feeds";
import "../css/BottomNav.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../App.css";
import { login, logout, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import Login from "../components/Login";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Friends from "../pages/Friends";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import Explore from "../pages/Explore";
import Profile from "../pages/Profile";

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
          <Router>
            <Header />
            <Switch>
              <>
                <Route exact path="/">
                  <Sidebar />
                  <Feeds />
                  <Widgets />
                </Route>

                <Route path="/explore" >
                  <Explore />
                </Route>
                <Route path="/friends" >
                  <Friends />
                </Route>
                <Route path="/messages" >
                  <Messages />
                </Route>
                <Route path="/notifications" >
                  <Notifications />
                </Route>
                <Route path="/profile" >
                  <Profile />
                </Route>

              </>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default DesktopView;
