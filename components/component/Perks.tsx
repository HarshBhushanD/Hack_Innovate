import React from "react";
import { Wifi, Utensils, Gift, Users, Zap, Trophy, Heart, Rocket, Sparkles, Award } from "lucide-react";

export default function Perks() {
  const perks = [
    {
      icon: Wifi,
      title: "Lightning WiFi",
      description: "Blazing-fast internet that keeps you connected",
      color: "from-blue-500 via-cyan-500 to-teal-400",
      shadowColor: "shadow-blue-500/30"
    },
    {
      icon: Utensils,
      title: "Gourmet Feast",
      description: "Premium meals & unlimited snacks 24/7",
      color: "from-orange-500 via-red-500 to-pink-500",
      shadowColor: "shadow-orange-500/30"
    },
    {
      icon: Gift,
      title: "Epic Swag",
      description: "Exclusive merch & cool tech goodies",
      color: "from-purple-500 via-violet-500 to-fuchsia-500",
      shadowColor: "shadow-purple-500/30"
    },
    {
      icon: Users,
      title: "Pro Mentors",
      description: "Industry experts guiding your journey",
      color: "from-emerald-500 via-green-500 to-lime-500",
      shadowColor: "shadow-emerald-500/30"
    },
    {
      icon: Trophy,
      title: "Epic Prizes",
      description: "Cash rewards & amazing recognition",
      color: "from-yellow-500 via-amber-500 to-orange-500",
      shadowColor: "shadow-yellow-500/30"
    },
    {
      icon: Rocket,
      title: "Career Launch",
      description: "Direct pipeline to top tech companies",
      color: "from-indigo-500 via-purple-500 to-pink-500",
      shadowColor: "shadow-indigo-500/30"
    },
    {
      icon: Heart,
      title: "Amazing Community",
      description: "Connect with brilliant minds worldwide",
      color: "from-pink-500 via-rose-500 to-red-500",
      shadowColor: "shadow-pink-500/30"
    },
    {
      icon: Zap,
      title: "Tech Mastery",
      description: "Cutting-edge workshops & tools access",
      color: "from-cyan-500 via-blue-500 to-indigo-500",
      shadowColor: "shadow-cyan-500/30"
    }
  ];

  return (
    <section id="Perks" className="py-16 md:py-20 xl:py-28 relative overflow-hidden bg-black min-h-screen">
      {/* Background Elements
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 rounded-full blur-3xl"></div> */}
      
      <div className="relative w-11/12 md:w-10/12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h2 className="text-3xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 relative z-10 py-4">
              Amazing Perks!
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Fueling Innovation with <span className="font-bold text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text">unlimited possibilities</span> - experience the ultimate hackathon journey!
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {perks.map((perk, index) => {
            const IconComponent = perk.icon;
            return (
              <div 
                key={index}
                className={`group relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 ${perk.shadowColor} shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-4 hover:scale-105 cursor-pointer border border-gray-800/50 hover:border-gray-700/70 overflow-hidden`}
                style={{
                  animationDelay: `${index * 0.15}s`
                }}
              >
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${perk.color} opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-700`}></div>
                
                {/* Icon container */}
                <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${perk.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 shadow-2xl mx-auto`}>
                  <IconComponent className="w-10 h-10 text-white drop-shadow-xl" /> 
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-500 text-center">
                  {perk.title}
                </h3>
                
                <p className="text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-500 text-center">
                  {perk.description}
                </p>

                {/* Hover particles */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-2 group-hover:translate-x-0">
                  <div className={`w-3 h-3 bg-gradient-to-r ${perk.color} rounded-full shadow-lg animate-pulse`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call-to-Action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all duration-500 border border-white/20 hover:border-white/40 cursor-pointer margin-bottom-10">
            <Heart className="w-8 h-8 animate-pulse" />
            <span>Join the Ultimate Experience!</span>
          </div>          
        </div>
      </div>
    </section>
  );
}