import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';

function SpinningBox({ active }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    if (active) {
      meshRef.current.rotation.y += delta * 1.4;
      meshRef.current.rotation.x += delta * 0.4;
    } else {
      meshRef.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2.2, 2.2, 2.2]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
    </Float>
  );
}

const AboutScene = ({ active }) => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[3, 3, 3]} intensity={2} />
      <SpinningBox active={active} />
    </Canvas>
  );
};

export default AboutScene;
