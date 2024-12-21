/* eslint-disable react/prop-types */
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
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

  //   handle log out user
  const handleLogout = () => {
    signOut(auth).then((res) => {
      console.log(res);
      Swal.fire({
        title: "Success",
        text: "Account Logout Successfully",
        icon: "success",
      });
    });
  };

  const info = { handleLogout, user, handleLogin };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
