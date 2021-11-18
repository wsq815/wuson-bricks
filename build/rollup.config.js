import vuePlugin from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import typescript from 'rollup-plugin-typescript2'
import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`
const overrides = {
    compilerOptions: {
        declaration: true
    },
    include: ['src/App.vue']
}

export default {
    input: 'src/App.vue',
    output: {
        name,
        file: file('esm'),
        format: 'es'
    },
    plugins: [
        typescript({
            tsconfigOverride: overrides
        }),
        vuePlugin(),
        css({ output: 'bundle.css' })
    ]
}