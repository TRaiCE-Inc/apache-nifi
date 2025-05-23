# Start from OpenJDK base image
ARG IMAGE_NAME=openjdk
ARG IMAGE_TAG=8-jre
FROM ${IMAGE_NAME}:${IMAGE_TAG}

ARG MAINTAINER="Apache NiFi <dev@nifi.apache.org>"
LABEL maintainer="${MAINTAINER}"
LABEL site="https://nifi.apache.org"

ARG UID=1000
ARG GID=1000
ARG NIFI_VERSION=1.16.3
ARG BASE_URL=https://archive.apache.org/dist
ARG MIRROR_BASE_URL=${MIRROR_BASE_URL:-${BASE_URL}}
ARG DISTRO_PATH=${DISTRO_PATH:-${NIFI_VERSION}}
ARG NIFI_BINARY_PATH=${NIFI_BINARY_PATH:-/nifi/${DISTRO_PATH}/nifi-${NIFI_VERSION}-bin.zip}
ARG NIFI_TOOLKIT_BINARY_PATH=${NIFI_TOOLKIT_BINARY_PATH:-/nifi/${DISTRO_PATH}/nifi-toolkit-${NIFI_VERSION}-bin.zip}

ENV NIFI_BASE_DIR=/opt/nifi
ENV NIFI_HOME=${NIFI_BASE_DIR}/nifi-current
ENV NIFI_TOOLKIT_HOME=${NIFI_BASE_DIR}/nifi-toolkit-current
ENV NIFI_PID_DIR=${NIFI_HOME}/run
ENV NIFI_LOG_DIR=${NIFI_HOME}/logs

ADD sh/ ${NIFI_BASE_DIR}/scripts/
RUN chmod -R +x ${NIFI_BASE_DIR}/scripts/*.sh

# Enable universe repo
RUN sed -i 's/^#\s*\(deb.*universe\)$/\1/g' /etc/apt/sources.list

# Create NiFi user and install system dependencies
RUN groupadd -g ${GID} nifi || groupmod -n nifi `getent group ${GID} | cut -d: -f1` && \
    useradd --shell /bin/bash -u ${UID} -g ${GID} -m nifi && \
    mkdir -p ${NIFI_BASE_DIR} && \
    chown -R nifi:nifi ${NIFI_BASE_DIR} && \
    apt-get update && \
    apt-get install -y \
        curl wget unzip gnupg \
        jq xmlstarlet procps \
        python3 python3-pip ffmpeg liblzma-dev \
        ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Install Google Chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable && \
    rm -rf /var/lib/apt/lists/*

# Download and install matching ChromeDriver (version 130.0.6723.116)
RUN wget https://edgedl.me.gvt1.com/edgedl/chrome/chrome-for-testing/130.0.6723.116/linux64/chromedriver-linux64.zip && \
    unzip chromedriver-linux64.zip && \
    mv chromedriver-linux64/chromedriver /usr/local/bin/chromedriver && \
    chmod +x /usr/local/bin/chromedriver && \
    rm -rf chromedriver-linux64.zip chromedriver-linux64

# Install Python packages
RUN pip3 install --upgrade pip && \
    pip3 install numpy==1.23.3 spacy==3.5.1 selenium webdriver-manager chromedriver-autoinstaller && \
    python3 -m spacy download en_core_web_md

# Default environment variable for headless Chrome
ENV CHROME_OPTIONS="--headless --no-sandbox --disable-dev-shm-usage --disable-gpu --remote-debugging-port=9222"

# Set user to nifi
USER nifi

# Working directory
WORKDIR ${NIFI_HOME}

# Entrypoint (adjust as needed)
CMD ["bash"]
