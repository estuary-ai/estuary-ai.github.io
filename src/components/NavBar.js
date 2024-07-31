import "../css/NavBar.css";

import { React, useState } from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import Hamburger from "./Hamburger";



function NavBar() {

    const [isHamOpen, setHamOpen] = useState(false);

    const toggleHamburger = () => {
        setHamOpen(!isHamOpen)
    }

    return (
        <div className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/docs">Docs</Link></li>
                <li><Link to="/demos">Demos</Link></li>
            </ul>
            <div className="hamburger" onClick={toggleHamburger}>
                <Hamburger isOpen={isHamOpen} />
            </div>
            <style js>{`
                {/* when screen width small */}
                @media (max-width: 767px){
                    .hamburger{
                        width: 100%;
                        display: flex;
                        margin: 0;
                        padding: 8px;
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