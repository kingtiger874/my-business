import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6 }
    })
  };

  return (
    <section id="contact" className="relative isolate bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          custom={0}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Contact Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get in touch</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We'd love to hear from you. If this opportunity matches your skills and interests, don’t hesitate to get in touch! You can earn a desirable additional income even if you have a current job.
          </p>
        </motion.div>
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          <motion.div
            className="relative lg:order-last pt-12 pl-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            custom={0}
          >
            <div>
              <img
                src="/www.png"
                alt="Team collaboration"
              />
            </div>
          </motion.div>
          <div className="flex flex-col gap-10 lg:pt-6">
            <motion.div
              className="flex gap-x-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={2}
            >
              <motion.div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">WhatsApp</h3>
                <p className="mt-2 leading-7 text-gray-600">
                  <a href="https://wa.me/12817264707" target="_blank" rel="noopener noreferrer">+1 (281) 726-4707</a>
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-x-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={3}
            >
              <motion.div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <FontAwesomeIcon icon={faTelegram} className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Telegram</h3>
                <p className="mt-2 leading-7 text-gray-600">
                  <a href="https://t.me/kingtiger308" target="_blank" rel="noopener noreferrer">@kingtiger308</a>
                </p>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-x-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              custom={4}
            >
              <motion.div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Phone className="h-6 w-6 text-white" />
              </motion.div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Phone</h3>
                <p className="mt-2 leading-7 text-gray-600">
                  <a href="tel:+17867801983">+1 (786) 780-1983</a>
                </p>
                <p className="mt-2 leading-7 text-gray-600">
                  <a href="tel:+14793391597">+1 (479) 339-1597</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
