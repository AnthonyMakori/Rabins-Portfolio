import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component from Next.js
import '../../styles/Testimonials.css';

interface Testimonial {
  name: string;
  text: string;
  role: string;
  profileImage: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Joyce Rema',
    text: 'This is the best service I have ever used. Highly recommended!',
    role: 'Film Writer',
    profileImage: '/images/testi3.jpg',
  },
  {
    name: 'Kevin Greg',
    text: 'Amazing experience, exceeded my expectations!',
    role: 'Director',
    profileImage: '/images/testi5.jpg',
  },
  {
    name: 'Jane Smith',
    text: 'A game-changer in the industry. Can’t imagine working without it!',
    role: 'Producer',
    profileImage: '/images/testi4.jpg',
  },
  {
    name: 'Alice Johnson',
    text: 'A must-have tool for any professional!',
    role: 'Cinematographer',
    profileImage: '/images/testi6.jpg',
  },
  {
    name: 'Bob Brown',
    text: 'Highly efficient and incredibly easy to use.',
    role: 'Editor',
    profileImage: '/images/testi3.jpg',
  },
  {
    name: 'Charlie Davis',
    text: 'I can’t imagine working without this. It’s indispensable!',
    role: 'Sound Engineer',
    profileImage: '/images/testi1.jpg',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const getVisibleTestimonials = () => {
    const start = currentIndex;
    const end = start + 3;

    if (end <= testimonials.length) {
      return testimonials.slice(start, end);
    }
    return [
      ...testimonials.slice(start, testimonials.length),
      ...testimonials.slice(0, end - testimonials.length),
    ];
  };

  return (
    <section id="testimonials">
      <div 
        className="testimonial-container" 
        style={{ backgroundImage: 'url(background/back3.webp)' }}
      >
        <h4 className='text-3xl font-semibold mb-6 text-blue-600'>Testimonials</h4>
        <div className="testimonial-cards">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <Image 
                src={testimonial.profileImage} 
                alt={testimonial.name} 
                className="profile-img" 
                width={100} // specify width and height for optimization
                height={100}
              />
              <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
              <p className="testimonial-author">
                - {testimonial.name}, {testimonial.role}
              </p>
            </div>
          ))}
        </div>

        <div className="testimonial-navigation">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
