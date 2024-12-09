import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaLinkedin, FaWhatsapp, FaTwitter, FaFacebook, FaYoutube, FaTiktok, FaBars, FaPencilAlt, FaRegHandshake, FaBuilding } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Lock/Unlock the body scroll based on sidebar state
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Function for smooth scrolling
  const smoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault(); // Prevent default anchor behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    closeSidebar(); // Close sidebar after clicking the link
  };

  return (
    <div className="relative">
      {/* Hamburger Icon for Small Screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden absolute top-4 left-4 text-white text-3xl z-50"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? 'left-0' : '-left-full'
        } lg:left-0 w-94 h-screen bg-gray-900 text-white fixed transition-all duration-300 z-40`}
      >
        <div className="p-6">
          <div className="flex justify-center mb-3">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <i><h1 className="text-2xl font-bold text-center mb-4">Rabin Lucas</h1></i>
          <hr />

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-0 mb-2">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-aqua transition-colors"
            >
              <FaLinkedin className="text-2xl text-white hover:text-black" />
            </a>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-aqua transition-colors"
            >
              <FaWhatsapp className="text-2xl text-white hover:text-black" />
            </a>
            <a
              href="https://twitter.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-aqua transition-colors"
            >
              <FaTwitter className="text-2xl text-white hover:text-black" />
            </a>
            <a
              href="https://facebook.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-aqua transition-colors"
            >
              <FaFacebook className="text-2xl text-white hover:text-black" />
            </a>
            <a
              href="https://youtube.com/c/your-channel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-aqua transition-colors"
            >
              <FaYoutube className="text-2xl text-white hover:text-black" />
            </a>
            <a
              href="https://tiktok.com/@your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-aqua transition-colors"
            >
              <FaTiktok className="text-2xl text-white hover:text-black" />
            </a>
          </div>
          <hr />

          <nav className="flex flex-col space-y-0">
            <a
              href="#home"
              onClick={(event) => smoothScroll(event, 'home')}
              className="hover:text-gray-400"
            >
              🏠 Home
            </a>
            <a
              href="#about"
              onClick={(event) => smoothScroll(event, 'about')}
              className="hover:text-gray-400"
            >
              📘 About Me
            </a>
            <a
              href="#facts"
              onClick={(event) => smoothScroll(event, 'facts')}
              className="hover:text-gray-400"
            >
              📊 Facts
            </a>
            <a
              href="#projects"
              onClick={(event) => smoothScroll(event, 'projects')}
              className="hover:text-gray-400"
            >
              📂 Projects
            </a>
            <a
              href="#skills"
              onClick={(event) => smoothScroll(event, 'skills')}
              className="hover:text-gray-400"
            >
              🛠️ Skills
            </a>
            <a
              href="#hobbies"
              onClick={(event) => smoothScroll(event, 'hobbies')}
              className="hover:text-gray-400"
            >
              <FaPencilAlt className="inline mr-2" /> Hobbies
            </a>
            <a
              href="#testimonials"
              onClick={(event) => smoothScroll(event, 'testimonials')}
              className="hover:text-gray-400"
            >
              <FaRegHandshake className="inline mr-2" /> Testimonials
            </a>
            <a
              href="#contact"
              onClick={(event) => smoothScroll(event, 'contact')}
              className="hover:text-gray-400"
            >
              ✉️ Contact
            </a>
            <a
              href="#company"
              onClick={(event) => smoothScroll(event, 'company')}
              className="hover:text-gray-400"
            >
              <FaBuilding className="inline mr-2" /> Company
            </a>
          </nav>
        </div>

        {/* Footer Section */}
        <footer className="absolute bottom-0 w-full p-4 bg-gray-800 text-center">
          <p className="text-sm">© 2024 Rabin Lucas</p>
        </footer>
      </aside>

      {/* Content Area */}
      <div
        className={`${
          isSidebarOpen ? 'h-screen overflow-hidden' : ''
        } transition-all duration-300`}
      >
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
