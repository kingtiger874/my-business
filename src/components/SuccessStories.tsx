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
      "As a software engineer from Canada, this program completely transformed my career! I secured a high-paying U.S. remote job with a 3x salary increase—life-changing!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Carlos M.",
    feedback:
      "I'm Carlos from Brazil, and this program was a game-changer! Within months, I landed a senior developer role at a top tech company, and my career skyrocketed!",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    name: "David R.",
    feedback:
      "Coming from Spain, transitioning to remote work felt overwhelming, but this structured process made it seamless! I now work remotely with an amazing global team.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Michael T.",
    feedback:
      "As an engineer from Germany, I was looking for the right guidance to break into remote roles. The mentorship here was outstanding—I felt fully prepared for every step!",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "James K.",
    feedback:
      "I'm James from the UK, and this program changed my life! The hands-on support during interview prep was invaluable, and now I have my dream remote job!",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Robert N.",
    feedback:
      "Being from Australia, I always wanted to work remotely for U.S. companies. This program gave me the confidence and skills to ace my interviews and make it happen!",
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
          navigation={false}
          loop={true}
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
