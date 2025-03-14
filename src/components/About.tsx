import React from 'react';
import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8 }
    })
  };

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 gap-x-8 lg:grid-cols-2">
          <motion.div
            className="relative lg:order-last pt-20"
            // initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
          >
            <div>
              <img
                // className="aspect-[3/2] w-full rounded-2xl object-cover shadow-xl"
                src="https://www.entegee.com/wp-content/themes/entegee/library/images/page-content/usa-map-green.png"
                alt="Team collaboration"
              />
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={6}
              >
                <h3 className="font-semibold text-gray-900 pt-8">Our Values</h3>
                <p className="mt-2 text-gray-600 leading-8">
                  Empowerment – We believe in investing in talent.
                  <br />
                  Growth - We provide the right support for success.
                  <br />
                  Global Reach – We connect international developers to U.S. companies.
                  <br />
                  Collaboration – Together, we achieve success.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <div className="flex flex-col justify-center">
            <div>
              <motion.h2
                className="text-base font-semibold leading-7 text-indigo-600"
                // initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={1}
              >
                About Us
              </motion.h2>
              <motion.p
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                // initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={2}
              >
                Our Story
              </motion.p>
              <motion.p
                className="mt-6 text-lg leading-8 text-gray-600"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={3}
              >
                Countless remote work opportunities exist in the US, yet many are limited to local developers.
                Talented international developers often face barriers due to their nationality, leaving them without
                the opportunities they truly deserve.

                We are a visionary investment group dedicated to bridging this gap by connecting skilled software 
                developers worldwide with high-paying remote jobs in the US. Drawing inspiration from our founders’ 
                extensive global experience as software engineers, we are committed to creating transformative opportunities 
                that dismantle barriers, foster borderless innovation, and empower global growth.
              </motion.p>
              <div className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  custom={4}
                >
                  <h3 className="font-semibold text-gray-900">Our Mission</h3>
                  <p className="mt-2">
                    To help talented software engineers overcome barriers and land high-paying remote jobs in the USA, ensuring financial growth and career success.
                  </p>
                </motion.div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={fadeIn}
                  custom={5}
                >
                  <h3 className="font-semibold text-gray-900">Our Vision</h3>
                  <p className="mt-2">
                    A world where skilled professionals get the opportunities they deserve, regardless of location.
                  </p>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;