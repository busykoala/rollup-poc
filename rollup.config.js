import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

// https://github.com/rollup/awesome
export default {
  plugins: [
    typescript(), // integrate with ts
    nodeResolve({ preferBuiltins: true }), // locates modules from node_modules
    commonjs(), // CommonJS -> ES
    json(), // json -> ES
    babel({ babelHelpers: 'bundled' }), // transpile
  ],
  input: 'src/index.ts',
  output: [
    { file: "dist/index.js", format: "cjs" },
    { file: "dist/index.min.js", format: "cjs", plugins: [
      terser() // minify
    ], },
    { file: "dist/index.esm.js", format: "esm" },
  ],
}
