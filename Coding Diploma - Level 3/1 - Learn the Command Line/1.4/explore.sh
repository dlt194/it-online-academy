#!/bin/bash

echo "Current Directory:"
pwd

echo -e "\nDirectory Contents:"
ls -lah

read -p "Enter directory to navigate to: " dir
cd "$dir" || exit

echo -e "\nNew Directory:"
pwd