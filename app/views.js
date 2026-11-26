// Page templates. Each function returns the HTML for one route; main.js puts it on screen and wires the
// controls. Every number shown comes from data.js with its source and year beside it.

import { sections, series, sectors, provinces, indicators } from './data.js';
import { chartFor, donut } from './charts.js';

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export const SWITCHABLE = [
  ['population', 'Population'],
  ['gdpGrowth', 'GDP growth'],
  ['poverty', 'Poverty'],
  ['internet', 'Internet users'],
];

function kpiCards(kpis) {
  return `<div class="kpis">${kpis
    .map(
      (k) => `<div class="kpi"><div class="kpi-value">${esc(k.value)}</div><div class="kpi-label">${esc(k.label)}</div><div class="kpi-source">${esc(k.source)}, ${k.year}</div></div>`,
    )
    .join('')}</div>`;
}

function chartCard(key) {
  const def = series[key];
  return `<figure class="card chart-card"><figcaption><h3>${esc(def.title)}</h3><span class="source">Source: ${esc(def.source)}</span></figcaption>${chartFor(def)}</figure>`;
}

export function home(activeChart) {
  const featured = sections.map((s) => s.kpis[0]);
  const sectionCards = sections
    .map(
      (s) => `<a class="section-card" href="#/${s.slug}"><h3>${esc(s.name)}</h3><p>${esc(s.tagline)}</p><span class="more">Explore ${esc(s.name.toLowerCase())} →</span></a>`,
    )
    .join('');
  const buttons = SWITCHABLE.map(
    ([key, label]) => `<button type="button" class="chip${key === activeChart ? ' on' : ''}" data-chart="${key}">${label}</button>`,
  ).join('');
  return `
  <section class="hero">
    <p class="eyebrow">National statistics explorer</p>
    <h1>Indonesia in Numbers</h1>
    <p class="lede">The key facts about the world’s fourth most populous country — population, economy, health, education, environment and technology — with every figure cited to its source and year.</p>
    ${kpiCards(featured)}
  </section>
  <section class="card">
    <div class="card-head"><h2>Trends at a glance</h2><div class="chips">${buttons}</div></div>
    <div id="trend-chart">${chartCard(activeChart)}</div>
    <p class="hint">Pick a topic above to swap the chart. Hover or tap a point or bar for its exact value.</p>
  </section>
  <section class="card">
    <div class="card-head"><h2>${esc(sectors.title)}</h2><span class="source">Source: ${esc(sectors.source)}</span></div>
    ${donut(sectors.slices)}
  </section>
  <h2 class="section-title">Explore by topic</h2>
  <div class="section-grid">${sectionCards}</div>
  <section class="card wide-links">
    <h2>Go deeper</h2>
    <p><a href="#/indicators">Search all ${indicators.length} indicators</a> — every headline figure on this site in one filterable table.</p>
    <p><a href="#/provinces">Compare the largest provinces</a> — population and land area for 16 of Indonesia’s 38 provinces.</p>
    <p><a href="#/about">About the sources</a> — where each number comes from and how this site is built.</p>
  </section>`;
}

export function sectionPage(section) {
  const others = sections.filter((s) => s.slug !== section.slug);
  return `
  <p class="crumb"><a href="#/">← Overview</a></p>
  <h1>${esc(section.name)}</h1>
  <p class="lede">${esc(section.intro)}</p>
  ${kpiCards(section.kpis)}
  <div class="chart-grid">${section.series.map(chartCard).join('')}</div>
  <section class="card">
    <h2>Good to know</h2>
    <ul class="facts">${section.facts.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
  </section>
  <nav class="next-links"><h2>Keep exploring</h2>${others.map((s) => `<a href="#/${s.slug}">${esc(s.name)}</a>`).join('')}</nav>`;
}

export function indicatorsPage(state) {
  const cats = ['All', ...new Set(indicators.map((i) => i.category))];
  const chips = cats
    .map((c) => `<button type="button" class="chip${c === state.category ? ' on' : ''}" data-category="${esc(c)}">${esc(c)}</button>`)
    .join('');
  return `
  <p class="crumb"><a href="#/">← Overview</a></p>
  <h1>Indicator index</h1>
  <p class="lede">Every headline figure on this site in one place. Type to search, tap a category to filter, or change the sort order — the table updates as you go.</p>
  <div class="controls">
    <label class="search"><span>Search indicators</span><input id="ind-search" type="search" placeholder="e.g. poverty, literacy, internet…" value="${esc(state.query)}" autocomplete="off"></label>
    <label class="sort"><span>Sort by</span><select id="ind-sort">
      <option value="name"${state.sort === 'name' ? ' selected' : ''}>Name (A–Z)</option>
      <option value="year-desc"${state.sort === 'year-desc' ? ' selected' : ''}>Newest year first</option>
      <option value="year-asc"${state.sort === 'year-asc' ? ' selected' : ''}>Oldest year first</option>
    </select></label>
  </div>
  <div class="chips" id="ind-cats">${chips}</div>
  <p class="count" id="ind-count"></p>
  <div class="table-wrap"><table class="data-table"><thead><tr><th>Indicator</th><th>Category</th><th>Value</th><th>Year</th><th>Source</th></tr></thead><tbody id="ind-body"></tbody></table></div>`;
}

export function indicatorRows(state) {
  const q = state.query.trim().toLowerCase();
  let rows = indicators.filter(
    (i) =>
      (state.category === 'All' || i.category === state.category) &&
      (!q || `${i.name} ${i.category} ${i.value} ${i.source}`.toLowerCase().includes(q)),
  );
  if (state.sort === 'year-desc') rows = [...rows].sort((a, b) => b.year - a.year || a.name.localeCompare(b.name));
  else if (state.sort === 'year-asc') rows = [...rows].sort((a, b) => a.year - b.year || a.name.localeCompare(b.name));
  else rows = [...rows].sort((a, b) => a.name.localeCompare(b.name));
  return rows;
}

export function indicatorTableBody(state) {
  const rows = indicatorRows(state);
  if (!rows.length) return `<tr><td colspan="5" class="empty">No indicators match. Try a different search or category.</td></tr>`;
  return rows
    .map((i) => `<tr><td>${esc(i.name)}</td><td>${esc(i.category)}</td><td class="num">${esc(i.value)}</td><td>${i.year}</td><td>${esc(i.source)}</td></tr>`)
    .join('');
}

export function provincesPage(state) {
  return `
  <p class="crumb"><a href="#/">← Overview</a></p>
  <h1>Provinces</h1>
  <p class="lede">Indonesia has 38 provinces. These are 16 of them — including every province with more than 3.5 million people — with 2024 population estimates (BPS) and land area. Search by province or capital, or sort the table.</p>
  <div class="controls">
    <label class="search"><span>Search provinces</span><input id="prov-search" type="search" placeholder="e.g. Java, Bandung, Bali…" value="${esc(state.query)}" autocomplete="off"></label>
    <label class="sort"><span>Sort by</span><select id="prov-sort">
      <option value="population"${state.sort === 'population' ? ' selected' : ''}>Population (largest first)</option>
      <option value="area"${state.sort === 'area' ? ' selected' : ''}>Land area (largest first)</option>
      <option value="name"${state.sort === 'name' ? ' selected' : ''}>Name (A–Z)</option>
    </select></label>
  </div>
  <p class="count" id="prov-count"></p>
  <div class="table-wrap"><table class="data-table"><thead><tr><th>Province</th><th>Capital</th><th>Population, 2024 (millions)</th><th>Land area (km²)</th><th>People per km²</th></tr></thead><tbody id="prov-body"></tbody></table></div>
  <p class="hint">Population: BPS 2024 estimates. Land area: BPS. People per km² is calculated from the two.</p>`;
}

export function provinceRows(state) {
  const q = state.query.trim().toLowerCase();
  let rows = provinces.filter((p) => !q || `${p.name} ${p.capital}`.toLowerCase().includes(q));
  if (state.sort === 'area') rows = [...rows].sort((a, b) => b.area - a.area);
  else if (state.sort === 'name') rows = [...rows].sort((a, b) => a.name.localeCompare(b.name));
  else rows = [...rows].sort((a, b) => b.population - a.population);
  return rows;
}

export function provinceTableBody(state) {
  const rows = provinceRows(state);
  if (!rows.length) return `<tr><td colspan="5" class="empty">No provinces match that search.</td></tr>`;
  return rows
    .map((p) => {
      const density = Math.round((p.population * 1e6) / p.area).toLocaleString('en-US');
      return `<tr><td>${esc(p.name)}</td><td>${esc(p.capital)}</td><td class="num">${p.population.toFixed(1)}</td><td class="num">${p.area.toLocaleString('en-US')}</td><td class="num">${density}</td></tr>`;
    })
    .join('');
}

export function aboutPage() {
  return `
  <p class="crumb"><a href="#/">← Overview</a></p>
  <h1>About the sources</h1>
  <p class="lede">Indonesia in Numbers is an original, offline summary of published national statistics. It does not collect data of its own: every figure is a published number, shown with the organisation that published it and the year it refers to.</p>
  <section class="card"><h2>Where the numbers come from</h2>
    <ul class="facts">
      <li><strong>BPS (Statistics Indonesia)</strong> — the national statistics office: GDP growth, inflation, poverty, unemployment, population estimates and literacy.</li>
      <li><strong>World Bank</strong> — the World Development Indicators database: population, GDP, life expectancy, mortality and emissions.</li>
      <li><strong>APJII</strong> — the Indonesian Internet Service Providers Association’s annual internet survey.</li>
      <li><strong>UNDP, FAO, ITU, UN Population Division</strong> — schooling, forests, mobile subscriptions and median age.</li>
      <li><strong>Indonesian ministries and agencies</strong> — Kemenkes (health), Kemendikbud (education), KLHK (environment), ESDM (energy), BPJS Kesehatan (health insurance), Bank Indonesia (e-commerce) and PVMBG (volcanoes).</li>
    </ul>
  </section>
  <section class="card"><h2>How to read this site</h2>
    <ul class="facts">
      <li>Each topic page opens with six headline figures, then charts of how key numbers have moved over time, then short facts worth knowing.</li>
      <li>The <a href="#/indicators">indicator index</a> lists every headline figure in one searchable table, so you can find a number without browsing each topic.</li>
      <li>Years differ by indicator because each source publishes on its own schedule; the year shown is always the year the figure describes.</li>
      <li>Figures marked “about” are rounded from the published value; chart points show the published series as recorded in the site’s data file.</li>
    </ul>
  </section>
  <section class="card"><h2>How the site is built</h2>
    <p>Plain static files — HTML, one stylesheet, and small JavaScript modules for data, charts, views and routing. Charts are hand-drawn SVG generated in the browser from the data file. Nothing is loaded from the network, so the site works offline on a desktop or a phone.</p>
  </section>`;
}

export function missing() {
  return `<h1>Not found</h1><p>There is no page at this address. <a href="#/">Go to the overview</a>.</p>`;
}
