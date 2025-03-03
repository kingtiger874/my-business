import { Briefcase, PhoneCall, Users } from "lucide-react";
import { motion } from "framer-motion";
import { FC } from "react";

// Define type for role item
interface RoleItem {
  Icon: FC<{ className?: string }>;
  title: string;
  desc: string;
}

const YourRole: FC = () => {
  const roles: RoleItem[] = [
    { Icon: Briefcase, title: "Showcase Your Skills", desc: "Demonstrate your expertise to recruiters and clients." },
    { Icon: PhoneCall, title: "Manage Job Meetings", desc: "Attend 20-minute job interviews via Google Meet or Zoom." },
    { Icon: Users, title: "Secure Opportunities", desc: "Land high-paying remote jobs while we handle the complexities." }
  ];

  return (
    <section id="your-role" className="py-16 bg-gray-50 text-center">
      <motion.div
        className="max-w-4xl mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-gray-900">Your Role</h2>
        <p className="mt-4 text-gray-600">As part of our network, you will:</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {roles.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <item.Icon className="w-10 h-10 text-indigo-600 mx-auto" />
              <h3 className="text-lg font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.a
          href="#contact"
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Join Us Today
        </motion.a>
      </motion.div>
    </section>
  );
};

export default YourRole;
