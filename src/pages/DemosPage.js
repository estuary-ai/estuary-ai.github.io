import { Card } from 'react-bootstrap';

function DemosPage() {
    return (

        <div>
            <Card style={{position: "inherit"}}>
                <Card.Body>
                    <Card.Title>Demos</Card.Title>
                    <Card.Text>
                        Demo videos and papers to be added soon!
                    </Card.Text>
                </Card.Body>
            </Card>

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
        </div>

    )
}

export default DemosPage;