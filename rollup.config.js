import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';
import filesize from 'rollup-plugin-filesize';
import buble from 'rollup-plugin-buble';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
	{
		input: 'src/main.js',
		output: {
			name: 'theMovieDb',
			file: pkg.browser,
      format: 'umd',
      sourcemap: true
    },
		plugins: [
      includePaths({
        paths: ['./src']
      }),
      resolve({ browser: true }),
      commonjs(),
      buble({
        transforms: {
          asyncAwait: false,
          forOf: false,
        },
        objectAssign: 'Object.assign'
      }),
      terser(),
      filesize(),
    ]
	},
	{
		input: 'src/main.js',
		output: [
			{ file: pkg.main, format: 'cjs' }
    ],
    plugins: [
      includePaths({
        paths: ['./src']
      }),
      resolve(),
      commonjs(),
      filesize(),
    ]
	}
];
