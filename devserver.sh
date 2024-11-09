#!/bin/bash


# This script is used to start and stop the development servers for the frontend and backend
# It uses the screen command to run the servers in the background

# echo commands we run
# set -x
# exit on error
set -e


function stop_devserver {
    # Stop the dev server daemon
    # Ignore errors if the session does not exist
    echo "Stopping dev servers if they are running..."
    screen -X -S frontend_devserver quit || echo "Frontend is not running"
    screen -X -S backend_devserver quit || echo "Backend is not running"
}

function start_devserver {
    echo "Starting frontend..."
    cd frontend
    # Now start the dev server daemon using screen
    screen -A -m -d -S frontend_devserver ./devserver.sh &
    cd ..

    echo "Starting backend..."
    cd backend
    # Now start the dev server daemon using screen
    screen -A -m -d -S backend_devserver ./devserver.sh &
    cd ..
}





function main {
    # Check if the user has provided an argument

    if [ ! -z "$1"] && [ "$1" != "start" ] && [ "$1" != "stop" ]; then
        echo "Usage: $0 start|stop"
        exit 1
    fi
    action=$1

    # Default action is start if no argument is provided
    if [ -z "$action" ]; then
        action="start"
    fi

    echo "Running action: $action"
    stop_devserver

    # Check if the user has provided the correct argument
    if [ "$action" == "start" ]; then
        start_devserver
    fi
}

main $@