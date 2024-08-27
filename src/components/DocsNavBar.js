import "../css/DocsNavBar.css";

import { useState } from "react";
import DocsLinks from "./DocsLinks";

function DocsNavBar({ currentPageName }) {

    const [isSideOpen, setSideOpen] = useState(false);

    const symbol = isSideOpen ? '<' : '>';

    const width = isSideOpen ? 'max(50%, 190px)' : '100%';

    const toggleSide = () => {
        console.log('===== toggle')
        setSideOpen(!isSideOpen)
    }


    return (
        <div>
            <div className={`transparentBackground ${isSideOpen ? 'active' : ''}`} onClick={toggleSide}></div>
            <div className={`docsNavBarContainer ${isSideOpen ? 'active' : ''}`}>
                <button onClick={toggleSide}> 
                    {symbol} 
                </button>
                <div className={`divider ${isSideOpen ? 'active' : ''}`}/>
                <div className='sidebarCollapsed'>
                    <DocsLinks />
                </div>


                <style jsx="true">{`
                /* when screen small */
                @media (max-width: 767px){
                    .docsNavBarContainer{ 
                        width: ${width};
                        height: 50px;
                        padding: 10px 0 0 20px;
                        margin: 0;
                        z-index: 5;

                        position: fixed;
                        display: flex;
                        flex-direction: column;
                        row-gap: 10px;

                        top: 50px; /* How far down the page you want your thing to live */
                        overflow-y: hidden;

                        background-color: var(--dark-slate-blue);
                        color: var(--white);
                        
                        transition: all 0.3s linear;
                        --webkit-transition: all 0.3s linear;
                        -ms-transition: all 0.3s linear;
                    }

                    .docsNavBarContainer.active{ 
                        width: ${width};
                        height: calc(100vh - 50px);

                        margin: 0;
                        padding: 10px 0 0 20px;

                        animation-duration: 1s; /* don't want scroll bar appearing until after height transition */
                        animation-name: delay-overflow;
                        animation-iteration-count: 1;
                        animation-timing-function: linear;
                        animation-fill-mode: forwards;
                    }

                    @keyframes delay-overflow {
                        0% { overflow-y: hidden; }
                        99% { overflow-y: hidden; }
                        100% { overflow-y: auto; }
                    }

                    .docsNavBarContainer a{ 
                        text-decoration: none;
                        color: var(--white);
                        padding: 10px;
                        border-radius: 15px 0 0 15px;
                        font-weight: 100;

                        transition: all 0.3s;
                        --webkit-transition: all 0.3s;
                        -ms-transition: all 0.3s;
                    }

                    .docsNavBarContainer a:hover{
                        color: var(--middle-green);
                        font-weight: 400;
                        font-size: 1.1em;
                    }

                    .docsNavBarContainer button{
                        all: unset;
                        padding-left: ${isSideOpen ? 'calc(80% - 10px)' : '10px'};
                        padding-right: 10px;
                        padding-top: ${isSideOpen ? '10px' : '3px'};
                        padding-bottom: 10px;

                        transition: all 0.3s;
                        --webkit-transition: all 0.3s;
                        -ms-transition: all 0.3s;
                    }

                    .docsNavBarContainer button:hover{
                        color: var(--middle-green);
                        font-weight: 800;
                        font-size: 1.3em;
                        margin-top: ${isSideOpen ? '-1px' : '-4px'};
                    }

                    .sidebarCollapsed{
                        display: ${isSideOpen ? 'flex' : 'none'};
                        flex-direction: column;
                        justify-content: space-between;
                        transform-origin: 0.2px;

                        transition: all 0.3s linear;
                        --webkit-transition: all 0.3s linear;
                        -ms-transition: all 0.3s linear;
                    }

                    .transparentBackground{
                        position: fixed;
                        display: flex;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 0px;
                        background-color: transparent;
                        z-index: 5;

                        transition: all 0.3s linear;
                        --webkit-transition: all 0.3s linear;
                        -ms-transition: all 0.3s linear;
                    }

                    .transparentBackground.active{
                        height: 100%;
                        background-color: var(--dark-blue-transparent);
                        display: block;

                    }

                    .divider {
                        display: flex;
                        width: 0%;
                        height: 2px;
                        background-color: var(--white);
                        border-radius: 5px;

                        transition: all 0s linear;
                        --webkit-transition: all 0s linear;
                        -ms-transition: all 0s linear;
                    }

                    .divider.active{
                        display: block;
                        width: 80%;

                        transition: all 1s ease;
                        --webkit-transition: all 1s ease;
                        -ms-transition: all 1s ease;
                    }
                }

                /* highlight the current page in sidebar */
                #${currentPageName}{
                    background-color: var(--orange);
                    color: var(--white);
                }
                                
            `}</style>
            </div>
        </div>
    );
}
export default DocsNavBar;