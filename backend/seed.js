// // // const dns = require("node:dns");
// // // dns.setServers(["8.8.8.8", "1.1.1.1"]);
// // // require('dotenv').config();
// // // const mongoose = require('mongoose');
// // // const { Movie, Showtime } = require('./models');
// // // const movies = [
// // //   { title: "Space Odyssey", genre: "Sci-Fi", rating: 8.4, duration: 130, poster: "", description: "A crew travels beyond the solar system and finds something waiting." },
// // //   { title: "Laugh Riot", genre: "Comedy", rating: 7.2, duration: 105, poster: "", description: "A wedding goes hilariously wrong in under 24 hours." },
// // //   { title: "Night Chase", genre: "Thriller", rating: 8.0, duration: 118, poster: "", description: "A detective races against time to stop the next crime." },
// // //   { title: "Monsoon Melody", genre: "Romance", rating: 7.8, duration: 124, poster: "", description: "Two strangers keep meeting on rainy days in Mumbai." },
// // // ];
// // // (async () => {
// // //   await mongoose.connect(process.env.MONGO_URI);
// // //   await Movie.deleteMany(); await Showtime.deleteMany();
// // //   for (const m of await Movie.insertMany(movies))
// // //     for (const [d, h] of [[1, 14], [1, 19], [2, 16], [2, 21]]) {
// // //       const t = new Date(); t.setDate(t.getDate() + d); t.setHours(h, 0, 0, 0);
// // //       await Showtime.create({ movie: m._id, time: t });
// // //     }
// // //   console.log('Sample data added'); process.exit();
// // // })();
// // const dns = require("node:dns");
// // dns.setServers(["8.8.8.8", "1.1.1.1"]);
// // require('dotenv').config();
// // const mongoose = require('mongoose');
// // const { Movie, Showtime } = require('./models');
// // const movies = [
// //   { title: "Space Odyssey", genre: "Sci-Fi", rating: 8.4, duration: 130, poster: "", description: "A crew travels beyond the solar system and finds something waiting." },
// //   { title: "Laugh Riot", genre: "Comedy", rating: 7.2, duration: 105, poster: "", description: "A wedding goes hilariously wrong in under 24 hours." },
// //   { title: "Night Chase", genre: "Thriller", rating: 8.0, duration: 118, poster: "", description: "A detective races against time to stop the next crime." },
// //   { title: "Monsoon Melody", genre: "Romance", rating: 7.8, duration: 124, poster: "", description: "Two strangers keep meeting on rainy days in Mumbai." },
// //   { title: "Iron Fist Rising", genre: "Action", rating: 7.5, duration: 136, poster: "", description: "A retired fighter is pulled back into the ring for one last battle." },
// //   { title: "The Haunted Haveli", genre: "Horror", rating: 6.9, duration: 112, poster: "", description: "A family moves into an old mansion that does not want guests." },
// //   { title: "Little Dragon Quest", genre: "Animation", rating: 8.1, duration: 96, poster: "", description: "A tiny dragon sets out to find his missing family." },
// //   { title: "Cricket Fever", genre: "Drama", rating: 8.2, duration: 142, poster: "", description: "A small-town team dreams of the national trophy." },
// //   { title: "Mars Colony", genre: "Sci-Fi", rating: 7.7, duration: 127, poster: "", description: "The first settlers discover they are not alone." },
// //   { title: "Desert Heist", genre: "Action", rating: 7.4, duration: 121, poster: "", description: "Five thieves plan the biggest robbery in Rajasthan." },
// //   { title: "Chai and Chaos", genre: "Comedy", rating: 7.0, duration: 108, poster: "", description: "Three roommates, one cafe, and a very bad business idea." },
// //   { title: "Midnight Letters", genre: "Romance", rating: 8.3, duration: 119, poster: "", description: "Old love letters bring two families together." }
// // ];
// // (async () => {
// //   await mongoose.connect(process.env.MONGO_URI);
// //   await Movie.deleteMany(); await Showtime.deleteMany();
// //   for (const m of await Movie.insertMany(movies))
// //     for (const [d, h] of [[1, 14], [1, 19], [2, 16], [2, 21]]) {
// //       const t = new Date(); t.setDate(t.getDate() + d); t.setHours(h, 0, 0, 0);
// //       await Showtime.create({ movie: m._id, time: t });
// //     }
// //   console.log('Sample data added'); process.exit();
// // })();
// // const dns = require("node:dns");
// // dns.setServers(["8.8.8.8", "1.1.1.1"]);
// // require('dotenv').config();
// // const mongoose = require('mongoose');
// // const bcrypt = require('bcryptjs');
// // const { Movie, Showtime, User } = require('./models');
// // const movies = [
// //   { title: "Space Odyssey", genre: "Sci-Fi", rating: 8.4, duration: 130, poster: "", description: "A crew travels beyond the solar system and finds something waiting." },
// //   { title: "Laugh Riot", genre: "Comedy", rating: 7.2, duration: 105, poster: "", description: "A wedding goes hilariously wrong in under 24 hours." },
// //   { title: "Night Chase", genre: "Thriller", rating: 8.0, duration: 118, poster: "", description: "A detective races against time to stop the next crime." },
// //   { title: "Monsoon Melody", genre: "Romance", rating: 7.8, duration: 124, poster: "", description: "Two strangers keep meeting on rainy days in Mumbai." },
// //   { title: "Iron Fist Rising", genre: "Action", rating: 7.5, duration: 136, poster: "", description: "A retired fighter is pulled back into the ring for one last battle." },
// //   { title: "The Haunted Haveli", genre: "Horror", rating: 6.9, duration: 112, poster: "", description: "A family moves into an old mansion that does not want guests." },
// //   { title: "Little Dragon Quest", genre: "Animation", rating: 8.1, duration: 96, poster: "", description: "A tiny dragon sets out to find his missing family." },
// //   { title: "Cricket Fever", genre: "Drama", rating: 8.2, duration: 142, poster: "", description: "A small-town team dreams of the national trophy." },
// //   { title: "Mars Colony", genre: "Sci-Fi", rating: 7.7, duration: 127, poster: "", description: "The first settlers discover they are not alone." },
// //   { title: "Desert Heist", genre: "Action", rating: 7.4, duration: 121, poster: "", description: "Five thieves plan the biggest robbery in Rajasthan." },
// //   { title: "Chai and Chaos", genre: "Comedy", rating: 7.0, duration: 108, poster: "", description: "Three roommates, one cafe, and a very bad business idea." },
// //   { title: "Midnight Letters", genre: "Romance", rating: 8.3, duration: 119, poster: "", description: "Old love letters bring two families together." }
// // ];
// // (async () => {
// //   await mongoose.connect(process.env.MONGO_URI);
// //   await Movie.deleteMany(); await Showtime.deleteMany();
// //   for (const m of await Movie.insertMany(movies))
// //     for (const [d, h] of [[1, 14], [1, 19], [2, 16], [2, 21]]) {
// //       const t = new Date(); t.setDate(t.getDate() + d); t.setHours(h, 0, 0, 0);
// //       await Showtime.create({ movie: m._id, time: t });
// //     }
// //   await User.deleteOne({ email: 'admin@imovies.com' });
// //   await User.create({ name: 'Admin', email: 'admin@imovies.com', password: await bcrypt.hash('admin123', 10), role: 'admin' });
// //   console.log('Sample data added. Admin login: admin@imovies.com / admin123'); process.exit();
// // })();
// const dns = require("node:dns");
// dns.setServers(["8.8.8.8", "1.1.1.1"]);
// require('dotenv').config();
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const { Movie, Showtime, User } = require('./models');
// const movies = [
//   { title: "Space Odyssey", genre: "Sci-Fi", rating: 8.4, duration: 130, poster: "/posters/space-odyssey.svg", description: "A crew travels beyond the solar system and finds something waiting.", director: "Aarav Menon", cast: "Rohan Kapoor, Meera Iyer, Daniel Brooks", language: "English", year: 2026, certificate: "U/A", story: "When a signal arrives from beyond the edge of the solar system, a small crew sets out on humanity's longest voyage. Far from home, they find the signal was never a message. It was an invitation." },
//   { title: "Laugh Riot", genre: "Comedy", rating: 7.2, duration: 105, poster: "/posters/laugh-riot.svg", description: "A wedding goes hilariously wrong in under 24 hours.", director: "Neha Bhatt", cast: "Karan Malhotra, Sana Sheikh, Vikram Rao", language: "Hindi", year: 2025, certificate: "U", story: "A perfect wedding turns into a chain of mix-ups, runaway relatives and one missing cake. By midnight, everyone is laughing, except the groom." },
//   { title: "Night Chase", genre: "Thriller", rating: 8.0, duration: 118, poster: "/posters/night-chase.svg", description: "A detective races against time to stop the next crime.", director: "Rohit Sethi", cast: "Imran Qureshi, Tara Nair, Jason Cole", language: "Hindi", year: 2026, certificate: "U/A", story: "Detective Arjun has one night to catch a criminal who is always one step ahead. Every clue pulls him deeper into a city that never sleeps." },
//   { title: "Monsoon Melody", genre: "Romance", rating: 7.8, duration: 124, poster: "/posters/monsoon-melody.svg", description: "Two strangers keep meeting on rainy days in Mumbai.", director: "Anjali Deshmukh", cast: "Aditya Verma, Priya Menon, Kabir Singh", language: "Hindi", year: 2025, certificate: "U", story: "Two strangers share an umbrella on a rainy Mumbai evening and keep meeting every monsoon after. Some stories need the rain to be told." },
//   { title: "Iron Fist Rising", genre: "Action", rating: 7.5, duration: 136, poster: "/posters/iron-fist-rising.svg", description: "A retired fighter is pulled back into the ring for one last battle.", director: "Vikram Chauhan", cast: "Sunil Rathore, Maya Pillai, Chris Walker", language: "Hindi", year: 2026, certificate: "A", story: "A retired champion wants only a quiet life, until his old rival returns and threatens everything he loves. One last fight will decide it all." },
//   { title: "The Haunted Haveli", genre: "Horror", rating: 6.9, duration: 112, poster: "/posters/the-haunted-haveli.svg", description: "A family moves into an old mansion that does not want guests.", director: "Siddharth Roy", cast: "Ishita Kulkarni, Manav Joshi, Leena D'Souza", language: "Hindi", year: 2025, certificate: "A", story: "A family inherits an old haveli at the edge of a village. Doors open by themselves, and the walls whisper at night. Some homes do not want to be lived in." },
//   { title: "Little Dragon Quest", genre: "Animation", rating: 8.1, duration: 96, poster: "/posters/little-dragon-quest.svg", description: "A tiny dragon sets out to find his missing family.", director: "Emily Carter", cast: "Voices of Aryan Shah, Zoya Khan, Tom Hale", language: "English", year: 2026, certificate: "U", story: "A tiny dragon named Ember sets out across mountains and oceans to find his lost family. Along the way he learns that courage comes in all sizes." },
//   { title: "Cricket Fever", genre: "Drama", rating: 8.2, duration: 142, poster: "/posters/cricket-fever.svg", description: "A small-town team dreams of the national trophy.", director: "Manoj Pandey", cast: "Harsh Tiwari, Divya Nambiar, Rahul Bedi", language: "Hindi", year: 2026, certificate: "U", story: "A small-town team with broken bats and big dreams fights its way to the national finals. This is a story about friendship and never giving up." },
//   { title: "Mars Colony", genre: "Sci-Fi", rating: 7.7, duration: 127, poster: "/posters/mars-colony.svg", description: "The first settlers discover they are not alone.", director: "Lena Fischer", cast: "Arjun Das, Nora Blake, Kenji Ito", language: "English", year: 2026, certificate: "U/A", story: "The first settlers on Mars build a home from nothing. When strange signals begin under the red dust, they realise they are not the first to arrive." },
//   { title: "Desert Heist", genre: "Action", rating: 7.4, duration: 121, poster: "/posters/desert-heist.svg", description: "Five thieves plan the biggest robbery in Rajasthan.", director: "Farhan Mirza", cast: "Rajveer Shekhawat, Alia Khanna, Dev Anand Jr.", language: "Hindi", year: 2025, certificate: "U/A", story: "Five thieves, one palace vault and a sandstorm that will not wait. The plan is perfect, until the one thing nobody planned for walks in." },
//   { title: "Chai and Chaos", genre: "Comedy", rating: 7.0, duration: 108, poster: "/posters/chai-and-chaos.svg", description: "Three roommates, one cafe, and a very bad business idea.", director: "Pooja Agarwal", cast: "Nikhil Bansal, Riya Kapoor, Sameer Gill", language: "Hindi", year: 2025, certificate: "U", story: "Three roommates open a tiny tea cafe with zero experience and a lot of confidence. Customers, creditors and chaos arrive on the very first day." },
//   { title: "Midnight Letters", genre: "Romance", rating: 8.3, duration: 119, poster: "/posters/midnight-letters.svg", description: "Old love letters bring two families together.", director: "Ritu Banerjee", cast: "Soham Chatterjee, Ananya Roy, Meenakshi Rao", language: "Hindi", year: 2026, certificate: "U", story: "A box of old love letters is found in an attic. Reading them brings two families, once divided, back together after fifty years." }
// ];
// (async () => {
//   await mongoose.connect(process.env.MONGO_URI);
//   await Movie.deleteMany(); await Showtime.deleteMany();
//   for (const m of await Movie.insertMany(movies))
//     for (const [d, h] of [[1, 14], [1, 19], [2, 16], [2, 21]]) {
//       const t = new Date(); t.setDate(t.getDate() + d); t.setHours(h, 0, 0, 0);
//       await Showtime.create({ movie: m._id, time: t });
//     }
//   await User.deleteOne({ email: 'admin@imovies.com' });
//   await User.create({ name: 'Admin', email: 'admin@imovies.com', password: await bcrypt.hash('admin123', 10), role: 'admin' });
//   console.log('Sample data added. Admin login: admin@imovies.com / admin123'); process.exit();
// })();
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Movie, Showtime, User, Booking } = require('./models');
const movies = [
  { title: "Space Odyssey", genre: "Sci-Fi", rating: 8.4, duration: 130, poster: "/posters/space-odyssey.svg", description: "A crew travels beyond the solar system and finds something waiting.", director: "Aarav Menon", cast: "Rohan Kapoor, Meera Iyer, Daniel Brooks", language: "English", year: 2026, certificate: "U/A", story: "When a signal arrives from beyond the edge of the solar system, a small crew sets out on humanity's longest voyage. Far from home, they find the signal was never a message. It was an invitation." },
  { title: "Laugh Riot", genre: "Comedy", rating: 7.2, duration: 105, poster: "/posters/laugh-riot.svg", description: "A wedding goes hilariously wrong in under 24 hours.", director: "Neha Bhatt", cast: "Karan Malhotra, Sana Sheikh, Vikram Rao", language: "Hindi", year: 2025, certificate: "U", story: "A perfect wedding turns into a chain of mix-ups, runaway relatives and one missing cake. By midnight, everyone is laughing, except the groom." },
  { title: "Night Chase", genre: "Thriller", rating: 8.0, duration: 118, poster: "/posters/night-chase.svg", description: "A detective races against time to stop the next crime.", director: "Rohit Sethi", cast: "Imran Qureshi, Tara Nair, Jason Cole", language: "Hindi", year: 2026, certificate: "U/A", story: "Detective Arjun has one night to catch a criminal who is always one step ahead. Every clue pulls him deeper into a city that never sleeps." },
  { title: "Monsoon Melody", genre: "Romance", rating: 7.8, duration: 124, poster: "/posters/monsoon-melody.svg", description: "Two strangers keep meeting on rainy days in Mumbai.", director: "Anjali Deshmukh", cast: "Aditya Verma, Priya Menon, Kabir Singh", language: "Hindi", year: 2025, certificate: "U", story: "Two strangers share an umbrella on a rainy Mumbai evening and keep meeting every monsoon after. Some stories need the rain to be told." },
  { title: "Iron Fist Rising", genre: "Action", rating: 7.5, duration: 136, poster: "/posters/iron-fist-rising.svg", description: "A retired fighter is pulled back into the ring for one last battle.", director: "Vikram Chauhan", cast: "Sunil Rathore, Maya Pillai, Chris Walker", language: "Hindi", year: 2026, certificate: "A", story: "A retired champion wants only a quiet life, until his old rival returns and threatens everything he loves. One last fight will decide it all." },
  { title: "The Haunted Haveli", genre: "Horror", rating: 6.9, duration: 112, poster: "/posters/the-haunted-haveli.svg", description: "A family moves into an old mansion that does not want guests.", director: "Siddharth Roy", cast: "Ishita Kulkarni, Manav Joshi, Leena D'Souza", language: "Hindi", year: 2025, certificate: "A", story: "A family inherits an old haveli at the edge of a village. Doors open by themselves, and the walls whisper at night. Some homes do not want to be lived in." },
  { title: "Little Dragon Quest", genre: "Animation", rating: 8.1, duration: 96, poster: "/posters/little-dragon-quest.svg", description: "A tiny dragon sets out to find his missing family.", director: "Emily Carter", cast: "Voices of Aryan Shah, Zoya Khan, Tom Hale", language: "English", year: 2026, certificate: "U", story: "A tiny dragon named Ember sets out across mountains and oceans to find his lost family. Along the way he learns that courage comes in all sizes." },
  { title: "Cricket Fever", genre: "Drama", rating: 8.2, duration: 142, poster: "/posters/cricket-fever.svg", description: "A small-town team dreams of the national trophy.", director: "Manoj Pandey", cast: "Harsh Tiwari, Divya Nambiar, Rahul Bedi", language: "Hindi", year: 2026, certificate: "U", story: "A small-town team with broken bats and big dreams fights its way to the national finals. This is a story about friendship and never giving up." },
  { title: "Mars Colony", genre: "Sci-Fi", rating: 7.7, duration: 127, poster: "/posters/mars-colony.svg", description: "The first settlers discover they are not alone.", director: "Lena Fischer", cast: "Arjun Das, Nora Blake, Kenji Ito", language: "English", year: 2026, certificate: "U/A", story: "The first settlers on Mars build a home from nothing. When strange signals begin under the red dust, they realise they are not the first to arrive." },
  { title: "Desert Heist", genre: "Action", rating: 7.4, duration: 121, poster: "/posters/desert-heist.svg", description: "Five thieves plan the biggest robbery in Rajasthan.", director: "Farhan Mirza", cast: "Rajveer Shekhawat, Alia Khanna, Dev Anand Jr.", language: "Hindi", year: 2025, certificate: "U/A", story: "Five thieves, one palace vault and a sandstorm that will not wait. The plan is perfect, until the one thing nobody planned for walks in." },
  { title: "Chai and Chaos", genre: "Comedy", rating: 7.0, duration: 108, poster: "/posters/chai-and-chaos.svg", description: "Three roommates, one cafe, and a very bad business idea.", director: "Pooja Agarwal", cast: "Nikhil Bansal, Riya Kapoor, Sameer Gill", language: "Hindi", year: 2025, certificate: "U", story: "Three roommates open a tiny tea cafe with zero experience and a lot of confidence. Customers, creditors and chaos arrive on the very first day." },
  { title: "Midnight Letters", genre: "Romance", rating: 8.3, duration: 119, poster: "/posters/midnight-letters.svg", description: "Old love letters bring two families together.", director: "Ritu Banerjee", cast: "Soham Chatterjee, Ananya Roy, Meenakshi Rao", language: "Hindi", year: 2026, certificate: "U", story: "A box of old love letters is found in an attic. Reading them brings two families, once divided, back together after fifty years." }
];
(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await Movie.deleteMany(); await Showtime.deleteMany(); await Booking.deleteMany();
  for (const m of await Movie.insertMany(movies))
    for (const [d, h] of [[1, 14], [1, 19], [2, 16], [2, 21]]) {
      const t = new Date(); t.setDate(t.getDate() + d); t.setHours(h, 0, 0, 0);
      await Showtime.create({ movie: m._id, time: t });
    }
  await User.deleteOne({ email: 'admin@imovies.com' });
  await User.create({ name: 'Admin', email: 'admin@imovies.com', password: await bcrypt.hash('admin123', 10), role: 'admin' });
  console.log('Sample data added. Admin login: admin@imovies.com / admin123'); process.exit();
})();