[![Build status](https://freshpondmedia.visualstudio.com/FreshPondMediaGit/_apis/build/status/chrisjwalk.angular-cli-netcore-ngrx-starter)](https://freshpondmedia.visualstudio.com/FreshPondMediaGit/_build/latest?definitionId=43)

# Nx + Angular + NgRx Platform + .NET 6.0

This is basic demo of how to use a full stack [Nx monorepo](https://nx.dev/angular) with [Angular](https://angular.io) and .NET 6.0 with [Microsoft.AspNetCore.SpaServices.Extensions](https://docs.microsoft.com/en-us/aspnet/core/client-side/spa/angular) and a demo Azure pipeline for Azure DevOps.

## Demo

See a live demo here: [https://angularclinetcorengrxstarter.azurewebsites.net/](https://angularclinetcorengrxstarter.azurewebsites.net/)

## Getting Started?

- **Make sure you have at least Node 12.x or higher (w/ npm 6+) installed!**
- **This repository uses ASP.NET 6.0, which has a hard requirement on .NET SDK 6.0.x. Please install these items from [https://dotnet.microsoft.com/download](https://dotnet.microsoft.com/download)**

## Visual Studio 2022

Make sure you have .NET 6.0 installed and/or the latest VS2022.

## Visual Studio Code

> Note: Make sure you have the C# extension & .NET Debugger installed.

    npm install

## Serve Development App

```
npm start
```

Both the api (dotnet) and web app (Angular) will build and run in dev mode. Open your browser on http://localhost:4200/ to see the Angular app, or https://localhost:60254/swagger to see the api documentation generated by Swagger.

## Lint

```
npm run lint
```

## Unit Tests

Run unit tests by executing:

```
npm run test
```

## End-to-end Tests

Run e2e tests by executing:

```
npm run e2e
```

## Build Production App

Build the production Angular app and Publish the release .NET app, run:

```
npm run build:prod
```

The contents of the. `/dist` folder should now contain something that can be deployed to and Azure web service or IIS instance.
