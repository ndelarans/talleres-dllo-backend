/*Punto1*/
function findMax(numbers) {
    let max = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i]; 
        }
    }
  return max; 
}

/*Punto2*/
function includes(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return true;
        }
    }
    return false; 
}

/*Punto3*/
function sum(numbers) {
    let total = 0; 

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i]; 
    }
    return total; 
}

/*Punto4*/
function missingNumbers(nums) {
    const min = Math.min(...nums), max = Math.max(...nums);
    const missing = [];
    
    for (let i = min; i <= max; i++) {
        if (!nums.includes(i)) {
            missing.push(i);
        }
    }
    
    return missing;
}

