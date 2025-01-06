# Compilation / Building

We are running Typescript, with npm as package manager as frontend
Everything is written as \*.ts

and compiled by running
"tsc"

From directory location: tvgp/frontend/.
"tsc" is our "compiling" tool which that translates any typescript file into javascript. Output files are all in "./dist"

# Development

As you know to run your resulting javascript and thereby Webpage you really just need to run:
"node [path-to-target-js-file]"

For better development, all important and required commands (= scripts) to run the frontend are defined in "package.json".
This is includes:

"npm run start"

- This will run the compiled main javascript. In our case the target landing page.

"npm run build"

- As we work in typescript, this will compile all typescript artifacts of the frontend project and build all necessary artifacts. Output into ./dist

"npm run dev"

- This will start the web application with hot reload functionality. Meaning, you can edit the typescript files and the webpage (in the browser) updates the changes live.

"npm run test"

- This will run autoamted tests. WIP no tests created yet.

## Notes

ToDo:

Utilize the javascript Async / Await functionality

Use the response manipulation knowledge about serving order
Those are the methods to dynamically serve backend data without refreshing the page
meticulously write the response (header - body - end) and also make sure to explicitly name next request / response to be handled
so that the call is ran in the correct order and can be dynamically updated.
