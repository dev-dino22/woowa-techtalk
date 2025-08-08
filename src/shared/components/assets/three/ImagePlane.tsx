import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';

function ImagePlane({ url, width = 1, height = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  // 이미지 텍스처 로드
  const texture = useLoader(THREE.TextureLoader, url);

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

export default ImagePlane;

// export default function App() {
//   const imageUrl = "/path/to/your/image.png";

//   return (
//     <Canvas style={{ width: '100%', height: '100vh' }}>
//       <ImagePlane url={imageUrl} width={3} height={2} position={[0, 0, 0]} />
//     </Canvas>
//   );
// }
