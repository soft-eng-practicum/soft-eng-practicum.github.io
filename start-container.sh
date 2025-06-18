#!/usr/bin/env bash

podman run -it --rm \
    -p 4000:4000 \
    --mount type=bind,source=$(pwd),target=/app \
    soft-eng-practicum:latest \
    "$@"
