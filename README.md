# vite-typescript-plugin

Thin wrapper for [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) that improves compatibility with Vite and Vitest.

## Background
Vitest is running in Vite serve mode which [makes](https://github.com/vitejs/vite/blob/47668b541989c4abd48a4b232654b4e33c795714/packages/vite/src/node/server/pluginContainer.ts#L159) all rollup plugins assume rollup is running in a [watch mode](https://rollupjs.org/guide/en/#-w--watch). In case of [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) it doesn't close program on build end when running in watch mode, Vitest triggers force close on timeout instead. This behavior is unsafe and may lead to unexpected issues, so main goal of this plugin is to disable watch mode when running in Vitest environment.

This plugin is also designed to replace esbuild with type-safe compiler so esbuild is forcefully disabled.

## Requirements

This plugin requires `vite` and `@rollup/plugin-typescript` to be installed.

For more requirements check [@rollup/plugin-typescript](https://github.com/rollup/plugins/blob/master/packages/typescript/README.md#requirements).

## Install

Using npm:

```console
npm install --save-dev vite-plugin-typescript @rollup/plugin-typescript typescript tslib
```

Using yarn:

```console
yarn add --dev vite-plugin-typescript @rollup/plugin-typescript typescript tslib
```

## Usage

Add plugin to Vite config file.

```ts
// vite.config.ts
import typescript from 'vite-plugin-typescript';

export default {
  plugins: [typescript()]
};
```

## Options

This plugins uses [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) options as is. You can check them in plugin [README](https://github.com/rollup/plugins/tree/master/packages/typescript#options).
