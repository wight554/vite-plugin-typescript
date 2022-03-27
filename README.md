# vite-typescript-plugin

Thin wrapper for [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) that disables esbuild and watch mode for vitest.

## Requirements

This plugin requires `vite` and `@rollup/plugin-typescript` to be installed.
Also check [@rollup/plugin-typescript](https://github.com/rollup/plugins/blob/master/packages/typescript/README.md#requirements)

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

This plugins uses [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) options as is, you can check those [here](https://github.com/rollup/plugins/tree/master/packages/typescript#options).
