@REM Change directory in the location of the bat file
cd /d %~dp0

CALL powershell "start node main.js -WindowStyle Hidden"
