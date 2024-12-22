/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  if (!user) {
    navigate("/");
  }
  return <Navigate state={location.pathname}>{children}</Navigate>;
};

export default PrivateRoutes;
