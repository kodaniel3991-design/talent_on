/* ═══════════════════════════════════════════════
   Talent ON — Data Renderers
   JSON 데이터 → HTML 카드/리스트 렌더링
═══════════════════════════════════════════════ */

/* ═══ COMPANY CARD (Grid View) ═══ */
function renderCompanyCard(company) {
  const statusColors = { green: 'badge-green', yellow: 'badge-yellow', gray: 'badge-gray' };
  const sizeColors = { '대기업': 'badge-taupe', '중견기업': 'badge-blue', '중소기업': 'badge-gray' };
  const scoreColor = company.score >= 65 ? 'var(--green-600)' : 'var(--taupe-400)';
  const ringColor = company.score >= 65 ? 'var(--green-400)' : 'var(--beige)';
  const ringDash = (company.score / 100 * 69.1).toFixed(1);

  return `
    <div class="company-card" data-name="${company.name}" data-industry="${company.industry}" data-size="${company.size}" data-location="${company.location}" data-status="${company.status}">
      <div class="cc-header">
        <div class="cc-logo"><img src="https://www.google.com/s2/favicons?domain=${company.logo}&sz=128" alt="${company.name}" onerror="this.remove();this.parentElement.textContent='${company.name.charAt(0)}'"></div>
        <div class="cc-info">
          <div class="cc-name">${company.name}</div>
          <div class="cc-industry">${company.industry} · ${company.location}</div>
          <div class="cc-badges">
            <span class="badge ${statusColors[company.statusType] || 'badge-gray'}">${company.status}</span>
            <span class="badge ${sizeColors[company.size] || 'badge-gray'}">${company.size}</span>
          </div>
        </div>
      </div>
      <div class="cc-body">
        <div class="cc-label">인재상 키워드</div>
        <div class="cc-keywords">${company.keywords.map(k => `<span class="cc-keyword">${k}</span>`).join('')}</div>
      </div>
      <div class="cc-specs">
        ${company.specs.map(s => `
          <div class="cc-spec-row">
            <span class="cc-spec-name">${s.name}</span>
            <div class="cc-spec-bar"><div class="cc-spec-bar-fill" style="width:${s.pct}%;background:${s.color}"></div></div>
            <span class="cc-spec-val" style="color:${s.color}">${s.value}</span>
          </div>
        `).join('')}
      </div>
      <div class="cc-footer">
        <div class="cc-match">
          <div class="cc-match-ring">
            <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="11" fill="none" stroke="var(--border-subtle)" stroke-width="3"/><circle cx="14" cy="14" r="11" fill="none" stroke="${ringColor}" stroke-width="3" stroke-dasharray="${ringDash} 69.1" stroke-linecap="round"/></svg>
            <div class="cc-match-num" style="color:${scoreColor}">${company.score}</div>
          </div>
          <span style="color:${scoreColor}">달성 가능성</span>
        </div>
        <a class="cc-action" href="${company.detailPage}">상세 보기 →</a>
      </div>
    </div>`;
}

/* ═══ COMPANY TABLE ROW (List View) ═══ */
function renderCompanyRow(company) {
  const statusColors = { green: 'badge-green', yellow: 'badge-yellow', gray: 'badge-gray' };
  const sizeColors = { '대기업': 'badge-taupe', '중견기업': 'badge-blue', '중소기업': 'badge-gray' };
  const scoreColor = company.score >= 65 ? 'var(--green-600)' : 'var(--taupe-400)';

  return `
    <tr data-name="${company.name}" data-industry="${company.industry}" data-size="${company.size}" data-location="${company.location}" data-status="${company.status}">
      <td><div class="t-company"><div class="t-logo"><img src="https://www.google.com/s2/favicons?domain=${company.logo}&sz=128" alt="${company.name}" onerror="this.remove();this.parentElement.textContent='${company.name.charAt(0)}'"></div><div><div class="t-name">${company.name}</div><div class="t-sub">${company.location}</div></div></div></td>
      <td>${company.industry}</td>
      <td><span class="badge ${sizeColors[company.size] || 'badge-gray'}">${company.size}</span></td>
      <td><div class="t-keywords">${company.keywords.slice(0, 3).map(k => `<span class="t-kw">${k}</span>`).join('')}</div></td>
      <td><span class="badge ${statusColors[company.statusType] || 'badge-gray'}">${company.status}</span></td>
      <td style="text-align:right"><span class="t-match" style="color:${scoreColor}">${company.score}%</span></td>
    </tr>`;
}

/* ═══ RENDER COMPANY GRID ═══ */
function renderCompanyGrid(containerId, companies) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = companies.map(renderCompanyCard).join('');
}

/* ═══ RENDER COMPANY TABLE ═══ */
function renderCompanyTable(containerId, companies) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const tbody = el.querySelector('tbody');
  if (tbody) tbody.innerHTML = companies.map(renderCompanyRow).join('');
}

/* ═══ ROADMAP CHECKLIST ITEM ═══ */
function renderChecklistItem(item) {
  const catClass = { cert: 'cat-cert', lang: 'cat-lang', exp: 'cat-exp', skill: 'cat-skill', etc: 'cat-etc' };
  const catLabel = { cert: '자격증', lang: '어학', exp: '경험', skill: '역량', etc: '기타' };
  const doneClass = item.done ? ' done' : '';

  let rightHtml = '';
  if (item.done) {
    rightHtml = '<span class="badge badge-green" style="font-size:9px">완료</span>';
  } else if (item.priority === 'high') {
    rightHtml = '<svg class="cl-priority high" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 3v6M8 11.5v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  } else if (item.priority === 'medium') {
    rightHtml = '<svg class="cl-priority medium" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
  } else {
    rightHtml = '<svg class="cl-priority low" width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2" fill="currentColor"/></svg>';
  }

  const metaHtml = item.done
    ? `<span class="cl-cat ${catClass[item.category] || 'cat-etc'}">${catLabel[item.category] || '기타'}</span>${item.result || ''}`
    : `<span class="cl-cat ${catClass[item.category] || 'cat-etc'}">${catLabel[item.category] || '기타'}</span>${item.meta ? (item.priority === 'high' ? `<span style="color:var(--color-error);font-weight:600">${item.meta}</span>` : item.meta) : ''}`;

  return `
    <div class="cl-item${doneClass}" onclick="toggleItem(this)" data-key="${item.key}">
      <div class="cl-check"></div>
      <div class="cl-body">
        <div class="cl-title">${item.title}</div>
        <div class="cl-meta">${metaHtml}</div>
      </div>
      ${rightHtml}
    </div>`;
}

/* ═══ RENDER ROADMAP SEMESTER ═══ */
function renderSemester(semester) {
  let dotHtml = '';
  let headerExtra = '';

  if (semester.status === 'done') {
    dotHtml = '<div class="tl-dot done"><svg viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>';
    const total = semester.items.length;
    const done = semester.items.filter(i => i.done).length;
    headerExtra = `<div class="tl-progress-mini" style="color:var(--green-600)">${done}/${total} 완료</div>`;
  } else if (semester.status === 'current') {
    dotHtml = '<div class="tl-dot current">now</div>';
    const done = semester.items.filter(i => i.done).length;
    const total = semester.items.length;
    headerExtra = `<div class="tl-progress-mini" style="color:var(--beige)">${done}/${total} 진행중</div>`;
  } else {
    dotHtml = `<div class="tl-dot future">${semester.id}</div>`;
    headerExtra = `<div class="tl-progress-mini" style="color:var(--text-tertiary)">0/${semester.items.length}</div>`;
  }

  const titleStyle = semester.status === 'current' ? ' style="color:var(--taupe-500)"' : '';
  const currentBadge = semester.status === 'current' ? ' <span class="badge badge-taupe" style="font-size:9px;margin-left:6px">현재 학기</span>' : '';

  return `
    <div class="tl-semester" data-semester="${semester.id}">
      ${dotHtml}
      <div class="tl-header">
        <div class="tl-title"${titleStyle}>${semester.label}${currentBadge}</div>
        <div class="tl-period">${semester.period}</div>
        ${headerExtra}
      </div>
      <div class="checklist">
        ${semester.items.map(renderChecklistItem).join('')}
      </div>
    </div>`;
}

/* ═══ RENDER FULL ROADMAP TIMELINE ═══ */
function renderRoadmapTimeline(containerId, semesters) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = semesters.map(renderSemester).join('');
}

/* ═══ RECOMMENDED COMPANY CARD (Dashboard) ═══ */
function renderRecCompany(company) {
  return `
    <div class="rec-company">
      <div class="rec-avatar" style="background:#fff;border:.5px solid var(--border-subtle)"><img src="https://www.google.com/s2/favicons?domain=${company.logo}&sz=128" alt="${company.name}" style="width:100%;height:100%;object-fit:contain;padding:5px" onerror="this.remove();this.parentElement.textContent='${company.name.charAt(0)}'"></div>
      <div class="rec-info">
        <div class="rec-name">${company.name}</div>
        <div class="rec-desc">${company.industry} · ${company.location}</div>
      </div>
      <div class="rec-match">${company.score}%</div>
    </div>`;
}

/* ═══ FETCH JSON HELPER ═══ */
async function loadJSON(path) {
  try {
    const res = await fetch(path);
    return await res.json();
  } catch (e) {
    console.warn('JSON load failed:', path, e);
    return null;
  }
}
