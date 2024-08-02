import '../css/HomePage.css';
import diagram from "../assets/Diagram.png";
import architecture from "../assets/Estuary High Level Composite Structure.png";
import skelly from "../assets/SkellyChair.png";
import teaserchair from "../assets/Teaser_chair.png";
import teasermesh from "../assets/Teaser_mesh.png";
import teasermeta from "../assets/Teaser_meta.png";

function HomePage() {

    return (

        <div>

            <div className='title'>
                <h1>Estuary</h1>
                <h2>A Multimodal Framework For Building Low-Latency Real-Time Socially Interactive Agents</h2>
                {/* links to paper and github */}
                <button className="linkbtn" href="https://arxiv.org/abs/2109.07372">
                    Paper
                </button>
                <a className="linkbtn" href="https://github.com/Al-Estuary" target="_blank" >GitHub</a>
            </div>

            <div className="hiderBox">
                <div className='horScroll'>
                    <div className='imgWrapper' style={{marginLeft:"50vw"}}>
                        <img src={skelly} alt='new' />
                    </div>
                    <div className='imgWrapper'>
                        <img src={teaserchair} alt='new' />
                    </div>
                    <div className='imgWrapper'>
                        <img src={teasermesh} alt='new' />
                    </div>
                    <div className='imgWrapper' style={{marginRight:"50vw"}}>
                        <img src={teasermeta} alt='new' />
                    </div>
                    
                </div>
            </div>

            <div className='content'>
                {/* spacer */}
                <div style={{minHeight:"80px"}}/>

                {/* intro */}
                <p className='blurbTitle'>
                    What is Estuary?
                </p>
                <p className='blurbContent'>
                    A standardized framework for creating a pipeline of AI modules that is:
                </p>
                <ul className='blurbList'>
                    <li>Interoperable</li>
                    <li>Platform agnostic</li>
                    <li>Off-cloud</li>
                    <li>Multimodal</li>
                    <li>Open-Source</li>
                </ul>

                {/* spacer */}
                <div style={{minHeight:"80px"}}/>

                {/* architecture */}
                <p className='blurbTitle'>
                    Basic architecture
                </p>
                <p className='blurbContent'>
                    The Estuary framework is composed of a server and a client that communicate via SocketIO protocol.
                </p>
                <img src={diagram} alt='diagram' style={{width: "80%"}}/>

                {/* spacer */}
                <div style={{minHeight:"80px"}}/>

                {/* credits */}
                <p className='blurbTitle'>
                    Credits
                </p>
                <ul className='blurbList'>
                    <li></li>
                    <li></li>
                </ul>
            </div>

        </div>

    )
}

export default HomePage;