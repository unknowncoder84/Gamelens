@echo off
title GamLens - Starting Project
echo ============================================
echo   GamLens Portfolio - Starting All Services
echo ============================================
echo.

:: Start Backend
echo [1/2] Starting Backend (FastAPI on port 8000)...
start "GamLens Backend" cmd /k "cd /d e:\Ayush\gamelens\gamelens_portfolio\backend && python -m uvicorn server:app --reload --host 0.0.0.0 --port 8000"

:: Wait a moment for backend to initialize
timeout /t 3 /nobreak >nul

:: Start Frontend
echo [2/2] Starting Frontend (React on port 3000)...
start "GamLens Frontend" cmd /k "cd /d e:\Ayush\gamelens\gamelens_portfolio\frontend && yarn start"

echo.
echo ============================================
echo   Both services are starting!
echo   Backend:  http://localhost:8000/api
echo   Frontend: http://localhost:3000
echo ============================================
echo.
echo Close this window anytime. The services
echo will keep running in their own windows.
pause
