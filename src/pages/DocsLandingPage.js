// Documentation: Landing page (id = link-introduction)

import DocsTemplate from '../components/DocsTemplate';
import { Link } from 'react-router-dom';

function DocsLandingPage() {
    // page name must correspond with id of Link component in SideBar.js
    const PageName = "link-introduction";

    const DummyText = "Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus."

    const Content = () => {
        return (
            <div>
                <h1 id="h-introduction">Introduction</h1>
                <p> Estuary is a framework for building multimodal real-time Socially Intelligent Agents (SIAs). </p>
                <p> We're still actively working on developing our framework as well as demonstration projects, so please be on the lookout! Check this page for updates, join our <a className="docsbtn" href="https://discord.gg/2Nazr9w25n" target="_blank" rel="noreferrer">Discord</a>, or sign up for our <a className='docsbtn' href="https://docs.google.com/forms/d/e/1FAIpQLSfVsILYf80FSj1jUO7HxvoA2MmJ2GdH7QB7VF_7JRpRr8YUjg/viewform" target="_blank" rel="noreferrer">mailing list</a>! 
                
                    <br/>
                    <br/>
                    We promise not to spam your inboxes, and we would love to see what you create using Estuary!</p>

                <div className="divider"></div>

                <h2 id="h-something">Client-Server Architecture</h2>
                <p> Estuary is made up of two components: a client and a server. </p>
                <h3 id="h-client">Client</h3>
                <p>
                On the client side, we chose to work with Unity for versatility and ease of use. The client is responsible for rendering the assets in VR or AR, handling user input, and communicating with the server. We have created a Unity SDK (plugin) for easy connection with the server, but further implementation of the client is platform-specific, based on the available libraries, user input methods, and sensors available. Our Unity SDK documentation and a demonstration Unity project for an Apple Vision Pro client can be found at <Link to="/docs/unitysdk" id="link-unity-sdk">Unity SDK</Link> and <Link to="/docs/avpdemo" id="link-avp-demo">Apple Vision Pro Demo</Link>.</p>
                
                <h3 id="h-server">Server</h3>
                
                <p>Our server, called "Mangrove", is built on Python and is responsible for the heavy computations and AI modules to keep the client lightweight. The server is platform-agnostic, as long as the machine is able to run Python and related packages. The full source code and further documentation can be found here at <Link to="/docs/server" id="link-server">Server</Link>.</p>


                <p> Happy creating!</p>
                
            
            </div>
        )
    }

    return (
        <DocsTemplate PageName={PageName} Content={Content} />
    )
}

export default DocsLandingPage;