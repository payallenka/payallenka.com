import React from "react";

interface CardProps {
  icon: React.ReactNode;
  link: string;
  label: string;
  handle: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ icon, link, label, handle, className }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 ${className}`}
    >
      <div className="flex items-center justify-center w-12 h-12 text-sm border rounded-full text-gray-200 dark:text-gray-300 border-gray-500 bg-gray-900 dark:bg-gray-700">
        {icon}
      </div>
      <div className="mt-4 text-center">
        <span className="block text-lg font-medium text-gray-800 dark:text-gray-200">
          {handle}
        </span>
        <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400">
          {label}
        </span>
      </div>
    </a>
  );
};

export default Card;
