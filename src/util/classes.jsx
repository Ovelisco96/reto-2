export function className(...params) {
    return params.filter(Boolean).join(' ')
}