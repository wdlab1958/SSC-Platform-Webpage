# SSC Platform Webpage

**Self Security Consulting Platform** 공식 소개 웹페이지 — ISO 27001 기반 멀티에이전트 AI 보안 컨설팅 · Red Team 취약점 분석 플랫폼.

🔗 **Live**: https://wdlab1958.github.io/SSC-Platform-Webpage/

## 소개

SSC Platform은 17종의 AI 전문 에이전트가 조직 내부에서 보안 컨설팅 전 과정을 수행하는 **완전 온프레미스 오픈소스 플랫폼**입니다. 이 저장소는 해당 플랫폼을 일반 IT 담당자와 보안 컨설턴트가 쉽게 이해할 수 있도록 설계된 소개 웹페이지를 담고 있습니다.

### 주요 내용

| 섹션 | 내용 |
|------|------|
| 왜 SSC 인가 | 전통적 보안 컨설팅의 4가지 문제와 비교표 |
| 핵심 가치 6가지 | 온프레미스 Local LLM · 멀티에이전트 · HITL 승인 · 공방 통합 · 자동 보고서 · Save/Load |
| ISO 27001 컨설팅 6단계 | 킥오프 → 갭 분석 → 위험 평가 → 대책 설계 → 이행 검증 → 최종 보고 |
| Red Team PTES 8단계 | 사전협의부터 재검증까지 모의해킹 워크플로우 |
| 17종 AI 에이전트 | 컨설팅 5종 + Red Team 8종 + 유지보수 4종 |
| 5계층 하니스 | Safety · Observability · Resilience · Quality · Evolution |
| 준수 표준 20+ | ISO 27001/2/5/35, ISMS-P, 전자금융감독규정, GDPR, OWASP, MITRE ATT&CK 등 |
| 아키텍처 | React 18 + FastAPI + LangGraph/CrewAI + Ollama/vLLM + ChromaDB |

## 디자인

- **WDLAB 패밀리 디자인 시스템** — Neumorphism (라이트 그레이 서피스)
- 액센트: Blue `#2563EB` (신뢰·컨설팅) + Emerald `#0EA47A` (준수·통과) + Crimson `#E0335B` (Red Team)
- 폰트: Noto Sans KR · Inter · JetBrains Mono
- 반응형 사이드바 네비게이션 + 스크롤 스파이, 의존성 없는 순수 HTML/CSS/JS

## 구조

```
.
├── index.html      # 단일 페이지 (16개 섹션)
├── css/style.css   # Neumorphism 디자인 시스템
└── js/app.js       # 스크롤 스파이 · 모바일 메뉴 · To-top
```

## 로컬 실행

```bash
python3 -m http.server 8501
# http://localhost:8501
```

## 관련 저장소

- [SSC-Platform](https://github.com/wdlab1958/SSC-Platform) — 플랫폼 본체 (ISO 27001 AI 보안 컨설팅)
- [WDLAB-AlphaForge-Webpage](https://github.com/wdlab1958/WDLAB-AlphaForge-Webpage) · [WDLAB-LLMOps-Webpage](https://github.com/wdlab1958/WDLAB-LLMOps-Webpage) — 패밀리 디자인 레퍼런스

---

© 2026 WDLAB. All rights reserved.
