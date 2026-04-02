/* ═══════════════════════════════════════════════
   Talent ON — Common Components
   사이드바, GNB, 다크모드, localStorage 공통 함수
═══════════════════════════════════════════════ */

/* ═══ ICON LIBRARY ═══ */
const ICONS = {
  dashboard: '<svg viewBox="0 0 16 16" fill="none"><rect x="1" y="9" width="4" height="6" rx="1" fill="currentColor"/><rect x="6" y="5" width="4" height="10" rx="1" fill="currentColor"/><rect x="11" y="1" width="4" height="14" rx="1" fill="currentColor" opacity=".5"/></svg>',
  processMap: '<svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.3" fill="none"/><circle cx="5" cy="7" r="1.5" fill="currentColor" opacity=".6"/><circle cx="11" cy="7" r="1.5" fill="currentColor" opacity=".6"/><circle cx="8" cy="11" r="1.5" fill="currentColor" opacity=".6"/><path d="M5 7L8 11M11 7L8 11" stroke="currentColor" stroke-width="1" opacity=".4"/></svg>',
  assessment: '<svg viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  companyMatch: '<svg viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M11 11l3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  gapAnalysis: '<svg viewBox="0 0 16 16" fill="none"><polygon points="8,1 10,6 15,6 11,9 12.5,14 8,11 3.5,14 5,9 1,6 6,6" stroke="currentColor" stroke-width="1.2" fill="none"/></svg>',
  roadmap: '<svg viewBox="0 0 16 16" fill="none"><rect x="2" y="2" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M5 8h6M8 5v6" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>',
  progressLog: '<svg viewBox="0 0 16 16" fill="none"><path d="M4 4h8M4 8h6M4 12h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  profile: '<svg viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>',
  darkMode: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 9.5A5.5 5.5 0 016.5 3c0-.5.1-1 .2-1.5A6.5 6.5 0 1014.5 9c-.5.1-1 .2-1.5.2z" stroke="currentColor" stroke-width="1.3"/></svg>',
  lightMode: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" stroke-width="1.3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.5 3.5l1.5 1.5M11 11l1.5 1.5M12.5 3.5l-1.5 1.5M5 11l-1.5 1.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
  bell: '<svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M4 6a4 4 0 018 0c0 4 2 5 2 5H2s2-1 2-5z" stroke="var(--text-secondary)" stroke-width="1.3" fill="none"/><path d="M6 13a2 2 0 004 0" stroke="var(--text-secondary)" stroke-width="1.3"/></svg>',
  // Admin icons (viewBox 24)
  adminHome: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  adminStudents: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  adminCompany: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>',
  adminStats: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  adminPortal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>'
};

/* ═══ STUDENT SIDEBAR ═══ */
const STUDENT_MENU = [
  { section: '메인' },
  { href: 'S-02_dashboard.html', icon: 'dashboard', label: '대시보드' },
  { href: 'process-map.html', icon: 'processMap', label: '프로세스 맵' },
  { section: '진단 & 매칭' },
  { href: 'S-05_assessment.html', icon: 'assessment', label: '수준 진단' },
  { href: 'S-03_company-search.html', icon: 'companyMatch', label: '기업 매칭', badge: '52' },
  { href: 'S-06_gap-analysis.html', icon: 'gapAnalysis', label: '달성 분석' },
  { section: '실행 & 기록' },
  { href: 'S-07_roadmap.html', icon: 'roadmap', label: '내 로드맵', badge: '진행중' },
  { href: 'S-08_progress-log.html', icon: 'progressLog', label: '진척 기록' },
  { section: '설정' },
  { href: 'S-09_profile.html', icon: 'profile', label: '내 프로필' }
];

/* ═══ ADMIN SIDEBAR ═══ */
const ADMIN_MENU = [
  { section: '관리자 메뉴' },
  { href: 'A-01_admin-home.html', icon: 'adminHome', label: '관리자 홈' },
  { href: 'A-02_student-list.html', icon: 'adminStudents', label: '학생 현황' },
  { href: 'A-03_company-manage.html', icon: 'adminCompany', label: '기업 DB 관리' },
  { href: 'A-04_statistics.html', icon: 'adminStats', label: '통계/리포트' },
  { section: '바로가기' },
  { href: 'S-02_dashboard.html', icon: 'adminPortal', label: '학생 포털 보기' }
];

/* ═══ RENDER SIDEBAR ═══ */
function renderSidebar(containerId, menuData, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentPage = location.pathname.split('/').pop() || 'index.html';
  const isAdmin = options.admin || false;
  const menuClass = options.menuItemClass || 'menu-item';

  // For S-04, it's a sub-page of S-03 so S-03 should be active
  const activeOverrides = { 'S-04_company-detail.html': 'S-03_company-search.html' };
  const activePage = activeOverrides[currentPage] || currentPage;

  let html = `
    <div class="sidebar-logo">
      <div class="logo-mark">T</div>
      <div class="logo-text">Talent ON<small>${isAdmin ? '관리자' : '창원대학교'}</small></div>
    </div>
    <div class="sidebar-menu">`;

  menuData.forEach(item => {
    if (item.section) {
      html += `<div class="menu-section-label">${item.section}</div>`;
    } else {
      const isActive = item.href === activePage;
      const badgeHtml = item.badge ? `<span class="menu-badge">${item.badge}</span>` : '';
      html += `<a class="${menuClass}${isActive ? ' active' : ''}" href="${item.href}">${ICONS[item.icon] || ''}${item.label}${badgeHtml}</a>`;
    }
  });

  html += `</div>
    <div class="sidebar-footer">
      <div class="sidebar-avatar">${isAdmin ? '박' : '김'}</div>
      <div class="sidebar-user-info">
        <div class="sidebar-user-name">${isAdmin ? '박센터장' : '김창원'}</div>
        <div class="sidebar-user-dept">${isAdmin ? '취업전략센터' : '기계공학과 3학년'}</div>
      </div>
    </div>`;

  container.innerHTML = html;
}

/* ═══ RENDER GNB ═══ */
function renderGNB(containerId, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const breadcrumb = options.breadcrumb || [];
  const date = options.date || '2026.04.02';
  const showSearch = options.showSearch || false;

  let leftHtml = '';
  if (showSearch) {
    leftHtml = `<div class="gnb-search">
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="5" stroke="currentColor" stroke-width="1.5"/><path d="M11 11l3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      기업 · 직무 검색
    </div>`;
  } else if (breadcrumb.length > 0) {
    leftHtml = '<div class="gnb-breadcrumb">';
    breadcrumb.forEach((item, i) => {
      if (i < breadcrumb.length - 1) {
        leftHtml += `<a href="${item.href || '#'}">${item.label}</a><span>&rsaquo;</span>`;
      } else {
        leftHtml += `<strong>${item.label}</strong>`;
      }
    });
    leftHtml += '</div>';
  }

  container.innerHTML = `
    ${leftHtml}
    <div class="gnb-right">
      <button class="gnb-noti" onclick="toggleDark()" title="다크모드" id="darkBtn">${ICONS.darkMode}</button>
      <div class="gnb-date">${date}</div>
      <div class="gnb-noti">${ICONS.bell}<div class="noti-dot"></div></div>
    </div>`;

  // Restore dark mode state for the button
  if (localStorage.getItem('talentOn_darkMode') === 'true') {
    const btn = document.getElementById('darkBtn');
    if (btn) btn.innerHTML = ICONS.lightMode;
  }
}

/* ═══ DARK MODE ═══ */
function toggleDark() {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('talentOn_darkMode', isDark);
  const btn = document.getElementById('darkBtn');
  if (btn) btn.innerHTML = isDark ? ICONS.lightMode : ICONS.darkMode;
}

function restoreDarkMode() {
  if (localStorage.getItem('talentOn_darkMode') === 'true') {
    document.body.classList.add('dark');
  }
}

/* ═══ GRADE MODE ═══ */
function getGradeMode() {
  return localStorage.getItem('talentOn_gradeMode') || 'senior';
}

/* ═══ PROGRESS PERSISTENCE ═══ */
function getStoredProgress() {
  const val = localStorage.getItem('talentOn_progress');
  return val !== null ? parseInt(val, 10) : null;
}

/* ═══ AUTO INIT ═══ */
restoreDarkMode();
