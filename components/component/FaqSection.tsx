import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// VulnVANGUARD specific FAQs
const VulnVANGUARDFAQs = [
  {
    question: "What is VulnVANGUARD and how long does it run?",
    answer: "VulnVANGUARD is a 24-hour cybersecurity hackathon organized by GeeksforGeeks SRMIST Delhi-NCR. It challenges ethical hackers, security researchers, and cybersecurity enthusiasts with hands-on experience in vulnerability discovery, penetration testing, incident response, and security architecture."
  },
  {
    question: "What is the team size and registration process?",
    answer: "Teams must consist of exactly 4 members. Registration includes team check-in, ID verification, and kit distribution on the event day starting at 9:30 AM. There's also an online preliminary quiz 5 days before the main event that teams must qualify through."
  },
  {
    question: "What is the preliminary round and how does it work?",
    answer: "The preliminary round is a technical quiz conducted online 5 days before the main event. It lasts 30-45 minutes and screens participants based on technical knowledge. Only top-performing teams qualify for the offline 24-hour hackathon."
  },
  {
    question: "What are the main rounds in VulnVANGUARD?",
    answer: "There are 3 main rounds: Round 1 (Decoder) - solving 4 progressive riddles in a Linux environment similar to OverTheWire challenges; Round 2 (Bug Fixing & Implementation) - identifying and fixing bugs in assigned projects; Round 3 (Documentation & Technical Explanation) - creating comprehensive reports and presentations of your work."
  },
  {
    question: "What skills do I need for Round 1: Decoder?",
    answer: "Round 1 requires Linux skills including file system navigation, permissions management, encoding/decoding, scripting, and binary analysis. You'll work through specially designed challenges that replicate fundamental information security abilities in an isolated lab environment."
  },
  {
    question: "How does the elimination process work?",
    answer: "There's an elimination round on Day 1 from 3:00 PM - 4:30 PM where underperforming teams will be eliminated based on preliminary evaluation checkpoints. Eliminated teams can still participate in mini games and refreshment activities."
  },
  {
    question: "What happens during the overnight hours?",
    answer: "The hackathon continues through the night with final fixing sprints from 12:00 AM - 2:00 AM, followed by mini games and refreshments from 2:00 AM - 4:00 AM. From 4:00 AM - 8:00 AM, teams work on documentation and report creation."
  },
  {
    question: "What are the judging criteria for each round?",
    answer: "Round 1: Levels Solved (30%), Speed (40%), Efficiency (30%). Round 2: Correctness of Fixes (40%), Code Quality (30%), System Functionality (30%). Round 3: Clarity & Structure (30%), Depth of Understanding (20%), Presentation (40%), System Enhancement (10%)."
  },
  {
    question: "What should I bring and what will be provided?",
    answer: "Bring your laptop, chargers, and any personal items you'll need for 24 hours. The event provides meals (lunch, dinner, breakfast), tea breaks, and event kits during registration. The venue is at SRMIST Campus with all necessary lab facilities."
  },
  {
    question: "How can I prepare for VulnVANGUARD?",
    answer: "Practice Linux command line, study basic cybersecurity concepts, familiarize yourself with OverTheWire challenges, brush up on debugging and code analysis skills, and ensure your team has diverse skills in system administration, programming, and documentation."
  }
];
const handleContactClick = (e) => {
  e.preventDefault();
  const element = document.getElementById('contact');
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export default function FAQSection() {
  const faqs = VulnVANGUARDFAQs.map((item, key) => {
    return (
      <AccordionItem key={key} className="mb-4">
        <AccordionItemHeading>
          <AccordionItemButton className="group relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl px-6 py-5 text-left text-white font-semibold text-lg hover:from-purple-600/20 hover:to-blue-600/20 hover:border-purple-500/50 transition-all duration-300 ease-out cursor-pointer backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="pr-8">{item.question}</span>
              <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center group-hover:from-purple-500/40 group-hover:to-blue-500/40 transition-all duration-300">
                <svg 
                  className="w-5 h-5 text-purple-400 group-hover:text-white transform group-hover:rotate-180 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="px-6 py-5 bg-gradient-to-r from-gray-800/30 to-gray-900/30 border-x border-b border-gray-700/50 rounded-b-2xl -mt-2 backdrop-blur-sm">
          <p className="text-gray-300 leading-relaxed text-base">{item.answer}</p>
        </AccordionItemPanel>
      </AccordionItem>
    );
  });

  return (
    <section className="relative py-20 md:py-28 xl:py-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-500/10 border border-red-500/20 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-red-300 text-sm font-medium uppercase tracking-wider">
              Security Questions?
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent">
              VulnVANGUARD
            </span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              FAQs
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about the 24-hour cybersecurity hackathon, from 
            <span className="text-red-400 font-semibold"> registration to final presentations</span>
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="relative">
          <Accordion allowZeroExpanded className="space-y-4">
            {faqs}
          </Accordion>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to join the cybersecurity challenge?</h3>
            <p className="text-gray-300 mb-6">
              Still have questions? Our team is here to help you prepare for VulnVANGUARD.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
                href="#contact" 
                onClick={handleContactClick}
                className="px-8 py-3 bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 inline-block text-center"
              >
                Contact Organizers
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}