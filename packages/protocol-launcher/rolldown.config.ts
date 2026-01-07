import terser from '@rollup/plugin-terser'
import { defineConfig } from 'rolldown'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      file: 'dist/index.esm.js',
    },
    plugins: [isProd && terser()],
  },
  {
    input: ['src/cursor/index.ts', 'src/cherry-studio/index.ts'],
    output: {
      format: 'esm',
      dir: 'dist',
      sourcemap: !isProd,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [isProd && terser()],
  },
])
