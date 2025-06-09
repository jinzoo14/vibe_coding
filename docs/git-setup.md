# Git 초기화 및 커밋 가이드

## 1. Git 설치
1. Git 공식 웹사이트 방문: https://git-scm.com/download/win
2. Windows용 Git 설치 프로그램 다운로드
3. 설치 프로그램 실행
4. 기본 설정으로 설치 진행
5. 설치 완료 후 PowerShell 재시작

## 2. Git 초기화 및 커밋 순서

### 2.1 저장소 초기화
```bash
# Git 저장소 초기화
git init
```

### 2.2 파일 스테이징
```bash
# 모든 파일을 스테이징 영역에 추가
git add .
```

### 2.3 커밋 생성
```bash
# 초기 커밋 생성
git commit -m "Initial commit: Project setup with Mantine UI

- Created PRD.md with Mantine UI specifications
- Created design.md with Mantine UI architecture
- Created tasks.md with Mantine UI implementation tasks
- Added calculator UI SVG design"
```

## 3. 커밋 메시지 컨벤션

### 3.1 기본 형식
```
<type>: <subject>

<body>

<footer>
```

### 3.2 타입 종류
- `feat`: 새로운 기능
- `fix`: 버그 수정
- `docs`: 문서 변경
- `style`: 코드 포맷팅, 세미콜론 누락 등
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드
- `chore`: 빌드 프로세스, 패키지 매니저 설정 등

### 3.3 예시
```
feat: Add calculator display component

- Implement Mantine Paper component for display
- Add responsive text component
- Include animation effects

Resolves: #123
```

## 4. 유용한 Git 명령어

### 4.1 상태 확인
```bash
# 현재 상태 확인
git status

# 커밋 히스토리 확인
git log
```

### 4.2 브랜치 관리
```bash
# 브랜치 생성
git branch <branch-name>

# 브랜치 전환
git checkout <branch-name>

# 브랜치 생성 및 전환
git checkout -b <branch-name>
```

### 4.3 원격 저장소
```bash
# 원격 저장소 추가
git remote add origin <repository-url>

# 원격 저장소로 푸시
git push -u origin main
```

## 5. .gitignore 설정
프로젝트 루트에 `.gitignore` 파일을 생성하고 다음 내용을 추가:

```
# Dependencies
node_modules/
.pnp/
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Editor directories and files
.idea/
.vscode/
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## 6. 주의사항
1. 커밋 전 `git status`로 변경사항 확인
2. 의미 있는 커밋 메시지 작성
3. 민감한 정보는 커밋하지 않기
4. 큰 파일은 Git LFS 사용 고려
5. 정기적인 백업 및 원격 저장소 동기화 