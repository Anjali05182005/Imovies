// // import { useState, useEffect, useRef } from 'react';
// // import { Routes, Route, Link, useNavigate, useParams, Navigate } from 'react-router-dom';
// // import { api, MOCK } from './api';
// // import Admin from './Admin.jsx';

// // const PRICE = 200;
// // const GRADS = [['#1e3a8a', '#7c3aed'], ['#be185d', '#f97316'], ['#0f766e', '#2563eb'], ['#7c2d12', '#db2777'], ['#4338ca', '#0891b2']];
// // const grad = t => { const g = GRADS[[...t].reduce((a, c) => a + c.charCodeAt(0), 0) % GRADS.length]; return `linear-gradient(160deg,${g[0]},${g[1]})`; };
// // const fmt = d => new Date(d).toLocaleString([], { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
// // const seatName = n => String.fromCharCode(65 + Math.floor((n - 1) / 8)) + (((n - 1) % 8) + 1);
// // const Err = ({ msg }) => msg ? <div className="err">{msg}</div> : null;
// // const loggedIn = () => !!localStorage.getItem('token');

// // function Poster({ m, h }) {
// //   const [bad, setBad] = useState(false);
// //   const showImg = m.poster && !bad;
// //   return (
// //     <div className="poster" style={{ background: grad(m.title), height: h, position: "relative" }}>
// //       {showImg && <img src={m.poster} alt="" onError={() => setBad(true)}
// //         style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
// //       {!showImg && m.title}
// //     </div>
// //   );
// // }

// // function Navbar() {
// //   const nav = useNavigate(); const name = localStorage.getItem('name');
// //   return (
// //     <nav className="nav">
// //       <Link className="brand" to="/">I<span>Movies</span></Link>
// //       <div className="nav-right">
// //         {name ? <>
// //           <span>Hi, {name}</span>
// //           {localStorage.getItem('role') === 'admin' && <Link className="btn-main" to="/admin">Admin</Link>}
// //           <Link className="btn-ghost" to="/bookings">My Bookings</Link>
// //           <button className="btn-ghost" onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('name'); localStorage.removeItem('role'); nav('/login'); }}>Logout</button>
// //         </> : <Link className="btn-main" to="/login">Login</Link>}
// //       </div>
// //     </nav>
// //   );
// // }

// // function Home() {
// //   const [movies, setMovies] = useState([]); const [err, setErr] = useState('');
// //   const [genre, setGenre] = useState('All'); const [q, setQ] = useState('');
// //   useEffect(() => { api('/movies').then(setMovies).catch(e => setErr(e.message)); }, []);
// //   const f = movies[0];
// //   const genres = ['All', ...new Set(movies.map(m => m.genre).filter(Boolean))];
// //   const shown = movies.filter(m => (genre === 'All' || m.genre === genre) && m.title.toLowerCase().includes(q.toLowerCase()));
// //   return (
// //     <div className="wrap"><Err msg={err} />
// //       {f && <div className="hero">
// //         {f.poster && <div style={{ position: 'absolute', inset: 0, background: `url(${f.poster}) center/cover`, opacity: .18, filter: 'blur(18px)' }} />}
// //         <div className="row align-items-center g-4" style={{ position: 'relative' }}>
// //           <div className="col-md-8">
// //             <span className="tag">Featured</span>{f.genre && <span className="tag">{f.genre}</span>}
// //             <h1 className="mt-3">{f.title}</h1><p>{f.description}</p>
// //             <Link className="btn-main d-inline-block" to={'/movie/' + f._id}>Book Tickets</Link>
// //           </div>
// //           <div className="col-md-4">
// //             <div style={{ maxWidth: 230, marginLeft: 'auto', marginRight: 'auto', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,.55)', transform: 'rotate(3deg)' }}>
// //               <Poster m={f} h={320} />
// //             </div>
// //           </div>
// //         </div>
// //       </div>}
// //       <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
// //         <h4 className="section-title m-0">Now Showing</h4>
// //         <input className="search" placeholder="Search movies..." value={q} onChange={e => setQ(e.target.value)} />
// //       </div>
// //       <div className="d-flex flex-wrap gap-2 mb-4">
// //         {genres.map(g => <button key={g} className={'gchip ' + (genre === g ? 'on' : '')} onClick={() => setGenre(g)}>{g}</button>)}
// //       </div>
// //       {shown.length === 0 && movies.length > 0 && <p className="muted">No movies found.</p>}
// //       <div className="row g-4">
// //         {shown.map(m => (
// //           <div className="col-6 col-md-4 col-lg-3" key={m._id}>
// //             <Link to={'/movie/' + m._id} className="mcard">
// //               <Poster m={m} />
// //               <div className="mbody">
// //                 <div className="fw-semibold">{m.title}</div>
// //                 <div className="muted">{[m.genre, m.duration + ' min', m.rating && '⭐ ' + m.rating].filter(Boolean).join(' · ')}</div>
// //               </div>
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // function MovieDetails() {
// //   const { id } = useParams(); const [d, setD] = useState(null); const [err, setErr] = useState('');
// //   useEffect(() => { api('/movies/' + id).then(setD).catch(e => setErr(e.message)); }, [id]);
// //   if (err) return <div className="wrap"><Err msg={err} /></div>;
// //   if (!d) return <div className="wrap muted">Loading...</div>;
// //   const m = d.movie;
// //   const days = {};
// //   d.showtimes.forEach(s => { const k = new Date(s.time).toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'short' }); (days[k] = days[k] || []).push(s); });
// //   const info = [['Director', m.director], ['Cast', m.cast], ['Language', m.language], ['Release year', m.year], ['Duration', m.duration && m.duration + ' min'], ['Genre', m.genre]].filter(([, v]) => v);
// //   return (<>
// //     <div className="page-bg" style={m.poster ? { backgroundImage: `url(${m.poster})` } : { background: grad(m.title) }} />
// //     <div className="page-shade" />
// //     <div className="wrap"><div className="row g-4 align-items-start">
// //       <div className="col-md-4 col-lg-3">
// //         <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,.6)' }}><Poster m={m} h={400} /></div>
// //       </div>
// //       <div className="col-md-8 col-lg-9">
// //         <div className="mb-2">
// //           {m.certificate && <span className="tag">{m.certificate}</span>}
// //           {m.genre && <span className="tag">{m.genre}</span>}
// //           {m.language && <span className="tag">{m.language}</span>}
// //         </div>
// //         <h1 className="fw-bold display-5">{m.title}</h1>
// //         <p className="muted">{[m.year, m.duration && m.duration + ' min', m.rating && '⭐ ' + m.rating + '/10'].filter(Boolean).join(' · ')}</p>
// //         <p className="lead">{m.description}</p>
// //         {m.story && <><h5 className="section-title mt-4">The story</h5><p style={{ color: '#d3d6ee', lineHeight: 1.8 }}>{m.story}</p></>}
// //         {info.length > 0 && <div className="panel mt-4"><div className="row g-3">
// //           {info.map(([k, v]) => <div className="col-6 col-md-4" key={k}><div className="muted">{k}</div><div className="fw-semibold">{v}</div></div>)}
// //         </div></div>}
// //         <div className="panel mt-4">
// //           <h5 className="section-title mb-1">Select a showtime</h5>
// //           <div className="muted mb-3">Tickets from ₹{PRICE}</div>
// //           {Object.keys(days).length === 0 && <p className="muted">No upcoming showtimes.</p>}
// //           {Object.entries(days).map(([day, list]) => (
// //             <div key={day} className="mb-2"><div className="muted mb-2">{day}</div>
// //               {list.map(s => <Link key={s._id} className="chip" to={'/showtime/' + s._id}>{new Date(s.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</Link>)}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div></div>
// //   </>);
// // }

// // function Seats() {
// //   const { id } = useParams(); const nav = useNavigate();
// //   const [st, setSt] = useState(null); const [picked, setPicked] = useState([]); const [err, setErr] = useState('');
// //   const pickedRef = useRef([]); pickedRef.current = picked;
// //   const load = () => api('/showtimes/' + id).then(d => {
// //     setSt(d);
// //     const lost = pickedRef.current.filter(n => d.bookedSeats.includes(n));
// //     if (lost.length) { setErr('Seat ' + lost.map(seatName).join(', ') + ' was just taken by someone else. Please pick another.'); setPicked(p => p.filter(n => !lost.includes(n))); }
// //   }).catch(e => setErr(e.message));
// //   useEffect(() => { load(); const t = setInterval(load, 5000); return () => clearInterval(t); }, [id]);
// //   if (!loggedIn()) return <Navigate to="/login" />;
// //   if (!st) return <div className="wrap"><Err msg={err} /><span className="muted">Loading...</span></div>;

// //   const m = st.movie, total = st.totalSeats, taken = st.bookedSeats.length, avail = total - taken;
// //   const pct = Math.round((taken / total) * 100), rows = Math.ceil(total / 8);
// //   const toggle = n => { setErr(''); setPicked(p => p.includes(n) ? p.filter(x => x !== n) : [...p, n]); };
// //   const book = async () => {
// //     try { await api('/book', 'POST', { showtimeId: id, seats: picked }); nav('/bookings'); }
// //     catch (e) { setErr(e.message); setPicked([]); load(); }
// //   };
// //   const pill = (bg, color) => ({ background: bg, color });
// //   return (<>
// //     <div className="page-bg" style={m.poster ? { backgroundImage: `url(${m.poster})` } : { background: grad(m.title) }} />
// //     <div className="page-shade" />
// //     <div className="wrap"><div className="row g-4">
// //       <div className="col-lg-8">
// //         <h4 className="mb-0">{m.title}</h4><p className="muted">{fmt(st.time)}</p><Err msg={err} />
// //         <div className="d-flex flex-wrap gap-2 mb-3">
// //           <span className="tag" style={pill('rgba(34,197,94,.18)', '#4ade80')}>{avail} available</span>
// //           <span className="tag" style={pill('rgba(239,68,68,.18)', '#f87171')}>{taken} taken</span>
// //           <span className="tag" style={pill('rgba(124,92,255,.25)', '#c4b5fd')}>{picked.length} selected</span>
// //         </div>
// //         <div className="occ"><div style={{ width: pct + '%' }} /></div>
// //         <div className="muted mt-1 mb-2" style={{ fontSize: '.8rem' }}>{pct}% full · updates automatically</div>
// //         <div className="screen">SCREEN</div>
// //         <div className="seat-grid">
// //           {Array.from({ length: rows }, (_, r) => [
// //             <span key={'l' + r} className="muted">{String.fromCharCode(65 + r)}</span>,
// //             ...Array.from({ length: 8 }, (_, c) => {
// //               const n = r * 8 + c + 1; if (n > total) return <span key={n} />;
// //               const isTaken = st.bookedSeats.includes(n), sel = picked.includes(n);
// //               return <button key={n} disabled={isTaken} onClick={() => toggle(n)} title={seatName(n) + (isTaken ? ' (taken)' : '')}
// //                 className={'seat ' + (isTaken ? 'taken' : sel ? 'sel' : '')}>{isTaken ? '✕' : c + 1}</button>;
// //             }),
// //           ])}
// //         </div>
// //         <div className="legend">
// //           <span><i className="dot" style={{ background: '#1e2642', border: '1px solid #3a4470' }} />Available ({avail})</span>
// //           <span><i className="dot" style={{ background: '#22c55e' }} />Selected ({picked.length})</span>
// //           <span><i className="dot" style={{ background: '#5a2430', border: '1px solid #7f1d1d' }} />Taken ({taken})</span>
// //         </div>
// //       </div>
// //       <div className="col-lg-4"><div className="panel" style={{ position: 'sticky', top: 90 }}>
// //         <h5>Your booking</h5>
// //         <p className="muted mb-1">{m.title}</p>
// //         <p className="muted mb-1">{fmt(st.time)}</p>
// //         <p className="mb-1">Seats: <b>{picked.length ? picked.map(seatName).join(', ') : 'none selected'}</b></p>
// //         <p className="muted">₹{PRICE} per seat</p>
// //         <hr style={{ borderColor: '#262d47' }} />
// //         <div className="d-flex justify-content-between mb-3"><span>Total</span><b>₹{picked.length * PRICE}</b></div>
// //         <button className="btn-main w-100" disabled={!picked.length} onClick={book}>Confirm Booking</button>
// //         {picked.length > 0 && <button className="btn btn-link btn-sm w-100 mt-2" onClick={() => setPicked([])}>Clear selection</button>}
// //       </div></div>
// //     </div></div>
// //   </>);
// // }

// // function Bookings() {
// //   const [list, setList] = useState([]); const [err, setErr] = useState('');
// //   useEffect(() => { api('/bookings').then(setList).catch(e => setErr(e.message)); }, []);
// //   if (!loggedIn()) return <Navigate to="/login" />;
// //   return (
// //     <div className="wrap"><h4 className="section-title">My Bookings</h4><Err msg={err} />
// //       {list.length === 0 && <p className="muted">No bookings yet. <Link to="/">Browse movies</Link></p>}
// //       {list.map(b => (
// //         <div className="ticket" key={b._id}>
// //           <div className="stub" style={{ background: grad(b.showtime?.movie?.title || 'x') }}>🎟</div>
// //           <div className="info">
// //             <h5 className="mb-1">{b.showtime?.movie?.title}</h5>
// //             <div className="muted">{b.showtime && fmt(b.showtime.time)}</div>
// //             <div className="mt-2">Seats: <b>{b.seats.map(seatName).join(', ')}</b> · ₹{b.seats.length * PRICE}</div>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // function Auth({ mode }) {
// //   const nav = useNavigate(); const reg = mode === 'register';
// //   const [f, setF] = useState({ name: '', email: '', password: '' }); const [err, setErr] = useState('');
// //   const set = k => e => setF({ ...f, [k]: e.target.value });
// //   const submit = async e => {
// //     e.preventDefault();
// //     try {
// //       const d = await api(reg ? '/register' : '/login', 'POST', f);
// //       localStorage.setItem('token', d.token); localStorage.setItem('name', d.name); localStorage.setItem('role', d.role || 'user'); nav('/');
// //     } catch (e) { setErr(e.message); }
// //   };
// //   return (
// //     <div className="form-box panel">
// //       <h3 className="mb-3">{reg ? 'Create account' : 'Welcome back'}</h3><Err msg={err} />
// //       <form onSubmit={submit}>
// //         {reg && <input className="inp" placeholder="Name" value={f.name} onChange={set('name')} />}
// //         <input className="inp" type="email" placeholder="Email" value={f.email} onChange={set('email')} />
// //         <input className="inp" type="password" placeholder="Password" value={f.password} onChange={set('password')} />
// //         <button className="btn-main w-100">{reg ? 'Sign up' : 'Login'}</button>
// //       </form>
// //       <p className="muted mt-3 mb-0">{reg ? <>Have an account? <Link to="/login">Login</Link></> : <>New here? <Link to="/register">Sign up</Link></>}</p>
// //     </div>
// //   );
// // }

// // export default function App() {
// //   return (<>
// //     <Navbar />
// //     {MOCK && <div className="text-center py-1" style={{ background: '#3a2a05', color: '#fcd34d', fontSize: '.8rem' }}>UI preview mode: using sample data, backend not connected</div>}
// //     <Routes>
// //       <Route path="/" element={<Home />} />
// //       <Route path="/movie/:id" element={<MovieDetails />} />
// //       <Route path="/showtime/:id" element={<Seats />} />
// //       <Route path="/bookings" element={<Bookings />} />
// //       <Route path="/admin" element={<Admin />} />
// //       <Route path="/login" element={<Auth mode="login" />} />
// //       <Route path="/register" element={<Auth mode="register" />} />
// //     </Routes>
// //   </>);
// // }
// import { useState, useEffect, useRef } from 'react';
// import { Routes, Route, Link, useNavigate, useParams, useLocation, Navigate } from 'react-router-dom';
// import { api, MOCK } from './api';
// import Admin from './Admin.jsx';

// const PRICE = 200;
// const GRADS = [['#1e3a8a', '#7c3aed'], ['#be185d', '#f97316'], ['#0f766e', '#2563eb'], ['#7c2d12', '#db2777'], ['#4338ca', '#0891b2']];
// const grad = t => { const g = GRADS[[...t].reduce((a, c) => a + c.charCodeAt(0), 0) % GRADS.length]; return `linear-gradient(160deg,${g[0]},${g[1]})`; };
// const fmt = d => new Date(d).toLocaleString([], { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
// const seatName = n => String.fromCharCode(65 + Math.floor((n - 1) / 8)) + (((n - 1) % 8) + 1);
// const Err = ({ msg }) => msg ? <div className="err">{msg}</div> : null;
// const loggedIn = () => !!localStorage.getItem('token');

// function Poster({ m, h }) {
//   const [bad, setBad] = useState(false);
//   const showImg = m.poster && !bad;
//   return (
//     <div className="poster" style={{ background: grad(m.title), height: h, position: "relative" }}>
//       {showImg && <img src={m.poster} alt="" onError={() => setBad(true)}
//         style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />}
//       {!showImg && m.title}
//     </div>
//   );
// }

// function Navbar() {
//   const nav = useNavigate(); const name = localStorage.getItem('name');
//   return (
//     <nav className="nav">
//       <Link className="brand" to="/">I<span>Movies</span></Link>
//       <div className="nav-right">
//         {name ? <>
//           <span>Hi, {name}</span>
//           {localStorage.getItem('role') === 'admin' && <Link className="btn-main" to="/admin">Admin</Link>}
//           <Link className="btn-ghost" to="/bookings">My Bookings</Link>
//           <button className="btn-ghost" onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('name'); localStorage.removeItem('role'); nav('/login'); }}>Logout</button>
//         </> : <Link className="btn-main" to="/login">Login</Link>}
//       </div>
//     </nav>
//   );
// }

// function Home() {
//   const [movies, setMovies] = useState([]); const [err, setErr] = useState('');
//   const [genre, setGenre] = useState('All'); const [q, setQ] = useState('');
//   useEffect(() => { api('/movies').then(setMovies).catch(e => setErr(e.message)); }, []);
//   const f = movies[0];
//   const genres = ['All', ...new Set(movies.map(m => m.genre).filter(Boolean))];
//   const shown = movies.filter(m => (genre === 'All' || m.genre === genre) && m.title.toLowerCase().includes(q.toLowerCase()));
//   return (
//     <div className="wrap"><Err msg={err} />
//       {f && <div className="hero">
//         {f.poster && <div style={{ position: 'absolute', inset: 0, background: `url(${f.poster}) center/cover`, opacity: .18, filter: 'blur(18px)' }} />}
//         <div className="row align-items-center g-4" style={{ position: 'relative' }}>
//           <div className="col-md-8">
//             <span className="tag">Featured</span>{f.genre && <span className="tag">{f.genre}</span>}
//             <h1 className="mt-3">{f.title}</h1><p>{f.description}</p>
//             <Link className="btn-main d-inline-block" to={'/movie/' + f._id}>Book Tickets</Link>
//           </div>
//           <div className="col-md-4">
//             <div style={{ maxWidth: 230, marginLeft: 'auto', marginRight: 'auto', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,.55)', transform: 'rotate(3deg)' }}>
//               <Poster m={f} h={320} />
//             </div>
//           </div>
//         </div>
//       </div>}
//       <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
//         <h4 className="section-title m-0">Now Showing</h4>
//         <input className="search" placeholder="Search movies..." value={q} onChange={e => setQ(e.target.value)} />
//       </div>
//       <div className="d-flex flex-wrap gap-2 mb-4">
//         {genres.map(g => <button key={g} className={'gchip ' + (genre === g ? 'on' : '')} onClick={() => setGenre(g)}>{g}</button>)}
//       </div>
//       {shown.length === 0 && movies.length > 0 && <p className="muted">No movies found.</p>}
//       <div className="row g-4">
//         {shown.map(m => (
//           <div className="col-6 col-md-4 col-lg-3" key={m._id}>
//             <Link to={'/movie/' + m._id} className="mcard">
//               <Poster m={m} />
//               <div className="mbody">
//                 <div className="fw-semibold">{m.title}</div>
//                 <div className="muted">{[m.genre, m.duration + ' min', m.rating && '⭐ ' + m.rating].filter(Boolean).join(' · ')}</div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function MovieDetails() {
//   const { id } = useParams(); const [d, setD] = useState(null); const [err, setErr] = useState('');
//   useEffect(() => { api('/movies/' + id).then(setD).catch(e => setErr(e.message)); }, [id]);
//   if (err) return <div className="wrap"><Err msg={err} /></div>;
//   if (!d) return <div className="wrap muted">Loading...</div>;
//   const m = d.movie;
//   const days = {};
//   d.showtimes.forEach(s => { const k = new Date(s.time).toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'short' }); (days[k] = days[k] || []).push(s); });
//   const info = [['Director', m.director], ['Cast', m.cast], ['Language', m.language], ['Release year', m.year], ['Duration', m.duration && m.duration + ' min'], ['Genre', m.genre]].filter(([, v]) => v);
//   return (<>
//     <div className="page-bg" style={m.poster ? { backgroundImage: `url(${m.poster})` } : { background: grad(m.title) }} />
//     <div className="page-shade" />
//     <div className="wrap"><div className="row g-4 align-items-start">
//       <div className="col-md-4 col-lg-3">
//         <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,.6)' }}><Poster m={m} h={400} /></div>
//       </div>
//       <div className="col-md-8 col-lg-9">
//         <div className="mb-2">
//           {m.certificate && <span className="tag">{m.certificate}</span>}
//           {m.genre && <span className="tag">{m.genre}</span>}
//           {m.language && <span className="tag">{m.language}</span>}
//         </div>
//         <h1 className="fw-bold display-5">{m.title}</h1>
//         <p className="muted">{[m.year, m.duration && m.duration + ' min', m.rating && '⭐ ' + m.rating + '/10'].filter(Boolean).join(' · ')}</p>
//         <p className="lead">{m.description}</p>
//         {m.story && <><h5 className="section-title mt-4">The story</h5><p style={{ color: '#d3d6ee', lineHeight: 1.8 }}>{m.story}</p></>}
//         {info.length > 0 && <div className="panel mt-4"><div className="row g-3">
//           {info.map(([k, v]) => <div className="col-6 col-md-4" key={k}><div className="muted">{k}</div><div className="fw-semibold">{v}</div></div>)}
//         </div></div>}
//         <div className="panel mt-4">
//           <h5 className="section-title mb-1">Select a showtime</h5>
//           <div className="muted mb-3">Tickets from ₹{PRICE}</div>
//           {Object.keys(days).length === 0 && <p className="muted">No upcoming showtimes.</p>}
//           {Object.entries(days).map(([day, list]) => (
//             <div key={day} className="mb-2"><div className="muted mb-2">{day}</div>
//               {list.map(s => <Link key={s._id} className="chip" to={'/showtime/' + s._id}>{new Date(s.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</Link>)}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div></div>
//   </>);
// }

// function Seats() {
//   const { id } = useParams(); const nav = useNavigate();
//   const [st, setSt] = useState(null); const [picked, setPicked] = useState([]); const [err, setErr] = useState('');
//   const pickedRef = useRef([]); pickedRef.current = picked;
//   const load = () => api('/showtimes/' + id).then(d => {
//     setSt(d);
//     const lost = pickedRef.current.filter(n => d.bookedSeats.includes(n));
//     if (lost.length) { setErr('Seat ' + lost.map(seatName).join(', ') + ' was just taken by someone else. Please pick another.'); setPicked(p => p.filter(n => !lost.includes(n))); }
//   }).catch(e => setErr(e.message));
//   useEffect(() => { load(); const t = setInterval(load, 5000); return () => clearInterval(t); }, [id]);
//   if (!loggedIn()) return <Navigate to="/login" />;
//   if (!st) return <div className="wrap"><Err msg={err} /><span className="muted">Loading...</span></div>;

//   const m = st.movie, total = st.totalSeats, taken = st.bookedSeats.length, avail = total - taken;
//   const pct = Math.round((taken / total) * 100), rows = Math.ceil(total / 8);
//   const toggle = n => { setErr(''); setPicked(p => p.includes(n) ? p.filter(x => x !== n) : [...p, n]); };
//   const book = async () => {
//     try { await api('/book', 'POST', { showtimeId: id, seats: picked }); nav('/bookings'); }
//     catch (e) { setErr(e.message); setPicked([]); load(); }
//   };
//   const pill = (bg, color) => ({ background: bg, color });
//   return (<>
//     <div className="page-bg" style={m.poster ? { backgroundImage: `url(${m.poster})` } : { background: grad(m.title) }} />
//     <div className="page-shade" />
//     <div className="wrap"><div className="row g-4">
//       <div className="col-lg-8">
//         <h4 className="mb-0">{m.title}</h4><p className="muted">{fmt(st.time)}</p><Err msg={err} />
//         <div className="d-flex flex-wrap gap-2 mb-3">
//           <span className="tag" style={pill('rgba(34,197,94,.18)', '#4ade80')}>{avail} available</span>
//           <span className="tag" style={pill('rgba(239,68,68,.18)', '#f87171')}>{taken} taken</span>
//           <span className="tag" style={pill('rgba(124,92,255,.25)', '#c4b5fd')}>{picked.length} selected</span>
//         </div>
//         <div className="occ"><div style={{ width: pct + '%' }} /></div>
//         <div className="muted mt-1 mb-2" style={{ fontSize: '.8rem' }}>{pct}% full · updates automatically</div>
//         <div className="screen">SCREEN</div>
//         <div className="seat-grid">
//           {Array.from({ length: rows }, (_, r) => [
//             <span key={'l' + r} className="muted">{String.fromCharCode(65 + r)}</span>,
//             ...Array.from({ length: 8 }, (_, c) => {
//               const n = r * 8 + c + 1; if (n > total) return <span key={n} />;
//               const isTaken = st.bookedSeats.includes(n), sel = picked.includes(n);
//               return <button key={n} disabled={isTaken} onClick={() => toggle(n)} title={seatName(n) + (isTaken ? ' (taken)' : '')}
//                 className={'seat ' + (isTaken ? 'taken' : sel ? 'sel' : '')}>{isTaken ? '✕' : c + 1}</button>;
//             }),
//           ])}
//         </div>
//         <div className="legend">
//           <span><i className="dot" style={{ background: '#1e2642', border: '1px solid #3a4470' }} />Available ({avail})</span>
//           <span><i className="dot" style={{ background: '#22c55e' }} />Selected ({picked.length})</span>
//           <span><i className="dot" style={{ background: '#5a2430', border: '1px solid #7f1d1d' }} />Taken ({taken})</span>
//         </div>
//       </div>
//       <div className="col-lg-4"><div className="panel" style={{ position: 'sticky', top: 90 }}>
//         <h5>Your booking</h5>
//         <p className="muted mb-1">{m.title}</p>
//         <p className="muted mb-1">{fmt(st.time)}</p>
//         <p className="mb-1">Seats: <b>{picked.length ? picked.map(seatName).join(', ') : 'none selected'}</b></p>
//         <p className="muted">₹{PRICE} per seat</p>
//         <hr style={{ borderColor: '#262d47' }} />
//         <div className="d-flex justify-content-between mb-3"><span>Total</span><b>₹{picked.length * PRICE}</b></div>
//         <button className="btn-main w-100" disabled={!picked.length} onClick={book}>Confirm Booking</button>
//         {picked.length > 0 && <button className="btn btn-link btn-sm w-100 mt-2" onClick={() => setPicked([])}>Clear selection</button>}
//       </div></div>
//     </div></div>
//   </>);
// }

// function Bookings() {
//   const [list, setList] = useState([]); const [err, setErr] = useState('');
//   useEffect(() => { api('/bookings').then(setList).catch(e => setErr(e.message)); }, []);
//   if (!loggedIn()) return <Navigate to="/login" />;
//   return (
//     <div className="wrap"><h4 className="section-title">My Bookings</h4><Err msg={err} />
//       {list.length === 0 && <p className="muted">No bookings yet. <Link to="/">Browse movies</Link></p>}
//       {list.map(b => (
//         <div className="ticket" key={b._id}>
//           <div className="stub" style={{ background: grad(b.showtime?.movie?.title || 'x') }}>🎟</div>
//           <div className="info">
//             <h5 className="mb-1">{b.showtime?.movie?.title}</h5>
//             <div className="muted">{b.showtime && fmt(b.showtime.time)}</div>
//             <div className="mt-2">Seats: <b>{b.seats.map(seatName).join(', ')}</b> · ₹{b.seats.length * PRICE}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// function Auth({ mode }) {
//   const nav = useNavigate(); const reg = mode === 'register';
//   const [f, setF] = useState({ name: '', email: '', password: '' }); const [err, setErr] = useState('');
//   const set = k => e => setF({ ...f, [k]: e.target.value });
//   const submit = async e => {
//     e.preventDefault();
//     try {
//       const d = await api(reg ? '/register' : '/login', 'POST', f);
//       localStorage.setItem('token', d.token); localStorage.setItem('name', d.name); localStorage.setItem('role', d.role || 'user'); nav('/');
//     } catch (e) { setErr(e.message); }
//   };
//   return (
//     <div className="form-box panel">
//       <h3 className="mb-3">{reg ? 'Create account' : 'Welcome back'}</h3><Err msg={err} />
//       <form onSubmit={submit}>
//         {reg && <input className="inp" placeholder="Name" value={f.name} onChange={set('name')} />}
//         <input className="inp" type="email" placeholder="Email" value={f.email} onChange={set('email')} />
//         <input className="inp" type="password" placeholder="Password" value={f.password} onChange={set('password')} />
//         <button className="btn-main w-100">{reg ? 'Sign up' : 'Login'}</button>
//       </form>
//       <p className="muted mt-3 mb-0">{reg ? <>Have an account? <Link to="/login">Login</Link></> : <>New here? <Link to="/register">Sign up</Link></>}</p>
//     </div>
//   );
// }

// function BackBar() {
//   const nav = useNavigate(); const { pathname } = useLocation();
//   if (['/', '/login', '/register'].includes(pathname)) return null;
//   const back = () => (window.history.state && window.history.state.idx > 0 ? nav(-1) : nav('/'));
//   return <div className="backbar"><button className="back-btn" onClick={back}>← <span>Back</span></button></div>;
// }

// export default function App() {
//   return (<>
//     <Navbar />
//     <BackBar />
//     {MOCK && <div className="text-center py-1" style={{ background: '#3a2a05', color: '#fcd34d', fontSize: '.8rem' }}>UI preview mode: using sample data, backend not connected</div>}
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/movie/:id" element={<MovieDetails />} />
//       <Route path="/showtime/:id" element={<Seats />} />
//       <Route path="/bookings" element={<Bookings />} />
//       <Route path="/admin" element={<Admin />} />
//       <Route path="/login" element={<Auth mode="login" />} />
//       <Route path="/register" element={<Auth mode="register" />} />
//     </Routes>
//   </>);
// }
import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useNavigate, useParams, useLocation, Navigate } from 'react-router-dom';
import { api, MOCK } from './api';
import Admin from './Admin.jsx';

const PRICE = 200;
const GRADS = [['#1e3a8a', '#7c3aed'], ['#be185d', '#f97316'], ['#0f766e', '#2563eb'], ['#7c2d12', '#db2777'], ['#4338ca', '#0891b2']];
const grad = t => { const g = GRADS[[...t].reduce((a, c) => a + c.charCodeAt(0), 0) % GRADS.length]; return `linear-gradient(160deg,${g[0]},${g[1]})`; };
const fmt = d => new Date(d).toLocaleString([], { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
const seatName = n => String.fromCharCode(65 + Math.floor((n - 1) / 8)) + (((n - 1) % 8) + 1);
const Err = ({ msg }) => msg ? <div className="err">{msg}</div> : null;
const loggedIn = () => !!localStorage.getItem('token');

// Uses the poster saved in the database; if there is none, tries the built-in poster named after the movie
const posterSrc = m => m.poster || '/posters/' + m.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.svg';

function Poster({ m, h }) {
  const src = posterSrc(m);
  const [bad, setBad] = useState(false);
  useEffect(() => { setBad(false); }, [src]);
  return (
    <div className="poster" style={{ background: grad(m.title), height: h, position: 'relative' }}>
      {!bad && <img src={src} alt="" onError={() => setBad(true)}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
      {bad && m.title}
    </div>
  );
}

function Navbar() {
  const nav = useNavigate(); const name = localStorage.getItem('name');
  return (
    <nav className="nav">
      <Link className="brand" to="/">I<span>Movies</span></Link>
      <div className="nav-right">
        {name ? <>
          <span>Hi, {name}</span>
          {localStorage.getItem('role') === 'admin' && <Link className="btn-main" to="/admin">Admin</Link>}
          <Link className="btn-ghost" to="/bookings">My Bookings</Link>
          <button className="btn-ghost" onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('name'); localStorage.removeItem('role'); nav('/login'); }}>Logout</button>
        </> : <Link className="btn-main" to="/login">Login</Link>}
      </div>
    </nav>
  );
}

function Home() {
  const [movies, setMovies] = useState([]); const [err, setErr] = useState('');
  const [genre, setGenre] = useState('All'); const [q, setQ] = useState('');
  useEffect(() => { api('/movies').then(setMovies).catch(e => setErr(e.message)); }, []);
  const f = movies[0];
  const genres = ['All', ...new Set(movies.map(m => m.genre).filter(Boolean))];
  const shown = movies.filter(m => (genre === 'All' || m.genre === genre) && m.title.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="wrap"><Err msg={err} />
      {f && <div className="hero">
        <div style={{ position: 'absolute', inset: 0, background: `url(${posterSrc(f)}) center/cover`, opacity: .18, filter: 'blur(18px)' }} />
        <div className="row align-items-center g-4" style={{ position: 'relative' }}>
          <div className="col-md-8">
            <span className="tag">Featured</span>{f.genre && <span className="tag">{f.genre}</span>}
            <h1 className="mt-3">{f.title}</h1><p>{f.description}</p>
            <Link className="btn-main d-inline-block" to={'/movie/' + f._id}>Book Tickets</Link>
          </div>
          <div className="col-md-4">
            <div style={{ maxWidth: 230, marginLeft: 'auto', marginRight: 'auto', borderRadius: 16, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,.55)', transform: 'rotate(3deg)' }}>
              <Poster m={f} h={320} />
            </div>
          </div>
        </div>
      </div>}
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-3">
        <h4 className="section-title m-0">Now Showing</h4>
        <input className="search" placeholder="Search movies..." value={q} onChange={e => setQ(e.target.value)} />
      </div>
      <div className="d-flex flex-wrap gap-2 mb-4">
        {genres.map(g => <button key={g} className={'gchip ' + (genre === g ? 'on' : '')} onClick={() => setGenre(g)}>{g}</button>)}
      </div>
      {shown.length === 0 && movies.length > 0 && <p className="muted">No movies found.</p>}
      <div className="row g-4">
        {shown.map(m => (
          <div className="col-6 col-md-4 col-lg-3" key={m._id}>
            <Link to={'/movie/' + m._id} className="mcard">
              <Poster m={m} />
              <div className="mbody">
                <div className="fw-semibold">{m.title}</div>
                <div className="muted">{[m.genre, m.duration + ' min', m.rating && '⭐ ' + m.rating].filter(Boolean).join(' · ')}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieDetails() {
  const { id } = useParams(); const [d, setD] = useState(null); const [err, setErr] = useState('');
  useEffect(() => { api('/movies/' + id).then(setD).catch(e => setErr(e.message)); }, [id]);
  if (err) return <div className="wrap"><Err msg={err} /></div>;
  if (!d) return <div className="wrap muted">Loading...</div>;
  const m = d.movie;
  const days = {};
  d.showtimes.forEach(s => { const k = new Date(s.time).toLocaleDateString([], { weekday: 'long', day: 'numeric', month: 'short' }); (days[k] = days[k] || []).push(s); });
  const info = [['Director', m.director], ['Cast', m.cast], ['Language', m.language], ['Release year', m.year], ['Duration', m.duration && m.duration + ' min'], ['Genre', m.genre]].filter(([, v]) => v);
  return (<>
    <div className="page-bg" style={{ backgroundImage: `url(${posterSrc(m)}), ${grad(m.title)}` }} />
    <div className="page-shade" />
    <div className="wrap"><div className="row g-4 align-items-start">
      <div className="col-md-4 col-lg-3">
        <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 25px 60px rgba(0,0,0,.6)' }}><Poster m={m} h={400} /></div>
      </div>
      <div className="col-md-8 col-lg-9">
        <div className="mb-2">
          {m.certificate && <span className="tag">{m.certificate}</span>}
          {m.genre && <span className="tag">{m.genre}</span>}
          {m.language && <span className="tag">{m.language}</span>}
        </div>
        <h1 className="fw-bold display-5">{m.title}</h1>
        <p className="muted">{[m.year, m.duration && m.duration + ' min', m.rating && '⭐ ' + m.rating + '/10'].filter(Boolean).join(' · ')}</p>
        <p className="lead">{m.description}</p>
        {m.story && <><h5 className="section-title mt-4">The story</h5><p style={{ color: '#d3d6ee', lineHeight: 1.8 }}>{m.story}</p></>}
        {info.length > 0 && <div className="panel mt-4"><div className="row g-3">
          {info.map(([k, v]) => <div className="col-6 col-md-4" key={k}><div className="muted">{k}</div><div className="fw-semibold">{v}</div></div>)}
        </div></div>}
        <div className="panel mt-4">
          <h5 className="section-title mb-1">Select a showtime</h5>
          <div className="muted mb-3">Tickets from ₹{PRICE}</div>
          {Object.keys(days).length === 0 && <p className="muted">No upcoming showtimes.</p>}
          {Object.entries(days).map(([day, list]) => (
            <div key={day} className="mb-2"><div className="muted mb-2">{day}</div>
              {list.map(s => <Link key={s._id} className="chip" to={'/showtime/' + s._id}>{new Date(s.time).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</Link>)}
            </div>
          ))}
        </div>
      </div>
    </div></div>
  </>);
}

function Seats() {
  const { id } = useParams(); const nav = useNavigate();
  const [st, setSt] = useState(null); const [picked, setPicked] = useState([]); const [err, setErr] = useState('');
  const pickedRef = useRef([]); pickedRef.current = picked;
  const load = () => api('/showtimes/' + id).then(d => {
    setSt(d);
    const lost = pickedRef.current.filter(n => d.bookedSeats.includes(n));
    if (lost.length) { setErr('Seat ' + lost.map(seatName).join(', ') + ' was just taken by someone else. Please pick another.'); setPicked(p => p.filter(n => !lost.includes(n))); }
  }).catch(e => setErr(e.message));
  useEffect(() => { load(); const t = setInterval(load, 5000); return () => clearInterval(t); }, [id]);
  if (!loggedIn()) return <Navigate to="/login" />;
  if (!st) return <div className="wrap"><Err msg={err} /><span className="muted">Loading...</span></div>;

  const m = st.movie, total = st.totalSeats, taken = st.bookedSeats.length, avail = total - taken;
  const pct = Math.round((taken / total) * 100), rows = Math.ceil(total / 8);
  const toggle = n => { setErr(''); setPicked(p => p.includes(n) ? p.filter(x => x !== n) : [...p, n]); };
  const book = async () => {
    try { await api('/book', 'POST', { showtimeId: id, seats: picked }); nav('/bookings'); }
    catch (e) { setErr(e.message); setPicked([]); load(); }
  };
  const pill = (bg, color) => ({ background: bg, color });
  return (<>
    <div className="page-bg" style={{ backgroundImage: `url(${posterSrc(m)}), ${grad(m.title)}` }} />
    <div className="page-shade" />
    <div className="wrap"><div className="row g-4">
      <div className="col-lg-8">
        <h4 className="mb-0">{m.title}</h4><p className="muted">{fmt(st.time)}</p><Err msg={err} />
        <div className="d-flex flex-wrap gap-2 mb-3">
          <span className="tag" style={pill('rgba(34,197,94,.18)', '#4ade80')}>{avail} available</span>
          <span className="tag" style={pill('rgba(239,68,68,.18)', '#f87171')}>{taken} taken</span>
          <span className="tag" style={pill('rgba(124,92,255,.25)', '#c4b5fd')}>{picked.length} selected</span>
        </div>
        <div className="occ"><div style={{ width: pct + '%' }} /></div>
        <div className="muted mt-1 mb-2" style={{ fontSize: '.8rem' }}>{pct}% full · updates automatically</div>
        <div className="screen">SCREEN</div>
        <div className="seat-grid">
          {Array.from({ length: rows }, (_, r) => [
            <span key={'l' + r} className="muted">{String.fromCharCode(65 + r)}</span>,
            ...Array.from({ length: 8 }, (_, c) => {
              const n = r * 8 + c + 1; if (n > total) return <span key={n} />;
              const isTaken = st.bookedSeats.includes(n), sel = picked.includes(n);
              return <button key={n} disabled={isTaken} onClick={() => toggle(n)} title={seatName(n) + (isTaken ? ' (taken)' : '')}
                className={'seat ' + (isTaken ? 'taken' : sel ? 'sel' : '')}>{isTaken ? '✕' : c + 1}</button>;
            }),
          ])}
        </div>
        <div className="legend">
          <span><i className="dot" style={{ background: '#1e2642', border: '1px solid #3a4470' }} />Available ({avail})</span>
          <span><i className="dot" style={{ background: '#22c55e' }} />Selected ({picked.length})</span>
          <span><i className="dot" style={{ background: '#5a2430', border: '1px solid #7f1d1d' }} />Taken ({taken})</span>
        </div>
      </div>
      <div className="col-lg-4"><div className="panel" style={{ position: 'sticky', top: 90 }}>
        <h5>Your booking</h5>
        <p className="muted mb-1">{m.title}</p>
        <p className="muted mb-1">{fmt(st.time)}</p>
        <p className="mb-1">Seats: <b>{picked.length ? picked.map(seatName).join(', ') : 'none selected'}</b></p>
        <p className="muted">₹{PRICE} per seat</p>
        <hr style={{ borderColor: '#262d47' }} />
        <div className="d-flex justify-content-between mb-3"><span>Total</span><b>₹{picked.length * PRICE}</b></div>
        <button className="btn-main w-100" disabled={!picked.length} onClick={book}>Confirm Booking</button>
        {picked.length > 0 && <button className="btn btn-link btn-sm w-100 mt-2" onClick={() => setPicked([])}>Clear selection</button>}
      </div></div>
    </div></div>
  </>);
}

function Bookings() {
  const [list, setList] = useState(null); const [err, setErr] = useState('');
  useEffect(() => { api('/bookings').then(l => setList(l.filter(b => b.showtime && b.showtime.movie))).catch(e => { setErr(e.message); setList([]); }); }, []);
  if (!loggedIn()) return <Navigate to="/login" />;
  const spent = (list || []).reduce((a, b) => a + b.seats.length * PRICE, 0);
  return (
    <div className="wrap"><h3 className="mb-1">My Bookings</h3>
      {list && list.length > 0 && <p className="muted mb-4">{list.length} booking{list.length > 1 ? 's' : ''} · ₹{spent} spent</p>}
      <Err msg={err} />
      {list === null && <p className="muted">Loading...</p>}
      {list && list.length === 0 && !err && <div className="panel text-center py-5">
        <div style={{ fontSize: '2.6rem' }}>🎟</div><h5>No bookings yet</h5>
        <p className="muted">Pick a movie and grab your seats.</p><Link className="btn-main d-inline-block" to="/">Browse movies</Link>
      </div>}
      {(list || []).map(b => {
        const m = b.showtime.movie, upcoming = new Date(b.showtime.time) > new Date();
        return (
          <div className="ticket2" key={b._id}>
            <div className="t-poster"><Poster m={m} h={170} /></div>
            <div className="t-info">
              <div className="d-flex justify-content-between align-items-start gap-2">
                <div><h5 className="mb-1">{m.title}</h5><div className="muted">{[m.genre, m.language, m.duration && m.duration + ' min'].filter(Boolean).join(' · ')}</div></div>
                <span className={'badge-st ' + (upcoming ? 'up' : 'done')}>{upcoming ? 'Upcoming' : 'Completed'}</span>
              </div>
              <div className="mt-3 d-flex flex-wrap gap-4">
                <div><div className="muted">Date and time</div><b>{fmt(b.showtime.time)}</b></div>
                <div><div className="muted">Seats</div>{b.seats.map(n => <span key={n} className="seat-chip">{seatName(n)}</span>)}</div>
                <div><div className="muted">Total</div><b>₹{b.seats.length * PRICE}</b></div>
              </div>
            </div>
            <div className="t-stub"><div className="barcode" /><div className="muted mt-2">#{b._id.slice(-6).toUpperCase()}</div></div>
          </div>
        );
      })}
    </div>
  );
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
function validate(f, reg) {
  const e = {};
  if (reg && f.name.trim().length < 2) e.name = 'Name must be at least 2 characters';
  if (!f.email.trim()) e.email = 'Email is required';
  else if (!EMAIL_RE.test(f.email.trim())) e.email = 'Enter a valid email address';
  if (!f.password) e.password = 'Password is required';
  else if (reg && (f.password.length < 6 || !/[A-Za-z]/.test(f.password) || !/\d/.test(f.password))) e.password = 'Use 6+ characters with at least one letter and one number';
  return e;
}

function Auth({ mode }) {
  const nav = useNavigate(); const reg = mode === 'register';
  const [f, setF] = useState({ name: '', email: '', password: '' }); const [touched, setTouched] = useState({});
  const [err, setErr] = useState(''); const [show, setShow] = useState(false); const [busy, setBusy] = useState(false);
  const errors = validate(f, reg);
  const set = k => e => { setErr(''); setF({ ...f, [k]: e.target.value }); };
  const submit = async e => {
    e.preventDefault(); setTouched({ name: true, email: true, password: true });
    if (Object.keys(errors).length) return;
    setBusy(true);
    try {
      const d = await api(reg ? '/register' : '/login', 'POST', { name: f.name.trim(), email: f.email.trim(), password: f.password });
      localStorage.setItem('token', d.token); localStorage.setItem('name', d.name); localStorage.setItem('role', d.role || 'user'); nav('/');
    } catch (e) { setErr(e.message); } finally { setBusy(false); }
  };
  const field = (k, type, ph) => (
    <div className="mb-3">
      <input className={'inp mb-0 ' + (touched[k] && errors[k] ? 'bad' : '')} type={k === 'password' && show ? 'text' : type} placeholder={ph}
        value={f[k]} onChange={set(k)} onBlur={() => setTouched({ ...touched, [k]: true })} />
      {touched[k] && errors[k] && <div className="field-err">{errors[k]}</div>}
    </div>
  );
  return (
    <div className="form-box panel">
      <h3 className="mb-3">{reg ? 'Create account' : 'Welcome back'}</h3><Err msg={err} />
      <form onSubmit={submit} noValidate>
        {reg && field('name', 'text', 'Name')}
        {field('email', 'email', 'Email')}
        {field('password', 'password', 'Password')}
        <label className="muted d-block mb-3"><input type="checkbox" checked={show} onChange={e => setShow(e.target.checked)} /> Show password</label>
        <button className="btn-main w-100" disabled={busy}>{busy ? 'Please wait...' : reg ? 'Sign up' : 'Login'}</button>
      </form>
      <p className="muted mt-3 mb-0">{reg ? <>Have an account? <Link to="/login">Login</Link></> : <>New here? <Link to="/register">Sign up</Link></>}</p>
    </div>
  );
}

function BackBar() {
  const nav = useNavigate(); const { pathname } = useLocation();
  if (['/', '/login', '/register'].includes(pathname)) return null;
  const back = () => (window.history.state && window.history.state.idx > 0 ? nav(-1) : nav('/'));
  return <div className="backbar"><button className="back-btn" onClick={back}>← <span>Back</span></button></div>;
}

export default function App() {
  return (<>
    <Navbar />
    <BackBar />
    {MOCK && <div className="text-center py-1" style={{ background: '#3a2a05', color: '#fcd34d', fontSize: '.8rem' }}>UI preview mode: using sample data, backend not connected</div>}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/showtime/:id" element={<Seats />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Auth mode="login" />} />
      <Route path="/register" element={<Auth mode="register" />} />
    </Routes>
  </>);
}