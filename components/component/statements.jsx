// This file is now JavaScript (JSX) to avoid r3f JSX type errors in Next.js
import React, { useState, useRef, useEffect } from "react";
import { FAQsAPI } from "../../lib/Statements";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

// Animated Three.js background: floating particles + glowing torus
function FloatingParticles() {
  const group = useRef(null);
  // Generate random positions for 120 particles
  const particles = React.useMemo(() =>
    Array.from({ length: 120 }, () => [
      (Math.random() - 0.5) * 24,
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 12
    ]),
    []
  );
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(clock.getElapsedTime() / 4) * 0.3;
      group.current.rotation.x = Math.cos(clock.getElapsedTime() / 6) * 0.15;
    }
  });
  return (
    <group ref={group}>
      {particles.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.28, 18, 18]} />
          <meshStandardMaterial color={"#00fff7"} transparent opacity={0.5} emissive="#00fff7" emissiveIntensity={2.2} />
        </mesh>
      ))}
    </group>
  );
}

function GlowingTorus() {
  const mesh = useRef(null);
  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.x = clock.getElapsedTime() * 0.07;
      mesh.current.rotation.y = clock.getElapsedTime() * 0.13;
    }
  });
  return (
    <mesh ref={mesh} position={[0, 0, -2]}>
      <torusGeometry args={[6, 0.45, 32, 120]} />
      <meshStandardMaterial color="#00fff7" transparent opacity={0.18} emissive="#00fff7" emissiveIntensity={2.5} />
    </mesh>
  );
}

export default function ProblemSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const cardRefs = useRef([]);
  const modalQuestionRef = useRef(null);
  const modalAnswerRef = useRef(null);

  // GSAP entrance animation for cards
  useEffect(() => {
    if (cardRefs.current.length) {
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 60, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.09, duration: 1, ease: "bounce.out" }
      );
    }
  }, []);

  // GSAP hover pop/tilt effect
  useEffect(() => {
    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const onEnter = () => {
        gsap.to(el, { scale: 1.07, rotateZ: gsap.utils.random(-3, 3), boxShadow: "0 0 32px #00fff7", duration: 0.25, ease: "power2.out" });
      };
      const onLeave = () => {
        gsap.to(el, { scale: 1, rotateZ: 0, boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)", duration: 0.3, ease: "power2.inOut" });
      };
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
      return () => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      };
    });
  }, []);

  // GSAP modal text animation
  useEffect(() => {
    if (openIndex !== null && modalQuestionRef.current && modalAnswerRef.current) {
      gsap.fromTo(
        modalQuestionRef.current,
        { opacity: 0, y: 40, scale: 0.85 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "expo.out" }
      );
      gsap.fromTo(
        modalAnswerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.15, ease: "power2.out" }
      );
    }
  }, [openIndex]);

  return (
    <div className="w-full min-h-screen h-full bg-black flex flex-col p-0 m-0 relative overflow-hidden">
      {/* Three.js animated background */}
      <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
          <ambientLight intensity={0.9} />
          <pointLight position={[0, 0, 10]} intensity={1.2} />
          <GlowingTorus />
          <FloatingParticles />
        </Canvas>
      </div>
      <div className="w-full flex flex-col items-center justify-center pt-8 pb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center">Problem Statements</h1>
        <p className="text-lg text-gray-300 text-center max-w-2xl mb-6">
          Here are the challenges you can tackle. Unleash your creativity and skills to solve real problems.
        </p>
      </div>
      <div className={`flex-1 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 transition-all duration-300 ${openIndex !== null ? 'blur-sm brightness-75' : ''}`}>
        {FAQsAPI.map((item, idx) => (
          <div
            key={idx}
            ref={el => (cardRefs.current[idx] = el)}
            className="[perspective:1000px] h-full"
            onClick={() => setOpenIndex(idx)}
          >
            <div className="relative w-full h-[110px] min-h-[110px] max-h-[110px] bg-gradient-to-br from-[#232526]/80 to-[#414345]/80 rounded-lg shadow-xl flex items-center justify-center px-6 py-8 text-center text-lg font-semibold cursor-pointer border border-white/10 backdrop-blur-md transition-all duration-300 group overflow-hidden"
              style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 rounded-lg bg-white/10 opacity-60 pointer-events-none" />
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-lg pointer-events-none transition-all duration-300" />
              {/* Content */}
              <span className="relative z-10 group-hover:scale-105 group-hover:text-cyan-300 transition-all duration-300 break-words w-full h-full flex items-center justify-center">
                {item.question}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadein"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="bg-gradient-to-br from-[#232526]/90 to-[#414345]/90 text-white rounded-3xl shadow-2xl p-8 max-w-lg w-[90vw] max-h-[90vh] flex flex-col items-center justify-center relative border border-cyan-400 animate-scalein"
            onClick={e => e.stopPropagation()}
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
          >
            <button
              className="absolute top-3 right-3 text-cyan-300 hover:text-white text-2xl font-bold focus:outline-none"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 ref={modalQuestionRef} className="text-2xl font-bold mb-4 text-center text-cyan-300 drop-shadow">{FAQsAPI[openIndex].question}</h2>
            <div ref={modalAnswerRef} className="text-base whitespace-pre-line text-center overflow-y-auto max-h-[60vh] px-2">
              {FAQsAPI[openIndex].answer}
            </div>
          </div>
        </div>
      )}
      {/* Animations */}
      <style jsx>{`
        .animate-fadein {
          animation: fadeInBg 0.3s;
        }
        .animate-scalein {
          animation: scaleIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes fadeInBg {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}