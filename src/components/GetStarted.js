import React, { useState, useEffect, useRef } from 'react';
import '../css/GetStarted.css'; // Import the CSS file for styling


const GetStarted = () => {

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
            className={`getStartedWrapper ${isVisible ? 'fade-in' : ''}`}>
                <div className="getStartedText">
                    <div className="getStartedContent">Get started with Estuary <br/> Be part of the community today!</div>
                    <div className="getStartedButtons">
                        <button className="getStartedButt">Get a demo</button>
                        <button className="getStartedButt">Another button</button>
                    </div>
                </div>
                
        </div>
     );
}
 
export default GetStarted;