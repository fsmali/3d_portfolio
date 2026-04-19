import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Box() {
  return (
    <mesh>
      <boxGeometry args={[2, 5, 2]} />
      <meshStandardMaterial color="#888" />
    </mesh>
  );
}

const Scene = () => {
  return (
    <Canvas camera={{ position: [3, 3, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      <Box />

      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Scene;
