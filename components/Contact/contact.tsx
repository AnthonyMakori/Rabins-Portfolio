import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID", // Replace with your Service ID
          "YOUR_TEMPLATE_ID", // Replace with your Template ID
          form.current,
          "YOUR_PUBLIC_KEY" // Replace with your Public Key
        )
        .then(
          () => {
            setSent(true);
            setError(false);
            form.current?.reset(); // Reset form after success
          },
          (error: { text: any }) => {
            console.error("Error:", error.text);
            setError(true);
          }
        );
    }
  };

  return (
    <section id="contact">
    <div className="min-h-screen bg-gray-200 py-10">
      <h1 className="text-4xl font-bold text-blue-600 text-center mb-4">
        Contact
      </h1>
      <p className="text-gray-700 text-center mb-6">
        Feel free to connect with me via email at{" "}
        <span className="font-bold">rabinlucas0@gmail.com</span> or through my
        LinkedIn profile. I am always eager to collaborate, learn, and explore
        new opportunities.
      </p>
      <p className="text-gray-700 font-bold text-center mb-6">
        Thank you for visiting my portfolio, and I look forward to connecting
        with you!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Information
          </h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                📍
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Location:</h3>
                <p className="text-gray-600">Kahawa West, Nairobi, Kenya</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                📧
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Email:</h3>
                <p className="text-gray-600">rabinlucas0@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                📞
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-gray-800">Call:</h3>
                <p className="text-gray-600">+254 729 923 951</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Send a Message
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="name">
                Your Name
                </label>
                <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
                className="w-full border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-400 p-2"
                required
                />
            </div>
            <div>
                <label className="block text-gray-700 mb-1" htmlFor="email">
                Your Email
                </label>
                <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                className="w-full border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-400 p-2"
                required
                />
            </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                className="w-full border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-400 p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full border border-blue-400 rounded-md focus:ring-2 focus:ring-blue-400 p-2"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </div>
            {sent && (
              <p className="text-green-500 mt-2 text-center">
                Message sent successfully!
              </p>
            )}
            {error && (
              <p className="text-red-500 mt-2 text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Contact;