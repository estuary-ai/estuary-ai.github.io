

import '../css/DocsPage.css';

import TableOfContents from '../components/TableOfContents';
import SideBar from '../components/SideBar';

const DummyText = "Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus."

// Landing page for documentation
function DocsPage() {
    return (
        <div className='pageContainer'>
            <SideBar />

            <div className='paddedContainer'>
                <main className='mainContent'>
                    {/* title name thing */}
                    <h1 id="title">Documentation for Estuary</h1>


                    {/* actual content */}
                    <h2 id="introduction">Introduction</h2>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>

                    <h3 id="something">Something</h3>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>

                    <h2 id="quick-start">Quick Start</h2>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>

                    <h2 id="functions">Functions</h2>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>

                    <h3 id="client">Client</h3>
                    <p> {DummyText} </p>

                    <h3 id="server">Server</h3>
                    <p> {DummyText} </p>
                    <p> {DummyText} </p>

                </main>

                {/* table of contents */}
                <TableOfContents />
            </div>




            <style js>{`
                {/* when screen width small */}
                @media (max-width: 767px){
                    .mainContent{
                        width: 100%;
                    }
                }
            `}</style>
        </div>

    )
}

export default DocsPage;