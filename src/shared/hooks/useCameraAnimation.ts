import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';

function useCameraAnimation() {
  const start = useRef(new Vector3(0, 0, 10));
  const end = useRef(new Vector3(0, 0, 20));
  const duration = useRef(2000); // 밀리초 단위
  const startTime = useRef(null);
  const running = useRef(false);

  // 애니메이션 시작 함수: 시작 위치, 종료 위치, 지속 시간 설정 후 실행 플래그 켬
  const startAnimation = (from, to, durationMs) => {
    start.current = new Vector3(...from);
    end.current = new Vector3(...to);
    duration.current = durationMs;
    startTime.current = null;
    running.current = true;
  };

  useFrame(({ camera, clock }) => {
    if (!running.current) return; // 실행중 아니면 무시

    if (startTime.current === null) {
      startTime.current = clock.elapsedTime * 1000;
      camera.position.copy(start.current);
    }

    const elapsed = clock.elapsedTime * 1000 - startTime.current;
    const t = Math.min(elapsed / duration.current, 1);

    camera.position.lerpVectors(start.current, end.current, t);
    camera.lookAt(0, 0, 0);

    if (t >= 1) {
      running.current = false; // 애니메이션 종료
    }
  });

  return { startAnimation };
}

export default useCameraAnimation;