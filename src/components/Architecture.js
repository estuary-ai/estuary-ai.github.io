import React, { useEffect, useRef, useState } from 'react';
import '../css/Architecture.css'; // Import the CSS file for styling

const Architecture = (props) => {
    let title = props.title;
    let content = props.content;
    let diagram = props.img;

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
                
                <img src={diagram} alt='diagram' className="archImg"/>
                <div className={`archText ${isVisible ? 'fade-in' : ''}`}>
                    <div className="archTitle">{title}</div>
                    <div className="archStatement">{content}</div>
                </div>
                
        </div>
     );
}
 
export default Architecture; 