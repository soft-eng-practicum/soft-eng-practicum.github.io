# ContainerFile
# Compatible with both Docker and Podman

# Using the official Ubuntu Dev image
FROM ubuntu:24.04

# Install extra packages as needed
RUN apt-get update && apt-get install -y \
    git curl locales \
    vim \
    # Install Jekyll dependencies
    ruby-full ruby-dev build-essential zlib1g-dev \
    && apt-get clean -y && rm -rf /var/lib/apt/lists/*;

RUN locale-gen en_US.UTF-8 \
    && update-locale LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8

ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

# Install Ruby Gems to /gems
ENV GEM_HOME="/gems"
ENV PATH="/gems/bin:$PATH"

# Set a working directory
WORKDIR /app

COPY . /app

# Install base Ruby dependencies
RUN gem install jekyll bundler

# Install project dependencies
RUN bundle install

# By default, just drop into a shell
#CMD ["/bin/bash"]
CMD bundle exec jekyll serve --host 0.0.0.0 --port 4000
