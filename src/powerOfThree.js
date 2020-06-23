export const isPowerOfThree = num => {
    if (num >= 1) {
      let i = 0;
      while(3**i <= num) {
          if (3**i === num) {
              return true;
          }
          i++;
      }
    }
    return false;
}