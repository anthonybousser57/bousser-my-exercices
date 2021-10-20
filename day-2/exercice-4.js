export const my_display_comb = () => {
    const res = new Array(100 * 100).fill(0).map((_, index) => {
        const nb1 = Math.floor(index / 100);
        const nb2 = index - nb1 * 100;
        return `${nb1} ${nb2}`;
    });
    return res;
}