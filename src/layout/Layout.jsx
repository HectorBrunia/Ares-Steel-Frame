import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
