// import React, { useState, useEffect, useRef } from 'react';
import '../css/Title.css'; // Import the CSS file for styling

const Title = (props) => {
    let mainTitle = props.mainTitle;
    let subtitle = props.subtitle;
    let bgv = props.bgv;
    let showButtons = props.showButtons

    return ( 
        <div className="header">
                <video src={bgv} className="bgv" width="600" height="300" autoPlay={true} muted={true} loop={true}/>
                <div className='title'>
                    <h1 className='mainTitle'>{mainTitle}</h1>
                    <h2 className='subtitle'>{subtitle}</h2>
                    {/* links to paper and github */}
                    {
                        showButtons &&
                        <div className="buttonWrapper">
                            <a className="linkbtnFooter arxivLogo" href="https://dl.acm.org/doi/pdf/10.1145/3652988.3696198" target="_blank" rel="noreferrer">
                                {/* Paper */}
                            </a>
                            <a className="linkbtnFooter githubLogo" href="https://github.com/estuary-ai" target="_blank" rel="noreferrer">
                                {/* GitHub */}
                            </a>

                            <a className="linkbtnFooter youtubeLogo" href="https://youtu.be/m5wO7E0zet8" target="_blank" rel="noreferrer">
                                {/* YouTube */}
                            </a>
                        </div>
                    }
                    
                    
                </div>
            </div>
     );
}
 
export default Title;