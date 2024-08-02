import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const BaseLayout = () => {
  return (
    <div>
        <NavBar />
        <div>
          <Outlet/>
        </div>
    </div>
  )
};

export default BaseLayout;