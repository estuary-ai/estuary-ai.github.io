import React, { useEffect, useRef, useState } from 'react';
import '../css/TextBlock.css'; // Import the CSS file for styling

const TextBlock = (props) => {
  let title = props.title;
  let content = props.content
  let icon = props.icon

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
      className="relative flex justify-center"
      style={{
        maxWidth: '25%',
        minWidth: '300px',
      }}
    >
      {/* white background  */}
      <div
        className="absolute inset-0 -z-10 bg-white"
        style={{
          padding: '20px',
          borderRadius: '4%'
        }}
      ></div>

      {/* actual textblock */}
      <div
        ref={featureRef}
        className={`textBlockWrapper ${isVisible ? 'fade-in' : ''} w-full`}
      >
        <div className="textBlockHeader">
          <div className="textBlockIcon">{icon}</div>
          <div className="textBlockTitle">{title}</div>
        </div>
        <div className="textBlockContent">{content}</div>
      </div>
    </div>

  );
}

export default TextBlock;