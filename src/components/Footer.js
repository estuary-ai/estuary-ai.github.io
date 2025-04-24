import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <p>Estuary</p>

                <div className='twoColumn'>
                    {/* left column */}
                    <div className='flex flex-col'>
                        <p className="footerTitle">Resources</p>
                        <div className='flex flex-row'>
                            {/* IVA24 */}
                            <div className='mt-2'>
                                <a className="linkbtnFooter arxivLogo"  href="https://arxiv.org/abs/2410.20116" target="_blank" rel="noreferrer" />
                                <p className='-mt-4 italic'>IVA'24</p>
                            </div>
                            {/* CHI25 */}
                            <div className='mt-2'>
                                <a className="linkbtnFooter arxivLogo"  href="https://arxiv.org/abs/2504.14427" target="_blank" rel="noreferrer" />
                                <p className='-mt-4 italic'>CHI'25</p>
                            </div>

                            <a className="linkbtnFooter githubLogo" href="https://github.com/estuary-ai" target="_blank" rel="noreferrer" />
                            <a className="linkbtnFooter youtubeLogo mt-3" href="https://youtu.be/m5wO7E0zet8" target="_blank" rel="noreferrer" />
                        </div>
                    </div>

                    {/* right column */}
                    <div>
                        <p className='footerTitle'>Contact Us</p>
                        {/* Discord invite link */}
                        <a className="linkbtnFooter discordLogo" href="https://discord.gg/r6GDWkzbM9" target="_blank" rel="noreferrer" />
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