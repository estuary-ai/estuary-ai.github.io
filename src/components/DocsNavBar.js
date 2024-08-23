import "../css/DocsNavBar.css";

import { Link } from "react-router-dom";
import { useState } from "react";
import DocsLinks from "./DocsLinks";
import Hamburger from "./Hamburger";

function DocsNavBar({ currentPageName }) {

    const [isSideOpen, setSideOpen] = useState(false);

    const symbol = isSideOpen ? '<' : '>';

    const toggleSide = () => {
        console.log('===== toggle')
        setSideOpen(!isSideOpen)
    }


    return (
        <div className="docsNavBarContainer">
            <p onClick={toggleSide} > {symbol} </p>
            <div className='sidebarCollapsed'>
                <DocsLinks />
            </div>


            <style jsx="true">{`
                /* when screen small */
                @media (max-width: 767px){
                    .docsNavBarContainer{ 
                        position: fixed;
                        top: 50px; /* How far down the page you want your thing to live */

                        display: flex;
                        width: ${isSideOpen ? '80%' : '50px'};
                        align-items: top;


                        background-color: var(--middle-gray);
                        color: var(--white);
                    
                        /* Give table of contents a scrollbar */
                        height: calc(100vh - 50px);
                        overflow: auto;

                        
                        padding: 40px 0px 0 20px;

                        display: flex;
                        flex-direction: column;
                        row-gap: 10px;
                        
                        z-index: 10;
                    }
                    .sidebarCollapsed{
                        display: ${isSideOpen ? 'flex' : 'none'};
                        flex-direction: column;
                        justify-content: space-between;
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
export default DocsNavBar;