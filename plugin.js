import buildModule from 'substrate-build'
//import buildModule from 'https://cdn.skypack.dev/substrate-build'


export default function substrate () {
    return {
        name: 'substrate',

        transform (source, id) {
            if (!id.endsWith('.explorable.md'))
                return

            return {
                code: buildModule({ source }),
                map: { mappings: '' }
            }
        }
    }
}
