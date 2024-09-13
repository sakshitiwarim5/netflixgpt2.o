import React, { useState } from "react";
import mentors from "../components/img/mentors.png";

// Inline SVG for Search Icon
const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11 3a8 8 0 110 16 8 8 0 010-16zM21 21l-4.35-4.35"
    />
  </svg>
);

// Inline SVG for Arrow Icon
const ArrowIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const HeaderSection = () => {
  const [isMentorClicked, setIsMentorClicked] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#E6E8F8] via-white to-[#F8EAF7] h-screen">
      <div className="relative bg-FF5E3F4 min-h-screen bg-blue-0 overflow-hidden">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-10 py-6">
          <div className="text-6xl font-bold pl-18">
            <img src={mentors} alt="logo" className="h-10" />
          </div>
          <ul className="flex space-x-8 text-gray-800 font-bold">
            <li>Home</li>
            <li>Mentors</li>
            <li>Blogs</li>
            <li>FAQs</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">Logout</button>
            <button className="px-4 py-2 bg-gray-800 text-white rounded-lg">
              Dashboard
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="text-center mt-20 ">
          <div className="flex justify-center space-x-10 mb-8">
            <button
              className={`text-gray-700 font-medium ${
                !isMentorClicked && "border-b-2 border-purple-400"
              }`}
              onClick={() => setIsMentorClicked(false)}
            >
              Mentee
            </button>
            <button
              className={`text-gray-500 font-medium ${
                isMentorClicked && "border-b-2 border-purple-400"
              }`}
              onClick={() => setIsMentorClicked(true)}
            >
              Mentor
            </button>
          </div>
          {!isMentorClicked ? (
            <>
              <h1 className="text-6xl font-bold text-gray-800">
                Learn and grow with help <br /> from world-class mentors
              </h1>
              <p className="text-gray-800 text-2xl mt-4 text-center font-semibold">
                Build an epic career with expert mentors from all over the
                world,
                <br />
                let's start today.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-6xl font-bold text-gray-800">
                Teach and grow with help <br /> to a learner from worldwide
              </h1>
              <p className="text-gray-800 text-2xl mt-4 text-center font-semibold">
                Build confidence as a leader, grow your network, and define your
                legacy.
              </p>
            </>
          )}

          {/* Search Box */}
          {!isMentorClicked && (
            <div className="mt-12 flex justify-center">
              <div className="flex bg-white rounded-full shadow-lg w-full max-w-3xl p-4 items-center">
                <SearchIcon className="h-6 w-6 text-gray-600 mx-4" />
                <input
                  type="text"
                  placeholder="Search by mentor, language, or role"
                  className="flex-grow pl-4 text-gray-700 focus:outline-none"
                />
                <select className="bg-white text-gray-600 border-none focus:outline-none mx-4">
                  <option value="">Categories</option>
                  <option value="engineering">Engineering</option>
                  <option value="marketing">Marketing</option>
                  <option value="product">Product</option>
                  <option value="design">Design</option>
                  <option value="data-science">Data Science</option>
                  <option value="content-writing">Content Writing</option>
                </select>

                <select className="bg-white text-gray-600 border-none focus:outline-none mx-4">
                  <option value="">Select State</option>
                  <option value="AP">Andhra Pradesh</option>
                  <option value="AR">Arunachal Pradesh</option>
                  <option value="AS">Assam</option>
                  <option value="BR">Bihar</option>
                  <option value="CT">Chhattisgarh</option>
                  <option value="GA">Goa</option>
                  <option value="GJ">Gujarat</option>
                  <option value="HR">Haryana</option>
                  <option value="HP">Himachal Pradesh</option>
                  <option value="JK">Jammu and Kashmir</option>
                  <option value="JH">Jharkhand</option>
                  <option value="KA">Karnataka</option>
                  <option value="KL">Kerala</option>
                  <option value="LA">Ladakh</option>
                  <option value="LD">Lakshadweep</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="MH">Maharashtra</option>
                  <option value="MN">Manipur</option>
                  <option value="ME">Meghalaya</option>
                  <option value="MI">Mizoram</option>
                  <option value="NL">Nagaland</option>
                  <option value="OD">Odisha</option>
                  <option value="PY">Puducherry</option>
                  <option value="PB">Punjab</option>
                  <option value="RJ">Rajasthan</option>
                  <option value="SK">Sikkim</option>
                  <option value="TN">Tamil Nadu</option>
                  <option value="TS">Telangana</option>
                  <option value="TR">Tripura</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="UT">Uttarakhand</option>
                  <option value="WB">West Bengal</option>
                </select>

                <button className="bg-purple-500 text-white px-6 py-2 rounded-full">
                  Search
                </button>
              </div>
            </div>
          )}

          {isMentorClicked && (
            <div className="mt-12 flex justify-center">
              <button
                className={`border-2 rounded-lg px-10 py-2 flex items-center ${
                  isButtonActive
                    ? "bg-black text-white border-black"
                    : "bg-transparent text-black border-black"
                }`}
                onClick={() => setIsButtonActive(!isButtonActive)}
              >
                <span className="mr-2">Become a Member</span>
                <ArrowIcon
                  className={`h-5 w-5 ${
                    isButtonActive ? "text-white" : "text-black"
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
