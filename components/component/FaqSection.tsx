import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { FAQsAPI } from "../../lib/Faqs";

export default function FAQSection() {
  const faqs = FAQsAPI.map((item, key) => {
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
    <section className="relative  py-20 md:py-28 xl:py-36 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-amber-300 text-sm font-medium uppercase tracking-wider">
              Got Questions?
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-amber-200 to-orange-200 bg-clip-text text-transparent">
              Frequently Asked
            </span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Find answers to common questions about our hackathon, registration process, and 
            <span className="text-amber-400 font-semibold"> participation guidelines</span>
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
            <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Can&apos;t find what you&apos;re looking for? Our team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Contact Support
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}