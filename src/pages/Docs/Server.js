// Documentation: Quick start (id = link-quick-start)
import React from 'react';
import DocsTemplate from '../../components/DocsTemplate';

function Server() {
    // page name must correspond with id of Link component in SideBar.js
    const PageName = "link-server";


    const Content = () => {
        return (
            <div>
                <h1 id="h-intro">Server</h1>

                <p>Our full source code can be found here at <a className='linkbtnFooter' href="https://github.com/estuary-ai/mangrove" target="_blank" rel="noreferrer">GitHub</a></p>

                <p>Mangrove is the backend module of Estuary, a framework for building multimodal real-time Socially Intelligent Agents (SIAs).</p>
                <h2 id="give-us-a-star-">Give us a Star! ⭐</h2>
                <p>If you find Estuary helpful, please give us a star!  Your support means a lot!
                    If you find any bugs or would like to request a new feature, feel free to open an
                    issue!</p>
                <h2 id="supported-endpoints">Supported Endpoints</h2>
                <h3 id="speech-to-text-stt-asr-">Speech-To-Text (STT/ASR)</h3>
                <ul>
                    <li>Faster-Whisper</li>
                </ul>
                <h3 id="large-language-models-llms-">Large Language Models (LLMs)</h3>
                <ul>
                    <li>ChatGPT</li>
                </ul>
                <h3 id="text-to-speech-tts-">Text-To-Speech (TTS)</h3>
                <ul>
                    <li>ElevenLabs</li>
                    <li>XTTS-v2</li>
                    <li>Google gTTS</li>
                    <li>pyttsx3</li>
                </ul>
                <h1 id="setup">Setup</h1>
                <h2 id="wsl-setup">WSL Setup</h2>
                <p>If you already have Ubuntu 22.04 WSL installed on your machine, you can skip this section.  Otherwise, follow the steps below:</p>
                <ol>
                    <li><strong>[WSL Ubuntu 22.04]</strong> Currently, Mangrove is tested to work in WSL Ubuntu 22.04.  To install WSL, follow this (<a href="https://learn.microsoft.com/en-us/windows/wsl/install">official guide</a>) from Microsoft.</li>
                    <li><strong>[Updating WSL]</strong> Run <code>sudo apt update</code> and <code>sudo apt upgrade</code> in WSL.</li>
                    <li><strong>[Installing pipx]</strong> Run <code>sudo apt install pipx</code> in WSL.</li>
                    <li><strong>[Installing pdm]</strong> Run <code>pipx install pdm</code> in WSL.</li>
                </ol>
                <h2 id="installing-dependencies">Installing Dependencies</h2>
                <ol>
                    <li><p>Install packages&#39; dependencies for Ubuntu 22.04 - Tested on WSL2.</p>
                        <code class="lang-bash"> sudo apt-<span class="hljs-built_in">get</span> install libcairo2-<span class="hljs-built_in">dev</span> pulseaudio portaudio19-<span class="hljs-built_in">dev</span> libgirepository1<span class="hljs-number">.0</span>-<span class="hljs-built_in">dev</span> libespeak-<span class="hljs-built_in">dev</span> sox ffmpeg gstreamer<span class="hljs-number">-1.0</span> clang
                        </code>
                    </li>
                    <li><p>Install virtual environments manager
                        <a href="https://www.anaconda.com/products/distribution" target="_blank"> Anaconda</a>.</p>
                    </li>
                    <li><p>Create a python 3.9 virtual environment Using Conda or PDM as follows:</p>
                        <code class="lang-bash"> pdm venv <span class="hljs-keyword">create</span> <span class="hljs-number">3.9</span>
                            pdm venv <span class="hljs-keyword">activate</span>
                            [copy <span class="hljs-keyword">and</span> paste the <span class="hljs-keyword">output</span> line <span class="hljs-keyword">to</span> <span class="hljs-keyword">activate</span> the environment]
                        </code>
                    </li>
                    <li><p>Using <code>pdm use</code> ensure that pdm is pointing to the correct environment.</p>
                    </li>
                    <li><p>Install Python dependencies.</p>
                        <code class="lang-bash"> pdm install -G :<span class="hljs-keyword">all</span>
                        </code>
                    </li>
                </ol>
                <h2 id="further-setup-as-required">Further Setup as Required</h2>
                <h3 id="networked-configuration">Networked Configuration</h3>
                <p>If you are running Mangrove in WSL and would like to configure Local Area Network (LAN) communications for a remote client, WSL must be set to mirrored network configuration.  You can do this with the following steps:</p>
                <ol>
                    <li>Open Powershell and create/open the .wslconfig file in the <code>C:\Users\[username]\</code> directory.</li>
                    <li>Add the following to the .wslconfig file:
                        <br/>
                        <code class="lang-bash"><span class="hljs-section">[wsl2]</span>
                        <br/>
                        <span class="hljs-attr">networkingMode</span>=mirrored
                        <br/>
                        <span class="hljs-section">[experimental]</span>
                        <br/>
                        <span class="hljs-attr">dnsTunneling</span>=<span class="hljs-literal">true</span>
                        <br/>
                        <span class="hljs-attr">autoProxy</span>=<span class="hljs-literal">true</span>
                        <br/>
                        <span class="hljs-attr">hostAddressLoopback</span>=<span class="hljs-literal">true</span>
                    </code>
                    </li>
                </ol>
                <h4 id="tips">Tips</h4>
                <ul>
                    <li><p>Ensure both Mangrove and the client are connected to the same LAN and both the machine running Mangrove and the LAN allow for device-to-device communications.</p>
                    </li>
                    <li><p>[OPTIONAL] You may refer to the Microsoft WSL documentation on Mirrored Networking <a href="https://learn.microsoft.com/en-us/windows/wsl/networking#mirrored-mode-networking">here</a>.</p>
                    </li>
                </ul>
                <h3 id="xtts">XTTS</h3>
                <ul>
                    <li>Running XTTS (using Deepspeed) requires a standlone version of cuda library (the same version as the one used by <code>torch.version.cuda</code>):<ol>
                        <li>Install <code>dkms</code> package to avoid issues with the installation of the cuda library: <code>sudo apt-get install dkms</code></li>
                        <li>Install CUDA 12.1 from the <a href="https://developer.nvidia.com/cuda-12-1-0-download-archive?target_os=Linux&amp;target_arch=x86_64&amp;Distribution=WSL-Ubuntu&amp;target_version=2.0&amp;target_type=runfile_local">NVIDIA website</a>.</li>
                        <li>Follow the instructions given by the installation process including setting the PATH variables in the <code>.bashrc</code> file if on Ubuntu.  Add the following to the .bashrc file with any code editor (i.e.,  <code>nano ~/.bashrc</code>):
                        
                            <br/>
                            <code ng-non-bindable>{"export PATH=/usr/local/cuda-12.1/bin${PATH:+:${PATH}}"} </code>
                            <br/>
                            <code ng-non-bindable>{"export LD_LIBRARY_PATH=/usr/local/cuda-12.1/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}"}</code>
                        </li>
                    </ol>
                    </li>
                </ul>
                <h3 id="api-keys">API Keys</h3>
                <ul>
                    <li>Mangrove currently supports the usage of APIs (e.g., OpenAI), which require API keys. Create <code>.env</code> file in the root directory of the project and add your API keys as follows:
                    <br/>
                    <code class="lang-bash">  OPENAI_API_KEY=<span class="hljs-string">[your OpenAI API Key]</span>
                        ELEVENLABS_API_KEY=<span class="hljs-string">[your ElevenLabs API Key]</span>
                    </code>
                    </li>
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


            </div>
        )
    }

    return (
        <DocsTemplate PageName={PageName} Content={Content} />
    )
}

export default Server;