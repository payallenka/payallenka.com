// Assuming you have a Card component file
import React from "react";

type CardProps = {
  title: string;
  description: string;
  link: string;
  className?: string; // Optional className prop to allow for custom styling
};

const Card: React.FC<CardProps> = ({ title, description, link, className }) => {
  return (
    <a
      href={link}
      className={`relative p-6 bg-gray-800 rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:rotate-3 hover:shadow-2xl ${className}`}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p>{description}</p>
    </a>
  );
};

export default Card;
