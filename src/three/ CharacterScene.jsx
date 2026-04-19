import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef } from 'react';

function MovingBox({ scrollY }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const y = Math.max(0, 0 - scrollY * 0.0045);
    const x = Math.max(0, 2.2 - scrollY * 0.0035);

    meshRef.current.position.y += (y - meshRef.current.position.y) * 0.08;
    meshRef.current.position.x += (x - meshRef.current.position.x) * 0.88;

    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.rotation.x += delta * 0.1;
    let opacity = 1;

    if (scrollY > 800) {
      opacity = Math.max(0, 1 - (scrollY - 800) * 0.002);
    }

    meshRef.current.material.transparent = true;
    meshRef.current.material.opacity = opacity;
  });

  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.35}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.8, 1.8, 1.8]} />
        <meshStandardMaterial color="#8a8a8a" />
      </mesh>
    </Float>
  );
}

const CharacterScene = ({ scrollY }) => {
  return (
    <div className="character-scene">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 3, 4]} intensity={2} />
        <MovingBox scrollY={scrollY} />
      </Canvas>
    </div>
  );
};

export default CharacterScene;
