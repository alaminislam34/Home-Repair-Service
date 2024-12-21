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
        element: <AddService />,
      },
      {
        path: "/manageService",
        element: <ManageService />,
      },
      {
        path: "/bookedServices",
        element: <BookedService />,
      },
      {
        path: "/serviceToDo",
        element: <ServiceToDo />,
      },
    ],
  },
]);

export default router;
