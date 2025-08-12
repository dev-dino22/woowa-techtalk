import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
  url: string;
  width?: number;
  height?: number;
  position?: [number, number, number];  
  rotation?: [number, number, number];
};


function ImagePlane({ url, width = 1, height = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: Props) {
  const texture = useLoader(THREE.TextureLoader, url);

  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
}

export default ImagePlane;