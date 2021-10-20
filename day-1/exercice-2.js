import { my_display_alpha } from "./exercice-1.js";

export const my_display_alpha_reverse = () => {
    var str = my_display_alpha();
    var Reverse = "";
    for (var i = 0; i < 26; i++) {
        Reverse += str[25 - i];
    }
    return Reverse;
}