import terser from '@rollup/plugin-terser'
import { glob } from 'glob'
import { defineConfig } from 'rolldown'

const isProd = process.env.NODE_ENV === 'production'
const pluginEntries = glob.sync('src/*/index.ts')

export default defineConfig([
  {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      file: 'dist/index.js',
    },
    plugins: [isProd && terser()],
  },
  {
    input: pluginEntries,
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
