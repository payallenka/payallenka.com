import React from 'react';
import Link from 'next/link';

interface NavbarProps {
  navigation: { name: string; href: string }[];
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigation, darkMode, setDarkMode }) => {
  return (
    <nav className="w-full max-w-4xl mx-auto my-8">
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
          <li key={item.href} className="relative transform transition-transform hover:scale-105 hover:rotate-3">
            <Link
              href={item.href}
              className={`text-sm font-medium relative transition-colors duration-300 ${darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-700 hover:text-gray-900'}`}
            >
              {item.name}
              <span className={`absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ${darkMode ? 'bg-gray-100' : 'bg-gray-900'}`}></span>
            </Link>
          </li>
        ))}
      </ul>
      <button
        className={`absolute top-4 right-4 px-6 py-3 rounded ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-500 text-white'} transition-colors duration-300`}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
