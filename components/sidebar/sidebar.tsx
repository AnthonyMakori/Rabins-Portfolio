import { useState, useEffect } from 'react';
import { 
  FaInstagram, 
  FaWhatsapp, 
  FaTwitter, 
  FaFacebook, 
  FaYoutube, 
  FaTiktok, 
  FaBars, 
  FaPencilAlt, 
  FaRegHandshake, 
  FaBuilding 
} from 'react-icons/fa';
import Image from 'next/image'; 

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
        className="lg:hidden fixed top-4 left-4 text-red-500 text-3xl z-50 transform transition-transform duration-300 hover:scale-110"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 w-72 h-screen bg-gray-900 text-white transition-transform duration-300 z-40
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:block
        `}
      >
        <div className="p-6">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/profile.jpg"
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full object-cover"
            />
          </div>
          <i>
            <h1 className="text-2xl font-bold text-center mb-6">Rabin Lucas</h1>
          </i>
          <hr />

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-2 mb-4">
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-aqua transition-colors"
            >
              <FaInstagram className="text-2xl text-white hover:text-black" />
            </a>
            <a
              href="https://wa.me/+254729923951"
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

          <nav className="flex flex-col space-y-4">
            <a href="#home" onClick={(e) => smoothScroll(e, 'home')} className="hover:text-gray-400">
              🏠 Home
            </a>
            <a href="#about" onClick={(e) => smoothScroll(e, 'about')} className="hover:text-gray-400">
              📘 About Me
            </a>
            <a href="#facts" onClick={(e) => smoothScroll(e, 'facts')} className="hover:text-gray-400">
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
        <footer className="absolute bottom-0 w-full p-4 bg-gray-800 text-center hidden lg:block">
          <p className="text-sm">© 2024 Rabin Lucas</p>
        </footer>
      </aside>

      {/* Content Area */}
      <div
        className={`
          ${isSidebarOpen ? 'h-screen overflow-hidden' : ''}
          transition-all duration-300
        `}
      >
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
