// Documentation: AVPDemo (id = link-avp-demo)
import React from 'react';
import DocsTemplate from '../../components/DocsTemplate';

function AVPDemo() {
    // page name must correspond with id of Link component in DocsLinks.js
    const PageName = "link-avp-demo";


    const Content = () => {
        return (
            <div>
                <h1 id="estuary-vision-pro-client">Estuary Vision Pro Client</h1>
                <h2 id="description">Description</h2>
                <p>This Unity project demonstrates an Apple Vision Pro client connected to a Mangrove server.  The Vision Pro was chosen for this demo for its state of the art hardware capabilities and powerful ARKit integration.  Namely, this demo showcases realtime dynamic mesh generation and semantic scene understanding of a physical environment which are both leveraged to power a conversational Intelligent Virtual Agent (IVA) that can understand and pathfind in a physical environment in Augmented Reality (AR).  </p>
                <h2 id="give-us-a-star-⭐">Give us a Star! ⭐</h2>
                <p>If you find Estuary helpful, please give us a star!  Your support means a lot!
                    If you find any bugs or would like to request a new feature, feel free to open an
                    issue!</p>
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