import React from "react";
import "./work.scss";
import { images } from "../../constant";

const work = () => {
  return (
    <section id="works">
      <p className="works_title">here are some of my works</p>
      <div className="work_imgs">
        <a href={images.work1} target="_blank">
          <img src={images.work1} alt="image" className="work_img" />
        </a>
        <a href={images.work2} target="_blank">
          <img src={images.work2} alt="image" className="work_img" />
        </a>
        <a href={images.work3} target="_blank">
          <img src={images.work3} alt="image" className="work_img" />
        </a>
        <a href={images.work4} target="_blank">
          <img src={images.work4} alt="image" className="work_img" />
        </a>
        <a href={images.work5} target="_blank">
          <img src={images.work5} alt="image" className="work_img" />
        </a>
        <a href={images.work6} target="_blank">
          <img src={images.work6} alt="image" className="work_img" />
        </a>
        <a href={images.work7} target="_blank">
          <img src={images.work7} alt="image" className="work_img" />
        </a>
        <a href={images.work8} target="_blank">
          <img src={images.work8} alt="image" className="work_img" />
        </a>
        <a href={images.work9} target="_blank">
          <img src={images.work9} alt="image" className="work_img" />
        </a>
        <a href={images.work10} target="_blank">
          <img src={images.work10} alt="image" className="work_img" />
        </a>
        <a href={images.work11} target="_blank">
          <img src={images.work11} alt="image" className="work_img" />
        </a>
        <a href={images.work12} target="_blank">
          <img src={images.work12} alt="image" className="work_img" />
        </a>
        <a href={images.work13} target="_blank">
          <img src={images.work13} alt="image" className="work_img" />
        </a>
        <a href={images.work14} target="_blank">
          <img src={images.work14} alt="image" className="work_img" />
        </a>
        <a href={images.work15} target="_blank">
          <img src={images.work15} alt="image" className="work_img" />
        </a>
        <a href={images.work16} target="_blank">
          <img src={images.work16} alt="image" className="work_img" />
        </a>
        <a href={images.work17} target="_blank">
          <img src={images.work17} alt="image" className="work_img" />
        </a>
        <a href={images.work18} target="_blank">
          <img src={images.work18} alt="image" className="work_img" />
        </a>
        <a href={images.work19} target="_blank">
          <img src={images.work19} alt="image" className="work_img" />
        </a>
      </div>
    </section>
  );
};

export default work;
