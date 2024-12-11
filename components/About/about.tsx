import React from 'react';
import Image from 'next/image';

const About = () => {
  const birthday = new Date('1995-11-15'); 
  const today = new Date();
  const age = today.getFullYear() - birthday.getFullYear();
  const monthDifference = today.getMonth() - birthday.getMonth();

  const calculatedAge = monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate()) ? age - 1 : age;

  return (
    <div style={{ backgroundColor: '#0070f3' }}>
      <section id="about" className="p-8">
        <div className="bg-blue-100 p-8 rounded-lg text-black">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600" style={{ paddingLeft: '30px' }}>About</h2>

          <div>
            <p className="text-lg mb-6 text-black" style={{ paddingLeft: '30px' }}>
              Hello! I&apos;m Rabin Lucas, a versatile creative professional with extensive experience in film production. As a Film Writer, Casting Director, Director of Photography, Director, Producer, and Film Maker, I have a passion for bringing compelling stories to life. I&apos;m excited to showcase my work and explore potential collaborations that push the boundaries of visual storytelling.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:items-start mt-6">
            {/* Image Section */}
            <div className="md:mr-6 flex justify-center mb-6 md:mb-0" style={{ paddingLeft: '30px' }}>
              <Image
                src="/images/darkbark.jpg"
                alt="Rabin Lucas"
                width={280}
                height={384}
                className="object-cover rounded-lg border-4 border-gray-500"
              />
            </div>

            <div className="flex-1 text-black">
              <h3 className="text-lg font-bold mt-8 mb-2 text-blue-600">
                Film Writer, Casting Director, Director of Photography, Director, Producer & Film Maker
              </h3>
              <h4 className="text-base font-semibold mb-4 text-green-700">
                Creative Philosophy
              </h4>

              <p className="mb-4 text-black">
                My creative philosophy centers around authenticity, precision, and visual impact. I believe every frame is an opportunity to evoke emotion and tell a deeper story. Whether it&apos;s writing a script, managing the cast, or directing the production, I strive to achieve excellence in every role.
              </p>

              <div className="flex space-x-8">
                {/* First Column */}
                <div className="space-y-2">
                  <p className="flex items-center text-sm text-black">
                    <span className="font-bold text-blue-600">&gt;</span>
                    <strong className="mr-1 text-black">Birthday:</strong>
                    <span className='text-blue-600'>15th Nov 1995</span>
                  </p>
                  <p className="flex items-center text-sm text-black">
                    <span className="font-bold text-blue-600">&gt;</span>
                    <strong className="mr-1 text-black">Website:</strong>
                    <a
                      href="https://falconeyephilmz.com/"
                      className="text-blue-600 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      falconeyephilmz
                    </a>
                  </p>
                  <p className="flex items-center text-sm text-black">
                    <span className="font-bold text-blue-600">&gt;</span>
                    <strong className="mr-1 text-black">Phone:</strong>
                    <span className='text-green-700'>+254 729 923 951</span>
                  </p>
                  <p className="flex items-center text-sm text-black">
                    <span className="font-bold text-blue-600">&gt;</span>
                    <strong className="mr-1 text-black">City:</strong>
                    <span className='text-blue-600'>Nairobi, Kenya</span>
                  </p>
                </div>

                {/* Second Column */}
                <div className="space-y-3">
                  <p className="text-sm text-blue-600">
                    <span className="font-bold text-blue-600">&gt;</span> <strong className='text-black'>Age:</strong> {calculatedAge}
                  </p>
                  <p className="text-sm text-blue-600">
                    <span className="font-bold text-blue-600">&gt;</span> <strong className='text-black'>Occupation:</strong> Film Maker
                  </p>
                  <p className="text-sm text-black">
                    <span className="font-bold text-blue-600">&gt;</span> <strong>Mail:</strong>
                    <a href="#contact" className="text-blue-600 underline inline">
                      rabinlucas0@gmail.com
                    </a> &amp;
                    <a href="#contact" className="text-blue-600 underline inline ml-2">
                      rabin@falconeyephilmz.com
                    </a>
                  </p>

                  <p className="text-sm text-blue-600">
                    <span className="font-bold text-blue-600">&gt;</span> <strong className='text-black'>Freelance:</strong> Available
                  </p>
                </div>
              </div>

              <p className="mt-6 text-black">
                I believe in the power of cinematic storytelling to not only entertain but to inspire and provoke thought. Each project I undertake is driven by a commitment to quality, originality, and meaningful impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
