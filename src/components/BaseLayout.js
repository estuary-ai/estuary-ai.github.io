import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const BaseLayout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
    </div>
  )
};

export default BaseLayout;