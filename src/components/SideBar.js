import '../css/SideBar.css';
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className='sidebarContainer'>
            <div className="sidebarLinks">
                <Link to="/docs/quickstart">Quick Start</Link>
                <Link to="/docs/quickstart">Quick Start</Link>
                <Link to="/docs/quickstart">Quick Start</Link>

            </div>
            <div className='background1' />
            <div className='background2' />
        </div>
    );
}
export default SideBar;