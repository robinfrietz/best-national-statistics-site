// Hand-drawn SVG charts: a line chart, a bar chart, and a donut. No library, no network — each function
// returns an SVG string built from the numbers in data.js. Charts scale to their container width via viewBox.

const W = 640;
const H = 260;
const PAD = { top: 18, right: 16, bottom: 34, left: 52 };
const COLORS = ['#c8102e', '#0b6e4f', '#1d4e89', '#e07a2f', '#6b4fa1', '#8a8f98'];

function esc(s) {
  return String(s).replace(/[&<>"]/g, (c) => `&#${c.charCodeAt(0)};`);
}

function fmt(v) {
  return Number.isInteger(v) ? String(v) : String(Math.round(v * 100) / 100);
}

function scales(points) {
  const xs = points.map((p) => p[0]);
  const ys = points.map((p) => p[1]);
  const x0 = Math.min(...xs);
  const x1 = Math.max(...xs);
  let y0 = Math.min(...ys);
  let y1 = Math.max(...ys);
  if (y0 > 0) y0 = Math.min(0, y0 - (y1 - y0) * 0.15);
  if (y1 < 0) y1 = 0;
  const span = y1 - y0 || 1;
  y1 += span * 0.08;
  const px = (x) => PAD.left + ((x - x0) / (x1 - x0 || 1)) * (W - PAD.left - PAD.right);
  const py = (y) => H - PAD.bottom - ((y - y0) / (y1 - y0 || 1)) * (H - PAD.top - PAD.bottom);
  return { px, py, y0, y1 };
}

function frame(s, points, unit) {
  const ticks = 4;
  let grid = '';
  for (let i = 0; i <= ticks; i++) {
    const y = s.y0 + ((s.y1 - s.y0) * i) / ticks;
    const yy = s.py(y);
    grid += `<line x1="${PAD.left}" y1="${yy}" x2="${W - PAD.right}" y2="${yy}" class="grid"/>`;
    grid += `<text x="${PAD.left - 8}" y="${yy + 4}" text-anchor="end" class="tick">${fmt(Math.round(y * 10) / 10)}</text>`;
  }
  const zeroY = s.py(0);
  const zero = s.y0 < 0 && s.y1 > 0 ? `<line x1="${PAD.left}" y1="${zeroY}" x2="${W - PAD.right}" y2="${zeroY}" class="zero"/>` : '';
  const first = points[0][0];
  const mid = points[Math.floor(points.length / 2)][0];
  const last = points[points.length - 1][0];
  const labels =
    `<text x="${s.px(first)}" y="${H - 10}" text-anchor="middle" class="tick">${first}</text>` +
    `<text x="${s.px(mid)}" y="${H - 10}" text-anchor="middle" class="tick">${mid}</text>` +
    `<text x="${s.px(last)}" y="${H - 10}" text-anchor="middle" class="tick">${last}</text>` +
    `<text x="${PAD.left}" y="${PAD.top - 4}" text-anchor="start" class="unit">${esc(unit)}</text>`;
  return grid + zero + labels;
}

export function lineChart(points, unit) {
  const s = scales(points);
  const line = points.map((p) => `${s.px(p[0])},${s.py(p[1])}`).join(' ');
  const dots = points
    .map((p) => `<circle cx="${s.px(p[0])}" cy="${s.py(p[1])}" r="3.2" class="dot"><title>${p[0]}: ${fmt(p[1])} ${esc(unit)}</title></circle>`)
    .join('');
  const last = points[points.length - 1];
  const label = `<text x="${s.px(last[0]) - 6}" y="${s.py(last[1]) - 10}" text-anchor="end" class="last">${fmt(last[1])}</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" class="chart">${frame(s, points, unit)}<polyline points="${line}" class="line"/>${dots}${label}</svg>`;
}

export function barChart(points, unit) {
  const s = scales(points);
  const step = (W - PAD.left - PAD.right) / points.length;
  const bw = Math.max(10, step * 0.62);
  const zeroY = s.py(0);
  const bars = points
    .map((p) => {
      const x = s.px(p[0]) - bw / 2;
      const y = s.py(p[1]);
      const top = Math.min(y, zeroY);
      const height = Math.max(2, Math.abs(zeroY - y));
      const cls = p[1] < 0 ? 'bar neg' : 'bar';
      return `<rect x="${x}" y="${top}" width="${bw}" height="${height}" rx="2" class="${cls}"><title>${p[0]}: ${fmt(p[1])} ${esc(unit)}</title></rect>`;
    })
    .join('');
  const last = points[points.length - 1];
  const label = `<text x="${s.px(last[0])}" y="${Math.min(s.py(last[1]), zeroY) - 8}" text-anchor="middle" class="last">${fmt(last[1])}</text>`;
  return `<svg viewBox="0 0 ${W} ${H}" role="img" class="chart">${frame(s, points, unit)}${bars}${label}</svg>`;
}

export function donut(slices) {
  const total = slices.reduce((a, s) => a + s[1], 0);
  const cx = 130;
  const cy = 130;
  const r = 104;
  const inner = 58;
  let angle = -Math.PI / 2;
  let paths = '';
  slices.forEach((s, i) => {
    const frac = s[1] / total;
    const a1 = angle;
    const a2 = angle + frac * Math.PI * 2;
    angle = a2;
    const large = frac > 0.5 ? 1 : 0;
    const p = (a, rad) => `${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`;
    paths += `<path d="M ${p(a1, r)} A ${r} ${r} 0 ${large} 1 ${p(a2, r)} L ${p(a2, inner)} A ${inner} ${inner} 0 ${large} 0 ${p(a1, inner)} Z" fill="${COLORS[i % COLORS.length]}"><title>${esc(s[0])}: ${fmt(s[1])}%</title></path>`;
  });
  const legend = slices
    .map((s, i) => `<li><span class="swatch" style="background:${COLORS[i % COLORS.length]}"></span>${esc(s[0])} <strong>${fmt(s[1])}%</strong></li>`)
    .join('');
  return `<div class="donut-wrap"><svg viewBox="0 0 260 260" role="img" class="donut">${paths}<text x="${cx}" y="${cy - 4}" text-anchor="middle" class="donut-mid">GDP</text><text x="${cx}" y="${cy + 16}" text-anchor="middle" class="donut-sub">2024</text></svg><ul class="legend">${legend}</ul></div>`;
}

export function chartFor(seriesDef) {
  return seriesDef.kind === 'bar' ? barChart(seriesDef.points, seriesDef.unit) : lineChart(seriesDef.points, seriesDef.unit);
}
