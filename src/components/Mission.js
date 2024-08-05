import React, { useEffect, useRef, useState } from 'react';
import Slideshow from "./Slideshow";
import '../css/Mission.css'; // Import the CSS file for styling

const Mission = () => {
    let missionStatement ="Lorem ipsum odor amet, consectetuer adipiscing elit. Rhoncus vehicula congue nibh interdum; consequat consectetur suscipit mollis. Aplacerat felis dignissim tristique vestibulum sollicitudin. Enim ridiculus per tristique augue morbi magna. Fringilla bibendum cras scelerisque dis dictumst inceptos senectus malesuada. Luctus vitae justo mattis porttitor praesent porttitor elit amet! Integer platea tempus platea elementum ullamcorper faucibus. Vitae inceptos conubia cursus habitasse proin habitant pharetra.";
    const [isVisible, setIsVisible] = useState(false);
    const missionRef = useRef(null);

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
    
        if (missionRef.current) {
          observer.observe(missionRef.current);
        }
    
        return () => {
          if (missionRef.current) {
            observer.unobserve(missionRef.current);
          }
        };
      }, []);

    return ( 
        <div 
            ref={missionRef}
            className={`missionWrapper ${isVisible ? 'fade-in' : ''}`}>
            <div className="missionText">
                <div className="missionTitle">OUR MISSION</div>
                <div className="missionStatement">{missionStatement}</div>
            </div>
            <div className="missionSlideShow">
                <Slideshow />
            </div>
        </div>
     );
}
 
export default Mission;