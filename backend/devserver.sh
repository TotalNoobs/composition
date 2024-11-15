#!/bin/bash


# echo commands we run
set -x
# exit on error
set -e

if [ ! -d ".venv" ]; then
    python3 -m venv .venv
    source .venv/bin/activate
    pip install -r requirements.txt
else
    source .venv/bin/activate
fi

source .env

python manage.py runserver 0.0.0.0:8000