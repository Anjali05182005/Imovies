// // import { useState, useEffect } from 'react';
// // import { Navigate } from 'react-router-dom';
// // import { api } from './api';

// // const PRICE = 200;
// // const fmt = d => new Date(d).toLocaleString([], { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
// // const localInput = d => { const t = new Date(d); t.setMinutes(t.getMinutes() - t.getTimezoneOffset()); return t.toISOString().slice(0, 16); };
// // const seatName = n => String.fromCharCode(65 + Math.floor((n - 1) / 8)) + (((n - 1) % 8) + 1);
// // const Err = ({ msg }) => msg ? <div className="err">{msg}</div> : null;

// // const EMPTY = { title: '', genre: '', rating: '', duration: '', poster: '', description: '' };

// // function MoviesTab({ onChange }) {
// //   const [list, setList] = useState([]); const [f, setF] = useState(EMPTY);
// //   const [editing, setEditing] = useState(null); const [err, setErr] = useState('');
// //   const load = () => api('/movies').then(setList).catch(e => setErr(e.message));
// //   useEffect(() => { load(); }, []);
// //   const set = k => e => setF({ ...f, [k]: e.target.value });
// //   const reset = () => { setF(EMPTY); setEditing(null); };
// //   const save = async e => {
// //     e.preventDefault(); setErr('');
// //     try {
// //       const body = { ...f, rating: Number(f.rating) || 0, duration: Number(f.duration) || 0 };
// //       await api(editing ? '/admin/movies/' + editing : '/admin/movies', editing ? 'PUT' : 'POST', body);
// //       reset(); load(); onChange();
// //     } catch (e) { setErr(e.message); }
// //   };
// //   const edit = m => {
// //     setEditing(m._id); window.scrollTo(0, 0);
// //     setF({ title: m.title || '', genre: m.genre || '', rating: m.rating ?? '', duration: m.duration ?? '', poster: m.poster || '', description: m.description || '' });
// //   };
// //   const del = async m => {
// //     if (!window.confirm('Delete "' + m.title + '" with all its showtimes and bookings?')) return;
// //     try { await api('/admin/movies/' + m._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); }
// //   };
// //   return (<>
// //     <form className="panel mb-4" onSubmit={save}>
// //       <h5>{editing ? 'Edit movie' : 'Add a new movie'}</h5><Err msg={err} />
// //       <div className="row g-2">
// //         <div className="col-md-6"><input className="inp" placeholder="Title *" value={f.title} onChange={set('title')} /></div>
// //         <div className="col-md-6"><input className="inp" placeholder="Genre (Action, Comedy...)" value={f.genre} onChange={set('genre')} /></div>
// //         <div className="col-md-3"><input className="inp" type="number" step="0.1" min="0" max="10" placeholder="Rating (0-10)" value={f.rating} onChange={set('rating')} /></div>
// //         <div className="col-md-3"><input className="inp" type="number" min="1" placeholder="Duration (min)" value={f.duration} onChange={set('duration')} /></div>
// //         <div className="col-md-6"><input className="inp" placeholder="Poster URL or /posters/name.jpg (optional)" value={f.poster} onChange={set('poster')} /></div>
// //         <div className="col-12"><textarea className="inp" rows="2" placeholder="Description" value={f.description} onChange={set('description')} /></div>
// //       </div>
// //       <button className="btn-main me-2">{editing ? 'Save changes' : 'Add movie'}</button>
// //       {editing && <button type="button" className="btn-ghost" onClick={reset}>Cancel</button>}
// //     </form>
// //     <div className="table-responsive"><table className="table table-dark table-hover align-middle">
// //       <thead><tr><th>Title</th><th>Genre</th><th>Rating</th><th>Min</th><th></th></tr></thead>
// //       <tbody>{list.map(m => (
// //         <tr key={m._id}><td>{m.title}</td><td>{m.genre}</td><td>{m.rating}</td><td>{m.duration}</td>
// //           <td className="text-end text-nowrap">
// //             <button className="btn-ghost me-2" onClick={() => edit(m)}>Edit</button>
// //             <button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => del(m)}>Delete</button>
// //           </td></tr>
// //       ))}</tbody>
// //     </table></div>
// //   </>);
// // }

// // function ShowtimesTab({ onChange }) {
// //   const [list, setList] = useState([]); const [movies, setMovies] = useState([]);
// //   const [f, setF] = useState({ movie: '', time: '', totalSeats: 40 }); const [editing, setEditing] = useState(null); const [err, setErr] = useState('');
// //   const load = () => { api('/admin/showtimes').then(setList).catch(e => setErr(e.message)); api('/movies').then(setMovies).catch(() => {}); };
// //   useEffect(() => { load(); }, []);
// //   const save = async e => {
// //     e.preventDefault(); setErr('');
// //     if (!f.movie || !f.time) return setErr('Pick a movie and a date/time');
// //     try {
// //       const body = { movie: f.movie, time: new Date(f.time).toISOString(), totalSeats: Number(f.totalSeats) };
// //       await api(editing ? '/admin/showtimes/' + editing : '/admin/showtimes', editing ? 'PUT' : 'POST', body);
// //       setF({ movie: f.movie, time: '', totalSeats: 40 }); setEditing(null); load(); onChange();
// //     } catch (e) { setErr(e.message); }
// //   };
// //   const edit = s => { setEditing(s._id); setF({ movie: s.movie?._id || '', time: localInput(s.time), totalSeats: s.totalSeats }); window.scrollTo(0, 0); };
// //   const del = async s => {
// //     if (!window.confirm('Delete this showtime and its bookings?')) return;
// //     try { await api('/admin/showtimes/' + s._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); }
// //   };
// //   return (<>
// //     <form className="panel mb-4" onSubmit={save}>
// //       <h5>{editing ? 'Edit showtime' : 'Assign a movie to a showtime'}</h5><Err msg={err} />
// //       <div className="row g-2">
// //         <div className="col-md-5"><select className="inp" value={f.movie} onChange={e => setF({ ...f, movie: e.target.value })}>
// //           <option value="">Select movie...</option>{movies.map(m => <option key={m._id} value={m._id}>{m.title}</option>)}</select></div>
// //         <div className="col-md-4"><input className="inp" type="datetime-local" value={f.time} onChange={e => setF({ ...f, time: e.target.value })} /></div>
// //         <div className="col-md-3"><input className="inp" type="number" min="8" max="96" placeholder="Seats" value={f.totalSeats} onChange={e => setF({ ...f, totalSeats: e.target.value })} /></div>
// //       </div>
// //       <button className="btn-main me-2">{editing ? 'Save changes' : 'Assign showtime'}</button>
// //       {editing && <button type="button" className="btn-ghost" onClick={() => { setEditing(null); setF({ movie: '', time: '', totalSeats: 40 }); }}>Cancel</button>}
// //     </form>
// //     <div className="table-responsive"><table className="table table-dark table-hover align-middle">
// //       <thead><tr><th>Movie</th><th>Date and time</th><th>Booked</th><th></th></tr></thead>
// //       <tbody>{list.map(s => (
// //         <tr key={s._id}><td>{s.movie?.title || '(deleted)'}</td><td>{fmt(s.time)}</td><td>{s.bookedSeats.length} / {s.totalSeats}</td>
// //           <td className="text-end text-nowrap">
// //             <button className="btn-ghost me-2" onClick={() => edit(s)}>Edit</button>
// //             <button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => del(s)}>Delete</button>
// //           </td></tr>
// //       ))}</tbody>
// //     </table></div>
// //   </>);
// // }

// // function BookingsTab({ onChange }) {
// //   const [list, setList] = useState([]); const [err, setErr] = useState('');
// //   const load = () => api('/admin/bookings').then(setList).catch(e => setErr(e.message));
// //   useEffect(() => { load(); }, []);
// //   const cancel = async b => {
// //     if (!window.confirm('Cancel this booking and free the seats?')) return;
// //     try { await api('/admin/bookings/' + b._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); }
// //   };
// //   return (<><Err msg={err} />
// //     {list.length === 0 && <p className="muted">No bookings yet.</p>}
// //     <div className="table-responsive"><table className="table table-dark table-hover align-middle">
// //       <thead><tr><th>User</th><th>Movie</th><th>Showtime</th><th>Seats</th><th></th></tr></thead>
// //       <tbody>{list.map(b => (
// //         <tr key={b._id}><td>{b.user?.name}<div className="muted">{b.user?.email}</div></td>
// //           <td>{b.showtime?.movie?.title}</td><td>{b.showtime && fmt(b.showtime.time)}</td>
// //           <td>{b.seats.map(seatName).join(', ')}</td>
// //           <td className="text-end"><button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => cancel(b)}>Cancel</button></td></tr>
// //       ))}</tbody>
// //     </table></div>
// //   </>);
// // }

// // function Panel() {
// //   const [tab, setTab] = useState('movies'); const [s, setS] = useState({});
// //   const loadStats = () => api('/admin/stats').then(setS).catch(() => {});
// //   useEffect(() => { loadStats(); }, []);
// //   const stats = [['Movies', s.movies], ['Showtimes', s.showtimes], ['Bookings', s.bookings], ['Users', s.users], ['Revenue', '₹' + (s.seats || 0) * PRICE]];
// //   return (
// //     <div className="wrap">
// //       <h3 className="mb-3">Admin Panel</h3>
// //       <div className="row g-3 mb-4">{stats.map(([k, v]) => (
// //         <div className="col-6 col-md" key={k}><div className="panel text-center"><div className="muted">{k}</div><h4 className="m-0">{v ?? '-'}</h4></div></div>
// //       ))}</div>
// //       <div className="d-flex gap-2 mb-4">
// //         {[['movies', 'Movies'], ['showtimes', 'Showtimes'], ['bookings', 'Bookings']].map(([k, label]) =>
// //           <button key={k} className={'gchip ' + (tab === k ? 'on' : '')} onClick={() => setTab(k)}>{label}</button>)}
// //       </div>
// //       {tab === 'movies' && <MoviesTab onChange={loadStats} />}
// //       {tab === 'showtimes' && <ShowtimesTab onChange={loadStats} />}
// //       {tab === 'bookings' && <BookingsTab onChange={loadStats} />}
// //     </div>
// //   );
// // }

// // export default function Admin() {
// //   if (localStorage.getItem('role') !== 'admin') return <Navigate to="/" />;
// //   return <Panel />;
// // }
// // import { useState, useEffect } from 'react';
// // import { Navigate } from 'react-router-dom';
// // import { api } from './api';

// // const PRICE = 200;
// // const fmt = d => new Date(d).toLocaleString([], { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
// // const localInput = d => { const t = new Date(d); t.setMinutes(t.getMinutes() - t.getTimezoneOffset()); return t.toISOString().slice(0, 16); };
// // const seatName = n => String.fromCharCode(65 + Math.floor((n - 1) / 8)) + (((n - 1) % 8) + 1);
// // const Err = ({ msg }) => msg ? <div className="err">{msg}</div> : null;

// // Shrinks any chosen image to max 600px and returns it as a small JPEG data URL (stored in the database)
// // const toDataUrl = file => new Promise((resolve, reject) => {
// //   if (!file.type.startsWith('image/')) return reject(new Error('Please choose an image file'));
// //   const img = new Image(), url = URL.createObjectURL(file);
// //   img.onload = () => {
// //     const k = Math.min(1, 600 / Math.max(img.width, img.height));
// //     const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
// //     const ctx = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
// //     ctx.drawImage(img, 0, 0, c.width, c.height);
// //     URL.revokeObjectURL(url); resolve(c.toDataURL('image/jpeg', 0.82));
// //   };
// //   img.onerror = () => reject(new Error('Could not read that image'));
// //   img.src = url;
// // });

// // const EMPTY = { title: '', genre: '', rating: '', duration: '', poster: '', description: '' };

// // function MoviesTab({ onChange }) {
// //   const [list, setList] = useState([]); const [f, setF] = useState(EMPTY);
// //   const [editing, setEditing] = useState(null); const [err, setErr] = useState('');
// //   const load = () => api('/movies').then(setList).catch(e => setErr(e.message));
// //   useEffect(() => { load(); }, []);
// //   const set = k => e => setF({ ...f, [k]: e.target.value });
// //   const reset = () => { setF(EMPTY); setEditing(null); };
// //   const choosePoster = async e => {
// //     const file = e.target.files[0]; if (!file) return;
// //     try { setErr(''); setF({ ...f, poster: await toDataUrl(file) }); } catch (er) { setErr(er.message); }
// //     e.target.value = '';
// //   };
// //   const save = async e => {
// //     e.preventDefault(); setErr('');
// //     try {
// //       const body = { ...f, rating: Number(f.rating) || 0, duration: Number(f.duration) || 0 };
// //       await api(editing ? '/admin/movies/' + editing : '/admin/movies', editing ? 'PUT' : 'POST', body);
// //       reset(); load(); onChange();
// //     } catch (e) { setErr(e.message); }
// //   };
// //   const edit = m => {
// //     setEditing(m._id); window.scrollTo(0, 0);
// //     setF({ title: m.title || '', genre: m.genre || '', rating: m.rating ?? '', duration: m.duration ?? '', poster: m.poster || '', description: m.description || '' });
// //   };
// //   const del = async m => {
// //     if (!window.confirm('Delete "' + m.title + '" with all its showtimes and bookings?')) return;
// //     try { await api('/admin/movies/' + m._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); }
// //   };
// //   return (<>
// //     <form className="panel mb-4" onSubmit={save}>
// //       <h5>{editing ? 'Edit movie' : 'Add a new movie'}</h5><Err msg={err} />
// //       <div className="row g-2">
// //         <div className="col-md-6"><input className="inp" placeholder="Title *" value={f.title} onChange={set('title')} /></div>
// //         <div className="col-md-6"><input className="inp" placeholder="Genre (Action, Comedy...)" value={f.genre} onChange={set('genre')} /></div>
// //         <div className="col-md-3"><input className="inp" type="number" step="0.1" min="0" max="10" placeholder="Rating (0-10)" value={f.rating} onChange={set('rating')} /></div>
// //         <div className="col-md-3"><input className="inp" type="number" min="1" placeholder="Duration (min)" value={f.duration} onChange={set('duration')} /></div>
// //         <div className="col-md-6 d-flex align-items-center gap-3 mb-2">
// //           {f.poster
// //             ? <img src={f.poster} alt="" style={{ width: 52, height: 72, objectFit: 'cover', borderRadius: 6 }} />
// //             : <div className="muted text-center" style={{ width: 52, height: 72, border: '1px dashed #262d47', borderRadius: 6, fontSize: '.65rem', paddingTop: 22 }}>No poster</div>}
// //           <div>
// //             <div className="muted mb-1">Movie poster</div>
// //             <input type="file" accept="image/*" className="form-control form-control-sm" onChange={choosePoster} />
// //             {f.poster && <button type="button" className="btn btn-link btn-sm p-0 mt-1" onClick={() => setF({ ...f, poster: '' })}>Remove poster</button>}
// //           </div>
// //         </div>
// //         <div className="col-12"><textarea className="inp" rows="2" placeholder="Description" value={f.description} onChange={set('description')} /></div>
// //       </div>
// //       <button className="btn-main me-2">{editing ? 'Save changes' : 'Add movie'}</button>
// //       {editing && <button type="button" className="btn-ghost" onClick={reset}>Cancel</button>}
// //     </form>
// //     <div className="table-responsive"><table className="table table-dark table-hover align-middle">
// //       <thead><tr><th></th><th>Title</th><th>Genre</th><th>Rating</th><th>Min</th><th></th></tr></thead>
// //       <tbody>{list.map(m => (
// //         <tr key={m._id}>
// //           <td style={{ width: 56 }}>{m.poster ? <img src={m.poster} alt="" style={{ width: 36, height: 50, objectFit: 'cover', borderRadius: 4 }} /> : null}</td>
// //           <td>{m.title}</td><td>{m.genre}</td><td>{m.rating}</td><td>{m.duration}</td>
// //           <td className="text-end text-nowrap">
// //             <button className="btn-ghost me-2" onClick={() => edit(m)}>Edit</button>
// //             <button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => del(m)}>Delete</button>
// //           </td></tr>
// //       ))}</tbody>
// //     </table></div>
// //   </>);
// // }

// // function ShowtimesTab({ onChange }) {
// //   const [list, setList] = useState([]); const [movies, setMovies] = useState([]);
// //   const [f, setF] = useState({ movie: '', time: '', totalSeats: 40 }); const [editing, setEditing] = useState(null); const [err, setErr] = useState('');
// //   const load = () => { api('/admin/showtimes').then(setList).catch(e => setErr(e.message)); api('/movies').then(setMovies).catch(() => {}); };
// //   useEffect(() => { load(); }, []);
// //   const save = async e => {
// //     e.preventDefault(); setErr('');
// //     if (!f.movie || !f.time) return setErr('Pick a movie and a date/time');
// //     try {
// //       const body = { movie: f.movie, time: new Date(f.time).toISOString(), totalSeats: Number(f.totalSeats) };
// //       await api(editing ? '/admin/showtimes/' + editing : '/admin/showtimes', editing ? 'PUT' : 'POST', body);
// //       setF({ movie: f.movie, time: '', totalSeats: 40 }); setEditing(null); load(); onChange();
// //     } catch (e) { setErr(e.message); }
// //   };
// //   const edit = s => { setEditing(s._id); setF({ movie: s.movie?._id || '', time: localInput(s.time), totalSeats: s.totalSeats }); window.scrollTo(0, 0); };
// //   const del = async s => {
// //     if (!window.confirm('Delete this showtime and its bookings?')) return;
// //     try { await api('/admin/showtimes/' + s._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); }
// //   };
// //   return (<>
// //     <form className="panel mb-4" onSubmit={save}>
// //       <h5>{editing ? 'Edit showtime' : 'Assign a movie to a showtime'}</h5><Err msg={err} />
// //       <div className="row g-2">
// //         <div className="col-md-5"><select className="inp" value={f.movie} onChange={e => setF({ ...f, movie: e.target.value })}>
// //           <option value="">Select movie...</option>{movies.map(m => <option key={m._id} value={m._id}>{m.title}</option>)}</select></div>
// //         <div className="col-md-4"><input className="inp" type="datetime-local" value={f.time} onChange={e => setF({ ...f, time: e.target.value })} /></div>
// //         <div className="col-md-3"><input className="inp" type="number" min="8" max="96" placeholder="Seats" value={f.totalSeats} onChange={e => setF({ ...f, totalSeats: e.target.value })} /></div>
// //       </div>
// //       <button className="btn-main me-2">{editing ? 'Save changes' : 'Assign showtime'}</button>
// //       {editing && <button type="button" className="btn-ghost" onClick={() => { setEditing(null); setF({ movie: '', time: '', totalSeats: 40 }); }}>Cancel</button>}
// //     </form>
// //     <div className="table-responsive"><table className="table table-dark table-hover align-middle">
// //       <thead><tr><th>Movie</th><th>Date and time</th><th>Booked</th><th></th></tr></thead>
// //       <tbody>{list.map(s => (
// //         <tr key={s._id}><td>{s.movie?.title || '(deleted)'}</td><td>{fmt(s.time)}</td><td>{s.bookedSeats.length} / {s.totalSeats}</td>
// //           <td className="text-end text-nowrap">
// //             <button className="btn-ghost me-2" onClick={() => edit(s)}>Edit</button>
// //             <button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => del(s)}>Delete</button>
// //           </td></tr>
// //       ))}</tbody>
// //     </table></div>
// //   </>);
// // }

// // function BookingsTab({ onChange }) {
// //   const [list, setList] = useState([]); const [err, setErr] = useState('');
// //   const load = () => api('/admin/bookings').then(setList).catch(e => setErr(e.message));
// //   useEffect(() => { load(); }, []);
// //   const cancel = async b => {
// //     if (!window.confirm('Cancel this booking and free the seats?')) return;
// //     try { await api('/admin/bookings/' + b._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); }
// //   };
// //   return (<><Err msg={err} />
// //     {list.length === 0 && <p className="muted">No bookings yet.</p>}
// //     <div className="table-responsive"><table className="table table-dark table-hover align-middle">
// //       <thead><tr><th>User</th><th>Movie</th><th>Showtime</th><th>Seats</th><th></th></tr></thead>
// //       <tbody>{list.map(b => (
// //         <tr key={b._id}><td>{b.user?.name}<div className="muted">{b.user?.email}</div></td>
// //           <td>{b.showtime?.movie?.title}</td><td>{b.showtime && fmt(b.showtime.time)}</td>
// //           <td>{b.seats.map(seatName).join(', ')}</td>
// //           <td className="text-end"><button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => cancel(b)}>Cancel</button></td></tr>
// //       ))}</tbody>
// //     </table></div>
// //   </>);
// // }

// // function Panel() {
// //   const [tab, setTab] = useState('movies'); const [s, setS] = useState({});
// //   const loadStats = () => api('/admin/stats').then(setS).catch(() => {});
// //   useEffect(() => { loadStats(); }, []);
// //   const stats = [['Movies', s.movies], ['Showtimes', s.showtimes], ['Bookings', s.bookings], ['Users', s.users], ['Revenue', '₹' + (s.seats || 0) * PRICE]];
// //   return (
// //     <div className="wrap">
// //       <h3 className="mb-3">Admin Panel</h3>
// //       <div className="row g-3 mb-4">{stats.map(([k, v]) => (
// //         <div className="col-6 col-md" key={k}><div className="panel text-center"><div className="muted">{k}</div><h4 className="m-0">{v ?? '-'}</h4></div></div>
// //       ))}</div>
// //       <div className="d-flex gap-2 mb-4">
// //         {[['movies', 'Movies'], ['showtimes', 'Showtimes'], ['bookings', 'Bookings']].map(([k, label]) =>
// //           <button key={k} className={'gchip ' + (tab === k ? 'on' : '')} onClick={() => setTab(k)}>{label}</button>)}
// //       </div>
// //       {tab === 'movies' && <MoviesTab onChange={loadStats} />}
// //       {tab === 'showtimes' && <ShowtimesTab onChange={loadStats} />}
// //       {tab === 'bookings' && <BookingsTab onChange={loadStats} />}
// //     </div>
// //   );
// // }

// // export default function Admin() {
// //   if (localStorage.getItem('role') !== 'admin') return <Navigate to="/" />;
// //   return <Panel />;
// // }
// import { useState, useEffect } from 'react';
// import { Navigate } from 'react-router-dom';
// import { api } from './api';

// const PRICE = 200;
// const fmt = d => new Date(d).toLocaleString([], { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
// const localInput = d => { const t = new Date(d); t.setMinutes(t.getMinutes() - t.getTimezoneOffset()); return t.toISOString().slice(0, 16); };
// const seatName = n => String.fromCharCode(65 + Math.floor((n - 1) / 8)) + (((n - 1) % 8) + 1);
// const Err = ({ msg }) => msg ? <div className="err">{msg}</div> : null;

// // Shrinks any chosen image to max 600px and returns it as a small JPEG data URL (stored in the database)
// const toDataUrl = file => new Promise((resolve, reject) => {
//   if (!file.type.startsWith('image/')) return reject(new Error('Please choose an image file'));
//   const img = new Image(), url = URL.createObjectURL(file);
//   img.onload = () => {
//     const k = Math.min(1, 600 / Math.max(img.width, img.height));
//     const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
//     const ctx = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
//     ctx.drawImage(img, 0, 0, c.width, c.height);
//     URL.revokeObjectURL(url); resolve(c.toDataURL('image/jpeg', 0.82));
//   };
//   img.onerror = () => reject(new Error('Could not read that image'));
//   img.src = url;
// });

// const EMPTY = { title: '', genre: '', rating: '', duration: '', poster: '', description: '', director: '', cast: '', language: '', year: '', certificate: '', story: '' };

// function MoviesTab({ onChange }) {
//   const [list, setList] = useState([]); const [f, setF] = useState(EMPTY);
//   const [editing, setEditing] = useState(null); const [err, setErr] = useState('');
//   const load = () => api('/movies').then(setList).catch(e => setErr(e.message));
//   useEffect(() => { load(); }, []);
//   const set = k => e => setF({ ...f, [k]: e.target.value });
//   const reset = () => { setF(EMPTY); setEditing(null); };
//   const choosePoster = async e => {
//     const file = e.target.files[0]; if (!file) return;
//     try { setErr(''); setF({ ...f, poster: await toDataUrl(file) }); } catch (er) { setErr(er.message); }
//     e.target.value = '';
//   };
//   const save = async e => {
//     e.preventDefault(); setErr('');
//     try {
//       const body = { ...f, rating: Number(f.rating) || 0, duration: Number(f.duration) || 0, year: Number(f.year) || 0 };
//       await api(editing ? '/admin/movies/' + editing : '/admin/movies', editing ? 'PUT' : 'POST', body);
//       reset(); load(); onChange();
//     } catch (e) { setErr(e.message); }
//   };
//   const edit = m => {
//     setEditing(m._id); window.scrollTo(0, 0);
//     setF({ title: m.title || '', genre: m.genre || '', rating: m.rating ?? '', duration: m.duration ?? '', poster: m.poster || '', description: m.description || '', director: m.director || '', cast: m.cast || '', language: m.language || '', year: m.year ?? '', certificate: m.certificate || '', story: m.story || '' });
//   };
//   const del = async m => {
//     if (!window.confirm('Delete "' + m.title + '" with all its showtimes and bookings?')) return;
//     try { await api('/admin/movies/' + m._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); }
//   };
//   return (<>
//     <form className="panel mb-4" onSubmit={save}>
//       <h5>{editing ? 'Edit movie' : 'Add a new movie'}</h5><Err msg={err} />
//       <div className="row g-2">
//         <div className="col-md-6"><input className="inp" placeholder="Title *" value={f.title} onChange={set('title')} /></div>
//         <div className="col-md-6"><input className="inp" placeholder="Genre (Action, Comedy...)" value={f.genre} onChange={set('genre')} /></div>
//         <div className="col-md-3"><input className="inp" type="number" step="0.1" min="0" max="10" placeholder="Rating (0-10)" value={f.rating} onChange={set('rating')} /></div>
//         <div className="col-md-3"><input className="inp" type="number" min="1" placeholder="Duration (min)" value={f.duration} onChange={set('duration')} /></div>
//         <div className="col-md-6 d-flex align-items-center gap-3 mb-2">
//           {f.poster
//             ? <img src={f.poster} alt="" style={{ width: 52, height: 72, objectFit: 'cover', borderRadius: 6 }} />
//             : <div className="muted text-center" style={{ width: 52, height: 72, border: '1px dashed #262d47', borderRadius: 6, fontSize: '.65rem', paddingTop: 22 }}>No poster</div>}
//           <div>
//             <div className="muted mb-1">Movie poster</div>
//             <input type="file" accept="image/*" className="form-control form-control-sm" onChange={choosePoster} />
//             {f.poster && <button type="button" className="btn btn-link btn-sm p-0 mt-1" onClick={() => setF({ ...f, poster: '' })}>Remove poster</button>}
//           </div>
//         </div>
//         <div className="col-12"><textarea className="inp" rows="2" placeholder="Short description (shown on the home banner)" value={f.description} onChange={set('description')} /></div>
//         <div className="col-md-4"><input className="inp" placeholder="Director" value={f.director} onChange={set('director')} /></div>
//         <div className="col-md-8"><input className="inp" placeholder="Cast (comma separated)" value={f.cast} onChange={set('cast')} /></div>
//         <div className="col-md-4"><input className="inp" placeholder="Language" value={f.language} onChange={set('language')} /></div>
//         <div className="col-md-4"><input className="inp" type="number" placeholder="Release year" value={f.year} onChange={set('year')} /></div>
//         <div className="col-md-4"><input className="inp" placeholder="Certificate (U, U/A, A)" value={f.certificate} onChange={set('certificate')} /></div>
//         <div className="col-12"><textarea className="inp" rows="3" placeholder="Full story / synopsis (shown on the movie page)" value={f.story} onChange={set('story')} /></div>
//       </div>
//       <button className="btn-main me-2">{editing ? 'Save changes' : 'Add movie'}</button>
//       {editing && <button type="button" className="btn-ghost" onClick={reset}>Cancel</button>}
//     </form>
//     <div className="table-responsive"><table className="table table-dark table-hover align-middle">
//       <thead><tr><th></th><th>Title</th><th>Genre</th><th>Rating</th><th>Min</th><th></th></tr></thead>
//       <tbody>{list.map(m => (
//         <tr key={m._id}>
//           <td style={{ width: 56 }}>{m.poster ? <img src={m.poster} alt="" style={{ width: 36, height: 50, objectFit: 'cover', borderRadius: 4 }} /> : null}</td>
//           <td>{m.title}</td><td>{m.genre}</td><td>{m.rating}</td><td>{m.duration}</td>
//           <td className="text-end text-nowrap">
//             <button className="btn-ghost me-2" onClick={() => edit(m)}>Edit</button>
//             <button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => del(m)}>Delete</button>
//           </td></tr>
//       ))}</tbody>
//     </table></div>
//   </>);
// }

// function ShowtimesTab({ onChange }) {
//   const [list, setList] = useState([]); const [movies, setMovies] = useState([]);
//   const [f, setF] = useState({ movie: '', time: '', totalSeats: 40 }); const [editing, setEditing] = useState(null); const [err, setErr] = useState('');
//   const load = () => { api('/admin/showtimes').then(setList).catch(e => setErr(e.message)); api('/movies').then(setMovies).catch(() => {}); };
//   useEffect(() => { load(); }, []);
//   const save = async e => {
//     e.preventDefault(); setErr('');
//     if (!f.movie || !f.time) return setErr('Pick a movie and a date/time');
//     try {
//       const body = { movie: f.movie, time: new Date(f.time).toISOString(), totalSeats: Number(f.totalSeats) };
//       await api(editing ? '/admin/showtimes/' + editing : '/admin/showtimes', editing ? 'PUT' : 'POST', body);
//       setF({ movie: f.movie, time: '', totalSeats: 40 }); setEditing(null); load(); onChange();
//     } catch (e) { setErr(e.message); }
//   };
//   const edit = s => { setEditing(s._id); setF({ movie: s.movie?._id || '', time: localInput(s.time), totalSeats: s.totalSeats }); window.scrollTo(0, 0); };
//   const del = async s => {
//     if (!window.confirm('Delete this showtime and its bookings?')) return;
//     try { await api('/admin/showtimes/' + s._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); }
//   };
//   return (<>
//     <form className="panel mb-4" onSubmit={save}>
//       <h5>{editing ? 'Edit showtime' : 'Assign a movie to a showtime'}</h5><Err msg={err} />
//       <div className="row g-2">
//         <div className="col-md-5"><select className="inp" value={f.movie} onChange={e => setF({ ...f, movie: e.target.value })}>
//           <option value="">Select movie...</option>{movies.map(m => <option key={m._id} value={m._id}>{m.title}</option>)}</select></div>
//         <div className="col-md-4"><input className="inp" type="datetime-local" value={f.time} onChange={e => setF({ ...f, time: e.target.value })} /></div>
//         <div className="col-md-3"><input className="inp" type="number" min="8" max="96" placeholder="Seats" value={f.totalSeats} onChange={e => setF({ ...f, totalSeats: e.target.value })} /></div>
//       </div>
//       <button className="btn-main me-2">{editing ? 'Save changes' : 'Assign showtime'}</button>
//       {editing && <button type="button" className="btn-ghost" onClick={() => { setEditing(null); setF({ movie: '', time: '', totalSeats: 40 }); }}>Cancel</button>}
//     </form>
//     <div className="table-responsive"><table className="table table-dark table-hover align-middle">
//       <thead><tr><th>Movie</th><th>Date and time</th><th>Booked</th><th></th></tr></thead>
//       <tbody>{list.map(s => (
//         <tr key={s._id}><td>{s.movie?.title || '(deleted)'}</td><td>{fmt(s.time)}</td><td>{s.bookedSeats.length} / {s.totalSeats}</td>
//           <td className="text-end text-nowrap">
//             <button className="btn-ghost me-2" onClick={() => edit(s)}>Edit</button>
//             <button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => del(s)}>Delete</button>
//           </td></tr>
//       ))}</tbody>
//     </table></div>
//   </>);
// }

// function BookingsTab({ onChange }) {
//   const [list, setList] = useState([]); const [err, setErr] = useState('');
//   const load = () => api('/admin/bookings').then(setList).catch(e => setErr(e.message));
//   useEffect(() => { load(); }, []);
//   const cancel = async b => {
//     if (!window.confirm('Cancel this booking and free the seats?')) return;
//     try { await api('/admin/bookings/' + b._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); }
//   };
//   return (<><Err msg={err} />
//     {list.length === 0 && <p className="muted">No bookings yet.</p>}
//     <div className="table-responsive"><table className="table table-dark table-hover align-middle">
//       <thead><tr><th>User</th><th>Movie</th><th>Showtime</th><th>Seats</th><th></th></tr></thead>
//       <tbody>{list.map(b => (
//         <tr key={b._id}><td>{b.user?.name}<div className="muted">{b.user?.email}</div></td>
//           <td>{b.showtime?.movie?.title}</td><td>{b.showtime && fmt(b.showtime.time)}</td>
//           <td>{b.seats.map(seatName).join(', ')}</td>
//           <td className="text-end"><button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => cancel(b)}>Cancel</button></td></tr>
//       ))}</tbody>
//     </table></div>
//   </>);
// }

// function Panel() {
//   const [tab, setTab] = useState('movies'); const [s, setS] = useState({});
//   const loadStats = () => api('/admin/stats').then(setS).catch(() => {});
//   useEffect(() => { loadStats(); }, []);
//   const stats = [['Movies', s.movies], ['Showtimes', s.showtimes], ['Bookings', s.bookings], ['Users', s.users], ['Revenue', '₹' + (s.seats || 0) * PRICE]];
//   return (
//     <div className="wrap">
//       <h3 className="mb-3">Admin Panel</h3>
//       <div className="row g-3 mb-4">{stats.map(([k, v]) => (
//         <div className="col-6 col-md" key={k}><div className="panel text-center"><div className="muted">{k}</div><h4 className="m-0">{v ?? '-'}</h4></div></div>
//       ))}</div>
//       <div className="d-flex gap-2 mb-4">
//         {[['movies', 'Movies'], ['showtimes', 'Showtimes'], ['bookings', 'Bookings']].map(([k, label]) =>
//           <button key={k} className={'gchip ' + (tab === k ? 'on' : '')} onClick={() => setTab(k)}>{label}</button>)}
//       </div>
//       {tab === 'movies' && <MoviesTab onChange={loadStats} />}
//       {tab === 'showtimes' && <ShowtimesTab onChange={loadStats} />}
//       {tab === 'bookings' && <BookingsTab onChange={loadStats} />}
//     </div>
//   );
// }

// export default function Admin() {
//   if (localStorage.getItem('role') !== 'admin') return <Navigate to="/" />;
//   return <Panel />;
// }
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { api } from './api';

const PRICE = 200;
const fmt = d => new Date(d).toLocaleString([], { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' });
const localInput = d => { const t = new Date(d); t.setMinutes(t.getMinutes() - t.getTimezoneOffset()); return t.toISOString().slice(0, 16); };
const seatName = n => String.fromCharCode(65 + Math.floor((n - 1) / 8)) + (((n - 1) % 8) + 1);
const Err = ({ msg }) => msg ? <div className="err">{msg}</div> : null;

// Shrinks any chosen image to max 600px and returns it as a small JPEG data URL (stored in the database)
const toDataUrl = file => new Promise((resolve, reject) => {
  if (!file.type.startsWith('image/')) return reject(new Error('Please choose an image file'));
  const img = new Image(), url = URL.createObjectURL(file);
  img.onload = () => {
    const k = Math.min(1, 600 / Math.max(img.width, img.height));
    const c = document.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
    const ctx = c.getContext('2d'); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
    ctx.drawImage(img, 0, 0, c.width, c.height);
    URL.revokeObjectURL(url); resolve(c.toDataURL('image/jpeg', 0.82));
  };
  img.onerror = () => reject(new Error('Could not read that image'));
  img.src = url;
});

function ConfirmModal({ c, onClose }) {
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    const k = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k);
  }, []);
  const go = async () => { setBusy(true); await c.onConfirm(); onClose(); };
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <div className="modal-icon">{c.icon || '🗑'}</div>
        <h4>{c.title}</h4>
        <p className="muted mb-0">{c.message}</p>
        <div className="d-flex gap-2 justify-content-center mt-4">
          <button className="btn-ghost" onClick={onClose}>Keep it</button>
          <button className="btn-danger2" disabled={busy} onClick={go}>{busy ? 'Please wait...' : c.confirmText}</button>
        </div>
      </div>
    </div>
  );
}

const EMPTY = { title: '', genre: '', rating: '', duration: '', poster: '', description: '', director: '', cast: '', language: '', year: '', certificate: '', story: '' };

function MoviesTab({ onChange, ask }) {
  const [list, setList] = useState([]); const [f, setF] = useState(EMPTY);
  const [editing, setEditing] = useState(null); const [err, setErr] = useState('');
  const load = () => api('/movies').then(setList).catch(e => setErr(e.message));
  useEffect(() => { load(); }, []);
  const set = k => e => setF({ ...f, [k]: e.target.value });
  const reset = () => { setF(EMPTY); setEditing(null); };
  const choosePoster = async e => {
    const file = e.target.files[0]; if (!file) return;
    try { setErr(''); setF({ ...f, poster: await toDataUrl(file) }); } catch (er) { setErr(er.message); }
    e.target.value = '';
  };
  const save = async e => {
    e.preventDefault(); setErr('');
    try {
      const body = { ...f, rating: Number(f.rating) || 0, duration: Number(f.duration) || 0, year: Number(f.year) || 0 };
      await api(editing ? '/admin/movies/' + editing : '/admin/movies', editing ? 'PUT' : 'POST', body);
      reset(); load(); onChange();
    } catch (e) { setErr(e.message); }
  };
  const edit = m => {
    setEditing(m._id); window.scrollTo(0, 0);
    setF({ title: m.title || '', genre: m.genre || '', rating: m.rating ?? '', duration: m.duration ?? '', poster: m.poster || '', description: m.description || '', director: m.director || '', cast: m.cast || '', language: m.language || '', year: m.year ?? '', certificate: m.certificate || '', story: m.story || '' });
  };
  const del = m => ask({ icon: '🎬', title: 'Delete "' + m.title + '"?', message: 'This also removes all its showtimes and bookings. This cannot be undone.', confirmText: 'Yes, delete',
    onConfirm: async () => { try { await api('/admin/movies/' + m._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); } } });
  return (<>
    <form className="panel mb-4" onSubmit={save}>
      <h5>{editing ? 'Edit movie' : 'Add a new movie'}</h5><Err msg={err} />
      <div className="row g-2">
        <div className="col-md-6"><input className="inp" placeholder="Title *" value={f.title} onChange={set('title')} /></div>
        <div className="col-md-6"><input className="inp" placeholder="Genre (Action, Comedy...)" value={f.genre} onChange={set('genre')} /></div>
        <div className="col-md-3"><input className="inp" type="number" step="0.1" min="0" max="10" placeholder="Rating (0-10)" value={f.rating} onChange={set('rating')} /></div>
        <div className="col-md-3"><input className="inp" type="number" min="1" placeholder="Duration (min)" value={f.duration} onChange={set('duration')} /></div>
        <div className="col-md-6 d-flex align-items-center gap-3 mb-2">
          {f.poster
            ? <img src={f.poster} alt="" style={{ width: 52, height: 72, objectFit: 'cover', borderRadius: 6 }} />
            : <div className="muted text-center" style={{ width: 52, height: 72, border: '1px dashed #262d47', borderRadius: 6, fontSize: '.65rem', paddingTop: 22 }}>No poster</div>}
          <div>
            <div className="muted mb-1">Movie poster</div>
            <input type="file" accept="image/*" className="form-control form-control-sm" onChange={choosePoster} />
            {f.poster && <button type="button" className="btn btn-link btn-sm p-0 mt-1" onClick={() => setF({ ...f, poster: '' })}>Remove poster</button>}
          </div>
        </div>
        <div className="col-12"><textarea className="inp" rows="2" placeholder="Short description (shown on the home banner)" value={f.description} onChange={set('description')} /></div>
        <div className="col-md-4"><input className="inp" placeholder="Director" value={f.director} onChange={set('director')} /></div>
        <div className="col-md-8"><input className="inp" placeholder="Cast (comma separated)" value={f.cast} onChange={set('cast')} /></div>
        <div className="col-md-4"><input className="inp" placeholder="Language" value={f.language} onChange={set('language')} /></div>
        <div className="col-md-4"><input className="inp" type="number" placeholder="Release year" value={f.year} onChange={set('year')} /></div>
        <div className="col-md-4"><input className="inp" placeholder="Certificate (U, U/A, A)" value={f.certificate} onChange={set('certificate')} /></div>
        <div className="col-12"><textarea className="inp" rows="3" placeholder="Full story / synopsis (shown on the movie page)" value={f.story} onChange={set('story')} /></div>
      </div>
      <button className="btn-main me-2">{editing ? 'Save changes' : 'Add movie'}</button>
      {editing && <button type="button" className="btn-ghost" onClick={reset}>Cancel</button>}
    </form>
    <div className="table-responsive"><table className="table table-dark table-hover align-middle">
      <thead><tr><th></th><th>Title</th><th>Genre</th><th>Rating</th><th>Min</th><th></th></tr></thead>
      <tbody>{list.map(m => (
        <tr key={m._id}>
          <td style={{ width: 56 }}>{m.poster ? <img src={m.poster} alt="" style={{ width: 36, height: 50, objectFit: 'cover', borderRadius: 4 }} /> : null}</td>
          <td>{m.title}</td><td>{m.genre}</td><td>{m.rating}</td><td>{m.duration}</td>
          <td className="text-end text-nowrap">
            <button className="btn-ghost me-2" onClick={() => edit(m)}>Edit</button>
            <button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => del(m)}>Delete</button>
          </td></tr>
      ))}</tbody>
    </table></div>
  </>);
}

function ShowtimesTab({ onChange, ask }) {
  const [list, setList] = useState([]); const [movies, setMovies] = useState([]);
  const [f, setF] = useState({ movie: '', time: '', totalSeats: 40 }); const [editing, setEditing] = useState(null); const [err, setErr] = useState('');
  const load = () => { api('/admin/showtimes').then(setList).catch(e => setErr(e.message)); api('/movies').then(setMovies).catch(() => {}); };
  useEffect(() => { load(); }, []);
  const save = async e => {
    e.preventDefault(); setErr('');
    if (!f.movie || !f.time) return setErr('Pick a movie and a date/time');
    try {
      const body = { movie: f.movie, time: new Date(f.time).toISOString(), totalSeats: Number(f.totalSeats) };
      await api(editing ? '/admin/showtimes/' + editing : '/admin/showtimes', editing ? 'PUT' : 'POST', body);
      setF({ movie: f.movie, time: '', totalSeats: 40 }); setEditing(null); load(); onChange();
    } catch (e) { setErr(e.message); }
  };
  const edit = s => { setEditing(s._id); setF({ movie: s.movie?._id || '', time: localInput(s.time), totalSeats: s.totalSeats }); window.scrollTo(0, 0); };
  const del = s => ask({ icon: '🕒', title: 'Delete this showtime?', message: (s.movie?.title || 'This movie') + ' at ' + fmt(s.time) + '. Its bookings will be removed too.', confirmText: 'Yes, delete',
    onConfirm: async () => { try { await api('/admin/showtimes/' + s._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); } } });
  return (<>
    <form className="panel mb-4" onSubmit={save}>
      <h5>{editing ? 'Edit showtime' : 'Assign a movie to a showtime'}</h5><Err msg={err} />
      <div className="row g-2">
        <div className="col-md-5"><select className="inp" value={f.movie} onChange={e => setF({ ...f, movie: e.target.value })}>
          <option value="">Select movie...</option>{movies.map(m => <option key={m._id} value={m._id}>{m.title}</option>)}</select></div>
        <div className="col-md-4"><input className="inp" type="datetime-local" value={f.time} onChange={e => setF({ ...f, time: e.target.value })} /></div>
        <div className="col-md-3"><input className="inp" type="number" min="8" max="96" placeholder="Seats" value={f.totalSeats} onChange={e => setF({ ...f, totalSeats: e.target.value })} /></div>
      </div>
      <button className="btn-main me-2">{editing ? 'Save changes' : 'Assign showtime'}</button>
      {editing && <button type="button" className="btn-ghost" onClick={() => { setEditing(null); setF({ movie: '', time: '', totalSeats: 40 }); }}>Cancel</button>}
    </form>
    <div className="table-responsive"><table className="table table-dark table-hover align-middle">
      <thead><tr><th>Movie</th><th>Date and time</th><th>Booked</th><th></th></tr></thead>
      <tbody>{list.map(s => (
        <tr key={s._id}><td>{s.movie?.title || '(deleted)'}</td><td>{fmt(s.time)}</td><td>{s.bookedSeats.length} / {s.totalSeats}</td>
          <td className="text-end text-nowrap">
            <button className="btn-ghost me-2" onClick={() => edit(s)}>Edit</button>
            <button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => del(s)}>Delete</button>
          </td></tr>
      ))}</tbody>
    </table></div>
  </>);
}

function BookingsTab({ onChange, ask }) {
  const [list, setList] = useState([]); const [err, setErr] = useState('');
  const load = () => api('/admin/bookings').then(setList).catch(e => setErr(e.message));
  useEffect(() => { load(); }, []);
  const cancel = b => ask({ icon: '🎟', title: 'Cancel this booking?', message: 'The seats will be freed for other people to book.', confirmText: 'Yes, cancel it',
    onConfirm: async () => { try { await api('/admin/bookings/' + b._id, 'DELETE'); load(); onChange(); } catch (e) { setErr(e.message); } } });
  return (<><Err msg={err} />
    {list.length === 0 && <p className="muted">No bookings yet.</p>}
    <div className="table-responsive"><table className="table table-dark table-hover align-middle">
      <thead><tr><th>User</th><th>Movie</th><th>Showtime</th><th>Seats</th><th></th></tr></thead>
      <tbody>{list.map(b => (
        <tr key={b._id}><td>{b.user?.name}<div className="muted">{b.user?.email}</div></td>
          <td>{b.showtime?.movie?.title}</td><td>{b.showtime && fmt(b.showtime.time)}</td>
          <td>{b.seats.map(seatName).join(', ')}</td>
          <td className="text-end"><button className="btn-ghost" style={{ color: '#ff6b81' }} onClick={() => cancel(b)}>Cancel</button></td></tr>
      ))}</tbody>
    </table></div>
  </>);
}

function Panel() {
  const [tab, setTab] = useState('movies'); const [s, setS] = useState({}); const [confirm, setConfirm] = useState(null);
  const loadStats = () => api('/admin/stats').then(setS).catch(() => {});
  useEffect(() => { loadStats(); }, []);
  const stats = [['Movies', s.movies], ['Showtimes', s.showtimes], ['Bookings', s.bookings], ['Users', s.users], ['Revenue', '₹' + (s.seats || 0) * PRICE]];
  return (
    <div className="wrap">
      <h3 className="mb-3">Admin Panel</h3>
      <div className="row g-3 mb-4">{stats.map(([k, v]) => (
        <div className="col-6 col-md" key={k}><div className="panel text-center"><div className="muted">{k}</div><h4 className="m-0">{v ?? '-'}</h4></div></div>
      ))}</div>
      <div className="d-flex gap-2 mb-4">
        {[['movies', 'Movies'], ['showtimes', 'Showtimes'], ['bookings', 'Bookings']].map(([k, label]) =>
          <button key={k} className={'gchip ' + (tab === k ? 'on' : '')} onClick={() => setTab(k)}>{label}</button>)}
      </div>
      {tab === 'movies' && <MoviesTab onChange={loadStats} ask={setConfirm} />}
      {tab === 'showtimes' && <ShowtimesTab onChange={loadStats} ask={setConfirm} />}
      {tab === 'bookings' && <BookingsTab onChange={loadStats} ask={setConfirm} />}
      {confirm && <ConfirmModal c={confirm} onClose={() => setConfirm(null)} />}
    </div>
  );
}

export default function Admin() {
  if (localStorage.getItem('role') !== 'admin') return <Navigate to="/" />;
  return <Panel />;
}