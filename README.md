# vue-app-starter

[English Documentation](./README.en.md)

一个用于快速创建 Vue 项目的模板脚手架，使用 Webpack 与 Storybook 构建.

## 快速开始

```
git clone https://github.com/senntyou/vue-app-starter.git --depth=1

cd vue-app-starter

npm install             # 安装依赖

npm run storybook       # 使用 storybook 开发组件
```

## 特性

- [less](http://lesscss.org/), [scss](https://sass-lang.com/) 样式语言支持.
- [单文件组件](https://vuejs.org/v2/guide/single-file-components.html), [jest](https://jestjs.io/en/) 测试支持.
- 使用 [storybook](https://storybook.js.org/) 开发、预览组件.

## 主要命令

### `dev`: 开启一个本地服务器开发一个 entry

```
lila dev                     # 单页面应用 (全局命令)
npx lila dev                 # 单页面应用 (本地命令)
lila dev [entry]             # 多页面模式 (全局命令)
npx lila dev [entry]         # 多页面模式 (本地命令)
```

### `serve`: 模拟一个后端环境，开启一个本地服务器开发一个 entry

```
lila serve                   # 单页面应用 (全局命令)
npx lila serve               # 单页面应用 (本地命令)
lila serve [entry]           # 多页面模式 (全局命令)
npx lila serve [entry]       # 多页面模式 (本地命令)
```

### `build`: 打包源代码

```
lila build                                  # 单页面应用 (全局命令)
npx lila build                              # 单页面应用 (本地命令)
lila build [entry1] [entry2] ...            # 多页面模式 (全局命令)
npx lila build [entry1] [entry2] ...        # 多页面模式 (本地命令)
```

### `sync`: 打包源代码, 并同步到服务器

```
lila sync                                   # 单页面应用 (全局命令)
npx lila sync                               # 单页面应用 (本地命令)
lila sync [entry1] [entry2] ...             # 多页面模式 (全局命令)
npx lila sync [entry1] [entry2] ...         # 多页面模式 (本地命令)
```

### `start`: 打包源代码, 并开启一个本地服务器预览

```
lila start                   # 单页面应用 (全局命令)
npx lila start               # 单页面应用 (本地命令)
lila start [entry]           # 多页面模式 (全局命令)
npx lila start [entry]       # 多页面模式 (本地命令)
```

### `analyze`: 查看当前 entry 的各个模块文件的大小

```
lila analyze                 # 单页面应用 (全局命令)
npx lila analyze             # 单页面应用 (本地命令)
lila analyze [entry]         # 多页面模式 (全局命令)
npx lila analyze [entry]     # 多页面模式 (本地命令)
```

## 项目

```
- src                        # 源文件目录
- .storybook                 # for storybook
- stories                    # for storybook
```

### 单页面应用目录结构

```
- src
  - index.html               # html 入口文件
  - index.js                 # js 入口文件

  - 其他文件与目录
```

### 多页面模式目录结构

```
- src
  - page1                    # entry: page1
    - index.html             # html 入口文件
    - index.js               # js 入口文件

    - 其他文件与目录

  - module1
    - page2                  # entry: module1/page2
      - index.html           # html 入口文件
      - index.js             # js 入口文件
```

每个 entry 都有一个单独的目录(目录为 `src/home/about/` 如果 entry 是 `home/about`), 也叫做工作空间, 在这个工作空间中至少有一个 `index.html` 文件和一个 `index.js` 文件.

## 自定义 webpack 配置

如果需要更改默认的 webpack 配置, 可以到 `scripts/lila-webpack-config` 修改.

## 外部引用

项目使用 [lila](https://github.com/senntyou/lila) 开发与构建. 如果想知道更多关于:

- 怎样配置 `lila.init.js`
- 怎样运行 `lila`
- `lila` 有哪些特性

可以到 [lila](https://github.com/senntyou/lila) 查看更多.

- [lila-bin](https://github.com/senntyou/lila/tree/master/packages/lila-bin): lila 命令行工具
- [lila-core](https://github.com/senntyou/lila/tree/master/packages/lila-core): lila 核心包
- [lila-tasks](https://github.com/senntyou/lila/tree/master/packages/lila-tasks): lila 内置的 tasks
- [lila-webpack](https://github.com/senntyou/lila/tree/master/packages/lila-webpack): 封装的 webpack 插件
