import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Dark hockey rink background */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Rink markings */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Center red line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-red-600/30"></div>
          
          {/* Blue lines */}
          <div className="absolute left-[25%] top-0 bottom-0 w-1 bg-blue-600/30"></div>
          <div className="absolute right-[25%] top-0 bottom-0 w-1 bg-blue-600/30"></div>
          
          {/* Center ice circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-red-600/20 rounded-full"></div>
          
          {/* Faceoff circles */}
          <div className="absolute left-[25%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-blue-600/20 rounded-full"></div>
          <div className="absolute right-[25%] top-1/2 translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-blue-600/20 rounded-full"></div>
          
          {/* Goal creases */}
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-16 h-16 border-2 border-red-600/20 rounded-full"></div>
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-16 h-16 border-2 border-red-600/20 rounded-full"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container-max section-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">
            Your Path to
            <span className="block mt-2 text-primary-400">NCAA Hockey Excellence</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Strategic guidance and expert advocacy to secure your optimal collegiate hockey opportunity
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://forms.gle/NdgKZCr5SRcfCNwr5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 text-lg font-bold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Start Your Journey
            </a>
            <a 
              href="#packages" 
              className="px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-white/20 rounded-lg hover:bg-white/10 transition-colors"
            >
              View Packages
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-400">Over a decade of NCAA coaching experience</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Personalized Approach</h3>
              <p className="text-gray-400">One-on-one focus with limited client numbers</p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Strategic Advantage</h3>
              <p className="text-gray-400">Comprehensive roadmap to commitment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;