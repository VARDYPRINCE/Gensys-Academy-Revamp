import "../landingstyles/landingpage.css";
import React, { useState, useEffect } from "react";

const testimonial = [
  {
    name: "Praise Ogueji",
    title: "Back End Development",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "praise-image-url",
  },
  {
    name: "Jeffrey Okechukwu",
    title: "Product Design",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "jeffrey-image-url",
  },
  {
    name: "Progress Fredrick",
    title: "Product Design",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "progress-image-url",
  },

  {
    name: "Progress Fredrick",
    title: "Product Design",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "progress-image-url",
  },

  {
    name: "Joy Ekweonu",
    title: "Data Analysis",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "progress-image-url",
  },

  {
    name: "Chisom Obi",
    title: "Back End Development",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "progress-image-url",
  },

  {
    name: "Daniel Stanley",
    title: "Front End Development",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "progress-image-url",
  },

  {
    name: "Prince Uche",
    title: "Front End Development",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "progress-image-url",
  },

  {
    name: "Joyce Ogueji",
    title: "Back End Development",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "progress-image-url",
  },

  {
    name: "Chimezirim Eze",
    title: "Data Analysis",
    text: "We try so much not to embrace the truth. We try so hard to escape our reality. Not just because it’s difficult. It is uncomfortable, painful, regretful and down right terrifying. How long can we run? How long do we live in the illusion of escape? At the end of the day, we find ourselves stuck in the same spot (if not worse). Only then, do we realize how far we are from genuine happiness and fulfilment and how close we are to the grave.",
    image: "progress-image-url",
  },
];

const testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonial.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonial.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const getRandomInterval = () =>
      Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000;

    const intervalId = setInterval(nextSlide, getRandomInterval());

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <section className="new_wrapper" id="testimony">
      <h2 className="testiment">Testimonies of Past Interns</h2>

      <div className="carousel">
        <button
          className="carousel-btn prev-btn"
          onClick={prevSlide}
          aria-label="Previous testimonial"
        >
          ❮
        </button>

        <article className="testimonial">
          <div className="imgcenter">
            <h3 className="testimonyname">{testimonial[currentIndex].name}</h3>
            <p className="testimonttitles">{testimonial[currentIndex].title}</p>
          </div>
          <p className="carol">{testimonial[currentIndex].text}</p>
        </article>

        <button
          className="carousel-btn next-btn"
          onClick={nextSlide}
          aria-label="Next testimonial"
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default testimonials;
