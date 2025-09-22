// Header.tsx
import React from "react";

interface HeaderProps {
  siteTitle?: string;
  tagline?: string;
}

const Header: React.FC<HeaderProps> = ({
  siteTitle = "Movie Reviews",
  tagline = "Your Trusted Source for Movie Insights",
}) => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
        {/* Logo & Branding */}
        <div className="flex items-center gap-3">
          <img
            src="/popcorn-logo.svg"
            alt="Movie Review Logo"
            className="w-12 h-12"
          />
          <div>
            <h1 className="text-2xl font-bold tracking-wide">{siteTitle}</h1>
            <p className="text-sm text-gray-400">{tagline}</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 sm:mt-0">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a
                href="#reviews"
                className="hover:text-yellow-400 transition-colors"
              >
                Reviews
              </a>
            </li>
            <li>
              <a
                href="#top-rated"
                className="hover:text-yellow-400 transition-colors"
              >
                Top Rated
              </a>
            </li>
            <li>
              <a
                href="#genres"
                className="hover:text-yellow-400 transition-colors"
              >
                Genres
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
