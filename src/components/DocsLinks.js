import React from "react";
import { Link } from "react-router-dom";

function DocsLinks() {
    return (
        <>
        {/* link hierarchy is defined in index.js */}
            <Link to="/docs" id="link-introduction">Introduction</Link>
            <Link to="/docs/server" id="link-server">Server</Link>
            <Link to="/docs/unitysdk" id="link-unity-sdk">Unity SDK</Link>
            <Link to="/docs/avpdemo" id="link-avp-demo">Apple Vision Pro Demo</Link>
        </>
    )
    
}

export default DocsLinks;