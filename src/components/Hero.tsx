import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative isolate pt-20">
      <div
        className="relative py-24 sm:py-32 lg:py-48 bg-cover bg-center"
        style={{
          // backgroundImage:"url('https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundImage: "url('/diamond.png')",

        }}
      >
        {/* Using bg-black/50 for a semi-transparent black background */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xs z-10" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center text-white z-20">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We Help Talents Grow and Succeed
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl font-medium text-gray-200 leading-relaxed italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              If you are an <span className="font-bold text-purple-400">experienced software developer</span> with excellent
              <span className="font-bold text-purple-400"> English communication skills</span>, we would like to invest in you!
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#services"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.a>
              <motion.a
                href="#about"
                className="text-sm font-semibold leading-6 flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;