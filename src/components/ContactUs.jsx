import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xyzgqybb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear the form
      console.log(response);
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-blue-600 pt-16 transition duration-300 transform hover:scale-105">
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hello, reach out to us using the form below.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8 transition-transform duration-300 transform hover:shadow-xl">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-300 hover:border-blue-400"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-300 hover:border-blue-400"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition duration-300 hover:border-blue-400"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-blue-600">
                Contact Information
              </h3>
              <p className="mt-4 text-lg text-gray-600">
                We're here to help! Reach out to us through any of the methods
                below, and our team will get back to you as soon as possible.
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-600">Phone</h4>
              <p className="mt-2 text-gray-600">
                <a href="tel:+2348062720552" className="text-blue-600 hover:underline">
                  +234 806 272 0552
                </a>
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-600">WhatsApp</h4>
              <p className="mt-2 text-gray-600">
                <a
                  href="https://wa.me/2348062720552"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Message us on WhatsApp
                </a>
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-600">Email</h4>
              <p className="mt-2 text-gray-600">
                <a
                  href="mailto:mercy.james203@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  mercy.james203@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
