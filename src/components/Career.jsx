/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const Careers = () => {
  const jobListings = [
    {
      title: "Senior Hair Stylist",
      location: "New York, NY",
      type: "Full-Time",
      description: "We're looking for a creative and experienced Senior Hair Stylist to join our team and help lead our salon's success.",
      link: "/careers/senior-hair-stylist",
    },
    {
      title: "Marketing Specialist",
      location: "Remote",
      type: "Part-Time",
      description: "Join our marketing team and help us create campaigns that inspire and engage our customers.",
      link: "/careers/marketing-specialist",
    },
    {
      title: "Customer Service Representative",
      location: "Los Angeles, CA",
      type: "Full-Time",
      description: "Provide top-notch customer service to our clients and ensure they have a positive experience with our brand.",
      link: "/careers/customer-service-representative",
    },
    {
      title: "Product Manager",
      location: "San Francisco, CA",
      type: "Full-Time",
      description: "Oversee the development and launch of new hair care products, ensuring they meet our high standards of quality.",
      link: "/careers/product-manager",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white text-gray-800 pt-16 pb-24">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 sm:text-5xl lg:text-6xl">
          Join Our Team
        </h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-600">
          We're always looking for talented, passionate people to join our growing team. Explore our current job openings and find the perfect role for you.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {jobListings.map((job, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-blue-600">{job.title}</h3>
            <p className="text-sm text-gray-500 mt-2">{job.location} &bull; {job.type}</p>
            <p className="mt-4 text-gray-600">{job.description}</p>
            <a 
              href={job.link} 
              className="mt-6 inline-block text-blue-600 hover:text-blue-700 font-semibold"
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Details &rarr;
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
          Why Work With Us?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At [Your Company Name], we believe in fostering a culture of creativity, inclusivity, and growth. Here are some of the benefits of working with us:
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img className="w-16 h-16 mx-auto mb-4" src="[YourImageURL]" alt="Benefit 1" />
            <h3 className="text-xl font-bold text-blue-600">Professional Development</h3>
            <p className="mt-4 text-gray-600">Opportunities for growth, training, and career advancement.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img className="w-16 h-16 mx-auto mb-4" src="[YourImageURL]" alt="Benefit 2" />
            <h3 className="text-xl font-bold text-blue-600">Inclusive Culture</h3>
            <p className="mt-4 text-gray-600">We celebrate diversity and foster an inclusive workplace where everyone feels valued.</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img className="w-16 h-16 mx-auto mb-4" src="[YourImageURL]" alt="Benefit 3" />
            <h3 className="text-xl font-bold text-blue-600">Employee Discounts</h3>
            <p className="mt-4 text-gray-600">Enjoy exclusive discounts on all our products and services.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
          Ready to Apply?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          If you're excited about joining our team, we'd love to hear from you! Click the button below to submit your application.
        </p>
        <a 
          href="/apply" 
          className="mt-8 inline-block py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}

export default Careers;
