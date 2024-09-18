import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import RevPic from "../assets/Review-1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-blue-500 mb-10 leading-snug font-quickSand">
        Our Customers
      </h2>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="shadow-2xl bg-gray-200 py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6 max-w-lg mx-auto">
              {/* Rating */}
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Text Content */}
              <div className="mt-7">
                <p className="mb-5 text-base text-gray-700">
                  "I am absolutely in love with the hair products from this store!
                  The quality is outstanding, and the customer service is excellent.
                  I highly recommend them to anyone looking for reliable and stylish hair options."
                </p>

                {/* Avatar and Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar img={RevPic} alt="avatar of Jese" rounded className="w-12 h-12" />
                  <div>
                    <h5 className="text-lg font-semibold">Basilia</h5>
                    <p className="text-base text-gray-600">Nurse</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-gray-200 py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6 max-w-lg mx-auto">
              {/* Rating */}
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Text Content */}
              <div className="mt-7">
                <p className="mb-5 text-base text-gray-700">
                  "Amazing experience! The wig I purchased looks and feels so natural.
                  I’ve received so many compliments and will definitely be coming back for more!"
                </p>

                {/* Avatar and Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar img={RevPic} alt="avatar of Jese" rounded className="w-12 h-12" />
                  <div>
                    <h5 className="text-lg font-semibold">Sarah</h5>
                    <p className="text-base text-gray-600">Teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="shadow-2xl bg-gray-200 py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6 max-w-lg mx-auto">
              {/* Rating */}
              <div className="text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* Text Content */}
              <div className="mt-7">
                <p className="mb-5 text-base text-gray-700">
                  "Hands down, the best hair products I've ever used! The texture,
                  color, and style options are fantastic. Plus, the customer service team
                  was incredibly helpful with my queries. Will be shopping again!"
                </p>

                {/* Avatar and Author Info */}
                <div className="flex items-center gap-4">
                  <Avatar img={RevPic} alt="avatar of Jese" rounded className="w-12 h-12" />
                  <div>
                    <h5 className="text-lg font-semibold">Anita</h5>
                    <p className="text-base text-gray-600">Fashion Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
