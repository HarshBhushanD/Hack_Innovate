import React from "react";
import { mentors } from "../../lib/mentors";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter, FaStar, FaGraduationCap, FaUsers } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function MentorCard() {
  const mentorList = mentors.map((mentor, index) => {
    return (
      <div 
        key={index} 
        className="group relative"
      >
        {/* Card container with hexagon-like clipped corners */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-700 hover:border-emerald-400 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2"
             style={{
               clipPath: 'polygon(0 10px, 10px 0, calc(100% - 10px) 0, 100% 10px, 100% calc(100% - 10px), calc(100% - 10px) 100%, 10px 100%, 0 calc(100% - 10px))'
             }}>
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
          
          <div className="p-6 space-y-6">
            {/* Top section with image and status */}
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-emerald-400 group-hover:border-emerald-300 transition-colors duration-300">
                    <Image 
                      src={mentor.image} 
                      alt={mentor.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors duration-300">
                    {mentor.name}
                  </h3>
                  <p className="text-emerald-400 font-medium text-sm">
                    {mentor.expertise || "Technology Mentor"}
                  </p>
                </div>
              </div>
            </div>

            {/* Bio section */}
            <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
              {mentor.bio || "Passionate mentor dedicated to helping individuals grow their skills and achieve their goals through personalized guidance and industry expertise."}
            </p>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-700">
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-blue-500/20 rounded-lg mx-auto mb-2">
                  <FaGraduationCap className="text-blue-400 text-sm" />
                </div>
                <div className="text-lg font-bold text-white">{mentor.experience || "5+"}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Years</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-500/20 rounded-lg mx-auto mb-2">
                  <FaUsers className="text-purple-400 text-sm" />
                </div>
                <div className="text-lg font-bold text-white">{mentor.mentees || "50+"}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Mentees</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center w-8 h-8 bg-emerald-500/20 rounded-lg mx-auto mb-2">
                  <FaStar className="text-emerald-400 text-sm" />
                </div>
                <div className="text-lg font-bold text-white">98%</div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">Success</div>
              </div>
            </div>
            {/* Action section */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex space-x-2">
                {mentor.linkedin && (
                  <Link href={mentor.linkedin} className="w-8 h-8 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-600/30 hover:border-blue-600/50 text-blue-400 hover:text-blue-300 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FaLinkedin className="text-sm" />
                  </Link>
                )}
                {mentor.github && (
                  <Link href={mentor.github} className="w-8 h-8 bg-gray-600/10 hover:bg-gray-600/20 border border-gray-600/30 hover:border-gray-600/50 text-gray-400 hover:text-gray-300 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FaGithub className="text-sm" />
                  </Link>
                )}
                {mentor.twitter && (
                  <Link href={mentor.twitter} className="w-8 h-8 bg-sky-600/10 hover:bg-sky-600/20 border border-sky-600/30 hover:border-sky-600/50 text-sky-400 hover:text-sky-300 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                    <FaSquareXTwitter className="text-sm" />
                  </Link>
                )}
              </div>
              
              <Link href={mentor.linkedin} className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
                Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Masonry-like layout with different column spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mentorList}
        </div>
      </div>
    </div>
  );
}