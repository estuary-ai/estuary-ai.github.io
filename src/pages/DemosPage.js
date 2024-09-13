import { Card } from 'react-bootstrap';
import Title from '../components/Title';
import GetStarted from '../components/GetStarted';
import backgroundVideo from "../assets/Title_Background.mp4";

function DemosPage() {
    return (
        // style={{marginTop: "80px", marginLeft: "30px", marginRight: "30px"}}
        <div className='demoEntire'>
            <Title mainTitle={"Demo"} subtitle={"Demo videos and papers to be added soon!"} bgv={backgroundVideo} showButtons={false}/>
            <div style={{textAlign: "center"}}>
                <iframe
                    className='demoVid'
                    src="https://www.youtube.com/embed/m5wO7E0zet8" 
                    title="IVA24 Longer Demo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>

            </div>
            <GetStarted />

        </div>

    )
}

export default DemosPage;