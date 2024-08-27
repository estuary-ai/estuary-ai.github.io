import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
                    <div className="getStartedContent">Get started with Estuary now!</div>
                    <div className="getStartedButtons">
                        <Link to="/docs/quickstart" className="getStartedButt">Quick start ↗ </Link>
                    </div>
                </div>
                
        </div>
     );
}
 
export default GetStarted;