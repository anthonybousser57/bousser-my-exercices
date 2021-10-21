export const my_array_alpha = (str) => {
    if (typeof str !== 'string') {
      return [];
    }
  
    let array = [];
    for (let i = 0; str[i] !== undefined; i++) {
        array =  [...array, str[i]]
    }
    return array;
  }