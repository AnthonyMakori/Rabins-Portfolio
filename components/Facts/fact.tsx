import React from 'react';
import { FaPen, FaFilm, FaCamera, FaUsers } from 'react-icons/fa';

const Facts = () => {
  return (
    <section id="facts" style={{overflowX: 'hidden' }}>
    <div
      className="bg-cover bg-center p-8 rounded-lg"
      style={{ backgroundImage: 'url(background/back.webp)' }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-blue-600" style={{paddingLeft:'30px'}}>Facts</h2>
      <p className="text-lg mb-6 text-white" style={{paddingLeft:'30px'}}>
        I have gained valuable experience in various roles across the film industry, contributing to each project with creativity, leadership, and technical skills.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Fact 1: Film Writer */}
        <div className="flex flex-col items-center text-center">
          <FaPen className="text-4xl text-blue-600 mb-2" />
          <p className="text-4xl font-bold mb-2 text-white">49</p>
          <p className="text-gray-600 text-red-600">Film Writer</p>
          <p className="text-sm text-gray-500 text-white">Films written</p>
        </div>
        {/* Fact 2: Casting Director */}
        <div className="flex flex-col items-center text-center">
          <FaUsers className="text-4xl text-blue-600 mb-2" />
          <p className="text-4xl font-bold mb-2 text-white">32</p>
          <p className="text-gray-600 text-red-600">Casting Director</p>
          <p className="text-sm text-gray-500 text-white">Cast selections</p>
        </div>
        {/* Fact 3: Director of Photography */}
        <div className="flex flex-col items-center text-center">
          <FaCamera className="text-4xl text-blue-600 mb-2" />
          <p className="text-4xl font-bold mb-2 text-white">37</p>
          <p className="text-gray-600 text-red-600">Director of Photography</p>
          <p className="text-sm text-gray-500 text-white">Cinematography projects</p>
        </div>
        {/* Fact 4: Director */}
        <div className="flex flex-col items-center text-center">
          <FaFilm className="text-4xl text-blue-600 mb-2" />
          <p className="text-4xl font-bold mb-2 text-white">31</p>
          <p className="text-gray-600 text-red-600">Director</p>
          <p className="text-sm text-gray-500 text-white">Directed films</p>
        </div>
        {/* Fact 5: Producer */}
        <div className="flex flex-col items-center text-center">
          <FaFilm className="text-4xl text-blue-600 mb-2" />
          <p className="text-4xl font-bold mb-2 text-white">26</p>
          <p className="text-gray-600 text-red-600">Producer</p>
          <p className="text-sm text-gray-500 text-white">Films produced</p>
        </div>
        {/* Fact 6: Film Maker */}
        <div className="flex flex-col items-center text-center">
          <FaFilm className="text-4xl text-blue-600 mb-2" />
          <p className="text-4xl font-bold mb-2 text-white">67</p>
          <p className="text-gray-600 text-red-600">Film Maker</p>
          <p className="text-sm text-gray-500 text-white">Films made</p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Facts;
