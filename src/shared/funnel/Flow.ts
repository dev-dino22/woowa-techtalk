import { useNavigate } from "react-router";

export class Flow {
  private pageCount = 0;
  private unsubscribeRouteChange: null | (() => void) = null;
  private navigate: ReturnType<typeof useNavigate>;

  constructor(navigate: ReturnType<typeof useNavigate>) {
    this.navigate = navigate;
  }

  listen() {
    // react-router에는 이벤트 리스너가 없으므로 실제로는 직접 관리하지 않음
    return () => {};
  }

  async start(path: string) {
    this.pageCount = 0;
    this.unsubscribeRouteChange = this.listen();
    this.pageCount++; // 시작 시 첫 이동 카운트
    this.navigate(path);
  }

  async end() {
    for (let i = 0; i < this.pageCount; i++) {
      this.navigate(-1);
    }
    this.unsubscribeRouteChange?.();
    this.pageCount = 0;
  }
}
