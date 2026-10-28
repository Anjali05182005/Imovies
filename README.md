# IMovies - Movie Ticket Booking
Stack: React + Bootstrap, Node, Express, MongoDB (Atlas), JWT.

## Run locally
Backend (terminal 1):
  cd backend
  copy .env.example .env   (then edit .env: MONGO_URI and JWT_SECRET)
  npm install
  npm run seed
  npm start

Frontend (terminal 2):
  cd frontend
  copy .env.example .env
  npm install
  npm run dev
Open http://localhost:5173

## Notes
- frontend/src/api.js: MOCK = false uses the real backend, true uses built-in sample data.
- Double booking is prevented by one atomic MongoDB update on the server.
