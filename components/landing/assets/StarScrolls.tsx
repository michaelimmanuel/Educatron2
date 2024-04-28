import "./StarScrolls.module.css";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";

const color = "#212A3E";

const Icosahedron = () => (
  <mesh rotation-x={0.10}>
    <dodecahedronGeometry args={[1, 0]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }: { p: number }) => {
    const ref = useRef<THREE.Object3D>(null);
  
    useLayoutEffect(() => {
      const distance = mix(4, 12, Math.random());
      const yAngle = mix(
        degreesToRadians(80),
        degreesToRadians(100),
        Math.random()
      );
      const xAngle = degreesToRadians(360) * p;
      ref.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
    });
  
    return (
      <mesh ref={ref}> // Add 'as any' to suppress the TypeScript error
        <capsuleGeometry args={[0.05, 0.05, 0.05]} />
        <meshBasicMaterial wireframe color={color} />
      </mesh>
    );
  };

function Scene({ numStars = 150 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.3, degreesToRadians(500)],
    
  );
  const distance = useTransform(scrollYProgress, [0, 4], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0001
    );
    camera.updateProjectionMatrix();
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => gl.setPixelRatio(0.4));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );
}

export default function ScrollStarsApp() {
  return (
    <div className="scrollbar h-[1000px]">
      <Canvas gl={{ antialias: true }}>
        <Scene />
      </Canvas>
    </div>
  );
}
