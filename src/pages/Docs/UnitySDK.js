// Documentation: Quick start (id = link-quick-start)
import React from 'react';
import DocsTemplate from '../../components/DocsTemplate';

function UnitySDK() {
    // page name must correspond with id of Link component in DocsLinks.js
    const PageName = "link-unity-sdk";


    const Content = () => {
        return (
            <div>
                <h1 id="estuary-unity-sdk">Estuary-Unity-SDK</h1>
                <h2 id="description">Description</h2>
                <p>The Estuary Unity SDK (dubbed <strong>Mangrove SDK</strong>) is a Unity plugin which allows for easy connection
                    to a running instance of <a href="https://github.com/Al-Estuary/mangrove">Mangrove</a>,
                    the backend server component of Estuary.  This plugin includes a simple
                    example scene and a boilerplate prefab to help speed up development with
                    Estuary.  Our SDK leverages the
                    <a href="https://github.com/itisnajim/SocketIOUnity">SocketIO</a>
                    Unity plugin, so connections can be made conveniently by specifying
                    the local IP address and port number of your Mangrove instance.</p>
                <h2 id="give-us-a-star-⭐">Give us a Star! ⭐</h2>
                <p>If you find Estuary helpful, please give us a star!  Your support means a lot!
                    If you find any bugs or would like to request a new feature, feel free to open an
                    issue!</p>
                <h2 id="installation">Installation</h2>
                <ol>
                    <li> Install SocketIO into your Unity project
                        <ol>
                            <li> Copy the SocketIO plugin URL:

                                <pre><code class="language-bash">{`https://github.com/itisnajim/SocketIOUnity.git`}
                                </code></pre>
                            </li>
                            <li> In your Unity project, open Window -> Package Manager </li>
                            <li> Click on the "&#43;" button at the top left and select "Add package from git URL" </li>
                            <li> Paste the link there and click "Add" or press enter</li>
                        </ol>
                    </li>
                    <li> [Optional]  If the above step does not work, the SocketIO Unity plugin
                        may have changed.  In this case, consult the
                        <a href="https://github.com/itisnajim/SocketIOUnity?tab=readme-ov-file#installation">
                            SocketIO plugin installation guide</a>.
                    </li>
                </ol>
                <li> Install the Estuary Unity SDK by repeating the previous step but using this URL instead:

                    <pre><code class="language-bash">{`https://github.com/Al-Estuary/Estuary-Unity-SDK.git`}
                    </code></pre>
                </li>




            </div >
        )
    }

    return (
        <DocsTemplate PageName={PageName} Content={Content} />
    )
}

export default UnitySDK;