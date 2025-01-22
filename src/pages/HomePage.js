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

import React, { useEffect, useRef, useState } from 'react';


function HomePage() {
    // console.log('Current width:', window.innerWidth);

    const [isVisible, setIsVisible] = useState(false);
    const featureRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
                }
            });
            },
            { threshold: 0.1 }
        );
    
        if (featureRef.current) {
            observer.observe(featureRef.current);
        }
    
        return () => {
            if (featureRef.current) {
            observer.unobserve(featureRef.current);
            }
        };
        }, []);



    return (

        <div className="homeWrapper">
            {/* top title and links */}
            <Title mainTitle={"Estuary"} subtitle={"An Open-Source Multimodal Framework For Building Low-Latency Real-Time Socially Interactive Agents"} bgv={backgroundVideo2} showButtons={true} />
            <Slogan slogan={"Build your LLM-powered AI agent pipeline with Estuary, a flexible and robust cross-platform framework."} />

            <div className="blurbWrapper">
                <div 
                    ref={featureRef}
                    className={`mainTextBlockWrapper ${isVisible ? 'fade-in' : ''}`}
                >
                    <TextBlock title={"PRIVATE"} content={"Configurable to operate completely off-cloud so your data remains local, private, and secure."} />
                    {}

                    <TextBlock title={"LOW-LATENCY"} content={"By integrating all microservices into a single streamlined endpoint, Estuary is able to achieve faster response times compared to using multiple cloud endpoints."} />
                    {}

                    <TextBlock title={"MULTIMODAL"} content={"Estuary is designed from the ground up to support the processing of multiple streams of data from different modalities such as audio and text and soon video."} />
                    {}

                    <TextBlock title={"PLATFORM AGNOSTIC"} content={"Designed as a flexible server-client architecture, Estuary offers the maximum compatibility for AI models and target hardware platforms including XR headsets."} />
                    {}

                    <TextBlock title={"OPEN SOURCE"} content={"The sky's the limit for what you can do with Estuary being a completely free and open source framework."} />
                    {}
                </div>
                

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
                    content={"Estuary runs on a client-server architecture with communications being done through the SocketIO protocol on a shared network. An example setup may be an XR headset streaming multimodal data to a computing device (e.g., a desktop with a GPU) which performs the heavy-weight computations for the client (e.g., running a local LLM). More information can be found in our paper and video."}
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