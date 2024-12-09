// Skills.tsx
import React from 'react';

const skills = [
  { name: 'Musician', icon: '🎵' },
  { name: 'Sound Engineering', icon: '🔊' },
  { name: 'Emceeing', icon: '🎤' },
  { name: 'Editing', icon: '✂️' },
  { name: 'Graphic Design', icon: '🎨' },
  { name: 'Motion Graphics', icon: '🎞️' },
];

const Skills: React.FC = () => {
  return (
    <section id='skills'
      className="bg-gray-100 py-12"
      style={{
        backgroundImage: 'url(background/back2.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Header Section */}
      <div className="text-center px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-green-200">Skills</h1>
        <p className="text-md md:text-lg text-white">
          A showcase of my diverse skills and talents.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 md:px-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-white shadow-md rounded-xl flex flex-col items-center p-4 md:p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="text-4xl md:text-5xl mb-2 text-gray-700 group-hover:text-blue-500 transition">
              {skill.icon}
            </div>

            {/* Skill Name */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
