import { React, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import DocsPage from "./DocsPage";
import DemosPage from "./DemosPage";

import Hamburger from "./Hamburger";

{/* <Route path="/" component={App} />
<Route path="/docs" component={DocsPage} />
<Route path="/demos" component={DemosPage} /> */}

function NavBar() {

    const [isHamOpen, setHamOpen] = useState(false);

    const toggleHamburger = () => {
        setHamOpen(!isHamOpen)
    }

    return (
        <div className="navigation">
            <ul>
                <li>Home</li>
                <li><a href="./DocsPage.js">Docs</a></li>
                <li><a href="./DemosPage.js">Demos</a></li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={isHamOpen} />
            </div>
            <style js>{`
                .navigation{
                    display: flex;
                    width: 100%;
                    height: 50px;
                    flex-direction: row;
                }
                .navigation ul{
                    width: 100%;
                    display:flex;
                    margin: 0;
                    padding: 0;
                    justify-content: center;
                    overflow: hidden;
                    z-index: 6;
                }
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 10px;
                }

                .hamburger{
                    
                    display:none;
                    
                } 


                {/* when screen width is small */}
                @media (max-width: 767px){
                    .hamburger{
                        width: 100%;
                        display: flex;
                        margin: 0;
                        padding-top: 8px;
                        overflow: hidden;
                        justify-content: flex-end;
                        z-index: 6;
                    }
                
                    .navigation ul{
                        display: ${isHamOpen ? 'flex' : 'none'};
                        flex-direction: column;
                        align-items: flex-end;
                        position: fixed;
                        background-color: #373737f5;
                        color: aliceblue;
                        height: 150px;
                        width: 100vw;
                        margin-top: 50px;
                    }
                }
            `}</style>
        </div>
    )

}

export default NavBar;