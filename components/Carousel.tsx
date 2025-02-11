"use client";
import { useState, useEffect } from "react";
import { FaLessThan, FaGreaterThan, FaBars } from "react-icons/fa6";
import NavBar from "./NavBar";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "/carouselImage/bus2.jpg",
      title: "Innovative Solutions",
      description: "We bring the latest technology to help grow your business.",
    },
    {
      image: "/carouselImage/bus3.jpg",
      title: "Professional Services",
      description: "Experience top-notch support and service from our team.",
    },
    {
      image: "/carouselImage/bus4.jpg",
      title: "Your Success, Our Mission",
      description: "We are dedicated to achieving your goals together.",
    },
    {
      image: "/carouselImage/bus5.jpg",
      title: "Welcome to Noor Islam",
      description: "Bus Rental And Transportation",
    },
    {
      image: "/carouselImage/bus6.jpg",
      title: "Welcome to Noor Islam",
      description: "Bus Rental And Transportation",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen">
      <NavBar />
      {/* Carousel wrapper */}
      <div className="relative h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={slide.title}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
              <h1 className="text-xl font-medium">{slide.title}</h1>
              <h2 className="text-5xl font-bold mt-2">{slide.description}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="carsousel-btn left-4"
        onClick={prevSlide}
      >
        <FaLessThan />
      </button>
      <button
        type="button"
        className="carsousel-btn right-4"
        onClick={nextSlide}
      >
        <FaGreaterThan />
      </button>
    </div>
  );
};

export default Carousel;
