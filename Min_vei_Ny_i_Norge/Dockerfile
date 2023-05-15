#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
RUN apt-get update
RUN apt-get install -y curl
RUN apt-get install -y libpng-dev libjpeg-dev curl libxi6 build-essential libgl1-mesa-glx
RUN curl -sL https://deb.nodesource.com/setup_lts.x | bash -
RUN apt-get install -y nodejs
WORKDIR /src
COPY ["Min_vei_Ny_i_Norge/Min_vei_Ny_i_Norge.csproj", "Min_vei_Ny_i_Norge/"]
RUN dotnet restore "Min_vei_Ny_i_Norge/Min_vei_Ny_i_Norge.csproj"
COPY . .
WORKDIR "/src/Min_vei_Ny_i_Norge"
RUN dotnet build "Min_vei_Ny_i_Norge.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Min_vei_Ny_i_Norge.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Min_vei_Ny_i_Norge.dll"]
