import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rolldown'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  input: 'src/index.ts',
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
})
