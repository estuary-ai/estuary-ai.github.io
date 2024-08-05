import '../css/HomePage.css';
import diagram from "../assets/Diagram.png";
// import architecture from "../assets/Estuary High Level Composite Structure.png";
import skelly from "../assets/SkellyChair.png";
import teaserchair from "../assets/Teaser_chair.png";
import teasermesh from "../assets/Teaser_mesh.png";
import teasermeta from "../assets/Teaser_meta.png";

// https://youtu.be/xzgXtYz5lRY?si=yzZ9HIYOqF-jWU7-
import backgroundVideo from "../assets/Title_Background.mp4";

// https://youtu.be/oGGHE6YXBlo?si=Ux2qYWVjabYe3Vqi
import backgroundVideo2 from "../assets/Title_Background_2.mp4";

import Slideshow from '../components/Slideshow';
import Mission from '../components/Mission';


function HomePage() {
    console.log('Current width:', window.innerWidth);

    return (

        <div className="wrapper">
            {/* top title and links */}
            <div className="header">
                <video src={backgroundVideo2} class="bgv" width="600" height="300" autoPlay="true" muted="true" loop="true"/>
                <div className='title'>
                    <h1 className='mainTitle'>Estuary</h1>
                    <h2 className='subtitle'>A Multimodal Framework For Building Low-Latency Real-Time Socially Interactive Agents</h2>
                    {/* links to paper and github */}
                    <div className="buttonWrapper">
                        <a className="linkbtn" href="https://arxiv.org/abs/2109.07372" target="_blank" rel="noreferrer">
                            Paper
                        </a>
                        <a className="linkbtn" href="https://github.com/Al-Estuary" target="_blank" rel="noreferrer">
                            GitHub
                        </a>
                    </div>
                    
                </div>
            </div>
            

            {/* image carousel */}
            {/* <div className="hiderBox">
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
            </div> */}
            <Mission />

            {/* stuffs */}
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