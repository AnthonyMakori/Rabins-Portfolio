import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Crime Of Passion',
    image: '/projects/crime.jpg',
    category: 'Drama',
    link: 'https://www.youtube.com/watch?v=LBwbqVFj3L4',
    details: 'https://example.com/details/1',
  },
  {
    id: 2,
    title: 'Grace in the Storm',
    image: '/projects/grace.jpg',
    category: 'Drama',
    link: 'https://www.youtube.com/watch?v=v07wtegHGLY&t=191s',
    details: 'https://example.com/details/2',
  },
  {
    id: 3,
    title: 'Ngori Kuruka',
    image: '/projects/ngori.jpg',
    category: 'Short Film',
    link: 'https://www.youtube.com/watch?v=O8rU1HM5Vz8',
    details: 'https://example.com/details/3',
  },
  {
    id: 4,
    title: 'Talia',
    image: '/projects/talia.jpg',
    category: 'Short Film',
    link: 'https://www.youtube.com/watch?v=TtUrf95pxi4',
    details: 'https://example.com/details/4',
  },
];

const Projects = () => {
  const [category, setCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  const filteredProjects =
    category === 'All'
      ? projects
      : projects.filter((project) => project.category === category);

  return (
    <section id="projects">
      <div className="projects-container">
        <h4 className="text-3xl font-semibold mb-6 text-blue-600">Projects</h4>
        {/* Centered Categories */}
        <div className="categories">
          <button onClick={() => handleCategoryChange('All')}>All</button>
          <button onClick={() => handleCategoryChange('Short Film')}>
            Short Film
          </button>
          <button onClick={() => handleCategoryChange('Drama')}>Drama</button>
        </div>

        <div className="projects">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500} // Set a width for the image
                height={300} // Set a height for the image
                className="project-image"
              />
              <div
                className={`project-options ${
                  hoveredProject === project.id ? 'show' : ''
                }`}
              >
                {/* Aqua "+" Button */}
                <button
                  className="option-btn plus-btn"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  +
                  {hoveredProject === project.id && (
                    <span className="tooltip">Watch</span>
                  )}
                </button>
                {/* Aqua Chain Button */}
                <button
                  className="option-btn chain-btn"
                  onClick={() => window.open(project.details, '_blank')}
                >
                  🔗
                  {hoveredProject === project.id && (
                    <span className="tooltip">Details</span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .projects-container {
            width: 100%;
            padding: 100px 20px;
            min-height: 60vh;
            box-sizing: border-box;
          }

          /* Center Categories */
          .categories {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }

          .categories button {
            margin: 5px;
            padding: 8px 12px;
            cursor: pointer;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 4px;
            transition: background-color 0.3s ease;
          }

          .categories button:hover {
            background-color: #00d8d8; /* Aqua color on hover */
            color: white;
          }

          .projects {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 15px;
          }

          .project {
            position: relative;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .project-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
          }

          .project-options {
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            opacity: 0;
            transition: opacity 0.3s ease;
          }

          .project-options.show {
            opacity: 1;
          }

          /* Aqua Buttons */
          .option-btn {
            background: #00d8d8;
            color: #fff;
            border: none;
            cursor: pointer;
            width: 50%;
            height: 40px;
            font-size: 18px;
            text-align: center;
            transition: background 0.3s ease;
            position: relative;
          }

          .option-btn:hover {
            background: #00baba;
          }

          /* Tooltip Style */
          .tooltip {
            position: absolute;
            top: -30px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #333;
            color: #fff;
            padding: 5px 10px;
            font-size: 14px;
            border-radius: 4px;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
          }

          .option-btn:hover .tooltip {
            opacity: 1;
            visibility: visible;
          }

          /* Responsive Design */
          @media (min-width: 480px) {
            .projects {
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
          }

          @media (min-width: 768px) {
            .projects {
              grid-template-columns: repeat(3, 1fr);
            }
            .project-image {
              height: 200px;
            }
          }

          @media (min-width: 900px) {
            .projects {
              grid-template-columns: repeat(4, 1fr);
              gap: 25px;
            }
            .project-image {
              height: 250px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Projects;
