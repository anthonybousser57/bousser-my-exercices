import {my_display_alpha} from "../day-1/exercice-1.js";

export const my_display_unicode = (arr) => {
    const ascii_A = 65;
    const ascii_a = 97;
    const ascii_0 = 48;
    const ascii_space = 32;
    const alpha = my_display_alpha();
    const alpha_upper = alpha.toUpperCase();
    let str = '';
    arr.forEach((code) => {
        if (code === ascii_space) {
            str += ' ';
        } else if (code >= ascii_0 && code <= ascii_0 + 9) {
            str += `${code - ascii_0}`
        } else if (code >= ascii_A && code <= ascii_A + 25) {
            str += alpha_upper[code - ascii_A];
        } else if (code >= ascii_a && code <= ascii_a + 25) {
            str += alpha[code - ascii_a];
        }
    });

    return str;
}