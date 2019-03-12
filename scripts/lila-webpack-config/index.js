import dev from './dev';
import analyze from './analyze';
import build from './build';

export default lila => {
  const { setSetting } = lila;

  setSetting('webpackConfigGenerator', webpack => ({ entry, cmd, config }) => {
    let webpackConfig = {};

    if (cmd === 'dev' || cmd === 'serve')
      webpackConfig = dev({ lila, webpack, entry, cmd, config });
    if (cmd === 'analyze')
      webpackConfig = analyze({ lila, webpack, entry, cmd, config });
    if (cmd === 'build' || cmd === 'sync' || cmd === 'start')
      webpackConfig = build({ lila, webpack, entry, cmd, config });

    return webpackConfig;
  });
};
