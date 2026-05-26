import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useInView } from "../../../hooks/useInView";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);
  const [ref, inView] = useInView({ rootMargin: "200px" });
  const hasMountedRef = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView && !hasMountedRef.current) {
      hasMountedRef.current = true;
      setMounted(true);
    }
  }, [inView]);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
  }, [scene, model.name]);

  return (
    <div ref={ref} className="w-full h-full">
      {mounted && (
        <Canvas
          dpr={[1, 1.5]}
          frameloop={inView ? "always" : "never"}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
          />
          <Environment preset="city" />

          <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
            <group scale={model.scale} rotation={model.rotation}>
              <primitive object={scene.scene} />
            </group>
          </Float>

          <OrbitControls enableZoom={false} />
        </Canvas>
      )}
    </div>
  );
};

export default TechIconCardExperience;
