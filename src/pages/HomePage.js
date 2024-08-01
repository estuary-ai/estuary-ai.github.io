import '../css/HomePage.css';
import diagram from "../assets/Diagram.png";
import architecture from "../assets/Estuary High Level Composite Structure.png";
import skelly from "../assets/SkellyChair.png";
import teaserchair from "../assets/Teaser_chair.png";
import teasermesh from "../assets/Teaser_mesh.png";
import teasermeta from "../assets/Teaser_meta.png";
import empty from "../assets/Empty.png";

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
                <button className="linkbtn" href="https://github.com/Al-Estuary">GitHub</button>
            </div>

            <div className="hiderBox">
                <div className='horScroll'>
                    <div className='imgWrapper'>
                        <img src={skelly} alt='new' />
                    </div>
                    <div className='imgWrapper'>
                        <img src={teaserchair} alt='new' />
                    </div>
                    <div className='imgWrapper'>
                        <img src={teasermesh} alt='new' />
                    </div>
                    <div className='imgWrapper'>
                        <img src={teasermeta} alt='new' />
                    </div>
                    
                </div>
            </div>

            <div className='content'>
                <img src={diagram} alt='diagram' style={{width: "80%"}}/>
            </div>

        </div>

    )
}

export default HomePage;