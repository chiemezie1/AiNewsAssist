import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white px-4 py-12 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Features Links */}
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-bold uppercase mb-4 text-yellow-400">Features</h3>
            <ul className="space-y-2">
              <li><Link href="/top-stories" className="hover:text-yellow-400 transition-colors">Top Stories</Link></li>
              <li><Link href="/trending" className="hover:text-yellow-400 transition-colors">Trending Topics</Link></li>
              <li><Link href="/personalized" className="hover:text-yellow-400 transition-colors">Personalized News</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-bold uppercase mb-4 text-yellow-400">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="hover:text-yellow-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-bold uppercase mb-4 text-yellow-400">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-yellow-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-bold uppercase mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center relative">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 text-yellow-400"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            News<span className="text-yellow-400">Assist</span>
          </h2>
          <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} NewsAssist. All rights reserved.</p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </footer>
  );
};

export default Footer;