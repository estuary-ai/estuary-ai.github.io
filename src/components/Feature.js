import React, { useEffect, useRef, useState } from 'react';
import Slideshow from "./Slideshow";
import '../css/Feature.css'; // Import the CSS file for styling

const Feature = () => {
    let featureStatement ="Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus. Vitae inceptos conubia cursus habitasse proin habitant pharetra.";
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
            className={`featureWrapper ${isVisible ? 'fade-in' : ''}`}>
            <div className="featureText">
                <div className="featureTitle">FEATURES</div>
                <div className="featureStatement">{featureStatement}</div>
            </div>
            <div className="featureSlideShow">
                <Slideshow />
            </div>
        </div>
     );
}
 
export default Feature;