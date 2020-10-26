import commonjs    from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'

 
export default {
    input: 'plugin.js',
    output: {
        exports: 'default',
        file: 'plugin.cjs.js',
        format: 'cjs',
        sourcemap: false
    },
    plugins: [
        nodeResolve(),
        commonjs({
          include: /node_modules/
        })
    ]
}
