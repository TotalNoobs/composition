#!/bin/bash

# Run yarn install & start the dev server in the frontend directory

cd frontend
yarn install
# Now start the dev server daemon using screen
screen -A -m -d -S frontend_devserver yarn start &
cd ..


cd backend
screen -A -m -d -S backend_devserver ./devserver.sh &

cd ..