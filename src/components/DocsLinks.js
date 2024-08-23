import React from "react";
import { Link } from "react-router-dom";

function DocsLinks() {
    return (
        <>
            <Link to="/docs" id="link-introduction">Introduction</Link>
            <Link to="/docs/quickstart" id="link-quick-start">Quick Start</Link>
            <Link to="/docs/quickstart" id="link-dummy1">Dummy 1</Link>
            <Link to="/docs/quickstart" id="link-dummy2">Dummy 2</Link>
        </>
    )
    
}

export default DocsLinks;