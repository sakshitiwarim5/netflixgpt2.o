import React, { useState, useRef } from "react";
import { checkValidData } from "../utils/validation";

const Header = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  // Use separate refs for email and password fields
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    // Get the email and password values
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // Validate the form data
    console.log(emailValue);
    console.log(passwordValue);

    const message = checkValidData(emailValue, passwordValue);
    console.log(message);
  };

  const toggleSignInform = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1280,h_720,q_75,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs")`,
      }}
    >
      {/* Netflix Logo */}
      <div className="absolute top-0 left-0 p-4">
        <img
          className="w-44"
          src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="Netflix Logo"
        />
      </div>

      {/* Centered Form */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-black bg-opacity-80 p-10 rounded-lg shadow-lg w-[30rem] h-[34rem]">
          <h1 className="text-3xl font-bold text-white mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {/* Full Name Field - Only for Sign Up */}
            {!isSignInForm && (
              <input
                ref={emailRef}
                type="text"
                placeholder="Full Name"
                className="w-full p-4 text-white bg-gray-800 rounded focus:outline-none focus:ring focus:ring-red-600"
              />
            )}

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="sr-only">
                Email or mobile number
              </label>
              <input
                ref={emailRef}
                type="text"
                id="email"
                placeholder="Email or mobile number"
                className="w-full p-4 text-white bg-gray-800 rounded focus:outline-none focus:ring focus:ring-red-600"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-4 text-white bg-gray-800 rounded focus:outline-none focus:ring focus:ring-red-600"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 text-white bg-red-600 rounded hover:bg-red-700"
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>

          {/* Additional options */}
          <div className="text-center text-gray-400 mt-4">
            <p>OR</p>
            <button className="text-white hover:underline">
              Use a sign-in code
            </button>
          </div>

          {/* Forgot Password and Remember Me */}
          <div className="flex justify-between text-sm text-gray-400 mt-4">
            <a href="#" className="hover:underline">
              Forgot password?
            </a>
            <div className="flex items-center space-x-1">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-red-600 bg-gray-800 border-gray-700 rounded focus:ring-red-600"
              />
              <label
                htmlFor="remember-me"
                className="text-white cursor-pointer"
              >
                Remember me
              </label>
            </div>
          </div>

          {/* Toggle between Sign In and Sign Up */}
          <div className="mt-6 text-center text-gray-400">
            <p className="py-4 cursor-pointer" onClick={toggleSignInform}>
              {isSignInForm
                ? "New to Netflix? Sign up now"
                : "Already registered? Sign In now...."}
            </p>

            <p className="mt-2 text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
