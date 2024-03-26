

function convertToRoman(num) {

  const romanNumerals = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  let roman = ""; 
  const numeralKeys = Object.keys(romanNumerals).reverse();
    
  numeralKeys.forEach(key => {
    while (key <= num) {
      roman += romanNumerals[key];
      num -= key;
    }
  });
 return roman;
}

   convertToRoman(36);
 
//Testing
// console.log(convertToRoman(36));
// console.log(convertToRoman(2));
// console.log(convertToRoman(3));
// console.log(convertToRoman(3999));







