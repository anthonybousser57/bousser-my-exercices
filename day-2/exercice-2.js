export const my_display_multi_42 = (multi, int) => {
    if (typeof multi !== 'number' || typeof int !== 'number') {
      return false;
    }
  
    return multi * int === 42;
  }