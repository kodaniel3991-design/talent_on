/* 로드맵 데이터 — JS 변수로 제공 (file:// 호환) */
var ROADMAP_DATA = {
  "semesters": [
    {
      "id": "3-1-done",
      "label": "3학년 1학기",
      "period": "2025.03 ~ 2025.08",
      "status": "done",
      "items": [
        { "key": "s1", "title": "전공 평균 4.0 이상 유지", "category": "etc", "result": "결과: 4.05 달성", "done": true },
        { "key": "s2", "title": "AutoCAD 중급 과정 수강", "category": "skill", "result": "학교 정규 강좌", "done": true },
        { "key": "s3", "title": "SolidWorks 기초 자격 취득", "category": "cert", "result": "CSWA 취득", "done": true },
        { "key": "s4", "title": "TOEIC 첫 응시 — 800점 이상 목표", "category": "lang", "result": "결과: 820점", "done": true },
        { "key": "s5", "title": "캡스톤디자인 프로젝트 참여", "category": "exp", "result": "IoT 에너지 모니터링", "done": true }
      ]
    },
    {
      "id": "3-2",
      "label": "3학년 2학기",
      "period": "2025.09 ~ 2026.02",
      "status": "current",
      "items": [
        { "key": "s6", "title": "컴퓨터활용능력 1급 취득", "category": "cert", "result": "2025.11 취득", "done": true },
        { "key": "s7", "title": "Python 데이터 분석 강좌 이수", "category": "skill", "result": "학교 비교과 프로그램", "done": true },
        { "key": "s8", "title": "에너지관리기사 필기 원서접수 & 공부 시작", "category": "cert", "meta": "마감 4.15", "priority": "high", "done": false },
        { "key": "s9", "title": "TOEIC 재응시 — 850점 이상 달성", "category": "lang", "meta": "현재 820 → 목표 850", "priority": "medium", "done": false },
        { "key": "s10", "title": "두산에너빌리티 인재상 & 직무 분석 완료", "category": "etc", "meta": "AI 분석 결과 기반", "priority": "low", "done": false }
      ]
    },
    {
      "id": "4-1",
      "label": "4학년 1학기",
      "period": "2026.03 ~ 2026.08",
      "status": "future",
      "items": [
        { "key": "s11", "title": "에너지관리기사 필기 합격", "category": "cert", "meta": "4월 시험", "priority": "high", "done": false },
        { "key": "s12", "title": "에너지관리기사 실기 합격", "category": "cert", "meta": "6~7월 시험", "priority": "high", "done": false },
        { "key": "s13", "title": "두산에너빌리티 하계 인턴 지원", "category": "exp", "meta": "5월 공고 예상", "priority": "high", "done": false },
        { "key": "s14", "title": "ANSYS 기초 특강 수강 (CAE)", "category": "skill", "meta": "학교 특강 or 온라인", "priority": "medium", "done": false },
        { "key": "s15", "title": "전공 학점 4.0 이상 유지", "category": "etc", "meta": "졸업 요건 충족", "priority": "low", "done": false }
      ]
    },
    {
      "id": "4-2",
      "label": "4학년 2학기",
      "period": "2026.09 ~ 2027.02",
      "status": "future",
      "items": [
        { "key": "s16", "title": "두산에너빌리티 하반기 공채 지원", "category": "exp", "meta": "9~10월 예상", "priority": "high", "done": false },
        { "key": "s17", "title": "자소서 & 면접 준비 (AI 코칭 활용)", "category": "etc", "meta": "취업전략센터 상담", "priority": "medium", "done": false },
        { "key": "s18", "title": "졸업 요건 최종 확인 & 학점 마무리", "category": "etc", "meta": "130학점 이상", "priority": "low", "done": false }
      ]
    }
  ],
  "juniorSemesters": [
    {
      "id": "1-1",
      "label": "1학년 1학기",
      "period": "2024.03 ~ 2024.08",
      "status": "future",
      "items": [
        { "key": "j1", "title": "관심 분야 탐색 & 설정", "category": "etc", "priority": "low", "done": false },
        { "key": "j2", "title": "학점 3.0 이상 목표 설정", "category": "etc", "priority": "medium", "done": false },
        { "key": "j3", "title": "TOEIC 첫 응시 계획", "category": "lang", "priority": "low", "done": false }
      ]
    },
    {
      "id": "1-2",
      "label": "1학년 2학기",
      "period": "2024.09 ~ 2025.02",
      "status": "future",
      "items": [
        { "key": "j4", "title": "기초 어학 시작 — TOEIC 600 목표", "category": "lang", "priority": "medium", "done": false },
        { "key": "j5", "title": "학과 관련 동아리/스터디 참여", "category": "exp", "priority": "low", "done": false },
        { "key": "j6", "title": "컴퓨터활용능력 자격증 도전", "category": "cert", "priority": "low", "done": false }
      ]
    },
    {
      "id": "2-1",
      "label": "2학년 1학기",
      "period": "2025.03 ~ 2025.08",
      "status": "future",
      "items": [
        { "key": "j7", "title": "대외활동 1건 참여", "category": "exp", "priority": "medium", "done": false },
        { "key": "j8", "title": "TOEIC 700 돌파", "category": "lang", "priority": "high", "done": false },
        { "key": "j9", "title": "전공 기초 자격증 준비 시작", "category": "cert", "priority": "medium", "done": false }
      ]
    },
    {
      "id": "2-2",
      "label": "2학년 2학기",
      "period": "2025.09 ~ 2026.02",
      "status": "future",
      "items": [
        { "key": "j10", "title": "공모전 / 경진대회 참여", "category": "exp", "priority": "high", "done": false },
        { "key": "j11", "title": "방학 중 인턴 탐색 시작", "category": "exp", "priority": "medium", "done": false },
        { "key": "j12", "title": "관심 기업 3개 조사 & 인재상 파악", "category": "etc", "priority": "low", "done": false }
      ]
    }
  ]
};
