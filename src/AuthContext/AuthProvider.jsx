/* eslint-disable react/prop-types */
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  const info = { handleLogout, user, handleLogin };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
