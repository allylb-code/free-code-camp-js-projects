function rot13(str) {
    //split into an array
    let strArr = str.split("");
    let cipherArr = [];
    //alphabet plus 13 more letters (to loop through)
    let alphabet  = 
    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z', 'A','B','C','D','E','F','G','H','I','J','K','L','M'];

//first for loop. checks for anything not in alphabet array
    for(let i =0; i < strArr.length; i++){
        if (alphabet.indexOf(strArr[i]) === -1) {
            cipherArr.push(strArr[i]);
    //second loop checks where the letter is in alphabet and adds 13 to its value
        } else {
            for(let j = 0; j < alphabet.length; j++) {
                if (strArr[i] === alphabet[j]) {
                    cipherArr.push(alphabet[j +13]);
                }
            }
        }

    }
    //converts array back into a string and returns the value
    return cipherArr.join("");
  }

  rot13("SERR PBQR PNZC");

console.log(rot13("SERR PBQR PNZC"));

console.log(rot13("SERR CVMMN!"));


//other solutions:

// function rot13(str) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let newRot13Str = '';
  
//     for (let i = 0; i < str.length; i++) {
//       let letterIndex = alphabet.indexOf(str[i]);
//       if (letterIndex == -1) {
//         newRot13Str += str[i];
//       } else {
//         let newIndex = (letterIndex + 13) % 26;
//         newRot13Str += alphabet[newIndex];
//       }  
//     }
//     return newRot13Str;
//   }
  
//   rot13("SERR PBQR PNZC");

//   console.log(rot13("SERR CVMMN!"));




//accumulator
//   function rot13(str) {
//     let alphabet  = 
//     ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q',
//     'R','S','T','U','V','W','X','Y','Z'];

//     let newStr = '';

//     for(let i = 0; i < str.length; i++){
//         if (alphabet.includes(str[i]) === false ){
//             newStr += str[i];
//         } else {
//             const letterIndex = alphabet.findIndex((char) => char === str[i]);
//             newStr += alphabet[letterIndex + 13] || alphabet[letterIndex - 13];
//         }
//     }
//     return newStr;
//   }
  
//   rot13("SERR PBQR PNZC");

//   console.log(rot13("SERR CVMMN!"));

