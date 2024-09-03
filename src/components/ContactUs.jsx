import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-blue-600 pt-16">
            Get in Touch with Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We'd love to hear from you! Whether you have a question, feedback,
            or just want to say hello, reach out to us using the form below.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-bold text-blue-600 mb-6">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
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
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
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
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div>
                <a
                  href="https://wa.link/etkvsz" // Replace with your WhatsApp link
                  target="_blank" // Opens the link in a new tab
                  rel="noopener noreferrer" // For security purposes
                >
                  <button
                    type="button"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  >
                    Send Message
                  </button>
                </a>
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
              <p className="mt-2 text-gray-600">+234 8062720552</p>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-600">Whatsapp</h4>
              <p className="mt-2 text-gray-600">
                123 Beauty St, Hair City, USA
              </p>
            </div>
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-blue-600">Email</h4>
              <p className="mt-2 text-gray-600">support@yourcompany.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
