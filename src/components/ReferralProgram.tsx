import React from 'react';

const ReferralProgram: React.FC = () => {
  return (
    <section id="referral" className="section-padding bg-white">
      <div className="container-max">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Referral Program
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Share the Advantage!
          </p>
          
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              We believe the best endorsement comes from happy clients
            </h3>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When you refer a new family who signs on for the Collegiate Pathway Package, Elite Prospect Package, or Signing Day Package, you will receive <span className="font-bold text-primary-600">5% off your current package</span>. It's my way of saying thank you for helping us grow the next generation of female hockey stars.
            </p>
            
            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-sm font-semibold text-gray-700">Important Note</span>
              </div>
              <p className="text-sm text-gray-600">
                Limited to 2 referrals during your time with Colbert Consulting, LLC
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Refer a Family</h4>
                <p className="text-sm text-gray-600">Share your positive experience with friends and teammates</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-600">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">They Sign Up</h4>
                <p className="text-sm text-gray-600">New family enrolls in an eligible package</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-600">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">You Save</h4>
                <p className="text-sm text-gray-600">Receive 5% off your current package</p>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://forms.gle/NdgKZCr5SRcfCNwr5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-lg px-8 py-4"
              >
                Start Your Journey Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralProgram;

