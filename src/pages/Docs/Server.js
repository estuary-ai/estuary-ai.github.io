// Documentation: Quick start (id = link-quick-start)
import React from 'react';
import DocsTemplate from '../../components/DocsTemplate';

function Server() {
    // page name must correspond with id of Link component in SideBar.js
    const PageName = "link-server";

    const Content = () => {
        return (
            <div>
                <h1 id="mangrove">Mangrove</h1>
                <p>Mangrove is the backend module of Estuary, a framework for building multimodal real-time Socially Intelligent Agents (SIAs).</p>
                <h2 id="give-us-a-star-⭐">Give us a Star! ⭐</h2>
                <p>If you find Estuary helpful, please give us a star!  Your support means a lot!
                    If you find any bugs or would like to request a new feature, feel free to open an
                    issue!</p>
                <h2 id="citing-estuary">Citing Estuary</h2>
                <p>If you would like to use Estuary for your work, please cite:</p>
                <pre><code class="language-bash">  {`
        @inproceedings{10.1145/3652988.3696198,
            author = {Lin, Spencer and Rizk, Basem and Jun, Miru and Artze, Andy and Sullivan, Caitl{\i}n and Mozgai, Sharon and Fisher, Scott},
            title = {Estuary: A Framework For Building Multimodal Low-Latency Real-Time Socially Interactive Agents},
            year = {2024},
            isbn = {9798400706257},
            publisher = {Association for Computing Machinery},
            address = {New York, NY, USA},
            url = {https://doi.org/10.1145/3652988.3696198},
            doi = {10.1145/3652988.3696198},
            booktitle = {Proceedings of the 24th ACM International Conference on Intelligent Virtual Agents},
            articleno = {50},
            numpages = {3},
            location = {GLASGOW, United Kingdom},
            series = {IVA '24}
        }
                    `}
                    </code></pre>
                <h2 id="supported-endpoints">Supported Endpoints</h2>
                <h3 id="speech-to-text-sttasr">Speech-To-Text (STT/ASR)</h3>
                <ul>
                    <li>Faster-Whisper</li>
                </ul>
                <h3 id="large-language-models-llms">Large Language Models (LLMs)</h3>
                <ul>
                    <li>ChatGPT</li>
                    <li>Ollama</li>
                </ul>
                <h3 id="text-to-speech-tts">Text-To-Speech (TTS)</h3>
                <ul>
                    <li>ElevenLabs</li>
                    <li>XTTS-v2</li>
                    <li>Google gTTS</li>
                    <li>pyttsx3</li>
                </ul>
                <h1 id="setup">Setup</h1>
                <h2 id="environment-setup">Environment Setup</h2>
                <ol>
                    <li><strong>[WSL Ubuntu 22.04]</strong> Currently, Mangrove is tested to work in WSL Ubuntu 22.04.  To install WSL, follow this <a href="(https://learn.microsoft.com/en-us/windows/wsl/install)">official guide</a> from Microsoft.</li>
                    <li><strong>[Updating WSL]</strong> Run <code>sudo apt update</code> and <code>sudo apt upgrade</code> in WSL.</li>
                    <li><strong>[Installing pipx]</strong> Run <code>sudo apt install pipx</code> in WSL.</li>
                    <li><strong>[Installing pdm]</strong> Run <code>pipx install pdm</code> in WSL.</li>
                    <li><strong>[Installing Conda]</strong> Refer to the Miniconda installation
                        <a href="https://docs.anaconda.com/miniconda/install/" target="blank">guide</a>.</li>
                </ol>
                <h2 id="installing-dependencies">Installing Dependencies</h2>
                <ol>
                    <li>Run the following command to install packages:<pre><code class="language-bash">{`
    sudo apt-get install libcairo2-dev pulseaudio portaudio19-dev libgirepository1.0-dev libespeak-dev sox ffmpeg gstreamer-1.0 clang
                    `}</code></pre>
                    </li>
                    <li>Open a powershell terminal window and restart your WSL shell (some packages require a restart to finish installation)<pre><code class="language-bash">{`
    wsl --shutdown
                    `}</code></pre>
                    </li>
                    <li>Clone this repository into your WSL environment and navigate into it<pre><code class="language-bash">{`
    git clone https://github.com/estuary-ai/mangrove.git
    cd mangrove
                    `}</code></pre>
                    </li>
                    <li>Create a Python 3.9.19 virtual environment with Conda:<pre><code class="language-bash">{`
    conda create -n mangrove python=3.9.19
    conda activate mangrove
`}                        
                    </code></pre>
                    </li>
                    <li>Enter the command <code>pdm use</code> and select the correct Python interpreter to use e.g. <code>/home/username/miniconda3/envs/mangrove/bin/python</code></li>
                    <li>Install Python dependencies.<pre><code class="language-bash">{`
    pdm install -G :all
                    `}</code></pre>
                    </li>
                </ol>
                <p>Congrats!  This is the end of the initial installation for Mangrove.  Please refer to the next section for running Mangrove for the first time!</p>
                <h2 id="running-mangrove-for-the-first-time">Running Mangrove for the First Time</h2>
                <h3 id="initial-steps">Initial Steps</h3>
                <ol>
                    <li>Navigate to the Mangrove root directory.<pre><code class="language-bash">{`
    cd mangrove
                    `}</code></pre>
                    </li>
                    <li>Activate the Conda virtual environment that was previously set up.<pre><code class="language-bash">{`
    conda activate mangrove
                    `}</code></pre>
                    </li>
                </ol>
                <h3 id="selecting-an-llm">Selecting an LLM</h3>
                <ul>
                    <li>ChatGPT: Refer to the <a href="https://github.com/estuary-ai/mangrove?tab=readme-ov-file#api-keys">API Keys</a> section below for set up if you would like to use OpenAI<ul>
                        <li>Flag: <code>--bot_endpoint openai</code></li>
                    </ul>
                    </li>
                    <li>Ollama: If you would like to use offline LLMs and have the VRAM to run them, you may consult the <a href="https://github.com/estuary-ai/mangrove?tab=readme-ov-file#ollama">Ollama</a> section for set up instructions.<ul>
                        <li>Flag: <code>--bot_endpoint ollama</code></li>
                    </ul>
                    </li>
                </ul>
                <h3 id="selecting-a-tts-module">Selecting a TTS module</h3>
                <ul>
                    <li>XTTS: This is a popular offline TTS module that produces both high quality results and is performant at runtime.  You can refer to the <a href="https://github.com/estuary-ai/mangrove?tab=readme-ov-file#xtts">XTTS</a> section for set up instructions.<ul>
                        <li>Flag: <code>--tts_endpoint xtts</code></li>
                    </ul>
                    </li>
                    <li>gTTS: This is a free cloud-based TTS module offered by Google.<ul>
                        <li>Flag: <code>--tts_endpoint gtts</code></li>
                    </ul>
                    </li>
                </ul>
                <h3 id="other-configurations">Other Configurations</h3>
                <ul>
                    <li>You may specify which Port number you would like to use with the <code>--port</code> flag.</li>
                    <li>You may use CPU for processing with the <code>--cpu</code> flag.</li>
                </ul>
                <h3 id="example-commands">Example Commands</h3>
                <ul>
                    <li>Default run command which uses OpenAI and ElevenLabs and port 4000:<pre><code class="language-bash">{`
    python server.py
                    `}</code></pre>
                    </li>
                    <li>Example run command which uses the above flags:<pre><code class="language-bash">{`
    python server.py --bot_endpoint ollama --tts_endpoint xtts --port 4000
                    `}</code></pre>
                    </li>
                </ul>
                <h3 id="connecting-a-client">Connecting a Client</h3>
                <ul>
                    <li>Python Client: This option is recommended for Python projects or for quick debugging purposes.<ul>
                        <li>Navigate to the client/python directory.<pre><code class="language-bash">{`
    cd client/python/
                        `}</code></pre>
                        </li>
                        <li>Run the following command to start the client on port 4000:<pre><code class="language-bash">{`
    python client.py
                        `}</code></pre>
                        </li>
                        <li>You may also specify the address and port for the client to connect to with the <code>--address</code> and <code>--port</code> flags.</li>
                    </ul>
                    </li>
                    <li>Unity Client: If you are building a Unity application, refer to the Estuary Unity SDK <a href="https://github.com/estuary-ai/Estuary-Unity-SDK">Documentation</a>.</li>
                </ul>
                <h2 id="further-setup-as-required">Further Setup as Required</h2>
                <h3 id="api-keys">API Keys</h3>
                <ul>
                    <li>Mangrove supports the usage of APIs (e.g., OpenAI), which require API keys. Create <code>.env</code> file in the root directory of the project and add your API keys as follows:<pre><code class="language-bash">{`
    OPENAI_API_KEY=[your OpenAI API Key]
    ELEVENLABS_API_KEY=[your ElevenLabs API Key]
                    `}</code></pre>
                    </li>
                </ul>
                <h3 id="ollama">Ollama</h3>
                <ul>
                    <li>Install Ollama inside of wsl by running the command:<pre><code class="language-bash">{`
    curl -fsSL https://ollama.com/install.sh | sh
                    `}</code></pre>
                    </li>
                    <li>Install an LLM from <a href="https://ollama.com/search">Ollama&#39;s model library</a> e.g.<pre><code class="language-bash">{`
    ollama run nemotron-mini
                    `}</code></pre>
                    </li>
                </ul>
                <h3 id="xtts">XTTS</h3>
                <ul>
                    <li>Running XTTS (using Deepspeed) requires a standlone version of cuda library (the same version as the one used by <code>torch.version.cuda</code>):<ol>
                        <li>Install <code>dkms</code> package to avoid issues with the installation of the cuda library: <code>sudo apt-get install dkms</code></li>
                        <li>Install CUDA 12.1 from the <a href="https://developer.nvidia.com/cuda-12-1-0-download-archive?target_os=Linux&target_arch=x86_64&Distribution=WSL-Ubuntu&target_version=2.0&target_type=runfile_local">NVIDIA website</a>.</li>
                        <li>Follow the instructions given by the installation process including installing the driver.<pre><code class="language-bash">{`
    sudo sh cuda_12.1.0_530.30.02_linux.run --silent --driver
                        `}</code></pre>
                        </li>
                        <li>Add the following to the .bashrc file with any code editor ie. <code>nano ~/.bashrc</code>
                            {/* <pre>
                            <code className="language-bash">
                                {`export PATH=/usr/local/cuda-12.1/bin${PATH:+:${PATH}}
                            export LD_LIBRARY_PATH=/usr/local/cuda-12.1/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}`}
                            </code>
                            </pre> */}
                            <pre>
                            <code className="language-bash">
                                {`
    export PATH=/usr/local/cuda-12.1/bin\${PATH:+:\${PATH}}
    export LD_LIBRARY_PATH=/usr/local/cuda-12.1/lib64\${LD_LIBRARY_PATH:+:\${LD_LIBRARY_PATH}}`}
                            </code>
                            </pre>

                        </li>
                        <li>Add a 6s-30s voice training clip to the root of the project directory.  Make sure to name it <code>speaker.wav</code>. </li>
                        <li>Make sure to restart WSL afterwards with <code>wsl --shutdown</code> in Powershell.</li>
                    </ol>
                    </li>
                </ul>
                <h3 id="networked-configuration">Networked Configuration</h3>
                <p>If you are running Mangrove in WSL and would like to configure Local Area Network (LAN) communications for a remote client, WSL must be set to mirrored network configuration.  You can do this with the following steps:</p>
                <ol>
                    <li>Open Powershell and create/open the .wslconfig file in the <code>C:\Users\[username]\</code> directory.</li>
                    <li>Add the following to the .wslconfig file:</li>
                </ol>
                <pre><code class="language-bash">{`
    [wsl2]
        networkingMode=mirrored
        [experimental]
        dnsTunneling=true
        autoProxy=true
        hostAddressLoopback=true
                `}</code></pre>
                <ol start="3">
                    <li>Add an inbound network rule in Windows Security Settings &gt; Firewall &amp; Network Protection &gt; Advanced Settings &gt; Inbound Rules &gt; New Rule...<ul>
                        <li>Port &gt; TCP, Specific local ports: 4000 &gt; Allow the connection &gt; Check: Domain, Private, Public &gt; Name: Mangrove</li>
                    </ul>
                    </li>
                </ol>
                <h4 id="tips">Tips</h4>
                <ul>
                    <li>Ensure both Mangrove and the client are connected to the same LAN and both the machine running Mangrove and the LAN allow for device-to-device communications.</li>
                    <li>Try restarting after applying the above Network Configurations if they do not initially work </li>
                    <li>[OPTIONAL] You may refer to the Microsoft WSL documentation on Mirrored Networking <a href="https://learn.microsoft.com/en-us/windows/wsl/networking#mirrored-mode-networking">here</a>.</li>
                </ul>
                <h1 id="acknowledgements">Acknowledgements</h1>
                <p>Mangrove was built from our base code of developing <strong>Traveller</strong>, the digital assistant of <strong>SENVA</strong>, a prototype Augmented Reality (AR) Heads-Up Display (HUD) solution for astronauts.  Thank you to <strong>Team Aegis</strong> for participating in the <strong>NASA SUITs Challenge</strong> for the following years:</p>
                <ul>
                    <li><p><strong>2023</strong>: <strong>University of Southern California (USC)</strong> with <strong>University of Berkley (UCBerkley)</strong></p>
                    </li>
                    <li><p><strong>2022</strong>: <strong>University of Southern California (USC)</strong> with <strong>University of Arizona (UA)</strong>.</p>
                    </li>
                </ul>
                <p>The Estuary team would also like to acknowledge the developers, authors, and creatives whose work contributed to the success of this project:</p>
                <ul>
                    <li>SocketIO Protocol: <a href="https://socket.io/docs/v4/socket-io-protocol/">https://socket.io/docs/v4/socket-io-protocol/</a></li>
                    <li>FlaskSocketIO Library: <a href="https://github.com/miguelgrinberg/Flask-SocketIO">https://github.com/miguelgrinberg/Flask-SocketIO</a></li>
                    <li>Python SocketIO Library: <a href="https://github.com/miguelgrinberg/python-socketio">https://github.com/miguelgrinberg/python-socketio</a></li>
                    <li>Silero-VAD: <a href="https://github.com/snakers4/silero-vad">https://github.com/snakers4/silero-vad</a></li>
                    <li>Faster-Whisper: <a href="https://github.com/SYSTRAN/faster-whisper">https://github.com/SYSTRAN/faster-whisper</a></li>
                    <li>PyAudio: <a href="https://people.csail.mit.edu/hubert/pyaudio/">https://people.csail.mit.edu/hubert/pyaudio/</a></li>
                    <li><a href="https://arxiv.org/abs/2406.04904">XTTs</a>: <a href="https://github.com/coqui-ai/TTS">https://github.com/coqui-ai/TTS</a></li>
                </ul>
                <p>More to come soon! Stay tuned and Fight On!</p>




            </div >
        )
    }

    return (
        <DocsTemplate PageName={PageName} Content={Content} />
    )
}

export default Server;