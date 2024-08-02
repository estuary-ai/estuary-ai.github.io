import '../css/Footer.css';

function Footer() {
    return (
        <footer>
            <div className="footerContainer">
                <p>Estuary</p>

                <div className='twoColumn'>
                    {/* left column */}
                    <div>
                        <p>Resources</p>
                        <a className="linkbtnFooter" href="https://arxiv.org/abs/2109.07372" target="_blank" rel="noreferrer">
                            Paper
                        </a>
                        <a className="linkbtnFooter" href="https://github.com/Al-Estuary" target="_blank" rel="noreferrer">
                            GitHub
                        </a>

                    </div>

                    {/* right column */}
                    <div>
                        <p>Contact Us</p>
                        {/* TODO: Add discord invite link here */}
                        <a className="linkbtnFooter" href="https://discord.com" target="_blank" rel="noreferrer">Discord</a>
                        {/* TODO: Add email here */}
                        <a className="linkbtnFooter" href="mailto:" target="_blank" rel="noreferrer">Email</a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;