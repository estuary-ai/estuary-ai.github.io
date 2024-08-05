import React, { useState, useEffect, useRef } from 'react';
import slidehow from '../css/Slideshow.css'; // Import the CSS file for styling
import skelly from "../assets/SkellyChair.png";
import teaserchair from "../assets/Teaser_chair.png";
import teasermesh from "../assets/Teaser_mesh.png";
import teasermeta from "../assets/Teaser_meta.png";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideRef = useRef([]);

  const slides = [
    { id: 1, image: skelly, desc: "desc1 asdfasdfasdf" },
    { id: 2, image: teaserchair, desc: "desc2 qwerqwerqwer" },
    { id: 3, image: teasermesh, desc: "desc3 zxcvzxcvzxcv" },
    { id: 4, image: teasermeta, desc: "desc4 poiupoijpoiu" },
  ];

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
