# vue-app-starter

[中文文档](./README.md)

A boilerplate for creating a Vue application, using Webpack and Storybook.

## Getting started

```
git clone https://github.com/senntyou/vue-app-starter.git --depth=1

cd vue-app-starter

npm install             # install dependencies

npm run storybook       # develop components using storybook
```

## Features

- [less](http://lesscss.org/), [scss](https://sass-lang.com/) style languages support.
- [Single File Components](https://vuejs.org/v2/guide/single-file-components.html), [jest](https://jestjs.io/en/) test support.
- Using [storybook](https://storybook.js.org/) to develop, preview components.

## Main commands

### `dev`: start a local server to develop an entry

```
lila dev                     # SPA (global)
npx lila dev                 # SPA (local)
lila dev [entry]             # multi-pages (global)
npx lila dev [entry]         # multi-pages (local)
```

### `serve`: simulate a backend environment to start a local server to develop an entry

```
lila serve                   # SPA (global)
npx lila serve               # SPA (local)
lila serve [entry]           # multi-pages (global)
npx lila serve [entry]       # multi-pages (local)
```

### `build`: pack source codes to production bundles

```
lila build                                  # SPA (global)
npx lila build                              # SPA (local)
lila build [entry1] [entry2] ...            # multi-pages (global)
npx lila build [entry1] [entry2] ...        # multi-pages (local)
```

### `sync`: make production bundles, then sync to remote servers

```
lila sync                                   # SPA (global)
npx lila sync                               # SPA (local)
lila sync [entry1] [entry2] ...             # multi-pages (global)
npx lila sync [entry1] [entry2] ...         # multi-pages (local)
```

### `start`: make production bundles, then start a local server to preview

```
lila start                   # SPA (global)
npx lila start               # SPA (local)
lila start [entry]           # multi-pages (global)
npx lila start [entry]       # multi-pages (local)
```

### `analyze`: visualize size of webpack output files

```
lila analyze                 # SPA (global)
npx lila analyze             # SPA (local)
lila analyze [entry]         # multi-pages (global)
npx lila analyze [entry]     # multi-pages (local)
```

## Project

```
- src                        # source files directory
- .storybook                 # for storybook
- stories                    # for storybook
```

### Structure of Single Page Application (SPA)

```
- src
  - index.html               # html entry file
  - index.js                 # js entry file

  - other files and directories
```

### Structure of multi pages application

```
- src
  - page1                    # entry: page1
    - index.html             # html entry file
    - index.js               # js entry file

    - other files and directories

  - module1
    - page2                  # entry: module1/page2
      - index.html           # html entry file
      - index.js             # js entry file
```

An entry has a standalone directory(`src/home/about/` if entry is `home/about`), also called workspace, and has at least a `index.html` file and a `index.js` file under the workspace.

## Custom webpack config

If you want to modify default webpack config, you can go to `scripts/lila-webpack-config` to modify them.

## Externals

This project use [lila](https://github.com/senntyou/lila) to develop and build. If you need to know more about:

- How to configure `lila.init.js`
- How to run `lila`
- What features `lila` have

go to [lila](https://github.com/senntyou/lila) to see more.

- [lila-bin](https://github.com/senntyou/lila/tree/master/packages/lila-bin): lila command line tool
- [lila-core](https://github.com/senntyou/lila/tree/master/packages/lila-core): lila core library
- [lila-tasks](https://github.com/senntyou/lila/tree/master/packages/lila-tasks): lila built-in tasks
- [lila-webpack](https://github.com/senntyou/lila/tree/master/packages/lila-webpack): wrapped webpack plugin
