@ECHO off
@REM Change directory in the location of the bat file
cd /d %~dp0
call forever start "main.js"

@REM NOTE: Forver will monitor the app and it will restart it if you try to exit it
@REM You can use the `forever stop` command to stop it
