export type ClassNames = string | Record<string, any> | string[] | object[]

export const classnames = (...args: ClassNames[]) => {
    const classes: string[] = []
    const length: number = args.length

    for (let index = 0; index < length; index++) {
        if (!args[index]) continue
        const current = args[index]

        if (typeof current === 'string') {
            classes.push(current)
        } else if (Array.isArray(current)) {
            if (current.length) {
                const inner = classnames.apply(null, current)
                if (inner) {
                    classes.push(inner)
                }
            }
        } else if (typeof current === 'object') {
            if (current.toString !== Object.prototype.toString) {
                classes.push(current.toString())
                continue
            }

            for (var key in current) {
                if (Object.prototype.hasOwnProperty.call(current, key) && current[key]) {
                    classes.push(key)
                }
            }
        }
    }

    return classes.join(' ')
}

export const classes = (...args: ClassNames[]) => classnames(...args)

type Attributes = React.HTMLAttributes<HTMLElement>;

export const mergeAttribute = (atributes: Attributes, initial: Attributes) => {
    return Object.assign(initial, atributes)
}
