// Documentation: Quick start (id = link-quick-start)
import React from 'react';
import DocsTemplate from '../../components/DocsTemplate';

function QuickStart() {
    // page name must correspond with id of Link component in SideBar.js
    const PageName = "link-quick-start";

    const DummyText = "Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus."

    const Content = () => {
        return (
            <div>
                <h1 id="h-intro">Quick Start</h1>
                <p> {DummyText} </p>

                <h2 id="h-server">Step 1: Server</h2>
                <p> {DummyText} </p>
                <p> {DummyText} </p>
                <p> {DummyText} </p>
                <p> {DummyText} </p>
                <p> {DummyText} </p>

                <h2 id="h-client">Step 2: Client</h2>
                <p> {DummyText} </p>
                <p> {DummyText} </p>

                <h2 id="h-device">Step 3: Device setup</h2>
                <p> {DummyText} </p>
                <p> {DummyText} </p>

                <h3 id="h-summary">Summary</h3>
                <p> {DummyText} </p>

                <h3 id="h-conclusions">Conclusion</h3>
                <p> {DummyText} </p>
                <p> {DummyText} </p>

                <h3 id="h-faq">FAQ</h3>
                <p> {DummyText} </p>
                <p> {DummyText} </p>
            </div>
        )
    }

    return (
        <DocsTemplate PageName={PageName} Content={Content} />
    )
}

export default QuickStart;