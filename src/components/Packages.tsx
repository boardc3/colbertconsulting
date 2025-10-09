import React from 'react';

interface PackageProps {
  title: string;
  subtitle: string;
  duration: string;
  grade: string;
  contractPeriod: string;
  services: string[];
  isPopular?: boolean;
}

const PackageCard: React.FC<PackageProps> = ({ 
  title, 
  subtitle, 
  duration, 
  grade, 
  contractPeriod, 
  services, 
  isPopular = false 
}) => {
  return (
    <div className={`relative bg-white rounded-2xl shadow-lg p-8 card-hover ${
      isPopular ? 'ring-2 ring-primary-500 transform scale-105' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{subtitle}</p>
        <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold">
          {duration}
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Target Grade</p>
          <p className="text-lg font-semibold text-gray-900">{grade}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-1">Contract Period</p>
          <p className="text-sm text-gray-700">{contractPeriod}</p>
        </div>
      </div>
      
      <div className="space-y-3 mb-8">
        <h4 className="font-semibold text-gray-900 mb-3">Services Include:</h4>
        {services.map((service, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700 text-sm">{service}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <a 
          href="https://forms.gle/NdgKZCr5SRcfCNwr5" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-full block py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
            isPopular 
              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:shadow-lg hover:-translate-y-1' 
              : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
          }`}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

const Packages: React.FC = () => {
  const packages = [
    {
      title: "The Prospect Package",
      subtitle: "Foundation Building",
      duration: "9 Month Agreement",
      grade: "9th Grade Athletes",
      contractPeriod: "Sept 1 - May 31st",
      services: [
        "One-on-one career roadmap session",
        "Strategic guidance on team selection & league placement",
        "Advisor evaluation with areas of focus",
        "Game viewing throughout season & summer events",
        "Consulting phone calls and in-person meetings",
        "Recruitment education presentation",
        "Strategic showcase event selection",
        "and more!"
      ]
    },
    {
      title: "The Collegiate Pathway Package",
      subtitle: "Strategic Development",
      duration: "9 Month Agreement",
      grade: "10th Grade Athletes",
      contractPeriod: "September 1st - May 31st",
      services: [
        "Personalized advisor evaluation",
        "Detailed game viewing & feedback",
        "Consulting phone calls and in-person meetings",
        "Detailed school selection & fit assessment",
        "Player materials support & guidance",
        "Coach communication assistance",
        "Visit preparation advising",
        "and more!"
      ]
    },
    {
      title: "The Elite Prospect Package",
      subtitle: "Advanced Positioning",
      duration: "1 Year Agreement",
      grade: "Post 10th - 11th Grade",
      contractPeriod: "June 1 - May 31",
      services: [
        "Comprehensive game/event evaluations",
        "Consulting phone calls and in-person meetings",
        "Adapted recruitment timeline",
        "Strategic showcase event selection",
        "Advanced coach communication support",
        "Scholarship & NIL conversation guidance",
        "Proactive coach contact on your behalf",
        "Commitment & contract advising",
        "and more!"
      ],
      isPopular: true
    },
    {
      title: "The Signing Day Package",
      subtitle: "Final Commitment",
      duration: "1 Year Agreement",
      grade: "12th Grade Athletes",
      contractPeriod: "June 1 - Graduation",
      services: [
        "Comprehensive final commitment support",
        "In-depth offer evaluation",
        "Consulting phone calls and in-person meetings",
        "Final school selection guidance",
        "National Letter of Intent assistance",
        "Transition advising for college",
        "Freshman year preparation support",
        "and more!"
      ]
    }
  ];

  return (
    <section id="packages" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Core Consulting Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My core philosophy is built on a long-term roadmap for success. All packages include a complimentary 30-minute consultation to discuss your goals and determine if my services are the right fit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every successful recruitment begins with understanding your goals and creating a strategic plan. Let's discuss how I can help you achieve your collegiate hockey dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://forms.gle/NdgKZCr5SRcfCNwr5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Schedule Consultation
            </a>
            <a 
              href="#referral" 
              className="btn-secondary"
            >
              Learn About Referrals
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;

