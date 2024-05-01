export function stripPass(obj: any) {
    if (typeof obj !== 'object') {
        return obj
    }
    const {password, ...rest} = obj
    return rest
}