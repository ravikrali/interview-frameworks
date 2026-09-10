/* SVG framework diagram renderer.
   Every type draws labels only. Detail text renders as an HTML legend beneath,
   which keeps the graphic clean and the words selectable. */

const NAVY = ['#12294a', '#1b3a63', '#24497a', '#2d5891', '#36679f', '#4176b4', '#4b83c2'];
const ACCENT = '#d62606';
const W = 1000;

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
  const rowH = 108;
  const rowGap = 34;
  const notch = 20;
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
      const fs = row.length > 4 ? 15 : 17;
      const lines = wrap(n.label, segW - notch * 2 - 22, fs);
      body += grp(idx, `
        <path d="${d}" fill="${fill}" filter="url(#fwShadow)"/>
        <circle cx="${(x + (lIn ? notch + 16 : 16)).toFixed(1)}" cy="${y + 17}" r="10" fill="${ACCENT}"/>
        <text x="${(x + (lIn ? notch + 16 : 16)).toFixed(1)}" y="${y + 21}" text-anchor="middle" font-size="11" font-weight="700" fill="#fff">${idx + 1}</text>
        ${textBlock(lines, cx, y + rowH / 2 + 10, fs, '#ffffff')}`);
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
  const h = 74;
  const gap = 10;
  const height = nodes.length * (h + gap) + 10;
  let body = '';
  nodes.forEach((n, i) => {
    const y = 5 + i * (h + gap);
    const fill = NAVY[Math.min(i, NAVY.length - 1)];
    body += grp(i, `
      <rect x="0" y="${y}" width="${W}" height="${h}" rx="10" fill="${fill}" filter="url(#fwShadow)"/>
      <rect x="0" y="${y}" width="7" height="${h}" rx="3" fill="${ACCENT}"/>
      <rect x="${W - 74}" y="${y + 20}" width="34" height="34" rx="8" fill="#ffffff" opacity="0.14"/>
      <text x="${W - 57}" y="${y + 43}" text-anchor="middle" font-size="15" font-weight="700" fill="#ffffff" opacity="0.85">${i + 1}</text>
      ${textBlock(wrap(n.label, W - 200, 20), 34, y + h / 2 + 7, 20, '#ffffff', 'start')}`);
  });
  return shell(height, body, title);
}

/* ---------- quadrant: 2x2 with axis labels ---------- */
function quadrant(nodes, axes, title) {
  const pad = { l: 96, t: 34, r: 20, b: 74 };
  const boxW = (W - pad.l - pad.r) / 2;
  const boxH = 172;
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
      ${textBlock(wrap(n.label, boxW - 60, 21), x + boxW / 2, y + boxH / 2 + 7, 21, '#ffffff')}`);
  });

  // axes
  const x0 = pad.l, x1 = W - pad.r, y0 = pad.t, y1 = pad.t + boxH * 2;
  body += `<line x1="${x0}" y1="${y1 + 16}" x2="${x1}" y2="${y1 + 16}" stroke="#8fa3bd" stroke-width="2"/>
    <path d="M ${x1} ${y1 + 16} l -10 -5 v 10 Z" fill="#8fa3bd"/>
    <line x1="${x0 - 16}" y1="${y1}" x2="${x0 - 16}" y2="${y0}" stroke="#8fa3bd" stroke-width="2"/>
    <path d="M ${x0 - 16} ${y0} l -5 10 h 10 Z" fill="#8fa3bd"/>
    <text x="${x0 + 4}" y="${y1 + 42}" font-size="14" font-weight="600" fill="#4a5f7d">${esc(axes.x[0])}</text>
    <text x="${x1}" y="${y1 + 42}" text-anchor="end" font-size="14" font-weight="600" fill="#4a5f7d">${esc(axes.x[1])}</text>
    <text transform="translate(${x0 - 30} ${y1}) rotate(-90)" font-size="14" font-weight="600" fill="#4a5f7d">${esc(axes.y[0])}</text>
    <text transform="translate(${x0 - 30} ${y0}) rotate(-90)" text-anchor="end" font-size="14" font-weight="600" fill="#4a5f7d">${esc(axes.y[1])}</text>`;

  return shell(height, body, title);
}

/* ---------- radial: hub with spokes ---------- */
function radial(nodes, hub, title) {
  const height = 470;
  const cx = W / 2, cy = height / 2;
  const rx = 340, ry = 168;
  const hubRx = 158, hubRy = 66;
  let spokes = '';
  let cards = '';

  nodes.forEach((n, i) => {
    const a = (-Math.PI / 2) + (i * 2 * Math.PI) / nodes.length;
    const px = cx + rx * Math.cos(a);
    const py = cy + ry * Math.sin(a);
    const bw = 216, bh = 66;
    spokes += `<line x1="${cx}" y1="${cy}" x2="${px.toFixed(1)}" y2="${py.toFixed(1)}" stroke="${ACCENT}" stroke-width="1.5" opacity="0.4"/>`;
    cards += grp(i + 1, `
      <rect x="${(px - bw / 2).toFixed(1)}" y="${(py - bh / 2).toFixed(1)}" width="${bw}" height="${bh}" rx="10"
        fill="${NAVY[Math.min(i, NAVY.length - 1)]}" filter="url(#fwShadow)"/>
      ${textBlock(wrap(n.label, bw - 26, 16), px, py + 5, 16, '#ffffff')}`);
  });

  const hubBody = grp(0, `
    <ellipse cx="${cx}" cy="${cy}" rx="${hubRx + 10}" ry="${hubRy + 10}" fill="${ACCENT}" opacity="0.1"/>
    <ellipse cx="${cx}" cy="${cy}" rx="${hubRx}" ry="${hubRy}" fill="#0b1f3a" stroke="${ACCENT}" stroke-width="2.5" filter="url(#fwShadow)"/>
    ${textBlock(wrap(hub || title, hubRx * 1.7, 15), cx, cy + 4, 15, '#ffffff')}`);

  return shell(height, spokes + cards + hubBody, title);
}

/* ---------- pyramid: stacked tiers, widest at the bottom ---------- */
function pyramid(nodes, title) {
  const n = nodes.length;
  const tierH = 76;
  const gap = 8;
  const height = n * (tierH + gap) + 12;
  const maxW = W - 40;
  const minW = 300;
  let body = '';
  nodes.forEach((node, i) => {
    const wTop = minW + ((maxW - minW) * i) / n;
    const wBot = minW + ((maxW - minW) * (i + 1)) / n;
    const y = 6 + i * (tierH + gap);
    const cx = W / 2;
    const d = `M ${cx - wTop / 2} ${y} L ${cx + wTop / 2} ${y} L ${cx + wBot / 2} ${y + tierH} L ${cx - wBot / 2} ${y + tierH} Z`;
    body += grp(i, `
      <path d="${d}" fill="${NAVY[Math.min(i, NAVY.length - 1)]}" filter="url(#fwShadow)"/>
      ${textBlock(wrap(node.label, wTop - 40, 17), cx, y + tierH / 2 + 6, 17, '#ffffff')}`);
  });
  return shell(height, body, title);
}

/* ---------- pillars: columns on a base ---------- */
function pillars(nodes, base, title) {
  const gap = 16;
  const colH = 210;
  const baseH = 54;
  const height = colH + baseH + 24;
  const colW = (W - gap * (nodes.length - 1)) / nodes.length;
  let body = '';
  nodes.forEach((n, i) => {
    const x = i * (colW + gap);
    body += grp(i, `
      <rect x="${x}" y="6" width="${colW}" height="${colH}" rx="12" fill="${NAVY[Math.min(i, NAVY.length - 1)]}" filter="url(#fwShadow)"/>
      <rect x="${x}" y="6" width="${colW}" height="6" rx="3" fill="${ACCENT}"/>
      <circle cx="${x + colW / 2}" cy="60" r="19" fill="#ffffff" opacity="0.13"/>
      <text x="${x + colW / 2}" y="67" text-anchor="middle" font-size="18" font-weight="700" fill="#ffffff" opacity="0.9">${i + 1}</text>
      ${textBlock(wrap(n.label, colW - 28, 19), x + colW / 2, 138, 19, '#ffffff')}`);
  });
  body += `<rect x="0" y="${colH + 16}" width="${W}" height="${baseH}" rx="10" fill="#0b1f3a"/>
    ${textBlock(wrap(base || 'Shared foundation', W - 60, 15), W / 2, colH + 16 + baseH / 2 + 5, 15, '#c8d6e8')}`;
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
