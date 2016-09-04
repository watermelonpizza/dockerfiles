FROM microsoft/dotnet:latest
MAINTAINER Daniel Miller <watermelonpizza@melonstudios.net>

RUN git clone https://github.com/watermelonpizza/shareme

WORKDIR /shareme

RUN dotnet restore && dotnet build

EXPOSE 5000
VOLUME /shareme/wwwroot/

ENTRYPOINT ["dotnet", "run", "--server.urls", "http://0.0.0.0:5000"]