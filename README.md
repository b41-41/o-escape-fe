# 넥스트룸 어드민 (NEXT ROOM Admin) - 방탈출 힌트폰 서비스 관리 시스템

## 프로젝트 소개

넥스트룸 어드민은 방탈출 카페 운영자를 위한 종합 관리 시스템입니다. 직관적인 어드민 인터페이스를 통해 테마 관리, 플레이어 모니터링, 힌트 시스템 운영 등 방탈출 운영의 모든 측면을 효율적으로 관리할 수 있습니다.

![넥스트룸](https://nextroom.co.kr/opengraph-image.png)

## 기술 스택

### 프론트엔드

- **프레임워크**: Next.js 13 (App Router)
- **언어**: TypeScript
- **상태 관리**:
  - Recoil (전역 상태 관리)
  - React Query (서버 상태 관리)
- **스타일링**:
  - Styled Components
  - MUI (Material-UI)
- **애니메이션**: Framer Motion
- **폼 관리**: React Hook Form

### 개발 환경

- **코드 품질**:
  - ESLint (Airbnb 규칙)
  - Prettier
  - TypeScript
- **컴포넌트 개발**: Storybook

## 주요 기능

### 어드민 대시보드

1. **실시간 운영 모니터링**

   - 현재 진행 중인 모든 테마 실시간 상태 확인
   - 방별 타이머 관리 및 원격 제어
   - 예약 현황 및 일정 관리

2. **고급 힌트 관리 시스템**

   - 힌트 요청 실시간 알림 및 우선순위 설정
   - 미리 준비된 힌트 템플릿 관리
   - 힌트 이력 관리 및 통계

3. **방탈출 테마 관리**

   - 테마별 난이도 및 시나리오 설정
   - 커스텀 UI/UX 템플릿 적용
   - 각 테마별 특수 장치 연동 및 제어

4. **데이터 인사이트**

   - 테마별 성공률 및 평균 클리어 시간 분석
   - 인기 힌트 포인트 시각화
   - 고객 피드백 데이터 수집 및 분석 대시보드

## 프로젝트 구조

```
app/                      # Next.js App Router
├── admin/                # 관리자 페이지
│   ├── dashboard/        # 메인 대시보드
│   ├── themes/           # 테마 관리
│   ├── hints/            # 힌트 관리
│   ├── analytics/        # 데이터 분석
│   ├── settings/         # 시스템 설정
│   └── components/       # 어드민 전용 컴포넌트
├── apis/                 # API 연동 관련
│   ├── admin/            # 어드민 API
│   ├── auth/             # 인증 관련 API
│   └── common/           # 공통 API
├── components/           # 재사용 가능한 컴포넌트
│   ├── ui/               # UI 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   └── features/         # 기능 컴포넌트
├── consts/               # 상수 정의
├── home/                 # 홈페이지
├── hooks/                # 커스텀 훅
│   ├── admin/            # 어드민 관련 훅
│   ├── auth/             # 인증 관련 훅
│   └── common/           # 공통 훅
├── landing/              # 랜딩 페이지
├── lib/                  # 라이브러리 설정
├── login/                # 로그인 페이지
├── mutations/            # React Query 뮤테이션
├── queries/              # React Query 쿼리
│   ├── admin/            # 어드민 쿼리
│   └── auth/             # 인증 쿼리
├── signup/               # 회원가입 페이지
├── style/                # 전역 스타일
├── theme/                # 테마 설정
├── trial/                # 체험판 페이지
├── types/                # 타입 정의
│   ├── admin/            # 어드민 관련 타입
│   ├── api/              # API 응답 타입
│   └── common/           # 공통 타입
└── utils/                # 유틸리티 함수
```

## 설치 및 실행 방법

### 설치

```bash
nvm install
nvm use
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### Storybook 실행

```bash
npm run storybook
```

## 아키텍처 및 설계 철학

### 어드민 시스템 아키텍처

- **기능 중심 모듈화**: Next.js App Router를 활용한 도메인별 구조화
- **계층형 컴포넌트 구조**:
  - **UI 계층**: 순수 프레젠테이션 컴포넌트 (MUI, Styled Components 기반)
  - **컨테이너 계층**: 상태 관리 및 비즈니스 로직
  - **페이지 계층**: Next.js App Router 기반 라우팅 및 레이아웃

### 상태 관리 아키텍처

- **상태 분리 전략**:
  - **UI 상태**: Recoil 아톰으로 관리 (테마 설정, 레이아웃, 모달 등)
  - **앱 상태**: Recoil 셀렉터로 파생 상태 계산 및 캐싱
  - **서버 상태**: @tanstack/react-query로 서버 데이터 관리 및 캐싱
- **상태 접근 패턴**: 커스텀 훅을 통한 캡슐화 및 재사용성 향상

### 데이터 흐름 아키텍처

- **단방향 데이터 흐름**: Recoil과 React Query를 활용한 선언형 데이터 관리
- **비동기 처리 전략**:
  - API 클라이언트 추상화 (axios 인스턴스 및 인터셉터)
  - React Query를 활용한 자동 재시도 및 캐싱 전략

### 성능 최적화 전략

- **Next.js 기본 최적화**:
  - 자동 정적 HTML 생성 (Static Generation)
  - 클라이언트 사이드 렌더링으로 인터랙티브 요소 처리
- **클라이언트 성능 최적화**:
  - Next.js의 자동 코드 스플리팅 활용
  - 렌더링 최적화 (React.memo, useMemo, useCallback)

### 확장성 설계

- **컴포넌트 기반 설계**: 새로운 기능 추가가 용이한 재사용 가능한 컴포넌트 구조
- **MUI 테마 커스터마이징**: 테마별 디자인 시스템 적용
- **타입 안정성**: TypeScript를 활용한 확장 가능한 타입 정의

### 코드 품질 관리

- **정적 분석**: ESLint(Airbnb 규칙), TypeScript, Prettier 사용
- **컴포넌트 문서화**: Storybook을 활용한 컴포넌트 카탈로그
- **형상관리**: husky를 활용한 코드 품질 유지
