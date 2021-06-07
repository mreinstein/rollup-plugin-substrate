import substrateBuild from 'substrate-build'


export default function substrate () {
    return {
        name: 'substrate',

        transform (source, id) {
            if (!id.endsWith('.explorable.md'))
                return

            return {
                code: substrateBuild({ source }),
                map: { mappings: '' }
            }
        }
    }
}
