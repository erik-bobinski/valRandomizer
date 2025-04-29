# valRandomizer

Randomized agent selection and generation of challenges to complete in-game, designed to spice up your VALORANT experience.

Built with Angular and Express + OpenAI API. 

## Here's a demo link:

[![valRandomizer Demo](https://img.youtube.com/vi/TdFNGlYvRRo/maxresdefault.jpg)](https://www.youtube.com/watch?v=TdFNGlYvRRo)

## Setup The Latest Build Locally

If you're not experienced in programming, this guide is verbose to help you get the app all set up. This application is not yet hosted on a domain as it is a WIP, so you'll have to download and build from the source code on your machine. Additionally, this app requires you to have your own OpenAI API key which you can get [here](https://platform.openai.com/api-keys) — ensure you save the API key as an environment variable on your machine named `OPENAI_API_KEY` in order for the application to use it! Inserting as little as $1 USD will last you hours of use time!

- Install the following three dev tools in the order listed if you dont have them, or the subsequent steps won't work:

    [Git](https://git-scm.com/downloads)
  
    [Node.js](https://nodejs.org/en/download)
  
    Install Angular in your terminal: `npm install -g @angular/cli`

In your terminal, navigate to where you want to install the app on your machine, then follow the remaining steps:

- Clone this repo

    `git clone https://github.com/erik-bobinski/valRandomizer.git`

- Once the code has been downloaded

    `cd valRandomzier`

- Install the dependencies for the frontend (you must be in root of project)

    `npm install`

- Install the dependencies for the backend (you must be in backend directory to install its dependencies: `cd backend`)

    `npm install`

- To run the app, you must be at the root of project (you may need to step out of backend directory: `cd ../`), run the following two commands:

    `npm run backend`

    In a different terminal instance, also at root of project: Run the frontend with `npm run frontend` and navigate to the URL your terminal specifies (probably http://localhost:4200) to see your app!
