import React from "react";

const Header = () => {
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
        <div className="bg-black bg-opacity-90 p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-3xl font-bold text-white mb-6">Sign In</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email or mobile number
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email or mobile number"
                className="w-full p-3 text-white bg-gray-800 rounded focus:outline-none focus:ring focus:ring-red-600"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="w-full p-3 text-white bg-gray-800 rounded focus:outline-none focus:ring focus:ring-red-600"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-red-600 rounded hover:bg-red-700"
            >
              Sign In
            </button>
          </form>
          <div className="text-center text-gray-400 mt-4">
            <p>OR</p>
            <button className="text-white hover:underline">
              Use a sign-in code
            </button>
          </div>
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
          <div className="mt-6 text-center text-gray-400">
            <p>
              New to Netflix?{" "}
              <a href="#" className="text-white hover:underline">
                Sign up now.
              </a>
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
