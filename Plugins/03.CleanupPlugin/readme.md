## Browser caching

Browser caching is important so the browser will not download all the bundle files from the server on each page refresh, instead browser will use them from its cache.

But when we make changes to our code we want the browser to download the new bundle files, not to use them from the browser cache.

And we solve the above issue by adding to content hash to the file bundle name. Browser differentiates new contnent by file name.

That is why in the Webpack config files we added \[contenthash\] which will generate new unique hash everytime we make changes to the code and build the application.

## Dynamic html template and imports

After we changed the file names to contain hashes we can't use hardcoded file name as import in the html file, because the file name will be different after each build.

To solve this issue we will use one more plugin: html plugin.
