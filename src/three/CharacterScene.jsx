import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, useGLTF, useAnimations, Text } from '@react-three/drei';
import { useRef, useEffect } from 'react';

function MovingBox({ scrollY, contactStart }) {
  const hiRef = useRef();
  const yesRef = useRef();
  const yesActionRef = useRef(null);
  const modelRef = useRef();
  const group = useRef();
  const waveActionRef = useRef(null);
  const { viewport } = useThree();
  const isMobile = viewport.width < 6;
  const { scene, animations } = useGLTF('/cube.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    const action =
      actions['CharacterArmature|CharacterArmature|CharacterArmature|Wave'];
    const yesAction =
      actions['CharacterArmature|CharacterArmature|CharacterArmature|Yes'];

    if (action) {
      waveActionRef.current = action;
      action.reset().fadeIn(0.3).play();
    }
    if (yesAction) {
      yesActionRef.current = yesAction;
    }

    return () => {
      action?.fadeOut(0.3);
    };
  }, [actions]);

  useFrame((state, delta) => {
    if (!modelRef.current) return;

    let x = isMobile ? 0 : 1;
    const fadeStart = isMobile ? 500 : 900;
    const contactTrigger = contactStart ? contactStart - 300 : 2700;
    const showContactCharacter = scrollY > contactTrigger;
    let y = 0;
    let opacity = 1;

    if (scrollY < fadeStart) {
      x = isMobile ? 0 : Math.max(0, 1 - scrollY * 0.0025);
      y = -1.3;
      opacity = 1;
    } else if (scrollY >= fadeStart && scrollY < 1400) {
      x = 0;
      y = -1.3;

      opacity = isMobile
        ? Math.max(0, 1 - (scrollY - fadeStart) * 0.005)
        : Math.max(0, 1 - (scrollY - fadeStart) * 0.0025);
    } else if (!showContactCharacter) {
      opacity = 0;
    } else {
      x = isMobile ? 0 : 1;
      y = -1.5;
      opacity = Math.min(1, (scrollY - contactTrigger) * 0.004);
    }

    modelRef.current.position.x += (x - modelRef.current.position.x) * 0.08;
    modelRef.current.position.y += (y - modelRef.current.position.y) * 0.08;

    modelRef.current.traverse((child) => {
      if (child.isMesh) {
        child.material.transparent = true;
        child.material.opacity = opacity;
        child.material.toneMapped = false;
      }
    });
    const isHome = scrollY < 500;

    if (waveActionRef.current) {
      if (isHome && !waveActionRef.current.isRunning()) {
        waveActionRef.current.reset().fadeIn(0.3).play();
      }

      if (!isHome && waveActionRef.current.isRunning()) {
        waveActionRef.current.fadeOut(0.3);
        waveActionRef.current.stop();
      }
    }
    const showHi = scrollY < 500;
    if (hiRef.current && showHi) {
      const t = state.clock.elapsedTime % 2;

      hiRef.current.position.y = -0.2 + t * 0.6;
      hiRef.current.material.opacity = 1 - t * 0.8;

      if (t < 0.1) {
        hiRef.current.position.y = -0.2;
      }
    }
    if (hiRef.current && !showHi) {
      hiRef.current.material.opacity = 0;
    }
    const isContact = showContactCharacter;

    if (yesActionRef.current) {
      if (isContact && !yesActionRef.current.isRunning()) {
        waveActionRef.current?.stop();
        yesActionRef.current.reset().fadeIn(0.3).play();
      }

      if (!isContact && yesActionRef.current.isRunning()) {
        yesActionRef.current.stop();
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.15} floatIntensity={0.35}>
      <group ref={modelRef}>
        <group ref={group}>
          <primitive
            object={scene}
            scale={isMobile ? 0.45 : 0.9}
            position={isMobile ? [0, 0, 2] : [0, 0, 2]}
          />
        </group>
        <group position={isMobile ? [0.7, 1, 2] : [1.7, 2.5, 0]}>
          <Text
            ref={hiRef}
            fontSize={isMobile ? 0.2 : 0.5}
            color="#ff7a00"
            anchorX="center"
            anchorY="middle"
            material-transparent
          >
            Hi
          </Text>
        </group>
      </group>
    </Float>
  );
}

const CharacterScene = ({ scrollY, contactStart }) => {
  return (
    <div className="character-scene">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={2} />
        <hemisphereLight intensity={4} groundColor="white" />
        <directionalLight position={[3, 3, 4]} intensity={1.5} />
        <MovingBox scrollY={scrollY} contactStart={contactStart} />
      </Canvas>
    </div>
  );
};

export default CharacterScene;
