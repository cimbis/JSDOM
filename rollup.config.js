import babel from 'rollup-plugin-babel';
import pkg from './package.json';


export default [
    // browser-friendly UMD build
    {
        input: 'src/MenuToggle.js',
        output: {
            name: 'MenuToggle',
            file: "dist/MenuToggle.umd.js",
            format: 'umd',
            exports: 'named'
        },
        plugins: [
            babel({
                exclude: ['node_modules/**']
            })
        ]
    },

    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // an array for the `output` option, where we can specify
    // `file` and `format` for each target)
    {
        input: 'src/MenuToggle.js',
        output: [
            {
                file: "dist/MenuToggle.cjs.js",
                exports: 'named',
                format: 'cjs'
            },
            {
                file: "dist/MenuToggle.esm.js",
                exports: 'named',
                format: 'es'
            }
        ],
        plugins: [
            babel({
                exclude: ['node_modules/**']
            })
        ]
    }
];
