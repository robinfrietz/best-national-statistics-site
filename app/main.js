// Indonesia in Numbers — routing and controls. Pages live on hash routes so the whole site is one static
// folder that works offline:
//
//   #/                  overview with headline figures and a switchable trend chart
//   #/<topic>           one statistics topic (population, economy, health, education, environment, technology)
//   #/indicators        searchable, filterable index of every headline figure
//   #/provinces         searchable, sortable province table
//   #/about             sources and how the site is built
//
// window.__shotReady is false while a page renders and true once it is on screen, so a screenshot script
// knows when to capture.

import { sections } from './data.js';
import {
  home,
  sectionPage,
  indicatorsPage,
  indicatorTableBody,
  indicatorRows,
  provincesPage,
  provinceTableBody,
  provinceRows,
  aboutPage,
  missing,
} from './views.js';
import { series } from './data.js';
import { chartFor } from './charts.js';

const app = document.getElementById('app');
const nav = document.getElementById('nav');

const state = {
  chart: 'population',
  ind: { query: '', category: 'All', sort: 'name' },
  prov: { query: '', sort: 'population' },
};

function markNav(route) {
  for (const a of nav.querySelectorAll('a')) {
    a.classList.toggle('on', a.dataset.route === route);
  }
}

function wireHome() {
  for (const btn of app.querySelectorAll('[data-chart]')) {
    btn.addEventListener('click', () => {
      state.chart = btn.dataset.chart;
      for (const b of app.querySelectorAll('[data-chart]')) b.classList.toggle('on', b === btn);
      const def = series[state.chart];
      document.getElementById('trend-chart').innerHTML =
        `<figure class="card chart-card"><figcaption><h3>${def.title}</h3><span class="source">Source: ${def.source}</span></figcaption>${chartFor(def)}</figure>`;
    });
  }
}

function wireIndicators() {
  const body = document.getElementById('ind-body');
  const count = document.getElementById('ind-count');
  const search = document.getElementById('ind-search');
  const sort = document.getElementById('ind-sort');
  const update = () => {
    body.innerHTML = indicatorTableBody(state.ind);
    const n = indicatorRows(state.ind).length;
    count.textContent = `Showing ${n} indicator${n === 1 ? '' : 's'}.`;
  };
  search.addEventListener('input', () => {
    state.ind.query = search.value;
    update();
  });
  sort.addEventListener('change', () => {
    state.ind.sort = sort.value;
    update();
  });
  for (const btn of app.querySelectorAll('[data-category]')) {
    btn.addEventListener('click', () => {
      state.ind.category = btn.dataset.category;
      for (const b of app.querySelectorAll('[data-category]')) b.classList.toggle('on', b === btn);
      update();
    });
  }
  update();
}

function wireProvinces() {
  const body = document.getElementById('prov-body');
  const count = document.getElementById('prov-count');
  const search = document.getElementById('prov-search');
  const sort = document.getElementById('prov-sort');
  const update = () => {
    body.innerHTML = provinceTableBody(state.prov);
    const n = provinceRows(state.prov).length;
    count.textContent = `Showing ${n} of 16 provinces listed (of 38 nationwide).`;
  };
  search.addEventListener('input', () => {
    state.prov.query = search.value;
    update();
  });
  sort.addEventListener('change', () => {
    state.prov.sort = sort.value;
    update();
  });
  update();
}

function render() {
  window.__shotReady = false;
  const route = location.hash.replace(/^#\/?/, '').split(/[/?]/)[0] || '';
  const section = sections.find((s) => s.slug === route);
  if (route === '') {
    document.title = 'Indonesia in Numbers — National Statistics Explorer';
    app.innerHTML = home(state.chart);
    wireHome();
  } else if (section) {
    document.title = `${section.name} | Indonesia in Numbers`;
    app.innerHTML = sectionPage(section);
  } else if (route === 'indicators') {
    document.title = 'Indicator index | Indonesia in Numbers';
    app.innerHTML = indicatorsPage(state.ind);
    wireIndicators();
  } else if (route === 'provinces') {
    document.title = 'Provinces | Indonesia in Numbers';
    app.innerHTML = provincesPage(state.prov);
    wireProvinces();
  } else if (route === 'about') {
    document.title = 'About the sources | Indonesia in Numbers';
    app.innerHTML = aboutPage();
  } else {
    document.title = 'Not found | Indonesia in Numbers';
    app.innerHTML = missing();
  }
  markNav(route);
  window.scrollTo(0, 0);
  window.__shotReady = true;
}

window.addEventListener('hashchange', render);
render();
