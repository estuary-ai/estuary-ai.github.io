// Slideshow.js
import React, { useState, useEffect } from 'react';
import '../css/Slideshow.css'; // Import the CSS file for styling
import skelly from "../assets/SkellyChair.png";
import teaserchair from "../assets/Teaser_chair.png";
import teasermesh from "../assets/Teaser_mesh.png";
import teasermeta from "../assets/Teaser_meta.png";


const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [
    {id: 1, image: skelly, desc: "desc1 asdfasdfasdf"},
    {id: 2, image: teaserchair, desc: "desc2 qwerqwerqwer"},
    {id: 3, image: teasermesh, desc: "desc3 zxcvzxcvzxcv"},
    {id: 4, image: teasermeta, desc: "desc4 poiupoijpoiu"},
  ];

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);


  const showSlides = (n) => {
    const slides = document.getElementsByClassName('mySlides');
    // const dots = document.getElementsByClassName('dot');
    if (n >= slides.length) {
      setSlideIndex(0);
    } else if (n < 0) {
      setSlideIndex(slides.length-1);
    } else {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      // for (let i = 0; i < dots.length; i++) {
      //   dots[i].className = dots[i].className.replace(' active', '');
      // }
      slides[slideIndex].style.display = 'block';
      // dots[slideIndex - 1].className += ' active';
    }
  };

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  // const currentSlide = (n) => {
  //   setSlideIndex(n);
  // };

  return (
    <div>
      <div className="slideshow-container">
        {/* <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src={skelly} alt="Nature" style={{ width: '100%' }} />
          <div className="text">Caption Text</div>
        </div> */}
        {slides.map(slide =>(
          <div className="mySlides" key={slide.id}>
            <div className="numbertext">{slide.id} / {slides.length}</div>
            <img src={slide.image} alt="img" style={{width: '100%'}}/>
            <div className="text">{slide.desc}</div>
          </div>
        ))

        }
        {/* <img src={slides[0].image} alt="" /> */}

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
      <br />

      {/* <div style={{ textAlign: 'center' }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div> */}
    </div>
  );
};

export default Slideshow;

// const Slideshow = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isHovered, setIsHovered] = useState(false);

  
//     useEffect(() => {
//         const interval = setInterval(() => {
//             if(!isHovered){
//                 setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//             }
//             console.log(isHovered);
//         }, 3000); // Change image every 3 seconds
  
//       return () => clearInterval(interval);
//     }, [isHovered]);

//     function changePage(amt){
//       if(currentIndex + amt <0){
//         setCurrentIndex(images.length-1);
//       }else{
//         setCurrentIndex((prevIndex) => (prevIndex + amt) % images.length);
//       }
      
//     }
  
//     return (
//       <div className="slideshow" 
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}>
//         <div className="slide-container">
//           <img
//             src={images[currentIndex]}
//             className="slide active"
//             alt={`Slide ${currentIndex}`}
//           />
//           <div className="desc">
//             {descs[currentIndex]}
//           </div>
//         </div>
//         <div className="leftRightWrapper">
//           { isHovered && <button className="prev" onClick={()=>{changePage(-1)}}>&lt;</button> }
//           { isHovered && <button className="next" onClick={()=>{changePage(1)}}>&gt;</button> }
//         </div>
//       </div>
//     );
//   };
  
//   export default Slideshow;