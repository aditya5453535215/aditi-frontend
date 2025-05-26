
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../SOR/partners.css"
import { div } from "framer-motion/client";
import Slider from "../Componant/Slider";
import Footer from "../Componant/common/Footer.jsx";
import Headers from "../Componant/common/Header.js";


const companyImage = process.env.PUBLIC_URL + "/hiteshbhai.png";
const companyImage2 = process.env.PUBLIC_URL + "/image.png";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.3 } },
};

const images = [
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
  { src: process.env.PUBLIC_URL + "/ADITI ECO - LOGO WHITE.png", alt: "Slide 1" },
];


const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [partnerImage, setPartnerImage] = useState(images)

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="monospace">
      < Headers />
      <Slider />
      <section className="company-intro intro-left">
        <motion.div
          className="intro-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariant}
        >
          <h2 className="fs-1">Building Dreams with Precision</h2>
          <p className="fs-6">
            At Aditi Eco Construction, we take pride in delivering excellence. With decades of experience, our commitment to quality and innovation has set new benchmarks in the construction industry.
          </p>
          <blockquote className="fs-6">
            “We believe architecture is not just about building structures, it's about crafting experiences.”
          </blockquote>
          <p className="fs-6">
            From sustainable designs to precise execution, our team ensures every project is a masterpiece of durability, aesthetics, and functionality.
          </p>
        </motion.div>

        <motion.div
          className="intro-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariant}
        >
          <div className="image-box">
            <img
              src={companyImage}
              alt="Company overview"
              className="company-photo"
            />
          </div>
        </motion.div>
      </section>

      <section className="company-intro intro-left">


        <motion.div
          className="intro-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={imageVariant}
        >
          <div className="image-box">
            <img
              src={companyImage2}
              alt="Company overview"
              className="company-photo"
            />
          </div>
        </motion.div>

        <motion.div
          className="intro-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariant}
        >
          <h2 className="fs-1">Building Dreams with Precision</h2>
          <p className="fs-6">
            At Aditi Eco Construction, we take pride in delivering excellence. With decades of experience, our commitment to quality and innovation has set new benchmarks in the construction industry.
          </p>
          <blockquote className="fs-6">
            “We believe architecture is not just about building structures, it's about crafting experiences.”
          </blockquote>
          <p className="fs-6">
            From sustainable designs to precise execution, our team ensures every project is a masterpiece of durability, aesthetics, and functionality.
          </p>
        </motion.div>




      </section>


      <section className="hello text-light">
        <div className="container">
          <center>
            <h2 className="text-light dori-text">
              {Array.from("FROM OUR CLIENT").map((char, index) => (
                <span className="char" key={index}>
                  {char === "" ? "\u00A0" : char}
                </span>
              ))}
            </h2>

          </center>
          <div className="carousel-inner mt-5">
            {images.map((img, index) => (
              <div
                key={index}
                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              >
                <center>
                  <img src={img.src} alt={img.alt} className="d-block" />
                </center>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <center>
              <h4>“Andres is passionate about construction and solving problems from the very top level of<br></br> the organization as demonstrated by willing executive level involvement in<br></br> solving complex problems if warranted.”</h4>
            </center>
          </div>

          {/* Dots */}
          <div className="carousel-dots bg-dark">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

      </section>

      <section className="partners">
        <div className="partner-header">
          Our Partners
        </div>
        <div className="partner-item">
           {partnerImage.map((curElem, index) => {
      
      const rows = Math.ceil(partnerImage.length / 4);
      const lastRowStart = (rows - 1) * 4;

      const isLastRow = index >= lastRowStart;
      const isLastCol = (index + 1) % 4 === 0;
      const isFirstCol = (index + 1) % 4 === 1;

      return (
        <div key={index} className={`partner-image ${isLastRow ? "no-bottom-border" : ""} ${isLastCol ? "no-right-border" : ""} ${isFirstCol ? "no-left-border" : ""}`}>
          <img src={curElem.src} alt={curElem.alt} />
        </div>
      );
            })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;