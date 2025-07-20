// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { gsap } from 'gsap';
// import './styles.css'; 
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
// import { Font } from 'three/examples/jsm/loaders/FontLoader.js';

// const HomePage: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationRef = useRef<number | null>(null);
//   const sceneRef = useRef<THREE.Scene | null>(null);
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const particlesRef = useRef<THREE.Points | null>(null);
//   const encryptionTextRef = useRef<HTMLDivElement>(null);
  
//   const encryptText = (text: string): string => {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}:"<>?|[];,./\\';
//     return text.split('').map(char => 
//       Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : char
//     ).join('');
//   };
  
//   const decryptText = (original: string, encrypted: string, progress: number): string => {
//     return original.split('').map((char, i) => {
//       if (i < original.length * progress) {
//         return char;
//       }
//       return encrypted[i] || char;
//     }).join('');
//   };

//   useEffect(() => {
//     gsap.ticker.lagSmoothing(0);
    
//     if (!containerRef.current || !canvasRef.current) return;
    
//     const scene = new THREE.Scene();
//     sceneRef.current = scene;
    
//     const camera = new THREE.PerspectiveCamera(
//       75, 
//       window.innerWidth / window.innerHeight, 
//       0.1, 
//       1000
//     );
//     camera.position.z = 20;
//     cameraRef.current = camera;
    
//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvasRef.current,
//       alpha: true,
//       antialias: true
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     rendererRef.current = renderer;
    
//     const particleCount = 2000;
//     const particleGeometry = new THREE.BufferGeometry();
//     const positions = new Float32Array(particleCount * 3);
//     const speeds = new Float32Array(particleCount);
    
//     for (let i = 0; i < particleCount; i++) {
     
//       positions[i * 3] = (Math.random() - 0.5) * 100;  // x
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 50;  // y
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 50;  // z
     
//       speeds[i] = 0.03 + Math.random() * 0.05;
//     }
    
//     particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//     particleGeometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));
    
//     const particleMaterial = new THREE.PointsMaterial({
//       size: 0.2,
//       color: 0x00ff00,
//       transparent: true,
//       opacity: 0.7,
//       blending: THREE.AdditiveBlending
//     });
    
//     const particles = new THREE.Points(particleGeometry, particleMaterial);
//     scene.add(particles);
//     particlesRef.current = particles;
    
//     const originalTexts = [
//       "FIND THE BUG",
//       "SOLVE THE BUG",
//       "MAKE THE REPORT",
//       "SUBMIT THE REPORT"
//     ];
    
//     let encryptedTexts = originalTexts.map(text => encryptText(text));
//     let currentTextIndex = 0;
    
//     const animateEncryption = () => {
//       if (!encryptionTextRef.current) return;
      
//       const originalText = originalTexts[currentTextIndex];
//       const encryptedText = encryptedTexts[currentTextIndex];
      
//       gsap.to({}, {
//         duration: 3,
//         onUpdate: function() {
//           if (!encryptionTextRef.current) return;
//           const progress = this.progress();
          
//           if (progress < 0.5) {
            
//             const adjustedProgress = progress * 2; 
//             encryptionTextRef.current.textContent = decryptText(encryptedText, originalText, adjustedProgress);
//             encryptionTextRef.current.setAttribute('data-state', 'encrypting');
//           } else {
            
//             const adjustedProgress = (progress - 0.5) * 2; 
//             encryptionTextRef.current.textContent = decryptText(originalText, encryptedText, adjustedProgress);
//             encryptionTextRef.current.setAttribute('data-state', 'decrypting');
//           }
//         },
//         onComplete: function() {
//           currentTextIndex = (currentTextIndex + 1) % originalTexts.length;
//           encryptedTexts[currentTextIndex] = encryptText(originalTexts[currentTextIndex]);
//           setTimeout(animateEncryption, 1000);
//         }
//       });
//     };
    
//     animateEncryption();
    
//     gsap.from('.hero-content', {
//       y: 100,
//       opacity: 0,
//       duration: 1.2,
//       ease: "power3.out"
//     });
    
//     gsap.from('.cta-button', {
//       scale: 0.8,
//       opacity: 0,
//       duration: 1,
//       delay: 0.8,
//       ease: "elastic.out(1, 0.5)"
//     });
    
//     const createBinaryElements = () => {
//       const group = new THREE.Group();
//       const binaryCount = 300;
//     const loader = new FontLoader();
//     let font: Font | null = null;

//      loader.load('/path-to-your-font.json', (loadedFont) => {
//       font = loadedFont;
//        console.log('Font loaded:', font);
//     });
      
//       const createBinaryDigit = (value: string, position: THREE.Vector3) => {
//         const textGeometry = new THREE.PlaneGeometry(0.5, 0.5);
//         const canvas = document.createElement('canvas');
//         canvas.width = 64;
//         canvas.height = 64;
//         const context = canvas.getContext('2d');
        
//         if (context) {
//           context.fillStyle = '#000000';
//           context.fillRect(0, 0, 64, 64);
//           context.font = 'bold 48px Arial';
//           context.fillStyle = '#00ff00';
//           context.textAlign = 'center';
//           context.textBaseline = 'middle';
//           context.fillText(value, 32, 32);
//         }
        
//         const texture = new THREE.CanvasTexture(canvas);
//         const material = new THREE.MeshBasicMaterial({
//           map: texture,
//           transparent: true,
//           opacity: 0.7 + Math.random() * 0.3
//         });
        
//         const mesh = new THREE.Mesh(textGeometry, material);
//         mesh.position.copy(position);
//         return mesh;
//       };
      
//       for (let i = 0; i < binaryCount; i++) {
//         const value = Math.random() > 0.5 ? "1" : "0";
//         const position = new THREE.Vector3(
//           (Math.random() - 0.5) * 100,
//           (Math.random() - 0.5) * 50,
//           (Math.random() - 0.5) * 20
//         );
        
//         const digit = createBinaryDigit(value, position);
//         group.add(digit);
        
//         if (Math.random() > 0.7) {
//           const blockGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
//           const blockMaterial = new THREE.MeshBasicMaterial({
//             color: 0x00ff00,
//             transparent: true,
//             opacity: 0.5 + Math.random() * 0.3
//           });
          
//           const block = new THREE.Mesh(blockGeometry, blockMaterial);
//           block.position.set(
//             position.x + (Math.random() - 0.5) * 2,
//             position.y + (Math.random() - 0.5) * 2,
//             position.z + (Math.random() - 0.5) * 2
//           );
//           group.add(block);
//         }
//       }
      
//       return group;
//     };
    
//     const binaryGroup = createBinaryElements();
//     scene.add(binaryGroup);
    
   
//     const animate = () => {
//       if (!particlesRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;
      
      
//       const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
//       const speeds = particlesRef.current.geometry.attributes.speed.array as Float32Array;
      
//       for (let i = 0; i < positions.length / 3; i++) {
       
//         positions[i * 3 + 1] -= speeds[i];
        
//         if (positions[i * 3 + 1] < -25) {
//           positions[i * 3 + 1] = 25;
//           positions[i * 3] = (Math.random() - 0.5) * 100;
//           positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
//         }
//       }
      
//       particlesRef.current.geometry.attributes.position.needsUpdate = true;
//       particlesRef.current.rotation.y += 0.0005;

//       binaryGroup.children.forEach((child, index) => {
       
//         child.position.y -= 0.02 + (index % 5) * 0.005;
        
//         if (child.position.y < -25) {
//           child.position.y = 25;
//           child.position.x = (Math.random() - 0.5) * 100;
//           child.position.z = (Math.random() - 0.5) * 50;
//         }
        
//         child.rotation.z += 0.001;
//       });
      
//       rendererRef.current.render(sceneRef.current, cameraRef.current);
//       animationRef.current = requestAnimationFrame(animate);
//     };
    
//     animate();
    
//     const handleResize = () => {
//       if (!cameraRef.current || !rendererRef.current) return;
      
//       cameraRef.current.aspect = window.innerWidth / window.innerHeight;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationRef.current) cancelAnimationFrame(animationRef.current);
      
//       if (particlesRef.current) {
//         particlesRef.current.geometry.dispose();
//         (particlesRef.current.material as THREE.Material).dispose();
//       }
      
//       if (rendererRef.current) {
//         rendererRef.current.dispose();
//       }
//     };
//   }, []);

//   return (
//     <>
//       <div className="landing-container" ref={containerRef}>
//         <canvas ref={canvasRef} className="webgl-canvas"></canvas>
        
//         <div className="content-wrapper">
//           <header className="header">
//             <div className="logo">Vuln-<span>VANGUARD</span></div>
//           </header>
          
//           <main className="hero-content">
//             <h1 className="main-title">Vuln<span>VANGUARD</span></h1>
//             <h2 className="subtitle">Next-Gen Cybersecurity Event</h2>
            
//             <div className="encryption-animation">
//               <div className="encryption-text" ref={encryptionTextRef}>FIND THE BUG & SOLVE THE BUG</div>
//             </div>
            
//             <p className="description">
//               The ultimate cybersecurity challenge.
//               Innovate with the best. Build the future of secure web applications. Exciting
//               prizes await.
//             </p>
            
            
//           </main>
//         </div> 
//       </div>
//     </>
//   );
// };

// export default HomePage;




import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SRGBColorSpace } from 'three';
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
  }, []);

  const commandSequence = [
    '📝 Step 1: Registration: Teams register to officially enter the competition.',
    '🧠 Step 2: Quiz Round: A screening quiz to evaluate technical and problem-solving skills.',
    '💡 Step 3: Round 1 – Project Development: Shortlisted teams Opt a problem statement and build a project.',
    '🔧 Step 4: Round 2 – Feature Enhancement: Selected teams improve their project by adding new features or refining functionality.',
    '🎤 Step 5: Final Pitch: Top teams present their final projects to a panel of judges, and winners are declared.',
  ];

  useEffect(() => {
    let terminalInterval;
    let commandIndex = 0;
    let isPaused = false;
    let pauseTimeout;

    // Helper to start typing a command
    const typeCommandFn = (command, onComplete) => {
      let charIndex = 0;
      const typeCommand = setInterval(() => {
        if (charIndex < command.length) {
          setCurrentCommand(command.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeCommand);
          setTimeout(onComplete, 400);
        }
      }, 40);
    };

    // Animation loop
    const runTerminal = () => {
      if (commandIndex < commandSequence.length) {
        const command = commandSequence[commandIndex];
        setCurrentCommand('');
        typeCommandFn(command, () => {
          setTerminalLines(prev => [...prev, `> ${command}`]);
          setCurrentCommand('');
          commandIndex++;
          terminalInterval = setTimeout(runTerminal, 1800);
        });
      } else {
        // Pause for 45 seconds, then reset
        isPaused = true;
        pauseTimeout = setTimeout(() => {
          setTerminalLines([]);
          commandIndex = 0;
          isPaused = false;
          runTerminal();
        }, 10000);
      }
    };

    runTerminal();

    return () => {
      clearTimeout(terminalInterval);
      if (pauseTimeout) clearTimeout(pauseTimeout);
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
              Hack-Innovate-2.0
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
              HACKATHON
            </div>
          </div>
        </div>
        
        {/* Epic Subtitle */}
        <div className={`mb-8 sm:mb-10 max-w-4xl transition-all duration-2000 delay-600 ${
          textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 
            className="text-xl sm:text-2xl md:text-3xl font-light mb-4 sm:mb-6 text-gray-100 leading-tight"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em'
            }}
          >
            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500 font-semibold">Code</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 font-semibold">Consciousness</span>
          </h2>
          
          <p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.01em'
            }}
          >
 Where bold ideas become real solutions, a launchpad for creativity, learning and innovation.
          </p>
        </div>

        {/* Terminal Window */}
        <div 
          className="mb-10 h-64 sm:mb-10 w-full max-w-3xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(0, 255, 170, 0.3)',
            boxShadow: '0 20px 60px rgba(0, 255, 170, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
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
              hackathon@terminal:~$
            </div>
          </div>
          
          <div 
            className="p-3 sm:p-4 h-44 sm:h-56 overflow-hidden"
            style={{ 
              fontFamily: 'SF Mono, Monaco, Consolas, monospace', 
              fontSize: '13px',
              lineHeight: '1.5'
            }}
          >
            {terminalLines.map((line, index) => (
              <div 
                key={index} 
                className="mb-1 opacity-90 text-xs"
                style={{
                  color: '#00ffaa',
                  textShadow: '0 0 8px rgba(0, 255, 170, 0.4)'
                }}
              >
                {line}
              </div>
            ))}
            <div 
              className="flex items-center text-xs"
              style={{
                color: '#00ffaa',
                textShadow: '0 0 8px rgba(0, 255, 170, 0.4)'
              }}
            >
              <span className="mr-1 opacity-70">{'>'}</span>
              <span>{currentCommand}</span>
              <span 
                className="w-1.5 h-3 sm:h-4 ml-1"
                style={{ 
                  display: 'inline-block',
                  background: '#00ffaa',
                  boxShadow: '0 0 10px rgba(0, 255, 170, 0.8)',
                  animation: 'pulse 1s infinite'
                }}
              />
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
          
          <button
            className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden border-2 border-cyan-400 text-cyan-400 hover:text-black"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              letterSpacing: '0.02em',
              background: 'rgba(6, 182, 212, 0.1)',
              backdropFilter: 'blur(20px)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(6, 182, 212, 0.9)';
              e.currentTarget.style.borderColor = '#06b6d4';
            }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)';
                e.currentTarget.style.borderColor = '#06b6d4';
              }}
            >
              <span className="relative z-10">EXPLORE DEPTHS</span>
            </button>
          </div>
          
          {/* Feature Matrix Replacement: Event Details Section */}
          <div className={`max-w-7xl mx-auto mt-10 mb-20 transition-all duration-2000 delay-1500 ${
            textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* About the Event */}
              <div className="group relative p-8 rounded-3xl backdrop-blur-lg border border-opacity-20 transition-all duration-700 hover:scale-105 cursor-pointer" style={{background:'rgba(15,23,42,0.6)', borderColor:'#a78bfa'}}>
                <h3 className="text-xl font-bold mb-4 text-purple-300">ABOUT THE EVENT</h3>
                <p className="text-gray-300 text-sm mb-4">Hack-Innovate is a 24-hour hackathon by GeeksforGeeks SRMIST Delhi-NCR that unites bright innovators, developers and creators. From ideation to execution, it offers hands-on experience, mentorship and collaboration in a high-energy environment. It’s where bold ideas become real solutions, a launchpad for creativity, learning and innovation.</p>
                  </div>
              {/* Domains */}
              <div className="group relative p-8 rounded-3xl backdrop-blur-lg border border-opacity-20 transition-all duration-700 hover:scale-105 cursor-pointer" style={{background:'rgba(15,23,42,0.6)', borderColor:'#a78bfa'}}>
                <h4 className="text-lg font-semibold text-purple-200 mb-2">DOMAINS</h4>
                <ul className="text-gray-200 text-sm list-disc ml-5">
                  <li>Web Development</li>
                  <li>Mobile App Development</li>
                  <li>Hardware & IoT</li>
                  <li>Network Solutions</li>
                  <li>Blockchain & Web3</li>
                </ul>
                </div>
              {/* Fueled Within */}
              <div className="group relative p-8 rounded-3xl backdrop-blur-lg border border-opacity-20 transition-all duration-700 hover:scale-105 cursor-pointer" style={{background:'rgba(15,23,42,0.6)', borderColor:'#38bdf8'}}>
                <h3 className="text-xl font-bold mb-4 text-cyan-300">FUELED WITHIN</h3>
                <ul className="text-gray-300 text-sm list-disc ml-5">
                  <li>Intellectual Cohesion</li>
                  <li>Powered by peer collaboration</li>
                  <li>Supported by GFG Campus Body</li>
                  <li>Mentorship from Industry Trained Experts</li>
                  <li>Driven by passion, not just prizes</li>
                </ul>
              </div>
              {/* Benefits */}
              <div className="group relative p-8 rounded-3xl backdrop-blur-lg border border-opacity-20 transition-all duration-700 hover:scale-105 cursor-pointer" style={{background:'rgba(15,23,42,0.6)', borderColor:'#f472b6'}}>
                <h3 className="text-xl font-bold mb-4 text-pink-300">BENEFITS</h3>
                <ul className="text-gray-300 text-sm list-disc ml-5">
                  <li>Exposure Skill</li>
                  <li>Growth</li>
                  <li>Innovation</li>
                  <li>Collaboration</li>
                  <li>Goodies</li>
                  <li>Certification</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Stats Matrix */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto transition-all duration-2000 delay-1800 ${
            textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {[
              { label: 'Neural Hours', value: '24:00', color: '#00ff87', icon: '🧠' },
              { label: 'Code Warriors', value: '∞', color: '#0ea5e9', icon: '⚔️' },
              { label: 'Reality Tokens', value: '∞', color: '#8b5cf6', icon: '💎' }
            ].map((stat, index) => (
              <div key={index} className="group text-center relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
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
                className="text-2xl md:text-3xl font-bold mb-4"
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
                <div className="text-lg font-semibold" style={{ color: '#ff9800' }}>You are good to go!</div>
              ) : (
                <div className="flex justify-center space-x-8 text-4xl md:text-5xl font-black text-white">
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 shadow-2xl min-w-[80px]">
                      <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.days).padStart(2, '0')}</span>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 uppercase tracking-wider">Days</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 shadow-2xl min-w-[80px]">
                      <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.hours).padStart(2, '0')}</span>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 uppercase tracking-wider">Hrs</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 shadow-2xl min-w-[80px]">
                      <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 uppercase tracking-wider">Min</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700 shadow-2xl min-w-[80px]">
                      <span className="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent" style={{textShadow: '0 0 20px rgba(255, 152, 0, 0.5)'}}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    </div>
                    <span className="text-sm text-gray-400 mt-2 uppercase tracking-wider">Sec</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Final CTA */}
          <div className={`mt-16 transition-all duration-2000 delay-2400 ${
            textAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <p 
              className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                letterSpacing: '0.02em'
              }}
            >
               Are you ready to <span className="text-emerald-400 font-semibold">transcend</span> the ordinary?
            </p>
            
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/gfg_srmist_ncr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <button
                  className="group relative px-8 py-3 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-gray-600 text-gray-400 hover:text-white hover:border-emerald-400 overflow-hidden"
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    background: 'rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <span className="relative z-10">Enter the Matrix</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Enhanced Styles */}
        <style jsx>{`
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