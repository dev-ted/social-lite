import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feeds from "./Feeds";
import { auth } from "./firebase";
import Header from "./Header";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import Widgets from "./Widgets";

function App() {
  // pull user from data store
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //persist login which check auth changes
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {

        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
   

      {/* check if theres a user */}

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
  );
}

export default App;
