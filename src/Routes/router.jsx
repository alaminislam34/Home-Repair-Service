import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Services from "../Pages/Services/Services";
import AddService from "../Pages/Dashboard/AddService";
import ManageService from "../Pages/Dashboard/ManageService";
import BookedService from "../Pages/Dashboard/BookedService";
import ServiceToDo from "../Pages/Dashboard/ServiceToDo";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoutes from "./PrivateRoutes";
import ServiceDetails from "../Components/ServiceDetails";
import axios from "axios";
import PageNotFound from "../Components/PageNotFound";
import AboutUs from "../Pages/AboutUs/AboutUs";
import AppointmentLetter from "../Pages/Dashboard/AppointmentLetter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
        loader: async ({ params }) => {
          const res = await axios.get(
            `${import.meta.env.VITE_URL}/serviceDetails/${params.id}`
          );
          return res.data;
        },
      },
      {
        path: "/manageService",
        element: (
          <PrivateRoutes>
            <ManageService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/bookedServices",
        element: (
          <PrivateRoutes>
            <BookedService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/serviceToDo",
        element: (
          <PrivateRoutes>
            <ServiceToDo />
          </PrivateRoutes>
        ),
      },
      {
        path: "/appointment",
        element: <AppointmentLetter />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
