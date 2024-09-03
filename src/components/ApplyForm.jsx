import React from 'react';

const ApplicationForm = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-600">
            Join Our Team
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Fill out the form below to apply for a position at our company.
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm"
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
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm"
                placeholder="Email Address"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm"
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="position" className="sr-only">
                Position
              </label>
              <select
                id="position"
                name="position"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm"
              >
                <option value="" disabled selected>
                  Select Position
                </option>
                <option value="senior-hair-stylist">Senior Hair Stylist</option>
                <option value="marketing-specialist">Marketing Specialist</option>
                <option value="customer-service-representative">Customer Service Representative</option>
                <option value="product-manager">Product Manager</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="resume" className="sr-only">
                Upload Resume
              </label>
              <input
                id="resume"
                name="resume"
                type="file"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 text-gray-900 focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cover-letter" className="sr-only">
                Cover Letter
              </label>
              <textarea
                id="cover-letter"
                name="cover-letter"
                rows="4"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm"
                placeholder="Cover Letter"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
