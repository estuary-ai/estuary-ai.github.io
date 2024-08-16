// Documentation: Landing page (id = link-introduction)

import DocsTemplate from '../components/DocsTemplate';

function DocsLandingPage() {
    // page name must correspond with id of Link component in SideBar.js
    const PageName = "link-introduction";

    const DummyText = "Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus."

    const Content = () => {
        return (
            <div>
                <h1 id="h-introduction">Introduction</h1>
                <p> {DummyText} </p>
                <p> {DummyText} </p>

                <h2 id="h-something">Something</h2>
                <p> {DummyText} </p>
                <p> {DummyText} </p>
                <p> {DummyText} </p>
                <p> {DummyText} </p>
                <p> {DummyText} </p>

                <h2 id="h-quick-start">Quick Start</h2>
                <p> {DummyText} </p>
                <p> {DummyText} </p>

                <h2 id="h-functions">Functions</h2>
                <p> {DummyText} </p>
                <p> {DummyText} </p>

                <h3 id="h-client">Client</h3>
                <p> {DummyText} </p>

                <h3 id="h-server">Server</h3>
                <p> {DummyText} </p>
                <p> {DummyText} </p>
            </div>
        )
    }

    return (
        <DocsTemplate PageName={PageName} Content={Content} />
    )
}

export default DocsLandingPage;