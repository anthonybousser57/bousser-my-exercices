export const my_string_is_number = (str) => {
    if (typeof str !== 'string') {
      return false;
    }
  
    let i = 0;
    let has_number = false;
    let has_dot = false;
    while (str[i] === ' ') {
      i++;
    }
  
    if (str[i] === '-' || str[i] === '+') {
      i++;
    }
  
    while (str[i] !== undefined) {
      if (!has_dot && (str[i] === ',' || str[i] === '.')) {
        has_dot = true;
      } else if (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57) {
        has_number = true;
      } else {
        if (!has_number) {
          return false;
        }
  
        while (str[i] === ' ') {
          i++;
        }
  
        if (str[i] !== undefined) {
          return false;
        }
  
        return true;
      }
      i++;
    }
  
    return has_number;
  }