import { Canvas, useLoader } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls, Stats, Circle } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

function DonutAnimation() {
  const gltf = useLoader(GLTFLoader, '/public/donut_item.glb');
  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
      <Suspense fallback={null}>
        <directionalLight position={[3.3, 1.0, 4.4]} castShadow intensity={Math.PI * 2} />
        <primitive object={gltf.scene} position={[0, 1, 0]} children-0-castShadow />
        <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
          <meshStandardMaterial />
        </Circle>
        <OrbitControls target={[0, 1, 0]} />
        <axesHelper args={[5]} />
        <Stats />
      </Suspense>
    </Canvas>
  );
}

export default DonutAnimation;
