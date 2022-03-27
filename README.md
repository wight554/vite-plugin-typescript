# vite-typescript-plugin

Thin wrapper for [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) that improves compatibility with Vite and Vitest.

## Background
Vitest is running in Vite serve mode which [makes](https://github.com/vitejs/vite/blob/47668b541989c4abd48a4b232654b4e33c795714/packages/vite/src/node/server/pluginContainer.ts#L159) all rollup plugins assume rollup is running in a [watch mode](https://rollupjs.org/guide/en/#-w--watch). In case of [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) it doesn't close program on build end when running in watch mode, Vitest triggers force close on timeout instead. This behavior is unsafe and may lead to unexpected issues, so main goal of this plugin is to disable watch mode when running in Vitest environment.

This plugin also disables esbuild for Vitest to be sure tests are compiled with type-safe compiler.

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

It's not recommended to use this plugin for front-end development using dev server as it doesn't work well HMR. Use esbuild or swc as an alternative.

You apply this plugin for build mode only by using Vite plugin [conditional application](https://vitejs.dev/guide/using-plugins.html#conditional-application):
```ts
// vite.config.ts
import typescript from 'vite-plugin-typescript';

export default defineConfig({
  plugins: [
    {
      ...typescript(),
      apply: 'build'
    }
  ]
})
```

If you want to use this plugin for compiling Vitest tests you can rely on `NODE_ENV` or `VITEST` environment variables:

```ts
// vite.config.ts
import typescript from 'vite-plugin-typescript';

const isTest = process.env.NODE_ENV === 'test'; // !!process.env.VITEST

export default {
  plugins: [isTest && typescript()]
};
```

## Options

This plugins uses [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) options as is. You can check them in plugin [README](https://github.com/rollup/plugins/tree/master/packages/typescript#options).
