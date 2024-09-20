//This help with Customizing your news consumption an language selection, 
// Please Note that some option works only on paid API plan

import { motion, AnimatePresence } from 'framer-motion';
import { Filter, Home, Zap, Heart, Globe, Briefcase, Newspaper } from 'lucide-react';

const categories = [
  { name: 'All', code: '', icon: Home },
  { name: 'Technology', code: 'technology', icon: Zap },
  { name: 'Health', code: 'health', icon: Heart },
  { name: 'Environment', code: 'environment', icon: Globe },
  { name: 'Politics', code: 'politics', icon: Briefcase },
  { name: 'Business', code: 'business', icon: Newspaper },
];

const languages = [
  { name: 'All Languages', code: '', icon: null },
  { name: 'Arabic', code: 'ar', icon: null },
  { name: 'German', code: 'de', icon: null },
  { name: 'English', code: 'en', icon: null },
  { name: 'Spanish', code: 'es', icon: null },
  { name: 'French', code: 'fr', icon: null },
  { name: 'Hebrew', code: 'he', icon: null },
  { name: 'Italian', code: 'it', icon: null },
  { name: 'Dutch', code: 'nl', icon: null },
  { name: 'Norwegian', code: 'no', icon: null },
  { name: 'Polish', code: 'pl', icon: null },
  { name: 'Portuguese', code: 'pt', icon: null },
  { name: 'Romanian', code: 'ro', icon: null },
  { name: 'Russian', code: 'ru', icon: null },
  { name: 'Swedish', code: 'sv', icon: null },
  { name: 'Urdu', code: 'ud', icon: null },
  { name: 'Chinese', code: 'zh', icon: null },
];

const countries = [
  { name: 'All Countries', code: '', icon: null },
  { name: 'United States', code: 'us', icon: null },
  { name: 'United Kingdom', code: 'gb', icon: null },
  { name: 'Australia', code: 'au', icon: null },
  { name: 'Canada', code: 'ca', icon: null },
  { name: 'Germany', code: 'de', icon: null },
  { name: 'France', code: 'fr', icon: null },
  { name: 'Italy', code: 'it', icon: null },
  { name: 'Japan', code: 'jp', icon: null },
  { name: 'South Korea', code: 'kr', icon: null },
  { name: 'Mexico', code: 'mx', icon: null },
  { name: 'Netherlands', code: 'nl', icon: null },
  { name: 'Russia', code: 'ru', icon: null },
  { name: 'South Africa', code: 'za', icon: null },
];

const ChevronDoubleLeft = () => (
  <svg className='bg-black rounded-sm p-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 13l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 13l-5-5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChevronDoubleRight = () => (
  <svg className='bg-black rounded-sm p-1' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Sidebar({
  isSidebarOpen,
  toggleSidebar,
  selectedCategory,
  setSelectedCategory,
  selectedLanguage,
  setSelectedLanguage,
  selectedCountry,
  setSelectedCountry,
  isAIFilterEnabled,
  setIsAIFilterEnabled
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isSidebarOpen ? 250 : 50, opacity: 1 }}
        exit={{ width: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`fixed inset-y-0 left-0 z-20 ${isSidebarOpen ? 'bg-gray-800' : 'bg-transparent'} shadow-lg transform lg:relative lg:translate-x-0 transition-all duration-300 ease-in-out`}
      >
        <div className="relative h-full flex flex-col">
          {/* Persistent Toggle Arrow */}
          <button
            onClick={toggleSidebar}
            className={`absolute ${isSidebarOpen ? 'right-4' : 'left-4'} top-4 w-8 h-8 flex items-center justify-center text-gray-300 hover:text-white focus:outline-none mt-14 lg:mt-0`}
          >
            {isSidebarOpen ? (
              <ChevronDoubleLeft />
            ) : (
              <ChevronDoubleRight />
            )}
          </button>

          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto mt-16">
            <div className="p-4">
              <div className={`flex items-center justify-between ${!isSidebarOpen ? 'hidden' : ''}`}>
                <h2 className="text-lg font-semibold mb-4 text-white">Categories</h2>
              </div>

              <AnimatePresence>
                { isSidebarOpen && (
                  <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    {categories.map((category) => (
                      <li key={category.name}>
                        <button
                          onClick={() => {
                            setSelectedCategory(category.code);
                            if (window.innerWidth < 1024) toggleSidebar();
                          }}
                          className={`w-full text-left px-3 py-2 rounded-md flex items-center ${
                            selectedCategory === category.code
                              ? 'bg-primary text-primary-foreground'
                              : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                          }`}
                        >
                          <category.icon className="mr-2" size={18} />
                          <span className={isSidebarOpen ? '' : 'hidden'}>{category.name}</span>
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>

              <h2 className={`text-lg font-semibold mt-8 mb-4 text-white ${!isSidebarOpen ? 'hidden' : ''}`}>
                Language
              </h2>
              {isSidebarOpen && (
                <ul className="space-y-2">
                  {languages.map((language) => (
                    <li key={language.code}>
                      <button
                        onClick={() => {
                          setSelectedLanguage(language.code);
                          if (window.innerWidth < 1024) toggleSidebar();
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          selectedLanguage === language.code
                            ? 'bg-primary text-primary-foreground'
                            : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                        }`}
                      >
                        {language.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <h2 className={`text-lg font-semibold mt-8 mb-4 text-white ${!isSidebarOpen ? 'hidden' : ''}`}>
                Country
              </h2>
              {isSidebarOpen && (
                <ul className="space-y-2">
                  {countries.map((country) => (
                    <li key={country.code}>
                      <button
                        onClick={() => {
                          setSelectedCountry(country.code);
                          if (window.innerWidth < 1024) toggleSidebar();
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md ${
                          selectedCountry === country.code
                            ? 'bg-primary text-primary-foreground'
                            : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                        }`}
                      >
                        {country.name}
                      </button>
                    </li>
                  ))}
                </ul>
              )}

              <div className={`mt-8 ${!isSidebarOpen ? 'hidden' : ''}`}>
                <button
                  onClick={() => setIsAIFilterEnabled(!isAIFilterEnabled)}
                  className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left rounded-md ${
                    isAIFilterEnabled
                      ? 'bg-primary text-primary-foreground'
                      : 'text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                >
                  <span>AI Filter</span>
                  <span
                    className={`transition-transform duration-300 ${
                      isAIFilterEnabled ? 'rotate-180' : 'rotate-0'
                    }`}
                  >
                    <Filter size={18} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
