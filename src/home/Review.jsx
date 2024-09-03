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
              <div className="space-y-6 max-w-lg mx-auto"> {/* Reduced width */}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae labore accusamus temporibus, consectetur magni
                    veniam corrupti accusantium corporis enim libero veritatis,
                    incidunt fuga nobis. Nemo doloremque quae quaerat asperiores
                    voluptas quis aspernatur natus iste recusandae delectus
                    aliquid fuga distinctio eum minus a illo nulla corporis,
                    dolore incidunt aut qui exercitationem blanditiis veritatis
                    iure. Iste eveniet quod nemo maxime sapiente, dolore dolorum
                    incidunt ipsam. Nulla error delectus id consectetur architecto
                    eaque quae magnam a distinctio, iste quaerat debitis quis,
                    incidunt dolor fugiat nostrum minus. Dignissimos, velit.
                    Minima eveniet maxime ad voluptate.
                  </p>

                  {/* Avatar and Author Info */}
                  <div className="flex items-center gap-4">
                    <Avatar
                      img={RevPic}
                      alt="avatar of Jese"
                      rounded
                      className="w-12 h-12"
                    />
                    <div>
                      <h5 className="text-lg font-semibold">Basilia</h5>
                      <p className="text-base text-gray-600">Nurse</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-gray-200 py-8 px-4 md:m-5 rounded-lg border">
              <div className="space-y-6 max-w-lg mx-auto"> {/* Reduced width */}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae labore accusamus temporibus, consectetur magni
                    veniam corrupti accusantium corporis enim libero veritatis,
                    incidunt fuga nobis. Nemo doloremque quae quaerat asperiores
                    voluptas quis aspernatur natus iste recusandae delectus
                    aliquid fuga distinctio eum minus a illo nulla corporis,
                    dolore incidunt aut qui exercitationem blanditiis veritatis
                    iure. Iste eveniet quod nemo maxime sapiente, dolore dolorum
                    incidunt ipsam. Nulla error delectus id consectetur architecto
                    eaque quae magnam a distinctio, iste quaerat debitis quis,
                    incidunt dolor fugiat nostrum minus. Dignissimos, velit.
                    Minima eveniet maxime ad voluptate.
                  </p>

                  {/* Avatar and Author Info */}
                  <div className="flex items-center gap-4">
                    <Avatar
                      img={RevPic}
                      alt="avatar of Jese"
                      rounded
                      className="w-12 h-12"
                    />
                    <div>
                      <h5 className="text-lg font-semibold">Basilia</h5>
                      <p className="text-base text-gray-600">Nurse</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="shadow-2xl bg-gray-200 py-8 px-4 md:m-5 rounded-lg border">
              <div className="space-y-6 max-w-lg mx-auto"> {/* Reduced width */}
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae labore accusamus temporibus, consectetur magni
                    veniam corrupti accusantium corporis enim libero veritatis,
                    incidunt fuga nobis. Nemo doloremque quae quaerat asperiores
                    voluptas quis aspernatur natus iste recusandae delectus
                    aliquid fuga distinctio eum minus a illo nulla corporis,
                    dolore incidunt aut qui exercitationem blanditiis veritatis
                    iure. Iste eveniet quod nemo maxime sapiente, dolore dolorum
                    incidunt ipsam. Nulla error delectus id consectetur architecto
                    eaque quae magnam a distinctio, iste quaerat debitis quis,
                    incidunt dolor fugiat nostrum minus. Dignissimos, velit.
                    Minima eveniet maxime ad voluptate.
                  </p>

                  {/* Avatar and Author Info */}
                  <div className="flex items-center gap-4">
                    <Avatar
                      img={RevPic}
                      alt="avatar of Jese"
                      rounded
                      className="w-12 h-12"
                    />
                    <div>
                      <h5 className="text-lg font-semibold">Basilia</h5>
                      <p className="text-base text-gray-600">Nurse</p>
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
