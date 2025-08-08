import { useRoundedRectGeometry } from '../../shared/three/hooks/useRoundedRectGeometry';

function CreditCardMesh() {

  const width = 90;
  const height = 50;
  const radius = 4;
  const depth = 2;
  
  const geometry = useRoundedRectGeometry(width, height, radius, depth);

  return (
    <group>
      <mesh geometry={geometry}>
        <meshBasicMaterial color="#fdfdff" />
      </mesh>
    </group>
  );
}

export default CreditCardMesh;
