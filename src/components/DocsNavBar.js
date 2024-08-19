import '../css/SideBar.css';
import { Link } from "react-router-dom";
import { useState } from "react";

function SideBar({currentPageName}) {

    const [isSideOpen, setSideOpen] = useState(false);

    const toggleSide = () => {
        setSideOpen(!isSideOpen)
    }


    return (
        <div className="sidebarContainer">
            <Link to="/docs" id="link-introduction">Introduction</Link>
            <Link to="/docs/quickstart" id="link-quick-start">Quick Start</Link>
            <Link to="/docs/quickstart" id="link-dummy1">Dummy 1</Link>
            <Link to="/docs/quickstart" id="link-dummy2">Dummy 2</Link>

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

                /* highlight the current page in sidebar */
                #${currentPageName}{
                    background-color: var(--orange);
                    color: var(--white);
                }
                                
            `}</style>
        </div>
    );
}
export default SideBar;