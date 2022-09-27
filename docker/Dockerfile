# syntax=docker/dockerfile:1
FROM ubuntu:22.04

ENV HOME /root
SHELL ["/bin/bash","-c"]

ENV PROJECT bipes

# Skip setup prompts
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=Europe/Moscow

# In-container dependencies
RUN apt-get update
RUN apt-get -y --no-install-recommends install \
  git make sudo tar wget apt-utils \
  python3 python3-pip python3-venv npm 

# Allow cloning from inside the container
RUN git config --global http.sslVerify "false"

