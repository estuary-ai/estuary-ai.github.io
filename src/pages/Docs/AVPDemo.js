// Documentation: AVPDemo (id = link-avp-demo)
import React from 'react';
import DocsTemplate from '../../components/DocsTemplate';

function AVPDemo() {
    // page name must correspond with id of Link component in DocsLinks.js
    const PageName = "link-avp-demo";


    const Content = () => {
        return (
            <div>
                <h1 id="h-intro">Apple Vision Pro Demonstration Unity Project</h1>
                <p>Start here if you'd like to check out the capabilities of Estuary, or if you'd like a quick start project!</p>

                <div className="divider"></div>

                <h2 id="description">Description</h2>
                <p>This Unity project demonstrates an Apple Vision Pro client connected to a Mangrove server.  The Vision Pro was chosen for this demo for its state of the art hardware capabilities and powerful ARKit integration.  Namely, this demo showcases realtime dynamic mesh generation and semantic scene understanding of a physical environment which are both leveraged to power a conversational Intelligent Virtual Agent (IVA) that can understand and pathfind in a physical environment in Augmented Reality (AR).  </p>

                <div className="divider"></div>

                
                <h2 id="acknowledgements">Acknowledgements</h2>
                <p>The Estuary team would like to acknowledge the following authors, developers, and creatives whose work contributed to the success of this project:</p>
                <ul>
                <li><a href="https://github.com/itisnajim/SocketIOUnity?tab=readme-ov-file">SocketIOUnity</a></li>
                <li><a href="https://assetstore.unity.com/packages/3d/characters/humanoids/fantasy/mini-simple-characters-skeleton-free-demo-262897">Mini Simple Characters | Skeleton</a></li>
                </ul>

            </div>
        )
    }

    return (
        <DocsTemplate PageName={PageName} Content={Content} />
    )
}

export default AVPDemo;