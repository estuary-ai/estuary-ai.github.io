import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const BaseLayout = () => {
  return (
    <div className='main-container' style={{backgroundColor: "gray"}}>
        <NavBar />
        <Outlet />

        <style js>{`
            .main-container{
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            }
        `}</style>
    </div>
  )
};

export default BaseLayout;