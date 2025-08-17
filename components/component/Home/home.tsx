// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { SRGBColorSpace } from 'three';
// import { useRouter } from 'next/navigation';
// // Remove CountDown import and usage

// const EpicHackathonHero = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const sceneRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cameraRef = useRef(null);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const animationRef = useRef(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [currentFeature, setCurrentFeature] = useState(0);
//   const [textAnimation, setTextAnimation] = useState(false);
//   const [terminalLines, setTerminalLines] = useState([]);
//   const [currentCommand, setCurrentCommand] = useState('');
//   const router = useRouter();

//   const features = [
//     {
//       title: "Neural Innovation",
//       description: "AI-powered development at lightspeed",
//       icon: "🧠",
//       color: "#00ff87",
//       gradient: "from-emerald-400 to-green-500"
//     },
//     {
//       title: "Quantum Collaboration",
//       description: "Entangled minds building the future",
//       icon: "⚛️",
//       color: "#0ea5e9",
//       gradient: "from-sky-400 to-blue-500"
//     },
//     {
//       title: "Reality Distortion",
//       description: "24 hours to bend the impossible",
//       icon: "🌌",
//       color: "#8b5cf6",
//       gradient: "from-purple-400 to-violet-500"
//     },
//     {
//       title: "Code Evolution",
//       description: "Algorithms that learn and adapt",
//       icon: "🔮",
//       color: "#06b6d4",
//       gradient: "from-cyan-400 to-teal-500"
//     }
//   ];

//   useEffect(() => {
//     const featureInterval = setInterval(() => {
//       setCurrentFeature(prev => (prev + 1) % features.length);
//     }, 3000);

//     setTimeout(() => setTextAnimation(true), 500);

//     return () => clearInterval(featureInterval);
//   }, [features.length]);

//   const commandSequence = [
//     '📝 Step 1: Registration: Teams register to officially enter the competition.',
//     '🧠 Step 2: Quiz Round: A screening quiz to evaluate technical and problem-solving skills.',
//     '💡 Step 3: Round 1 – Project Development: Shortlisted teams Opt a problem statement and build a project.',
//     '🔧 Step 4: Round 2 – Feature Enhancement: Selected teams improve their project by adding new features or refining functionality.',
//     '🎤 Step 5: Final Pitch: Top teams present their final projects to a panel of judges, and winners are declared.',
//   ];

//   useEffect(() => {
//     let terminalInterval;
//     let commandIndex = 0;
//     let isPaused = false;
//     let pauseTimeout;

//     // Helper to start typing a command
//     const typeCommandFn = (command, onComplete) => {
//       let charIndex = 0;
//       const typeCommand = setInterval(() => {
//         if (charIndex < command.length) {
//           setCurrentCommand(command.slice(0, charIndex + 1));
//           charIndex++;
//         } else {
//           clearInterval(typeCommand);
//           setTimeout(onComplete, 400);
//         }
//       }, 40);
//     };

//     // Animation loop
//     const runTerminal = () => {
//       if (commandIndex < commandSequence.length) {
//         const command = commandSequence[commandIndex];
//         setCurrentCommand('');
//         typeCommandFn(command, () => {
//           setTerminalLines(prev => [...prev, `> ${command}`]);
//           setCurrentCommand('');
//           commandIndex++;
//           terminalInterval = setTimeout(runTerminal, 1800);
//         });
//       } else {
//         // Pause for 45 seconds, then reset
//         isPaused = true;
//         pauseTimeout = setTimeout(() => {
//           setTerminalLines([]);
//           commandIndex = 0;
//           isPaused = false;
//           runTerminal();
//         }, 10000);
//       }
//     };

//     runTerminal();

//     return () => {
//       clearTimeout(terminalInterval);
//       if (pauseTimeout) clearTimeout(pauseTimeout);
//     };
//   }, [commandSequence]);

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
//       const particleCount = 200;
//       const connections = [];
      
//       // Create nodes
//       const nodeGeometry = new THREE.SphereGeometry(0.5, 16, 16);
//       const nodes = [];
      
//       for (let i = 0; i < particleCount; i++) {
//         const nodeMaterial = new THREE.MeshBasicMaterial({
//           color: new THREE.Color().setHSL(
//             0.15 + Math.random() * 0.1, // Green-cyan range
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
//           amplitude: 5 + Math.random() * 10,
//           pulseSpeed: 1 + Math.random() * 2
//         };
        
//         nodes.push(node);
//         group.add(node);
//       }
      
//       // Create connections
//       for (let i = 0; i < nodes.length; i++) {
//         for (let j = i + 1; j < nodes.length; j++) {
//           const distance = nodes[i].position.distanceTo(nodes[j].position);
//           if (distance < 80 && Math.random() > 0.85) {
//             const geometry = new THREE.BufferGeometry().setFromPoints([
//               nodes[i].position,
//               nodes[j].position
//             ]);
            
//             const material = new THREE.LineBasicMaterial({
//               color: new THREE.Color().setHSL(0.18, 0.6, 0.5),
//               transparent: true,
//               opacity: 0.2
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
      
//       for (let i = 0; i < 12; i++) {
//         const size = 2 + Math.random() * 4;
//         const orbGeometry = new THREE.SphereGeometry(size, 32, 32);
        
//         // Create glowing material
//         const orbMaterial = new THREE.MeshBasicMaterial({
//           color: new THREE.Color().setHSL(
//             0.55 + Math.random() * 0.1, // Blue range
//             0.8,
//             0.6
//           ),
//           transparent: true,
//           opacity: 0.15
//         });
        
//         const orb = new THREE.Mesh(orbGeometry, orbMaterial);
//         orb.position.set(
//           (Math.random() - 0.5) * 300,
//           (Math.random() - 0.5) * 200,
//           (Math.random() - 0.5) * 150
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
//           amplitude: 15 + Math.random() * 20,
//           rotationSpeed: 0.01 + Math.random() * 0.02
//         };
        
//         group.add(orb);
//       }
      
//       return group;
//     };

//     // Create particle streams
//     const createParticleStreams = () => {
//       const group = new THREE.Group();
      
//       for (let stream = 0; stream < 5; stream++) {
//         const streamGeometry = new THREE.BufferGeometry();
//         const streamParticles = 50;
//         const positions = new Float32Array(streamParticles * 3);
//         const colors = new Float32Array(streamParticles * 3);
//         const sizes = new Float32Array(streamParticles);
        
//         for (let i = 0; i < streamParticles; i++) {
//           const angle = (stream / 5) * Math.PI * 2;
//           const radius = 100 + Math.random() * 50;
          
//           positions[i * 3] = Math.cos(angle) * radius;
//           positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
//           positions[i * 3 + 2] = Math.sin(angle) * radius;
          
//           // Alternate between blue and green
//           const hue = stream % 2 === 0 ? 0.18 : 0.55;
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
            
//             // Pulsing effect
//             const scale = 1 + Math.sin(time * userData.pulseSpeed + index) * 0.3;
//             node.scale.setScalar(scale);
            
//             // Color cycling
//             const hue = (time * 0.1 + index * 0.1) % 1;
//             node.material.color.setHSL(0.15 + hue * 0.1, 0.8, 0.5);
//           });
//         }
        
//         // Update connections
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
            
//             // Animate connection opacity
//             connection.material.opacity = 0.1 + Math.sin(time * 2) * 0.1;
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
            
//             // Breathing effect
//             const breathe = 1 + Math.sin(time * 2 + index) * 0.2;
//             orb.scale.setScalar(breathe);
//           }
//         });
//       }
      
//       // Animate particle streams
//       if (particleStreams) {
//         particleStreams.children.forEach((stream, streamIndex) => {
//           if (
//             (stream instanceof THREE.Mesh || stream instanceof THREE.Points) &&
//             stream.geometry &&
//             stream.geometry.attributes &&
//             stream.geometry.attributes.position
//           ) {
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
      
//       // Subtle camera oscillation
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

//   // Custom Countdown Timer
//   const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0, completed: false});
//   useEffect(() => {
    
//     const target = new Date('2025-09-12T03:30:00Z').getTime();
//     const interval = setInterval(() => {
//       const now = new Date().getTime();
//       const distance = target - now;
//       if (distance <= 0) {
//         setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0, completed: true});
//         clearInterval(interval);
//       } else {
//         setTimeLeft({
//           days: Math.floor(distance / (1000 * 60 * 60 * 24)),
//           hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//           minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
//           seconds: Math.floor((distance % (1000 * 60)) / 1000),
//           completed: false
//         });
//       }
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div 
//       ref={containerRef} 
//       className="relative w-full min-h-screen overflow-hidden pt-20 md:pt-24"
//       style={{
//         background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 30%, #000000 70%)',
//       }}
//     >
//       <canvas 
//         ref={canvasRef} 
//         className="absolute inset-0 w-full h-full"
//         style={{ zIndex: 1 }}
//       />
      
//       {/* Dynamic lighting effects - Fixed to cover entire page */}
//       <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
//         {/* Main spotlight */}
//         <div 
//           className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-full"
//           style={{
//             background: 'radial-gradient(ellipse at top, rgba(0, 255, 135, 0.15) 0%, rgba(0, 255, 135, 0.08) 30%, rgba(14, 165, 233, 0.05) 60%, transparent 80%)',
//             filter: 'blur(80px)',
//             animation: 'pulse 4s ease-in-out infinite'
//           }}
//         />
        
//         {/* Secondary glow */}
//         <div 
//           className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
//           style={{
//             background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0.06) 40%, transparent 70%)',
//             filter: 'blur(60px)',
//             animation: 'float 6s ease-in-out infinite'
//           }}
//         />
        
//         {/* Tertiary accent */}
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
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 py-8">
        
//         {/* Main Header */}
//         <div className="mb-8 sm:mb-12">
//           <div className="mb-6">
//             <h1 
//               className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-3 transition-all duration-2000 ${
//                 textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}
//               style={{
//                 fontFamily: 'system-ui, -apple-system, sans-serif',
//                 background: 'linear-gradient(135deg, #00ff87 0%, #0ea5e9 50%, #8b5cf6 100%)',
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//                 backgroundClip: 'text',
//                 textShadow: '0 0 80px rgba(0, 255, 135, 0.5)',
//                 letterSpacing: '-0.02em',
//                 lineHeight: '0.9'
//               }}
//             >
//               Hack-Innovate-2.0
//             </h1>
            
//             <div 
//               className={`text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 transition-all duration-2000 delay-300 ${
//                 textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}
//               style={{
//                 fontFamily: 'system-ui, -apple-system, sans-serif',
//                 letterSpacing: '0.3em',
//                 textShadow: '0 0 40px rgba(255, 255, 255, 0.3)'
//               }}
//             >
//               HACKATHON
//             </div>
//           </div>
//         </div>
        
//         {/* Epic Subtitle */}
//         <div className={`mb-8 sm:mb-10 max-w-4xl transition-all duration-2000 delay-600 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <h2 
//             className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 text-gray-100 leading-tight"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.02em'
//             }}
//           >
//             Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 font-semibold">Code</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold">Consciousness</span>
//           </h2>
          
//           <p 
//             className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.01em'
//             }}
//           >
//  Where bold ideas become real solutions, a launchpad for creativity, learning and innovation.
//           </p>
//         </div>

//         {/* Terminal Window */}
//         <div 
//           className="mb-10 h-64 sm:mb-10 w-full max-w-3xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden"
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
//               hackathon@terminal:~$
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
        
//         {/* CTA Section */}
//         <div className={`flex flex-col mt-4 sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-2000 delay-900 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           <button
//             className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
//             style={{
//               background: 'linear-gradient(135deg, #00ff87, #0ea5e9)',
//               color: 'black',
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.02em',
//               boxShadow: '0 20px 40px rgba(0, 255, 135, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 30px 60px rgba(0, 255, 135, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)';
//               (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px) scale(1.05)';
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 20px 40px rgba(0, 255, 135, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)';
//               (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0) scale(1)';
//             }}
//           >
//             <a
//               href="https://www.srmist-ncr-gfg.club/Registration"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="relative z-10 block w-full h-full text-center"
//               style={{ textDecoration: 'none', color: 'inherit' }}
//             >
//               Register Now
//             </a>
//             <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
//           </button>
          
//           <button
//             className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden border-2 border-cyan-400 text-cyan-400 hover:text-black"
//             style={{
//               fontFamily: 'system-ui, -apple-system, sans-serif',
//               letterSpacing: '0.02em',
//               background: 'rgba(6, 182, 212, 0.1)',
//               backdropFilter: 'blur(20px)'
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = 'rgba(6, 182, 212, 0.9)';
//               e.currentTarget.style.borderColor = '#06b6d4';
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
//               e.currentTarget.style.borderColor = '#06b6d4';
//             }}
//             onClick={() => router.push('/about')}
//           >
//             <span className="relative z-10">EXPLORE DEPTHS</span>
//           </button>
//         </div>
        
//         {/* Feature Matrix Replacement: Event Details Section */}
//         <div className={`max-w-7xl mx-auto mt-10 mb-20 transition-all duration-2000 delay-1500 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           {/* Enhanced floating background effects */}
//           <div className="absolute inset-0 overflow-hidden pointer-events-none">
//             {/* Floating particles */}
//             {[...Array(50)].map((_, i) => (
//               <div
//                 key={`particle-${i}`}
//                 className="absolute rounded-full animate-bounce"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   width: `${Math.random() * 4 + 2}px`,
//                   height: `${Math.random() * 4 + 2}px`,
//                   background: i % 4 === 0 ? 'rgba(167, 139, 250, 0.3)' : 
//                              i % 4 === 1 ? 'rgba(56, 189, 248, 0.3)' :
//                              i % 4 === 2 ? 'rgba(244, 114, 182, 0.3)' : 'rgba(255, 255, 255, 0.1)',
//                   animationDelay: `${Math.random() * 5}s`,
//                   animationDuration: `${Math.random() * 4 + 3}s`,
//                   boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`
//                 }}
//               />
//             ))}
            
//             {/* Floating geometric shapes */}
//             {[...Array(15)].map((_, i) => (
//               <div
//                 key={`shape-${i}`}
//                 className="absolute animate-spin opacity-20"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   top: `${Math.random() * 100}%`,
//                   width: `${Math.random() * 20 + 10}px`,
//                   height: `${Math.random() * 20 + 10}px`,
//                   background: i % 3 === 0 ? 'linear-gradient(45deg, #a78bfa, transparent)' :
//                              i % 3 === 1 ? 'linear-gradient(45deg, #38bdf8, transparent)' :
//                              'linear-gradient(45deg, #f472b6, transparent)',
//                   clipPath: i % 4 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' :
//                            i % 4 === 1 ? 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' :
//                            i % 4 === 2 ? 'circle(50%)' : 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
//                   animationDelay: `${Math.random() * 10}s`,
//                   animationDuration: `${Math.random() * 20 + 15}s`
//                 }}
//               />
//             ))}
            
//             {/* Animated gradient orbs */}
//             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//             <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
//           </div>

//           {/* Animated grid lines */}
//           <div className="absolute inset-0 pointer-events-none opacity-5">
//             <div className="w-full h-full animate-pulse" style={{
//               backgroundImage: `
//                 linear-gradient(rgba(167, 139, 250, 0.1) 1px, transparent 1px),
//                 linear-gradient(90deg, rgba(167, 139, 250, 0.1) 1px, transparent 1px)
//               `,
//               backgroundSize: '50px 50px'
//             }}></div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
//             {/* About the Event */}
//             <div className="group relative p-8 rounded-3xl backdrop-blur-xl border border-opacity-30 transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden hover:rotate-1 animate-bounce" 
//                  style={{
//                    background:'rgba(15,23,42,0.6)', 
//                    borderColor:'#a78bfa',
//                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
//                    animationDelay: '0ms',
//                    animationDuration: '6s'
//                  }}
//                  onMouseEnter={(e) => {
//                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(167, 139, 250, 0.4), 0 0 40px rgba(167, 139, 250, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)';
//                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))';
//                    e.currentTarget.style.borderColor = '#c4b5fd';
//                  }}
//                  onMouseLeave={(e) => {
//                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
//                    e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
//                    e.currentTarget.style.borderColor = '#a78bfa';
//                  }}>
              
//               {/* Multiple animated border gradients */}
//               <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-r from-purple-500/30 via-transparent to-purple-500/30 animate-spin"></div>
//               <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-l from-violet-500/20 via-transparent to-violet-500/20 animate-ping"></div>
              
//               {/* Enhanced inner glow effect */}
//               <div className="absolute inset-1 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-b from-purple-500/20 via-purple-400/10 to-transparent animate-pulse"></div>
              
//               {/* Multiple corner accents */}
//               <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-bl from-purple-500/40 to-transparent rounded-tr-3xl"></div>
//               <div className="absolute bottom-0 left-0 w-12 h-12 opacity-10 group-hover:opacity-30 transition-opacity duration-700 bg-gradient-to-tr from-purple-400/30 to-transparent rounded-bl-3xl"></div>
              
//               {/* Floating micro particles inside card */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
//                 {[...Array(8)].map((_, i) => (
//                   <div
//                     key={`micro-${i}`}
//                     className="absolute w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-60"
//                     style={{
//                       left: `${20 + Math.random() * 60}%`,
//                       top: `${20 + Math.random() * 60}%`,
//                       animationDelay: `${i * 200}ms`,
//                       animationDuration: `${3 + Math.random() * 2}s`
//                     }}
//                   />
//                 ))}
//               </div>
              
//               <div className="relative z-10">
//                 <h3 className="text-xl font-bold mb-4 text-purple-300 transition-all duration-300 group-hover:scale-105 group-hover:text-purple-100 group-hover:drop-shadow-lg animate-text-glow">ABOUT THE EVENT</h3>
//                 <p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-gray-100 transition-all duration-300 hover:tracking-wide">
//                   <span className="inline-block group-hover:animate-bounce" style={{animationDelay: '0ms'}}>Hack-Innovate</span>{' '}
//                   <span className="inline-block group-hover:animate-bounce" style={{animationDelay: '100ms'}}>is</span>{' '}
//                   <span className="inline-block group-hover:animate-bounce" style={{animationDelay: '200ms'}}>a</span>{' '}
//                   <span className="inline-block group-hover:animate-bounce" style={{animationDelay: '300ms'}}>24-hour</span>{' '}
//                   <span className="inline-block group-hover:animate-bounce" style={{animationDelay: '400ms'}}>hackathon</span>{' '}
//                   by GeeksforGeeks SRMIST Delhi-NCR that unites bright innovators, developers and creators. From ideation to execution, it offers hands-on experience, mentorship and collaboration in a high-energy environment. It&apos;s where bold ideas become real solutions, a launchpad for creativity, learning and innovation.
//                 </p>
//               </div>
//             </div>

//             {/* Domains */}
//             <div className="group relative p-8 rounded-3xl backdrop-blur-xl border border-opacity-30 transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden" 
//                  style={{
//                    background:'rgba(15,23,42,0.6)', 
//                    borderColor:'#a78bfa',
//                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
//                  }}
//                  onMouseEnter={(e) => {
//                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(167, 139, 250, 0.3), 0 0 30px rgba(167, 139, 250, 0.2)';
//                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(15,23,42,0.4))';
//                  }}
//                  onMouseLeave={(e) => {
//                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
//                    e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
//                  }}>
              
//               <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-violet-500/20 via-transparent to-violet-500/20 animate-pulse"></div>
//               <div className="absolute inset-1 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-b from-violet-500/10 to-transparent"></div>
//               <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-bl from-violet-500/30 to-transparent rounded-tr-3xl"></div>
              
//               <div className="relative z-10">
//                 <h4 className="text-lg font-semibold text-purple-200 mb-4 transition-all duration-300 group-hover:scale-105 group-hover:text-purple-100">DOMAINS</h4>
//                 <ul className="text-gray-200 text-sm space-y-2">
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-1 hover:scale-105 relative" onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px) scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(4px)'}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-purple-400 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300 group-hover:animate-pulse animate-ping-slow"></div>
//                     <span className="relative z-10">Web Development</span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded"></div>
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-2" style={{transitionDelay: '100ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-purple-400 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300"></div>
//                     Mobile App Development
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-3" style={{transitionDelay: '200ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-purple-400 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300"></div>
//                     AI/ML
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-4" style={{transitionDelay: '300ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-purple-400 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300"></div>
//                     Security
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-5" style={{transitionDelay: '400ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-purple-400 group-hover:shadow-lg group-hover:shadow-purple-400/50 transition-all duration-300"></div>
//                     Blockchain & Web3
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Fueled Within */}
//             <div className="group relative p-8 rounded-3xl backdrop-blur-xl border border-opacity-30 transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden" 
//                  style={{
//                    background:'rgba(15,23,42,0.6)', 
//                    borderColor:'#38bdf8',
//                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
//                  }}
//                  onMouseEnter={(e) => {
//                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(56, 189, 248, 0.3), 0 0 30px rgba(56, 189, 248, 0.2)';
//                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(15,23,42,0.4))';
//                  }}
//                  onMouseLeave={(e) => {
//                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
//                    e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
//                  }}>
              
//               <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20 animate-pulse"></div>
//               <div className="absolute inset-1 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
//               <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-bl from-cyan-500/30 to-transparent rounded-tr-3xl"></div>
              
//               <div className="relative z-10">
//                 <h3 className="text-xl font-bold mb-4 text-cyan-300 transition-all duration-300 group-hover:scale-105 group-hover:text-cyan-200">FUELED WITHIN</h3>
//                 <ul className="text-gray-300 text-sm space-y-2">
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-1">
//                     <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"></div>
//                     Intellectual Cohesion
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-2" style={{transitionDelay: '100ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"></div>
//                     Powered by peer collaboration
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-3" style={{transitionDelay: '200ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"></div>
//                     Supported by GFG Campus Body
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-4" style={{transitionDelay: '300ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"></div>
//                     Mentorship from Industry Trained Experts
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-5" style={{transitionDelay: '400ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300"></div>
//                     Driven by passion, not just prizes
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             {/* Benefits */}
//             <div className="group relative p-8 rounded-3xl backdrop-blur-xl border border-opacity-30 transition-all duration-700 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden" 
//                  style={{
//                    background:'rgba(15,23,42,0.6)', 
//                    borderColor:'#f472b6',
//                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
//                  }}
//                  onMouseEnter={(e) => {
//                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(244, 114, 182, 0.3), 0 0 30px rgba(244, 114, 182, 0.2)';
//                    e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(15,23,42,0.4))';
//                  }}
//                  onMouseLeave={(e) => {
//                    e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
//                    e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
//                  }}>
              
//               <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-r from-pink-500/20 via-transparent to-pink-500/20 animate-pulse"></div>
//               <div className="absolute inset-1 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-b from-pink-500/10 to-transparent"></div>
//               <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-bl from-pink-500/30 to-transparent rounded-tr-3xl"></div>
              
//               <div className="relative z-10">
//                 <h3 className="text-xl font-bold mb-4 text-pink-300 transition-all duration-300 group-hover:scale-105 group-hover:text-pink-200">BENEFITS</h3>
//                 <ul className="text-gray-300 text-sm space-y-2">
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-1">
//                     <div className="w-2 h-2 rounded-full mr-3 bg-pink-400 group-hover:shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300"></div>
//                     Exposure Skill
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-2" style={{transitionDelay: '100ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-pink-400 group-hover:shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300"></div>
//                     Growth
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-3" style={{transitionDelay: '200ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-pink-400 group-hover:shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300"></div>
//                     Innovation
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-4" style={{transitionDelay: '300ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-pink-400 group-hover:shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300"></div>
//                     Collaboration
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-5" style={{transitionDelay: '400ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-pink-400 group-hover:shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300"></div>
//                     Goodies
//                   </li>
//                   <li className="flex items-center group-hover:text-gray-100 transition-all duration-300 group-hover:translate-x-6" style={{transitionDelay: '500ms'}}>
//                     <div className="w-2 h-2 rounded-full mr-3 bg-pink-400 group-hover:shadow-lg group-hover:shadow-pink-400/50 transition-all duration-300"></div>
//                     Certification
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>


//         </div>
        
//         {/* Stats Matrix */}
//         <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto transition-all duration-2000 delay-1800 ${
//           textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//         }`}>
//           {[
//             { label: 'Neural Hours', value: '24:00', color: '#00ff87', icon: '⌛' },
//             { label: 'Code Warriors', value: 'XXX', color: '#0ea5e9', icon: '📟' },
//             { label: 'TEAMS', value: 'XX', color: '#8b5cf6', icon: '👩‍💻' }
//           ].map((stat, index) => (
//             <div key={index} className="group text-center relative">
//               <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
//               <div 
//                 className="text-3xl mb-4 opacity-80"
//                 style={{ 
//                   filter: `drop-shadow(0 0 15px ${stat.color}60)`
//                 }}
//               >
//                 {stat.icon}
//               </div>
              
//               <div 
//                 className="text-5xl md:text-6xl font-black mb-3 relative z-10"
//                 style={{ 
//                   color: stat.color,
//                   fontFamily: 'system-ui, -apple-system, sans-serif',
//                   textShadow: `0 0 30px ${stat.color}50`,
//                   letterSpacing: '-0.02em'
//                 }}
//               >
//                 {stat.value}
//               </div>
              
//               <div 
//                 className="text-gray-400 text-lg relative z-10"
//                 style={{ 
//                   fontFamily: 'system-ui, -apple-system, sans-serif',
//                   letterSpacing: '0.1em',
//                   textTransform: 'uppercase'
//                 }}
//               >
//                 {stat.label}
//               </div>
              
//               <div 
//                 className="w-16 h-0.5 mx-auto mt-4 rounded-full opacity-60"
//                 style={{
//                   background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`
//                 }}
//               />
//             </div>
//           ))}
//         </div>
        
//         {/* Countdown Section */}
// <div className={`mt-24 text-center transition-all duration-2000 delay-2100 ${
//   textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
// }`}>
//   <div className="mb-8">
//     <h3
//      className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 px-4"
//       style={{
//         color: '#ff9800', // orange
//         fontFamily: 'system-ui, -apple-system, sans-serif',
//         letterSpacing: '0.1em',
//         textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'
//       }}
//     >
//       REALITY BREACH IN
//     </h3>
//     {timeLeft.completed ? (
//       <div className="text-lg font-semibold px-4" style={{ color: '#ff9800' }}>You are good to go!</div>
//     ) : (
//       <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white px-4">
//         <div className="flex flex-col items-center">
//           <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 sm:p-3 md:p-4 border border-gray-700 shadow-2xl min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
//             <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.days).padStart(2, '0')}</span>
//           </div>
//           <span className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider">Days</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 sm:p-3 md:p-4 border border-gray-700 shadow-2xl min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
//             <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.hours).padStart(2, '0')}</span>
//           </div>
//           <span className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider">Hrs</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 sm:p-3 md:p-4 border border-gray-700 shadow-2xl min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
//             <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.minutes).padStart(2, '0')}</span>
//           </div>
//           <span className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider">Min</span>
//         </div>
//         <div className="flex flex-col items-center">
//           <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 sm:p-3 md:p-4 border border-gray-700 shadow-2xl min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
//             <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.seconds).padStart(2, '0')}</span>
//           </div>
//           <span className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider">Sec</span>
//         </div>
//       </div>
//     )}
//   </div>
// </div>
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
        
//         @keyframes featurePulse {
//           0%, 100% { 
//             box-shadow: 0 30px 60px var(--feature-color, #00ff87)30, 0 0 0 1px var(--feature-color, #00ff87)40;
//           }
//           50% { 
//             box-shadow: 0 40px 80px var(--feature-color, #00ff87)50, 0 0 0 2px var(--feature-color, #00ff87)60;
//           }
//         }
        
//         @keyframes bounce {
//           0%, 100% { 
//             transform: translateY(0px) scale(1);
//           }
//           50% { 
//             transform: translateY(-10px) scale(1.1);
//           }
//         }
        
//         @keyframes matrix {
//           0% { 
//             opacity: 0; 
//             transform: translateY(20px);
//           }
//           100% { 
//             opacity: 1; 
//             transform: translateY(0);
//           }
//         }
        
//         @keyframes glitch {
//           0%, 100% { 
//             transform: translateX(0);
//           }
//           20% { 
//             transform: translateX(-2px);
//           }
//           40% { 
//             transform: translateX(2px);
//           }
//           60% { 
//             transform: translateX(-1px);
//           }
//           80% { 
//             transform: translateX(1px);
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
//           .text-9xl { font-size: 5rem; }
//           .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
//           .text-5xl { font-size: 2.5rem; }
//           .text-6xl { font-size: 3rem; }
//         }
        
//         @media (max-width: 640px) {
//           .grid-cols-2 { grid-template-columns: 1fr; }
//           .text-7xl { font-size: 2.5rem; }
//           .text-9xl { font-size: 3.5rem; }
//           .text-3xl { font-size: 1.5rem; }
//           .text-5xl { font-size: 2rem; }
//         }
        
//         /* Advanced animations */
//         .animate-matrix {
//           animation: matrix 0.6s ease-out forwards;
//         }
        
//         .animate-glitch {
//           animation: glitch 0.3s ease-in-out infinite;
//         }
        
//         /* Glass morphism effects */
//         .glass {
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }
        
//         /* Neon glow effects */
//         .neon-green {
//           box-shadow: 0 0 5px #00ff87, 0 0 10px #00ff87, 0 0 20px #00ff87;
//         }
        
//         .neon-blue {
//           box-shadow: 0 0 5px #0ea5e9, 0 0 10px #0ea5e9, 0 0 20px #0ea5e9;
//         }
        
//         .neon-purple {
//           box-shadow: 0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 20px #8b5cf6;
//         }
        
//         /* Particle effects */
//         .particle {
//           position: absolute;
//           width: 2px;
//           height: 2px;
//           background: #00ff87;
//           border-radius: 50%;
//           animation: float 3s ease-in-out infinite;
//         }
        
//         .particle:nth-child(2n) {
//           background: #0ea5e9;
//           animation-delay: 1s;
//         }
        
//         .particle:nth-child(3n) {
//           background: #8b5cf6;
//           animation-delay: 2s;
//         }
        
//         /* Hover effects */
//         .hover-lift:hover {
//           transform: translateY(-8px) scale(1.02);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
//         }
        
//         .hover-glow:hover {
//           filter: drop-shadow(0 0 20px rgba(0, 255, 135, 0.5));
//         }
        
//         /* Text effects */
//         .text-hologram {
//           background: linear-gradient(135deg, #00ff87, #0ea5e9, #8b5cf6);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           animation: hologram 3s ease-in-out infinite;
//         }
        
//         @keyframes hologram {
//           0%, 100% { 
//             filter: hue-rotate(0deg) brightness(1);
//           }
//           50% { 
//             filter: hue-rotate(180deg) brightness(1.2);
//           }
//         }
        
//         /* Loading animations */
//         .loading-dots::after {
//           content: '';
//           animation: loading-dots 1.5s infinite;
//         }
        
//         @keyframes loading-dots {
//           0%, 20% { content: ''; }
//           40% { content: '.'; }
//           60% { content: '..'; }
//           80%, 100% { content: '...'; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EpicHackathonHero;
// export const HomePage = EpicHackathonHero;





import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SRGBColorSpace } from 'three';
import { useRouter } from 'next/navigation';
// Remove CountDown import and usage

const EpicHackathonHero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);
  const [textAnimation, setTextAnimation] = useState(false);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const router = useRouter();

  const features = [
    {
      title: "Neural Innovation",
      description: "AI-powered development at lightspeed",
      icon: "🧠",
      color: "#00ff87",
      gradient: "from-emerald-400 to-green-500"
    },
    {
      title: "Quantum Collaboration",
      description: "Entangled minds building the future",
      icon: "⚛️",
      color: "#0ea5e9",
      gradient: "from-sky-400 to-blue-500"
    },
    {
      title: "Reality Distortion",
      description: "24 hours to bend the impossible",
      icon: "🌌",
      color: "#8b5cf6",
      gradient: "from-purple-400 to-violet-500"
    },
    {
      title: "Code Evolution",
      description: "Algorithms that learn and adapt",
      icon: "🔮",
      color: "#06b6d4",
      gradient: "from-cyan-400 to-teal-500"
    }
  ];

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 3000);

    setTimeout(() => setTextAnimation(true), 500);

    return () => clearInterval(featureInterval);
  }, [features.length]);

  
  const commandSequence = [
    '📝 Step 1: Registration & Technical Quiz: Teams register and complete an online preliminary quiz (30-45 minutes) to qualify for the main event.',
    '🔍 Step 2: Round 1 – Cipher Chase: Teams solve 4 Linux-based riddles using cybersecurity skills to find hidden flags and unlock the next level.',
    '🛠️ Step 3: Round 2 – Bug Discovery, Fixing & Implementation: Teams debug and fix bugs in randomly assigned projects, improving code quality and system functionality.',
    '📋 Step 4: Round 3 – Documentation & Technical Explanation: Teams create comprehensive bug reports, document their fixes, and prepare technical explanations.',
    '🎤 Step 5: Final Presentations & Closing: Teams present their complete work to judges, showcase their cybersecurity solutions, and winners are announced.'
  ];

  useEffect(() => {
    let isActive = true;
    let commandIndex = 0;
    let typeInterval;
    let nextCommandTimeout;

    const typeCommand = (command, callback) => {
      let charIndex = 0;
      setCurrentCommand('');
      
      typeInterval = setInterval(() => {
        if (!isActive) return;
        
        if (charIndex <= command.length) {
          setCurrentCommand(command.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          // Wait a moment after typing is complete, then execute callback
          setTimeout(() => {
            if (isActive && callback) callback();
          }, 200);
        }
      }, 15); // Fast typing speed
    };

    const processNextCommand = () => {
      if (!isActive) return;
      
      if (commandIndex < commandSequence.length) {
        const command = commandSequence[commandIndex];
        
        typeCommand(command, () => {
          if (!isActive) return;
          
          // Add the completed command to terminal lines
          setTerminalLines(prev => [...prev, `> ${command}`]);
          setCurrentCommand('');
          commandIndex++;
          
          // Schedule next command
          nextCommandTimeout = setTimeout(processNextCommand, 300);
        });
      } else {
        // All commands completed, reset after pause
        nextCommandTimeout = setTimeout(() => {
          if (!isActive) return;
          
          setTerminalLines([]);
          setCurrentCommand('');
          commandIndex = 0;
          processNextCommand();
        }, 3000); // 3 second pause before restart
      }
    };

    // Start the animation
    const startTimeout = setTimeout(processNextCommand, 100);

    // Cleanup function
    return () => {
      isActive = false;
      if (typeInterval) clearInterval(typeInterval);
      if (nextCommandTimeout) clearTimeout(nextCommandTimeout);
      if (startTimeout) clearTimeout(startTimeout);
    };
  }, []); // Empty dependency array

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
      const particleCount = 200;
      const connections = [];
      
      // Create nodes
      const nodeGeometry = new THREE.SphereGeometry(0.5, 16, 16);
      const nodes = [];
      
      for (let i = 0; i < particleCount; i++) {
        const nodeMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(
            0.15 + Math.random() * 0.1, // Green-cyan range
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
          amplitude: 5 + Math.random() * 10,
          pulseSpeed: 1 + Math.random() * 2
        };
        
        nodes.push(node);
        group.add(node);
      }
      
      // Create connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position);
          if (distance < 80 && Math.random() > 0.85) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              nodes[i].position,
              nodes[j].position
            ]);
            
            const material = new THREE.LineBasicMaterial({
              color: new THREE.Color().setHSL(0.18, 0.6, 0.5),
              transparent: true,
              opacity: 0.2
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
      
      for (let i = 0; i < 12; i++) {
        const size = 2 + Math.random() * 4;
        const orbGeometry = new THREE.SphereGeometry(size, 32, 32);
        
        // Create glowing material
        const orbMaterial = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(
            0.55 + Math.random() * 0.1, // Blue range
            0.8,
            0.6
          ),
          transparent: true,
          opacity: 0.15
        });
        
        const orb = new THREE.Mesh(orbGeometry, orbMaterial);
        orb.position.set(
          (Math.random() - 0.5) * 300,
          (Math.random() - 0.5) * 200,
          (Math.random() - 0.5) * 150
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
          amplitude: 15 + Math.random() * 20,
          rotationSpeed: 0.01 + Math.random() * 0.02
        };
        
        group.add(orb);
      }
      
      return group;
    };

    // Create particle streams
    const createParticleStreams = () => {
      const group = new THREE.Group();
      
      for (let stream = 0; stream < 5; stream++) {
        const streamGeometry = new THREE.BufferGeometry();
        const streamParticles = 50;
        const positions = new Float32Array(streamParticles * 3);
        const colors = new Float32Array(streamParticles * 3);
        const sizes = new Float32Array(streamParticles);
        
        for (let i = 0; i < streamParticles; i++) {
          const angle = (stream / 5) * Math.PI * 2;
          const radius = 100 + Math.random() * 50;
          
          positions[i * 3] = Math.cos(angle) * radius;
          positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
          positions[i * 3 + 2] = Math.sin(angle) * radius;
          
          // Alternate between blue and green
          const hue = stream % 2 === 0 ? 0.18 : 0.55;
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
            
            // Pulsing effect
            const scale = 1 + Math.sin(time * userData.pulseSpeed + index) * 0.3;
            node.scale.setScalar(scale);
            
            // Color cycling
            const hue = (time * 0.1 + index * 0.1) % 1;
            node.material.color.setHSL(0.15 + hue * 0.1, 0.8, 0.5);
          });
        }
        
        // Update connections
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
            
            // Animate connection opacity
            connection.material.opacity = 0.1 + Math.sin(time * 2) * 0.1;
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
            
            // Breathing effect
            const breathe = 1 + Math.sin(time * 2 + index) * 0.2;
            orb.scale.setScalar(breathe);
          }
        });
      }
      
      // Animate particle streams
      if (particleStreams) {
        particleStreams.children.forEach((stream, streamIndex) => {
          if (
            (stream instanceof THREE.Mesh || stream instanceof THREE.Points) &&
            stream.geometry &&
            stream.geometry.attributes &&
            stream.geometry.attributes.position
          ) {
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
      
      // Subtle camera oscillation
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

  // Custom Countdown Timer
  const [timeLeft, setTimeLeft] = useState({days: 0, hours: 0, minutes: 0, seconds: 0, completed: false});
  useEffect(() => {
    
    const target = new Date('2025-09-12T03:30:00Z').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance <= 0) {
        setTimeLeft({days: 0, hours: 0, minutes: 0, seconds: 0, completed: true});
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
          completed: false
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full min-h-screen overflow-hidden pt-20 md:pt-24"
      style={{
        background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 30%, #000000 70%)',
      }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      
      {/* Dynamic lighting effects - Fixed to cover entire page */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        {/* Main spotlight */}
        <div 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-full"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(0, 255, 135, 0.15) 0%, rgba(0, 255, 135, 0.08) 30%, rgba(14, 165, 233, 0.05) 60%, transparent 80%)',
            filter: 'blur(80px)',
            animation: 'pulse 4s ease-in-out infinite'
          }}
        />
        
        {/* Secondary glow */}
        <div 
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0.06) 40%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        
        {/* Tertiary accent */}
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
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 py-8">
        
        {/* Main Header */}
        <div className="mb-8 sm:mb-12">
  <div className="mb-6">
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
      VulnVANGUARD
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
      CYBERSECURITY HACKATHON
    </div>
  </div>
</div>

{/* Epic Subtitle */}
<div className={`mb-8 -mt-10 sm:mb-10 max-w-4xl transition-all duration-2000 delay-600 ${
  textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>
  <h2 
    className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 text-gray-100 leading-tight"
    style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      letterSpacing: '0.02em'
    }}
  >
    Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 font-semibold">Security</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold">Innovation</span>
  </h2>
                   
  <p 
    className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
    style={{
      fontFamily: 'system-ui, -apple-system, sans-serif',
      letterSpacing: '0.01em'
    }}
  >
    Defend, discover, and deploy cutting-edge solutions in a 24-hour cybersecurity challenge where ethical hackers forge the future of digital defense.
  </p>
</div>

        {/* Terminal Window */}
        {/* Terminal Window */}
        <div 
      className="mb-10 h-[18.2rem] sm:mb-10 w-full max-w-3xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden"
      style={{
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(30px)',
        border: '1px solid rgba(0, 255, 170, 0.4)',
        boxShadow: '0 20px 60px rgba(0, 255, 170, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }}
    >
      <div 
        className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="flex space-x-2">
          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full shadow-lg shadow-red-500/30 animate-pulse"></div>
          <div 
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/30 animate-pulse"
            style={{animationDelay: '0.5s'}}
          ></div>
          <div 
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full shadow-lg shadow-green-500/30 animate-pulse"
            style={{animationDelay: '1s'}}
          ></div>
        </div>
        <div
          className="text-xs font-mono opacity-80"
          style={{
            color: '#00ffaa',
            textShadow: '0 0 10px rgba(0, 255, 170, 0.5)'
          }}
        >
          hackathon@terminal:~$
        </div>
      </div>
      
      <div 
        className="p-3 sm:p-4 h-[26rem] sm:h-[28rem] overflow-y-auto"
        style={{
          fontFamily: 'SF Mono, Monaco, Consolas, "Liberation Mono", Menlo, monospace',
          fontSize: '12px',
          lineHeight: '1.6',
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(0, 255, 170, 0.3) transparent'
        }}
      >
        {terminalLines.map((line, index) => (
          <div 
            key={index}
            className="mb-2 opacity-80 text-xs leading-relaxed"
            style={{
              color: '#00ffaa',
              textShadow: '0 0 8px rgba(0, 255, 170, 0.4)',
              animation: `fadeIn 0.5s ease-in ${index * 0.05}s both`
            }}
          >
            {line}
          </div>
        ))}
        
        <div
          className="flex items-start text-xs leading-relaxed"
          style={{
            color: '#00ffaa',
            textShadow: '0 0 8px rgba(0, 255, 170, 0.4)'
          }}
        >
          <span className="mr-2 opacity-70 flex-shrink-0">{'>'}</span>
          <span className="flex-1">{currentCommand}</span>
          {currentCommand && (
            <span
              className="w-2 h-4 ml-1 flex-shrink-0 animate-pulse"
              style={{
                display: 'inline-block',
                background: '#00ffaa',
                boxShadow: '0 0 10px rgba(0, 255, 170, 0.8)',
              }}
            />
          )}
        </div>
      </div>
    </div>
        
        {/* CTA Section */}
        <div className={`flex flex-col mt-4 sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-2000 delay-900 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #00ff87, #0ea5e9)',
              color: 'black',
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em',
              boxShadow: '0 20px 40px rgba(0, 255, 135, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 30px 60px rgba(0, 255, 135, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-4px) scale(1.05)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 20px 40px rgba(0, 255, 135, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)';
              (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0) scale(1)';
            }}
          >
            <a
              href="https://www.srmist-ncr-gfg.club/Registration"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 block w-full h-full text-center"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              Register Now
            </a>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          
            
        </div>
        
        {/* Feature Matrix Replacement: Event Details Section */}
<div className={`max-w-7xl mx-auto mt-10 mb-20 transition-all duration-1000 ${
  textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
}`}>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
    {/* About the Event */}
    <div className="group relative p-6 rounded-3xl backdrop-blur-xl border border-opacity-30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[320px] flex flex-col" 
         style={{
           background:'rgba(15,23,42,0.6)', 
           borderColor:'#a78bfa',
           boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
         }}
         onMouseEnter={(e) => {
           e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(167, 139, 250, 0.4)';
           e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,23,42,0.9), rgba(30,41,59,0.7))';
           e.currentTarget.style.borderColor = '#c4b5fd';
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
           e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
           e.currentTarget.style.borderColor = '#a78bfa';
         }}>
      
      {/* Simple border glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-purple-500/20 via-transparent to-purple-500/20"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-bl from-purple-500/30 to-transparent rounded-tr-3xl"></div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-4 text-purple-300 transition-colors duration-300 group-hover:text-purple-100">ABOUT THE EVENT</h3>
        <p className="text-gray-300 text-sm mb-6 leading-relaxed group-hover:text-gray-100 transition-colors duration-300 flex-1">
        VulnVANGUARD is a 24-hour cybersecurity hackathon by GeeksforGeeks SRMIST Delhi-NCR for ethical hackers and security enthusiasts. Participants engage in hands-on penetration testing, incident response, and security architecture to develop innovative cybersecurity solutions.
        </p>
        <div className="flex items-center justify-center text-xs text-purple-400 group-hover:text-purple-200 transition-colors duration-300">
            24-Hour Challenge
        </div>
      </div>
    </div>

    {/* Challenge Domains */}
    <div className="group relative p-6 rounded-3xl backdrop-blur-xl border border-opacity-30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[320px] flex flex-col" 
         style={{
           background:'rgba(15,23,42,0.6)', 
           borderColor:'#ef4444',
           boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
         }}
         onMouseEnter={(e) => {
           e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(239, 68, 68, 0.3)';
           e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(15,23,42,0.4))';
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
           e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
         }}>
      
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20"></div>
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-bl from-red-500/30 to-transparent rounded-tr-3xl"></div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        <h4 className="text-lg font-semibold text-red-300 mb-4 transition-colors duration-300 group-hover:text-red-100">CHALLENGE DOMAINS</h4>
        <ul className="text-gray-200 text-sm space-y-3 flex-1 mb-4">
          <li className="flex items-center group-hover:text-gray-100 transition-all duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-red-400 transition-all duration-300"></div>
            Linux System Security
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-all duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-red-400 transition-all duration-300"></div>
            Vulnerability Assessment
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-all duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-red-400 transition-all duration-300"></div>
            Penetration Testing
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-all duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-red-400 transition-all duration-300"></div>
            Incident Response
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-all duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-red-400 transition-all duration-300"></div>
            Digital Forensics
          </li>
        </ul>
        <div className="text-xs text-red-400 group-hover:text-red-200 transition-colors duration-300 text-center font-semibold">
          5 Core Domains
        </div>
      </div>
    </div>

    {/* Powered By */}
    <div className="group relative p-6 rounded-3xl backdrop-blur-xl border border-opacity-30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[320px] flex flex-col" 
         style={{
           background:'rgba(15,23,42,0.6)', 
           borderColor:'#38bdf8',
           boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
         }}
         onMouseEnter={(e) => {
           e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(56, 189, 248, 0.3)';
           e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(15,23,42,0.4))';
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
           e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
         }}>
      
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/20 via-transparent to-cyan-500/20"></div>
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-bl from-cyan-500/30 to-transparent rounded-tr-3xl"></div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-4 text-cyan-300 transition-colors duration-300 group-hover:text-cyan-200">POWERED BY</h3>
        <ul className="text-gray-300 text-sm space-y-3 flex-1 mb-4">
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 transition-all duration-300"></div>
            Elite Security Mentors
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 transition-all duration-300"></div>
            Real-World Cyber Challenges
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 transition-all duration-300"></div>
            GeeksforGeeks SRMIST Chapter
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 transition-all duration-300"></div>
            Industry Security Experts
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-cyan-400 transition-all duration-300"></div>
            Ethical Hacking Community
          </li>
        </ul>
        <div className="text-xs text-cyan-400 group-hover:text-cyan-200 transition-colors duration-300 text-center font-semibold">
          Premium Support Network
        </div>
      </div>
    </div>

    {/* Rewards & Recognition */}
    <div className="group relative p-6 rounded-3xl backdrop-blur-xl border border-opacity-30 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer overflow-hidden min-h-[320px] flex flex-col" 
         style={{
           background:'rgba(15,23,42,0.6)', 
           borderColor:'#10b981',
           boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
         }}
         onMouseEnter={(e) => {
           e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(16, 185, 129, 0.3)';
           e.currentTarget.style.background = 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(15,23,42,0.4))';
         }}
         onMouseLeave={(e) => {
           e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.3)';
           e.currentTarget.style.background = 'rgba(15,23,42,0.6)';
         }}>
      
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r from-emerald-500/20 via-transparent to-emerald-500/20"></div>
      <div className="absolute top-0 right-0 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-bl from-emerald-500/30 to-transparent rounded-tr-3xl"></div>
      
      <div className="relative z-10 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-4 text-emerald-300 transition-colors duration-300 group-hover:text-emerald-200">REWARDS & RECOGNITION</h3>
        <ul className="text-gray-300 text-sm space-y-3 flex-1 mb-4">
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-emerald-400 transition-all duration-300"></div>
            Security Skills Mastery
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-emerald-400 transition-all duration-300"></div>
            Career Advancement
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-emerald-400 transition-all duration-300"></div>
            Networking Opportunities
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-emerald-400 transition-all duration-300"></div>
            Industry Recognition
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-emerald-400 transition-all duration-300"></div>
            Premium Swag & Prizes
          </li>
          <li className="flex items-center group-hover:text-gray-100 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full mr-3 bg-emerald-400 transition-all duration-300"></div>
            Cybersecurity Certification
          </li>
        </ul>
        <div className="text-xs text-emerald-400 group-hover:text-emerald-200 transition-colors duration-300 text-center font-semibold">
          6 Key Benefits
        </div>
      </div>
    </div>
  </div>

</div>
        {/* Stats Matrix */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto transition-all duration-2000 delay-1800 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {[
            { label: 'Neural Hours', value: '24:00', color: '#00ff87', icon: '⌛' },
            { label: 'Code Warriors', value: 'XXX', color: '#0ea5e9', icon: '📟' },
            { label: 'TEAMS', value: 'XX', color: '#8b5cf6', icon: '👩‍💻' }
          ].map((stat, index) => (
            <div key={index} className="group text-center relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 " />
              
              <div 
                className="text-3xl mb-4 opacity-80"
                style={{ 
                  filter: `drop-shadow(0 0 15px ${stat.color}60)`
                }}
              >
                {stat.icon}
              </div>
              
              <div 
                className="text-5xl md:text-6xl font-black mb-3 relative z-10"
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
                className="text-gray-400 text-lg relative z-10"
                style={{ 
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}
              >
                {stat.label}
              </div>
              
              <div 
                className="w-16 h-0.5 mx-auto mt-4 rounded-full opacity-60"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Countdown Section */}
        <div className={`mt-24 text-center transition-all duration-2000 delay-2100 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="mb-8">
            <h3
             className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 px-4"
              style={{
                color: '#ff9800', // orange
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '0.1em',
                textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'
              }}
            >
              REALITY BREACH IN
            </h3>
            {timeLeft.completed ? (
              <div className="text-lg font-semibold px-4" style={{ color: '#ff9800' }}>You are good to go!</div>
            ) : (
              <div className="flex justify-center space-x-2 sm:space-x-4 md:space-x-8 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white px-4">
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 sm:p-3 md:p-4 border border-gray-700 shadow-2xl min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.days).padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider">Days</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 sm:p-3 md:p-4 border border-gray-700 shadow-2xl min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.hours).padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider">Hrs</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 sm:p-3 md:p-4 border border-gray-700 shadow-2xl min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider">Min</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-2 sm:p-3 md:p-4 border border-gray-700 shadow-2xl min-w-[60px] sm:min-w-[70px] md:min-w-[80px]">
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-400 mt-2 uppercase tracking-wider">Sec</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Enhanced Styles */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 0.8;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        /* Custom scrollbar for terminal */
        .terminal-content::-webkit-scrollbar {
          width: 4px;
        }

        .terminal-content::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
        }

        .terminal-content::-webkit-scrollbar-thumb {
          background: rgba(0, 255, 170, 0.3);
          border-radius: 2px;
        }

        .terminal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 255, 170, 0.5);
        }

        /* Enhanced terminal animations */
        .terminal-cursor {
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
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
        
        @keyframes featurePulse {
          0%, 100% { 
            box-shadow: 0 30px 60px var(--feature-color, #00ff87)30, 0 0 0 1px var(--feature-color, #00ff87)40;
          }
          50% { 
            box-shadow: 0 40px 80px var(--feature-color, #00ff87)50, 0 0 0 2px var(--feature-color, #00ff87)60;
          }
        }
        
        @keyframes bounce {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-10px) scale(1.1);
          }
        }
        
        @keyframes matrix {
          0% { 
            opacity: 0; 
            transform: translateY(20px);
          }
          100% { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        @keyframes glitch {
          0%, 100% { 
            transform: translateX(0);
          }
          20% { 
            transform: translateX(-2px);
          }
          40% { 
            transform: translateX(2px);
          }
          60% { 
            transform: translateX(-1px);
          }
          80% { 
            transform: translateX(1px);
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
          .text-9xl { font-size: 5rem; }
          .grid-cols-4 { grid-template-columns: repeat(2, 1fr); }
          .text-5xl { font-size: 2.5rem; }
          .text-6xl { font-size: 3rem; }
        }
        
        @media (max-width: 640px) {
          .grid-cols-2 { grid-template-columns: 1fr; }
          .text-7xl { font-size: 2.5rem; }
          .text-9xl { font-size: 3.5rem; }
          .text-3xl { font-size: 1.5rem; }
          .text-5xl { font-size: 2rem; }
        }
        
        /* Advanced animations */
        .animate-matrix {
          animation: matrix 0.6s ease-out forwards;
        }
        
        .animate-glitch {
          animation: glitch 0.3s ease-in-out infinite;
        }
        
        /* Glass morphism effects */
        .glass {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        /* Neon glow effects */
        .neon-green {
          box-shadow: 0 0 5px #00ff87, 0 0 10px #00ff87, 0 0 20px #00ff87;
        }
        
        .neon-blue {
          box-shadow: 0 0 5px #0ea5e9, 0 0 10px #0ea5e9, 0 0 20px #0ea5e9;
        }
        
        .neon-purple {
          box-shadow: 0 0 5px #8b5cf6, 0 0 10px #8b5cf6, 0 0 20px #8b5cf6;
        }
        
        /* Particle effects */
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00ff87;
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }
        
        .particle:nth-child(2n) {
          background: #0ea5e9;
          animation-delay: 1s;
        }
        
        .particle:nth-child(3n) {
          background: #8b5cf6;
          animation-delay: 2s;
        }
        
        /* Hover effects */
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .hover-glow:hover {
          filter: drop-shadow(0 0 20px rgba(0, 255, 135, 0.5));
        }
        
        /* Text effects */
        .text-hologram {
          background: linear-gradient(135deg, #00ff87, #0ea5e9, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: hologram 3s ease-in-out infinite;
        }
        
        @keyframes hologram {
          0%, 100% { 
            filter: hue-rotate(0deg) brightness(1);
          }
          50% { 
            filter: hue-rotate(180deg) brightness(1.2);
          }
        }
        
        /* Loading animations */
        .loading-dots::after {
          content: '';
          animation: loading-dots 1.5s infinite;
        }
        
        @keyframes loading-dots {
          0%, 20% { content: ''; }
          40% { content: '.'; }
          60% { content: '..'; }
          80%, 100% { content: '...'; }
        }
      `}</style>
    </div>
  );
};

export default EpicHackathonHero;
export const HomePage = EpicHackathonHero;



