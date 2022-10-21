import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import { babel } from '@rollup/plugin-babel'

export default {
  input: 'src/index.jsx',
  output: {
    file: 'dist/bundle.js',
    // format: 'cjs',
    format: 'iife',
  },
  plugins: [
    process.env.NODE_ENV === 'development' &&
      serve({
        contentBase: 'dist',
        port: 3000,
      }),
    process.env.NODE_ENV === 'development' && livereload(),
    babel({ presets: ['@babel/preset-react'] }),
  ],
}