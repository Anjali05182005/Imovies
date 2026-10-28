// // Set MOCK = false when you want to use the real backend
// export const MOCK = false;
// const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// async function real(path, method = 'GET', body) {
//   const token = localStorage.getItem('token');
//   const res = await fetch(API + path, {
//     method,
//     headers: { 'Content-Type': 'application/json', ...(token && { Authorization: 'Bearer ' + token }) },
//     body: body && JSON.stringify(body),
//   });
//   const data = await res.json();
//   if (!res.ok) throw new Error(data.error || 'Something went wrong');
//   return data;
// }

// // ---------- sample data for UI-only mode ----------
// const movies = [
//   { _id: 'm1', title: 'Space Odyssey', genre: 'Sci-Fi', rating: 8.4, duration: 130, description: 'A crew travels beyond the solar system and finds something waiting.' },
//   { _id: 'm2', title: 'Laugh Riot', genre: 'Comedy', rating: 7.2, duration: 105, description: 'A wedding goes hilariously wrong in under 24 hours.' },
//   { _id: 'm3', title: 'Night Chase', genre: 'Thriller', rating: 8.0, duration: 118, description: 'A detective races against time to stop the next crime.' },
//   { _id: 'm4', title: 'Monsoon Melody', genre: 'Romance', rating: 7.8, duration: 124, description: 'Two strangers keep meeting on rainy days in Mumbai.' },
// ];
// const read = (k, d) => JSON.parse(localStorage.getItem(k) || 'null') ?? d;
// const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));
// function showtimes() {
//   let s = read('m_st', null);
//   if (!s) {
//     s = [];
//     movies.forEach((m, mi) => [[1, 14], [1, 19], [2, 16], [2, 21]].forEach(([d, h], i) => {
//       const t = new Date(); t.setDate(t.getDate() + d); t.setHours(h, 0, 0, 0);
//       s.push({ _id: m._id + 's' + i, movie: m._id, time: t.toISOString(), totalSeats: 40, bookedSeats: [3, 4, 12, 13, 21, 22, 30 + mi] });
//     }));
//     write('m_st', s);
//   }
//   return s;
// }
// const wait = v => new Promise(r => setTimeout(() => r(v), 250));
// const fail = msg => Promise.reject(new Error(msg));

// async function mock(path, method, body) {
//   const parts = path.split('/').filter(Boolean);
//   if (path === '/movies') return wait(movies);
//   if (parts[0] === 'movies') {
//     const movie = movies.find(m => m._id === parts[1]);
//     return wait({ movie, showtimes: showtimes().filter(s => s.movie === parts[1]) });
//   }
//   if (parts[0] === 'showtimes') {
//     const s = showtimes().find(x => x._id === parts[1]);
//     return wait({ ...s, movie: movies.find(m => m._id === s.movie) });
//   }
//   if (path === '/register' || path === '/login') {
//     if (!body.email || !body.password) return fail('Email and password required');
//     return wait({ token: 'demo', name: body.name || body.email.split('@')[0] });
//   }
//   if (path === '/book') {
//     const all = showtimes(), s = all.find(x => x._id === body.showtimeId);
//     if (body.seats.some(n => s.bookedSeats.includes(n))) return fail('Some seats were just taken. Pick again.');
//     s.bookedSeats.push(...body.seats); write('m_st', all);
//     write('m_bk', [{ _id: String(Date.now()), seats: body.seats, showtime: body.showtimeId }, ...read('m_bk', [])]);
//     return wait({ ok: true });
//   }
//   if (path === '/bookings') {
//     return wait(read('m_bk', []).map(b => {
//       const s = showtimes().find(x => x._id === b.showtime);
//       return { ...b, showtime: { ...s, movie: movies.find(m => m._id === s.movie) } };
//     }));
//   }
//   return fail('Not found');
// }

// export const api = (path, method = 'GET', body) => (MOCK ? mock(path, method, body) : real(path, method, body));
// Set MOCK = false when you want to use the real backend
export const MOCK = false;
const API = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function realCall(path, method = 'GET', body) {
  const token = localStorage.getItem('token');
  const res = await fetch(API + path, {
    method,
    headers: { 'Content-Type': 'application/json', ...(token && { Authorization: 'Bearer ' + token }) },
    body: body && JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Server error (' + res.status + ')');
  return data;
}

// A failed network call means the backend is not running
async function real(path, method, body) {
  try { return await realCall(path, method, body); }
  catch (e) { throw e instanceof TypeError ? new Error('Cannot reach the server. Start the backend (npm start) and refresh the page.') : e; }
}

// ---------- sample data for UI-only mode ----------
const movies = [
  { _id: 'm1', title: 'Space Odyssey', genre: 'Sci-Fi', rating: 8.4, duration: 130, description: 'A crew travels beyond the solar system and finds something waiting.' },
  { _id: 'm2', title: 'Laugh Riot', genre: 'Comedy', rating: 7.2, duration: 105, description: 'A wedding goes hilariously wrong in under 24 hours.' },
  { _id: 'm3', title: 'Night Chase', genre: 'Thriller', rating: 8.0, duration: 118, description: 'A detective races against time to stop the next crime.' },
  { _id: 'm4', title: 'Monsoon Melody', genre: 'Romance', rating: 7.8, duration: 124, description: 'Two strangers keep meeting on rainy days in Mumbai.' },
];
const read = (k, d) => JSON.parse(localStorage.getItem(k) || 'null') ?? d;
const write = (k, v) => localStorage.setItem(k, JSON.stringify(v));
function showtimes() {
  let s = read('m_st', null);
  if (!s) {
    s = [];
    movies.forEach((m, mi) => [[1, 14], [1, 19], [2, 16], [2, 21]].forEach(([d, h], i) => {
      const t = new Date(); t.setDate(t.getDate() + d); t.setHours(h, 0, 0, 0);
      s.push({ _id: m._id + 's' + i, movie: m._id, time: t.toISOString(), totalSeats: 40, bookedSeats: [3, 4, 12, 13, 21, 22, 30 + mi] });
    }));
    write('m_st', s);
  }
  return s;
}
const wait = v => new Promise(r => setTimeout(() => r(v), 250));
const fail = msg => Promise.reject(new Error(msg));

async function mock(path, method, body) {
  const parts = path.split('/').filter(Boolean);
  if (path === '/movies') return wait(movies);
  if (parts[0] === 'movies') {
    const movie = movies.find(m => m._id === parts[1]);
    return wait({ movie, showtimes: showtimes().filter(s => s.movie === parts[1]) });
  }
  if (parts[0] === 'showtimes') {
    const s = showtimes().find(x => x._id === parts[1]);
    return wait({ ...s, movie: movies.find(m => m._id === s.movie) });
  }
  if (path === '/register' || path === '/login') {
    if (!body.email || !body.password) return fail('Email and password required');
    return wait({ token: 'demo', name: body.name || body.email.split('@')[0] });
  }
  if (path === '/book') {
    const all = showtimes(), s = all.find(x => x._id === body.showtimeId);
    if (body.seats.some(n => s.bookedSeats.includes(n))) return fail('Some seats were just taken. Pick again.');
    s.bookedSeats.push(...body.seats); write('m_st', all);
    write('m_bk', [{ _id: String(Date.now()), seats: body.seats, showtime: body.showtimeId }, ...read('m_bk', [])]);
    return wait({ ok: true });
  }
  if (path === '/bookings') {
    return wait(read('m_bk', []).map(b => {
      const s = showtimes().find(x => x._id === b.showtime);
      return { ...b, showtime: { ...s, movie: movies.find(m => m._id === s.movie) } };
    }));
  }
  return fail('Not found');
}

export const api = (path, method = 'GET', body) => (MOCK ? mock(path, method, body) : real(path, method, body));