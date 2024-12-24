/* eslint-disable react/prop-types */
import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import Swal from "sweetalert2";
import axios from "axios";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(true);
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const [id, setId] = useState("");

  // on auth state change handle
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        const email = { email: currentUser?.email };
        axios
          .post(`${import.meta.env.VITE_URL}/jwt`, email, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
          });
      } else {
        axios
          .post(
            `${import.meta.env.VITE_URL}/logout`,
            {},
            { withCredentials: true }
          )
          .then((res) => {
            console.log(res);
            setLoading(false);
          });
        setUser(null);
      }
    });
    return () => subscribe;
  }, []);

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

  // handle fetch services
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_URL}/allServices`, { withCredentials: true })
      .then((res) => {
        setServices(res.data);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        setError(error.message);
      });
  }, []);

  const info = {
    handleLogout,
    user,
    loading,
    services,
    error,
    loader,
    setServices,
    id,
    setId,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
