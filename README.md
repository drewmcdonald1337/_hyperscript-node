# _hyperscript-node TODO Example

## Overview
This _hyperscript-node example is a web framework built on top of express with [_hyperscript.org](https://github.com/bigskysoftware/_hyperscript), based on the _hyperscript repo's nodejs example. Although _hyperscript is originally designed for simple, HTML DOM - based interactions, it is a beautifully simple and fun language to write in, and I found myself wanting to write endpoints with _hyperscript. While not opinionated, I had an MVC framework in mind for small, fast apps, focusing on developer productivity, with a code-gen cli similar to Ember CLI.

It was also an excuse for me to play with [htmx](https://htmx.org/). :)

It uses Sequelize as an ORM, and I have it currently connected to MariaDB but you can use whichever DB provider you'd prefer.

Handlebars is used as the templating laguage, but again feel free to play with it.

## Running locally
If you have VScode, there is a pretty neat launch.json configuration file with this repository, otherwise `npm run start` works just as well. You'll need a [.env](https://www.npmjs.com/package/dotenv) file with a Database config ready, and by default the app runs on port `1337`.

## Notes
I've modified both node-hyperscript.js and _hyperscript.js, and had some trouble installing them with NPM, so I added the libraries and the appropraite license to the `/lib` folder. I'd like to clean up some of the changes and get a PR together for the official _hyperscript.org repo, I just haven't done that yet and I'm kind of lazy.

This is experimental software, I wouldn't use it in production, but it might be cool to use the bootstrapping function and write some node scripts with it, who knows.
