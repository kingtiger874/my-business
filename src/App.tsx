import { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SuccessStories from './components/SuccessStories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons'; // Import the bolt icon


function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Close mobile menu if open
      setMobileMenuOpen(false);

      // Set active section
      setActiveSection(sectionId);

      // Smooth scroll to section
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'success-stories', 'team', 'contact'];

      // Find the section that is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport (with some buffer for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Navigation items
  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'success-stories', label: 'Success' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="fixed w-full bg-white shadow-xl z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <motion.div
            className="flex lg:flex-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="#hero"
              className="-m-1.5 p-1.5 flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
            >
              <span className="text-3xl font-extrabold tracking-wide" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                {/* <FontAwesomeIcon icon={faGem} className="text-green-300 mr-2" style={{ fontSize: '1.8rem' }} /> */}
                <span className="text-purple-500">💎YOUNG</span>
                <span className="text-pink-500 ml-2">INVEST</span>
              </span>
            </a>
          </motion.div>
          <div className="flex lg:hidden">
            <motion.button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </motion.button>
          </div>
          <motion.div
            className="hidden lg:flex lg:gap-x-12"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium leading-6 transition-all duration-200 transform hover:scale-105 relative ${activeSection === item.id ? 'text-indigo-600 font-bold' : 'text-gray-800 hover:text-indigo-600'
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-600"
                    layoutId="activeNavIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </motion.div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="fixed inset-0 z-50" />
              <motion.div
                className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              >
                <div className="flex items-center justify-between">
                  <a
                    href="#hero"
                    className="-m-1.5 p-1.5 flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('hero');
                    }}
                  >
                    <Building2 className="h-8 w-auto text-indigo-600" />
                    <span className="text-xl font-semibold text-gray-900">YoungInvest</span>
                  </a>
                  <motion.button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </motion.button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navItems.map((item) => (
                        <motion.a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(item.id);
                          }}
                          className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${activeSection === item.id
                            ? 'text-indigo-600 bg-indigo-50'
                            : 'text-gray-900 hover:bg-gray-50'
                            }`}
                          whileHover={{ x: 5, backgroundColor: 'rgba(79, 70, 229, 0.1)' }}
                          transition={{ type: 'spring', stiffness: 400 }}
                        >
                          {item.label}
                          {activeSection === item.id && (
                            <motion.div
                              className="absolute left-0 w-1 h-full bg-indigo-600 rounded-r"
                              layoutId="activeMobileNavIndicator"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="success-stories">
          <SuccessStories />
        </section>
        {/* <section id="team">
          <Team />
        </section> */}
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;