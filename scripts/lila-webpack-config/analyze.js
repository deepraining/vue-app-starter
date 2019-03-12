import path from 'path';
import WebpackBar from 'webpackbar';
import SpeedMeasurePlugin from 'speed-measure-webpack-plugin';
import base from './base';

const { join } = path;

export default ({ lila, webpack, entry, cmd, config }) => {
  const { getSettings } = lila;
  const [root, srcDir, tmpDir, defaultEntry] = getSettings([
    'root',
    'src',
    'tmp',
    'defaultEntry',
  ]);
  const srcPath = join(root, srcDir);

  const baseConfig = base({ lila, webpack, entry, cmd, config });

  baseConfig.plugins.push(new WebpackBar(), new SpeedMeasurePlugin());

  return {
    entry: `${srcPath}/${entry === defaultEntry ? '' : `${entry}/`}index.js`,
    output: {
      path: join(root, tmpDir, 'analyze'),
      filename: 'index.js',
    },
    ...baseConfig,
  };
};
