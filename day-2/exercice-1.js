export const my_alpha_reverse = (str) => {
    if (typeof str !== 'string') {
      return '';
    }
  
    let str_reverse = '';
    for (let i = str.length - 1; i >= 0; i--) {
      str_reverse += str[i];
    }
    return str_reverse;
  }