import React, { useEffect, useRef, useState } from 'react';
import '../css/Slogan.css'; // Import the CSS file for styling

const Slogan = (props) => {
    let slogan = props.slogan; 
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
            className={`sloganWrapper ${isVisible ? 'fade-in' : ''}`}>
                <div className="slogan">{slogan}</div>
        </div>
     );
}
 
export default Slogan;