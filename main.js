
/* =========================================================================
   THEME — follows the OS light/dark preference by default; manual toggle
   overrides it and is remembered per-browser.
   ========================================================================= */
(function(){
  const root = document.documentElement;
  const stored = localStorage.getItem('theme');
  const mq = window.matchMedia('(prefers-color-scheme: light)');
  function apply(mode){
    root.setAttribute('data-theme', mode);
    document.getElementById('themeIcon').className = mode === 'light' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
  }
  apply(stored || (mq.matches ? 'light' : 'dark'));
  mq.addEventListener('change', e => { if(!localStorage.getItem('theme')) apply(e.matches ? 'light' : 'dark'); });
  document.getElementById('themeToggle').addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    apply(next);
  });
})();

/* =========================================================================
   MOBILE MENU
   ========================================================================= */
(function(){
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobile-menu');
  const icon = document.getElementById('menuIcon');
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    icon.className = menu.classList.contains('open') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
  });
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.remove('open'); icon.className='fa-solid fa-bars'; }));
})();

/* =========================================================================
   DATA LAYER — localStorage override on top of data.js defaults
   ========================================================================= */
const DEFAULT_DATA = JSON.parse(JSON.stringify(window.SITE_DATA));
function isPlainObject(v){ return v && typeof v === 'object' && !Array.isArray(v); }
// Merges saved (possibly older/incomplete) data on top of the current defaults,
// so any field added to data.js later (like a new section) always shows up
// even if the browser has an older cached edit that predates it.
function mergeWithDefaults(defaults, saved){
  if(!isPlainObject(saved)) return JSON.parse(JSON.stringify(defaults));
  const out = Array.isArray(defaults) ? [] : {};
  for(const key of Object.keys(defaults)){
    if(!(key in saved)){ out[key] = defaults[key]; continue; }
    if(isPlainObject(defaults[key]) && isPlainObject(saved[key])) out[key] = mergeWithDefaults(defaults[key], saved[key]);
    else out[key] = saved[key]; // arrays and primitives: saved value wins wholesale
  }
  return out;
}
function loadData(){
  try{
    const raw = localStorage.getItem('siteDataOverride');
    if(!raw) return JSON.parse(JSON.stringify(DEFAULT_DATA));
    return mergeWithDefaults(DEFAULT_DATA, JSON.parse(raw));
  }catch(e){ return JSON.parse(JSON.stringify(DEFAULT_DATA)); }
}
let DATA = loadData();
function persist(){ localStorage.setItem('siteDataOverride', JSON.stringify(DATA)); }

function esc(s){ return (s==null?'':String(s)).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

/* =========================================================================
   RENDER
   ========================================================================= */
function render(){
  document.title = DATA.meta.siteTitle;

  // nav / logo
  document.getElementById('logoBadge').innerHTML = `<img src="${esc(DATA.meta.logo)}" alt="logo" onerror="this.parentElement.innerHTML='<div style=\\'display:flex;align-items:center;justify-content:center;height:100%;background:var(--amber);color:#151005;font-weight:800;\\'>${esc((DATA.profile.firstName||'?')[0])}</div>'">`;
  document.getElementById('navName').innerHTML = `${esc(DATA.profile.firstName)} <span style="color:var(--amber);">${esc(DATA.profile.lastName)}</span>`;
  const navResume = document.getElementById('navResume');
  if(DATA.profile.resumeFile){ navResume.style.display='inline-flex'; navResume.href = DATA.profile.resumeFile; navResume.setAttribute('download', DATA.profile.resumeFile); }
  else { navResume.style.display='none'; }

  // hero
  document.getElementById('heroBadge').querySelector('span').textContent = DATA.profile.badge;
  const roleParts = (DATA.profile.role||'').split(' ');
  document.getElementById('heroHeading').innerHTML = `${esc(DATA.profile.firstName)}<br><span class="accent">${esc(DATA.profile.role)}</span>`;
  document.getElementById('heroTagline').textContent = DATA.profile.tagline;
  document.getElementById('heroSocial').innerHTML = socialIcons();
  const heroPhoto = document.getElementById('heroPhoto');
  if(DATA.profile.heroImage){ heroPhoto.style.display=''; heroPhoto.src = DATA.profile.heroImage; } else { heroPhoto.style.display='none'; }
  document.getElementById('availBadge').textContent = DATA.profile.availability || '';
  document.getElementById('footSocial').innerHTML = socialIcons();

  // terminal
  const tb = document.getElementById('termBody');
  tb.innerHTML = (DATA.terminal.lines||[]).map(l => `<div><span class="term-prompt">$</span> ${esc(l.cmd)}</div><div class="term-out">${esc(l.out)}</div>`).join('') + `<div style="margin-top:8px;"><span class="term-prompt">$</span> <span class="term-cursor"></span></div>`;

  // mission
  document.getElementById('missionQuote').innerHTML = missionHTML(DATA.mission.quote);
  document.getElementById('missionMeta').innerHTML = `
    <div><div class="label">Core Tech</div><div class="val font-mono" style="font-family:'IBM Plex Mono',monospace;">${esc(DATA.mission.coreTech)}</div></div>
    <div><div class="label">Engineering</div><div class="val">${esc(DATA.mission.engineering)}</div></div>
    <div><div class="label">${esc(DATA.mission.achievementLabel)}</div><div style="display:inline-block;padding:5px 12px;background:var(--amber-dim);border:1px solid var(--border);border-radius:8px;color:var(--amber);font-weight:800;font-size:12px;">${esc(DATA.mission.achievement)}</div></div>
  `;

  // fellowship
  const fSection = document.getElementById('fellowship');
  const fLink = document.getElementById('navFellowshipLink');
  const fLinkMobile = document.getElementById('navFellowshipLinkMobile');
  const fw = DATA.fellowship;
  if(fw && fw.active){
    fSection.style.display = '';
    fLink.style.display = '';
    fLinkMobile.style.display = 'flex';
    document.getElementById('fellowshipCard').innerHTML = `
      <div class="skill-icon" style="width:56px;height:56px;font-size:22px;flex:none;"><i class="${esc(fw.icon)}"></i></div>
      <div style="flex:1;min-width:220px;">
        <span class="badge-pill" style="margin-bottom:12px;"><i class="fa-solid fa-circle" style="font-size:7px;"></i> ${esc(fw.status)}</span>
        <h3 style="margin:2px 0 4px;font-size:20px;">${esc(fw.title)}</h3>
        <p style="margin:0 0 12px;color:var(--amber);font-weight:700;">${esc(fw.institute)}</p>
        <p style="margin:0;color:var(--text-dim);font-size:14px;line-height:1.7;max-width:560px;">${esc(fw.description)}</p>
      </div>`;
  } else {
    fSection.style.display = 'none';
    fLink.style.display = 'none';
    fLinkMobile.style.display = 'none';
  }

  // publications
  const pubSection = document.getElementById('publications');
  const pubLink = document.getElementById('navPubLink');
  const pubLinkMobile = document.getElementById('navPubLinkMobile');
  const pubs = DATA.publications || [];
  if(pubs.length){
    pubSection.style.display = '';
    pubLink.style.display = '';
    pubLinkMobile.style.display = 'flex';
    document.getElementById('pubList').innerHTML = pubs.map(p => `
      <div class="card" style="padding:26px;margin-bottom:18px;">
        <div style="display:flex;gap:16px;align-items:flex-start;flex-wrap:wrap;justify-content:space-between;">
          <div style="flex:1;min-width:240px;">
            <span class="badge-pill" style="margin-bottom:12px;"><i class="fa-solid fa-book-open"></i> Published</span>
            <h3 style="margin:2px 0 6px;font-size:19px;line-height:1.35;">${esc(p.title)}</h3>
            <p style="margin:0 0 4px;color:var(--amber);font-weight:700;font-size:13.5px;">${esc(p.journal)}</p>
            <p style="margin:0 0 14px;color:var(--text-dim);font-size:13px;">${esc(p.details)}</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
              ${p.paperId ? `<span class="tag font-mono">Paper ID: ${esc(p.paperId)}</span>` : ''}
              ${p.doi ? `<span class="tag font-mono">DOI: ${esc(p.doi)}</span>` : ''}
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;flex:none;">
            ${p.paperLink ? `<a href="${esc(p.paperLink)}" target="_blank" rel="noreferrer" class="btn" style="font-size:12px;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Read Paper</a>` : ''}
            ${p.certLink ? `<a href="${esc(p.certLink)}" target="_blank" rel="noreferrer" class="btn" style="font-size:12px;"><i class="fa-solid fa-award"></i> Certificate</a>` : ''}
          </div>
        </div>
      </div>`).join('');
  } else {
    pubSection.style.display = 'none';
    pubLink.style.display = 'none';
    pubLinkMobile.style.display = 'none';
  }

  // skills
  document.getElementById('skillsGrid').innerHTML = (DATA.skills||[]).map(s => `
    <div class="card skill-card">
      <div class="skill-icon"><i class="${esc(s.icon)}"></i></div>
      <h3>${esc(s.title)}</h3>
      <div class="skill-tags">${(s.tags||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div>
    </div>`).join('');

  // experience
  document.getElementById('expList').innerHTML = (DATA.experience||[]).map(e => `
    <div class="exp-item">
      <div class="rail"></div>
      <div class="exp-dot"><span></span></div>
      <div class="card exp-card">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:12px;margin-bottom:10px;">
          <div>
            <h3 style="margin:0 0 4px;font-size:19px;display:flex;align-items:center;gap:10px;"><i class="${esc(e.icon)}" style="color:var(--amber);"></i>${esc(e.role)}</h3>
            <p style="margin:0;color:var(--amber);font-weight:700;">${esc(e.company)}</p>
          </div>
          ${e.certFile ? `<a href="${esc(e.certFile)}" download class="btn" style="font-size:11.5px;padding:8px 14px;"><i class="fa-solid fa-download"></i> Certificate</a>` : ''}
        </div>
        <div class="exp-date">${esc(e.dateRange)}</div>
        <ul class="exp-bullets" style="list-style:none;padding:0;margin:0;">${(e.bullets||[]).map(b=>`<li>${esc(b)}</li>`).join('')}</ul>
      </div>
    </div>`).join('');

  // projects
  document.getElementById('projGrid').innerHTML = (DATA.projects||[]).map(p => `
    <div class="card proj-card">
      <div class="proj-thumb">
        <i class="fa-solid fa-code"></i>
        <div class="proj-links">
          ${p.github ? `<a href="${esc(p.github)}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>` : ''}
          ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
        </div>
      </div>
      <div class="proj-body">
        <div class="proj-tagrow">${(p.tags||[]).map(t=>`<span class="mini-tag">${esc(t)}</span>`).join('')}</div>
        <h3>${esc(p.title)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="exp-links-mobile">
          ${p.github ? `<a href="${esc(p.github)}" target="_blank">Github ↗</a>` : ''}
          ${p.live ? `<a href="${esc(p.live)}" target="_blank">Visit ↗</a>` : ''}
        </div>
      </div>
    </div>`).join('');

  document.getElementById('expGrid').innerHTML = (DATA.experiments||[]).map(x => `
    <a href="${esc(x.link)}" target="_blank" class="card experiment-link">
      <div><p style="margin:0 0 4px;font-weight:700;font-size:13.5px;">${esc(x.title)}</p><p class="font-mono" style="margin:0;font-size:9.5px;color:var(--amber);text-transform:uppercase;">${esc(x.subtitle)}</p></div>
      <i class="fa-brands fa-github" style="color:var(--text-faint);"></i>
    </a>`).join('');

  // contact
  document.getElementById('contactGrid').innerHTML = `
    ${contactCard('fa-regular fa-envelope','Email Address',DATA.profile.email,'mailto:'+DATA.profile.email)}
    ${contactCard('fa-solid fa-phone-flip','Phone Number',DATA.profile.phone,'tel:'+DATA.profile.phone)}
    ${contactCard('fa-brands fa-linkedin-in','LinkedIn Profile',DATA.profile.firstName+' '+DATA.profile.lastName,DATA.profile.linkedin)}
    ${contactCard('fa-solid fa-map-location-dot','Current Location',DATA.profile.location,'#')}
  `;
  document.getElementById('footName').innerHTML = `${esc(DATA.profile.firstName)} <span style="color:var(--amber);">${esc(DATA.profile.lastName)}.</span>`;
  document.getElementById('footTag').textContent = `${DATA.profile.badge} · ${DATA.profile.role}`;

  renderLeetCode();
}

function socialIcons(){
  let out='';
  if(DATA.profile.github) out += `<a href="${esc(DATA.profile.github)}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>`;
  if(DATA.profile.linkedin) out += `<a href="${esc(DATA.profile.linkedin)}" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>`;
  return out;
}
function contactCard(icon,label,val,href){
  return `<a href="${esc(href)}" target="_blank" class="card contact-card">
    <div class="contact-icon"><i class="${icon}"></i></div>
    <div class="label">${esc(label)}</div>
    <div class="val">${esc(val)}</div>
  </a>`;
}
function missionHTML(q){
  if(!q) return '';
  return esc(q)
    .replace(/\{b:(.*?)\}/g,'<b>$1</b>')
    .replace(/\{i:(.*?)\}/g,'<i>$1</i>')
    .replace(/\{u:(.*?)\}/g,'<u>$1</u>');
}

/* =========================================================================
   LEETCODE — pulls public stats via a read-only community API
   (https://leetcode-stats-api.herokuapp.com). No login/API key needed.
   ========================================================================= */
let lcCache = {};
async function renderLeetCode(){
  const el = document.getElementById('lcCard');
  const uname = (DATA.leetcode && DATA.leetcode.username || '').trim();
  if(!uname){
    el.innerHTML = `<div class="lc-empty"><i class="fa-solid fa-terminal" style="font-size:20px;color:var(--amber);margin-bottom:10px;display:block;"></i>No LeetCode username set yet.<br><br><button onclick="document.getElementById('editTab').click(); switchAdminTab('leetcode');" style="background:none;border:none;color:var(--amber);text-decoration:underline;cursor:pointer;font:inherit;">Add your username in the editor →</button></div>`;
    return;
  }
  el.innerHTML = `<div class="lc-loading"><span class="spinner"></span> Fetching stats for “${esc(uname)}”…</div>`;
  const LC_APIS = [
    u => `https://leetcode-stats-api.herokuapp.com/${encodeURIComponent(u)}`,
    u => `https://leetcode-stats.tashif.codes/${encodeURIComponent(u)}`
  ];
  try{
    let stats = lcCache[uname];
    if(!stats){
      let lastErr;
      for(const buildUrl of LC_APIS){
        try{
          const res = await fetch(buildUrl(uname));
          if(!res.ok) throw new Error('bad response');
          const json = await res.json();
          if(json.status && json.status !== 'success') throw new Error('user not found');
          stats = json;
          break;
        }catch(e){ lastErr = e; }
      }
      if(!stats) throw lastErr || new Error('all sources failed');
      lcCache[uname] = stats;
    }
    const pct = stats.totalQuestions ? Math.round((stats.totalSolved/stats.totalQuestions)*100) : 0;
    el.innerHTML = `
      <div class="lc-head"><i class="fa-solid fa-terminal"></i><div><h3 style="margin:0;font-size:17px;">@${esc(uname)}</h3><p style="margin:2px 0 0;font-size:12px;color:var(--text-dim);">Ranked #${esc(stats.ranking?.toLocaleString?.()||stats.ranking||'—')} on LeetCode</p></div></div>
      <div class="lc-grid">
        <div class="lc-ring-wrap">
          ${ring(pct)}
          <div class="big">${stats.totalSolved}</div>
          <div class="small">of ${stats.totalQuestions} solved</div>
        </div>
        <div>
          <div class="lc-stats">
            ${lcBar('Easy', stats.easySolved, stats.totalEasy, 'var(--green)')}
            ${lcBar('Medium', stats.mediumSolved, stats.totalMedium, 'var(--yellow)')}
            ${lcBar('Hard', stats.hardSolved, stats.totalHard, 'var(--red)')}
          </div>
          <div class="lc-meta-row">
            <div><div class="label">Acceptance Rate</div><div class="val">${stats.acceptanceRate ? stats.acceptanceRate.toFixed(1)+'%' : '—'}</div></div>
            <div><div class="label">Contribution Points</div><div class="val">${stats.contributionPoints ?? '—'}</div></div>
            <div><div class="label">Reputation</div><div class="val">${stats.reputation ?? '—'}</div></div>
          </div>
        </div>
      </div>`;
  }catch(err){
    el.innerHTML = `<div class="lc-error">Couldn't load stats for “${esc(uname)}” — check the username, or the stats API may be briefly asleep (it's a free tier; try again in a moment).<br><br><button onclick="renderLeetCode()">Retry</button></div>`;
  }
}
function lcBar(label,val,total,color){
  const pct = total ? Math.min(100, Math.round((val/total)*100)) : 0;
  return `<div class="lc-bar-row"><span class="lc-bar-label">${label}</span><div class="lc-bar-track"><div class="lc-bar-fill" style="width:${pct}%;background:${color};"></div></div><span class="lc-bar-count">${val ?? 0} / ${total ?? '—'}</span></div>`;
}
function ring(pct){
  const r=52, c=2*Math.PI*r, off = c - (pct/100)*c;
  return `<svg width="130" height="130" viewBox="0 0 130 130">
    <circle cx="65" cy="65" r="${r}" stroke="var(--surface-2)" stroke-width="10" fill="none"/>
    <circle cx="65" cy="65" r="${r}" stroke="var(--amber)" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${off}" transform="rotate(-90 65 65)"/>
  </svg>`;
}

/* =========================================================================
   ADMIN PANEL
   ========================================================================= */
const SECTIONS = [
  {id:'profile', label:'Profile', icon:'fa-user'},
  {id:'terminal', label:'Terminal', icon:'fa-terminal'},
  {id:'mission', label:'Mission', icon:'fa-bullseye'},
  {id:'fellowship', label:'Fellowship', icon:'fa-graduation-cap'},
  {id:'publications', label:'Publications', icon:'fa-book-open'},
  {id:'skills', label:'Skills', icon:'fa-code'},
  {id:'experience', label:'Experience', icon:'fa-briefcase'},
  {id:'projects', label:'Projects', icon:'fa-folder'},
  {id:'experiments', label:'Experiments', icon:'fa-flask'},
  {id:'leetcode', label:'LeetCode', icon:'fa-terminal'},
];
function switchAdminTab(id){
  document.querySelectorAll('.admin-tab').forEach(t=>t.classList.toggle('active', t.dataset.id===id));
  document.querySelectorAll('.admin-section').forEach(s=>s.classList.toggle('active', s.dataset.id===id));
}
function buildAdmin(){
  document.getElementById('adminTabs').innerHTML = SECTIONS.map((s,i)=>`<div class="admin-tab ${i===0?'active':''}" data-id="${s.id}"><i class="fa-solid ${s.icon}"></i> ${s.label}</div>`).join('');
  document.querySelectorAll('.admin-tab').forEach(t=>t.addEventListener('click',()=>switchAdminTab(t.dataset.id)));

  const host = document.getElementById('adminSections');
  host.innerHTML = SECTIONS.map((s,i)=>`<div class="admin-section ${i===0?'active':''}" data-id="${s.id}"></div>`).join('');

  renderProfileForm();
  renderTerminalForm();
  renderMissionForm();
  renderFellowshipForm();
  renderRepeatableForm('publications', ['title','journal','details','paperId','doi','paperLink','certLink'], null, 'title');
  renderRepeatableForm('skills', ['title','icon'], 'tags', 'title');
  renderRepeatableForm('experience', ['role','company','icon','dateRange','certFile'], 'bullets', 'role');
  renderRepeatableForm('projects', ['title','desc','github','live'], 'tags', 'title');
  renderRepeatableForm('experiments', ['title','subtitle','link'], null, 'title');
  renderLeetcodeForm();
}
function sectionEl(id){ return document.querySelector(`.admin-section[data-id="${id}"]`); }
function field(label, value, onChange, multiline){
  const wrap = document.createElement('div'); wrap.className='field';
  const l = document.createElement('label'); l.textContent = label; wrap.appendChild(l);
  const input = document.createElement(multiline?'textarea':'input');
  if(!multiline) input.type='text';
  input.value = value || '';
  input.addEventListener('input', () => onChange(input.value));
  wrap.appendChild(input);
  return wrap;
}
function renderProfileForm(){
  const el = sectionEl('profile'); el.innerHTML='';
  const p = DATA.profile;
  [
    ['First name','firstName'],['Last name','lastName'],['Badge text','badge'],['Role / title','role'],
    ['Tagline','tagline',true],['Photo path','heroImage'],['Resume filename','resumeFile'],['Availability text','availability'],
    ['GitHub URL','github'],['LinkedIn URL','linkedin'],['Email','email'],['Phone','phone'],['Location','location'],
  ].forEach(([label,key,multi]) => el.appendChild(field(label, p[key], v=>p[key]=v, multi)));
}
function renderTerminalForm(){
  const el = sectionEl('terminal'); el.innerHTML='';
  const note = document.createElement('p'); note.className='admin-note'; note.textContent='Each line is a fake command + its output, shown typed out in the hero terminal window.';
  el.appendChild(note);
  const list = document.createElement('div');
  DATA.terminal.lines.forEach((l,i)=>{
    const block = document.createElement('div'); block.className='repeat-block';
    const rm = document.createElement('button'); rm.className='rm'; rm.innerHTML='<i class="fa-solid fa-trash"></i>';
    rm.onclick = ()=>{ DATA.terminal.lines.splice(i,1); renderTerminalForm(); };
    block.appendChild(rm);
    block.appendChild(field('Command', l.cmd, v=>l.cmd=v));
    block.appendChild(field('Output', l.out, v=>l.out=v, true));
    list.appendChild(block);
  });
  el.appendChild(list);
  const add = document.createElement('button'); add.className='add-btn'; add.textContent='+ Add line';
  add.onclick = ()=>{ DATA.terminal.lines.push({cmd:'echo hello',out:'hello'}); renderTerminalForm(); };
  el.appendChild(add);
}
function renderMissionForm(){
  const el = sectionEl('mission'); el.innerHTML='';
  const m = DATA.mission;
  const note = document.createElement('p'); note.className='admin-note'; note.innerHTML='Wrap words in <code>{b:...}</code> for bold accent, <code>{i:...}</code> for italic mono, <code>{u:...}</code> for underline.';
  el.appendChild(note);
  [['Quote','quote',true],['Core tech','coreTech'],['Engineering','engineering'],['Achievement label','achievementLabel'],['Achievement','achievement']]
    .forEach(([label,key,multi])=> el.appendChild(field(label, m[key], v=>m[key]=v, multi)));
}
function renderFellowshipForm(){
  const el = sectionEl('fellowship'); el.innerHTML='';
  const fw = DATA.fellowship;
  const toggleWrap = document.createElement('div'); toggleWrap.className='field';
  const l = document.createElement('label'); l.textContent='Show this section on the site';
  toggleWrap.appendChild(l);
  const sel = document.createElement('input'); sel.type='checkbox'; sel.checked = !!fw.active; sel.style.cssText='width:auto;transform:scale(1.3);margin-top:4px;';
  sel.addEventListener('change', () => fw.active = sel.checked);
  toggleWrap.appendChild(sel);
  el.appendChild(toggleWrap);
  [['Status label','status'],['Title','title'],['Institute','institute'],['Icon (Font Awesome class)','icon'],['Description','description',true]]
    .forEach(([label,key,multi]) => el.appendChild(field(label, fw[key], v=>fw[key]=v, multi)));
}
function renderLeetcodeForm(){
  const el = sectionEl('leetcode'); el.innerHTML='';
  const note = document.createElement('p'); note.className='admin-note'; note.textContent='Enter your exact LeetCode username (from your profile URL: leetcode.com/u/USERNAME). Leave blank to hide this section.';
  el.appendChild(note);
  el.appendChild(field('LeetCode username', DATA.leetcode.username, v=>DATA.leetcode.username=v));
}
// generic repeatable-list editor for skills / experience / projects / experiments
function renderRepeatableForm(key, simpleFields, listField, titleKey){
  const el = sectionEl(key); el.innerHTML='';
  const container = document.createElement('div');
  function draw(){
    container.innerHTML='';
    DATA[key].forEach((item, idx) => {
      const block = document.createElement('div'); block.className='repeat-block';
      const rm = document.createElement('button'); rm.className='rm'; rm.innerHTML='<i class="fa-solid fa-trash"></i>';
      rm.onclick = ()=>{ DATA[key].splice(idx,1); draw(); };
      block.appendChild(rm);

      const heading = document.createElement('p');
      heading.style.cssText='font-weight:700;font-size:12px;margin:0 0 10px;color:var(--amber);font-family:IBM Plex Mono,monospace;text-transform:uppercase;letter-spacing:.05em;';
      heading.textContent = item[titleKey] || `#${idx+1}`;
      block.appendChild(heading);

      simpleFields.forEach(f => {
        const labelName = f.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase());
        const isLong = f==='desc';
        const inp = field(labelName, item[f], v => { item[f]=v; heading.textContent = item[titleKey] || `#${idx+1}`; }, isLong);
        block.appendChild(inp);
      });

      if(listField){
        const wrap = document.createElement('div'); wrap.className='field';
        const l = document.createElement('label'); l.textContent = listField==='tags' ? 'Tags (comma separated)' : 'Bullet points (one per line)';
        wrap.appendChild(l);
        const ta = document.createElement('textarea');
        ta.value = listField==='tags' ? (item[listField]||[]).join(', ') : (item[listField]||[]).join('\n');
        ta.addEventListener('input', () => {
          item[listField] = listField==='tags'
            ? ta.value.split(',').map(s=>s.trim()).filter(Boolean)
            : ta.value.split('\n').map(s=>s.trim()).filter(Boolean);
        });
        wrap.appendChild(ta);
        block.appendChild(wrap);
      }
      container.appendChild(block);
    });
  }
  draw();
  el.appendChild(container);
  const add = document.createElement('button'); add.className='add-btn'; add.textContent = '+ Add ' + key.slice(0,-1);
  add.onclick = () => {
    const blank = {}; simpleFields.forEach(f=>blank[f]='');
    if(listField) blank[listField] = [];
    DATA[key].push(blank);
    draw();
  };
  el.appendChild(add);
}

/* =========================================================================
   ADMIN ACCESS GATE
   The editor UI is only shown when the page is opened with the right key
   in the URL, e.g.  index.html?admin=300702221002
   NOTE: this is a static site with no server, so this can only ever hide
   the button from casual visitors — it can't be real security, since the
   key lives in this file's source and anyone can view it. Don't use it
   to protect anything sensitive.
   ========================================================================= */
const ADMIN_KEY = '300702221002';
function hasAdminAccess(){
  return new URLSearchParams(window.location.search).get('admin') === ADMIN_KEY;
}

/* =========================================================================
   ANTI-INSPECTION DETERRENTS
   Blocks the obvious ways to peek at the page: right-click, the devtools
   keyboard shortcuts, and view-source — plus a rough check for an open
   devtools panel that blanks the page while it's open.
   Skipped entirely when the admin key is present, so editing isn't affected.

   Be clear-eyed about what this actually does: this is a static HTML/JS
   file. Nothing running in the browser can truly stop someone from reading
   it — anyone can view it with curl, a proxy, browser reader mode, or by
   disabling JavaScript before the page loads. This layer only stops the
   casual right-click-and-inspect path; treat it as a light deterrent, not
   a way to protect the admin key or any other secret. Don't put anything
   in this file you'd actually be upset to have someone read.
   ========================================================================= */
(function(){
  if(hasAdminAccess()) return;

  document.addEventListener('contextmenu', e => e.preventDefault());

  document.addEventListener('keydown', e => {
    const k = e.key;
    const blocked =
      k === 'F12' ||
      (e.ctrlKey && e.shiftKey && ['I','J','C','i','j','c'].includes(k)) ||
      (e.ctrlKey && ['U','u','S','s'].includes(k)) ||
      (e.metaKey && e.altKey && ['I','J','C','i','j','c'].includes(k)); // Safari/Mac
    if(blocked) e.preventDefault();
  });

  let warned = false;
  function showGuard(){
    if(document.getElementById('inspectGuard')) return;
    const g = document.createElement('div');
    g.id = 'inspectGuard';
    g.style.cssText = 'position:fixed;inset:0;z-index:9999;background:var(--bg);color:var(--text);display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;font-family:IBM Plex Mono,monospace;';
    g.innerHTML = '<div><i class="fa-solid fa-terminal" style="font-size:22px;color:var(--amber);"></i><p style="margin-top:14px;font-size:13px;color:var(--text-dim);">Developer tools are disabled on this page.<br>Close them to keep browsing.</p></div>';
    document.body.appendChild(g);
  }
  function hideGuard(){ const g = document.getElementById('inspectGuard'); if(g) g.remove(); }
  setInterval(() => {
    const widthGap = window.outerWidth - window.innerWidth > 160;
    const heightGap = window.outerHeight - window.innerHeight > 160;
    if(widthGap || heightGap) showGuard(); else hideGuard();
  }, 800);
})();

/* admin open/close + actions */
const editTab = document.getElementById('editTab');
const overlay = document.getElementById('adminOverlay');
const panel = document.getElementById('adminPanel');
function openAdmin(){ if(!hasAdminAccess()) return; buildAdmin(); overlay.classList.add('open'); panel.classList.add('open'); }
function closeAdmin(){ overlay.classList.remove('open'); panel.classList.remove('open'); }
editTab.style.display = hasAdminAccess() ? 'flex' : 'none';
editTab.addEventListener('click', openAdmin);
document.getElementById('adminClose').addEventListener('click', closeAdmin);
overlay.addEventListener('click', closeAdmin);

function toast(msg){
  const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(()=>t.classList.remove('show'), 2400);
}

document.getElementById('btnSave').addEventListener('click', () => {
  persist(); render(); toast('Saved — changes are live in this browser.');
});
document.getElementById('btnReset').addEventListener('click', () => {
  if(!confirm('Discard your edits and reload the defaults from data.js?')) return;
  localStorage.removeItem('siteDataOverride');
  DATA = JSON.parse(JSON.stringify(DEFAULT_DATA));
  render(); buildAdmin(); toast('Reset to data.js defaults.');
});
document.getElementById('btnExport').addEventListener('click', () => {
  const body = `/*\n  SITE DATA — generated by the on-page editor.\n  Replace the old data.js in your project with this file.\n*/\nwindow.SITE_DATA = ${JSON.stringify(DATA, null, 2)};\n`;
  const blob = new Blob([body], {type:'text/javascript'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = 'data.js'; a.click();
  toast('Downloaded data.js — replace it in your project folder.');
});
document.getElementById('importFile').addEventListener('change', (e) => {
  const file = e.target.files[0]; if(!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try{
      const tmp = {};
      // eslint-disable-next-line no-new-func
      new Function('window', reader.result)(tmp);
      if(!tmp.SITE_DATA) throw new Error('no SITE_DATA found');
      DATA = mergeWithDefaults(DEFAULT_DATA, tmp.SITE_DATA);
      persist(); render(); buildAdmin();
      toast('Imported data.js successfully.');
    }catch(err){ alert('Could not read that file — make sure it\'s a data.js exported from this editor.'); }
  };
  reader.readAsText(file);
});

render();
