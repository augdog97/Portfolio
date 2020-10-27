
/* This is the config file for Webpack
    The entry point (where to find the files to bundle) is the packs.js file
    The mode is set to dev
    The bundles will be saved in the dist folder
    the file name is named bundle.js */

module.exports = {
    entry: './public/javascripts/packs.js',
    mode: 'development',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
}