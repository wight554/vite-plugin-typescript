const rollupTypescript = require('@rollup/plugin-typescript');

function typescript(options = {}) {
  return {
    ...rollupTypescript(options),
    name: 'vite-plugin-typescript',
    options() {
      this.meta.watchMode = !process.env.VITEST;

      return;
    },
    config() {
      return {
        esbuild: false,
      };
    },
  };
}

module.exports = typescript;
