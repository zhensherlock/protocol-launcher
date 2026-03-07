import typescript from '@rollup/plugin-typescript'
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
      minify: isProd,
    },
    watch: {
      clearScreen: false,
    },
  },
  {
    input: 'src/index.ts',
    output: {
      format: 'iife',
      name: 'ProtocolLauncher',
      file: 'dist/index.browser.js',
      minify: isProd,
    },
    watch: {
      clearScreen: false,
    },
  },
  {
    input: pluginEntries,
    output: {
      format: 'esm',
      dir: 'dist',
      sourcemap: !isProd,
      minify: isProd,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    watch: {
      clearScreen: false,
    },
    plugins: [typescript()],
  },
])
