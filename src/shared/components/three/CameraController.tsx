import { useEffect } from "react";
import useCameraAnimation from "../../hooks/useCameraAnimation";

function CameraController({ start, end, duration }) {
  const { startAnimation } = useCameraAnimation();

  useEffect(() => {
    startAnimation(start, end, duration);
  }, [start, end, duration]);

  return null;
}
export default CameraController;