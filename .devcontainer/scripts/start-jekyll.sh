#!/usr/bin/env bash
set -euo pipefail

bundle config set path 'vendor/bundle'
bundle install

bundle exec jekyll serve \
  --livereload \
  --host 0.0.0.0 \
  --port 4000 \

echo "Jekyll started! Happy hacking!"
