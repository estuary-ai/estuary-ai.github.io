// Documentation: Quick start (id = link-quick-start)
import React from 'react';
import DocsTemplate from '../../components/DocsTemplate';

function UnitySDK() {
    // page name must correspond with id of Link component in DocsLinks.js
    const PageName = "link-unity-sdk";


    const Content = () => {
        return (
            <div>
                <h1 id="h-intro">Estuary Unity SDK</h1>

                <p>Our full source code can be found here at <a className='docsbtn' href="https://github.com/estuary-ai/Estuary-Unity-SDK" target="_blank" rel="noreferrer">GitHub</a>.</p>

                <div className="divider"></div>

                <h2 id="description">Description</h2>
                <p>
                    The Estuary Unity SDK (dubbed <strong>Mangrove SDK</strong>) is a Unity plugin which allows for easy connection to a running instance of <a href="https://github.com/estuary-ai/mangrove">Mangrove</a>, the backend server component of Estuary.  This plugin includes a simple example scene and a boilerplate prefab to help speed up development with Estuary.  Our SDK leverages the <a href="https://github.com/itisnajim/SocketIOUnity">SocketIO</a> Unity plugin, so connections can be made conveniently by specifying the local IP address and port number of your Mangrove instance.
                </p>

                <div className="divider"></div>

                <h2 id="give-us-a-star-">Give us a Star! ⭐</h2>
                <p>If you find Estuary helpful, please give us a star!  Your support means a lot! If you find any bugs or would like to request a new feature, feel free to open an issue!</p>

                <div className="divider"></div>

                <h2 id="installation">Installation</h2>
                <ol>
                    <li> Install SocketIO into your Unity project
                        <ol>
                            <li> Copy the SocketIO plugin URL:
                                <br />
                                <code>https://github.com/itisnajim/SocketIOUnity.git</code>
                            </li>
                            <li> In your Unity project, open Window -&gt; Package Manager </li>
                            <li> Click on the &quot;&#43;&quot; button at the top left and select &quot;Add package from git URL&quot; </li>
                            <li> Paste the link there and click &quot;Add&quot; or press enter</li>
                            <li> <strong><em>[Optional]</em></strong>  If the above step does not work, the SocketIO Unity plugin
                                may have changed.  In this case, consult the <a href="https://github.com/itisnajim/SocketIOUnity?tab=readme-ov-file#installation">
                                    SocketIO plugin installation guide</a>.
                            </li>
                        </ol>
                    </li>
                    <li> Install the Estuary Unity SDK by repeating the previous step but using this URL instead:
                        <br />
                        <code>https://github.com/estuary-ai/Estuary-Unity-SDK.git</code>
                    </li>
                </ol>



            </div >
        )
    }

    return (
        <DocsTemplate PageName={PageName} Content={Content} />
    )
}

export default UnitySDK;