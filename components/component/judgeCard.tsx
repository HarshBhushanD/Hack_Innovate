import React from "react";
import { judges } from "../../lib/judges";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

export default function JudgeCard() {
  const judgesList = judges.map((judge, index) => {
    return (
      <div 
        key={index} 
        className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-3xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-500 hover:scale-105"
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Header section with image */}
        <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-blue-500/20">
          <div className="absolute inset-0 bg-black/40"></div>
          <Image 
            src={judge.image} 
            alt={judge.name} 
            loading="lazy"
            className="w-full h-full object-cover"
            width={400}
            height={200}
          />
          
          {/* Floating profile image */}
          <div className="absolute -bottom-12 left-6">
            <div className="w-24 h-24 rounded-full border-4 border-black bg-gradient-to-r from-purple-500 to-blue-500 p-1 group-hover:scale-110 transition-transform duration-300">
              <Image 
                src={judge.image} 
                alt={judge.name}
                className="w-full h-full rounded-full object-cover"
                width={96}
                height={96}
              />
            </div>
          </div>

          {/* Status badge */}
          <div className="absolute top-4 right-4 bg-green-500/90 text-white text-xs px-3 py-1 rounded-full font-semibold">
            JUDGE
          </div>
        </div>

        {/* Content section */}
        <div className="pt-16 p-6 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
              {judge.name}
            </h3>
            <p className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
              {judge.title || "Senior Judge"}
            </p>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {judge.bio || "Experienced professional with expertise in evaluating innovative projects and providing valuable feedback to participants."}
          </p>

          {/* Skills/Tags */}
          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium">
              Innovation
            </span>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium">
              Evaluation
            </span>
            <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium">
              Mentorship
            </span>
          </div>

          {/* Social links */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-700">
            <div className="flex space-x-3">
              {judge.linkedin && (
                <Link href={judge.linkedin} className="w-10 h-10 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaLinkedin className="text-lg" />
                </Link>
              )}
              {judge.github && (
                <Link href={judge.github} className="w-10 h-10 bg-gray-600/20 hover:bg-gray-600 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaGithub className="text-lg" />
                </Link>
              )}
              {judge.twitter && (
                <Link href={judge.twitter} className="w-10 h-10 bg-sky-600/20 hover:bg-sky-600 text-sky-400 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <FaSquareXTwitter className="text-lg" />
                </Link>
              )}
            </div>
            
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105">
              View Profile
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {judgesList}
        </div>
      </div>
    </div>
  );
}