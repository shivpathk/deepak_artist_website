import React, { useState, useEffect , useRef} from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { images } from "../../constant";

import "./testimonial.scss";

const testimonials = [
  {
    name: "Aditya",
    location: "DUMRAON",
    imgurl: images.aditya,
    feedback:
      "Deepak's artistry as a sketch artist is truly commendable. His intricate detailing and ability to capture emotion on paper showcase a rare talent that deserves widespread recognition.",
  },
  {
    name: "Anamika",
    location: "PATNA",
    imgurl: images.anamika,
    feedback:
      "A sketch artist of remarkable talent, his creations weave intricate details into visual narratives, evoking deep emotions and leaving an indelible impact.",
  },
  {
    name: "Happy",
    location: "DELHI",
    imgurl: images.happy,
    feedback:
      "Deepak's sketches are a visual poetry, each stroke revealing a profound connection to his subjects. His work not only showcases technical finesse but also an emotional depth that leaves a lasting impression.",
  },
  {
    name: "Shivam",
    location: "DUMRAON",
    imgurl: images.shivam,
    feedback:
      "With a mastery of lines and shadows, the sketch artist effortlessly breathes life into his creations. Each stroke tells a silent story, making Deepak's work a testament to both skill and emotion in the world of art.",
  },
  {
    name: "Akash",
    location: "NOIDA",
    imgurl: images.akash,
    feedback:
      "In the world of sketch artistry, this creator's prowess shines brightly. Through skillful strokes, emotions are delicately etched onto paper, making Deepak's work a captivating journey into the nuanced beauty of human expression.",
  },
  {
    name: "Dewesh    ",
    location: "HIMACHAL",
    imgurl: images.dewesh,
    feedback:
      "Within the strokes of this gifted sketch artist lies a symphony of emotions and meticulous craftsmanship. Unveiling a world of beauty and depth, Deepak's creations are a testament to his unparalleled ability to translate the intangible into visual poetry.",
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const test = testimonials[currentIndex];
  
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
    () =>
    setCurrentIndex((prevIndex) =>
    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1),
  
    2500);
  
    return () => {
      resetTimeout();
    };
  }, [currentIndex]);
  
  const handleClick = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };


  return (
    <div className="app__testimonial" id="client">
      <h2 className="head-text">My Happy Clients</h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={test.imgurl} alt={test.name} />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.location}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Testimonial;
