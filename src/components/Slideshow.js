import React, { useState, useEffect, useRef } from 'react';
import slidehow from '../css/Slideshow.css'; // Import the CSS file for styling

const Slideshow = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef([]);

  const slides = props.slides
  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const showSlides = (n) => {
    const slidesArray = slideRef.current;
    if (n >= slides.length) {
      setSlideIndex(0);
    } else if (n < 0) {
      setSlideIndex(slides.length - 1);
    } else {
      slidesArray.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
      });
    }
  };

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  return (
    <div>
      <div className="slideshow-container">
        {slides.map((slide, index) => (
          <div
            className="mySlides"
            key={slide.id}
            ref={(el) => (slideRef.current[index] = el)}
            style={{ display: index === 0 ? 'block' : 'none' }} // Initially display only the first slide
          >
            <div className="numbertext">
              {slide.id} / {slides.length}
            </div>
            <img src={slide.image} alt="img" className="slideImg" style={{ width: '100%' }} />
            <div className="text">{slide.desc}</div>
          </div>
        ))}
        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
      <br />
    </div>
  );
};

export default Slideshow;
