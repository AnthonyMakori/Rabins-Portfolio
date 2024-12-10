// Hobbies.tsx
import React from 'react';

const hobbies = [
  { name: 'Reading', icon: '📚', description: 'I love reading books as it expands my knowledge and lets me dive into different worlds.' },
  { name: 'Traveling', icon: '🌍', description: 'Traveling allows me to explore new places, experience different cultures, and create lasting memories.' },
  { name: 'Singing', icon: '🎤', description: 'Singing is my way of expressing emotions and connecting with music on a deeper level.' },
];

const Hobbies: React.FC = () => {
  return (
    <section id='hobbies' className="bg-gray-50 py-16 px-4">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">My Hobbies</h1>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Here are a few things I love to do during my free time!
        </p>
      </div>

      {/* Hobbies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {hobbies.map((hobby) => (
          <div
            key={hobby.name}
            className="group bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Icon Section */}
            <div className="text-5xl mb-4 group-hover:text-blue-500 transition duration-300">
              {hobby.icon}
            </div>

            {/* Name */}
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition duration-300">
              {hobby.name}
            </h3>

            {/* Description */}
            <p className="mt-2 text-gray-500 text-sm">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
