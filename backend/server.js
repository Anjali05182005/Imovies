// // // const dns = require("node:dns");
// // // dns.setServers(["8.8.8.8", "1.1.1.1"]);
// // // require('dotenv').config();
// // // const express = require('express'), mongoose = require('mongoose'), cors = require('cors');
// // // const bcrypt = require('bcryptjs'), jwt = require('jsonwebtoken');
// // // const { User, Movie, Showtime, Booking } = require('./models');

// // // const app = express();
// // // app.use(cors(), express.json());

// // // const sign = u => jwt.sign({ id: u._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
// // // const auth = (req, res, next) => {
// // //   try {
// // //     req.userId = jwt.verify((req.headers.authorization || '').replace('Bearer ', ''), process.env.JWT_SECRET).id;
// // //     next();
// // //   } catch { res.status(401).json({ error: 'Please login first' }); }
// // // };
// // // const wrap = f => (req, res) => f(req, res).catch(e => res.status(500).json({ error: e.message }));

// // // app.post('/api/register', wrap(async (req, res) => {
// // //   const { name, email, password } = req.body;
// // //   if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required' });
// // //   if (await User.findOne({ email })) return res.status(400).json({ error: 'Email already used' });
// // //   const u = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
// // //   res.json({ token: sign(u), name: u.name });
// // // }));

// // // app.post('/api/login', wrap(async (req, res) => {
// // //   const u = await User.findOne({ email: req.body.email });
// // //   if (!u || !(await bcrypt.compare(req.body.password || '', u.password)))
// // //     return res.status(400).json({ error: 'Wrong email or password' });
// // //   res.json({ token: sign(u), name: u.name });
// // // }));

// // // app.get('/api/movies', wrap(async (req, res) => res.json(await Movie.find())));

// // // app.get('/api/movies/:id', wrap(async (req, res) => {
// // //   const movie = await Movie.findById(req.params.id);
// // //   if (!movie) return res.status(404).json({ error: 'Movie not found' });
// // //   const showtimes = await Showtime.find({ movie: movie._id, time: { $gte: new Date() } }).sort('time');
// // //   res.json({ movie, showtimes });
// // // }));

// // // app.get('/api/showtimes/:id', wrap(async (req, res) => {
// // //   const st = await Showtime.findById(req.params.id).populate('movie');
// // //   if (!st) return res.status(404).json({ error: 'Showtime not found' });
// // //   res.json(st);
// // // }));

// // // // The important part: booking is ONE atomic database update, so two people can never get the same seat.
// // // app.post('/api/book', auth, wrap(async (req, res) => {
// // //   const { showtimeId, seats } = req.body;
// // //   if (!Array.isArray(seats) || !seats.length) return res.status(400).json({ error: 'Pick at least one seat' });
// // //   const st = await Showtime.findById(showtimeId);
// // //   if (!st) return res.status(404).json({ error: 'Showtime not found' });
// // //   if (seats.some(s => !Number.isInteger(s) || s < 1 || s > st.totalSeats))
// // //     return res.status(400).json({ error: 'Invalid seat' });
// // //   const r = await Showtime.updateOne(
// // //     { _id: showtimeId, bookedSeats: { $nin: seats } },
// // //     { $push: { bookedSeats: { $each: seats } } }
// // //   );
// // //   if (r.modifiedCount === 0) return res.status(409).json({ error: 'Some seats were just taken. Pick again.' });
// // //   res.json(await Booking.create({ user: req.userId, showtime: showtimeId, seats }));
// // // }));

// // // app.get('/api/bookings', auth, wrap(async (req, res) => {
// // //   const list = await Booking.find({ user: req.userId }).sort('-createdAt')
// // //     .populate({ path: 'showtime', populate: { path: 'movie' } });
// // //   res.json(list);
// // // }));

// // // mongoose.connect(process.env.MONGO_URI).then(() =>
// // //   app.listen(process.env.PORT || 5000, () => console.log('Server running on port', process.env.PORT || 5000))
// // // ).catch(e => console.error('MongoDB connection failed:', e.message));
// // const dns = require("node:dns");
// // dns.setServers(["8.8.8.8", "1.1.1.1"]);
// // require('dotenv').config();
// // const express = require('express'), mongoose = require('mongoose'), cors = require('cors');
// // const bcrypt = require('bcryptjs'), jwt = require('jsonwebtoken');
// // const { User, Movie, Showtime, Booking } = require('./models');

// // const app = express();
// // app.use(cors(), express.json());

// // const sign = u => jwt.sign({ id: u._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
// // const auth = (req, res, next) => {
// //   try {
// //     req.userId = jwt.verify((req.headers.authorization || '').replace('Bearer ', ''), process.env.JWT_SECRET).id;
// //     next();
// //   } catch { res.status(401).json({ error: 'Please login first' }); }
// // };
// // const wrap = f => (req, res) => f(req, res).catch(e => res.status(500).json({ error: e.message }));

// // app.post('/api/register', wrap(async (req, res) => {
// //   const { name, email, password } = req.body;
// //   if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required' });
// //   if (await User.findOne({ email })) return res.status(400).json({ error: 'Email already used' });
// //   const u = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
// //   res.json({ token: sign(u), name: u.name, role: u.role });
// // }));

// // app.post('/api/login', wrap(async (req, res) => {
// //   const u = await User.findOne({ email: req.body.email });
// //   if (!u || !(await bcrypt.compare(req.body.password || '', u.password)))
// //     return res.status(400).json({ error: 'Wrong email or password' });
// //   res.json({ token: sign(u), name: u.name, role: u.role });
// // }));

// // app.get('/api/movies', wrap(async (req, res) => res.json(await Movie.find())));

// // app.get('/api/movies/:id', wrap(async (req, res) => {
// //   const movie = await Movie.findById(req.params.id);
// //   if (!movie) return res.status(404).json({ error: 'Movie not found' });
// //   const showtimes = await Showtime.find({ movie: movie._id, time: { $gte: new Date() } }).sort('time');
// //   res.json({ movie, showtimes });
// // }));

// // app.get('/api/showtimes/:id', wrap(async (req, res) => {
// //   const st = await Showtime.findById(req.params.id).populate('movie');
// //   if (!st) return res.status(404).json({ error: 'Showtime not found' });
// //   res.json(st);
// // }));

// // // The important part: booking is ONE atomic database update, so two people can never get the same seat.
// // app.post('/api/book', auth, wrap(async (req, res) => {
// //   const { showtimeId, seats } = req.body;
// //   if (!Array.isArray(seats) || !seats.length) return res.status(400).json({ error: 'Pick at least one seat' });
// //   const st = await Showtime.findById(showtimeId);
// //   if (!st) return res.status(404).json({ error: 'Showtime not found' });
// //   if (seats.some(s => !Number.isInteger(s) || s < 1 || s > st.totalSeats))
// //     return res.status(400).json({ error: 'Invalid seat' });
// //   const r = await Showtime.updateOne(
// //     { _id: showtimeId, bookedSeats: { $nin: seats } },
// //     { $push: { bookedSeats: { $each: seats } } }
// //   );
// //   if (r.modifiedCount === 0) return res.status(409).json({ error: 'Some seats were just taken. Pick again.' });
// //   res.json(await Booking.create({ user: req.userId, showtime: showtimeId, seats }));
// // }));

// // app.get('/api/bookings', auth, wrap(async (req, res) => {
// //   const list = await Booking.find({ user: req.userId }).sort('-createdAt')
// //     .populate({ path: 'showtime', populate: { path: 'movie' } });
// //   res.json(list);
// // }));


// // // ================= ADMIN (only users with role "admin") =================
// // const admin = async (req, res, next) => {
// //   const u = await User.findById(req.userId);
// //   if (!u || u.role !== 'admin') return res.status(403).json({ error: 'Admins only' });
// //   next();
// // };
// // const A = [auth, admin];
// // const pick = (o, ks) => Object.fromEntries(ks.filter(k => o[k] !== undefined).map(k => [k, o[k]]));
// // const MF = ['title', 'description', 'poster', 'duration', 'genre', 'rating'];

// // app.get('/api/admin/stats', A, wrap(async (req, res) => {
// //   const [movies, showtimes, users, bookings] = await Promise.all([Movie.countDocuments(), Showtime.countDocuments(), User.countDocuments(), Booking.find()]);
// //   res.json({ movies, showtimes, users, bookings: bookings.length, seats: bookings.reduce((a, b) => a + b.seats.length, 0) });
// // }));

// // app.post('/api/admin/movies', A, wrap(async (req, res) => {
// //   if (!req.body.title) return res.status(400).json({ error: 'Title is required' });
// //   res.json(await Movie.create(pick(req.body, MF)));
// // }));
// // app.put('/api/admin/movies/:id', A, wrap(async (req, res) => {
// //   const m = await Movie.findByIdAndUpdate(req.params.id, pick(req.body, MF), { new: true });
// //   if (!m) return res.status(404).json({ error: 'Movie not found' });
// //   res.json(m);
// // }));
// // app.delete('/api/admin/movies/:id', A, wrap(async (req, res) => {
// //   const ids = await Showtime.find({ movie: req.params.id }).distinct('_id');
// //   await Booking.deleteMany({ showtime: { $in: ids } });
// //   await Showtime.deleteMany({ movie: req.params.id });
// //   await Movie.findByIdAndDelete(req.params.id);
// //   res.json({ ok: true });
// // }));

// // app.get('/api/admin/showtimes', A, wrap(async (req, res) => res.json(await Showtime.find().sort('time').populate('movie'))));
// // app.post('/api/admin/showtimes', A, wrap(async (req, res) => {
// //   const { movie, time } = req.body, totalSeats = Number(req.body.totalSeats || 40);
// //   if (!(await Movie.findById(movie))) return res.status(400).json({ error: 'Pick a valid movie' });
// //   if (isNaN(new Date(time))) return res.status(400).json({ error: 'Pick a valid date and time' });
// //   if (!(totalSeats >= 8 && totalSeats <= 96)) return res.status(400).json({ error: 'Seats must be between 8 and 96' });
// //   res.json(await Showtime.create({ movie, time, totalSeats }));
// // }));
// // app.put('/api/admin/showtimes/:id', A, wrap(async (req, res) => {
// //   const st = await Showtime.findById(req.params.id);
// //   if (!st) return res.status(404).json({ error: 'Showtime not found' });
// //   const { movie, time, totalSeats } = req.body;
// //   if (movie) st.movie = movie;
// //   if (time) st.time = time;
// //   if (totalSeats) {
// //     if (totalSeats < 8 || totalSeats > 96 || totalSeats < Math.max(0, ...st.bookedSeats))
// //       return res.status(400).json({ error: 'Invalid seat count (some seats beyond it are already booked)' });
// //     st.totalSeats = totalSeats;
// //   }
// //   await st.save(); res.json(st);
// // }));
// // app.delete('/api/admin/showtimes/:id', A, wrap(async (req, res) => {
// //   await Booking.deleteMany({ showtime: req.params.id });
// //   await Showtime.findByIdAndDelete(req.params.id);
// //   res.json({ ok: true });
// // }));

// // app.get('/api/admin/bookings', A, wrap(async (req, res) => res.json(
// //   await Booking.find().sort('-createdAt').populate('user', 'name email').populate({ path: 'showtime', populate: { path: 'movie' } })
// // )));
// // app.delete('/api/admin/bookings/:id', A, wrap(async (req, res) => {
// //   const b = await Booking.findByIdAndDelete(req.params.id);
// //   if (!b) return res.status(404).json({ error: 'Booking not found' });
// //   await Showtime.updateOne({ _id: b.showtime }, { $pull: { bookedSeats: { $in: b.seats } } });
// //   res.json({ ok: true });
// // }));

// // mongoose.connect(process.env.MONGO_URI).then(() =>
// //   app.listen(process.env.PORT || 5000, () => console.log('Server running on port', process.env.PORT || 5000))
// // ).catch(e => console.error('MongoDB connection failed:', e.message));
// // const dns = require("node:dns");
// // dns.setServers(["8.8.8.8", "1.1.1.1"]);
// // require('dotenv').config();
// // const express = require('express'), mongoose = require('mongoose'), cors = require('cors');
// // const bcrypt = require('bcryptjs'), jwt = require('jsonwebtoken');
// // const { User, Movie, Showtime, Booking } = require('./models');

// // const app = express();
// // app.use(cors(), express.json({ limit: '3mb' }));

// // const sign = u => jwt.sign({ id: u._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
// // const auth = (req, res, next) => {
// //   try {
// //     req.userId = jwt.verify((req.headers.authorization || '').replace('Bearer ', ''), process.env.JWT_SECRET).id;
// //     next();
// //   } catch { res.status(401).json({ error: 'Please login first' }); }
// // };
// // const wrap = f => (req, res) => f(req, res).catch(e => res.status(500).json({ error: e.message }));

// // app.post('/api/register', wrap(async (req, res) => {
// //   const { name, email, password } = req.body;
// //   if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required' });
// //   if (await User.findOne({ email })) return res.status(400).json({ error: 'Email already used' });
// //   const u = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
// //   res.json({ token: sign(u), name: u.name, role: u.role });
// // }));

// // app.post('/api/login', wrap(async (req, res) => {
// //   const u = await User.findOne({ email: req.body.email });
// //   if (!u || !(await bcrypt.compare(req.body.password || '', u.password)))
// //     return res.status(400).json({ error: 'Wrong email or password' });
// //   res.json({ token: sign(u), name: u.name, role: u.role });
// // }));

// // app.get('/api/movies', wrap(async (req, res) => res.json(await Movie.find())));

// // app.get('/api/movies/:id', wrap(async (req, res) => {
// //   const movie = await Movie.findById(req.params.id);
// //   if (!movie) return res.status(404).json({ error: 'Movie not found' });
// //   const showtimes = await Showtime.find({ movie: movie._id, time: { $gte: new Date() } }).sort('time');
// //   res.json({ movie, showtimes });
// // }));

// // app.get('/api/showtimes/:id', wrap(async (req, res) => {
// //   const st = await Showtime.findById(req.params.id).populate('movie');
// //   if (!st) return res.status(404).json({ error: 'Showtime not found' });
// //   res.json(st);
// // }));

// // // The important part: booking is ONE atomic database update, so two people can never get the same seat.
// // app.post('/api/book', auth, wrap(async (req, res) => {
// //   const { showtimeId, seats } = req.body;
// //   if (!Array.isArray(seats) || !seats.length) return res.status(400).json({ error: 'Pick at least one seat' });
// //   const st = await Showtime.findById(showtimeId);
// //   if (!st) return res.status(404).json({ error: 'Showtime not found' });
// //   if (seats.some(s => !Number.isInteger(s) || s < 1 || s > st.totalSeats))
// //     return res.status(400).json({ error: 'Invalid seat' });
// //   const r = await Showtime.updateOne(
// //     { _id: showtimeId, bookedSeats: { $nin: seats } },
// //     { $push: { bookedSeats: { $each: seats } } }
// //   );
// //   if (r.modifiedCount === 0) return res.status(409).json({ error: 'Some seats were just taken. Pick again.' });
// //   res.json(await Booking.create({ user: req.userId, showtime: showtimeId, seats }));
// // }));

// // app.get('/api/bookings', auth, wrap(async (req, res) => {
// //   const list = await Booking.find({ user: req.userId }).sort('-createdAt')
// //     .populate({ path: 'showtime', populate: { path: 'movie' } });
// //   res.json(list);
// // }));


// // // ================= ADMIN (only users with role "admin") =================
// // const admin = async (req, res, next) => {
// //   const u = await User.findById(req.userId);
// //   if (!u || u.role !== 'admin') return res.status(403).json({ error: 'Admins only' });
// //   next();
// // };
// // const A = [auth, admin];
// // const pick = (o, ks) => Object.fromEntries(ks.filter(k => o[k] !== undefined).map(k => [k, o[k]]));
// // const posterOk = (req, res, next) =>
// //   (req.body.poster || '').length > 800000 ? res.status(400).json({ error: 'Poster image is too large' }) : next();
// // const MF = ['title', 'description', 'poster', 'duration', 'genre', 'rating'];

// // app.get('/api/admin/stats', A, wrap(async (req, res) => {
// //   const [movies, showtimes, users, bookings] = await Promise.all([Movie.countDocuments(), Showtime.countDocuments(), User.countDocuments(), Booking.find()]);
// //   res.json({ movies, showtimes, users, bookings: bookings.length, seats: bookings.reduce((a, b) => a + b.seats.length, 0) });
// // }));

// // app.post('/api/admin/movies', A, posterOk, wrap(async (req, res) => {
// //   if (!req.body.title) return res.status(400).json({ error: 'Title is required' });
// //   res.json(await Movie.create(pick(req.body, MF)));
// // }));
// // app.put('/api/admin/movies/:id', A, posterOk, wrap(async (req, res) => {
// //   const m = await Movie.findByIdAndUpdate(req.params.id, pick(req.body, MF), { new: true });
// //   if (!m) return res.status(404).json({ error: 'Movie not found' });
// //   res.json(m);
// // }));
// // app.delete('/api/admin/movies/:id', A, wrap(async (req, res) => {
// //   const ids = await Showtime.find({ movie: req.params.id }).distinct('_id');
// //   await Booking.deleteMany({ showtime: { $in: ids } });
// //   await Showtime.deleteMany({ movie: req.params.id });
// //   await Movie.findByIdAndDelete(req.params.id);
// //   res.json({ ok: true });
// // }));

// // app.get('/api/admin/showtimes', A, wrap(async (req, res) => res.json(await Showtime.find().sort('time').populate('movie'))));
// // app.post('/api/admin/showtimes', A, wrap(async (req, res) => {
// //   const { movie, time } = req.body, totalSeats = Number(req.body.totalSeats || 40);
// //   if (!(await Movie.findById(movie))) return res.status(400).json({ error: 'Pick a valid movie' });
// //   if (isNaN(new Date(time))) return res.status(400).json({ error: 'Pick a valid date and time' });
// //   if (!(totalSeats >= 8 && totalSeats <= 96)) return res.status(400).json({ error: 'Seats must be between 8 and 96' });
// //   res.json(await Showtime.create({ movie, time, totalSeats }));
// // }));
// // app.put('/api/admin/showtimes/:id', A, wrap(async (req, res) => {
// //   const st = await Showtime.findById(req.params.id);
// //   if (!st) return res.status(404).json({ error: 'Showtime not found' });
// //   const { movie, time, totalSeats } = req.body;
// //   if (movie) st.movie = movie;
// //   if (time) st.time = time;
// //   if (totalSeats) {
// //     if (totalSeats < 8 || totalSeats > 96 || totalSeats < Math.max(0, ...st.bookedSeats))
// //       return res.status(400).json({ error: 'Invalid seat count (some seats beyond it are already booked)' });
// //     st.totalSeats = totalSeats;
// //   }
// //   await st.save(); res.json(st);
// // }));
// // app.delete('/api/admin/showtimes/:id', A, wrap(async (req, res) => {
// //   await Booking.deleteMany({ showtime: req.params.id });
// //   await Showtime.findByIdAndDelete(req.params.id);
// //   res.json({ ok: true });
// // }));

// // app.get('/api/admin/bookings', A, wrap(async (req, res) => res.json(
// //   await Booking.find().sort('-createdAt').populate('user', 'name email').populate({ path: 'showtime', populate: { path: 'movie' } })
// // )));
// // app.delete('/api/admin/bookings/:id', A, wrap(async (req, res) => {
// //   const b = await Booking.findByIdAndDelete(req.params.id);
// //   if (!b) return res.status(404).json({ error: 'Booking not found' });
// //   await Showtime.updateOne({ _id: b.showtime }, { $pull: { bookedSeats: { $in: b.seats } } });
// //   res.json({ ok: true });
// // }));

// // mongoose.connect(process.env.MONGO_URI).then(() =>
// //   app.listen(process.env.PORT || 5000, () => console.log('Server running on port', process.env.PORT || 5000))
// // ).catch(e => console.error('MongoDB connection failed:', e.message));
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "1.1.1.1"]);
// require('dotenv').config();
// const express = require('express'), mongoose = require('mongoose'), cors = require('cors');
// const bcrypt = require('bcryptjs'), jwt = require('jsonwebtoken');
// const { User, Movie, Showtime, Booking } = require('./models');

// const app = express();
// app.use(cors(), express.json({ limit: '3mb' }));

// const sign = u => jwt.sign({ id: u._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
// const auth = (req, res, next) => {
//   try {
//     req.userId = jwt.verify((req.headers.authorization || '').replace('Bearer ', ''), process.env.JWT_SECRET).id;
//     next();
//   } catch { res.status(401).json({ error: 'Please login first' }); }
// };
// const wrap = f => (req, res) => f(req, res).catch(e => res.status(500).json({ error: e.message }));

// app.post('/api/register', wrap(async (req, res) => {
//   const { name, email, password } = req.body;
//   if (!name || !email || !password) return res.status(400).json({ error: 'All fields are required' });
//   if (await User.findOne({ email })) return res.status(400).json({ error: 'Email already used' });
//   const u = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
//   res.json({ token: sign(u), name: u.name, role: u.role });
// }));

// app.post('/api/login', wrap(async (req, res) => {
//   const u = await User.findOne({ email: req.body.email });
//   if (!u || !(await bcrypt.compare(req.body.password || '', u.password)))
//     return res.status(400).json({ error: 'Wrong email or password' });
//   res.json({ token: sign(u), name: u.name, role: u.role });
// }));

// app.get('/api/movies', wrap(async (req, res) => res.json(await Movie.find())));

// app.get('/api/movies/:id', wrap(async (req, res) => {
//   const movie = await Movie.findById(req.params.id);
//   if (!movie) return res.status(404).json({ error: 'Movie not found' });
//   const showtimes = await Showtime.find({ movie: movie._id, time: { $gte: new Date() } }).sort('time');
//   res.json({ movie, showtimes });
// }));

// app.get('/api/showtimes/:id', wrap(async (req, res) => {
//   const st = await Showtime.findById(req.params.id).populate('movie');
//   if (!st) return res.status(404).json({ error: 'Showtime not found' });
//   res.json(st);
// }));

// // The important part: booking is ONE atomic database update, so two people can never get the same seat.
// app.post('/api/book', auth, wrap(async (req, res) => {
//   const { showtimeId, seats } = req.body;
//   if (!Array.isArray(seats) || !seats.length) return res.status(400).json({ error: 'Pick at least one seat' });
//   const st = await Showtime.findById(showtimeId);
//   if (!st) return res.status(404).json({ error: 'Showtime not found' });
//   if (seats.some(s => !Number.isInteger(s) || s < 1 || s > st.totalSeats))
//     return res.status(400).json({ error: 'Invalid seat' });
//   const r = await Showtime.updateOne(
//     { _id: showtimeId, bookedSeats: { $nin: seats } },
//     { $push: { bookedSeats: { $each: seats } } }
//   );
//   if (r.modifiedCount === 0) return res.status(409).json({ error: 'Some seats were just taken. Pick again.' });
//   res.json(await Booking.create({ user: req.userId, showtime: showtimeId, seats }));
// }));

// app.get('/api/bookings', auth, wrap(async (req, res) => {
//   const list = await Booking.find({ user: req.userId }).sort('-createdAt')
//     .populate({ path: 'showtime', populate: { path: 'movie' } });
//   res.json(list);
// }));


// // ================= ADMIN (only users with role "admin") =================
// const admin = async (req, res, next) => {
//   const u = await User.findById(req.userId);
//   if (!u || u.role !== 'admin') return res.status(403).json({ error: 'Admins only' });
//   next();
// };
// const A = [auth, admin];
// const pick = (o, ks) => Object.fromEntries(ks.filter(k => o[k] !== undefined).map(k => [k, o[k]]));
// const posterOk = (req, res, next) =>
//   (req.body.poster || '').length > 800000 ? res.status(400).json({ error: 'Poster image is too large' }) : next();
// const MF = ['title', 'description', 'poster', 'duration', 'genre', 'rating', 'director', 'cast', 'language', 'year', 'certificate', 'story'];

// app.get('/api/admin/stats', A, wrap(async (req, res) => {
//   const [movies, showtimes, users, bookings] = await Promise.all([Movie.countDocuments(), Showtime.countDocuments(), User.countDocuments(), Booking.find()]);
//   res.json({ movies, showtimes, users, bookings: bookings.length, seats: bookings.reduce((a, b) => a + b.seats.length, 0) });
// }));

// app.post('/api/admin/movies', A, posterOk, wrap(async (req, res) => {
//   if (!req.body.title) return res.status(400).json({ error: 'Title is required' });
//   res.json(await Movie.create(pick(req.body, MF)));
// }));
// app.put('/api/admin/movies/:id', A, posterOk, wrap(async (req, res) => {
//   const m = await Movie.findByIdAndUpdate(req.params.id, pick(req.body, MF), { new: true });
//   if (!m) return res.status(404).json({ error: 'Movie not found' });
//   res.json(m);
// }));
// app.delete('/api/admin/movies/:id', A, wrap(async (req, res) => {
//   const ids = await Showtime.find({ movie: req.params.id }).distinct('_id');
//   await Booking.deleteMany({ showtime: { $in: ids } });
//   await Showtime.deleteMany({ movie: req.params.id });
//   await Movie.findByIdAndDelete(req.params.id);
//   res.json({ ok: true });
// }));

// app.get('/api/admin/showtimes', A, wrap(async (req, res) => res.json(await Showtime.find().sort('time').populate('movie'))));
// app.post('/api/admin/showtimes', A, wrap(async (req, res) => {
//   const { movie, time } = req.body, totalSeats = Number(req.body.totalSeats || 40);
//   if (!(await Movie.findById(movie))) return res.status(400).json({ error: 'Pick a valid movie' });
//   if (isNaN(new Date(time))) return res.status(400).json({ error: 'Pick a valid date and time' });
//   if (!(totalSeats >= 8 && totalSeats <= 96)) return res.status(400).json({ error: 'Seats must be between 8 and 96' });
//   res.json(await Showtime.create({ movie, time, totalSeats }));
// }));
// app.put('/api/admin/showtimes/:id', A, wrap(async (req, res) => {
//   const st = await Showtime.findById(req.params.id);
//   if (!st) return res.status(404).json({ error: 'Showtime not found' });
//   const { movie, time, totalSeats } = req.body;
//   if (movie) st.movie = movie;
//   if (time) st.time = time;
//   if (totalSeats) {
//     if (totalSeats < 8 || totalSeats > 96 || totalSeats < Math.max(0, ...st.bookedSeats))
//       return res.status(400).json({ error: 'Invalid seat count (some seats beyond it are already booked)' });
//     st.totalSeats = totalSeats;
//   }
//   await st.save(); res.json(st);
// }));
// app.delete('/api/admin/showtimes/:id', A, wrap(async (req, res) => {
//   await Booking.deleteMany({ showtime: req.params.id });
//   await Showtime.findByIdAndDelete(req.params.id);
//   res.json({ ok: true });
// }));

// app.get('/api/admin/bookings', A, wrap(async (req, res) => res.json(
//   await Booking.find().sort('-createdAt').populate('user', 'name email').populate({ path: 'showtime', populate: { path: 'movie' } })
// )));
// app.delete('/api/admin/bookings/:id', A, wrap(async (req, res) => {
//   const b = await Booking.findByIdAndDelete(req.params.id);
//   if (!b) return res.status(404).json({ error: 'Booking not found' });
//   await Showtime.updateOne({ _id: b.showtime }, { $pull: { bookedSeats: { $in: b.seats } } });
//   res.json({ ok: true });
// }));

// mongoose.connect(process.env.MONGO_URI).then(() =>
//   app.listen(process.env.PORT || 5000, () => console.log('Server running on port', process.env.PORT || 5000))
// ).catch(e => console.error('MongoDB connection failed:', e.message));
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require('dotenv').config();
const express = require('express'), mongoose = require('mongoose'), cors = require('cors');
const bcrypt = require('bcryptjs'), jwt = require('jsonwebtoken');
const { User, Movie, Showtime, Booking } = require('./models');

const app = express();
app.use(cors(), express.json({ limit: '3mb' }));

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const sign = u => jwt.sign({ id: u._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
const auth = (req, res, next) => {
  try {
    req.userId = jwt.verify((req.headers.authorization || '').replace('Bearer ', ''), process.env.JWT_SECRET).id;
    next();
  } catch { res.status(401).json({ error: 'Please login first' }); }
};
const wrap = f => (req, res) => f(req, res).catch(e => res.status(500).json({ error: e.message }));

app.post('/api/register', wrap(async (req, res) => {
  const name = (req.body.name || '').trim(), email = (req.body.email || '').trim(), password = req.body.password || '';
  if (name.length < 2) return res.status(400).json({ error: 'Name must be at least 2 characters' });
  if (!EMAIL.test(email)) return res.status(400).json({ error: 'Enter a valid email address' });
  if (password.length < 6 || !/[A-Za-z]/.test(password) || !/\d/.test(password))
    return res.status(400).json({ error: 'Password needs 6+ characters with a letter and a number' });
  if (await User.findOne({ email })) return res.status(400).json({ error: 'Email already used' });
  const u = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
  res.json({ token: sign(u), name: u.name, role: u.role });
}));

app.post('/api/login', wrap(async (req, res) => {
  const u = await User.findOne({ email: (req.body.email || '').trim() });
  if (!u || !(await bcrypt.compare(req.body.password || '', u.password)))
    return res.status(400).json({ error: 'Wrong email or password' });
  res.json({ token: sign(u), name: u.name, role: u.role });
}));

app.get('/api/movies', wrap(async (req, res) => res.json(await Movie.find())));

app.get('/api/movies/:id', wrap(async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ error: 'Movie not found' });
  const showtimes = await Showtime.find({ movie: movie._id, time: { $gte: new Date() } }).sort('time');
  res.json({ movie, showtimes });
}));

app.get('/api/showtimes/:id', wrap(async (req, res) => {
  const st = await Showtime.findById(req.params.id).populate('movie');
  if (!st) return res.status(404).json({ error: 'Showtime not found' });
  res.json(st);
}));

// The important part: booking is ONE atomic database update, so two people can never get the same seat.
app.post('/api/book', auth, wrap(async (req, res) => {
  const { showtimeId, seats } = req.body;
  if (!Array.isArray(seats) || !seats.length) return res.status(400).json({ error: 'Pick at least one seat' });
  const st = await Showtime.findById(showtimeId);
  if (!st) return res.status(404).json({ error: 'Showtime not found' });
  if (seats.some(s => !Number.isInteger(s) || s < 1 || s > st.totalSeats))
    return res.status(400).json({ error: 'Invalid seat' });
  const r = await Showtime.updateOne(
    { _id: showtimeId, bookedSeats: { $nin: seats } },
    { $push: { bookedSeats: { $each: seats } } }
  );
  if (r.modifiedCount === 0) return res.status(409).json({ error: 'Some seats were just taken. Pick again.' });
  res.json(await Booking.create({ user: req.userId, showtime: showtimeId, seats }));
}));

app.get('/api/bookings', auth, wrap(async (req, res) => {
  const list = await Booking.find({ user: req.userId }).sort('-createdAt')
    .populate({ path: 'showtime', populate: { path: 'movie' } });
  res.json(list.filter(b => b.showtime && b.showtime.movie)); // hide bookings whose showtime was deleted
}));


// ================= ADMIN (only users with role "admin") =================
const admin = async (req, res, next) => {
  const u = await User.findById(req.userId);
  if (!u || u.role !== 'admin') return res.status(403).json({ error: 'Admins only' });
  next();
};
const A = [auth, admin];
const pick = (o, ks) => Object.fromEntries(ks.filter(k => o[k] !== undefined).map(k => [k, o[k]]));
const posterOk = (req, res, next) =>
  (req.body.poster || '').length > 800000 ? res.status(400).json({ error: 'Poster image is too large' }) : next();
const MF = ['title', 'description', 'poster', 'duration', 'genre', 'rating', 'director', 'cast', 'language', 'year', 'certificate', 'story'];

app.get('/api/admin/stats', A, wrap(async (req, res) => {
  const [movies, showtimes, users, bookings] = await Promise.all([Movie.countDocuments(), Showtime.countDocuments(), User.countDocuments(), Booking.find()]);
  res.json({ movies, showtimes, users, bookings: bookings.length, seats: bookings.reduce((a, b) => a + b.seats.length, 0) });
}));

app.post('/api/admin/movies', A, posterOk, wrap(async (req, res) => {
  if (!req.body.title) return res.status(400).json({ error: 'Title is required' });
  res.json(await Movie.create(pick(req.body, MF)));
}));
app.put('/api/admin/movies/:id', A, posterOk, wrap(async (req, res) => {
  const m = await Movie.findByIdAndUpdate(req.params.id, pick(req.body, MF), { new: true });
  if (!m) return res.status(404).json({ error: 'Movie not found' });
  res.json(m);
}));
app.delete('/api/admin/movies/:id', A, wrap(async (req, res) => {
  const ids = await Showtime.find({ movie: req.params.id }).distinct('_id');
  await Booking.deleteMany({ showtime: { $in: ids } });
  await Showtime.deleteMany({ movie: req.params.id });
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
}));

app.get('/api/admin/showtimes', A, wrap(async (req, res) => res.json(await Showtime.find().sort('time').populate('movie'))));
app.post('/api/admin/showtimes', A, wrap(async (req, res) => {
  const { movie, time } = req.body, totalSeats = Number(req.body.totalSeats || 40);
  if (!(await Movie.findById(movie))) return res.status(400).json({ error: 'Pick a valid movie' });
  if (isNaN(new Date(time))) return res.status(400).json({ error: 'Pick a valid date and time' });
  if (!(totalSeats >= 8 && totalSeats <= 96)) return res.status(400).json({ error: 'Seats must be between 8 and 96' });
  res.json(await Showtime.create({ movie, time, totalSeats }));
}));
app.put('/api/admin/showtimes/:id', A, wrap(async (req, res) => {
  const st = await Showtime.findById(req.params.id);
  if (!st) return res.status(404).json({ error: 'Showtime not found' });
  const { movie, time, totalSeats } = req.body;
  if (movie) st.movie = movie;
  if (time) st.time = time;
  if (totalSeats) {
    if (totalSeats < 8 || totalSeats > 96 || totalSeats < Math.max(0, ...st.bookedSeats))
      return res.status(400).json({ error: 'Invalid seat count (some seats beyond it are already booked)' });
    st.totalSeats = totalSeats;
  }
  await st.save(); res.json(st);
}));
app.delete('/api/admin/showtimes/:id', A, wrap(async (req, res) => {
  await Booking.deleteMany({ showtime: req.params.id });
  await Showtime.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
}));

app.get('/api/admin/bookings', A, wrap(async (req, res) => res.json(
  await Booking.find().sort('-createdAt').populate('user', 'name email').populate({ path: 'showtime', populate: { path: 'movie' } })
)));
app.delete('/api/admin/bookings/:id', A, wrap(async (req, res) => {
  const b = await Booking.findByIdAndDelete(req.params.id);
  if (!b) return res.status(404).json({ error: 'Booking not found' });
  await Showtime.updateOne({ _id: b.showtime }, { $pull: { bookedSeats: { $in: b.seats } } });
  res.json({ ok: true });
}));

mongoose.connect(process.env.MONGO_URI).then(() =>
  app.listen(process.env.PORT || 5000, () => console.log('Server running on port', process.env.PORT || 5000))
).catch(e => console.error('MongoDB connection failed:', e.message));