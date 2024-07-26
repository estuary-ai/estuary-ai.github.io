import { Card } from 'react-bootstrap';
import Navbar from './NavBar';

function HomePage() {
    return (

        <div className='main-container' style={{backgroundColor: "gray"}}>
            <Navbar />
            <div>
                <Card>
                    <Card.Body>
                        <Card.Title>Welcome to Estuary</Card.Title>
                        <Card.Text>
                            Estuary: A Framework for Building Multimodal Low-Latency Real-Time Socially Interactive Agents
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <style js>{`
                .main-container{
                width: 100vw;
                height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                }
            `}</style>
        </div>

    

        

    )
}

export default HomePage;