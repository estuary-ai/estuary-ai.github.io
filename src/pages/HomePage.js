import '../css/HomePage.css';
import diagram from "../assets/Diagram.png";
// import architecture from "../assets/Estuary High Level Composite Structure.png";
import skelly from "../assets/SkellyChair.png";
import teaserchair from "../assets/Teaser_chair.png";
import teasermesh from "../assets/Teaser_mesh.png";
import teasermeta from "../assets/Teaser_meta.png";

// https://youtu.be/xzgXtYz5lRY?si=yzZ9HIYOqF-jWU7-
import backgroundVideo from "../assets/Title_Background.mp4";

// https://youtu.be/oGGHE6YXBlo?si=Ux2qYWVjabYe3Vqi
import backgroundVideo2 from "../assets/Title_Background_2.mp4";


// import Slideshow from '../components/Slideshow';
import Title from '../components/Title';
import Slogan from '../components/Slogan';
import Feature from '../components/Feature';
import TextBlock from '../components/TextBlock';
import Architecture from '../components/Architecture';
import GetStarted from '../components/GetStarted';


function HomePage() {
    console.log('Current width:', window.innerWidth);

    return (

        <div className="wrapper">
            {/* top title and links */}
            <Title mainTitle={"Estuary"} subtitle={"A Multimodal Framework For Building Low-Latency Real-Time Socially Interactive Agents"} bgv={backgroundVideo2} showButtons={true}/>
            <Slogan slogan={"THE SLOGAN GOES HERE AND IM JUST SPANNING RANDOM TEXT"}/>
            <TextBlock title={"WHAT IS ESTUARY?"} content={"Taciti morbi nullam magnis feugiat vivamus. Dis at maecenas fames erat condimentum risus sed. Purus facilisi ipsum vestibulum maximus nostra et sit lectus. Massa nam mus pellentesque; aptent donec habitasse maximus. Nostra lobortis dolor pellentesque finibus vehicula, felis suscipit fermentum. Arcu volutpat tortor class vitae faucibus primis condimentum elementum."}/>
            {/* <TextBlock title={"OUR MISSION"} content={"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."}/> */}

            

            <TextBlock title={"USE CASES"} content={"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."}/>
            <TextBlock title={"BUILD"} content={"Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. ."}/>

            <br />
            <Feature title={"FEATURES"} 
                content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna."}
                slides = {[
                    { id: 1, image: skelly, desc: "desc1 asdfasdfasdf" },
                    { id: 2, image: teaserchair, desc: "desc2 qwerqwerqwer" },
                    { id: 3, image: teasermesh, desc: "desc3 zxcvzxcvzxcv" },
                    { id: 4, image: teasermeta, desc: "desc4 poiupoijpoiu" },
                  ]}
            />
            <Architecture title={"ARCHITECTURE"}
                content={"Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna."}
                img={diagram}
            />
            <GetStarted />

        </div>

    )
}

export default HomePage;

// <div className='content'>

// <p className='blurbTitle'>
//     What is Estuary?
// </p>
// <p className='blurbContent'>
//     A standardized framework for creating a pipeline of AI modules that is:
// </p>
// <ul className='blurbList'>
//     <li>Interoperable</li>
//     <li>Platform agnostic</li>
//     <li>Off-cloud</li>
//     <li>Multimodal</li>
//     <li>Open-Source</li>
// </ul>

// <p className='blurbTitle'>
//     Basic architecture
// </p>
// <p className='blurbContent'>
//     The Estuary framework is composed of a server and a client that communicate via SocketIO protocol.
// </p>
// <img src={diagram} alt='diagram' style={{width: "80%"}}/>


// <p className='blurbTitle'>
//     Credits
// </p>
// <ul className='blurbList'>
//     <li></li>
//     <li></li>
// </ul>
// </div>