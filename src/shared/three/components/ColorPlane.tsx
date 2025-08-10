import { useRoundedRectGeometry } from '../hooks/useRoundedRectGeometry';

type Props = {
  color: string;
  width: number;
  height: number;
  radius: number;
  depth: number;
  position: [number, number, number];
  rotation: [number, number, number];
}

function ColorPlane({ color, width, height, radius, depth, position, rotation }: Props) {
  const geometry = useRoundedRectGeometry(width, height, radius, depth);
  return (
    <mesh geometry={geometry} position={position} rotation={rotation}>
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export default ColorPlane;
