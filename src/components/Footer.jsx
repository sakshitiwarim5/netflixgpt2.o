import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-white py-6 text-center">
      <h1 className="text-4xl font-bold text-gray-800 pb-5">Mentorship</h1>

      <div className="flex justify-center space-x-4 mt-4 text-xl">
        <a href="/" className="text-gray-500 hover:text-gray-900">
          Mentors
        </a>
        <a href="/" className="text-gray-500 hover:text-gray-900">
          Blogs
        </a>
        <a href="/" className="text-gray-500 hover:text-gray-900">
          FAQs
        </a>
        <a href="/" className="text-gray-500 hover:text-gray-900">
          Contact
        </a>
      </div>

      <div className="flex justify-center space-x-4 mt-6">
        <a
          href="https://facebook.com"
          className="text-gray-500 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          href="https://twitter.com"
          className="text-gray-500 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://instagram.com"
          className="text-gray-500 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="https://linkedin.com"
          className="text-gray-500 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <p className="text-sm text-gray-600 mt-4">
        &copy; 2024 All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
