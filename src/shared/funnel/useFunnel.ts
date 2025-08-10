import { useNavigate } from "react-router";
import { useRef } from "react";
import { Flow } from "./Flow";

export function useFunnel() {
  const navigate = useNavigate();
  const flowRef = useRef<Flow>(null);

  if (!flowRef.current) {
    flowRef.current = new Flow(navigate);
  }

  const startFunnel = (path: string) => flowRef.current!.start(path);
  const endFunnel = () => flowRef.current!.end();

  return { startFunnel, endFunnel };
}
