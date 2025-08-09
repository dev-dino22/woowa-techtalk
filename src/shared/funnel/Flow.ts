// src/shared/funnel/Flow.ts
import { useNavigate } from "react-router";

type RouteChangeEvent = { action: "PUSH" | "REPLACE" | "POP" };

export class Flow {
  private pageCount = 0;
  private unsubscribeRouteChange: null | (() => void) = null;
  private navigate: ReturnType<typeof useNavigate>;

  constructor(navigate: ReturnType<typeof useNavigate>) {
    this.navigate = navigate;
  }

  listen() {
    // react-router의 경우, 따로 이벤트 리스너를 쓸 순 없지만
    // Flow.start/Flow.end로 제어하므로 실제 구현에선 생략 가능
    // 여기선 pageCount만 직접 관리
    return () => {};
  }

  async start(path: string) {
    this.pageCount = 0;
    this.unsubscribeRouteChange = this.listen();
    this.pageCount++; // 첫 PUSH 카운트
    this.navigate(path);
  }

  async end() {
    for (let i = 0; i < this.pageCount; i++) {
      this.navigate(-1); // 히스토리 스택 만큼 뒤로가기를 실행
    }
    this.unsubscribeRouteChange?.();
    this.pageCount = 0;
  }
}
