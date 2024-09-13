import React from "react";
import logoipsum from "../components/img/logoipsum.png";
import LSTC from "../components/img/LSTC Dummy.png";
import Company from "../components/img/Company.png";
import vedio from "../components/img/vedio.jpg";
import vedio2 from "../components/img/vedio2.jpg";
import vedio3 from "../components/img/vedio3.jpg";
import vedio4 from "../components/img/vedio4.jpg";
import { FaUserEdit } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
const LoginPage = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="border-2 border-grey-800">
        <header className="flex space-x-10 h-56 pl-52 pt-20 justify-start">
          <img src={logoipsum} alt="Logo" className="h-12" />
          <img src={LSTC} alt="LSTC Dummy" className="h-12" />
          <img src={Company} alt="Company" className="h-12" />
        </header>
      </div>

      {/* Main Section */}
      <main className="text-center py-16 px-4">
        <h2 className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm shadow-md inline-flex justify-center items-center w-28 mx-auto">
          Workflow
        </h2>
        <h1 className="text-5xl font-bold text-gray-800 mt-2">
          Look at a glance how our <br />
          system works
        </h1>
        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 ">
            <div className="max-w-xs">
              <div className="bg-white p-10 rounded-lg shadow-lg border-2 border-transparent shadow-md w-96 h-96 ">
                <div className="flex justify-center items-center w-32 h-32 mx-auto bg-white rounded-full border-2 border-grey-200 shadow-md">
                  <FaUserEdit className="text-5xl text-green-400" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Create Account</h3>
                <p className="mt-4 text-gray-500 font-bold">
                  It’s very easy to open an account and start your mentorship
                  journey.
                </p>
              </div>
            </div>
            <div className="max-w-xs">
              <div className="bg-white p-10 rounded-lg shadow-lg border-2 border-grey-100 shadow-2xl w-96 h-96">
                <div className="flex justify-center items-center w-32 h-32 mx-auto bg-white rounded-full border-2 border-grey-200 shadow-md">
                  <FaUserCheck className="text-5xl text-green-400" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">
                  Complete your profile
                </h3>
                <p className="mt-4 text-gray-500 font-bold">
                  Complete your profile with all the info to get attention of
                  mentees.
                </p>
              </div>
            </div>
            <div className="max-w-xs">
              <div className="bg-white p-10 rounded-lg shadow-lg border-2 border-gray-100 shadow-md w-96 h-96">
                <div className="flex justify-center items-center w-32 h-32 mx-auto bg-white rounded-full border-1 border-transparent shadow-md">
                  <RiUserSearchFill className="text-5xl text-green-400" />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Hire Mentors</h3>
                <p className="mt-4 text-gray-500 font-bold">
                  Explore our growing catalog of experienced mentors until you
                  find the perfect fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="text-center pb-18">
          <h2 className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm shadow-md inline-flex justify-center items-center w-24 mx-auto ">
            Features
          </h2>
          <h1 className="text-5xl font-bold text-gray-800 mt-2">
            Learn that new skill, launch that project, <br />
            land your dream career.
          </h1>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
          <div className="flex flex-col items-center text-center md:items-start md:text-left pt-8">
            <h3 className="text-5xl font-semibold">
              Expert Guidance: Just a <br /> Text Away
            </h3>
            <p className="mt-4 text-gray-500 text-2xl font-medium">
              Unlock your potential with expert mentorship at your fingertips.
              Connect with experienced mentors instantly and get the guidance
              you need, one text away.
            </p>
          </div>
          <img
            src={vedio}
            alt="Guidance"
            className="max-w-full h-auto mx-auto"
          />

          <img
            src={vedio2}
            alt="Video Sessions"
            className="max-w-full h-auto mx-auto"
          />
          <div className="flex flex-col items-center text-center md:items-start md:text-left pt-20">
            <h3 className="text-5xl font-semibold">
              Video Sessions: Face-to-face
            </h3>
            <p className="mt-4 text-gray-500 text-2xl font-medium">
              Engage in meaningful conversations with expert mentors through
              face-to-face interactions. Talk it out and gain valuable insights
              and guidance, all in real-time.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-5xl font-semibold">Messaging System</h3>
            <p className="mt-4 text-gray-500 text-2xl font-medium">
              Connect seamlessly with mentors through our direct messaging
              system. Experience real-time communication, share insights, and
              get instant guidance whenever you need it.
            </p>
          </div>
          <img
            src={vedio3}
            alt="Messaging System"
            className="max-w-full h-auto mx-auto"
          />

          <img
            src={vedio4}
            alt="Feedback and Ratings"
            className="max-w-full h-auto mx-auto"
          />
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-5xl font-semibold">Feedback and Ratings</h3>
            <p className="mt-4 text-gray-400 text-2xl font-medium">
              After each mentoring session, both mentees and mentors can provide
              feedback and ratings based on their experience. This feature helps
              maintain the quality of mentoring relationships and allows users
              to continuously improve.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
