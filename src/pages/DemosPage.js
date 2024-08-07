import { Card } from 'react-bootstrap';
import Title from '../components/Title';
import GetStarted from '../components/GetStarted';
import backgroundVideo from "../assets/Title_Background.mp4";


function DemosPage() {
    return (
        // style={{marginTop: "80px", marginLeft: "30px", marginRight: "30px"}}
        <div>
            {/* <Card style={{position: "inherit"}}>
                <Card.Body>
                    <Card.Title>Demos</Card.Title>
                    <Card.Text>
                        Demo videos and papers to be added soon!
                    </Card.Text>
                </Card.Body>
            </Card> */}
            <Title mainTitle={"Demo"} subtitle={"Demo videos and papers to be added soon!"} bgv={backgroundVideo} showButtons={false}/>
            <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/VTVzmlEPGPM?si=knQUnD5_-rnj52Jf" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
            <GetStarted />

        </div>

    )
}

export default DemosPage;