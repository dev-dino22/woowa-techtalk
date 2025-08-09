import { useRoundedRectGeometry } from '../../shared/three/hooks/useRoundedRectGeometry';
import ColorPlane from './ColorPlane';

type Props = {
  cardColor: string;
}
function CreditCardMesh({ cardColor }: Props) {

  const width = 90;
  const height = 50;
  const radius = 4;
  const depth = 1;
  
  const geometry = useRoundedRectGeometry(width, height, radius, depth);

  return (
    <group>
      <mesh geometry={geometry}>
        <meshBasicMaterial color={cardColor} />
      </mesh>
      <ColorPlane
        color="#1e1e1e"
        width={width}
        height={height}
        radius={radius}
        depth={0}
        position={[0, 0, 1.1]} 
        rotation={[0, 0, 0]}
      />
      <ColorPlane
        color="#484848"
        width={width}
        height={10}
        radius={0}
        depth={0}
        position={[0, 12, 1.2]} 
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

export default CreditCardMesh;
