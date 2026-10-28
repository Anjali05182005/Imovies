// const mongoose = require('mongoose');
// const S = mongoose.Schema, ref = S.Types.ObjectId;
// exports.User = mongoose.model('User', new S({ name: String, email: { type: String, unique: true }, password: String }));
// exports.Movie = mongoose.model('Movie', new S({ title: String, description: String, poster: String, duration: Number, genre: String, rating: Number }));
// exports.Showtime = mongoose.model('Showtime', new S({
//   movie: { type: ref, ref: 'Movie' }, time: Date,
//   totalSeats: { type: Number, default: 40 }, bookedSeats: { type: [Number], default: [] }
// }));
// exports.Booking = mongoose.model('Booking', new S({
//   user: { type: ref, ref: 'User' }, showtime: { type: ref, ref: 'Showtime' }, seats: [Number]
// }, { timestamps: true }));
// const mongoose = require('mongoose');
// const S = mongoose.Schema, ref = S.Types.ObjectId;
// exports.User = mongoose.model('User', new S({ name: String, email: { type: String, unique: true }, password: String, role: { type: String, default: 'user' } }));
// exports.Movie = mongoose.model('Movie', new S({ title: String, description: String, poster: String, duration: Number, genre: String, rating: Number }));
// exports.Showtime = mongoose.model('Showtime', new S({
//   movie: { type: ref, ref: 'Movie' }, time: Date,
//   totalSeats: { type: Number, default: 40 }, bookedSeats: { type: [Number], default: [] }
// }));
// exports.Booking = mongoose.model('Booking', new S({
//   user: { type: ref, ref: 'User' }, showtime: { type: ref, ref: 'Showtime' }, seats: [Number]
// }, { timestamps: true }));
const mongoose = require('mongoose');
const S = mongoose.Schema, ref = S.Types.ObjectId;
exports.User = mongoose.model('User', new S({ name: String, email: { type: String, unique: true }, password: String, role: { type: String, default: 'user' } }));
exports.Movie = mongoose.model('Movie', new S({ title: String, description: String, poster: String, duration: Number, genre: String, rating: Number, director: String, cast: String, language: String, year: Number, certificate: String, story: String }));
exports.Showtime = mongoose.model('Showtime', new S({
  movie: { type: ref, ref: 'Movie' }, time: Date,
  totalSeats: { type: Number, default: 40 }, bookedSeats: { type: [Number], default: [] }
}));
exports.Booking = mongoose.model('Booking', new S({
  user: { type: ref, ref: 'User' }, showtime: { type: ref, ref: 'Showtime' }, seats: [Number]
}, { timestamps: true }));