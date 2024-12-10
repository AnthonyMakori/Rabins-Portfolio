import React from 'react';
import Image from 'next/image';

const About = () => {
  const birthday = new Date('1995-11-15'); // Rabin Lucas's birthday
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const monthDifference = today.getMonth() - birthday.getMonth();

  // If the birthday hasn't occurred yet this year, subtract one from the age
  const calculatedAge = monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate()) ? age - 1 : age;

  return (
    <section id="about" style={{ paddingLeft: '20px' }}>
      <div className="bg-blue-100 p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600">About</h2>

        <div>
          <p className="text-lg mb-6">
            <span className="font-bold text-blue-500"></span> Hello! I&apos;m Rabin Lucas, a versatile creative professional with extensive experience in film production. As a Film Writer, Casting Director, Director of Photography, Director, Producer, and Film Maker, I have a passion for bringing compelling stories to life. I&apos;m excited to showcase my work and explore potential collaborations that push the boundaries of visual storytelling.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-start mt-6">
          {/* Image Section */}
          <div className="md:mr-6">
            <Image
              src="/images/darkbark.jpg"
              alt="Rabin Lucas"
              width={280} // Specify width for image
              height={384} // Specify height for image
              className="object-cover rounded-lg border-4 border-gray-500"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold mt-8 mb-2 text-blue-500">
              Film Writer, Casting Director, Director of Photography, Director, Producer & Film Maker
            </h3>
            <h4 className="text-base font-semibold mb-4">
              Creative Philosophy
            </h4>

            <p className="mb-4">
              <span className="font-bold text-blue-500"></span> My creative philosophy centers around authenticity, precision, and visual impact. I believe every frame is an opportunity to evoke emotion and tell a deeper story. Whether it&apos;s writing a script, managing the cast, or directing the production, I strive to achieve excellence in every role.
            </p>

            <div className="flex space-x-8">
              {/* First Column */}
              <div className="space-y-2">
                <p className="flex items-center text-sm">
                  <span className="font-bold text-blue-500">&gt;</span>
                  <strong className="mr-1">Birthday:</strong>
                  <span>15th Nov 1995</span>
                </p>
                <p className="flex items-center text-sm">
                  <span className="font-bold text-blue-500">&gt;</span>
                  <strong className="mr-1">Website:</strong>
                  <a
                    href="https://falconeyephilmz.com/"
                    className="text-blue-500 truncate"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    falconeyephilmz
                  </a>
                </p>
                <p className="flex items-center text-sm">
                  <span className="font-bold text-blue-500">&gt;</span>
                  <strong className="mr-1">Phone:</strong>
                  <span>+254729923951</span>
                </p>
                <p className="flex items-center text-sm">
                  <span className="font-bold text-blue-500">&gt;</span>
                  <strong className="mr-1">City:</strong>
                  <span>Nairobi, Kenya</span>
                </p>
              </div>

              {/* Second Column */}
              <div className="space-y-3">
                <p className="text-sm">
                  <span className="font-bold text-blue-500">&gt;</span> <strong>Age:</strong> {calculatedAge}
                </p>
                <p className="text-sm">
                  <span className="font-bold text-blue-500">&gt;</span> <strong>Occupation:</strong> Film Maker
                </p>
                <p className="text-sm">
                  <span className="font-bold text-blue-500">&gt;</span> <strong>Mail:</strong>
                  <a href="#contact" className="text-blue-500 inline">
                    rabinlucas0@gmail.com
                  </a> &amp;
                  <a href="#contact" className="text-blue-500 inline ml-2">
                    rabin@falconeyephilmz.com
                  </a>
                </p>

                <p className="text-sm">
                  <span className="font-bold text-blue-500">&gt;</span> <strong>Freelance:</strong> Available
                </p>
              </div>
            </div>

            <p className="mt-6">
              <span className="font-bold text-blue-500"></span> I believe in the power of cinematic storytelling to not only entertain but to inspire and provoke thought. Each project I undertake is driven by a commitment to quality, originality, and meaningful impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
