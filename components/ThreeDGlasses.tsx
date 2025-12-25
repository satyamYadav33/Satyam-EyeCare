import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export const ThreeDGlasses = (props: any) => {
  const groupRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      // Mouse interaction rotation logic could go here, relying on autoRotate in parent for now
    }
  });

  const frameColor = props.color || '#1e3a8a'; // Medical blue default

  return (
    <group ref={groupRef} {...props} dispose={null} scale={1.5}>
      {/* Left Rim */}
      <mesh position={[-1.2, 0, 0]}>
        <torusGeometry args={[0.8, 0.08, 16, 32]} />
        <meshStandardMaterial color={frameColor} roughness={0.3} metalness={0.8} />
      </mesh>
      
      {/* Right Rim */}
      <mesh position={[1.2, 0, 0]}>
        <torusGeometry args={[0.8, 0.08, 16, 32]} />
        <meshStandardMaterial color={frameColor} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Bridge */}
      <mesh position={[0, 0.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 0.6, 16]} />
        <meshStandardMaterial color={frameColor} roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Left Lens */}
      <mesh position={[-1.2, 0, 0]}>
        <circleGeometry args={[0.78, 32]} />
        <meshPhysicalMaterial 
          color="#a5f3fc" 
          transmission={0.9} 
          opacity={0.3} 
          metalness={0} 
          roughness={0} 
          transparent 
          thickness={0.1}
        />
      </mesh>

      {/* Right Lens */}
      <mesh position={[1.2, 0, 0]}>
        <circleGeometry args={[0.78, 32]} />
        <meshPhysicalMaterial 
          color="#a5f3fc" 
          transmission={0.9} 
          opacity={0.3} 
          metalness={0} 
          roughness={0} 
          transparent 
          thickness={0.1}
        />
      </mesh>

      {/* Left Temple (Arm) */}
      <mesh position={[-2, 0, -1.5]} rotation={[0, -0.2, 0]}>
        <boxGeometry args={[0.1, 0.1, 3]} />
        <meshStandardMaterial color={frameColor} />
      </mesh>

      {/* Right Temple (Arm) */}
      <mesh position={[2, 0, -1.5]} rotation={[0, 0.2, 0]}>
        <boxGeometry args={[0.1, 0.1, 3]} />
        <meshStandardMaterial color={frameColor} />
      </mesh>
    </group>
  );
};
