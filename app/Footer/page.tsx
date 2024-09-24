import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-yellow-500 text-black py-8">
      <div className="container m-auto px-4 max-w-6xl">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left side: Logo or Brand Name */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Learning Platform</h2>
            <p className="mt-2 text-black">Your path to mastering web development</p>
          </div>

          {/* Center: Navigation Links */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="hover:underline">Courses</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>

          {/* Right side: Social Media Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" className="hover:text-gray-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.835 9.835 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.865 9.865 0 0 1-3.127 1.196 4.917 4.917 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.917 4.917 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.228-.616c-.054 2.28 1.581 4.415 3.95 4.889a4.935 4.935 0 0 1-2.224.084 4.921 4.921 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.395 0-.787-.023-1.175-.069a13.939 13.939 0 0 0 7.548 2.212c9.057 0 14.01-7.513 14.01-14.01 0-.214-.005-.428-.014-.641A9.981 9.981 0 0 0 24 4.557z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" className="hover:text-gray-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.792 0 0 .774 0 1.73v20.54C0 23.226.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.73V1.73C24 .774 23.208 0 22.23 0zM7.09 20.452H3.56V9.036h3.53v11.416zm-1.765-13.25h-.023c-1.164 0-1.917-.803-1.917-1.81 0-1.026.773-1.81 1.953-1.81 1.18 0 1.917.784 1.94 1.81 0 1.006-.76 1.81-1.953 1.81zm14.146 13.25h-3.529v-6.22c0-1.565-.561-2.633-1.962-2.633-1.07 0-1.708.719-1.989 1.412-.102.247-.127.592-.127.937v6.503H8.535s.046-10.552 0-11.655h3.529v1.65c.468-.723 1.304-1.754 3.169-1.754 2.313 0 4.046 1.507 4.046 4.746v7.013z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" className="hover:text-gray-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.594 0 0 .593 0 1.324v21.351C0 23.406.594 24 1.325 24h11.496v-9.294H9.691V10.41h3.13V7.899c0-3.1 1.893-4.792 4.657-4.792 1.325 0 2.462.099 2.795.143v3.24h-1.917c-1.504 0-1.796.715-1.796 1.762v2.31h3.588l-.467 3.295h-3.121V24h6.116C23.406 24 24 23.406 24 22.675V1.325C24 .594 23.406 0 22.675 0z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Learning Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
