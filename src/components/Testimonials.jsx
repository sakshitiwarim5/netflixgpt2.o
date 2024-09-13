import React, { useState } from "react";
import john from "../components/img/john.jpg";
import alex from "../components/img/alex.jpg";
import ment2 from "../components/img/ment2.png";
import jenniefer from "../components/img/jenniefer.jpg";

function Testimonials() {
  const testimonials = [
    {
      img: alex,
      name: "Alex",
      title: "C.E.O",
      text: "Mentorship has been an absolute game-changer for me. As a young professional navigating my career, having access to experienced mentors through this platform has been invaluable.",
    },
    {
      img: john,
      name: "John Doe",
      title: "Director",
      text: "I've been using Mentorship for several months now, and I'm continually impressed by the quality of mentorship available on the platform. The matching algorithm does an excellent job of pairing mentees with mentors who possess relevant experience and expertise.",
    },
    {
      img: ment2,
      name: "Michal Duke",
      title: "C.E.O",
      text: "Mentorship has exceeded my expectations in every way. As a mentor, I've had the opportunity to share my knowledge and expertise with aspiring professionals, and the platform's intuitive interface has made the experience enjoyable and efficient.",
    },
    {
      img: jenniefer,
      name: "Merry Yote",
      title: "C.E.O",
      text: "Mentorship has been an absolute game-changer for me. As a young professional navigating my career, having access to experienced mentors through this platform has been invaluable.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 2);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < testimonials.length - 2) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-start">
          {/* Text on the Left */}
          <div className="max-w-lg pl-40">
            <span className="bg-gray-200 text-gray-900 py-1 px-3 rounded-full text-sm">
              Testimonials
            </span>
            <h2 className="text-4xl font-bold text-gray-800 mt-4 leading-tight">
              What our customers <br />
              say about us
            </h2>
          </div>

          {/* Testimonials on the Right */}
          <div className="flex flex-col items-end">
            <div className="flex space-x-6 overflow-hidden">
              <div className="flex transition-transform duration-500">
                {visibleTestimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-lg rounded-lg p-8 max-w-md flex-none mx-4 flex flex-col items-start transition-transform transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.img}
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-700">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-600">{testimonial.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={handlePrev}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                disabled={startIndex === 0}
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
                disabled={startIndex >= testimonials.length - 2}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
