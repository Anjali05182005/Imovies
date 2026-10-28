const dns = require('node:dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);
require('dotenv').config();
const mongoose = require('mongoose');
const { Movie } = require('./models');
const details = {
 "Space Odyssey": {
  "director": "Aarav Menon",
  "cast": "Rohan Kapoor, Meera Iyer, Daniel Brooks",
  "language": "English",
  "year": 2026,
  "certificate": "U/A",
  "story": "When a signal arrives from beyond the edge of the solar system, a small crew sets out on humanity's longest voyage. Far from home, they find the signal was never a message. It was an invitation."
 },
 "Laugh Riot": {
  "director": "Neha Bhatt",
  "cast": "Karan Malhotra, Sana Sheikh, Vikram Rao",
  "language": "Hindi",
  "year": 2025,
  "certificate": "U",
  "story": "A perfect wedding turns into a chain of mix-ups, runaway relatives and one missing cake. By midnight, everyone is laughing, except the groom."
 },
 "Night Chase": {
  "director": "Rohit Sethi",
  "cast": "Imran Qureshi, Tara Nair, Jason Cole",
  "language": "Hindi",
  "year": 2026,
  "certificate": "U/A",
  "story": "Detective Arjun has one night to catch a criminal who is always one step ahead. Every clue pulls him deeper into a city that never sleeps."
 },
 "Monsoon Melody": {
  "director": "Anjali Deshmukh",
  "cast": "Aditya Verma, Priya Menon, Kabir Singh",
  "language": "Hindi",
  "year": 2025,
  "certificate": "U",
  "story": "Two strangers share an umbrella on a rainy Mumbai evening and keep meeting every monsoon after. Some stories need the rain to be told."
 },
 "Iron Fist Rising": {
  "director": "Vikram Chauhan",
  "cast": "Sunil Rathore, Maya Pillai, Chris Walker",
  "language": "Hindi",
  "year": 2026,
  "certificate": "A",
  "story": "A retired champion wants only a quiet life, until his old rival returns and threatens everything he loves. One last fight will decide it all."
 },
 "The Haunted Haveli": {
  "director": "Siddharth Roy",
  "cast": "Ishita Kulkarni, Manav Joshi, Leena D'Souza",
  "language": "Hindi",
  "year": 2025,
  "certificate": "A",
  "story": "A family inherits an old haveli at the edge of a village. Doors open by themselves, and the walls whisper at night. Some homes do not want to be lived in."
 },
 "Little Dragon Quest": {
  "director": "Emily Carter",
  "cast": "Voices of Aryan Shah, Zoya Khan, Tom Hale",
  "language": "English",
  "year": 2026,
  "certificate": "U",
  "story": "A tiny dragon named Ember sets out across mountains and oceans to find his lost family. Along the way he learns that courage comes in all sizes."
 },
 "Cricket Fever": {
  "director": "Manoj Pandey",
  "cast": "Harsh Tiwari, Divya Nambiar, Rahul Bedi",
  "language": "Hindi",
  "year": 2026,
  "certificate": "U",
  "story": "A small-town team with broken bats and big dreams fights its way to the national finals. This is a story about friendship and never giving up."
 },
 "Mars Colony": {
  "director": "Lena Fischer",
  "cast": "Arjun Das, Nora Blake, Kenji Ito",
  "language": "English",
  "year": 2026,
  "certificate": "U/A",
  "story": "The first settlers on Mars build a home from nothing. When strange signals begin under the red dust, they realise they are not the first to arrive."
 },
 "Desert Heist": {
  "director": "Farhan Mirza",
  "cast": "Rajveer Shekhawat, Alia Khanna, Dev Anand Jr.",
  "language": "Hindi",
  "year": 2025,
  "certificate": "U/A",
  "story": "Five thieves, one palace vault and a sandstorm that will not wait. The plan is perfect, until the one thing nobody planned for walks in."
 },
 "Chai and Chaos": {
  "director": "Pooja Agarwal",
  "cast": "Nikhil Bansal, Riya Kapoor, Sameer Gill",
  "language": "Hindi",
  "year": 2025,
  "certificate": "U",
  "story": "Three roommates open a tiny tea cafe with zero experience and a lot of confidence. Customers, creditors and chaos arrive on the very first day."
 },
 "Midnight Letters": {
  "director": "Ritu Banerjee",
  "cast": "Soham Chatterjee, Ananya Roy, Meenakshi Rao",
  "language": "Hindi",
  "year": 2026,
  "certificate": "U",
  "story": "A box of old love letters is found in an attic. Reading them brings two families, once divided, back together after fifty years."
 }
};
(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  for (const [title, d] of Object.entries(details)) {
    const r = await Movie.updateOne({ title }, { $set: d });
    console.log(title, r.matchedCount ? 'updated' : 'not found (skipped)');
  }
  process.exit();
})();