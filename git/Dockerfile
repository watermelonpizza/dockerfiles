FROM ubuntu:latest
MAINTAINER Daniel Miller <watermelonpizza@melonstudios.net>

RUN apt update && \
    apt install git -y && \
    git config --global push.default simple

CMD ["git"]
