import { Canvas } from '@react-three/fiber';
import { ExtrudeGeometry, Shape } from 'three';
import { OrbitControls, Text } from '@react-three/drei';
import { useState } from 'react';

function RoundedRectShape(width, height, radius) {
  const shape = new Shape();
  const x = -width / 2;
  const y = -height / 2;

  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius);
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius);
  shape.quadraticCurveTo(x, y, x + radius, y);

  return shape;
}

function RoundedRectMesh({ text = "" }) {
  const width = 80;
  const height = 48;
  const radius = 4;

  const shape = RoundedRectShape(width, height, radius);
  const extrudeSettings = {
    depth: 2,
    bevelEnabled: false
  };

  const geometry = new ExtrudeGeometry(shape, extrudeSettings);

  return (
    <group>
      <mesh geometry={geometry}>
        <meshStandardMaterial color="#3776ed" />
      </mesh>
      <Text
        position={[0, 0, 2.1]} // 카드 위에 살짝 띄워서 z-index 겹침 방지
        fontSize={10}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

export default function App() {
  const [cardText, setCardText] = useState("Hello, Card!");

  return (
    <>
      <input
        value={cardText}
        onChange={e => setCardText(e.target.value)}
        style={{ position: 'absolute', zIndex: 10, top: 20, left: 30, fontSize: 18 }}
        placeholder="카드에 쓸 글자 입력"
      />
      <Canvas
        style={{ width: '50vw', height: '440px' }}
        camera={{ position: [0, 0, 140], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <RoundedRectMesh text={cardText} />
        <OrbitControls />
      </Canvas>
    </>
  );
}
