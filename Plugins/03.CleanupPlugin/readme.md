## Browser caching

Browser caching is important so the browser will not download all the bundle files from the server on each page refresh, instead browser will use them from its cache.

But when we make changes to our code we want the browser to download the new bundle files, not to use them from the browser cache.

And we solve the above issue by adding to content hash to the file bundle name. Browser differentiates new contnent by file name.

That is why in the Webpack config files we added \[contenthash\] which will generate new unique hash everytime we make changes to the code and build the application.

_Note: contnenthash and some other plugins are not recommended to use in development mode. This is because we want to build process during development to be faster. So dpepending if the mode is development or production we should have conditional configuration options or 2 different webpack config files to either use or not hashed and some of the plugins._

## Dynamic html template and imports

After we changed the file names to contain hashes we can't use hardcoded file name as import in the html file, because the file name will be different after each build.

To solve this issue we will use one more plugin: html plugin.

## Dev server

In the package.json file the _dev_ script will start the dev server.
With the dev server we don't need to provide --watch flag to Webpack, because the dev server has ots own watcher.
With the current setup in the Webpack config file the dev server will create the files in memory, not in the dist folder.
Running the dev server with `npm run dev` will allow us to see the changes we made to the files without reruning the build.
