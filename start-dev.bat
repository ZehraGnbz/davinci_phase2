@echo off
REM Phase 2 Development Startup Script for Windows
echo 🚀 Starting Phase 2 Development Environment
echo ==========================================

echo.
echo 📦 Installing dependencies...

REM Install backend dependencies
echo Installing backend dependencies...
cd backend
call npm install
if errorlevel 1 (
    echo ❌ Failed to install backend dependencies
    pause
    exit /b 1
)

REM Install frontend dependencies
echo Installing frontend dependencies...
cd ..\frontend
call npm install
if errorlevel 1 (
    echo ❌ Failed to install frontend dependencies
    pause
    exit /b 1
)

echo.
echo 🔧 Starting servers...

REM Start backend in new window
echo Starting backend server on http://localhost:3000...
start "Backend Server" cmd /k "cd ..\backend && npm run start:dev"

REM Wait a moment for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend
echo Starting frontend server on http://localhost:5173...
start "Frontend Server" cmd /k "cd frontend && npm run dev"

echo.
echo ✅ Development environment started!
echo ==========================================
echo 🌐 Frontend: http://localhost:5173
echo 🔧 Backend API: http://localhost:3000
echo.
echo Both servers are running in separate windows.
echo Close the windows to stop the servers.
echo.
pause
