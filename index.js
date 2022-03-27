const rollupTypescript = require('@rollup/plugin-typescript');

const isVitest = !!process.env.VITEST;

function typescript(options = {}) {
  return {
    ...rollupTypescript(options),
    name: 'vite-plugin-typescript',
    options() {
      this.meta.watchMode = !isVitest;

      return;
    },
    config() {
      return {
        ...(isVitest && { esbuild: false }),
      };
    },
  };
}

module.exports = typescript;
