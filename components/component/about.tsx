// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { SRGBColorSpace } from 'three';

// const EpicHackathonAbout = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const sceneRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cameraRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const animationRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [textAnimation, setTextAnimation] = useState(false);
//   const [terminalLines, setTerminalLines] = useState([]);
//   const [currentCommand, setCurrentCommand] = useState('');
//   const [activeSection, setActiveSection] = useState(0);

//   const aboutSections = [
    
//       {
//         title: "VulnVANGUARD",
//         description: "Where security meets innovation in the digital battleground",
//         icon: "🛡️",
//         color: "#00ff87",
//         content: "VulnVANGUARD isn't just another hackathon – it's the ultimate cybersecurity challenge where brilliant minds collide to identify, fix, and fortify digital systems against real-world threats."
//       },
//       {
//         title: "Cyber Security Focus",
//         description: "24 hours of intensive security challenges",
//         icon: "🔒",
//         color: "#0ea5e9", 
//         content: "This 24-hour cybersecurity marathon is loaded with Linux challenges, bug hunting, vulnerability assessment, and system hardening - designed to test your security prowess."
//       },
//       {
//         title: "Bug Hunter's Paradise",
//         description: "Where vulnerabilities meet their match",
//         icon: "🐛",
//         color: "#8b5cf6",
//         content: "Sleep is optional. Security isn't. If you're ready to prove your mettle, hunt down critical bugs, and build fortress-like systems - this is your battlefield."
//       },
//       {
//         title: "Elite Security Community",
//         description: "Join the vanguard of cybersecurity warriors.",
//         icon: "⚔️",
//         color: "#06b6d4",
//         content: "It's more than an event. It's 24 hours of hacking, hardening, and defending. Expert mentors will guide you through every security challenge."
//       }
//     ];

//   useEffect(() => {
//     const sectionInterval = setInterval(() => {
//       setActiveSection(prev => (prev + 1) % aboutSections.length);
//     }, 4000);

//     setTimeout(() => setTextAnimation(true), 200);

//     return () => clearInterval(sectionInterval);
//   }, [aboutSections.length]);

//   const terminalCommands = [
//     '🎯 Initializing VulnVANGUARD system...',
//     '🔧 Loading neural pathways for innovation...',
//     '💡 Connecting brilliant minds across dimensions...',
//     '⚡ Activating 24-hour reality distortion field...',
//     '🚀 Preparing enhancement protocols...',
//     '🎨 Loading midnight mini-game archives...',
//     '🏆 Calibrating prize distribution algorithms...',
//     '🤝 Establishing mentor-participant neural links...',
//     '✨ System ready. Innovation mode: ACTIVATED.',
//   ];

//   useEffect(() => {
//     let terminalInterval;
//     let commandIndex = 0;

//     const typeCommandFn = (command, onComplete) => {
//       let charIndex = 0;
//       const typeCommand = setInterval(() => {
//         if (charIndex < command.length) {
//           setCurrentCommand(command.slice(0, charIndex + 1));
//           charIndex++;
//         } else {
//           clearInterval(typeCommand);
//           setTimeout(onComplete, 100);
//         }
//       }, 15);
//     };

//     const runTerminal = () => {
//       if (commandIndex < terminalCommands.length) {
//         const command = terminalCommands[commandIndex];
//         setCurrentCommand('');
//         typeCommandFn(command, () => {
//           setTerminalLines(prev => [...prev, `> ${command}`]);
//           setCurrentCommand('');
//           commandIndex++;
//           terminalInterval = setTimeout(runTerminal, 300);
//         });
//       } else {
//         setTimeout(() => {
//           setTerminalLines([]);
//           commandIndex = 0;
//           runTerminal();
//         }, 2000);
//       }
//     };

//     runTerminal();

//     return () => {
//       clearTimeout(terminalInterval);
//     };
//   }, [terminalCommands]);

//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current) return;

//     // Enhanced scene setup
//     const scene = new THREE.Scene();
//     scene.fog = new THREE.Fog(0x0a0f1c, 50, 300);
    
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas: canvasRef.current, 
//       alpha: true, 
//       antialias: true,
//       powerPreference: "high-performance"
//     });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     renderer.outputColorSpace = SRGBColorSpace;
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.toneMappingExposure = 1.2;
    
//     sceneRef.current = scene;
//     rendererRef.current = renderer;
//     cameraRef.current = camera;
    
//     camera.position.set(0, 0, 120);

//     // Create neural network particles
//     const createNeuralNetwork = () => {
//       const group = new THREE.Group();
//       const particleCount = 250;
//       const connections = [];
      
//       // Create nodes
//       const nodeGeometry = new THREE.SphereGeometry(0.6, 16, 16);
//       const nodes = [];
      
//       for (let i = 0; i < particleCount; i++) {
//         const nodeMaterial = new THREE.MeshBasicMaterial({
//           color: new THREE.Color().setHSL(
//             0.15 + Math.random() * 0.15, // Green-cyan range
//             0.8,
//             0.3 + Math.random() * 0.4
//           ),
//           transparent: true,
//           opacity: 0.8
//         });
        
//         const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
//         node.position.set(
//           (Math.random() - 0.5) * 400,
//           (Math.random() - 0.5) * 300,
//           (Math.random() - 0.5) * 200
//         );
        
//         node.userData = {
//           originalPosition: node.position.clone(),
//           speed: 0.1 + Math.random() * 0.2,
//           amplitude: 5 + Math.random() * 12,
//           pulseSpeed: 1 + Math.random() * 2
//         };
        
//         nodes.push(node);
//         group.add(node);
//       }
      
//       // Create connections
//       for (let i = 0; i < nodes.length; i++) {
//         for (let j = i + 1; j < nodes.length; j++) {
//           const distance = nodes[i].position.distanceTo(nodes[j].position);
//           if (distance < 85 && Math.random() > 0.82) {
//             const geometry = new THREE.BufferGeometry().setFromPoints([
//               nodes[i].position,
//               nodes[j].position
//             ]);
            
//             const material = new THREE.LineBasicMaterial({
//               color: new THREE.Color().setHSL(0.18, 0.6, 0.5),
//               transparent: true,
//               opacity: 0.25
//             });
            
//             const line = new THREE.Line(geometry, material);
//             line.userData = { nodeA: nodes[i], nodeB: nodes[j] };
//             connections.push(line);
//             group.add(line);
//           }
//         }
//       }
      
//       group.userData = { nodes, connections };
//       return group;
//     };

//     // Create floating energy orbs
//     const createEnergyOrbs = () => {
//       const group = new THREE.Group();
      
//       for (let i = 0; i < 15; i++) {
//         const size = 2 + Math.random() * 5;
//         const orbGeometry = new THREE.SphereGeometry(size, 32, 32);
        
//         const orbMaterial = new THREE.MeshBasicMaterial({
//           color: new THREE.Color().setHSL(
//             0.55 + Math.random() * 0.15, // Blue-purple range
//             0.8,
//             0.6
//           ),
//           transparent: true,
//           opacity: 0.15
//         });
        
//         const orb = new THREE.Mesh(orbGeometry, orbMaterial);
//         orb.position.set(
//           (Math.random() - 0.5) * 350,
//           (Math.random() - 0.5) * 250,
//           (Math.random() - 0.5) * 180
//         );
        
//         // Add inner glow
//         const glowGeometry = new THREE.SphereGeometry(size * 0.7, 16, 16);
//         const glowMaterial = new THREE.MeshBasicMaterial({
//           color: new THREE.Color().setHSL(0.18, 0.9, 0.7),
//           transparent: true,
//           opacity: 0.3
//         });
        
//         const glow = new THREE.Mesh(glowGeometry, glowMaterial);
//         orb.add(glow);
        
//         orb.userData = {
//           originalPosition: orb.position.clone(),
//           speed: 0.3 + Math.random() * 0.4,
//           amplitude: 15 + Math.random() * 25,
//           rotationSpeed: 0.01 + Math.random() * 0.02
//         };
        
//         group.add(orb);
//       }
      
//       return group;
//     };

//     // Create particle streams
//     const createParticleStreams = () => {
//       const group = new THREE.Group();
      
//       for (let stream = 0; stream < 6; stream++) {
//         const streamGeometry = new THREE.BufferGeometry();
//         const streamParticles = 60;
//         const positions = new Float32Array(streamParticles * 3);
//         const colors = new Float32Array(streamParticles * 3);
//         const sizes = new Float32Array(streamParticles);
        
//         for (let i = 0; i < streamParticles; i++) {
//           const angle = (stream / 6) * Math.PI * 2;
//           const radius = 120 + Math.random() * 60;
          
//           positions[i * 3] = Math.cos(angle) * radius;
//           positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
//           positions[i * 3 + 2] = Math.sin(angle) * radius;
          
//           const hue = stream % 3 === 0 ? 0.18 : stream % 3 === 1 ? 0.55 : 0.75;
//           const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
          
//           colors[i * 3] = color.r;
//           colors[i * 3 + 1] = color.g;
//           colors[i * 3 + 2] = color.b;
          
//           sizes[i] = Math.random() * 3 + 1;
//         }
        
//         streamGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//         streamGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
//         streamGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
//         const streamMaterial = new THREE.PointsMaterial({
//           size: 2,
//           vertexColors: true,
//           transparent: true,
//           opacity: 0.8,
//           sizeAttenuation: true,
//           blending: THREE.AdditiveBlending
//         });
        
//         const streamPoints = new THREE.Points(streamGeometry, streamMaterial);
//         streamPoints.userData = { stream };
//         group.add(streamPoints);
//       }
      
//       return group;
//     };

//     const neuralNetwork = createNeuralNetwork();
//     const energyOrbs = createEnergyOrbs();
//     const particleStreams = createParticleStreams();
    
//     // Enhanced lighting
//     const ambientLight = new THREE.AmbientLight(0x1a3a5c, 0.3);
//     const directionalLight = new THREE.DirectionalLight(0x00ff87, 0.5);
//     directionalLight.position.set(50, 100, 50);
    
//     const spotLight = new THREE.SpotLight(0x0ea5e9, 0.8, 200, Math.PI / 6, 0.3, 1);
//     spotLight.position.set(0, 150, 100);
//     spotLight.target.position.set(0, 0, 0);
    
//     scene.add(ambientLight);
//     scene.add(directionalLight);
//     scene.add(spotLight);
//     scene.add(neuralNetwork);
//     scene.add(energyOrbs);
//     scene.add(particleStreams);

//     // Mouse interaction
//     const handleMouseMove = (event) => {
//       mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Enhanced animation loop
//     const animate = () => {
//       if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
//       const time = Date.now() * 0.001;
      
//       // Animate neural network
//       if (neuralNetwork && neuralNetwork.userData) {
//         const { nodes, connections } = neuralNetwork.userData;
        
//         if (nodes) {
//           nodes.forEach((node, index) => {
//             const userData = node.userData;
//             node.position.y = userData.originalPosition.y + 
//               Math.sin(time * userData.speed + index) * userData.amplitude;
//             node.position.x = userData.originalPosition.x + 
//               Math.cos(time * userData.speed * 0.7 + index) * userData.amplitude * 0.3;
            
//             const scale = 1 + Math.sin(time * userData.pulseSpeed + index) * 0.3;
//             node.scale.setScalar(scale);
            
//             const hue = (time * 0.1 + index * 0.1) % 1;
//             node.material.color.setHSL(0.15 + hue * 0.1, 0.8, 0.5);
//           });
//         }
        
//         if (connections) {
//           connections.forEach(connection => {
//             const positions = connection.geometry.attributes.position.array;
//             positions[0] = connection.userData.nodeA.position.x;
//             positions[1] = connection.userData.nodeA.position.y;
//             positions[2] = connection.userData.nodeA.position.z;
//             positions[3] = connection.userData.nodeB.position.x;
//             positions[4] = connection.userData.nodeB.position.y;
//             positions[5] = connection.userData.nodeB.position.z;
//             connection.geometry.attributes.position.needsUpdate = true;
            
//             connection.material.opacity = 0.1 + Math.sin(time * 2) * 0.15;
//           });
//         }
        
//         neuralNetwork.rotation.y = time * 0.02;
//       }
      
//       // Animate energy orbs
//       if (energyOrbs) {
//         energyOrbs.children.forEach((orb, index) => {
//           const userData = orb.userData;
//           if (userData) {
//             orb.position.y = userData.originalPosition.y + 
//               Math.sin(time * userData.speed + index) * userData.amplitude;
//             orb.position.x = userData.originalPosition.x + 
//               Math.cos(time * userData.speed * 0.6 + index) * userData.amplitude * 0.5;
            
//             orb.rotation.x += userData.rotationSpeed;
//             orb.rotation.y += userData.rotationSpeed * 0.7;
            
//             const breathe = 1 + Math.sin(time * 2 + index) * 0.2;
//             orb.scale.setScalar(breathe);
//           }
//         });
//       }
      
//       // Animate particle streams
//       if (particleStreams) {
//         particleStreams.children.forEach((stream, streamIndex) => {
//           if (stream instanceof THREE.Points && stream.geometry && stream.geometry.attributes && stream.geometry.attributes.position) {
//             const positions = stream.geometry.attributes.position.array;
//             for (let i = 0; i < positions.length; i += 3) {
//               positions[i + 1] += (streamIndex % 2 === 0 ? 0.5 : -0.5);
//               if (Math.abs(positions[i + 1]) > 150) {
//                 positions[i + 1] = (streamIndex % 2 === 0 ? -150 : 150);
//               }
//             }
//             stream.geometry.attributes.position.needsUpdate = true;
//             stream.rotation.y = time * 0.3 + streamIndex;
//           }
//         });
//       }
      
//       // Dynamic camera movement
//       const targetX = mouseRef.current.x * 20;
//       const targetY = mouseRef.current.y * 10;
      
//       camera.position.x += (targetX - camera.position.x) * 0.03;
//       camera.position.y += (targetY - camera.position.y) * 0.03;
//       camera.lookAt(0, 0, 0);
      
//       camera.position.z = 120 + Math.sin(time * 0.5) * 10;
      
//       renderer.render(scene, camera);
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();
//     setIsLoaded(true);

//     const handleResize = () => {
//       if (!camera || !renderer) return;
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       if (renderer) {
//         renderer.dispose();
//       }
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative w-full min-h-screen overflow-hidden"
//       style={{
//         background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 30%, #000000 70%)',
//       }}
//     >
//       <canvas 
//         ref={canvasRef} 
//         className="absolute inset-0 w-full h-full"
//         style={{ zIndex: 1 }}
//       />
      
//       {/* Dynamic lighting effects */}
//       <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
//         <div 
//           className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-full"
//           style={{
//             background: 'radial-gradient(ellipse at top, rgba(0, 255, 135, 0.15) 0%, rgba(0, 255, 135, 0.08) 30%, rgba(14, 165, 233, 0.05) 60%, transparent 80%)',
//             filter: 'blur(80px)',
//             animation: 'pulse 4s ease-in-out infinite'
//           }}
//         />
        
//         <div 
//           className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0.06) 40%, transparent 70%)',
//             filter: 'blur(60px)',
//             animation: 'float 6s ease-in-out infinite'
//           }}
//         />
        
//         <div 
//           className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
//             filter: 'blur(40px)',
//             animation: 'float 8s ease-in-out infinite reverse'
//           }}
//         />
//       </div>
      
//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-4 sm:px-6 py-8">
        
//         {/* Header */}
//         <div className="mb-8 sm:mb-12 mt-16">
//           <h1 
//             className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 transition-all duration-2000 ${
//               textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//             }`}
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               background: 'linear-gradient(135deg, #00ff87 0%, #0ea5e9 50%, #8b5cf6 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               textShadow: '0 0 80px rgba(0, 255, 135, 0.5)',
//               letterSpacing: '-0.02em',
//               lineHeight: '0.9'
//             }}
//           >
//             ABOUT THE EVENT
//           </h1>
          
//           <div 
//             className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 transition-all duration-2000 delay-300 ${
//               textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//             }`}
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.3em',
//               textShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
//             }}
//           >
//             NEURAL INNOVATION PROTOCOL
//           </div>
//         </div>
        
//         {/* Terminal Window */}
//         <div 
//           className="mb-12 h-64 sm:mb-16 w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden"
//           style={{
//             background: 'rgba(0, 0, 0, 0.4)',
//             backdropFilter: 'blur(30px)',
//             border: '1px solid rgba(0, 255, 170, 0.3)',
//             boxShadow: '0 20px 60px rgba(0, 255, 170, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
//           }}
//         >
//           <div 
//             className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3"
//             style={{ 
//               background: 'rgba(0, 0, 0, 0.3)',
//               borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
//             }}
//           >
//             <div className="flex space-x-2">
//               <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full shadow-lg shadow-red-500/30"></div>
//               <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/30"></div>
//               <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full shadow-lg shadow-green-500/30"></div>
//             </div>
//             <div 
//               className="text-xs font-mono opacity-80"
//               style={{ 
//                 color: '#00ffaa',
//                 textShadow: '0 0 10px rgba(0, 255, 170, 0.5)'
//               }}
//             >
//               about-system@terminal:~$
//             </div>
//           </div>
          
//           <div 
//             className="p-3 sm:p-4 h-44 sm:h-56 overflow-hidden"
//             style={{ 
//               fontFamily: 'SF Mono, Monaco, Consolas, monospace', 
//               fontSize: '13px',
//               lineHeight: '1.5'
//             }}
//           >
//             {terminalLines.map((line, index) => (
//               <div 
//                 key={index} 
//                 className="mb-1 opacity-90 text-xs"
//                 style={{
//                   color: '#00ffaa',
//                   textShadow: '0 0 8px rgba(0, 255, 170, 0.4)'
//                 }}
//               >
//                 {line}
//               </div>
//             ))}
//             <div 
//               className="flex items-center text-xs"
//               style={{
//                 color: '#00ffaa',
//                 textShadow: '0 0 8px rgba(0, 255, 170, 0.4)'
//               }}
//             >
//               <span className="mr-1 opacity-70">{'>'}</span>
//               <span>{currentCommand}</span>
//               <span 
//                 className="w-1.5 h-3 sm:h-4 ml-1"
//                 style={{ 
//                   display: 'inline-block',
//                   background: '#00ffaa',
//                   boxShadow: '0 0 10px rgba(0, 255, 170, 0.8)',
//                   animation: 'pulse 1s infinite'
//                 }}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Main About Content */}
//         <div className={`max-w-6xl mx-auto mb-16 transition-all duration-2000 delay-600 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <div 
//             className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-100 leading-relaxed max-w-4xl mx-auto"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.02em'
//             }}
//           >
//             Tired of boring code marathons with no thrill? Want to build, break, and brag in just 24 hours?
//             Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 font-semibold">VulnVANGUARD</span> – where 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold"> caffeine meets creativity</span>, and 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500 font-semibold"> chaos turns into code!</span>
//           </div>
//         </div>

//         {/* Feature Sections Grid */}
//         <div className={`max-w-7xl mx-auto mb-20 transition-all duration-2000 delay-900 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//             {aboutSections.map((section, index) => (
//               <div 
//                 key={index}
//                 className={`group relative p-8 rounded-3xl backdrop-blur-lg border border-opacity-20 transition-all duration-700 hover:scale-105 cursor-pointer ${
//                   activeSection === index ? 'scale-105' : ''
//                 }`}
//                 style={{
//                   background: `rgba(15,23,42,0.6)`,
//                   borderColor: section.color,
//                   boxShadow: activeSection === index ? `0 20px 40px ${section.color}30` : '0 10px 20px rgba(0,0,0,0.2)'
//                 }}
//               >
//                 <div className="flex items-center mb-6">
//                   <div 
//                     className="text-4xl mr-4"
//                     style={{ 
//                       filter: `drop-shadow(0 0 15px ${section.color}60)`
//                     }}
//                   >
//                     {section.icon}
//                   </div>
//                   <div>
//                     <h3 
//                       className="text-2xl font-bold mb-2"
//                       style={{ color: section.color }}
//                     >
//                       {section.title}
//                     </h3>
//                     <p className="text-gray-400 text-sm">{section.description}</p>
//                   </div>
//                 </div>
//                 <p 
//                   className="text-gray-300 text-base leading-relaxed"
//                   style={{
//                     fontFamily: 'system-ui, -apple-system, sans-serif'
//                   }}
//                 >
//                   {section.content}
//                 </p>
//                 <div 
//                   className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
//                   style={{ background: `linear-gradient(135deg, ${section.color}20, transparent)` }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Event Highlights */}
//         <div className={`max-w-7xl mx-auto mb-20 transition-all duration-2000 delay-1200 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <h2 
//             className="text-3xl md:text-4xl font-bold mb-12 text-center"
//             style={{
//               background: 'linear-gradient(135deg, #ffffff, #00ff87)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}
//           >
//             EVENT HIGHLIGHTS
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "🧠 Tech Quiz Battles",
//                 description: "Separate the curious from the committed with brain-bending challenges",
//                 color: "#00ff87"
//               },
//               {
//                 title: "⚙️ Real-World Problems", 
//                 description: "Push your creativity to solve problems that actually matter",
//                 color: "#0ea5e9"
//               },
//               {
//                 title: "🚀 Enhancement Rounds",
//                 description: "Transform your MVP from good to absolutely incredible",
//                 color: "#8b5cf6"
//               },
//               {
//                 title: "🎨 Midnight Mini-Games",
//                 description: "Tech Pictionary and Coding Races because fun fuels innovation",
//                 color: "#06b6d4"
//               },
//               {
//                 title: "🎁 Exciting Prizes",
//                 description: "Amazing rewards for top teams - we're serious about the goodies",
//                 color: "#f59e0b"
//               },
//               {
//                 title: "🤝 Expert Mentorship",
//                 description: "Industry mentors guide you through every step of your journey",
//                 color: "#ef4444"
//               }
//             ].map((highlight, index) => (
//               <div 
//                 key={index}
//                 className="group relative p-6 rounded-2xl backdrop-blur-lg border border-opacity-20 transition-all duration-500 hover:scale-105"
//                 style={{
//                   background: 'rgba(15,23,42,0.4)',
//                   borderColor: highlight.color
//                 }}
//               >
//                 <h4 
//                   className="text-lg font-semibold mb-3"
//                   style={{ color: highlight.color }}
//                 >
//                   {highlight.title}
//                 </h4>
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   {highlight.description}
//                 </p>
//                 <div 
//                   className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
//                   style={{ background: highlight.color }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Timeline Section */}
//         <div className={`max-w-6xl mx-auto mb-20 transition-all duration-2000 delay-1500 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
          
          
//           <div className="space-y-8">
//             {[
             
//             ].map((event, index) => (
//               <div key={index} className="flex items-start space-x-6">
//                 <div 
//                   className="flex-shrink-0 w-32 text-right font-mono text-sm font-bold py-2"
//                   style={{ color: event.color }}
//                 >
//                   {event.time}
//                 </div>
//                 <div className="flex-shrink-0 mt-2">
//                   <div 
//                     className="w-4 h-4 rounded-full"
//                     style={{ background: event.color, boxShadow: `0 0 20px ${event.color}50` }}
//                   />
//                 </div>
//                 <div className="flex-1">
//                   <h4 
//                     className="text-xl font-semibold mb-2"
//                     style={{ color: event.color }}
//                   >
//                     {event.title}
//                   </h4>
//                   <p className="text-gray-300 leading-relaxed">
//                     {event.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className={`max-w-5xl mx-auto mb-20 transition-all duration-2000 delay-1800 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <h2 
//             className="text-3xl md:text-4xl font-bold mb-12 text-center"
//             style={{
//               background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}
//           >
//             BY THE NUMBERS
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               { label: 'Hours of Innovation', value: '24', color: '#00ff87', icon: '⏰' },
//               { label: 'Days & Nights', value: '2', color: '#0ea5e9', icon: '🌙' },
//               { label: 'Rounds of Excellence', value: '3', color: '#8b5cf6', icon: '🏆' },
//               { label: 'Infinite Possibilities', value: '∞', color: '#06b6d4', icon: '💫' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div 
//                   className="text-4xl mb-4 opacity-80 transition-all duration-300 group-hover:scale-110"
//                   style={{ 
//                     filter: `drop-shadow(0 0 15px ${stat.color}60)`
//                   }}
//                 >
//                   {stat.icon}
//                 </div>
                
//                 <div 
//                   className="text-5xl md:text-6xl font-black mb-3"
//                   style={{ 
//                     color: stat.color,
//                     fontFamily: 'system-ui, -apple-system, sans-serif',
//                     textShadow: `0 0 30px ${stat.color}50`,
//                     letterSpacing: '-0.02em'
//                   }}
//                 >
//                   {stat.value}
//                 </div>
                
//                 <div 
//                   className="text-gray-400 text-sm uppercase tracking-wider"
//                   style={{ 
//                     fontFamily: 'system-ui, -apple-system, sans-serif'
//                   }}
//                 >
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className={`text-center mb-20 transition-all duration-2000 delay-2100 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <h2 
//             className="text-3xl md:text-4xl font-bold mb-8"
//             style={{
//               background: 'linear-gradient(135deg, #00ff87, #0ea5e9, #8b5cf6)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}
//           >
//             READY TO HACK THE FUTURE?
//           </h2>
          
//           <p 
//             className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif'
//             }}
//           >
//             Join us for 24 hours of <span className="text-emerald-400 font-semibold">pure innovation</span>, 
//             where your wildest ideas become <span className="text-cyan-400 font-semibold">working prototypes</span>, 
//             and ordinary developers become <span className="text-purple-400 font-semibold">extraordinary creators</span>.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <button
//               className="group relative px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
//               style={{
//                 background: 'linear-gradient(135deg, #00ff87, #0ea5e9)',
//                 color: 'black',
//                 fontFamily: 'system-ui, -apple-system, sans-serif',
//                 letterSpacing: '0.02em',
//                 boxShadow: '0 20px 40px rgba(0, 255, 135, 0.3)'
//               }}
//             >
//               <a
//                 href="https://www.srmist-ncr-gfg.club/Registration"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative z-10 block w-full h-full text-center"
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 REGISTER NOW
//               </a>
//             </button>
            
//             <button
//               className="group relative px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 border-2 border-cyan-400 text-cyan-400 hover:text-black overflow-hidden"
//               style={{
//                 fontFamily: 'system-ui, -apple-system, sans-serif',
//                 background: 'rgba(6, 182, 212, 0.1)',
//                 backdropFilter: 'blur(20px)'
//               }}
//             >
//               <a
//                 href="https://www.instagram.com/gfg_srmist_ncr/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative z-10 block w-full h-full text-center"
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 FOLLOW UPDATES
//               </a>
//             </button>
//           </div>
//         </div>

//         {/* Closing Statement */}
//         <div className={`text-center transition-all duration-2000 delay-2400 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <p 
//             className="text-2xl font-light text-gray-400 mb-4"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.02em'
//             }}
//           >
//             Come with an <span className="text-emerald-400 font-semibold">idea</span>.
//           </p>
//           <p 
//             className="text-2xl font-light text-gray-400"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.02em'
//             }}
//           >
//             Leave with a <span className="text-cyan-400 font-semibold">legacy</span>.
//           </p>
//         </div>
//       </div>
      
//       {/* Enhanced Styles */}
//       <style jsx>{`
//         @keyframes pulse {
//           0%, 100% { 
//             opacity: 0.15; 
//             transform: scale(1);
//           }
//           50% { 
//             opacity: 0.25; 
//             transform: scale(1.05);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% { 
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% { 
//             transform: translateY(-20px) rotate(5deg);
//           }
//         }
        
//         @keyframes hologram {
//           0%, 100% { 
//             filter: hue-rotate(0deg) brightness(1);
//           }
//           50% { 
//             filter: hue-rotate(180deg) brightness(1.2);
//           }
//         }
        
//         /* Enhanced scrollbar */
//         ::-webkit-scrollbar {
//           width: 12px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
//           border-radius: 6px;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(180deg, #00ff87, #0ea5e9);
//           border-radius: 6px;
//           border: 2px solid #0f172a;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(180deg, #22c55e, #06b6d4);
//         }
        
//         /* Custom selection */
//         ::selection {
//           background: rgba(0, 255, 135, 0.3);
//           color: white;
//         }
        
//         ::-moz-selection {
//           background: rgba(0, 255, 135, 0.3);
//           color: white;
//         }
        
//         /* Responsive design */
//         @media (max-width: 768px) {
//           .text-7xl { font-size: 3.5rem; }
//           .text-8xl { font-size: 4rem; }
//           .grid-cols-3 { grid-template-columns: 1fr; }
//           .text-5xl { font-size: 2.5rem; }
//           .text-6xl { font-size: 3rem; }
//         }
        
//         @media (max-width: 640px) {
//           .grid-cols-2 { grid-template-columns: 1fr; }
//           .text-7xl { font-size: 2.5rem; }
//           .text-8xl { font-size: 3rem; }
//           .text-3xl { font-size: 1.5rem; }
//           .text-4xl { font-size: 2rem; }
//         }
        
//         /* Glass morphism effects */
//         .glass {
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         /* Hover effects */
//         .hover-lift:hover {
//           transform: translateY(-8px) scale(1.02);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }
        
//         .hover-glow:hover {
//           filter: drop-shadow(0 0 20px rgba(0, 255, 135, 0.5));
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EpicHackathonAbout;
// export const AboutPage = EpicHackathonAbout;





// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { SRGBColorSpace } from 'three';

// const EpicHackathonAbout = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const sceneRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cameraRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const animationRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [textAnimation, setTextAnimation] = useState(false);
//   const [terminalLines, setTerminalLines] = useState([]);
//   const [currentCommand, setCurrentCommand] = useState('');
//   const [activeSection, setActiveSection] = useState(0);

//   const aboutSections = [
//     {
//       title: "VulnVANGUARD",
//       description: "Where security meets innovation in the digital battleground",
//       icon: "🛡️",
//       color: "#00ff87",
//       content: "VulnVANGUARD isn't just another hackathon – it's the ultimate cybersecurity challenge where brilliant minds collide to identify, fix, and fortify digital systems against real-world threats."
//     },
//     {
//       title: "Cyber Security Focus",
//       description: "24 hours of intensive security challenges",
//       icon: "🔒",
//       color: "#0ea5e9", 
//       content: "This 24-hour cybersecurity marathon is loaded with Linux challenges, bug hunting, vulnerability assessment, and system hardening - designed to test your security prowess."
//     },
//     {
//       title: "Bug Hunter's Paradise",
//       description: "Where vulnerabilities meet their match",
//       icon: "🐛",
//       color: "#8b5cf6",
//       content: "Sleep is optional. Security isn't. If you're ready to prove your mettle, hunt down critical bugs, and build fortress-like systems - this is your battlefield."
//     },
//     {
//       title: "Elite Security Community",
//       description: "Join the vanguard of cybersecurity warriors.",
//       icon: "⚔️",
//       color: "#06b6d4",
//       content: "It's more than an event. It's 24 hours of hacking, hardening, and defending. Expert mentors will guide you through every security challenge."
//     }
//   ];

//   useEffect(() => {
//     const sectionInterval = setInterval(() => {
//       setActiveSection(prev => (prev + 1) % aboutSections.length);
//     }, 4000);

//     setTimeout(() => setTextAnimation(true), 200);

//     return () => clearInterval(sectionInterval);
//   }, [aboutSections.length]);

//   const terminalCommands = [
//     '🎯 Initializing VulnVANGUARD system...',
//     '🔧 Loading neural pathways for innovation...',
//     '💡 Connecting brilliant minds across dimensions...',
//     '⚡ Activating 24-hour reality distortion field...',
//     '🚀 Preparing enhancement protocols...',
//     '🎨 Loading midnight mini-game archives...',
//     '🏆 Calibrating prize distribution algorithms...',
//     '🤝 Establishing mentor-participant neural links...',
//     '✨ System ready. Innovation mode: ACTIVATED.',
//   ];

//   // Improved terminal animation
//   useEffect(() => {
//     let commandIndex = 0;
//     let isTyping = false;
//     let typeTimeout;
//     let nextCommandTimeout;

//     const typeCommand = (command) => {
//       if (isTyping) return;
      
//       isTyping = true;
//       let charIndex = 0;
//       setCurrentCommand('');

//       const typeChar = () => {
//         if (charIndex < command.length) {
//           setCurrentCommand(command.slice(0, charIndex + 1));
//           charIndex++;
//           typeTimeout = setTimeout(typeChar, 30); // Faster typing speed
//         } else {
//           // Command finished typing
//           setTimeout(() => {
//             setTerminalLines(prev => [...prev, `> ${command}`]);
//             setCurrentCommand('');
//             isTyping = false;
            
//             // Move to next command after short delay
//             commandIndex = (commandIndex + 1) % terminalCommands.length;
            
//             // Clear terminal after all commands are shown
//             if (commandIndex === 0 && terminalLines.length >= terminalCommands.length - 1) {
//               setTimeout(() => {
//                 setTerminalLines([]);
//               }, 1500);
//             }
            
//             nextCommandTimeout = setTimeout(() => {
//               if (commandIndex < terminalCommands.length) {
//                 typeCommand(terminalCommands[commandIndex]);
//               }
//             }, 200);
//           }, 500);
//         }
//       };

//       typeChar();
//     };

//     // Start terminal animation immediately
//     typeCommand(terminalCommands[0]);

//     return () => {
//       clearTimeout(typeTimeout);
//       clearTimeout(nextCommandTimeout);
//     };
//   }, [terminalCommands, terminalLines.length]);

//   useEffect(() => {
//     if (!containerRef.current || !canvasRef.current) return;

//     // Enhanced scene setup
//     const scene = new THREE.Scene();
//     scene.fog = new THREE.Fog(0x0a0f1c, 50, 300);
    
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer({ 
//       canvas: canvasRef.current, 
//       alpha: true, 
//       antialias: true,
//       powerPreference: "high-performance"
//     });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.shadowMap.enabled = true;
//     renderer.shadowMap.type = THREE.PCFSoftShadowMap;
//     renderer.outputColorSpace = SRGBColorSpace;
//     renderer.toneMapping = THREE.ACESFilmicToneMapping;
//     renderer.toneMappingExposure = 1.2;
    
//     sceneRef.current = scene;
//     rendererRef.current = renderer;
//     cameraRef.current = camera;
    
//     camera.position.set(0, 0, 120);

//     // Create neural network particles
//     const createNeuralNetwork = () => {
//       const group = new THREE.Group();
//       const particleCount = 250;
//       const connections = [];
      
//       // Create nodes
//       const nodeGeometry = new THREE.SphereGeometry(0.6, 16, 16);
//       const nodes = [];
      
//       for (let i = 0; i < particleCount; i++) {
//         const nodeMaterial = new THREE.MeshBasicMaterial({
//           color: new THREE.Color().setHSL(
//             0.15 + Math.random() * 0.15, // Green-cyan range
//             0.8,
//             0.3 + Math.random() * 0.4
//           ),
//           transparent: true,
//           opacity: 0.8
//         });
        
//         const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
//         node.position.set(
//           (Math.random() - 0.5) * 400,
//           (Math.random() - 0.5) * 300,
//           (Math.random() - 0.5) * 200
//         );
        
//         node.userData = {
//           originalPosition: node.position.clone(),
//           speed: 0.1 + Math.random() * 0.2,
//           amplitude: 5 + Math.random() * 12,
//           pulseSpeed: 1 + Math.random() * 2
//         };
        
//         nodes.push(node);
//         group.add(node);
//       }
      
//       // Create connections
//       for (let i = 0; i < nodes.length; i++) {
//         for (let j = i + 1; j < nodes.length; j++) {
//           const distance = nodes[i].position.distanceTo(nodes[j].position);
//           if (distance < 85 && Math.random() > 0.82) {
//             const geometry = new THREE.BufferGeometry().setFromPoints([
//               nodes[i].position,
//               nodes[j].position
//             ]);
            
//             const material = new THREE.LineBasicMaterial({
//               color: new THREE.Color().setHSL(0.18, 0.6, 0.5),
//               transparent: true,
//               opacity: 0.25
//             });
            
//             const line = new THREE.Line(geometry, material);
//             line.userData = { nodeA: nodes[i], nodeB: nodes[j] };
//             connections.push(line);
//             group.add(line);
//           }
//         }
//       }
      
//       group.userData = { nodes, connections };
//       return group;
//     };

//     // Create floating energy orbs
//     const createEnergyOrbs = () => {
//       const group = new THREE.Group();
      
//       for (let i = 0; i < 15; i++) {
//         const size = 2 + Math.random() * 5;
//         const orbGeometry = new THREE.SphereGeometry(size, 32, 32);
        
//         const orbMaterial = new THREE.MeshBasicMaterial({
//           color: new THREE.Color().setHSL(
//             0.55 + Math.random() * 0.15, // Blue-purple range
//             0.8,
//             0.6
//           ),
//           transparent: true,
//           opacity: 0.15
//         });
        
//         const orb = new THREE.Mesh(orbGeometry, orbMaterial);
//         orb.position.set(
//           (Math.random() - 0.5) * 350,
//           (Math.random() - 0.5) * 250,
//           (Math.random() - 0.5) * 180
//         );
        
//         // Add inner glow
//         const glowGeometry = new THREE.SphereGeometry(size * 0.7, 16, 16);
//         const glowMaterial = new THREE.MeshBasicMaterial({
//           color: new THREE.Color().setHSL(0.18, 0.9, 0.7),
//           transparent: true,
//           opacity: 0.3
//         });
        
//         const glow = new THREE.Mesh(glowGeometry, glowMaterial);
//         orb.add(glow);
        
//         orb.userData = {
//           originalPosition: orb.position.clone(),
//           speed: 0.3 + Math.random() * 0.4,
//           amplitude: 15 + Math.random() * 25,
//           rotationSpeed: 0.01 + Math.random() * 0.02
//         };
        
//         group.add(orb);
//       }
      
//       return group;
//     };

//     // Create particle streams
//     const createParticleStreams = () => {
//       const group = new THREE.Group();
      
//       for (let stream = 0; stream < 6; stream++) {
//         const streamGeometry = new THREE.BufferGeometry();
//         const streamParticles = 60;
//         const positions = new Float32Array(streamParticles * 3);
//         const colors = new Float32Array(streamParticles * 3);
//         const sizes = new Float32Array(streamParticles);
        
//         for (let i = 0; i < streamParticles; i++) {
//           const angle = (stream / 6) * Math.PI * 2;
//           const radius = 120 + Math.random() * 60;
          
//           positions[i * 3] = Math.cos(angle) * radius;
//           positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
//           positions[i * 3 + 2] = Math.sin(angle) * radius;
          
//           const hue = stream % 3 === 0 ? 0.18 : stream % 3 === 1 ? 0.55 : 0.75;
//           const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
          
//           colors[i * 3] = color.r;
//           colors[i * 3 + 1] = color.g;
//           colors[i * 3 + 2] = color.b;
          
//           sizes[i] = Math.random() * 3 + 1;
//         }
        
//         streamGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//         streamGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
//         streamGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
//         const streamMaterial = new THREE.PointsMaterial({
//           size: 2,
//           vertexColors: true,
//           transparent: true,
//           opacity: 0.8,
//           sizeAttenuation: true,
//           blending: THREE.AdditiveBlending
//         });
        
//         const streamPoints = new THREE.Points(streamGeometry, streamMaterial);
//         streamPoints.userData = { stream };
//         group.add(streamPoints);
//       }
      
//       return group;
//     };

//     const neuralNetwork = createNeuralNetwork();
//     const energyOrbs = createEnergyOrbs();
//     const particleStreams = createParticleStreams();
    
//     // Enhanced lighting
//     const ambientLight = new THREE.AmbientLight(0x1a3a5c, 0.3);
//     const directionalLight = new THREE.DirectionalLight(0x00ff87, 0.5);
//     directionalLight.position.set(50, 100, 50);
    
//     const spotLight = new THREE.SpotLight(0x0ea5e9, 0.8, 200, Math.PI / 6, 0.3, 1);
//     spotLight.position.set(0, 150, 100);
//     spotLight.target.position.set(0, 0, 0);
    
//     scene.add(ambientLight);
//     scene.add(directionalLight);
//     scene.add(spotLight);
//     scene.add(neuralNetwork);
//     scene.add(energyOrbs);
//     scene.add(particleStreams);

//     // Mouse interaction
//     const handleMouseMove = (event) => {
//       mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
//     };

//     window.addEventListener('mousemove', handleMouseMove);

//     // Enhanced animation loop
//     const animate = () => {
//       if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
//       const time = Date.now() * 0.001;
      
//       // Animate neural network
//       if (neuralNetwork && neuralNetwork.userData) {
//         const { nodes, connections } = neuralNetwork.userData;
        
//         if (nodes) {
//           nodes.forEach((node, index) => {
//             const userData = node.userData;
//             node.position.y = userData.originalPosition.y + 
//               Math.sin(time * userData.speed + index) * userData.amplitude;
//             node.position.x = userData.originalPosition.x + 
//               Math.cos(time * userData.speed * 0.7 + index) * userData.amplitude * 0.3;
            
//             const scale = 1 + Math.sin(time * userData.pulseSpeed + index) * 0.3;
//             node.scale.setScalar(scale);
            
//             const hue = (time * 0.1 + index * 0.1) % 1;
//             node.material.color.setHSL(0.15 + hue * 0.1, 0.8, 0.5);
//           });
//         }
        
//         if (connections) {
//           connections.forEach(connection => {
//             const positions = connection.geometry.attributes.position.array;
//             positions[0] = connection.userData.nodeA.position.x;
//             positions[1] = connection.userData.nodeA.position.y;
//             positions[2] = connection.userData.nodeA.position.z;
//             positions[3] = connection.userData.nodeB.position.x;
//             positions[4] = connection.userData.nodeB.position.y;
//             positions[5] = connection.userData.nodeB.position.z;
//             connection.geometry.attributes.position.needsUpdate = true;
            
//             connection.material.opacity = 0.1 + Math.sin(time * 2) * 0.15;
//           });
//         }
        
//         neuralNetwork.rotation.y = time * 0.02;
//       }
      
//       // Animate energy orbs
//       if (energyOrbs) {
//         energyOrbs.children.forEach((orb, index) => {
//           const userData = orb.userData;
//           if (userData) {
//             orb.position.y = userData.originalPosition.y + 
//               Math.sin(time * userData.speed + index) * userData.amplitude;
//             orb.position.x = userData.originalPosition.x + 
//               Math.cos(time * userData.speed * 0.6 + index) * userData.amplitude * 0.5;
            
//             orb.rotation.x += userData.rotationSpeed;
//             orb.rotation.y += userData.rotationSpeed * 0.7;
            
//             const breathe = 1 + Math.sin(time * 2 + index) * 0.2;
//             orb.scale.setScalar(breathe);
//           }
//         });
//       }
      
//       // Animate particle streams
//       if (particleStreams) {
//         particleStreams.children.forEach((stream, streamIndex) => {
//           if (stream instanceof THREE.Points && stream.geometry && stream.geometry.attributes && stream.geometry.attributes.position) {
//             const positions = stream.geometry.attributes.position.array;
//             for (let i = 0; i < positions.length; i += 3) {
//               positions[i + 1] += (streamIndex % 2 === 0 ? 0.5 : -0.5);
//               if (Math.abs(positions[i + 1]) > 150) {
//                 positions[i + 1] = (streamIndex % 2 === 0 ? -150 : 150);
//               }
//             }
//             stream.geometry.attributes.position.needsUpdate = true;
//             stream.rotation.y = time * 0.3 + streamIndex;
//           }
//         });
//       }
      
//       // Dynamic camera movement
//       const targetX = mouseRef.current.x * 20;
//       const targetY = mouseRef.current.y * 10;
      
//       camera.position.x += (targetX - camera.position.x) * 0.03;
//       camera.position.y += (targetY - camera.position.y) * 0.03;
//       camera.lookAt(0, 0, 0);
      
//       camera.position.z = 120 + Math.sin(time * 0.5) * 10;
      
//       renderer.render(scene, camera);
//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();
//     setIsLoaded(true);

//     const handleResize = () => {
//       if (!camera || !renderer) return;
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('resize', handleResize);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       if (renderer) {
//         renderer.dispose();
//       }
//     };
//   }, []);

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative w-full min-h-screen overflow-hidden"
//       style={{
//         background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 30%, #000000 70%)',
//       }}
//     >
//       <canvas 
//         ref={canvasRef} 
//         className="absolute inset-0 w-full h-full"
//         style={{ zIndex: 1 }}
//       />
      
//       {/* Dynamic lighting effects */}
//       <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
//         <div 
//           className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-full"
//           style={{
//             background: 'radial-gradient(ellipse at top, rgba(0, 255, 135, 0.15) 0%, rgba(0, 255, 135, 0.08) 30%, rgba(14, 165, 233, 0.05) 60%, transparent 80%)',
//             filter: 'blur(80px)',
//             animation: 'pulse 4s ease-in-out infinite'
//           }}
//         />
        
//         <div 
//           className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0.06) 40%, transparent 70%)',
//             filter: 'blur(60px)',
//             animation: 'float 6s ease-in-out infinite'
//           }}
//         />
        
//         <div 
//           className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
//             filter: 'blur(40px)',
//             animation: 'float 8s ease-in-out infinite reverse'
//           }}
//         />
//       </div>
      
//       {/* Content */}
//       <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-4 sm:px-6 py-8">
        
//         {/* Header */}
//         <div className="mb-8 sm:mb-12 mt-16">
//           <h1 
//             className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 transition-all duration-2000 ${
//               textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//             }`}
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               background: 'linear-gradient(135deg, #00ff87 0%, #0ea5e9 50%, #8b5cf6 100%)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text',
//               textShadow: '0 0 80px rgba(0, 255, 135, 0.5)',
//               letterSpacing: '-0.02em',
//               lineHeight: '0.9'
//             }}
//           >
//             ABOUT THE EVENT
//           </h1>
          
//           <div 
//             className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 transition-all duration-2000 delay-300 ${
//               textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//             }`}
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.3em',
//               textShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
//             }}
//           >
//             NEURAL INNOVATION PROTOCOL
//           </div>
//         </div>
        
//         {/* Improved Terminal Window */}
//         <div 
//           className="mb-12 sm:mb-16 w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden"
//           style={{
//             background: 'rgba(0, 0, 0, 0.4)',
//             backdropFilter: 'blur(30px)',
//             border: '1px solid rgba(0, 255, 170, 0.3)',
//             boxShadow: '0 20px 60px rgba(0, 255, 170, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
//             minHeight: '280px'
//           }}
//         >
//           <div 
//             className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3"
//             style={{ 
//               background: 'rgba(0, 0, 0, 0.3)',
//               borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
//             }}
//           >
//             <div className="flex space-x-2">
//               <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full shadow-lg shadow-red-500/30"></div>
//               <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/30"></div>
//               <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full shadow-lg shadow-green-500/30"></div>
//             </div>
//             <div 
//               className="text-xs font-mono opacity-80"
//               style={{ 
//                 color: '#00ffaa',
//                 textShadow: '0 0 10px rgba(0, 255, 170, 0.5)'
//               }}
//             >
//               vulnvanguard@terminal:~$
//             </div>
//           </div>
          
//           <div 
//             className="p-3 sm:p-4 overflow-hidden"
//             style={{ 
//               fontFamily: 'SF Mono, Monaco, Consolas, monospace', 
//               fontSize: '13px',
//               lineHeight: '1.6',
//               minHeight: '240px',
//               maxHeight: '240px'
//             }}
//           >
//             <div className="space-y-1">
//               {terminalLines.map((line, index) => (
//                 <div 
//                   key={index} 
//                   className="opacity-90 text-sm animate-fadeIn"
//                   style={{
//                     color: '#00ffaa',
//                     textShadow: '0 0 8px rgba(0, 255, 170, 0.4)',
//                     animation: `fadeIn 0.3s ease-in forwards`,
//                     animationDelay: `${index * 0.1}s`
//                   }}
//                 >
//                   {line}
//                 </div>
//               ))}
              
//               {currentCommand && (
//                 <div 
//                   className="flex items-center text-sm"
//                   style={{
//                     color: '#00ffaa',
//                     textShadow: '0 0 8px rgba(0, 255, 170, 0.4)'
//                   }}
//                 >
//                   <span className="mr-2 opacity-70">{'>'}</span>
//                   <span>{currentCommand}</span>
//                   <span 
//                     className="w-2 h-4 ml-1 animate-pulse"
//                     style={{ 
//                       display: 'inline-block',
//                       background: '#00ffaa',
//                       boxShadow: '0 0 10px rgba(0, 255, 170, 0.8)'
//                     }}
//                   />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Main About Content */}
//         <div className={`max-w-6xl mx-auto mb-16 transition-all duration-2000 delay-600 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <div 
//             className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-100 leading-relaxed max-w-4xl mx-auto"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.02em'
//             }}
//           >
//             Tired of boring code marathons with no thrill? Want to build, break, and brag in just 24 hours?
//             Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 font-semibold">VulnVANGUARD</span> – where 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold"> caffeine meets creativity</span>, and 
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500 font-semibold"> chaos turns into code!</span>
//           </div>
//         </div>

//         {/* Feature Sections Grid */}
//         <div className={`max-w-7xl mx-auto mb-20 transition-all duration-2000 delay-900 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
//             {aboutSections.map((section, index) => (
//               <div 
//                 key={index}
//                 className={`group relative p-8 rounded-3xl backdrop-blur-lg border border-opacity-20 transition-all duration-700 hover:scale-105 cursor-pointer ${
//                   activeSection === index ? 'scale-105' : ''
//                 }`}
//                 style={{
//                   background: `rgba(15,23,42,0.6)`,
//                   borderColor: section.color,
//                   boxShadow: activeSection === index ? `0 20px 40px ${section.color}30` : '0 10px 20px rgba(0,0,0,0.2)'
//                 }}
//               >
//                 <div className="flex items-center mb-6">
//                   <div 
//                     className="text-4xl mr-4"
//                     style={{ 
//                       filter: `drop-shadow(0 0 15px ${section.color}60)`
//                     }}
//                   >
//                     {section.icon}
//                   </div>
//                   <div>
//                     <h3 
//                       className="text-2xl font-bold mb-2"
//                       style={{ color: section.color }}
//                     >
//                       {section.title}
//                     </h3>
//                     <p className="text-gray-400 text-sm">{section.description}</p>
//                   </div>
//                 </div>
//                 <p 
//                   className="text-gray-300 text-base leading-relaxed"
//                   style={{
//                     fontFamily: 'system-ui, -apple-system, sans-serif'
//                   }}
//                 >
//                   {section.content}
//                 </p>
//                 <div 
//                   className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
//                   style={{ background: `linear-gradient(135deg, ${section.color}20, transparent)` }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Event Highlights */}
//         <div className={`max-w-7xl mx-auto mb-20 transition-all duration-2000 delay-1200 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <h2 
//             className="text-3xl md:text-4xl font-bold mb-12 text-center"
//             style={{
//               background: 'linear-gradient(135deg, #ffffff, #00ff87)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}
//           >
//             EVENT HIGHLIGHTS
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "🧠 Tech Quiz Battles",
//                 description: "Separate the curious from the committed with brain-bending challenges",
//                 color: "#00ff87"
//               },
//               {
//                 title: "⚙️ Real-World Problems", 
//                 description: "Push your creativity to solve problems that actually matter",
//                 color: "#0ea5e9"
//               },
//               {
//                 title: "🚀 Enhancement Rounds",
//                 description: "Transform your MVP from good to absolutely incredible",
//                 color: "#8b5cf6"
//               },
//               {
//                 title: "🎨 Midnight Mini-Games",
//                 description: "Tech Pictionary and Coding Races because fun fuels innovation",
//                 color: "#06b6d4"
//               },
//               {
//                 title: "🎁 Exciting Prizes",
//                 description: "Amazing rewards for top teams - we're serious about the goodies",
//                 color: "#f59e0b"
//               },
//               {
//                 title: "🤝 Expert Mentorship",
//                 description: "Industry mentors guide you through every step of your journey",
//                 color: "#ef4444"
//               }
//             ].map((highlight, index) => (
//               <div 
//                 key={index}
//                 className="group relative p-6 rounded-2xl backdrop-blur-lg border border-opacity-20 transition-all duration-500 hover:scale-105"
//                 style={{
//                   background: 'rgba(15,23,42,0.4)',
//                   borderColor: highlight.color
//                 }}
//               >
//                 <h4 
//                   className="text-lg font-semibold mb-3"
//                   style={{ color: highlight.color }}
//                 >
//                   {highlight.title}
//                 </h4>
//                 <p className="text-gray-300 text-sm leading-relaxed">
//                   {highlight.description}
//                 </p>
//                 <div 
//                   className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
//                   style={{ background: highlight.color }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className={`max-w-5xl mx-auto mb-20 transition-all duration-2000 delay-1500 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <h2 
//             className="text-3xl md:text-4xl font-bold mb-12 text-center"
//             style={{
//               background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}
//           >
//             BY THE NUMBERS
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               { label: 'Hours of Innovation', value: '24', color: '#00ff87', icon: '⏰' },
//               { label: 'Days & Nights', value: '2', color: '#0ea5e9', icon: '🌙' },
//               { label: 'Rounds of Excellence', value: '3', color: '#8b5cf6', icon: '🏆' },
//               { label: 'Infinite Possibilities', value: '∞', color: '#06b6d4', icon: '💫' }
//             ].map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div 
//                   className="text-4xl mb-4 opacity-80 transition-all duration-300 group-hover:scale-110"
//                   style={{ 
//                     filter: `drop-shadow(0 0 15px ${stat.color}60)`
//                   }}
//                 >
//                   {stat.icon}
//                 </div>
                
//                 <div 
//                   className="text-5xl md:text-6xl font-black mb-3"
//                   style={{ 
//                     color: stat.color,
//                     fontFamily: 'system-ui, -apple-system, sans-serif',
//                     textShadow: `0 0 30px ${stat.color}50`,
//                     letterSpacing: '-0.02em'
//                   }}
//                 >
//                   {stat.value}
//                 </div>
                
//                 <div 
//                   className="text-gray-400 text-sm uppercase tracking-wider"
//                   style={{ 
//                     fontFamily: 'system-ui, -apple-system, sans-serif'
//                   }}
//                 >
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Call to Action */}
//         <div className={`text-center mb-20 transition-all duration-2000 delay-1800 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <h2 
//             className="text-3xl md:text-4xl font-bold mb-8"
//             style={{
//               background: 'linear-gradient(135deg, #00ff87, #0ea5e9, #8b5cf6)',
//               WebkitBackgroundClip: 'text',
//               WebkitTextFillColor: 'transparent',
//               backgroundClip: 'text'
//             }}
//           >
//             READY TO HACK THE FUTURE?
//           </h2>
          
//           <p 
//             className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif'
//             }}
//           >
//             Join us for 24 hours of <span className="text-emerald-400 font-semibold">pure innovation</span>, 
//             where your wildest ideas become <span className="text-cyan-400 font-semibold">working prototypes</span>, 
//             and ordinary developers become <span className="text-purple-400 font-semibold">extraordinary creators</span>.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <button
//               className="group relative px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
//               style={{
//                 background: 'linear-gradient(135deg, #00ff87, #0ea5e9)',
//                 color: 'black',
//                 fontFamily: 'system-ui, -apple-system, sans-serif',
//                 letterSpacing: '0.02em',
//                 boxShadow: '0 20px 40px rgba(0, 255, 135, 0.3)'
//               }}
//             >
//               <a
//                 href="https://www.srmist-ncr-gfg.club/Registration"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative z-10 block w-full h-full text-center"
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 REGISTER NOW
//               </a>
//             </button>
            
//             <button
//               className="group relative px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 border-2 border-cyan-400 text-cyan-400 hover:text-black overflow-hidden"
//               style={{
//                 fontFamily: 'system-ui, -apple-system, sans-serif',
//                 background: 'rgba(6, 182, 212, 0.1)',
//                 backdropFilter: 'blur(20px)'
//               }}
//             >
//               <a
//                 href="https://www.instagram.com/gfg_srmist_ncr/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="relative z-10 block w-full h-full text-center"
//                 style={{ textDecoration: 'none', color: 'inherit' }}
//               >
//                 FOLLOW UPDATES
//               </a>
//             </button>
//           </div>
//         </div>

//         {/* Closing Statement */}
//         <div className={`text-center transition-all duration-2000 delay-2100 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <p 
//             className="text-2xl font-light text-gray-400 mb-4"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.02em'
//             }}
//           >
//             Come with an <span className="text-emerald-400 font-semibold">idea</span>.
//           </p>
//           <p 
//             className="text-2xl font-light text-gray-400"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.02em'
//             }}
//           >
//             Leave with a <span className="text-cyan-400 font-semibold">legacy</span>.
//           </p>
//         </div>
//       </div>
      
//       {/* Enhanced Styles */}
//       <style jsx>{`
//         @keyframes fadeIn {
//           from { 
//             opacity: 0; 
//             transform: translateY(10px);
//           }
//           to { 
//             opacity: 0.9; 
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes pulse {
//           0%, 100% { 
//             opacity: 0.15; 
//             transform: scale(1);
//           }
//           50% { 
//             opacity: 0.25; 
//             transform: scale(1.05);
//           }
//         }
        
//         @keyframes float {
//           0%, 100% { 
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% { 
//             transform: translateY(-20px) rotate(5deg);
//           }
//         }
        
//         @keyframes hologram {
//           0%, 100% { 
//             filter: hue-rotate(0deg) brightness(1);
//           }
//           50% { 
//             filter: hue-rotate(180deg) brightness(1.2);
//           }
//         }
        
//         /* Enhanced scrollbar */
//         ::-webkit-scrollbar {
//           width: 12px;
//         }
        
//         ::-webkit-scrollbar-track {
//           background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
//           border-radius: 6px;
//         }
        
//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(180deg, #00ff87, #0ea5e9);
//           border-radius: 6px;
//           border: 2px solid #0f172a;
//         }
        
//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(180deg, #22c55e, #06b6d4);
//         }
        
//         /* Custom selection */
//         ::selection {
//           background: rgba(0, 255, 135, 0.3);
//           color: white;
//         }
        
//         ::-moz-selection {
//           background: rgba(0, 255, 135, 0.3);
//           color: white;
//         }
        
//         /* Responsive design */
//         @media (max-width: 768px) {
//           .text-7xl { font-size: 3.5rem; }
//           .text-8xl { font-size: 4rem; }
//           .grid-cols-3 { grid-template-columns: 1fr; }
//           .text-5xl { font-size: 2.5rem; }
//           .text-6xl { font-size: 3rem; }
//         }
        
//         @media (max-width: 640px) {
//           .grid-cols-2 { grid-template-columns: 1fr; }
//           .text-7xl { font-size: 2.5rem; }
//           .text-8xl { font-size: 3rem; }
//           .text-3xl { font-size: 1.5rem; }
//           .text-4xl { font-size: 2rem; }
//         }
        
//         /* Glass morphism effects */
//         .glass {
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         /* Hover effects */
//         .hover-lift:hover {
//           transform: translateY(-8px) scale(1.02);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }
        
//         .hover-glow:hover {
//           filter: drop-shadow(0 0 20px rgba(0, 255, 135, 0.5));
//         }
        
//         /* Terminal specific animations */
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-in forwards;
//         }
        
//         /* Improved terminal cursor */
//         @keyframes cursor-blink {
//           0%, 50% { 
//             opacity: 1; 
//           }
//           51%, 100% { 
//             opacity: 0; 
//           }
//         }
        
//         .cursor-animation {
//           animation: cursor-blink 1s infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EpicHackathonAbout;
// export const AboutPage = EpicHackathonAbout;;;





'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SRGBColorSpace } from 'three';

const EpicHackathonAbout = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [textAnimation, setTextAnimation] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [activeSection, setActiveSection] = useState(0);

  const aboutSections = [
    {
      title: "VulnVANGUARD",
      description: "Where security meets innovation in the digital battleground",
      icon: "🛡️",
      color: "#00ff87",
      content: "VulnVANGUARD isn't just another hackathon – it's the ultimate cybersecurity challenge where brilliant minds collide to identify, fix, and fortify digital systems against real-world threats."
    },
    {
      title: "Cyber Security Focus",
      description: "24 hours of intensive security challenges",
      icon: "🔒",
      color: "#0ea5e9", 
      content: "This 24-hour cybersecurity marathon is loaded with Linux challenges, bug hunting, vulnerability assessment, and system hardening - designed to test your security prowess."
    },
    {
      title: "Bug Hunter's Paradise",
      description: "Where vulnerabilities meet their match",
      icon: "🐛",
      color: "#8b5cf6",
      content: "Sleep is optional. Security isn't. If you're ready to prove your mettle, hunt down critical bugs, and build fortress-like systems - this is your battlefield."
    },
    {
      title: "Elite Security Community",
      description: "Join the vanguard of cybersecurity warriors.",
      icon: "⚔️",
      color: "#06b6d4",
      content: "It's more than an event. It's 24 hours of hacking, hardening, and defending. Expert mentors will guide you through every security challenge."
    }
  ];

  useEffect(() => {
    const sectionInterval = setInterval(() => {
      setActiveSection(prev => (prev + 1) % aboutSections.length);
    }, 4000);

    setTimeout(() => setTextAnimation(true), 200);

    return () => clearInterval(sectionInterval);
  }, [aboutSections.length]);

  const terminalCommands = [
    '🎯 Initializing VulnVANGUARD system...',
    '🔧 Loading neural pathways for innovation...',
    '💡 Connecting brilliant minds across dimensions...',
    '⚡ Activating 24-hour reality distortion field...',
    '🚀 Preparing enhancement protocols...',
    '🎨 Loading midnight mini-game archives...',
    '🏆 Calibrating prize distribution algorithms...',
    '🤝 Establishing mentor-participant neural links...',
    '✨ System ready. Innovation mode: ACTIVATED.',
  ];

  // Fixed terminal animation
  useEffect(() => {
    let commandIndex = 0;
    let isTyping = false;

    const typeCommand = () => {
      if (isTyping || commandIndex >= terminalCommands.length) return;
      
      isTyping = true;
      const command = terminalCommands[commandIndex];
      let charIndex = 0;
      setCurrentCommand('');

      const typeInterval = setInterval(() => {
        if (charIndex < command.length) {
          setCurrentCommand(command.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          
          // Command finished typing, add to terminal lines
          setTimeout(() => {
            setTerminalLines(prev => [...prev, `> ${command}`]);
            setCurrentCommand('');
            isTyping = false;
            commandIndex++;
            
            // Clear terminal and restart if all commands shown
            if (commandIndex >= terminalCommands.length) {
              setTimeout(() => {
                setTerminalLines([]);
                commandIndex = 0;
                setTimeout(typeCommand, 500);
              }, 2000);
            } else {
              setTimeout(typeCommand, 300);
            }
          }, 800);
        }
      }, 50);
    };

    // Start terminal animation
    const startTimeout = setTimeout(typeCommand, 1000);

    return () => {
      clearTimeout(startTimeout);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // Enhanced scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0f1c, 50, 300);
    
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;
    
    camera.position.set(0, 0, 120);

    // Create neural network particles
    const createNeuralNetwork = () => {
      const group = new THREE.Group();
      const particleCount = 250;
      const connections = [];
      
      // Create nodes
      const nodeGeometry = new THREE.SphereGeometry(0.6, 16, 16);
      const nodes = [];
      
      for (let i = 0; i < particleCount; i++) {
        const nodeMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(
            0.15 + Math.random() * 0.15, // Green-cyan range
            0.8,
            0.3 + Math.random() * 0.4
          ),
          transparent: true,
          opacity: 0.8
        });
        
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(
          (Math.random() - 0.5) * 400,
          (Math.random() - 0.5) * 300,
          (Math.random() - 0.5) * 200
        );
        
        node.userData = {
          originalPosition: node.position.clone(),
          speed: 0.1 + Math.random() * 0.2,
          amplitude: 5 + Math.random() * 12,
          pulseSpeed: 1 + Math.random() * 2
        };
        
        nodes.push(node);
        group.add(node);
      }
      
      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position);
          if (distance < 85 && Math.random() > 0.82) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position
            ]);
            
            const material = new THREE.LineBasicMaterial({
              color: new THREE.Color().setHSL(0.18, 0.6, 0.5),
              transparent: true,
              opacity: 0.25
            });
            
            const line = new THREE.Line(geometry, material);
            line.userData = { nodeA: nodes[i], nodeB: nodes[j] };
            connections.push(line);
            group.add(line);
          }
        }
      }
      
      group.userData = { nodes, connections };
      return group;
    };

    // Create floating energy orbs
    const createEnergyOrbs = () => {
      const group = new THREE.Group();
      
      for (let i = 0; i < 15; i++) {
        const size = 2 + Math.random() * 5;
        const orbGeometry = new THREE.SphereGeometry(size, 32, 32);
        
        const orbMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(
            0.55 + Math.random() * 0.15, // Blue-purple range
            0.8,
            0.6
          ),
          transparent: true,
          opacity: 0.15
        });
        
        const orb = new THREE.Mesh(orbGeometry, orbMaterial);
        orb.position.set(
          (Math.random() - 0.5) * 350,
          (Math.random() - 0.5) * 250,
          (Math.random() - 0.5) * 180
        );
        
        // Add inner glow
        const glowGeometry = new THREE.SphereGeometry(size * 0.7, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.18, 0.9, 0.7),
          transparent: true,
          opacity: 0.3
        });
        
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        orb.add(glow);
        
        orb.userData = {
          originalPosition: orb.position.clone(),
          speed: 0.3 + Math.random() * 0.4,
          amplitude: 15 + Math.random() * 25,
          rotationSpeed: 0.01 + Math.random() * 0.02
        };
        
        group.add(orb);
      }
      
      return group;
    };

    // Create particle streams
    const createParticleStreams = () => {
      const group = new THREE.Group();
      
      for (let stream = 0; stream < 6; stream++) {
        const streamGeometry = new THREE.BufferGeometry();
        const streamParticles = 60;
        const positions = new Float32Array(streamParticles * 3);
        const colors = new Float32Array(streamParticles * 3);
        const sizes = new Float32Array(streamParticles);
        
        for (let i = 0; i < streamParticles; i++) {
          const angle = (stream / 6) * Math.PI * 2;
          const radius = 120 + Math.random() * 60;
          
          positions[i * 3] = Math.cos(angle) * radius;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 250;
          positions[i * 3 + 2] = Math.sin(angle) * radius;
          
          const hue = stream % 3 === 0 ? 0.18 : stream % 3 === 1 ? 0.55 : 0.75;
          const color = new THREE.Color().setHSL(hue, 0.8, 0.6);
          
          colors[i * 3] = color.r;
          colors[i * 3 + 1] = color.g;
          colors[i * 3 + 2] = color.b;
          
          sizes[i] = Math.random() * 3 + 1;
        }
        
        streamGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        streamGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        streamGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        const streamMaterial = new THREE.PointsMaterial({
          size: 2,
          vertexColors: true,
          transparent: true,
          opacity: 0.8,
          sizeAttenuation: true,
          blending: THREE.AdditiveBlending
        });
        
        const streamPoints = new THREE.Points(streamGeometry, streamMaterial);
        streamPoints.userData = { stream };
        group.add(streamPoints);
      }
      
      return group;
    };

    const neuralNetwork = createNeuralNetwork();
    const energyOrbs = createEnergyOrbs();
    const particleStreams = createParticleStreams();
    
    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0x1a3a5c, 0.3);
    const directionalLight = new THREE.DirectionalLight(0x00ff87, 0.5);
    directionalLight.position.set(50, 100, 50);
    
    const spotLight = new THREE.SpotLight(0x0ea5e9, 0.8, 200, Math.PI / 6, 0.3, 1);
    spotLight.position.set(0, 150, 100);
    spotLight.target.position.set(0, 0, 0);
    
    scene.add(ambientLight);
    scene.add(directionalLight);
    scene.add(spotLight);
    scene.add(neuralNetwork);
    scene.add(energyOrbs);
    scene.add(particleStreams);

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Enhanced animation loop
    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const time = Date.now() * 0.001;
      
      // Animate neural network
      if (neuralNetwork && neuralNetwork.userData) {
        const { nodes, connections } = neuralNetwork.userData;
        
        if (nodes) {
          nodes.forEach((node, index) => {
            const userData = node.userData;
            node.position.y = userData.originalPosition.y + 
              Math.sin(time * userData.speed + index) * userData.amplitude;
            node.position.x = userData.originalPosition.x + 
              Math.cos(time * userData.speed * 0.7 + index) * userData.amplitude * 0.3;
            
            const scale = 1 + Math.sin(time * userData.pulseSpeed + index) * 0.3;
            node.scale.setScalar(scale);
            
            const hue = (time * 0.1 + index * 0.1) % 1;
            node.material.color.setHSL(0.15 + hue * 0.1, 0.8, 0.5);
          });
        }
        
        if (connections) {
          connections.forEach(connection => {
            const positions = connection.geometry.attributes.position.array;
            positions[0] = connection.userData.nodeA.position.x;
            positions[1] = connection.userData.nodeA.position.y;
            positions[2] = connection.userData.nodeA.position.z;
            positions[3] = connection.userData.nodeB.position.x;
            positions[4] = connection.userData.nodeB.position.y;
            positions[5] = connection.userData.nodeB.position.z;
            connection.geometry.attributes.position.needsUpdate = true;
            
            connection.material.opacity = 0.1 + Math.sin(time * 2) * 0.15;
          });
        }
        
        neuralNetwork.rotation.y = time * 0.02;
      }
      
      // Animate energy orbs
      if (energyOrbs) {
        energyOrbs.children.forEach((orb, index) => {
          const userData = orb.userData;
          if (userData) {
            orb.position.y = userData.originalPosition.y + 
              Math.sin(time * userData.speed + index) * userData.amplitude;
            orb.position.x = userData.originalPosition.x + 
              Math.cos(time * userData.speed * 0.6 + index) * userData.amplitude * 0.5;
            
            orb.rotation.x += userData.rotationSpeed;
            orb.rotation.y += userData.rotationSpeed * 0.7;
            
            const breathe = 1 + Math.sin(time * 2 + index) * 0.2;
            orb.scale.setScalar(breathe);
          }
        });
      }
      
      // Animate particle streams
      if (particleStreams) {
        particleStreams.children.forEach((stream, streamIndex) => {
          if (stream instanceof THREE.Points && stream.geometry && stream.geometry.attributes && stream.geometry.attributes.position) {
            const positions = stream.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
              positions[i + 1] += (streamIndex % 2 === 0 ? 0.5 : -0.5);
              if (Math.abs(positions[i + 1]) > 150) {
                positions[i + 1] = (streamIndex % 2 === 0 ? -150 : 150);
              }
            }
            stream.geometry.attributes.position.needsUpdate = true;
            stream.rotation.y = time * 0.3 + streamIndex;
          }
        });
      }
      
      // Dynamic camera movement
      const targetX = mouseRef.current.x * 20;
      const targetY = mouseRef.current.y * 10;
      
      camera.position.x += (targetX - camera.position.x) * 0.03;
      camera.position.y += (targetY - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);
      
      camera.position.z = 120 + Math.sin(time * 0.5) * 10;
      
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 30%, #000000 70%)',
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      {/* Dynamic lighting effects */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-full"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(0, 255, 135, 0.15) 0%, rgba(0, 255, 135, 0.08) 30%, rgba(14, 165, 233, 0.05) 60%, transparent 80%)',
            filter: 'blur(80px)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0.06) 40%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        
        <div 
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 70%)',
            filter: 'blur(40px)',
            animation: 'float 8s ease-in-out infinite reverse'
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen text-center px-4 sm:px-6 py-8">
        
        {/* Header */}
        <div className="mb-8 sm:mb-12 mt-16">
          <h1 
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 transition-all duration-2000 ${
              textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              background: 'linear-gradient(135deg, #00ff87 0%, #0ea5e9 50%, #8b5cf6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(0, 255, 135, 0.5)',
              letterSpacing: '-0.02em',
              lineHeight: '0.9'
            }}
          >
            ABOUT THE EVENT
          </h1>
          
          <div 
            className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 transition-all duration-2000 delay-300 ${
              textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.3em',
              textShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
            }}
          >
            NEURAL INNOVATION PROTOCOL
          </div>
        </div>
        
        {/* Fixed Terminal Window */}
        <div 
          className="mb-12 sm:mb-16 w-full max-w-4xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 255, 170, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 255, 170, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            minHeight: '320px'
          }}
        >
          <div 
            className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3"
            style={{ 
              background: 'rgba(0, 0, 0, 0.3)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div className="flex space-x-2">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full shadow-lg shadow-red-500/30"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/30"></div>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full shadow-lg shadow-green-500/30"></div>
            </div>
            <div 
              className="text-xs font-mono opacity-80"
              style={{ 
                color: '#00ffaa',
                textShadow: '0 0 10px rgba(0, 255, 170, 0.5)'
              }}
            >
              vulnvanguard@terminal:~$
            </div>
          </div>
          
          <div 
            className="p-4 sm:p-6 overflow-hidden"
            style={{ 
              fontFamily: 'SF Mono, Monaco, Consolas, "Courier New", monospace', 
              fontSize: '14px',
              lineHeight: '1.6',
              minHeight: '280px'
            }}
          >
            <div className="space-y-2">
              {terminalLines.map((line, index) => (
                <div 
                  key={index} 
                  className="opacity-90 text-sm"
                  style={{
                    color: '#00ffaa',
                    textShadow: '0 0 8px rgba(0, 255, 170, 0.4)'
                  }}
                >
                  {line}
                </div>
              ))}
              
              {currentCommand && (
                <div 
                  className="flex items-center text-sm"
                  style={{
                    color: '#00ffaa',
                    textShadow: '0 0 8px rgba(0, 255, 170, 0.4)'
                  }}
                >
                  <span className="mr-2 opacity-70">{'>'}</span>
                  <span>{currentCommand}</span>
                  <span 
                    className="w-2 h-4 ml-1 animate-pulse inline-block"
                    style={{ 
                      background: '#00ffaa',
                      boxShadow: '0 0 10px rgba(0, 255, 170, 0.8)'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main About Content */}
        <div className={`max-w-6xl mx-auto mb-16 transition-all duration-2000 delay-600 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div 
            className="text-xl sm:text-2xl md:text-3xl font-light mb-8 text-gray-100 leading-relaxed max-w-4xl mx-auto"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em'
            }}
          >
            Tired of boring code marathons with no thrill? Want to build, break, and brag in just 24 hours?
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 font-semibold">VulnVANGUARD</span> – where 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold"> caffeine meets creativity</span>, and 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500 font-semibold"> chaos turns into code!</span>
          </div>
        </div>

        {/* Feature Sections Grid */}
        <div className={`max-w-7xl mx-auto mb-20 transition-all duration-2000 delay-900 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {aboutSections.map((section, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-3xl backdrop-blur-lg border border-opacity-20 transition-all duration-700 hover:scale-105 cursor-pointer ${
                  activeSection === index ? 'scale-105' : ''
                }`}
                style={{
                  background: `rgba(15,23,42,0.6)`,
                  borderColor: section.color,
                  boxShadow: activeSection === index ? `0 20px 40px ${section.color}30` : '0 10px 20px rgba(0,0,0,0.2)'
                }}
              >
                <div className="flex items-center mb-6">
                  <div 
                    className="text-4xl mr-4"
                    style={{ 
                      filter: `drop-shadow(0 0 15px ${section.color}60)`
                    }}
                  >
                    {section.icon}
                  </div>
                  <div>
                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: section.color }}
                    >
                      {section.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{section.description}</p>
                  </div>
                </div>
                <p 
                  className="text-gray-300 text-base leading-relaxed"
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {section.content}
                </p>
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${section.color}20, transparent)` }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Event Highlights */}
        <div className={`max-w-7xl mx-auto mb-20 transition-all duration-2000 delay-1200 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{
              background: 'linear-gradient(135deg, #ffffff, #00ff87)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            EVENT HIGHLIGHTS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "🧠 Tech Quiz Battles",
                description: "Separate the curious from the committed with brain-bending challenges",
                color: "#00ff87"
              },
              {
                title: "⚙️ Real-World Problems", 
                description: "Push your creativity to solve problems that actually matter",
                color: "#0ea5e9"
              },
              {
                title: "🚀 Enhancement Rounds",
                description: "Transform your MVP from good to absolutely incredible",
                color: "#8b5cf6"
              },
              {
                title: "🎨 Midnight Mini-Games",
                description: "Tech Pictionary and Coding Races because fun fuels innovation",
                color: "#06b6d4"
              },
              {
                title: "🎁 Exciting Prizes",
                description: "Amazing rewards for top teams - we're serious about the goodies",
                color: "#f59e0b"
              },
              {
                title: "🤝 Expert Mentorship",
                description: "Industry mentors guide you through every step of your journey",
                color: "#ef4444"
              }
            ].map((highlight, index) => (
              <div 
                key={index}
                className="group relative p-6 rounded-2xl backdrop-blur-lg border border-opacity-20 transition-all duration-500 hover:scale-105"
                style={{
                  background: 'rgba(15,23,42,0.4)',
                  borderColor: highlight.color
                }}
              >
                <h4 
                  className="text-lg font-semibold mb-3"
                  style={{ color: highlight.color }}
                >
                  {highlight.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {highlight.description}
                </p>
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                  style={{ background: highlight.color }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={`max-w-5xl mx-auto mb-20 transition-all duration-2000 delay-1500 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            BY THE NUMBERS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Hours of Innovation', value: '24', color: '#00ff87', icon: '⏰' },
              { label: 'Days & Nights', value: '2', color: '#0ea5e9', icon: '🌙' },
              { label: 'Rounds of Excellence', value: '3', color: '#8b5cf6', icon: '🏆' },
              { label: 'Infinite Possibilities', value: '∞', color: '#06b6d4', icon: '💫' }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div 
                  className="text-4xl mb-4 opacity-80 transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    filter: `drop-shadow(0 0 15px ${stat.color}60)`
                  }}
                >
                  {stat.icon}
                </div>
                
                <div 
                  className="text-5xl md:text-6xl font-black mb-3"
                  style={{ 
                    color: stat.color,
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    textShadow: `0 0 30px ${stat.color}50`,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {stat.value}
                </div>
                
                <div 
                  className="text-gray-400 text-sm uppercase tracking-wider"
                  style={{ 
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mb-20 transition-all duration-2000 delay-1800 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{
              background: 'linear-gradient(135deg, #00ff87, #0ea5e9, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            READY TO HACK THE FUTURE?
          </h2>
          
          <p 
            className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            Join us for 24 hours of <span className="text-emerald-400 font-semibold">pure innovation</span>, 
            where your wildest ideas become <span className="text-cyan-400 font-semibold">working prototypes</span>, 
            and ordinary developers become <span className="text-purple-400 font-semibold">extraordinary creators</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              className="group relative px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #00ff87, #0ea5e9)',
                color: 'black',
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '0.02em',
                boxShadow: '0 20px 40px rgba(0, 255, 135, 0.3)'
              }}
            >
              <a
                href="https://www.srmist-ncr-gfg.club/Registration"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 block w-full h-full text-center"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                REGISTER NOW
              </a>
            </button>
            
            <button
              className="group relative px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-500 hover:scale-105 border-2 border-cyan-400 text-cyan-400 hover:text-black overflow-hidden"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                background: 'rgba(6, 182, 212, 0.1)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <a
                href="https://www.instagram.com/gfg_srmist_ncr/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 block w-full h-full text-center"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                FOLLOW UPDATES
              </a>
            </button>
          </div>
        </div>

        {/* Closing Statement */}
        <div className={`text-center transition-all duration-2000 delay-2100 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p 
            className="text-2xl font-light text-gray-400 mb-4"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em'
            }}
          >
            Come with an <span className="text-emerald-400 font-semibold">idea</span>.
          </p>
          <p 
            className="text-2xl font-light text-gray-400"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em'
            }}
          >
            Leave with a <span className="text-cyan-400 font-semibold">legacy</span>.
          </p>
        </div>
      </div>
      
      {/* Enhanced Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { 
            opacity: 0; 
            transform: translateY(10px);
          }
          to { 
            opacity: 0.9; 
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.15; 
            transform: scale(1);
          }
          50% { 
            opacity: 0.25; 
            transform: scale(1.05);
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes hologram {
          0%, 100% { 
            filter: hue-rotate(0deg) brightness(1);
          }
          50% { 
            filter: hue-rotate(180deg) brightness(1.2);
          }
        }
        
        /* Enhanced scrollbar */
        ::-webkit-scrollbar {
          width: 12px;
        }
        
        ::-webkit-scrollbar-track {
          background: linear-gradient(180deg, #0f172a 0%, #020617 100%);
          border-radius: 6px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #00ff87, #0ea5e9);
          border-radius: 6px;
          border: 2px solid #0f172a;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #22c55e, #06b6d4);
        }
        
        /* Custom selection */
        ::selection {
          background: rgba(0, 255, 135, 0.3);
          color: white;
        }
        
        ::-moz-selection {
          background: rgba(0, 255, 135, 0.3);
          color: white;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .text-7xl { font-size: 3.5rem; }
          .text-8xl { font-size: 4rem; }
          .grid-cols-3 { grid-template-columns: 1fr; }
          .text-5xl { font-size: 2.5rem; }
          .text-6xl { font-size: 3rem; }
        }
        
        @media (max-width: 640px) {
          .grid-cols-2 { grid-template-columns: 1fr; }
          .text-7xl { font-size: 2.5rem; }
          .text-8xl { font-size: 3rem; }
          .text-3xl { font-size: 1.5rem; }
          .text-4xl { font-size: 2rem; }
        }
        
        /* Glass morphism effects */
        .glass {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Hover effects */
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .hover-glow:hover {
          filter: drop-shadow(0 0 20px rgba(0, 255, 135, 0.5));
        }
        
        /* Terminal specific animations */
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in forwards;
        }
        
        /* Improved terminal cursor */
        @keyframes cursor-blink {
          0%, 50% { 
            opacity: 1; 
          }
          51%, 100% { 
            opacity: 0; 
          }
        }
        
        .cursor-animation {
          animation: cursor-blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default EpicHackathonAbout;
export const AboutPage = EpicHackathonAbout;

