import { Handshake, Landmark, Briefcase, FileText, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    name: 'Investor to Talents',
    description: 'We connect investors with top talent, creating pathways to success.',
    icon: Handshake,
  },
  {
    name: 'US Citizenship Assistance',
    description: 'We help guide you through the process if applicable.',
    icon: Landmark,
  },
  {
    name: 'High-Salary Remote Job Interviews',
    description: 'We arrange interviews with leading US companies offering competitive salaries.',
    icon: Briefcase,
  },
  {
    name: 'Comprehensive Resume & Materials',
    description: 'We provide a complete resume, job descriptions, and relevant materials for each interview.',
    icon: FileText,
  },
  {
    name: 'Technical Support',
    description: 'If needed, we offer technical support during interviews.',
    icon: Headset,
  },
];

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to grow and succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a comprehensive range of services designed to help you thrive in today's competitive landscape.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <motion.div key={service.name} className="flex flex-col" variants={item} whileHover={{ scale: 1.1 }}>
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <motion.div 
                    className="h-10 w-10 flex items-center justify-center rounded-lg bg-indigo-600"
                    // whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <service.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </motion.div>
                  {service.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
