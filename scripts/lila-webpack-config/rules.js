import autoprefixer from 'autoprefixer';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { extensions, browsers } from './settings';

export const babelLoader = () => ({
  loader: 'babel-loader',
  test: /\.js$/,
  options: {
    babelrc: false,
    configFile: false,
    presets: ['@babel/preset-env', '@babel/preset-flow'],
    plugins: [
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime',
      'transform-vue-jsx',
      [
        'component',
        { libraryName: 'element-ui', styleLibraryName: 'theme-chalk' },
      ],
    ],
  },
  exclude: [/node_modules/],
});

export const vueLoader = () => ({
  loader: 'vue-loader',
  test: /\.vue$/,
});

export const urlLoader = () => ({
  loader: 'url-loader',
  options: {
    // 0 means infinite, put 1 here to disable base64.
    limit: 1,
  },
  test: new RegExp(`\\.(${extensions.join('|')})$`),
});

export const htmlLoader = () => ({
  loader: 'html-loader',
  test: /\.html$/,
  options: {
    attrs: ['img:src', 'link:href'],
    interpolate: 'require',
  },
});

export const cssLoader = isBuild => ({
  test: /\.css$/,
  use: [
    {
      loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
      options: { plugins: [autoprefixer({ browsers })] },
    },
  ],
});

export const lessLoader = isBuild => ({
  test: /\.less$/,
  use: [
    {
      loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
      options: { plugins: [autoprefixer({ browsers })] },
    },
    {
      loader: 'less-loader',
    },
  ],
});

export const sassLoader = isBuild => ({
  test: /\.(scss|sass)$/,
  use: [
    {
      loader: isBuild ? MiniCssExtractPlugin.loader : 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'postcss-loader',
      options: { plugins: [autoprefixer({ browsers })] },
    },
    {
      loader: 'sass-loader',
    },
  ],
});
