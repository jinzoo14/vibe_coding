# 바이브 코딩 계산기 웹 앱 PRD

## 1. 제품 개요
바이브 코딩의 데모 프로젝트로 개발되는 웹 기반 계산기 애플리케이션입니다. 사용자 친화적인 인터페이스와 직관적인 기능을 제공하여 기본적인 계산 작업을 수행할 수 있습니다.

## 2. 목표
- 사용자에게 직관적이고 사용하기 쉬운 계산기 경험 제공
- 모던한 디자인과 부드러운 사용자 경험 구현
- 데모 프로젝트로서의 기술적 역량 증명

## 3. 핵심 기능

### 3.1 기본 계산 기능
- 기본 사칙연산 (덧셈, 뺄셈, 곱셈, 나눗셈)
- 음수/소수 계산 지원
- 계산 결과 표시 및 저장

### 3.2 사용자 인터페이스
- 전통적인 계산기 레이아웃 (버튼 + 결과창)
- 심플하고 직관적인 디자인
- 키보드 입력 지원
- 애니메이션 효과 적용 (버튼 클릭, 계산 결과 표시 등)

### 3.3 반응형 디자인
- 데스크톱, 태블릿, 모바일 환경 지원
- 다양한 화면 크기에 최적화된 레이아웃

### 3.4 추가 기능
- 다크 모드 지원
- 메모리 기능 (이전 계산 결과 저장)
- 숫자 키보드 입력 지원

## 4. 기술 스택

### 4.1 프론트엔드
- React 18
  - 공식 문서: https://react.dev/
  - 한글 문서: https://ko.react.dev/
- TypeScript
  - 공식 문서: https://www.typescriptlang.org/docs/
  - 한글 문서: https://typescript-kr.github.io/
- Mantine UI v7
  - 공식 문서: https://mantine.dev/
  - 컴포넌트: https://mantine.dev/core/getting-started/
  - 훅: https://mantine.dev/hooks/getting-started/
  - 폼: https://mantine.dev/form/use-form/
  - 알림: https://mantine.dev/others/notifications/
- Vite (빌드 도구)
  - 공식 문서: https://vitejs.dev/guide/
  - 한글 문서: https://vitejs-kr.github.io/guide/

### 4.2 개발 도구
- ESLint
  - 공식 문서: https://eslint.org/docs/latest/
  - React 규칙: https://github.com/jsx-eslint/eslint-plugin-react
- Prettier
  - 공식 문서: https://prettier.io/docs/en/
- Jest
  - 공식 문서: https://jestjs.io/docs/getting-started
- React Testing Library
  - 공식 문서: https://testing-library.com/docs/react-testing-library/intro/
- GitHub Actions (CI/CD)
  - 공식 문서: https://docs.github.com/en/actions
  - 워크플로우 예제: https://docs.github.com/en/actions/examples

## 5. 사용자 경험 (UX)

### 5.1 디자인 원칙
- 심플하고 깔끔한 인터페이스
- 직관적인 버튼 배치
- 시각적 피드백 제공
- 접근성 고려

### 5.2 사용자 흐름
1. 웹 페이지 접속
2. 계산기 인터페이스 로드
3. 숫자 및 연산자 입력
4. 결과 확인
5. 추가 계산 또는 초기화

## 6. 성능 요구사항

### 6.1 로딩 성능
- 초기 로딩 시간: 2초 이내
- Mantine UI 컴포넌트 지연 로딩
- 번들 크기 최적화

## 7. 향후 확장 가능성
- 계산 기록 저장 기능
- 다양한 계산기 모드 (공학용, 프로그래머용 등)
- 테마 커스터마이징
- 단축키 지원

## 8. 제한사항
- 클라이언트 사이드에서만 동작
- 서버 저장소 없음
- 오프라인 사용 불가

## 9. 성공 지표
- 사용자 경험 만족도
- 코드 품질 및 유지보수성
- 성능 최적화
- 크로스 브라우저 호환성