import React from 'react';
import AboutImg from '../assets/about-1.jpg';
import PersonalizedImg from '../assets/p.service.jpg';
import satisfactionImg from '../assets/satisfaction.jpg';
import SustainableImg from '../assets/sustainable.jpg';
import ExpertImg from '../assets/expert.png';
import CommImg from '../assets/community.jpg';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-white text-gray-800 pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-black sm:text-5xl lg:text-6xl">
          Welcome to <span className='text-blue-600'>Hair Heritage</span>
        </h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-600">
          Your one-stop shop for all things hair, beauty, and style. At Hair Heritage, we believe every person deserves to look and feel their best. We offer a wide range of high-quality hair products tailored to meet your unique needs.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img className="w-24 h-24 mx-auto rounded-full" src={AboutImg} alt="High-Quality Products" />
          <h3 className="mt-6 text-2xl font-bold text-blue-600">High-Quality Products</h3>
          <p className="mt-4 text-gray-600">We source only the best materials to ensure our products are top-notch.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img className="w-24 h-24 mx-auto rounded-full" src={PersonalizedImg} alt="Personalized Service" />
          <h3 className="mt-6 text-2xl font-bold text-blue-600">Personalized Service</h3>
          <p className="mt-4 text-gray-600">We are committed to offering personalized services to meet your unique beauty needs.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
        <img className="w-24 h-24 mx-auto rounded-full" src={satisfactionImg} alt="Satisfaction Guaranteed" />
          <h3 className="mt-6 text-2xl font-bold text-blue-600">Satisfaction Guaranteed</h3>
          <p className="mt-4 text-gray-600">Your happiness is our priority. We offer a satisfaction guarantee on all our products.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img className="w-24 h-24 mx-auto rounded-full" src={SustainableImg} alt="Sustainable Practices" />
          <h3 className="mt-6 text-2xl font-bold text-blue-600">Sustainable Practices</h3>
          <p className="mt-4 text-gray-600">We are committed to sustainability and use eco-friendly practices in all aspects of our business.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img className="w-24 h-24 mx-auto rounded-full" src={ExpertImg} alt="Expert Advice" />
          <h3 className="mt-6 text-2xl font-bold text-blue-600">Expert Advice</h3>
          <p className="mt-4 text-gray-600">Our team of experts is here to provide you with the best advice and tips for your hair care needs.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <img className="w-24 h-24 mx-auto rounded-full" src={CommImg} alt="Community Focus" />
          <h3 className="mt-6 text-2xl font-bold text-blue-600">Community Focus</h3>
          <p className="mt-4 text-gray-600">We believe in giving back and supporting our community through various initiatives and programs.</p>
        </div>
      </div>

      <div className="mt-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
          Our Mission
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          At Hair Heritage, our mission is to empower everyone to embrace their unique beauty. We are dedicated to providing high-quality products that inspire confidence and self-expression.
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
          Our Story
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Founded in [Year], Hair Heritage was born out of a passion for beauty and a desire to make high-quality hair care accessible to everyone. Over the years, we have grown into a trusted brand, known for our commitment to excellence and customer satisfaction.
        </p>
      </div>

      <div className="mt-12 max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
          Why Choose Us
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We stand out from the crowd with our dedication to quality, customer service, and sustainability. We are not just a brand; we are a community of beauty enthusiasts who believe in the power of self-expression.
        </p>
      </div>
    </div>
  );
}

export default About;
