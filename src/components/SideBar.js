import '../css/SideBar.css';
import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar() {

    const [isSideOpen, setSideOpen] = useState(false);

    const toggleSide = () => {
        setSideOpen(!isSideOpen)
    }

    return (
        <div className="sidebarContainer">
            <Link to="/docs/quickstart">Quick Start</Link>
            <Link to="/docs/quickstart">Quick Start</Link>
            <Link to="/docs/quickstart">Quick Start</Link>

            <div className='sidebarCollapsed' onClick={toggleSide}>
            </div>

            <style jsx="true">{`
                /* when screen small */
                @media (max-width: 767px){
                    .sidebarCollapsed{
                        display: ${isSideOpen ? 'flex' : 'none'};
                        width: 2rem;
                        height: 0.25rem;
                        border-radius: 10px;
                        background-color: white;
                        transform-origin: 0.2px;
                        transition: all 0.3s linear;
                    }
                }
                                
            `}</style>
        </div>
    );
}
export default SideBar;