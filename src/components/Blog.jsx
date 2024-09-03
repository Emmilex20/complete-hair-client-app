/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      title: "The Ultimate Guide to Hair Care",
      image: "https://biodealpharma.com/wp-content/uploads/2024/02/Hair-care-treatment-from-Experts.jpg",
      date: "August 20, 2024",
      excerpt: "Discover the best tips and tricks for maintaining healthy, beautiful hair all year round.",
      link: "https://biodealpharma.com/hair-and-wellness-the-connection-between-lifestyle-and-luscious-locks/",
    },
    {
      title: "Top 10 Hair Trends of 2024",
      image: "https://media.allure.com/photos/6576916802a4b700ca854e44/16:9/w_1600,c_limit/2024-short-hair-trends.jpg",
      date: "August 15, 2024",
      excerpt: "Stay ahead of the curve with the latest hair trends that are taking the beauty world by storm.",
      link: "https://www.allure.com/story/2024-short-hair-trends",
    },
    {
      title: "How to Choose the Right Hair Products",
      image: "https://www.yourbubble.co.uk/cdn/shop/articles/banner_2.jpg?v=1699002259&width=1920",
      date: "August 10, 2024",
      excerpt: "Find out how to select hair products that match your unique hair type and style goals.",
      link: "https://www.yourbubble.co.uk/blogs/news/how-to-choose-the-right-curly-hair-products-for-your-hair-type",
    },
    {
      title: "Healthy Hair Habits",
      image: "https://www.indiquehair.com/cdn/shop/articles/unnamed_abf308df-723d-4b02-8980-73a7d67c1cc2_700x.jpg?v=1711268027",
      date: "August 5, 2024",
      excerpt: "Learn about the habits that promote strong and healthy hair.",
      link: "https://www.indiquehair.com/blogs/indique-blog/hair-care-tips-14-healthy-hair-habits-you-should-practice",
    },
    {
      title: "DIY Hair Masks for Every Hair Type",
      image: "https://i.ytimg.com/vi/wSUssKWFjzA/maxresdefault.jpg",
      date: "July 30, 2024",
      excerpt: "Explore DIY hair masks that you can make at home using natural ingredients.",
      link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwSUssKWFjzA&psig=AOvVaw3L9_m_egXmDDVPYqAZOMwg&ust=1724242260384000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwiAmYqlxYOIAxUAAAAAHQAAAAAQBA",
    },
    {
      title: "Hair Care Myths Busted",
      image: "https://kosasalonsf.com/wp-content/uploads/2024/06/Hair-Care-Myths-Busted.png",
      date: "July 25, 2024",
      excerpt: "Debunking common hair care myths to help you make informed choices.",
      link: "https://kosasalonsf.com/blog/hair-care-myths-busted/",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-100 to-white text-gray-800 pt-16">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 sm:text-5xl lg:text-6xl">
          Our Blog
        </h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto text-gray-600">
          Welcome to our blog! Here, you'll find the latest tips, trends, and inspiration to keep your hair looking fabulous.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-600">{post.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{post.date}</p>
              <p className="mt-4 text-gray-600">{post.excerpt}</p>
              <a href={post.link} className="mt-6 inline-block text-blue-600 hover:text-blue-700 font-semibold" target="_blank" rel="noopener noreferrer">
                Read more &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
          Featured Articles
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our top picks and must-read articles for the best in hair care.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img className="w-full h-48 object-cover rounded-t-lg" src="https://i.ytimg.com/vi/TezbKTFkanE/maxresdefault.jpg" alt="Featured Article 1" />
            <h3 className="mt-6 text-2xl font-bold text-blue-600">The Secret to Shiny Hair</h3>
            <p className="mt-4 text-gray-600">Discover simple techniques for achieving lustrous, shiny hair.</p>
            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DTezbKTFkanE&psig=AOvVaw3J45qGKYH1fyzb3M4kop6B&ust=1724242605631000&source=images&cd=vfe&opi=89978449&ved=0CBgQ3YkBahcKEwjgot65xoOIAxUAAAAAHQAAAAAQCQ" className="mt-6 inline-block text-blue-600 hover:text-blue-700 font-semibold" target="_blank" rel="noopener noreferrer">
              Read more &rarr;
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img className="w-full h-48 object-cover rounded-t-lg" src="https://www.herhappyheart.com/wp-content/uploads/2017/09/Easy-Budget-Hair-Care-Tips-Feature2-768x512.png" alt="Featured Article 2" />
            <h3 className="mt-6 text-2xl font-bold text-blue-600">Hair Care on a Budget</h3>
            <p className="mt-4 text-gray-600">Learn how to keep your hair looking great without breaking the bank.</p>
            <a href="https://www.herhappyheart.com/easy-hair-care-routine/" className="mt-6 inline-block text-blue-600 hover:text-blue-700 font-semibold" target="_blank" rel="noopener noreferrer">
              Read more &rarr;
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img className="w-full h-48 object-cover rounded-t-lg" src="https://i.ytimg.com/vi/cdU63PtVhVw/sddefault.jpg" alt="Featured Article 3" />
            <h3 className="mt-6 text-2xl font-bold text-blue-600">The Best Hairstyles for Every Occasion</h3>
            <p className="mt-4 text-gray-600">Find the perfect hairstyle for any event or celebration.</p>
            <a href="https://www.youtube.com/watch?v=cdU63PtVhVw" className="mt-6 inline-block text-blue-600 hover:text-blue-700 font-semibold" target="_blank" rel="noopener noreferrer">
              Read more &rarr;
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Get the latest updates, blog posts, and exclusive offers straight to your inbox.
        </p>
        <form className="mt-8 max-w-md mx-auto">
          <input 
            type="email" 
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-200 outline-none" 
            placeholder="Enter your email address"
          />
          <button className="mt-4 w-full py-3 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 mb-14">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Blog;
