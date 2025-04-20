import React, { useEffect, useRef, useState } from 'react';
import '../css/Architecture.css'; // Import the CSS file for styling
import diagram_client from "../assets/Diagram_client.png"
import diagram_server from "../assets/Diagram_server.png"
import diagram_socket from "../assets/Diagram_socket.png"

const Architecture = (props) => {
    let title = props.title;
    let content = props.content;

    const [isVisible, setIsVisible] = useState(false);
    const featureRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );
    
        if (featureRef.current) {
          observer.observe(featureRef.current);
        }
    
        return () => {
          if (featureRef.current) {
            observer.unobserve(featureRef.current);
          }
        };
      }, []);

    return ( 
        <div 
            ref={featureRef}
            className={`archWrapper`}>
                
                <div className={`archText ${isVisible ? 'fade-in' : ''}`}>
                    <div className="archTitle">{title}</div>
                    <div className="archStatement">{content}</div>
                </div>

                  <div className='flex flex-row w-full justify-content-center mt-10'>
                    <div className="aspect-[16/9] w-fit">
                    {/* floatA, B, C defined in tailwind.config.js */}
                      <img src={diagram_client} alt='diagram' className="max-w-[370px] w-full animate-floatA"/>
                    </div>
                    <div className="aspect-[16/9] w-fit -mt-12">
                      <img src={diagram_socket} alt='diagram' className="max-w-[220px] w-full animate-floatB"/>
                    </div>
                    <div className="aspect-[16/9] w-fit">
                      <img src={diagram_server} alt='diagram' className="max-w-[370px] w-full animate-floatC"/>
                    </div>
                  </div>

                
        </div>
     );
}
 
export default Architecture; 