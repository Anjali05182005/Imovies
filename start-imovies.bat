@echo off
start "IMovies backend" cmd /k "cd /d %~dp0backend && npm start"
start "IMovies frontend" cmd /k "cd /d %~dp0frontend && npm run dev"
timeout /t 7 >nul
start http://localhost:5173
