import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import VueLoaderPlugin from 'vue-loader/lib/plugin';
import { minHtmlOptions, define, provide } from './settings';
import {
  babelLoader,
  vueLoader,
  htmlLoader,
  urlLoader,
  cssLoader,
  lessLoader,
  sassLoader,
} from './rules';

const { join } = path;

export default ({ lila, webpack, entry, cmd }) => {
  const { getSettings } = lila;
  const [root, srcDir, defaultEntry] = getSettings([
    'root',
    'src',
    'defaultEntry',
  ]);
  const srcPath = join(root, srcDir);

  const { ProvidePlugin, DefinePlugin } = webpack;

  const isBuild = cmd === 'build' || cmd === 'sync' || cmd === 'start';
  const isDev = cmd === 'dev' || cmd === 'serve';
  const noDevtool = cmd === 'analyze';

  let devtool = isDev ? 'eval-source-map' : 'source-map';
  if (noDevtool) devtool = undefined;

  return {
    plugins: [
      new ProvidePlugin(provide),
      new DefinePlugin(define),
      new HtmlWebpackPlugin({
        template: `${srcPath}/${
          entry === defaultEntry ? '' : `${entry}/`
        }index.html`,
        minify: isBuild ? minHtmlOptions : false,
      }),
      new VueLoaderPlugin(),
    ],
    module: {
      rules: [
        babelLoader(),
        vueLoader(),
        urlLoader(),
        htmlLoader(),
        cssLoader(isBuild),
        lessLoader(isBuild),
        sassLoader(isBuild),
      ],
    },
    resolve: {
      modules: [srcPath, 'node_modules'],
      extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.vue'],
    },
    optimization: {
      minimize: isBuild,
    },
    devtool,
    mode: isDev ? 'development' : 'production',
  };
};
