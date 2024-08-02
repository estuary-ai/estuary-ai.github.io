import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const BaseLayout = () => {
  return (
    <div>
        <NavBar />
        <div>
          <Outlet/>
        </div>
        <Footer />
    </div>
  )
};

export default BaseLayout;