import { roles, roleById } from './roles.js';
import ea from './q-enterprise-architect.js';
import dea from './q-director-ea.js';
import ddm from './q-director-data-management.js';
import eda from './q-enterprise-data-architect.js';
import mdm from './q-mdm-architect.js';

export const questions = [...ea, ...dea, ...ddm, ...eda, ...mdm];
export const questionById = Object.fromEntries(questions.map(q => [q.id, q]));
export { roles, roleById };

export function byRole(roleId) {
  return questions.filter(q => q.role === roleId);
}

export function themesFor(roleId) {
  const list = byRole(roleId);
  const map = new Map();
  list.forEach(q => {
    if (!map.has(q.theme)) map.set(q.theme, []);
    map.get(q.theme).push(q);
  });
  return [...map.entries()].map(([theme, items]) => ({ theme, items }));
}

export function allThemes() {
  const map = new Map();
  questions.forEach(q => map.set(q.theme, (map.get(q.theme) || 0) + 1));
  return [...map.entries()].sort((a, b) => b[1] - a[1]);
}

export function related(q, limit = 4) {
  const tags = new Set(q.tags);
  return questions
    .filter(o => o.id !== q.id)
    .map(o => {
      let score = o.tags.filter(t => tags.has(t)).length * 2;
      if (o.theme === q.theme) score += 2;
      if (o.role === q.role) score += 1;
      return { o, score };
    })
    .filter(x => x.score > 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(x => x.o);
}

export const stats = {
  roles: roles.length,
  questions: questions.length,
  variants: questions.reduce((n, q) => n + q.variants.length, 0),
  frameworks: new Set(questions.map(q => q.framework.name)).size
};
