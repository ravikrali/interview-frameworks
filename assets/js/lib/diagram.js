/* SVG framework diagram renderer.
   Every type draws labels only. Detail text renders as an HTML legend beneath,
   which keeps the graphic clean and the words selectable. */

const NAVY = ['#12294a', '#1b3a63', '#24497a', '#2d5891', '#36679f', '#4176b4', '#4b83c2'];
const ACCENT = '#d62606';
const W = 1000;

/* Label sizes in viewBox units. The canvas renders around 660px wide on a
   desktop layout, so divide by roughly 1.5 for the size that reaches the eye.
   Shape dimensions below are sized to hold two wrapped lines at these values. */
const FS = {
  flowWide: 23,   // four or fewer steps in a row
  flowTight: 21,  // five or more steps in a row
  flowNum: 14,
  layer: 28,
  layerNum: 18,
  quadrant: 28,
  axis: 18,
  radial: 22,
  radialHub: 20,
  pyramid: 24,
  pillar: 25,
  pillarNum: 21,
  base: 19
};

function esc(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

/* Greedy wrap using an average glyph width estimate. */
function wrap(text, maxWidth, fontSize) {
  const perChar = fontSize * 0.56;
  const max = Math.max(4, Math.floor(maxWidth / perChar));
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const next = line ? line + ' ' + w : w;
    if (next.length > max && line) {
      lines.push(line);
      line = w;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function textBlock(lines, x, y, fontSize, fill, anchor = 'middle', weight = 600) {
  const lh = fontSize * 1.25;
  const start = y - ((lines.length - 1) * lh) / 2;
  const spans = lines
    .map((l, i) => `<tspan x="${x}" y="${(start + i * lh).toFixed(1)}">${esc(l)}</tspan>`)
    .join('');
  return `<text text-anchor="${anchor}" font-size="${fontSize}" font-weight="${weight}" fill="${fill}">${spans}</text>`;
}

function shell(height, body, title) {
  return `<svg class="fw-svg" viewBox="0 0 ${W} ${height}" role="img" aria-label="${esc(title)}" preserveAspectRatio="xMidYMid meet">
    <defs>
      <filter id="fwShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#0b1f3a" flood-opacity="0.14"/>
      </filter>
    </defs>${body}</svg>`;
}

function grp(i, inner) {
  return `<g class="fw-node" style="--i:${i}">${inner}</g>`;
}

/* ---------- flow: chevron track, wraps to a second row when needed ---------- */
function flow(nodes, title) {
  const perRow = nodes.length <= 4 ? nodes.length : Math.ceil(nodes.length / 2);
  const rows = [];
  for (let i = 0; i < nodes.length; i += perRow) rows.push(nodes.slice(i, i + perRow));

  const gap = 12;
  const rowH = 126;
  const rowGap = 36;
  const notch = 22;
  const height = rows.length * rowH + (rows.length - 1) * rowGap + 24;
  let body = '';
  let idx = 0;

  rows.forEach((row, r) => {
    const segW = (W - gap * (row.length - 1)) / row.length;
    const y = 12 + r * (rowH + rowGap);
    row.forEach((n, c) => {
      const x = c * (segW + gap);
      const first = idx === 0;
      const last = idx === nodes.length - 1;
      const fill = NAVY[Math.min(idx, NAVY.length - 1)];
      const lIn = first ? 0 : notch;
      const rOut = last ? 0 : notch;
      const d = [
        `M ${x} ${y}`,
        `L ${x + segW - rOut} ${y}`,
        rOut ? `L ${x + segW} ${y + rowH / 2}` : '',
        `L ${x + segW - rOut} ${y + rowH}`,
        `L ${x} ${y + rowH}`,
        lIn ? `L ${x + lIn} ${y + rowH / 2}` : '',
        'Z'
      ].filter(Boolean).join(' ');

      const cx = x + segW / 2 + (lIn ? notch / 2 : 0) - (rOut ? notch / 4 : 0);
      const fs = row.length > 4 ? FS.flowTight : FS.flowWide;
      const lines = wrap(n.label, segW - notch * 2 - 18, fs);
      const numX = (x + (lIn ? notch + 18 : 18)).toFixed(1);
      body += grp(idx, `
        <path d="${d}" fill="${fill}" filter="url(#fwShadow)"/>
        <circle cx="${numX}" cy="${y + 20}" r="12" fill="${ACCENT}"/>
        <text x="${numX}" y="${y + 24.5}" text-anchor="middle" font-size="${FS.flowNum}" font-weight="700" fill="#fff">${idx + 1}</text>
        ${textBlock(lines, cx, y + rowH / 2 + 12, fs, '#ffffff')}`);
      idx++;
    });

    if (r < rows.length - 1) {
      const my = y + rowH + rowGap / 2;
      body += `<path d="M ${W - 40} ${y + rowH + 6} L ${W - 40} ${my} L 40 ${my} L 40 ${y + rowH + rowGap - 4}"
        fill="none" stroke="${ACCENT}" stroke-width="2" stroke-dasharray="5 5" opacity="0.65"/>
        <path d="M 34 ${y + rowH + rowGap - 10} L 40 ${y + rowH + rowGap - 2} L 46 ${y + rowH + rowGap - 10} Z" fill="${ACCENT}"/>`;
    }
  });

  return shell(height, body, title);
}

/* ---------- layers: stacked bands ---------- */
function layers(nodes, title) {
  const h = 92;
  const gap = 10;
  const height = nodes.length * (h + gap) + 10;
  let body = '';
  nodes.forEach((n, i) => {
    const y = 5 + i * (h + gap);
    const fill = NAVY[Math.min(i, NAVY.length - 1)];
    body += grp(i, `
      <rect x="0" y="${y}" width="${W}" height="${h}" rx="10" fill="${fill}" filter="url(#fwShadow)"/>
      <rect x="0" y="${y}" width="7" height="${h}" rx="3" fill="${ACCENT}"/>
      <rect x="${W - 80}" y="${y + (h - 40) / 2}" width="40" height="40" rx="9" fill="#ffffff" opacity="0.14"/>
      <text x="${W - 60}" y="${y + h / 2 + 6}" text-anchor="middle" font-size="${FS.layerNum}" font-weight="700" fill="#ffffff" opacity="0.85">${i + 1}</text>
      ${textBlock(wrap(n.label, W - 210, FS.layer), 34, y + h / 2 + 8, FS.layer, '#ffffff', 'start')}`);
  });
  return shell(height, body, title);
}

/* ---------- quadrant: 2x2 with axis labels ---------- */
function quadrant(nodes, axes, title) {
  const pad = { l: 104, t: 36, r: 20, b: 80 };
  const boxW = (W - pad.l - pad.r) / 2;
  const boxH = 184;
  const height = pad.t + boxH * 2 + pad.b;
  const order = { tl: [0, 0], tr: [1, 0], bl: [0, 1], br: [1, 1] };
  const fills = { tl: NAVY[3], tr: NAVY[0], bl: NAVY[5], br: NAVY[1] };
  let body = '';

  nodes.forEach((n, i) => {
    const pos = n.pos || ['tl', 'tr', 'bl', 'br'][i];
    const [cx, cy] = order[pos];
    const x = pad.l + cx * boxW;
    const y = pad.t + cy * boxH;
    body += grp(i, `
      <rect x="${x + 5}" y="${y + 5}" width="${boxW - 10}" height="${boxH - 10}" rx="12" fill="${fills[pos]}" filter="url(#fwShadow)"/>
      ${textBlock(wrap(n.label, boxW - 56, FS.quadrant), x + boxW / 2, y + boxH / 2 + 8, FS.quadrant, '#ffffff')}`);
  });

  // axes
  const x0 = pad.l, x1 = W - pad.r, y0 = pad.t, y1 = pad.t + boxH * 2;
  body += `<line x1="${x0}" y1="${y1 + 16}" x2="${x1}" y2="${y1 + 16}" stroke="#8fa3bd" stroke-width="2"/>
    <path d="M ${x1} ${y1 + 16} l -10 -5 v 10 Z" fill="#8fa3bd"/>
    <line x1="${x0 - 16}" y1="${y1}" x2="${x0 - 16}" y2="${y0}" stroke="#8fa3bd" stroke-width="2"/>
    <path d="M ${x0 - 16} ${y0} l -5 10 h 10 Z" fill="#8fa3bd"/>
    <text x="${x0 + 4}" y="${y1 + 46}" font-size="${FS.axis}" font-weight="600" fill="#4a5f7d">${esc(axes.x[0])}</text>
    <text x="${x1}" y="${y1 + 46}" text-anchor="end" font-size="${FS.axis}" font-weight="600" fill="#4a5f7d">${esc(axes.x[1])}</text>
    <text transform="translate(${x0 - 32} ${y1}) rotate(-90)" font-size="${FS.axis}" font-weight="600" fill="#4a5f7d">${esc(axes.y[0])}</text>
    <text transform="translate(${x0 - 32} ${y0}) rotate(-90)" text-anchor="end" font-size="${FS.axis}" font-weight="600" fill="#4a5f7d">${esc(axes.y[1])}</text>`;

  return shell(height, body, title);
}

/* ---------- radial: hub with spokes ---------- */
function radial(nodes, hub, title) {
  const height = 520;
  const cx = W / 2, cy = height / 2;
  const rx = 352, ry = 186;
  const hubRx = 168, hubRy = 80;
  const bw = 268, bh = 88;
  let spokes = '';
  let cards = '';

  nodes.forEach((n, i) => {
    const a = (-Math.PI / 2) + (i * 2 * Math.PI) / nodes.length;
    const px = cx + rx * Math.cos(a);
    const py = cy + ry * Math.sin(a);
    spokes += `<line x1="${cx}" y1="${cy}" x2="${px.toFixed(1)}" y2="${py.toFixed(1)}" stroke="${ACCENT}" stroke-width="1.5" opacity="0.4"/>`;
    cards += grp(i + 1, `
      <rect x="${(px - bw / 2).toFixed(1)}" y="${(py - bh / 2).toFixed(1)}" width="${bw}" height="${bh}" rx="11"
        fill="${NAVY[Math.min(i, NAVY.length - 1)]}" filter="url(#fwShadow)"/>
      ${textBlock(wrap(n.label, bw - 24, FS.radial), px, py + 6, FS.radial, '#ffffff')}`);
  });

  const hubBody = grp(0, `
    <ellipse cx="${cx}" cy="${cy}" rx="${hubRx + 11}" ry="${hubRy + 11}" fill="${ACCENT}" opacity="0.1"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${hubRx}" ry="${hubRy}" fill="#0b1f3a" stroke="${ACCENT}" stroke-width="2.5" filter="url(#fwShadow)"/>
    ${textBlock(wrap(hub || title, hubRx * 1.62, FS.radialHub), cx, cy + 5, FS.radialHub, '#ffffff')}`);

  return shell(height, spokes + cards + hubBody, title);
}

/* ---------- pyramid: stacked tiers, widest at the bottom ---------- */
function pyramid(nodes, title) {
  const n = nodes.length;
  const tierH = 86;
  const gap = 8;
  const height = n * (tierH + gap) + 12;
  const maxW = W - 40;
  const minW = 360;
  let body = '';
  nodes.forEach((node, i) => {
    const wTop = minW + ((maxW - minW) * i) / n;
    const wBot = minW + ((maxW - minW) * (i + 1)) / n;
    const y = 6 + i * (tierH + gap);
    const cx = W / 2;
    const d = `M ${cx - wTop / 2} ${y} L ${cx + wTop / 2} ${y} L ${cx + wBot / 2} ${y + tierH} L ${cx - wBot / 2} ${y + tierH} Z`;
    body += grp(i, `
      <path d="${d}" fill="${NAVY[Math.min(i, NAVY.length - 1)]}" filter="url(#fwShadow)"/>
      ${textBlock(wrap(node.label, wTop - 36, FS.pyramid), cx, y + tierH / 2 + 7, FS.pyramid, '#ffffff')}`);
  });
  return shell(height, body, title);
}

/* ---------- pillars: columns on a base ---------- */
function pillars(nodes, base, title) {
  const gap = 14;
  const colH = 236;
  const baseH = 62;
  const height = colH + baseH + 26;
  const colW = (W - gap * (nodes.length - 1)) / nodes.length;
  let body = '';
  nodes.forEach((n, i) => {
    const x = i * (colW + gap);
    body += grp(i, `
      <rect x="${x}" y="6" width="${colW}" height="${colH}" rx="12" fill="${NAVY[Math.min(i, NAVY.length - 1)]}" filter="url(#fwShadow)"/>
      <rect x="${x}" y="6" width="${colW}" height="6" rx="3" fill="${ACCENT}"/>
      <circle cx="${x + colW / 2}" cy="64" r="21" fill="#ffffff" opacity="0.13"/>
      <text x="${x + colW / 2}" y="71.5" text-anchor="middle" font-size="${FS.pillarNum}" font-weight="700" fill="#ffffff" opacity="0.9">${i + 1}</text>
      ${textBlock(wrap(n.label, colW - 20, FS.pillar), x + colW / 2, 156, FS.pillar, '#ffffff')}`);
  });
  body += `<rect x="0" y="${colH + 16}" width="${W}" height="${baseH}" rx="10" fill="#0b1f3a"/>
    ${textBlock(wrap(base || 'Shared foundation', W - 56, FS.base), W / 2, colH + 16 + baseH / 2 + 6, FS.base, '#c8d6e8')}`;
  return shell(height, body, title);
}

export function renderDiagram(fw) {
  switch (fw.type) {
    case 'layers': return layers(fw.nodes, fw.name);
    case 'quadrant': return quadrant(fw.nodes, fw.axes, fw.name);
    case 'radial': return radial(fw.nodes, fw.hub, fw.name);
    case 'pyramid': return pyramid(fw.nodes, fw.name);
    case 'pillars': return pillars(fw.nodes, fw.base, fw.name);
    default: return flow(fw.nodes, fw.name);
  }
}

export function renderLegend(fw) {
  const items = fw.nodes.map((n, i) => `
    <li class="fw-legend-item" style="--i:${i}">
      <span class="fw-legend-num">${i + 1}</span>
      <div>
        <strong>${esc(n.label)}</strong>
        <p>${esc(n.detail)}</p>
      </div>
    </li>`).join('');
  return `<ul class="fw-legend">${items}</ul>`;
}

export function renderKeywordMap(keywords) {
  const sorted = [...keywords].sort((a, b) => b.w - a.w);
  const items = sorted.map((k, i) => {
    const size = [0, 0.82, 0.95, 1.12, 1.42, 1.78][k.w] || 1;
    return `<span class="kw kw-w${k.w}" style="font-size:${size}rem;--i:${i}">${esc(k.t)}</span>`;
  }).join('');
  return `<div class="kw-map">${items}</div>`;
}
