const API_BASE = '/fc/api';

async function fetchJSON(url: string, options?: RequestInit) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getFilms() {
  const data = await fetchJSON(`${API_BASE}/films`);
  return data.films || [];
}

export async function getFilm(id: string | number) {
  const data = await fetchJSON(`${API_BASE}/films/${id}`);
  return data.film;
}

export async function getMembers(params?: { search?: string; category?: string; city?: string; page?: number }) {
  const qs = new URLSearchParams();
  if (params?.search) qs.set('search', params.search);
  if (params?.category) qs.set('category', params.category);
  if (params?.city) qs.set('city', params.city);
  if (params?.page) qs.set('page', String(params.page));
  qs.set('limit', '20');
  const data = await fetchJSON(`${API_BASE}/members/directory?${qs}`);
  return data;
}

export async function getMemberProfile(id: number) {
  const data = await fetchJSON(`${API_BASE}/members/${id}/profile`);
  return data.member;
}

export async function getMemberStats() {
  const data = await fetchJSON(`${API_BASE}/members/stats`);
  return data;
}

export async function getMemberCategories() {
  const data = await fetchJSON(`${API_BASE}/members/categories`);
  return data.categories || [];
}

export async function subscribeNewsletter(email: string, name?: string) {
  const data = await fetchJSON(`${API_BASE}/newsletter/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, name }),
  });
  return data;
}

export async function getSettings() {
  const data = await fetchJSON(`${API_BASE}/settings`);
  return data.settings || {};
}

export async function getNews() {
  try {
    const data = await fetchJSON(`${API_BASE}/films?limit=6&sort=newest`);
    return data.films || [];
  } catch {
    return [];
  }
}
