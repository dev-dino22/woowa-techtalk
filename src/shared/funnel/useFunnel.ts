// src/shared/funnel/useFunnel.ts
import { useNavigate } from "react-router";
import { useRef } from "react";
import { Flow } from "./Flow";

export function useFunnel() {
  const navigate = useNavigate();
  // 싱글턴처럼 퍼널 인스턴스 유지
  const flowRef = useRef<Flow>();

  if (!flowRef.current) {
    flowRef.current = new Flow(navigate);
  }

  const startFunnel = (path: string) => flowRef.current!.start(path);
  const endFunnel = () => flowRef.current!.end();

  return { startFunnel, endFunnel };
}
