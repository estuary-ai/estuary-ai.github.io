import '../css/SideBar.css';
import { Link } from "react-router-dom";

function SideBar() {
    return (
        <div className="sidebarContainer">
            <Link to="/docs/quickstart">Quick Start</Link>
            <Link to="/docs/quickstart">Quick Start</Link>
            <Link to="/docs/quickstart">Quick Start</Link>
        </div>
    );
}
export default SideBar;