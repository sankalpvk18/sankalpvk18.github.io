import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const TechBox3D = ({ icon }) => {
  const mesh = useRef();
  const texture = useTexture(icon);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh} scale={[1.5, 1.5, 1.5]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default TechBox3D;