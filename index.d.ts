import type { RollupTypescriptOptions } from '@rollup/plugin-typescript';
import type { Plugin } from 'vite';

declare function typescript(options?: RollupTypescriptOptions): Plugin;

export default typescript;
