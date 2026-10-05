const chapters = window.JS_LAB_CHAPTERS;

const nav = document.querySelector('#chapter-nav');
const article = document.querySelector('#chapter');
const sidebar = document.querySelector('#sidebar');
const toggle = document.querySelector('#nav-toggle');
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const code = (value) => `<div class="code-wrap"><pre><code>${escapeHtml(value)}</code></pre></div>`;

function renderTerms(chapter) {
  return '<div class="terms"><h3>Les mots à connaître</h3><dl>' +
    chapter.terms.map((term) => '<div><dt>' + escapeHtml(term.word) + '</dt><dd>' + escapeHtml(term.meaning) + '</dd></div>').join('') +
    '</dl></div>';
}
function renderWalkthrough(example) {
  return '<div class="example-walkthrough"><h3>Étape par étape</h3>' +
    example.walkthrough.map((step, index) => '<p><span class="step-number">' + (index + 1) + '.</span>' + escapeHtml(step) + '</p>').join('') +
    '</div>';
}

let lastGroup = '';
nav.innerHTML = chapters.map((chapter, index) => {
  const group = chapter.group === lastGroup ? '' : `<p class="nav-group">${escapeHtml(chapter.group)}</p>`;
  lastGroup = chapter.group;
  return `${group}<a class="nav-link" href="#${chapter.id}" data-id="${chapter.id}"><span class="index">${String(index + 1).padStart(2, '0')}</span><span>${escapeHtml(chapter.title)}</span></a>`;
}).join('');
document.querySelector('#chapter-count').textContent = `${chapters.length} chapitres`;

function render() {
  const requestedId = decodeURIComponent(location.hash.slice(1));
  const id = requestedId === 'conditions-boucles' ? 'conditions' : requestedId;
  const index = Math.max(0, chapters.findIndex((chapter) => chapter.id === id));
  const chapter = chapters[index];
  const examples = chapter.examples.map((example) => `
    <section class="example" aria-label="Exemple : ${escapeHtml(example.title)}">
      <div class="example-head">${escapeHtml(example.title)}<span>${escapeHtml(example.context || 'JavaScript moderne')}</span></div>
      ${code(example.code)}
      ${renderWalkthrough(example)}
      <div class="result"><p class="result-label">Résultat attendu</p><pre>${escapeHtml(example.output)}</pre></div>
      <div class="example-explain"><h3>Ce qu’il faut observer</h3><p>${escapeHtml(example.explain)}</p></div>
    </section>`).join('');
  article.innerHTML = `
    <p class="crumb">${escapeHtml(chapter.group)} · chapitre ${String(index + 1).padStart(2, '0')} / ${chapters.length}</p>
    <h1>${escapeHtml(chapter.title)}</h1>
    <p class="lead">${escapeHtml(chapter.lead)}</p>
    <div class="chapter-meta"><span class="pill">${escapeHtml(chapter.era || 'ES6+')}</span><span class="pill alt">${escapeHtml(chapter.kind || 'Fondamentaux')}</span></div>
    <section class="learning-section beginner-section"><h2>On part de zéro</h2><p>${escapeHtml(chapter.startingPoint)}</p>${renderTerms(chapter)}</section>
    <section class="learning-section"><h2>Comprendre la notion</h2><div class="callout"><p>${escapeHtml(chapter.mental)}</p></div></section>
    <section class="learning-section"><h2>Syntaxe essentielle</h2><p>${escapeHtml(chapter.syntaxIntro)}</p>${code(chapter.syntax)}</section>
    <section class="learning-section"><h2>Voir la notion en action</h2>${examples}</section>
    <section class="learning-section"><h2>À retenir</h2><div class="note"><strong>Bonne pratique.</strong> ${escapeHtml(chapter.practice)}</div>${chapter.legacy ? `<div class="legacy"><h3>Ancienne syntaxe à reconnaître</h3><p>${escapeHtml(chapter.legacy.text)}</p><pre><code>${escapeHtml(chapter.legacy.code)}</code></pre></div>` : ''}</section>
    <nav class="chapter-pager" aria-label="Chapitres précédent et suivant">
      ${index ? `<a class="pager-link" href="#${chapters[index - 1].id}"><small>Chapitre précédent</small>${escapeHtml(chapters[index - 1].title)}</a>` : ''}
      ${index < chapters.length - 1 ? `<a class="pager-link next" href="#${chapters[index + 1].id}"><small>Chapitre suivant</small>${escapeHtml(chapters[index + 1].title)}</a>` : ''}
    </nav>`;
  document.title = `${chapter.title} — JavaScript Lab`;
  nav.querySelectorAll('.nav-link').forEach((link) => {
    if (link.dataset.id === chapter.id) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  sidebar.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'auto' });
}

toggle.addEventListener('click', () => {
  const open = sidebar.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
window.addEventListener('hashchange', render);
render();
