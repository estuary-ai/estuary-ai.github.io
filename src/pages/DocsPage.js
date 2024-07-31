

import '../css/DocsPage.css';

import { Card } from 'react-bootstrap';
import TableOfContents from '../components/TableOfContents';


const Headings = ({ headings, activeId }) => {
    <ul>
        {headings.map(heading => (
            <li key={heading.id} className={heading.id === activeId ? 'active' : ''}>
                <a 
                    href={`#${heading.id}`} 
                    onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#${heading.id}`).scrollIntoView({
                            behavior: 'smooth'
                        });
                    }}
                >
                    {heading.title}
                </a>
                {/* {headings.item} */}
            </li>
        ))}
    </ul>
}

function DocsPage() {
    return (
        <div className='sidebyside'>
            <div className='mainContent'>
                <h1 id="title">Documentation for Estuary</h1>

                
                <h2 id="disclaimer">Documentation to be added soon!</h2>
                <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus.

                Vitae inceptos conubia cursus habitasse proin habitant pharetra. Ad auctor hendrerit primis tempus; nibh bibendum. Taciti morbi nullam magnis feugiat vivamus. Dis at maecenas fames erat condimentum risus sed. Purus facilisi ipsum vestibulum maximus nostra et sit lectus. Massa nam mus pellentesque; aptent donec habitasse maximus. Nostra lobortis dolor pellentesque finibus vehicula, felis suscipit fermentum. Arcu volutpat tortor class vitae faucibus primis condimentum elementum.
                </p>
                <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus.

                Vitae inceptos conubia cursus habitasse proin habitant pharetra. Ad auctor hendrerit primis tempus; nibh bibendum. Taciti morbi nullam magnis feugiat vivamus. Dis at maecenas fames erat condimentum risus sed. Purus facilisi ipsum vestibulum maximus nostra et sit lectus. Massa nam mus pellentesque; aptent donec habitasse maximus. Nostra lobortis dolor pellentesque finibus vehicula, felis suscipit fermentum. Arcu volutpat tortor class vitae faucibus primis condimentum elementum.
                </p>
                <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus.

                Vitae inceptos conubia cursus habitasse proin habitant pharetra. Ad auctor hendrerit primis tempus; nibh bibendum. Taciti morbi nullam magnis feugiat vivamus. Dis at maecenas fames erat condimentum risus sed. Purus facilisi ipsum vestibulum maximus nostra et sit lectus. Massa nam mus pellentesque; aptent donec habitasse maximus. Nostra lobortis dolor pellentesque finibus vehicula, felis suscipit fermentum. Arcu volutpat tortor class vitae faucibus primis condimentum elementum.
                </p>

                <h2 id="quick-start">Quick Start</h2>
                <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus.

                Vitae inceptos conubia cursus habitasse proin habitant pharetra. Ad auctor hendrerit primis tempus; nibh bibendum. Taciti morbi nullam magnis feugiat vivamus. Dis at maecenas fames erat condimentum risus sed. Purus facilisi ipsum vestibulum maximus nostra et sit lectus. Massa nam mus pellentesque; aptent donec habitasse maximus. Nostra lobortis dolor pellentesque finibus vehicula, felis suscipit fermentum. Arcu volutpat tortor class vitae faucibus primis condimentum elementum.
                </p>

                <h2 id="functions">Functions</h2>
                <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus.

                Vitae inceptos conubia cursus habitasse proin habitant pharetra. Ad auctor hendrerit primis tempus; nibh bibendum. Taciti morbi nullam magnis feugiat vivamus. Dis at maecenas fames erat condimentum risus sed. Purus facilisi ipsum vestibulum maximus nostra et sit lectus. Massa nam mus pellentesque; aptent donec habitasse maximus. Nostra lobortis dolor pellentesque finibus vehicula, felis suscipit fermentum. Arcu volutpat tortor class vitae faucibus primis condimentum elementum.
                </p>
            </div>
            
            <TableOfContents/>


            <style js>{`
                {/* when screen width small */}
                @media (max-width: 767px){
                    .mainContent{
                        width: 100%;
                    }
                }
            `}</style>
        </div>

    )
}

export default DocsPage;