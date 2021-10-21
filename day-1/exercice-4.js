export const my_size_alpha = (str) => {
    if (typeof(str) != "string")
        return 0;
    var i = 0;
    while (typeof(str[i]) == 'string')
        i++;
    return i;
}