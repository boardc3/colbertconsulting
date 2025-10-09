import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container-max section-padding py-4">
        <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/ccllc.png" alt="Colbert Consulting Logo" className="w-12 h-12 rounded-lg object-contain bg-white" />
          <div>
            <h1 className="text-xl font-display font-bold text-primary-900">
              Colbert Consulting
            </h1>
            <p className="text-sm text-primary-700">
              Female Hockey Recruitment
            </p>
          </div>
        </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Packages', 'Referral Program'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-primary-900 hover:text-primary-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="https://forms.gle/NdgKZCr5SRcfCNwr5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Started
            </a>
          </div>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-primary-900"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden absolute left-0 right-0 top-full bg-white shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="p-4 space-y-4">
            {['About', 'Packages', 'Referral Program'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block py-2 text-primary-900 hover:text-primary-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="https://forms.gle/NdgKZCr5SRcfCNwr5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block py-3 text-center text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;