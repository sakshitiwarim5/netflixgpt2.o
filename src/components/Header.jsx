import React from "react";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Added useDispatch hook
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch(() => navigate("/error"));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="relative w-full h-20 flex items-center justify-between px-6 bg-black">
      {/* Netflix Logo */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
        <img className="w-44" src={LOGO} alt="Netflix Logo" />
      </div>

      {/* User Icon and Sign Out Button */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-4 z-10">
        <img
          className="w-12 h-12 rounded-md object-cover"
          alt="User Icon"
          src={user?.photoURL || "https://example.com/default-profile.png"}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://example.com/default-profile.png";
          }}
        />
        {user && (
          <div className="flex space-x-4">
            <button
              onClick={handleGptSearchClick}
              className="py-2 px-4 bg-purple-800 text-white rounded-lg"
            >
              GPT Search
            </button>
            <button
              onClick={handleSignOut}
              className="text-white bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
