import React, { useState } from "react";
import { login } from "../features/userSlice";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../css/Login.css";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const dispatch = useDispatch();
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const LoginApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    }).catch((error) => alert("username or password is invalid"))
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    if (!email) {
      return alert("Please enter an email");
    }
    if (!password) {
      return alert("Please enter a password");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: photoUrl,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: photoUrl,
              })
            );
          });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
 
      <img
        src="https://icon-library.com/images/chat-app-icon/chat-app-icon-7.jpg"
        alt=""
      />
      
      <form>
       
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          type="email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          required
        />
        <button type="submit" onClick={LoginApp}>
          Sign In
        </button>
      </form>
      <p>
        No Account ?
        <span className="login-register" onClick={handleShow}>
          Sign Up
        </span>
      </p>



      <Modal className="modal" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>

<div className="login">
<img
        src="https://icon-library.com/images/chat-app-icon/chat-app-icon-7.jpg"
        alt=""
      />
      
      <form >
      <input
          value={name}
          onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your name"
          required
        />
       
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Username"
          type="email"
          required
        />
        <input
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)} type="text" placeholder="eg . https://profile.png"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
          required
        />
        <button type="submit" onClick={register} >
          Sign Up
        </button>
      </form>
</div>
          
        </Modal.Body>
       
      </Modal>

    </div>
  );
}

export default Login;
