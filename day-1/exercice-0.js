export const my_sum = (a, b) => {

    if (typeof a !== 'number' || typeof b !== 'number')
        return 0

    else if (typeof a !== 'undefined' || typeof b !== 'number')
        return 0

    else
        return a+b
}
console.log(my_sum())