import { Card } from 'react-bootstrap';
import Title from '../components/Title';
import GetStarted from '../components/GetStarted';
import backgroundMp4 from "../assets/Title_Background.mp4";
import backgroundWebm from "../assets/Title_Background.webm";

function DemosPage() {
    return (
        // style={{marginTop: "80px", marginLeft: "30px", marginRight: "30px"}}
        <div className='demoEntire'>
            <Title mainTitle={"Demos"} subtitle={"Demo videos and papers to be added soon!"} bgvMp4={backgroundMp4} bgvWebm={backgroundWebm} showButtons={false}/>
            <div style={{textAlign: "center"}}>
                <iframe
                    className='demoVid'
                    src="https://www.youtube.com/embed/m5wO7E0zet8" 
                    title="IVA24 Longer Demo" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                    style={{
                        width: '800px',
                        height: '450px'
                    }}>
                </iframe>
            </div>
            <GetStarted />

        </div>

    )
}

export default DemosPage;