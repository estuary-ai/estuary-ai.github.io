import React, { useEffect, useRef, useState } from 'react';
import Slideshow from "./Slideshow";
import '../css/Feature.css'; // Import the CSS file for styling

const Feature = (props) => {
    let title = props.title;
    let featureStatement = props.content;
    let slides = props.slides;
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
            className={`featureWrapper`}>
            <div className={`featureText ${isVisible ? 'fade-in' : ''}`}>
                <div className="featureTitle">{title}</div>
                <div className="featureStatement">{featureStatement}</div>
            </div>
            <div className="featureSlideShow">
                <Slideshow slides={slides}/>
            </div>
        </div>
     );
}
 
export default Feature;