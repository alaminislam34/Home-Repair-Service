import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="max-w-7xl mx-auto min-h-[80vh]">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default MainLayout;
