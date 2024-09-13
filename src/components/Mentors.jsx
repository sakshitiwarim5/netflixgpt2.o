import React, { useState } from "react";
import ment1 from "../components/img/ment1.png";
import ment2 from "../components/img/ment2.png";
import ment3 from "../components/img/ment3.webp";
import ment4 from "../components/img/ment4.jpeg";
import ment5 from "../components/img/john.jpg";
import ment6 from "../components/img/alex.jpg";

import usaFlag from "../components/img/usa-flag.png";
import ukFlag from "../components/img/uk-flag.jpeg";
import germanyFlag from "../components/img/germany-flag.png";
import franceFlag from "../components/img/france-flag.png";
import indiaFlag from "../components/img/india-flag.png";

function Mentors() {
  const initialMentors = [
    {
      img: ment1,
      name: "John Doe",
      title: "Senior Product Designer",
      company: "Module It ltd.",
      experience: "3 years",
      attendance: "64%",
      flag: usaFlag, // Flag image for USA
    },
    {
      img: ment2,
      name: "Hamed",
      title: "Developer",
      experience: "1 year",
      attendance: "1%",
      flag: ukFlag, // Flag image for the UK
    },
    {
      img: ment3,
      name: "Maxim",
      title: "Marketing Manager",
      company: "Emperail IT Solution",
      experience: "12 years",
      attendance: "2%",
      flag: germanyFlag, // Flag image for Germany
    },
    {
      img: ment4,
      name: "Alexia Manda",
      title: "Senior Web Developer",
      company: "Exfo IT Expert",
      experience: "6 years",
      attendance: "2%",
      flag: franceFlag, // Flag image for France
    },
    {
      img: ment5,
      name: "Ravi Patel",
      title: "Data Scientist",
      company: "Tech Innovations",
      experience: "4 years",
      attendance: "90%",
      flag: indiaFlag, // Flag image for India
    },
    {
      img: ment6,
      name: "Emily Smith",
      title: "AI Researcher",
      company: "Future Labs",
      experience: "8 years",
      attendance: "75%",
      flag: indiaFlag, // Flag image for India
    },
  ];

  const [mentors, setMentors] = useState(initialMentors);
  const [startIndex, setStartIndex] = useState(0);

  const visibleMentors = mentors.slice(startIndex, startIndex + 4);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex < mentors.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="py-12 h-full w-full">
      <h2 className="text-5xl font-semibold text-left pl-60 pt-16 mb-16">
        Discover the world's top <br /> mentors
      </h2>

      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handlePrev}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          &#8592;
        </button>
        <div className="flex overflow-hidden">
          <div className="flex space-x-12 transition-transform duration-500">
            {visibleMentors.map((mentor, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg text-left w-80 h-auto flex-none mx-4 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl hover:border-2 hover:border-gray-200"
              >
                <img
                  src={mentor.img}
                  alt={mentor.name}
                  className="h-24 w-24 rounded-full mb-4"
                />
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold mr-2">{mentor.name}</h3>
                  <img
                    src={mentor.flag}
                    alt={`${mentor.name}'s flag`}
                    className="h-6 w-6"
                  />
                </div>
                <p className="text-lg mb-1">{mentor.title}</p>
                {mentor.company && (
                  <p className="text-lg mb-1">{mentor.company}</p>
                )}
                <p className="text-lg mb-1">Experience: {mentor.experience}</p>
                <p className="text-lg">Attendance: {mentor.attendance}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Mentors;
