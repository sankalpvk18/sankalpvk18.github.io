import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader"; // Import CanvasLoader correctly

const Moon = ({ isMobile }) => {
  const { scene, nodes, materials } = useGLTF("./photorealistic-moon/source/scene.gltf");

  // Debugging logs
  console.log("Loaded scene:", scene);
  console.log("Nodes:", nodes);
  console.log("Materials:", materials);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.5 : 0.6}
        position={isMobile ? [2, -3, -2.2] : [2, -3.25, -1.5]}
        rotation={[0, 0.5, 0]}
      />
    </mesh>
  );
};

const MoonCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Moon isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default MoonCanvas;