import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const TechSphere = ({ technologies }) => {
  const groupRef = useRef();
  const [hoveredTech, setHoveredTech] = useState(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });
  
  const radius = 4;
  
  return (
    <group ref={groupRef}>
      {technologies.map((tech, i) => {
        const phi = Math.acos(-1 + (2 * i) / technologies.length);
        const theta = Math.sqrt(technologies.length * Math.PI) * phi;
        
        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);
        
        return (
          <group key={tech.name} position={[x, y, z]}>
            <Text
              position={[0, 0, 0]}
              fontSize={0.3}
              color={hoveredTech === tech.name ? "#6366F1" : "#ffffff"}
              anchorX="center"
              anchorY="middle"
              onPointerOver={() => setHoveredTech(tech.name)}
              onPointerOut={() => setHoveredTech(null)}
            >
              {tech.name}
            </Text>
          </group>
        );
      })}
    </group>
  );
};

const TechGlobe = () => {
  const technologies = [
    { name: "React" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "Express" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "TensorFlow" },
    { name: "React Native" },
    { name: "Tailwind CSS" },
    { name: "Three.js" },
    { name: "Framer Motion" },
    { name: "Git" },
    { name: "Firebase" },
    { name: "AWS" },
    { name: "Docker" },
    { name: "GraphQL" },
    { name: "Redux" },
    { name: "Next.js" },
    { name: "Vite" }
  ];

  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <TechSphere technologies={technologies} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default TechGlobe;