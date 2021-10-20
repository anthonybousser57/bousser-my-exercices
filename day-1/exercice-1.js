export const my_display_alpha = () => {
    var string= "";
    for (var i = 0; i < 26; i++) {
        string += String.fromCharCode(97 + i);
    }
    return string;
}