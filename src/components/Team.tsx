import React from 'react';
import { motion } from 'framer-motion';

const people = [
  {
    name: 'Tiger Pt',
    role: 'CEO / Founder',
    imageUrl: '/beach.png',
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: 'Cobmb',
    role: 'Marketing Director',
    imageUrl: '/cobb.jpg',
  },
  {
    name: 'David Wilson',
    role: 'Finance Manager',
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Client Relations',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
  },
  {
    name: 'James Taylor',
    role: 'Operations Manager',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  },
];

const Team = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="team" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl lg:mx-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Team</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet the people behind our success
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our diverse team of experts is passionate about helping businesses succeed. With years of experience across various industries, we bring a wealth of knowledge and creativity to every project.
          </p>
        </motion.div>
        <motion.ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {people.map((person) => (
            <motion.li key={person.name} variants={item} className="text-center">
              <motion.img
                className="aspect-square w-full rounded-xl object-cover shadow-xl transition-transform transform hover:scale-105"
                src={person.imageUrl}
                alt=""
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-indigo-600">{person.role}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Team;
