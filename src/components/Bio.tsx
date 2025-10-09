import React from 'react';

const Bio: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Whitney Colbert
          </h2>
          <p className="text-xl text-gray-600">
            Founder & Lead Consultant bringing over a decade of high-level experience and strategic insight to female hockey recruitment
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Whitney established her consultancy to provide a distinct, results-driven roadmap for athletes and families targeting NCAA Division I and Division III programs. Her expertise is built upon a diverse and comprehensive career that spans coaching, national-level strategy, and high-level administration.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Founder & Lead Consultant Experience</h3>
                  <p className="text-gray-600">
                    
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Founder & Lead Consultant Experience</h3>
                <ul className="text-gray-700 space-y-2 text-sm text-left list-disc list-inside">
                  <li>USA Hockey National Team Evaluator</li>
                  <li>NCAA Rules Committee Member</li>
                  <li>NCAA D1 Assistant Coach</li>
                  <li>NCAA D3 Head and Assistant Coach</li>
                  <li>NCAA D3 Athlete</li>
                  <li>Master of Sports Leadership</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <img src="/whit.jpg" alt="Whitney Colbert" className="w-40 h-40 rounded-full object-cover mx-auto mb-6 shadow" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Whitney Colbert</h3>
                <p className="text-gray-600">Founder & Lead Consultant</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 italic">
              "Whitney's unique perspective, ranging from setting national rules to running daily team operations, ensures her clients receive an unparalleled strategic advantage to secure not just a commitment, but the optimal athletic, academic, and financial fit for their collegiate career."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;

