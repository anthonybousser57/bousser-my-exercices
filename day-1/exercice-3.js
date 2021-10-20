const my_alpha_one_digit = (digit) => String.fromCharCode(48 + digit)

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

export const my_alpha_number = (nbr) => {
    var minusCase = nbr >= 0 ? "": "-";
    nbr = nbr < 0 ? nbr * (-1) : nbr;
    var strNumber = "";
    do {
        let tmpDigit = nbr % 10;
        strNumber += my_alpha_one_digit(tmpDigit);
        nbr = Math.floor(nbr/10);
    } while (nbr != 0)
    return minusCase + reverseString(strNumber);
}