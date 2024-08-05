import React, { useEffect, useRef, useState } from 'react';
import '../css/TextBlock.css'; // Import the CSS file for styling

const TextBlock = (props) => {
    let title = props.title; 
    let content = props.content
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
            className={`textBlockWrapper ${isVisible ? 'fade-in' : ''}`}>
                <div className="textBlockTitle">{title}</div>
                <div className="textBlockContent">{content}</div>
        </div>
     );
}
 
export default TextBlock;