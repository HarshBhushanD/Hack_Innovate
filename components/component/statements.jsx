// This file is now JavaScript (JSX) to avoid r3f JSX type errors in Next.js
import React, { useState, useRef, useEffect } from "react";
import { FAQsAPI } from "../../lib/Statements";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

// Enhanced Three.js background with multiple animated elements
function FloatingParticles() {
  const group = useRef(null);
  const particles = React.useMemo(() =>
    Array.from({ length: 150 }, () => ({
      position: [
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15
      ],
      size: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.7 ? "#00fff7" : "#ff6b6b"
    })),
    []
  );

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() / 6) * 0.2;
      group.current.rotation.x = Math.cos(clock.getElapsedTime() / 8) * 0.1;
      
      // Animate individual particles
      group.current.children.forEach((child, i) => {
        const particle = particles[i];
        child.position.y += Math.sin(clock.getElapsedTime() * particle.speed) * 0.01;
        child.material.opacity = 0.3 + Math.sin(clock.getElapsedTime() * 2 + i) * 0.2;
      });
    }
  });

  return (
    <group ref={group}>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 16, 16]} />
          <meshStandardMaterial 
            color={particle.color} 
            transparent 
            opacity={0.6} 
            emissive={particle.color} 
            emissiveIntensity={1.5} 
          />
        </mesh>
      ))}
    </group>
  );
}

function GlowingTorus() {
  const mesh = useRef(null);
  const innerTorus = useRef(null);
  
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.05;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.08;
    }
    if (innerTorus.current) {
      innerTorus.current.rotation.x = -clock.getElapsedTime() * 0.03;
      innerTorus.current.rotation.y = -clock.getElapsedTime() * 0.06;
    }
  });

  return (
    <group>
      <mesh ref={mesh} position={[0, 0, -3]}>
        <torusGeometry args={[8, 0.6, 32, 120]} />
        <meshStandardMaterial 
          color="#00fff7" 
          transparent 
          opacity={0.15} 
          emissive="#00fff7" 
          emissiveIntensity={2.0} 
        />
      </mesh>
      <mesh ref={innerTorus} position={[0, 0, -2]}>
        <torusGeometry args={[5, 0.4, 24, 80]} />
        <meshStandardMaterial 
          color="#ff6b6b" 
          transparent 
          opacity={0.12} 
          emissive="#ff6b6b" 
          emissiveIntensity={1.8} 
        />
      </mesh>
    </group>
  );
}

function AnimatedRings() {
  const rings = useRef([]);
  
  useFrame(({ clock }) => {
    rings.current.forEach((ring, i) => {
      if (ring) {
        ring.rotation.z = clock.getElapsedTime() * (0.02 + i * 0.01);
        ring.scale.setScalar(1 + Math.sin(clock.getElapsedTime() + i) * 0.1);
      }
    });
  });

  return (
    <group position={[0, 0, -1]}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} ref={el => rings.current[i] = el}>
          <ringGeometry args={[3 + i * 2, 3.2 + i * 2, 32]} />
          <meshStandardMaterial 
            color={i % 2 === 0 ? "#00fff7" : "#ff6b6b"} 
            transparent 
            opacity={0.08} 
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function ProblemSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const cardRefs = useRef([]);
  const modalRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  // Categories for filtering
  const categories = [
    { id: 'all', name: 'All Problems', color: '#00fff7' },
    { id: 'ai', name: 'AI/ML', color: '#ff6b6b' },
    { id: 'web', name: 'Web Dev', color: '#4ecdc4' },
    { id: 'mobile', name: 'Mobile', color: '#45b7d1' },
    { id: 'blockchain', name: 'Blockchain', color: '#96ceb4' },
    { id: 'security', name: 'Security', color: '#feca57' }
  ];

  // Enhanced entrance animations
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: -50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(cardRefs.current,
      { opacity: 0, y: 80, scale: 0.6, rotationY: 45 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        rotationY: 0, 
        stagger: 0.08, 
        duration: 1.2, 
        ease: "back.out(1.7)" 
      },
      "-=0.3"
    );
  }, []);

  // Enhanced hover effects
  useEffect(() => {
    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      
      const onEnter = () => {
        setHoveredIndex(idx);
        gsap.to(el, { 
          scale: 1.08, 
          rotationY: gsap.utils.random(-8, 8),
          rotationX: gsap.utils.random(-3, 3),
          boxShadow: "0 20px 60px rgba(0, 255, 247, 0.4)",
          duration: 0.4, 
          ease: "power2.out" 
        });
      };
      
      const onLeave = () => {
        setHoveredIndex(null);
        gsap.to(el, { 
          scale: 1, 
          rotationY: 0,
          rotationX: 0,
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
          duration: 0.5, 
          ease: "power2.inOut" 
        });
      };
      
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      
      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  // Enhanced modal animations
  useEffect(() => {
    if (openIndex !== null && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { opacity: 0, scale: 0.7, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, ease: "back.out(1.7)" }
      );
    }
  }, [openIndex]);

  // Filter problems based on category
  const filteredProblems = selectedCategory === 'all' 
    ? FAQsAPI 
    : FAQsAPI.filter((_, index) => {
        if (selectedCategory === 'ai') return [0, 1, 9, 10, 11].includes(index);
        if (selectedCategory === 'web') return [2, 3, 6, 7, 13, 14, 16, 17].includes(index);
        if (selectedCategory === 'mobile') return [4, 5, 12].includes(index);
        if (selectedCategory === 'blockchain') return [15].includes(index);
        if (selectedCategory === 'security') return [8, 18, 19].includes(index);
        return true;
      });

  return (
    <div className="w-full min-h-screen bg-black flex flex-col p-0 m-0 relative overflow-hidden">
      {/* Enhanced Three.js animated background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <ambientLight intensity={1.2} />
          <pointLight position={[0, 0, 10]} intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#ff6b6b" />
          <GlowingTorus />
          <AnimatedRings />
          <FloatingParticles />
        </Canvas>
      </div>

      {/* Enhanced Header */}
      <div className="w-full flex flex-col items-center justify-center pt-12 pb-8 relative z-10">
        <div className="text-center mb-8">
          <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 mb-4 drop-shadow-2xl">
            Problem Statements
          </h1>
          <p ref={subtitleRef} className="text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            Choose your challenge and unleash your creativity. Each problem is an opportunity to innovate and make a real impact.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
              style={{
                boxShadow: selectedCategory === category.id 
                  ? `0 0 20px ${category.color}40` 
                  : 'none'
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Problem Cards Grid */}
      <div className={`flex-1 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-8 transition-all duration-500 ${
        openIndex !== null ? 'blur-sm brightness-50 scale-95' : ''
      }`}>
        {filteredProblems.map((item, idx) => (
          <div
            key={idx}
            ref={el => (cardRefs.current[idx] = el)}
            className="[perspective:1000px] h-full group"
            onClick={() => setOpenIndex(idx)}
          >
            <div className="relative w-full h-[140px] bg-gradient-to-br from-[#1a1a2e]/90 via-[#16213e]/90 to-[#0f3460]/90 rounded-2xl shadow-2xl flex items-center justify-center px-6 py-8 text-center cursor-pointer border border-white/20 backdrop-blur-xl transition-all duration-500 overflow-hidden"
              style={{ 
                boxShadow: hoveredIndex === idx 
                  ? '0 20px 60px rgba(0, 255, 247, 0.4)' 
                  : '0 8px 32px rgba(31, 38, 135, 0.37)'
              }}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              
              {/* Content */}
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <div className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 mb-2">
                  Problem {item.id + 1}
                </div>
                <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300 leading-tight">
                  {item.question}
                </span>
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setOpenIndex(null)}
        >
          <div
            ref={modalRef}
            className="bg-gradient-to-br from-[#1a1a2e]/95 via-[#16213e]/95 to-[#0f3460]/95 text-white rounded-3xl shadow-2xl p-8 max-w-2xl w-[95vw] max-h-[90vh] flex flex-col relative border border-cyan-400/50"
            onClick={e => e.stopPropagation()}
            style={{ 
              boxShadow: '0 25px 80px rgba(0, 255, 247, 0.3)',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-cyan-300 hover:text-white text-3xl font-bold focus:outline-none transition-colors duration-300 z-10"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
            >
              ×
            </button>

            {/* Problem number badge */}
            <div className="absolute top-4 left-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
              Problem {FAQsAPI[openIndex].id + 1}
            </div>

            {/* Content */}
            <div className="mt-12 mb-6">
              <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 leading-tight">
                {FAQsAPI[openIndex].question}
              </h2>
              <div className="text-base leading-relaxed text-gray-200 overflow-y-auto max-h-[60vh] px-2 space-y-4">
                {FAQsAPI[openIndex].answer.split('\n').map((paragraph, idx) => (
                  <p key={idx} className="text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300">
                Choose This Problem
              </button>
              <button 
                className="px-6 py-3 bg-white/10 text-gray-300 rounded-full font-semibold hover:bg-white/20 transition-colors duration-300"
                onClick={() => setOpenIndex(null)}
              >
                Browse More
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 247, 0.4); }
          50% { box-shadow: 0 0 40px rgba(0, 255, 247, 0.8); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}