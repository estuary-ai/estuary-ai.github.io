import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const BaseLayout = () => {
  return (
    <div>
        <NavBar />
        <div style={{marginTop: "80px", marginLeft: "30px", marginRight: "30px"}}>
          <Outlet/>
        </div>
    </div>
  )
};

export default BaseLayout;