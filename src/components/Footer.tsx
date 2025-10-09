import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/ccllc.png" alt="Colbert Consulting Logo" className="w-10 h-10 rounded-lg object-contain bg-white" />
              <div>
                <h3 className="text-xl font-bold">Colbert Consulting</h3>
                <p className="text-sm text-gray-400">Female Hockey Recruitment</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering female hockey players through strategic NCAA recruitment guidance, personalized development, and expert advocacy.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>The Prospect Package</li>
              <li>The Collegiate Pathway Package</li>
              <li>The Elite Prospect Package</li>
              <li>The Signing Day Package</li>
              <li>Referral Program</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Consultation Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-4 h-4 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>30-minute complimentary consultation</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href="https://forms.gle/NdgKZCr5SRcfCNwr5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span>Get Started</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 Colbert Consulting, LLC. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#packages" className="hover:text-white transition-colors">Packages</a>
              <a href="#referral" className="hover:text-white transition-colors">Referral Program</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

