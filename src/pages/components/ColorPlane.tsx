import { useRoundedRectGeometry } from '../../shared/three/hooks/useRoundedRectGeometry';

function ColorPlane({ color, width, height, radius, depth, position, rotation }) {
  const geometry = useRoundedRectGeometry(width, height, radius, depth);
  return (
    <mesh geometry={geometry} position={position} rotation={rotation}>
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

export default ColorPlane;
