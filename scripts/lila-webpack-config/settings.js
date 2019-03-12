// [url-loader](https://github.com/webpack-contrib/url-loader) file extensions
export const extensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'ico',
  'svg',
  'eot',
  'ttf',
  'woff',
  'woff2',
];

// [html-minifier](https://github.com/kangax/html-minifier#options-quick-reference) config
export const minHtmlOptions = {
  removeComments: !0,
  collapseWhitespace: !0,
  collapseBooleanAttributes: !0,
  removeEmptyAttributes: !0,
  removeScriptTypeAttributes: !0,
  removeStyleLinkTypeAttributes: !0,
  removeRedundantAttributes: !0,
  minifyJS: !0,
  minifyCSS: !0,
};

// [autoprefixer](https://github.com/postcss/autoprefixer#browsers) browsers
export const browsers = [
  '> 1%',
  'last 2 versions',
  'Android >= 3.2',
  'Firefox >= 20',
  'iOS 7',
];

// [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) config
export const splitChunks = { chunks: 'all' };

/**
 * a static server to place bundle resources to
 *
 * @type {string}
 *
 * @example
 *
 * ```
 * - `/dir`: a directory
 * - `http://www.static.com`: a standalone static server
 * - `https://www.static.com/dir`: a sub directory of a standalone static server
 * - `//www.static.com/dir/sub_dir`: another sub directory of a standalone static server
 * ```
 */
export const staticServer = '';

// [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) config
export const define = {};

// [ProvidePlugin](https://webpack.js.org/plugins/provide-plugin/) config
export const provide = {};
