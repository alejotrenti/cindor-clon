import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei"; // Importar OrbitControls para la interacción

const Box = () => {
  const ref = useRef();
  
  // Cargar el modelo GLB de la chocolatada
  const { scene } = useGLTF("/cindor3d.glb");

  // Animar la rotación del modelo (si no estamos interactuando)
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.002;
      ref.current.rotation.y += 0.002;
    }
  });

  // Retornar el modelo con referencia para interacción
  return (
    <mesh ref={ref}>
      {/* Añadir el modelo GLB */}
      <primitive object={scene} scale={1.3} position={[0, -1, 0]} />
    </mesh>
  );
};

export default function Experience() {
  return (
    <div style={{ width: "30vw", height: "50vh" }}>
      {/* Canvas de React Three Fiber, configuramos la dimensión del canvas a pantalla completa */}
      <Canvas camera={{ position: [0, 0, 4] }}> {/* La cámara está más cerca */}
        {/* Iluminación para que el modelo se vea mejor */}
        <ambientLight intensity={1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        
        {/* Añadimos los controles orbit para rotar, hacer zoom, etc. */}
        <OrbitControls />

        {/* Colocamos el modelo 3D */}
        <Box />
      </Canvas>
    </div>
  );
}
