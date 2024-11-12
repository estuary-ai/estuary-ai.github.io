import '../css/HomePage.css';
import diagram from "../assets/Diagram.png";
// import architecture from "../assets/Estuary High Level Composite Structure.png";
import skelly from "../assets/SkellyChair.png";
import teaserchair from "../assets/Teaser_chair.png";
import teasermesh from "../assets/Teaser_mesh.png";
import teasermeta from "../assets/Teaser_meta.png";

// https://youtu.be/xzgXtYz5lRY?si=yzZ9HIYOqF-jWU7-
// import backgroundVideo from "../assets/Title_Background.mp4";

// https://youtu.be/oGGHE6YXBlo?si=Ux2qYWVjabYe3Vqi
import backgroundVideo2 from "../assets/Title_Background_2.mp4";


// import Slideshow from '../components/Slideshow';
import Title from '../components/Title';
import Slogan from '../components/Slogan';
import Feature from '../components/Feature';
import TextBlock from '../components/TextBlock';
import Architecture from '../components/Architecture';
import GetStarted from '../components/GetStarted';


function HomePage() {
    // console.log('Current width:', window.innerWidth);

    return (

        <div className="homeWrapper">
            {/* top title and links */}
            <Title mainTitle={"Estuary"} subtitle={"An Open-Source Multimodal Framework For Building Low-Latency Real-Time Socially Interactive Agents"} bgv={backgroundVideo2} showButtons={true} />
            <Slogan slogan={"Streamline your AI agent pipeline with Estuary, powering seamless real-time interactions with agents on desktop and XR."} />

            <div className="blurbWrapper">
                <TextBlock title={"WHAT IS ESTUARY?"} content={"Estuary is a framework for creating socially interactive agents (SIAs) that you can interact with in real-time. Its standardized pipeline is designed to be multimodal with low-latency, and new modules can be added for extra capabilities."} />
                {/* <TextBlock title={"OUR MISSION"} content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."}/> */}



                <TextBlock title={"USE CASES"} content={"Estuary is ideal for anyone seeking an open-source solution with fine-tuned control over AI modules and data processing. Primarily designed with SIA research in mind, Estuary is equipped to run on desktop and head-mounted displays (HMDs) with an external server to run heavy-weight computations. Out of the box, Estuary provides basic modules, and the pipeline is easily extensible for new modules."} />
                {/* <TextBlock title={"BUILD"} content={"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. ."}/> */}

                <br />
                <Feature title={"FEATURES"}
                    // content={"Some features that Estuary supports"}
                    slides={[
                        { id: 1, image: skelly, desc: "Character in AR in Apple Vision Pro" },
                        { id: 2, image: teaserchair, desc: "Semantic Understanding & Pathfinding" },
                        { id: 3, image: teasermesh, desc: "Estuary leveraging mesh classification capabilities into multimodal interaction" },
                        { id: 4, image: teasermeta, desc: "Meta Quest 3 VR Environment" },
                    ]}
                />
                <Architecture title={"ARCHITECTURE"}
                    content={"Estuary runs on a client-server architecture. The client and server communicate through SocketIO protocol on a shared network. The client provides the display and interaction methods for the user (e.g., desktop, HMD). The interactions are sent to the server running on a computing device (e.g., a desktop with a GPU) which performs the heavy-weight computations for the client (e.g., running a local Large Language Model (LLM)). More information can be found in our paper and video."}
                    img={diagram}
                />
            </div>
            <GetStarted />

        </div>

    )
}

export default HomePage;

// <div className='content'>

// <p className='blurbTitle'>
//     What is Estuary?
// </p>
// <p className='blurbContent'>
//     A standardized framework for creating a pipeline of AI modules that is:
// </p>
// <ul className='blurbList'>
//     <li>Interoperable</li>
//     <li>Platform agnostic</li>
//     <li>Off-cloud</li>
//     <li>Multimodal</li>
//     <li>Open-Source</li>
// </ul>

// <p className='blurbTitle'>
//     Basic architecture
// </p>
// <p className='blurbContent'>
//     The Estuary framework is composed of a server and a client that communicate via SocketIO protocol.
// </p>
// <img src={diagram} alt='diagram' style={{width: "80%"}}/>


// <p className='blurbTitle'>
//     Credits
// </p>
// <ul className='blurbList'>
//     <li></li>
//     <li></li>
// </ul>
// </div>