// import React, { useState, useEffect, useRef } from 'react';
import '../css/Title.css'; // Import the CSS file for styling

const Title = (props) => {
    let mainTitle = props.mainTitle;
    let subtitle = props.subtitle;
    let bgvMp4 = props.bgvMp4;
    let bgvWebm = props.bgvWebm;
    let showButtons = props.showButtons

    return ( 
        <div className="header">
                <video className="bgv"
                       autoPlay
                       loop
                       muted
                       playsInline
                       preload="metadata"
                       width="600"
                       height="300">
                    {bgvWebm && <source src={bgvWebm} type="video/webm" />}
                    {bgvMp4  && <source src={bgvMp4}  type="video/mp4"  />}
                </video>
                <div className='title'>
                    <h1 className='mainTitle'>{mainTitle}</h1>
                    <h2 className='subtitle'>{subtitle}</h2>
                    {/* links to paper and github */}
                    {
                        showButtons &&
                        <div className='flex flex-row'>
                            {/* IVA24 */}
                            <div className='mt-2'>
                                <a className="linkbtnFooter arxivLogo"  href="https://arxiv.org/abs/2410.20116" target="_blank" rel="noreferrer" />
                                <p className='-mt-4 italic text-center text-white'>IVA'24</p>
                            </div>
                            {/* CHI25 */}
                            <div className='mt-2'>
                                <a className="linkbtnFooter arxivLogo"  href="https://arxiv.org/abs/2504.14427" target="_blank" rel="noreferrer" />
                                <p className='-mt-4 italic text-center text-white'>CHI'25</p>
                            </div>

                            <a className="linkbtnFooter githubLogo" href="https://github.com/estuary-ai" target="_blank" rel="noreferrer" />
                            <a className="linkbtnFooter youtubeLogo mt-3" href="https://youtu.be/m5wO7E0zet8" target="_blank" rel="noreferrer" />
                        </div>
                    }
                    
                    
                </div>
            </div>
     );
}
 
export default Title;