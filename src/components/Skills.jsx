import { motion } from 'framer-motion';
import { useRef, useState, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Sphere, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import { TextureLoader } from 'three';

// Tech Logo component for the globe
const TechLogo = ({ imageUrl, position }) => {
  const texture = useLoader(TextureLoader, imageUrl);
  
  return (
    <Billboard position={position} follow={true} lockX={false} lockY={false} lockZ={false}>
      <mesh>
        <planeGeometry args={[0.6, 0.6]} />
        <meshBasicMaterial map={texture} transparent={true} side={THREE.DoubleSide} />
      </mesh>
    </Billboard>
  );
};

// The 3D Globe component
const TechGlobe = () => {
  const groupRef = useRef();
  
  const technologies = [
    { name: 'React', logo: '/logos/react.png' },
    { name: 'JavaScript', logo: '/logos/javascipt.png' },
    { name: 'HTML5', logo: '/logos/html.png' },
    { name: 'CSS3', logo: '/logos/css3.png' },
    { name: 'Tailwind', logo: '/logos/Tailwind.png' },
    { name: 'Node.js', logo: '/logos/node.png' },
    { name: 'Express', logo: '/logos/Express.png' },
    { name: 'MongoDB', logo: '/logos/MongoDB.png' },
    { name: 'TypeScript', logo: '/logos/TypeScript.png' },
    { name: 'Python', logo: '/logos/python.png' },
    { name: 'TensorFlow', logo: '/logos/TensorFlow.png' },
    { name: 'React Native', logo: '/logos/react.png' },
    { name: 'Git', logo: '/logos/git.png' },
    { name: 'GitHub', logo: '/logos/GitHub.png' },
    { name: 'Firebase', logo: '/logos/Firebase.png' },
    { name: 'Postgrees', logo: '/logos/postgresql.svg' }
  ];
  
  // Create positions on a sphere
  const positions = technologies.map((_, i) => {
    const phi = Math.acos(-1 + (2 * i) / technologies.length);
    const theta = Math.sqrt(technologies.length * Math.PI) * phi;
    return [
      4 * Math.cos(theta) * Math.sin(phi),
      4 * Math.sin(theta) * Math.sin(phi),
      4 * Math.cos(phi)
    ];
  });
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });
  
  return (
    <group ref={groupRef}>
      {/* Sphere wireframe */}
      <mesh>
        <sphereGeometry args={[3.5, 24, 24]} />
        <meshBasicMaterial color="#4F46E5" wireframe opacity={0.2} transparent />
      </mesh>
      
      {/* Tech stack logos */}
      {technologies.map((tech, i) => (
        <TechLogo 
          key={i} 
          imageUrl={tech.logo} 
          position={positions[i]} 
        />
      ))}
    </group>
  );
};

const Skills = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  const skillCategories = [
    
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-md">
              <picture>
                <source media="(max-width: 768px)" srcSet="./me/downthere.png" />
                <img 
                  src="./showoff.png" 
                  alt="My Skills Showcase" 
                  className="w-full h-auto object-cover scale-110 transform -translate-y-4 hover:scale-105 transition-transform duration-500 rounded-lg"
                />
              </picture>
            </div>
          </motion.div>
          
          {/* Right side - 3D Globe */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[500px] w-full rounded-xl overflow-hidden"
          >
            {isMounted && (
              <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <Suspense fallback={null}>
                  <TechGlobe />
                </Suspense>
                <OrbitControls 
                  enableZoom={false} 
                  autoRotate 
                  autoRotateSpeed={0.5} 
                />
              </Canvas>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;