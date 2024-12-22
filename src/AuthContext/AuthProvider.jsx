/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import Swal from "sweetalert2";
import axios from "axios";
import { useLocation } from "react-router-dom";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // on auth state change handle
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        const email = { email: currentUser?.email };
        axios
          .post("http://localhost:5000/jwt", email, { withCredentials: true })
          .then((res) => {
            console.log(res.data);
          });
      } else {
        console.log(currentUser);

        axios
          .post("http://localhost:5000/logout", {}, { withCredentials: true })
          .then((res) => {
            console.log(res);
          });
        setUser(null);
      }
    });
    return () => subscribe;
  }, []);

  // handle login user
  const handleLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle google sign up
  const handleSignUpWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // handle logout user
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Account Logout Successfully",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error("Logout failed:", error);
        Swal.fire({
          title: "Error",
          text: "Failed to logout",
          icon: "error",
        });
      });
  };

  const info = { handleLogout, user, handleLogin, handleSignUpWithGoogle };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
