export const my_display_combv2 = () => {
    let nb1 = 0;
    let nb2 = 1;
    let nb3 = 2;
    const length = 120;
    const res = new Array(length);
    for (let i = 0; i < length; i++) {
        res[i] = `${nb1} ${nb2} ${nb3}`;
        if (nb3 != 9) {
            nb3++
        } else if (nb2 != 8) {
            nb2++;
            nb3 = nb2 + 1;
        } else if (nb1 != 7) {
            nb1++;
            nb2 = nb1 + 1;
            nb3 = nb2 + 1;
        } else {
            break;
        }
    }
    return res;
}