import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface PrismProps {
  position: [number, number, number];
  mousePosition: { x: number; y: number };
}

const FloatingPrism: React.FC<PrismProps> = ({ position, mousePosition }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const originalPosition = useRef(position);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Convert mouse position to world coordinates
      const mouseX = (mousePosition.x / window.innerWidth) * 2 - 1;
      const mouseY = -(mousePosition.y / window.innerHeight) * 2 + 1;
      
      const worldMouseX = mouseX * viewport.width / 2;
      const worldMouseY = mouseY * viewport.height / 2;
      
      // Calculate distance from mouse
      const distance = Math.sqrt(
        Math.pow(meshRef.current.position.x - worldMouseX, 2) + 
        Math.pow(meshRef.current.position.y - worldMouseY, 2)
      );
      
      // Repel effect
      const repelRadius = 3;
      const repelStrength = 0.5;
      
      if (distance < repelRadius) {
        const repelFactor = (repelRadius - distance) / repelRadius;
        const directionX = meshRef.current.position.x - worldMouseX;
        const directionY = meshRef.current.position.y - worldMouseY;
        const length = Math.sqrt(directionX * directionX + directionY * directionY);
        
        if (length > 0) {
          meshRef.current.position.x += (directionX / length) * repelFactor * repelStrength;
          meshRef.current.position.y += (directionY / length) * repelFactor * repelStrength;
        }
      } else {
        // Return to original position gradually
        meshRef.current.position.x += (originalPosition.current[0] - meshRef.current.position.x) * 0.02;
        meshRef.current.position.y += (originalPosition.current[1] - meshRef.current.position.y) * 0.02;
      }
      
      // Rotation
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.003;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.5, 0]} />
        <meshStandardMaterial 
          color="#8B5CF6" 
          emissive="#8B5CF6" 
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
          wireframe={Math.random() > 0.5}
        />
      </mesh>
    </Float>
  );
};

const PrismsBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Generate random positions for prisms
  const prisms = Array.from({ length: 12 }, (_, i) => ({
    position: [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 15,
      (Math.random() - 0.5) * 10
    ] as [number, number, number],
    key: i
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06B6D4" />
        
        {prisms.map((prism) => (
          <FloatingPrism
            key={prism.key}
            position={prism.position}
            mousePosition={mousePosition}
          />
        ))}
      </Canvas>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
    </div>
  );
};

export default PrismsBackground;