# Core (ExpressJS Variant) Description

This is the core service implemented through ExpressJS
The stack for it is:

- TypeScript
- ESLint
- ReactJS
- Jest
- vite
- tsc

## Compilation / Building

We are running ReactJS as frontend
Everything is written as \*.tsx
and compiled by running

    "npm run build" 

From directory location: tvgp/frontend/
All useful development commands can be seen in package.json

Running the web app in production mode is easily done by running

    "npm run start"
With vite the web app is also automatically prepared to auto-reload. 
So this is also how you start the app for local development.

To see a static preview version of the web app you first build the project then run:
    "npm run preview"

Following scripts are not yet supported.
    "npm run test" - shall run jest

    "npm run lint" - shall run ESlint

## ToDo
Implement Tests
Implement Linter
Add both to automated git job
Best practice for request handling is await + async. Implement those and learn them. 
Current implementation then+catch is quite simple but primitive.
Implement Query package afterwards
