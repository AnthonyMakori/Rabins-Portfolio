import { useEffect, useState } from 'react';

const roles = ['Film Writer', 'Casting Director', 'Director of Photography', 'Director', 'Producer'];

const Home = () => {
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const changeDelay = 1000;

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText((prev) => roles[roleIndex].slice(0, prev.length + 1));
      } else {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
      }
    };

    const interval = setInterval(() => {
      handleTyping();
    }, isDeleting ? deletingSpeed : typingSpeed);

    if (currentText === roles[roleIndex] && !isDeleting) {
      setTimeout(() => setIsDeleting(true), changeDelay);
    }

    if (currentText === '' && isDeleting) {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearInterval(interval);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" style={{paddingLeft:'20px'}}>
      <div className="home-container">
        <div className="overlay">
          <div className="content">
            <h1 className="main-text">I AM RABIN LUCAS</h1>
            <p className="sub-text">
              I am a <span className="role">{currentText}</span>
            </p>
          </div>
        </div>

        <style jsx>{`
          .home-container {
            position: relative;
            height: 100vh;
            background-image: url('/images/sitted2.jpg');
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
          }

          .content {
            position: relative;
            color: white;
            text-align: center;
            z-index: 1;
            padding: 0 20px;
            top: 350px;
          }

          .main-text {
            font-size: 4rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: aqua;
          }

          .sub-text {
            font-size: 1.5rem;
            font-weight: 300;
          }

          .role {
            font-weight: 600;
            color: #00bcd4;
          }

          @media (max-width: 1024px) {
            .main-text {
              font-size: 3rem;  // Reduced font size for tablets
            }

            .sub-text {
              font-size: 1.25rem;  // Adjust sub-text for tablets
            }

            .content {
              top: 250px;  // Adjust vertical alignment on smaller screens
            }
          }

          @media (max-width: 768px) {
            .main-text {
              font-size: 2.5rem;  // Reduced font size for smaller screens
            }

            .sub-text {
              font-size: 1.125rem;  // Adjust sub-text for mobile screens
            }

            .content {
              top: 150px;  // Adjust vertical alignment further for mobile screens
            }
          }

          @media (max-width: 480px) {
            .main-text {
              font-size: 2rem;  // Further reduced font size for very small screens
            }

            .sub-text {
              font-size: 1rem;  // Adjust sub-text for very small screens
            }

            .content {
              top: 100px;  // Adjust content position for very small screens
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Home;
