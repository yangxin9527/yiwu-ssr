// const withLess = require("@zeit/next-less");
// const withCSS = require("@zeit/next-css");
// const path = require('path')
// const isProd = process.env.NODE_ENV === "production";
//
// // fix: prevents error when .less files are required by node
// if (typeof require !== "undefined") {
//     require.extensions[".less"] = (file) => {};
// }
//
// module.exports = withCSS({
//     cssModules: true,
//     cssLoaderOptions: {
//         importLoaders: 1,
//         localIdentName: "[local]___[hash:base64:5]",
//     },
//     ...withLess(),
//     sassOptions: {
//         includePaths: [path.join(__dirname, 'styles')],
//     },
// });
const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}
