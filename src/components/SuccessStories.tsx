import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Define type for testimonial items
interface Testimonial {
  name: string;
  feedback: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John D.",
    feedback:
      "Thanks to this program, I secured a U.S. remote job with a 3x salary increase!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Carlos M.",
    feedback:
      "I landed a senior developer role in a top tech company within months!",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "David R.",
    feedback:
      "The structured process helped me transition smoothly into remote work.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Michael T.",
    feedback:
      "The mentorship and guidance I received were outstanding.",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "James K.",
    feedback:
      "This changed my life! The support during interviews was invaluable.",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Robert N.",
    feedback:
      "This program gave me confidence and helped me ace my interviews!",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
  },
];

const SuccessStories: FC = () => {
  return (
    <section id="success-stories" className="py-24 bg-gray-50 text-center">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
        <p className="mt-4 text-gray-600">
          Hear from developers who have transformed their careers with us.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            640: { slidesPerView: 1 }, // Small screens
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Desktop
          }}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="mt-8"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto"
                />
                <h3 className="text-lg font-semibold mt-4">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 mt-2">"{testimonial.feedback}"</p>
                <div className="flex justify-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default SuccessStories;
