/*Punto 1 */
function desglosarString(str, tipo) {
    const vocales = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
      if (tipo === 'vocales' && vocales.includes(char)) {
        count++;
      } else if (tipo === 'consonantes' && /[a-zA-Z]/.test(char) && !vocales.includes(char)) {
        count++;
      }
    }
  
    return count;
  }

  /*Punto2 */
  function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (map.has(complement)) {
        return [map.get(complement), i];
      }  
      map.set(nums[i], i);
    }
    return null; 
  }

  /*Punto 3 */
  function conversionRomana(roman) {
    const romanToInt = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    
    let total = 0;
    
    for (let i = 0; i < roman.length; i++) {
      const current = romanToInt[roman[i]];
      const next = romanToInt[roman[i + 1]];
      
      if (next && current < next) {
        total -= current;
      } else {
        total += current;
      }
    }
    
    return total;
  }


 