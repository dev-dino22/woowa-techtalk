import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useState } from 'react';

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
