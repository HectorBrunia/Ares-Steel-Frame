import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import WhatsAppButton from "../Components/WhatsAppButton";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <WhatsAppButton />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
