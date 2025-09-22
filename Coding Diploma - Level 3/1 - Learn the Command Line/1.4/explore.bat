@echo off

echo "Current Directory:"
cd

echo -e "\nDirectory Contents:"
dir

set /p dir="Enter directory to navigate to: "
cd %dir%

echo "\nNew Directory:"
cd