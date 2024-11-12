import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <p>Estuary</p>

                <div className='twoColumn'>
                    {/* left column */}
                    <div>
                        <p className="footerTitle">Resources</p>
                        <a className="linkbtnFooter arxivLogo"  href="https://arxiv.org/abs/2410.20116" target="_blank" rel="noreferrer" />
                        <a className="linkbtnFooter githubLogo" href="https://github.com/estuary-ai" target="_blank" rel="noreferrer" />
                        <a className="linkbtnFooter youtubeLogo" href="https://youtu.be/m5wO7E0zet8" target="_blank" rel="noreferrer" />

                    </div>

                    {/* right column */}
                    <div>
                        <p className='footerTitle'>Contact Us</p>
                        {/* Discord invite link */}
                        <a className="linkbtnFooter discordLogo" href="https://discord.gg/2Nazr9w25n" target="_blank" rel="noreferrer" />
                        {/* email */}
                        <a className="linkbtnFooter emailLogo" href="mailto:estuary.ai@gmail.com" target="_blank" rel="noreferrer" />
                        <p>estuary [dot] ai [at] gmail [dot] com</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;